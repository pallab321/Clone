"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [718],
  {
    24718: (e, t, o) => {
      o.d(t, { createBlueprint: () => n });
      var a = o(29625),
        i = o(97650);
      let s = {
          bg: 725536,
          line: 0xe9e2d0,
          brass: 0xc9a96a,
          glass: 8825302,
          light: 0xf3c77a,
        },
        l = (e, t = 0, o = 1) => Math.min(o, Math.max(t, e)),
        r = (e) => 1 - Math.pow(1 - e, 3);
      function n(e) {
        var t;
        let o = new a.JeP({
          canvas: e,
          antialias: !0,
          alpha: !1,
          powerPreference: "high-performance",
        });
        (o.setPixelRatio(Math.min(window.devicePixelRatio, 1.75)),
          o.setClearColor(s.bg, 1));
        let n = new i.Z58();
        n.fog = new i.jUj(s.bg, 70, 260);
        let p = new i.ubm(34, 1, 0.5, 600),
          d = [],
          h =
            ((t = 1998),
            () => {
              let e = Math.imul((t = (t + 0x6d2b79f5) | 0) ^ (t >>> 15), 1 | t);
              return (
                (((e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e) ^
                  (e >>> 14)) >>>
                  0) /
                0x100000000
              );
            }),
          f = (e = s.line) =>
            new i.mrM({
              color: e,
              transparent: !0,
              opacity: 0,
              depthWrite: !1,
            }),
          c = (e, t, o, a, i = 0.06, s = {}) => {
            (t.forEach((e) => (e.opacity = 0)),
              (e.visible = !1),
              n.add(e),
              d.push({
                obj: e,
                mats: t,
                base: o,
                t: a,
                dur: i,
                y0: e.position.y,
                ...s,
              }));
          },
          w = (e, t, o, a) => new i.DXC(new i.TDQ(new i.iNn(e, t, o)), a),
          u = (e, t) => {
            let o = new i.LoY();
            return (
              o.setAttribute("position", new i.qtW(e, 3)),
              new i.DXC(o, t)
            );
          };
        {
          let e = [];
          for (let t = -140; t <= 140; t += 5) e.push(t, 0, -140, t, 0, 140);
          for (let t = -140; t <= 140; t += 5) e.push(-140, 0, t, 140, 0, t);
          let t = f(s.line);
          c(u(e, t), [t], 0.1, 0, 0.08);
          let o = f(s.brass);
          c(
            u(
              [
                -34, 0.05, -26, 34, 0.05, -26, 34, 0.05, -26, 34, 0.05, 26, 34,
                0.05, 26, -34, 0.05, 26, -34, 0.05, 26, -34, 0.05, -26,
              ],
              o,
            ),
            [o],
            0.9,
            0.04,
            0.08,
          );
          let a = f(s.brass),
            i = [];
          ([
            [-34, -26],
            [34, -26],
            [34, 26],
            [-34, 26],
          ].forEach(([e, t]) => i.push(e, 0, t, e, 3, t)),
            c(u(i, a), [a], 0.9, 0.1, 0.05, { grow: !0 }));
          let l = f(s.line);
          c(
            u(
              [-140, 0.02, 36, 140, 0.02, 36, -140, 0.02, 46, 140, 0.02, 46],
              l,
            ),
            [l],
            0.35,
            0.08,
            0.08,
          );
        }
        let b = [-13, -6.5, 0, 6.5, 13],
          y = [-8, 0, 8];
        {
          let e = f(),
            t = w(30, 1.2, 20, e);
          ((t.position.y = -0.6), c(t, [e], 0.75, 0.19, 0.06, { rise: -3 }));
          let o = f(s.brass),
            a = [];
          (b.forEach((e) => a.push(e, 0.06, -22, e, 0.06, 22)),
            y.forEach((e) => a.push(-28, 0.06, e, 28, 0.06, e)),
            c(u(a, o), [o], 0.45, 0.22, 0.07));
          let i = f(),
            l = [];
          (b.forEach((e) => y.forEach((t) => l.push(e, 0, t, e, 1.6, t))),
            c(u(l, i), [i], 0.9, 0.27, 0.06, { grow: !0 }));
          let r = f(s.brass),
            n = [
              23, 0, -15, 23, 46, -15, 25, 0, -13, 25, 46, -13, 23, 0, -13, 23,
              46, -13, 25, 0, -15, 25, 46, -15,
            ];
          for (let e = 0; e < 46; e += 3) n.push(23, e, -15, 25, e + 3, -13);
          (n.push(
            24,
            46,
            -14,
            -10,
            46,
            -4,
            24,
            47.5,
            -14,
            34,
            46,
            -17,
            24,
            51,
            -14,
            -10,
            46,
            -4,
            24,
            51,
            -14,
            34,
            46,
            -17,
            4,
            46,
            -8,
            4,
            32,
            -8,
          ),
            c(u(n, r), [r], 0.5, 0.3, 0.08, { grow: !0, fadeOut: 0.82 }));
        }
        for (let e = 0; e < 10; e++) {
          let t = (e + 1) * 3.3,
            o = 0.36 + (e / 10) * 0.24,
            a = f(),
            i = w(27.2, 0.35, 17.2, a);
          ((i.position.y = t), c(i, [a], 0.95, o, 0.035, { rise: 2.5 }));
          let s = f(),
            l = [];
          b.forEach((e) => y.forEach((t) => l.push(e, 0, t, e, 3.3, t)));
          let r = u(l, s);
          ((r.position.y = 3.3 * e),
            c(r, [s], 0.8, o - 0.01, 0.03, { grow: !0 }));
        }
        {
          let e = f(),
            t = w(16, 3.6, 10, e);
          ((t.position.y = 34.8), c(t, [e], 0.9, 0.61, 0.04, { rise: 2 }));
          let o = f(),
            a = [];
          for (let e = -8; e <= 8; e += 1.6) a.push(e, 36.8, -5, e, 36.8, 5);
          c(u(a, o), [o], 0.5, 0.66, 0.05);
        }
        let g = () =>
          new i.V9B({
            color: s.glass,
            transparent: !0,
            opacity: 0,
            side: i.$EB,
            depthWrite: !1,
          });
        for (let e = 0; e < 10; e++) {
          let t = 3.3 * e + 1.65 + 0.2,
            o = 0.62 + (e / 10) * 0.15,
            a = f(),
            s = [];
          for (let t = -11.4; t < 13; t += 1.6)
            (s.push(t, 3.3 * e + 0.4, 8, t, (e + 1) * 3.3 - 0.2, 8),
              s.push(t, 3.3 * e + 0.4, -8, t, (e + 1) * 3.3 - 0.2, -8));
          for (let t = -6.4; t < 8; t += 1.6)
            (s.push(13, 3.3 * e + 0.4, t, 13, (e + 1) * 3.3 - 0.2, t),
              s.push(-13, 3.3 * e + 0.4, t, -13, (e + 1) * 3.3 - 0.2, t));
          c(u(s, a), [a], 0.42, o, 0.04);
          let l = g(),
            r = new i.YJl(),
            n = new i.eaF(new i.bdM(26, 3.3 - 0.6), l);
          (n.position.set(0, t, 8), r.add(n));
          let p = n.clone();
          ((p.position.z = -8), r.add(p));
          let d = new i.eaF(new i.bdM(16, 3.3 - 0.6), l);
          ((d.rotation.y = Math.PI / 2), d.position.set(13, t, 0), r.add(d));
          let h = d.clone();
          if (
            ((h.position.x = -13),
            r.add(h),
            c(r, [l], 0.14, o + 0.01, 0.05),
            e > 0 && e % 2 == 1)
          ) {
            let t = f(),
              a = w(20, 1.1, 1.8, t);
            (a.position.set(0, 3.3 * e + 0.55, 8.9),
              c(a, [t], 0.7, o + 0.015, 0.04));
          }
        }
        {
          let e = new i.V9B({
              color: s.light,
              transparent: !0,
              opacity: 0,
              depthWrite: !1,
              blending: i.EZo,
            }),
            t = new i.YJl();
          for (let o = 0; o < 10; o++) {
            for (let a = -12.2; a < 12.2; a += 3.2) {
              if (0.45 > h()) continue;
              let s = new i.eaF(new i.bdM(2.2, 1.9), e);
              if (
                (s.position.set(a + 0.8, 3.3 * o + 1.65 + 0.2, 8.05),
                t.add(s),
                0.5 > h())
              ) {
                let e = s.clone();
                ((e.position.z = -8.05), t.add(e));
              }
            }
            for (let a = -7.2; a < 7.2; a += 3.2) {
              if (0.5 > h()) continue;
              let s = new i.eaF(new i.bdM(2.6, 3.3 - 1.2), e);
              ((s.rotation.y = Math.PI / 2),
                s.position.set(13.05, 3.3 * o + 1.65 + 0.2, a + 0.8),
                t.add(s));
            }
          }
          c(t, [e], 0.42, 0.84, 0.1);
          let o = f(),
            a = new i.YJl();
          ([
            [-70, -40, 20, 14, 18],
            [-62, 30, 16, 22, 10],
            [64, -46, 24, 16, 26],
            [78, 20, 18, 18, 14],
            [-20, -78, 30, 20, 22],
            [30, 80, 26, 14, 8],
            [-96, -6, 14, 26, 12],
            [100, -10, 16, 20, 30],
          ].forEach(([e, t, i, s, l]) => {
            let r = w(i, l, s, o);
            (r.position.set(e, l / 2, t), a.add(r));
          }),
            c(a, [o], 0.22, 0.8, 0.12));
          let l = f(s.brass),
            r = new i.YJl(),
            n = new i.TDQ(new i.WBB(1.8, 0));
          for (let e = 0; e < 16; e++) {
            let t = e % 4,
              o = (Math.floor(e / 4) + 0.5) / 4,
              a = t < 2 ? -30 + 60 * o : 2 === t ? -31 : 31,
              s = 0 === t ? 23 : 1 === t ? -23 : -20 + 40 * o,
              p = new i.DXC(n, l);
            (p.position.set(a, 3.2 + h(), s),
              p.rotation.set(3 * h(), 3 * h(), 0),
              r.add(p));
            let d = u([a, 0, s, a, 2.2, s], l);
            r.add(d);
          }
          c(r, [l], 0.75, 0.86, 0.08);
        }
        let M = [
            { p: 0, rad: 125, elev: 66, az: -35, ty: 0 },
            { p: 0.3, rad: 100, elev: 44, az: -5, ty: 5 },
            { p: 0.6, rad: 98, elev: 24, az: 40, ty: 15 },
            { p: 0.8, rad: 96, elev: 13, az: 85, ty: 17 },
            { p: 1, rad: 108, elev: 9, az: 128, ty: 17 },
          ],
          E = 1,
          v = 0,
          m = 0;
        return {
          setProgress(e) {
            for (let t of ((v = l(e)), d)) {
              let e = r(l((v - t.t) / t.dur)),
                o = void 0 !== t.fadeOut ? 1 - l((v - t.fadeOut) / 0.06) : 1,
                a = t.base * e * o;
              ((t.obj.visible = a > 0.002),
                t.mats.forEach((e) => (e.opacity = a)),
                t.rise && (t.obj.position.y = t.y0 + t.rise * (1 - e)),
                t.grow && (t.obj.scale.y = Math.max(0.001, e)));
            }
          },
          setDrift(e) {
            m = e;
          },
          resize: () => {
            let t = e.clientWidth,
              a = e.clientHeight;
            t &&
              a &&
              ((E = t / a),
              o.setSize(t, a, !1),
              (p.aspect = E),
              E > 1.2
                ? p.setViewOffset(t, a, -(0.17 * t), 0, t, a)
                : p.setViewOffset(t, a, 0, 0.14 * a, t, a),
              p.updateProjectionMatrix());
          },
          render: () => {
            (((e, t) => {
              let o,
                a = M[0],
                s = M[M.length - 1];
              for (let t = 0; t < M.length - 1; t++)
                if (e >= M[t].p && e <= M[t + 1].p) {
                  ((a = M[t]), (s = M[t + 1]));
                  break;
                }
              let r = (o = l((e - a.p) / (s.p - a.p || 1))) * o * (3 - 2 * o),
                n = (e, t) => e + (t - e) * r,
                d = E < 1 ? 1.55 : E < 1.3 ? 1.2 : 1,
                h = n(a.rad, s.rad) * d,
                f = i.cj9.degToRad(n(a.elev, s.elev)),
                c = i.cj9.degToRad(n(a.az, s.az) + t),
                w = n(a.ty, s.ty);
              (p.position.set(
                Math.sin(c) * Math.cos(f) * h,
                w + Math.sin(f) * h,
                Math.cos(c) * Math.cos(f) * h,
              ),
                p.lookAt(0, w, 0));
            })(v, m),
              o.render(n, p));
          },
          dispose() {
            (n.traverse((e) => {
              e.geometry?.dispose?.();
              let t = e.material;
              Array.isArray(t) ? t.forEach((e) => e.dispose()) : t?.dispose?.();
            }),
              o.dispose());
          },
        };
      }
    },
  },
]);
