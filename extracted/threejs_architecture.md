# Reverse Engineering Report: 3D Scroll-Driven Architectural Construction ("The Making of a Home")

## 1. Executive Summary

This report delivers a complete, forensic reverse engineering of the interactive 3D blueprint building construction experience titled **"The Making of a Home"** extracted from the CP Real Estate production Next.js bundle (`page-03b440da0cd9caa9.js`, chunk `718.e9d56ac91cab13fb.js`, chunk `bd904a5c.bfa4cb393b7a3660.js`, and chunk `b536a0f1.40aa06be949fdcbe.js`).

The experience is a high-performance, scroll-scrubbed procedural WebGL architectural visualization that unfolds across 5 distinct stages over a pinned 260vh scroll container. As the visitor scrolls, an open surveyor's blueprint grid transforms into an excavated foundation pit, a 10-story concrete frame rises floor-by-floor with an active tower crane, glass curtain walls and mullions enclose the building, and finally warm glowing interior lights, neighborhood context volumes, and faceted brass landscaping trees illuminate the completed residence.

---

## 2. Technology Stack & Component Architecture

### 2.1 Pure Three.js vs React Three Fiber (R3F)
- **Renderer**: Pure **Three.js** (`WebGLRenderer`) dynamically instantiated on an HTML5 `<canvas>` element inside a standard React functional component.
- **Why Pure Three.js was chosen over R3F**:
  1. **Lazy Dynamic Bundle Loading**: Chunk `718.js` (which contains `createBlueprint`) is asynchronously fetched only when the section approaches the viewport via an `IntersectionObserver` (`rootMargin: "400px 0px"`).
  2. **Direct GPU Memory Control**: Immediate low-level disposal of geometries, materials, and WebGL contexts without React reconciliation or fiber tree diffing overhead.
  3. **Scroll Scrubbing Efficiency**: Direct property mutation (`material.opacity`, `object.position.y`, `object.scale.y`, `camera.position`, `camera.lookAt`) driven by GSAP ScrollTrigger's `onUpdate` callback at 60–120 FPS without re-rendering the React DOM tree.

### 2.2 Component & Webpack Chunk Mapping
| Component / Module | Webpack ID | Chunk File | Purpose |
|---|---|---|---|
| `BlueprintScroll` | `87597` | `page-03b440da0cd9caa9.js` | React wrapper, GSAP ScrollTrigger pinning, IntersectionObserver, stage UI overlay |
| `createBlueprint` | `24718` | `718.e9d56ac91cab13fb.js` | 3D scene builder, procedural geometry generator, camera animator, render loop |
| Three.js Core | `97650` | `bd904a5c.bfa4cb393b7a3660.js` | Three.js scene graph, geometries, materials, math utilities |
| WebGLRenderer | `29625` | `b536a0f1.40aa06be949fdcbe.js` | Three.js WebGL backend renderer |
| GSAP ScrollTrigger | `31623` | `776-53afe7555008d3c9.js` | GSAP plugin registration & scroll synchronization |
| Reduced Motion | `6318` | `776-53afe7555008d3c9.js` | `window.matchMedia("(prefers-reduced-motion: reduce)").matches` detector |

---

## 3. Visual & Material Specification

### 3.1 Color Palette
The architectural palette strictly reflects the brand identity (verified against `:root` in `25a6deac18c12061.css`):
```typescript
export const BLUEPRINT_COLORS = {
  bg: 0x0b1220,    // Night background: #0b1220 (rgb(11, 18, 32))
  line: 0xe9e2d0,  // Off-white architectural blueprint lines: #e9e2d0
  brass: 0xc9a96a, // Warm metallic brass accents: #c9a96a
  glass: 0x86a9d6, // Translucent azure curtain-wall glass: #86a9d6 (8825302)
  light: 0xf3c77a, // Warm illuminated interior window glow: #f3c77a
};
```

### 3.2 Lighting, Fog & Shading
- **Lighting**: No dynamic standard PBR lights (`DirectionalLight` or `PointLight`) are used. To achieve ultra-crisp architectural drafting visuals with zero shadow-map overhead, the scene uses unlit `LineBasicMaterial` and `MeshBasicMaterial`.
- **Atmospheric Fog**: Linear fog matching the night background color:
  ```javascript
  scene.fog = new THREE.Fog(BLUEPRINT_COLORS.bg, 70, 260);
  ```
  Objects beyond 70 units gently fade into `#0b1220`, reaching full obscurity at 260 units.
- **Blending Mode**: Interior glowing windows utilize `THREE.AdditiveBlending` with `depthWrite: false` so multiple illuminated windows and overlapping facades produce an authentic photographic bloom effect.

---

## 4. The 5 Construction Stages & 3D Procedural Geometries

The entire building is animated along a normalized scroll progress $v \in [0.0, 1.0]$. The 5 primary stages are defined with the following progress thresholds and typographic copy:

| Stage # | Stage Name | Threshold | Headline Line 1 | Headline Line 2 (Italic Brass) |
|---|---|---|---|---|
| **01** | **Land** | `0.00` | "It begins with" | *"open land."* |
| **02** | **Foundation** | `0.20` | "A grid is set," | *"footings go in."* |
| **03** | **Frame** | `0.38` | "The frame rises," | *"floor by floor."* |
| **04** | **Envelope** | `0.64` | "Glass and light" | *"close it in."* |
| **05** | **Home** | `0.82` | "A building becomes" | *"a home."* |

---

### Detailed Stage Breakdown & Procedural Formulas

#### Stage 1: Land (`t = 0.00 .. 0.18`)
1. **Site Blueprint Grid**:
   - Spans from $-140$ to $+140$ along both X and Z axes with $5\text{m}$ grid intervals.
   - 57 lines along Z, 57 lines along X (total 114 line segments, 228 vertices).
   - Material: `LineBasicMaterial({ color: 0xe9e2d0, opacity: 0.1, transparent: true, depthWrite: false })`.
   - Appearance: $t = 0.00$, $\text{dur} = 0.08$.
2. **Brass Plot Boundary**:
   - Rectangular boundary enclosing the active plot: corners at $(-34, -26)$ and $(34, 26)$ at elevation $y = 0.05$.
   - Material: `LineBasicMaterial({ color: 0xc9a96a, opacity: 0.9 })`.
   - Appearance: $t = 0.04$, $\text{dur} = 0.08$.
3. **Four Corner Survey Markers**:
   - 4 vertical brass posts located at $[\pm 34, \pm 26]$ rising from $y = 0$ to $y = 3\text{m}$.
   - Animated with `{ grow: true }` ($\text{scale.y} = \text{easeOutCubic}(\dots)$).
   - Appearance: $t = 0.10$, $\text{dur} = 0.05$.
4. **Site Access Road Markings**:
   - Parallel road guide lines at $z = 36$ and $z = 46$ spanning $x \in [-140, 140]$ at $y = 0.02$.
   - Material: `LineBasicMaterial({ color: 0xe9e2d0, opacity: 0.35 })`.
   - Appearance: $t = 0.08$, $\text{dur} = 0.08$.

---

#### Stage 2: Foundation (`t = 0.19 .. 0.35`)
1. **Excavation Pit**:
   - Box wireframe: $30\text{m (width)} \times 1.2\text{m (depth)} \times 20\text{m (length)}$.
   - Target elevation: $y = -0.6\text{m}$.
   - Vertical displacement: `{ rise: -3 }`. As progress advances, the pit physically sinks into the ground from $y = 2.4\text{m}$ down to $y = -0.6\text{m}$.
   - Appearance: $t = 0.19$, $\text{dur} = 0.06$, $\text{baseOpacity} = 0.75$.
2. **Structural Column Grid Coordinates**:
   - Defined by 5 transverse column lines: $b = [-13, -6.5, 0, 6.5, 13]$ (span: $26\text{m}$).
   - Defined by 3 longitudinal column lines: $y = [-8, 0, 8]$ (span: $16\text{m}$).
   - Total column locations: $5 \times 3 = 15$ structural piers.
3. **Foundation Footing Layout**:
   - Brass grid lines along column axes: $b$ lines along Z ($z \in [-22, 22]$) and $y$ lines along X ($x \in [-28, 28]$) at $y = 0.06$.
   - Appearance: $t = 0.22$, $\text{dur} = 0.07$, $\text{baseOpacity} = 0.45$.
4. **15 Column Starter Rebar Footings**:
   - 15 vertical stubs from $y = 0$ to $y = 1.6\text{m}$ at all 15 grid intersections.
   - Animated with `{ grow: true }`.
   - Appearance: $t = 0.27$, $\text{dur} = 0.06$, $\text{baseOpacity} = 0.90$.
5. **Construction Tower Crane**:
   - A fully detailed architectural tower crane constructed from brass wireframes:
     - 4 vertical mast legs: $(23, 0, -15)$ to $(25, 46, -13)$ (mast height $46\text{m}$).
     - Diagonal lattice bracing every $3\text{m}$ up the mast.
     - Horizontal jib arm reaching forward to $(-10, 46, -4)$.
     - Counter-jib reaching back to $(34, 46, -17)$.
     - Apex tower cables connected to $(24, 51, -14)$.
     - Vertical hoist cable and hook hanging down to $(4, 32, -8)$.
   - Animation: starts at $t = 0.30$, $\text{dur} = 0.08$, `{ grow: true }`.
   - **Automatic Dismantling (`fadeOut: 0.82`)**: When the building construction reaches completion at $v = 0.82$, the crane smoothly fades out over $\Delta v = 0.06$!

---

#### Stage 3: Frame (`t = 0.36 .. 0.61`)
1. **10 Concrete Floor Slabs**:
   - Floors $e \in [0, 9]$ (10 residential stories).
   - Floor height interval: $\Delta y = 3.3\text{m}$.
   - Slab wireframe box: $27.2\text{m (width)} \times 0.35\text{m (slab thickness)} \times 17.2\text{m (depth)}$.
   - Target elevation: $y = (e + 1) \times 3.3\text{m}$.
   - Start time staggered per floor:
     $$t_{\text{slab}}(e) = 0.36 + \left(\frac{e}{10}\right) \times 0.24$$
   - Vertical rise animation: `{ rise: 2.5 }`. Slabs elevate upward into place from $2.5\text{m}$ below.
   - Base opacity: $0.95$.
2. **15 Concrete Structural Columns Per Floor**:
   - 15 vertical column segments from $y = 0$ to $y = 3.3\text{m}$ at the 15 grid points.
   - Placed at base elevation $y = 3.3 \times e$.
   - Start time: $t_{\text{cols}}(e) = t_{\text{slab}}(e) - 0.01$.
   - Animated with `{ grow: true }`.
   - Base opacity: $0.80$.
3. **Rooftop Bulkhead / Mechanical Penthouse**:
   - Box wireframe: $16\text{m (width)} \times 3.6\text{m (height)} \times 10\text{m (depth)}$ at $y = 34.8\text{m}$.
   - Appearance: $t = 0.61$, $\text{dur} = 0.04$, `{ rise: 2 }`, base opacity: $0.90$.
4. **Rooftop Pergola / Louver Beams**:
   - Louver lines spanning $z \in [-5, 5]$ spaced every $1.6\text{m}$ across $x \in [-8, 8]$ at elevation $y = 36.8\text{m}$.
   - Appearance: $t = 0.66$, $\text{dur} = 0.05$, base opacity: $0.50$.

---

#### Stage 4: Envelope (`t = 0.62 .. 0.79`)
1. **Vertical Window Mullions**:
   - Staggered per floor:
     $$t_{\text{mullion}}(e) = 0.62 + \left(\frac{e}{10}\right) \times 0.15$$
   - Front & rear facades: lines along $x \in [-11.4, 13]$ with $1.6\text{m}$ spacing, from $y = 3.3e + 0.4$ to $(e+1)3.3 - 0.2$.
   - Left & right facades: lines along $z \in [-6.4, 8]$ with $1.6\text{m}$ spacing at $x = \pm 13$.
   - Base opacity: $0.42$.
2. **Glass Curtain Wall Facades**:
   - 4 planar meshes per floor (`MeshBasicMaterial` with color `0x86a9d6`, `transparent: true`, `DoubleSide`, `depthWrite: false`):
     - Front glass plane: $26\text{m} \times 2.7\text{m}$ at $(0, y_{\text{center}}, 8)$.
     - Back glass plane: $26\text{m} \times 2.7\text{m}$ at $(0, y_{\text{center}}, -8)$.
     - Right glass plane: $16\text{m} \times 2.7\text{m}$ at $(13, y_{\text{center}}, 0)$ ($\text{rot}_y = \frac{\pi}{2}$).
     - Left glass plane: $16\text{m} \times 2.7\text{m}$ at $(-13, y_{\text{center}}, 0)$ ($\text{rot}_y = \frac{\pi}{2}$).
   - Floor center: $y_{\text{center}} = 3.3e + 1.65 + 0.2$.
   - Base opacity: $0.14$, appearance: $t_{\text{mullion}} + 0.01$.
3. **Cantilevered Private Balconies**:
   - Installed on alternating floors ($e > 0$ and $e \pmod 2 = 1 \implies$ floors 1, 3, 5, 7, 9).
   - Box wireframe: $20\text{m (width)} \times 1.1\text{m (balustrade height)} \times 1.8\text{m (projection)}$.
   - Position: $(0, 3.3e + 0.55, 8.9)$.
   - Base opacity: $0.70$, appearance: $t_{\text{mullion}} + 0.015$.

---

#### Stage 5: Home (`t = 0.80 .. 1.00`)
1. **Warm Illuminated Interior Windows**:
   - Material: `MeshBasicMaterial({ color: 0xf3c77a, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })`.
   - Pseudo-random distribution using Mulberry32 PRNG (seed 1998):
     - Front/Rear window panes: $2.2\text{m} \times 1.9\text{m}$ placed across $x \in [-12.2, 12.2]$ step $3.2\text{m}$ ($P > 0.45$).
     - Side window panes: $2.6\text{m} \times 2.1\text{m}$ placed across $z \in [-7.2, 7.2]$ step $3.2\text{m}$ ($P > 0.50$).
   - Appearance: $t = 0.84$, $\text{dur} = 0.10$, base opacity: $0.42$.
2. **Surrounding Neighborhood Context Buildings**:
   - 8 surrounding low-poly wireframe buildings representing the surrounding cityscape:
     ```javascript
     [
       [-70, -40, 20, 14, 18], // [x, z, width, depth, height]
       [-62,  30, 16, 22, 10],
       [ 64, -46, 24, 16, 26],
       [ 78,  20, 18, 18, 14],
       [-20, -78, 30, 20, 22],
       [ 30,  80, 26, 14,  8],
       [-96,  -6, 14, 26, 12],
       [100, -10, 16, 20, 30],
     ]
     ```
   - Appearance: $t = 0.80$, $\text{dur} = 0.12$, base opacity: $0.22$.
3. **16 Perimeter Landscaping Trees**:
   - 16 trees placed around the plot perimeter in warm brass (`LineBasicMaterial({ color: 0xc9a96a })`):
     - Trunk: vertical line segment from $(x, 0, z)$ to $(x, 2.2, z)$.
     - Foliage Crown: faceted icosahedron wireframe `EdgesGeometry(IcosahedronGeometry(1.8, 0))` located at $y = 3.2 + \text{rng}()$, with randomized 3D orientation.
   - Appearance: $t = 0.86$, $\text{dur} = 0.08$, base opacity: $0.75$.

---

## 5. Camera Flight Path & Mathematical Kinematics

### 5.1 PerspectiveCamera Configuration
- **Field of View (FOV)**: $34^\circ$
- **Clipping Planes**: Near $= 0.5\text{m}$, Far $= 600\text{m}$

### 5.2 Keyframe Control Table
The camera trajectory is governed by 5 spherical orbital keyframes:

| Progress ($p$) | Orbit Radius ($\text{rad}$) | Elevation ($\text{elev}^\circ$) | Azimuth ($\text{az}^\circ$) | Target Y ($\text{ty}$) | Visual Perspective |
|---|---|---|---|---|---|
| **0.00** | $125$ | $66^\circ$ | $-35^\circ$ | $0\text{m}$ | High-angle blueprint site plan view looking straight down |
| **0.30** | $100$ | $44^\circ$ | $-5^\circ$ | $5\text{m}$ | Diagonal isometric view of excavation and crane |
| **0.60** | $98$ | $24^\circ$ | $40^\circ$ | $15\text{m}$ | Mid-elevation view tracking the rising concrete frame |
| **0.80** | $96$ | $13^\circ$ | $85^\circ$ | $17\text{m}$ | Low dynamic angle tracking glass facade installation |
| **1.00** | $108$ | $9^\circ$ | $128^\circ$ | $17\text{m}$ | Hero low-angle eye-level perspective of illuminated residence |

Total camera orbit rotation is $163^\circ$ (from $-35^\circ$ to $+128^\circ$), creating an awe-inspiring orbital fly-around.

### 5.3 Mathematical Interpolation
Between active keyframes $A$ and $B$, progress is mapped using a cubic Hermite smoothstep curve:
$$u = \text{clamp}\left(\frac{v - p_A}{p_B - p_A}, 0, 1\right)$$
$$S(u) = u^2 (3 - 2u)$$
$$\text{val} = \text{val}_A + (\text{val}_B - \text{val}_A) \times S(u)$$

### 5.4 Responsive Aspect-Ratio Compensation
To prevent the building from being cropped on narrow smartphone screens, the camera orbital radius is dynamically expanded:
$$d = \begin{cases} 1.55 & \text{if } \text{aspect} < 1.0 \text{ (Portrait mobile)} \\ 1.20 & \text{if } \text{aspect} < 1.3 \text{ (Square / Tablet)} \\ 1.00 & \text{if } \text{aspect} \ge 1.3 \text{ (Widescreen desktop)} \end{cases}$$
$$R_{\text{effective}} = \text{lerp}(\text{rad}_A, \text{rad}_B) \times d$$

### 5.5 Off-Axis View Offset (`setViewOffset`)
To balance 3D rendering with typographic layout:
- **Desktop ($\text{aspect} > 1.2$)**:
  $$\text{camera.setViewOffset}(w, h, -0.17w, 0, w, h)$$
  This shifts the building 17% towards the right side of the canvas, ensuring the left typographic column has perfect legibility.
- **Mobile ($\text{aspect} \le 1.2$)**:
  $$\text{camera.setViewOffset}(w, h, 0, 0.14h, w, h)$$
  This shifts the building upward into the upper 60% of the screen, leaving room for the copy at the bottom.

### 5.6 Idle Ambient Drift
When the user pauses scrolling, a subtle harmonic drift is added to the azimuth angle:
$$\theta_{\text{drift}}(t) = 2.5^\circ \times \sin(0.25 \times t)$$
This yields a gentle $\pm 2.5^\circ$ oscillation with a period of $T \approx 25.1\text{s}$. (Drift is automatically disabled when `prefers-reduced-motion` is active).

---

## 6. GSAP ScrollTrigger Integration

The scroll animation is bound to the pinning lifecycle of the container:
```typescript
ScrollTrigger.create({
  trigger: sectionElement,
  start: "top top",
  end: () => `+=${Math.round(2.6 * window.innerHeight)}`,
  pin: true,
  scrub: true,
  anticipatePin: 1,
  invalidateOnRefresh: true,
  onUpdate: (self) => {
    blueprint.setProgress(self.progress);
    updateUI(self.progress);
    requestRender();
  },
});
```
- **Pinning**: Container remains pinned for $2.6\times$ the viewport height (260vh).
- **Smooth Scrub**: Directly drives the Three.js scene properties smoothly across the scroll distance.
- **Unmounting Cleanup**: `scrollTriggerInstance.kill()`, `cancelAnimationFrame(rafId)`, and `blueprint.dispose()` release all GPU textures, vertex buffers, and listeners.

---

## 7. Standalone Production React Component

The complete, production-ready, fully typed implementation has been created at:
[`src/components/MakingOfHome.tsx`](file:///e:/REA/src/components/MakingOfHome.tsx)

### Verification:
- Compiled cleanly with `tsc --noEmit` (zero errors).
- Integrates seamlessly into modern React 19 / Vite / Next.js environments.
- Fully accessible with `aria-labelledby`, `sr-only` descriptions, and `prefers-reduced-motion` handling.
