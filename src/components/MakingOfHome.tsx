import React, { useEffect, useRef, useState, useId } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP plugins are registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ---------------------------------------------------------------------------
// Architectural Color Palette (Matched 1:1 with extracted Next.js source)
// ---------------------------------------------------------------------------
export const BLUEPRINT_COLORS = {
  bg: 0x0b1220, // Night background: #0b1220
  line: 0xe9e2d0, // Architectural blueprint cream line: #e9e2d0
  brass: 0xc9a96a, // Warm brass accent: #c9a96a
  glass: 0x86a9d6, // Translucent glass facade: #86a9d6
  light: 0xf3c77a, // Warm interior window glow: #f3c77a
} as const;

// ---------------------------------------------------------------------------
// Construction Stages Metadata
// ---------------------------------------------------------------------------
export interface BlueprintStage {
  name: string;
  line: [string, string];
  threshold: number;
}

export const BLUEPRINT_STAGES: BlueprintStage[] = [
  { name: "Land", line: ["It begins with", "open land."], threshold: 0 },
  { name: "Foundation", line: ["A grid is set,", "footings go in."], threshold: 0.2 },
  { name: "Frame", line: ["The frame rises,", "floor by floor."], threshold: 0.38 },
  { name: "Envelope", line: ["Glass and light", "close it in."], threshold: 0.64 },
  { name: "Home", line: ["A building becomes", "a home."], threshold: 0.82 },
];

const STAGE_THRESHOLDS = BLUEPRINT_STAGES.map((s) => s.threshold);

// ---------------------------------------------------------------------------
// Mathematical Helpers
// ---------------------------------------------------------------------------
const clamp = (val: number, min = 0, max = 1): number =>
  Math.min(max, Math.max(min, val));

// Ease-out cubic formula used for element visibility and vertical rises
const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

// Mulberry32 deterministic pseudo-random number generator (Seed: 1998, CP founding year)
function createMulberry32(seed = 1998) {
  let s = seed;
  return (): number => {
    let t = Math.imul((s = (s + 0x6d2b79f5) | 0) ^ (s >>> 15), 1 | s);
    return (
      (((t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t) ^ (t >>> 14)) >>> 0) /
      0x100000000
    );
  };
}

// ---------------------------------------------------------------------------
// Camera Orbital Keyframes & Pathing
// ---------------------------------------------------------------------------
interface CameraKeyframe {
  p: number; // Scroll progress breakpoint (0.0 -> 1.0)
  rad: number; // Camera orbital radius (distance from target)
  elev: number; // Elevation angle in degrees
  az: number; // Azimuth angle in degrees
  ty: number; // Target LookAt Y elevation
}

const CAMERA_KEYFRAMES: CameraKeyframe[] = [
  { p: 0.0, rad: 125, elev: 66, az: -35, ty: 0 },
  { p: 0.3, rad: 100, elev: 44, az: -5, ty: 5 },
  { p: 0.6, rad: 98, elev: 24, az: 40, ty: 15 },
  { p: 0.8, rad: 96, elev: 13, az: 85, ty: 17 },
  { p: 1.0, rad: 108, elev: 9, az: 128, ty: 17 },
];

interface AnimatedSceneItem {
  obj: THREE.Object3D;
  mats: (THREE.Material | THREE.LineBasicMaterial | THREE.MeshBasicMaterial)[];
  base: number; // Base opacity
  t: number; // Start progress threshold
  dur: number; // Transition duration in progress units
  y0: number; // Initial local Y position
  rise?: number; // Optional vertical displacement offset
  grow?: boolean; // Optional Y-scale growth from 0.001 to 1.0
  fadeOut?: number; // Optional progress point where object fades out
}

export interface BlueprintController {
  setProgress: (progress: number) => void;
  setDrift: (driftDegrees: number) => void;
  resize: () => void;
  render: () => void;
  dispose: () => void;
}

/**
 * Creates the complete Three.js architectural wireframe building scene.
 * Faithfully decodes the procedural geometry, construction stages, materials, and camera flight.
 */
export function createBlueprint(canvas: HTMLCanvasElement): BlueprintController {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(BLUEPRINT_COLORS.bg, 1);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(BLUEPRINT_COLORS.bg, 70, 260);

  const camera = new THREE.PerspectiveCamera(34, 1, 0.5, 600);
  const animatedItems: AnimatedSceneItem[] = [];
  const rng = createMulberry32(1998);

  // Line basic material factory
  const createLineMat = (color: number = BLUEPRINT_COLORS.line) =>
    new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });

  // Scene registration helper
  const registerItem = (
    obj: THREE.Object3D,
    mats: THREE.Material[],
    baseOpacity: number,
    startTime: number,
    duration = 0.06,
    options: { rise?: number; grow?: boolean; fadeOut?: number } = {}
  ) => {
    mats.forEach((m) => (m.opacity = 0));
    obj.visible = false;
    scene.add(obj);
    animatedItems.push({
      obj,
      mats,
      base: baseOpacity,
      t: startTime,
      dur: duration,
      y0: obj.position.y,
      ...options,
    });
  };

  // Wireframe box constructor helper
  const createBoxWireframe = (
    width: number,
    height: number,
    depth: number,
    material: THREE.LineBasicMaterial
  ) =>
    new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(width, height, depth)),
      material
    );

  // Buffer lines from vertex array helper
  const createLineSegmentsFromCoords = (
    coords: number[],
    material: THREE.LineBasicMaterial
  ) => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(coords, 3)
    );
    return new THREE.LineSegments(geom, material);
  };

  // =========================================================================
  // STAGE 1: LAND & SITE BLUEPRINT GRID (t = 0.00 .. 0.18)
  // =========================================================================
  {
    // 1. Site ground grid: 57 lines along Z, 57 lines along X from -140 to 140
    const gridCoords: number[] = [];
    for (let pos = -140; pos <= 140; pos += 5) {
      gridCoords.push(pos, 0, -140, pos, 0, 140);
    }
    for (let pos = -140; pos <= 140; pos += 5) {
      gridCoords.push(-140, 0, pos, 140, 0, pos);
    }
    const matGrid = createLineMat(BLUEPRINT_COLORS.line);
    registerItem(
      createLineSegmentsFromCoords(gridCoords, matGrid),
      [matGrid],
      0.1,
      0.0,
      0.08
    );

    // 2. Plot boundary rectangle in warm brass: (-34, -26) to (34, 26)
    const matPlot = createLineMat(BLUEPRINT_COLORS.brass);
    const plotCoords = [
      -34, 0.05, -26, 34, 0.05, -26,
      34, 0.05, -26, 34, 0.05, 26,
      34, 0.05, 26, -34, 0.05, 26,
      -34, 0.05, 26, -34, 0.05, -26,
    ];
    registerItem(
      createLineSegmentsFromCoords(plotCoords, matPlot),
      [matPlot],
      0.9,
      0.04,
      0.08
    );

    // 3. Four corner survey markers (vertical brass posts rising from 0 to 3m)
    const matCorners = createLineMat(BLUEPRINT_COLORS.brass);
    const cornerCoords: number[] = [];
    [
      [-34, -26],
      [34, -26],
      [34, 26],
      [-34, 26],
    ].forEach(([x, z]) => {
      cornerCoords.push(x, 0, z, x, 3, z);
    });
    registerItem(
      createLineSegmentsFromCoords(cornerCoords, matCorners),
      [matCorners],
      0.9,
      0.1,
      0.05,
      { grow: true }
    );

    // 4. Site street access lines at z = 36 and z = 46
    const matStreet = createLineMat(BLUEPRINT_COLORS.line);
    registerItem(
      createLineSegmentsFromCoords(
        [-140, 0.02, 36, 140, 0.02, 36, -140, 0.02, 46, 140, 0.02, 46],
        matStreet
      ),
      [matStreet],
      0.35,
      0.08,
      0.08
    );
  }

  // Structural column grid spacing (5 X bays x 3 Z bays = 15 columns)
  const colGridX = [-13, -6.5, 0, 6.5, 13];
  const colGridZ = [-8, 0, 8];

  // =========================================================================
  // STAGE 2: FOUNDATION & EXCAVATION & TOWER CRANE (t = 0.19 .. 0.35)
  // =========================================================================
  {
    // 1. Excavation Pit wireframe box: 30m x 1.2m x 20m, sinking into ground
    const matPit = createLineMat();
    const pitBox = createBoxWireframe(30, 1.2, 20, matPit);
    pitBox.position.y = -0.6;
    registerItem(pitBox, [matPit], 0.75, 0.19, 0.06, { rise: -3 });

    // 2. Foundation footing layout lines (Brass grid)
    const matFootingGrid = createLineMat(BLUEPRINT_COLORS.brass);
    const footingGridCoords: number[] = [];
    colGridX.forEach((x) =>
      footingGridCoords.push(x, 0.06, -22, x, 0.06, 22)
    );
    colGridZ.forEach((z) =>
      footingGridCoords.push(-28, 0.06, z, 28, 0.06, z)
    );
    registerItem(
      createLineSegmentsFromCoords(footingGridCoords, matFootingGrid),
      [matFootingGrid],
      0.45,
      0.22,
      0.07
    );

    // 3. 15 Starter column footings / rebar stubs (y = 0 to 1.6m)
    const matStubs = createLineMat();
    const stubCoords: number[] = [];
    colGridX.forEach((x) =>
      colGridZ.forEach((z) => stubCoords.push(x, 0, z, x, 1.6, z))
    );
    registerItem(
      createLineSegmentsFromCoords(stubCoords, matStubs),
      [matStubs],
      0.9,
      0.27,
      0.06,
      { grow: true }
    );

    // 4. Construction tower crane (Brass wireframe structure with mast, jib, cables)
    const matCrane = createLineMat(BLUEPRINT_COLORS.brass);
    const craneCoords: number[] = [
      // 4 mast vertical legs (height 46m)
      23, 0, -15, 23, 46, -15,
      25, 0, -13, 25, 46, -13,
      23, 0, -13, 23, 46, -13,
      25, 0, -15, 25, 46, -15,
    ];
    // Lattice diagonal cross-braces every 3m
    for (let h = 0; h < 46; h += 3) {
      craneCoords.push(23, h, -15, 25, h + 3, -13);
    }
    // Crane jib arm, counter-jib, apex cables, and hook hoist line
    craneCoords.push(
      24, 46, -14, -10, 46, -4, // Main jib arm
      24, 47.5, -14, 34, 46, -17, // Counter jib
      24, 51, -14, -10, 46, -4, // Apex front cable
      24, 51, -14, 34, 46, -17, // Apex rear counter-cable
      4, 46, -8, 4, 32, -8 // Hoist cable and hook
    );
    registerItem(
      createLineSegmentsFromCoords(craneCoords, matCrane),
      [matCrane],
      0.5,
      0.3,
      0.08,
      { grow: true, fadeOut: 0.82 }
    );
  }

  // =========================================================================
  // STAGE 3: FRAME - 10 FLOORS OF CONCRETE SLABS & COLUMNS (t = 0.36 .. 0.61)
  // =========================================================================
  for (let floor = 0; floor < 10; floor++) {
    const floorY = (floor + 1) * 3.3;
    const tStart = 0.36 + (floor / 10) * 0.24;

    // Floor slab wireframe box (27.2m x 0.35m x 17.2m) rising into place
    const matSlab = createLineMat();
    const slabBox = createBoxWireframe(27.2, 0.35, 17.2, matSlab);
    slabBox.position.y = floorY;
    registerItem(slabBox, [matSlab], 0.95, tStart, 0.035, { rise: 2.5 });

    // 15 Vertical Columns per floor (height 3.3m)
    const matCols = createLineMat();
    const colCoords: number[] = [];
    colGridX.forEach((x) =>
      colGridZ.forEach((z) => colCoords.push(x, 0, z, x, 3.3, z))
    );
    const colsGroup = createLineSegmentsFromCoords(colCoords, matCols);
    colsGroup.position.y = 3.3 * floor;
    registerItem(colsGroup, [matCols], 0.8, tStart - 0.01, 0.03, { grow: true });
  }

  // Rooftop crown & pergola louvers
  {
    // Parapet / mechanical penthouse crown box (16m x 3.6m x 10m at y = 34.8m)
    const matRoof = createLineMat();
    const roofBox = createBoxWireframe(16, 3.6, 10, matRoof);
    roofBox.position.y = 34.8;
    registerItem(roofBox, [matRoof], 0.9, 0.61, 0.04, { rise: 2 });

    // Architectural pergola louvers along rooftop terrace
    const matLouvers = createLineMat();
    const louverCoords: number[] = [];
    for (let x = -8; x <= 8; x += 1.6) {
      louverCoords.push(x, 36.8, -5, x, 36.8, 5);
    }
    registerItem(
      createLineSegmentsFromCoords(louverCoords, matLouvers),
      [matLouvers],
      0.5,
      0.66,
      0.05
    );
  }

  // =========================================================================
  // STAGE 4: ENVELOPE - GLASS FACADE & MULLIONS (t = 0.62 .. 0.79)
  // =========================================================================
  const createGlassMat = () =>
    new THREE.MeshBasicMaterial({
      color: BLUEPRINT_COLORS.glass,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

  for (let floor = 0; floor < 10; floor++) {
    const floorCenterY = 3.3 * floor + 1.65 + 0.2;
    const tStart = 0.62 + (floor / 10) * 0.15;

    // Window mullions (vertical dividers every 1.6m on all four perimeter facades)
    const matMullions = createLineMat();
    const mullionCoords: number[] = [];
    for (let x = -11.4; x < 13; x += 1.6) {
      mullionCoords.push(
        x, 3.3 * floor + 0.4, 8, x, (floor + 1) * 3.3 - 0.2, 8, // Front facade
        x, 3.3 * floor + 0.4, -8, x, (floor + 1) * 3.3 - 0.2, -8 // Rear facade
      );
    }
    for (let z = -6.4; z < 8; z += 1.6) {
      mullionCoords.push(
        13, 3.3 * floor + 0.4, z, 13, (floor + 1) * 3.3 - 0.2, z, // Right facade
        -13, 3.3 * floor + 0.4, z, -13, (floor + 1) * 3.3 - 0.2, z // Left facade
      );
    }
    registerItem(
      createLineSegmentsFromCoords(mullionCoords, matMullions),
      [matMullions],
      0.42,
      tStart,
      0.04
    );

    // Glass curtain wall panels (semi-transparent turquoise/blue plane meshes)
    const matGlass = createGlassMat();
    const floorGlassGroup = new THREE.Group();

    // Front wall plane (26m x 2.7m)
    const frontGlass = new THREE.Mesh(
      new THREE.PlaneGeometry(26, 3.3 - 0.6),
      matGlass
    );
    frontGlass.position.set(0, floorCenterY, 8);
    floorGlassGroup.add(frontGlass);

    // Back wall plane
    const backGlass = frontGlass.clone();
    backGlass.position.z = -8;
    floorGlassGroup.add(backGlass);

    // Right wall plane (16m x 2.7m rotated 90 deg)
    const rightGlass = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 3.3 - 0.6),
      matGlass
    );
    rightGlass.rotation.y = Math.PI / 2;
    rightGlass.position.set(13, floorCenterY, 0);
    floorGlassGroup.add(rightGlass);

    // Left wall plane
    const leftGlass = rightGlass.clone();
    leftGlass.position.x = -13;
    floorGlassGroup.add(leftGlass);

    registerItem(
      floorGlassGroup,
      [matGlass],
      0.14,
      tStart + 0.01,
      0.05
    );

    // Cantilevered private balconies on alternating floors (1, 3, 5, 7, 9)
    if (floor > 0 && floor % 2 === 1) {
      const matBalcony = createLineMat();
      const balcony = createBoxWireframe(20, 1.1, 1.8, matBalcony);
      balcony.position.set(0, 3.3 * floor + 0.55, 8.9);
      registerItem(balcony, [matBalcony], 0.7, tStart + 0.015, 0.04);
    }
  }

  // =========================================================================
  // STAGE 5: HOME - LIGHTS, TREES & NEIGHBORHOOD CONTEXT (t = 0.80 .. 1.00)
  // =========================================================================
  {
    // 1. Warm interior illuminated window panes with additive blending
    const matLight = new THREE.MeshBasicMaterial({
      color: BLUEPRINT_COLORS.light,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const lightsGroup = new THREE.Group();

    for (let floor = 0; floor < 10; floor++) {
      // Front and rear illuminated windows
      for (let x = -12.2; x < 12.2; x += 3.2) {
        if (rng() > 0.45) {
          const winFront = new THREE.Mesh(
            new THREE.PlaneGeometry(2.2, 1.9),
            matLight
          );
          winFront.position.set(x + 0.8, 3.3 * floor + 1.65 + 0.2, 8.05);
          lightsGroup.add(winFront);

          if (rng() < 0.5) {
            const winBack = winFront.clone();
            winBack.position.z = -8.05;
            lightsGroup.add(winBack);
          }
        }
      }
      // Side illuminated windows
      for (let z = -7.2; z < 7.2; z += 3.2) {
        if (rng() > 0.5) {
          const winSide = new THREE.Mesh(
            new THREE.PlaneGeometry(2.6, 3.3 - 1.2),
            matLight
          );
          winSide.rotation.y = Math.PI / 2;
          winSide.position.set(13.05, 3.3 * floor + 1.65 + 0.2, z + 0.8);
          lightsGroup.add(winSide);
        }
      }
    }
    registerItem(lightsGroup, [matLight], 0.42, 0.84, 0.1);

    // 2. Surrounding neighborhood building wireframe volumes [x, z, w, d, h]
    const matNeighborhood = createLineMat();
    const neighborhoodGroup = new THREE.Group();
    const neighborBoxes: [number, number, number, number, number][] = [
      [-70, -40, 20, 14, 18],
      [-62, 30, 16, 22, 10],
      [64, -46, 24, 16, 26],
      [78, 20, 18, 18, 14],
      [-20, -78, 30, 20, 22],
      [30, 80, 26, 14, 8],
      [-96, -6, 14, 26, 12],
      [100, -10, 16, 20, 30],
    ];
    neighborBoxes.forEach(([x, z, w, d, h]) => {
      const b = createBoxWireframe(w, h, d, matNeighborhood);
      b.position.set(x, h / 2, z);
      neighborhoodGroup.add(b);
    });
    registerItem(neighborhoodGroup, [matNeighborhood], 0.22, 0.8, 0.12);

    // 3. 16 Stylized architectural perimeter trees with faceted icosahedron wireframe crowns
    const matTrees = createLineMat(BLUEPRINT_COLORS.brass);
    const treesGroup = new THREE.Group();
    const crownGeom = new THREE.EdgesGeometry(
      new THREE.IcosahedronGeometry(1.8, 0)
    );

    for (let i = 0; i < 16; i++) {
      const side = i % 4;
      const frac = (Math.floor(i / 4) + 0.5) / 4;
      const posX = side < 2 ? -30 + 60 * frac : side === 2 ? -31 : 31;
      const posZ = side === 0 ? 23 : side === 1 ? -23 : -20 + 40 * frac;

      // Crown
      const crown = new THREE.LineSegments(crownGeom, matTrees);
      crown.position.set(posX, 3.2 + rng(), posZ);
      crown.rotation.set(3 * rng(), 3 * rng(), 0);
      treesGroup.add(crown);

      // Trunk
      const trunk = createLineSegmentsFromCoords(
        [posX, 0, posZ, posX, 2.2, posZ],
        matTrees
      );
      treesGroup.add(trunk);
    }
    registerItem(treesGroup, [matTrees], 0.75, 0.86, 0.08);
  }

  // =========================================================================
  // CAMERA ANIMATION & INTERPOLATION LOGIC
  // =========================================================================
  let currentProgress = 0;
  let currentDrift = 0;
  let aspect = 1;

  function updateCamera(progress: number, driftDegrees: number) {
    let kfA = CAMERA_KEYFRAMES[0];
    let kfB = CAMERA_KEYFRAMES[CAMERA_KEYFRAMES.length - 1];

    for (let i = 0; i < CAMERA_KEYFRAMES.length - 1; i++) {
      if (progress >= CAMERA_KEYFRAMES[i].p && progress <= CAMERA_KEYFRAMES[i + 1].p) {
        kfA = CAMERA_KEYFRAMES[i];
        kfB = CAMERA_KEYFRAMES[i + 1];
        break;
      }
    }

    // Cubic Hermite smoothstep interpolation
    const segmentSpan = kfB.p - kfA.p || 1;
    const localProgress = clamp((progress - kfA.p) / segmentSpan);
    const smoothStep = localProgress * localProgress * (3 - 2 * localProgress);
    const lerp = (a: number, b: number) => a + (b - a) * smoothStep;

    // Aspect ratio compensation factor (widens framing on narrow/portrait displays)
    const aspectComp = aspect < 1 ? 1.55 : aspect < 1.3 ? 1.2 : 1;
    const radius = lerp(kfA.rad, kfB.rad) * aspectComp;
    const elevRad = THREE.MathUtils.degToRad(lerp(kfA.elev, kfB.elev));
    const azRad = THREE.MathUtils.degToRad(lerp(kfA.az, kfB.az) + driftDegrees);
    const targetY = lerp(kfA.ty, kfB.ty);

    camera.position.set(
      Math.sin(azRad) * Math.cos(elevRad) * radius,
      targetY + Math.sin(elevRad) * radius,
      Math.cos(azRad) * Math.cos(elevRad) * radius
    );
    camera.lookAt(0, targetY, 0);
  }

  return {
    setProgress(val: number) {
      currentProgress = clamp(val);
      for (const item of animatedItems) {
        const localT = clamp((currentProgress - item.t) / item.dur);
        const ease = easeOutCubic(localT);
        const fade =
          item.fadeOut !== undefined
            ? 1 - clamp((currentProgress - item.fadeOut) / 0.06)
            : 1;
        const opacity = item.base * ease * fade;

        item.obj.visible = opacity > 0.002;
        item.mats.forEach((m) => (m.opacity = opacity));

        if (item.rise !== undefined) {
          item.obj.position.y = item.y0 + item.rise * (1 - ease);
        }
        if (item.grow) {
          item.obj.scale.y = Math.max(0.001, ease);
        }
      }
    },

    setDrift(degrees: number) {
      currentDrift = degrees;
    },

    resize() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;

      aspect = w / h;
      renderer.setSize(w, h, false);
      camera.aspect = aspect;

      // Asymmetric viewport offset to allow typographic breathing room
      if (aspect > 1.2) {
        // Desktop: shift the building rightwards (-0.17 * w) so text on left is clear
        camera.setViewOffset(w, h, -(0.17 * w), 0, w, h);
      } else {
        // Mobile / Tablet: shift building upwards (0.14 * h) so text sits comfortably below
        camera.setViewOffset(w, h, 0, 0.14 * h, w, h);
      }
      camera.updateProjectionMatrix();
    },

    render() {
      updateCamera(currentProgress, currentDrift);
      renderer.render(scene, camera);
    },

    dispose() {
      scene.traverse((child) => {
        if ("geometry" in child && (child as THREE.Mesh).geometry) {
          (child as THREE.Mesh).geometry.dispose();
        }
        if ("material" in child && (child as THREE.Mesh).material) {
          const mat = (child as THREE.Mesh).material;
          if (Array.isArray(mat)) {
            mat.forEach((m) => m.dispose());
          } else if (mat) {
            mat.dispose();
          }
        }
      });
      renderer.dispose();
    },
  };
}

// ---------------------------------------------------------------------------
// React Component: MakingOfHome (BlueprintScroll)
// ---------------------------------------------------------------------------
export interface MakingOfHomeProps {
  title?: string;
  className?: string;
}

export const MakingOfHome: React.FC<MakingOfHomeProps> = ({
  title = "The making of a home",
  className = "",
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const titleId = useId();

  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    // Detect prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let blueprint: BlueprintController | null = null;
    let scrollTriggerInstance: globalThis.ScrollTrigger | null = null;
    let rafId = 0;
    let isIntersecting = false;
    let isUnmounted = false;
    let currentNormProgress = prefersReducedMotion ? 1 : 0;
    const startTime = performance.now();

    // Active stage updater helper
    const updateActiveStage = (progress: number) => {
      const activeIdx =
        STAGE_THRESHOLDS.filter((thresh) => progress >= thresh).length - 1;
      setActiveStageIndex(Math.max(0, activeIdx));
      setScrollProgress(progress);
    };

    // Animation frame loop for idle drift and camera rendering
    const tick = () => {
      rafId = 0;
      if (!blueprint || !isIntersecting || isUnmounted) return;

      const elapsed = (performance.now() - startTime) / 1000;
      // Oscillate by +/- 2.5 degrees over a ~25 second period
      const drift = prefersReducedMotion ? 0 : 2.5 * Math.sin(0.25 * elapsed);

      blueprint.setDrift(drift);
      blueprint.render();

      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const requestRender = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(tick);
      }
    };

    // IntersectionObserver to lazily instantiate WebGL only when approaching viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && !blueprint) {
          try {
            blueprint = createBlueprint(canvas);
            section.dataset.webgl = "on";
            blueprint.resize();
            blueprint.setProgress(currentNormProgress);
            setIsWebGLSupported(true);
          } catch (err) {
            console.error("WebGL Blueprint failed initialization:", err);
            section.dataset.webgl = "off";
            setIsWebGLSupported(false);
            return;
          }
        }
        if (isIntersecting) {
          requestRender();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(section);

    // Window resize handler
    const handleResize = () => {
      blueprint?.resize();
      requestRender();
    };
    window.addEventListener("resize", handleResize);

    // Initialize GSAP ScrollTrigger timeline if not prefers-reduced-motion
    if (!prefersReducedMotion) {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${Math.round(2.6 * window.innerHeight)}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          currentNormProgress = self.progress;
          blueprint?.setProgress(currentNormProgress);
          updateActiveStage(currentNormProgress);
          requestRender();
        },
      });
    }

    updateActiveStage(currentNormProgress);

    return () => {
      isUnmounted = true;
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      scrollTriggerInstance?.kill();
      blueprint?.dispose();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby={titleId}
      className={`theme-night relative h-[100dvh] min-h-[560px] overflow-hidden bg-[#0b1220] ${className}`}
      data-webgl={isWebGLSupported ? "on" : "off"}
    >
      <h2 id={titleId} className="sr-only">
        {title}
      </h2>
      <p className="sr-only">
        A 3D architectural wireframe assembles as you scroll: a site grid and
        plot boundary, foundations and a column grid, a concrete frame rising
        floor by floor, glass and mullions, and finally a finished, lit building
        among trees, while the camera flies down and around it.
      </p>

      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />

      {/* Radial vignette overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(11,18,32,0.75)_100%)]"
      />

      {/* Bottom atmospheric gradient fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b1220]/90 to-transparent"
      />

      {/* Foreground Editorial UI Overlay */}
      <div className="pointer-events-none relative mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pb-24 pt-28 sm:px-10 sm:pb-12 lg:px-16 lg:pb-14">
        {/* Section Pill / Micro-tag */}
        <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[#d8c08a]">
          ({title})
        </p>

        {/* Dynamic Stage Copy Cards & Timeline Rail */}
        <div>
          {/* Main Display Headline with animated cross-fades */}
          <div className="relative min-h-[2.3em] font-serif text-[clamp(2.2rem,1.2rem+4vw,5.25rem)] leading-[1.04]">
            {BLUEPRINT_STAGES.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              return (
                <p
                  key={stage.name}
                  data-line
                  data-active={isActive}
                  className={`absolute inset-x-0 bottom-0 text-[#f4eee2] transition-[opacity,transform] duration-700 ease-out ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0 pointer-events-none"
                  }`}
                >
                  {stage.line[0]}
                  <br />
                  <em className="italic text-[#d8c08a]">{stage.line[1]}</em>
                </p>
              );
            })}
          </div>

          {/* Stepper Navigation & Smooth Gold Rail */}
          <div className="mt-8 flex items-center gap-6 lg:mt-10">
            <ol className="flex flex-wrap gap-x-5 gap-y-1 text-[11px] font-medium uppercase tracking-[0.18em]">
              {BLUEPRINT_STAGES.map((stage, idx) => {
                const isActive = idx === activeStageIndex;
                return (
                  <li
                    key={stage.name}
                    data-name
                    data-active={isActive}
                    className={`transition-colors duration-500 max-sm:hidden ${
                      isActive
                        ? "text-[#f4eee2] max-sm:inline font-semibold"
                        : "text-[#f4eee2]/35"
                    }`}
                  >
                    {stage.name}
                  </li>
                );
              })}
            </ol>

            {/* Continuous Progress Bar Rail */}
            <div
              aria-hidden="true"
              className="h-px flex-1 bg-[#f4eee2]/15 max-sm:hidden"
            >
              <span
                data-rail
                className="block h-px origin-left bg-[#b89a5e] transition-transform duration-75 ease-out"
                style={{ transform: `scaleX(${scrollProgress})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakingOfHome;
