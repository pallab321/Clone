"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [952],
  {
    5772: (e, t, r) => {
      r.d(t, { A: () => n.Image });
      var n = r(38437);
      r(38509);
    },
    38509: (e, t, r) => {
      let n = r(66388),
        o = r(55762),
        i = r(95413),
        l = Reflect.get(n._(r(36095)), "default"),
        s = (0, o.prepareImageConfig)({
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        });
    },
    42690: (e, t, r) => {
      r.d(t, { A: () => o });
      var n = r(12115);
      let o = n.forwardRef((e, t) => {
        let {
          alt: r,
          color: o = "currentColor",
          size: i = "1em",
          weight: l = "regular",
          mirrored: s = !1,
          children: u,
          weights: a,
          ...f
        } = e;
        return n.createElement(
          "svg",
          {
            ref: t,
            xmlns: "http://www.w3.org/2000/svg",
            width: i,
            height: i,
            fill: o,
            viewBox: "0 0 256 256",
            transform: s ? "scale(-1, 1)" : void 0,
            ...f,
          },
          !!r && n.createElement("title", null, r),
          u,
          a.get(l),
        );
      });
      o.displayName = "SSRBase";
    },
    80642: (e, t, r) => {
      r.d(t, { N: () => v });
      var n = r(95155),
        o = r(12115),
        i = r(39551),
        l = r(28819),
        s = r(65239),
        u = r(15131),
        a = r(78757),
        f = r(24866);
      function p(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      class c extends o.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (
            (0, a.s)(t) &&
            e.isPresent &&
            !this.props.isPresent &&
            !1 !== this.props.pop
          ) {
            let e = t.offsetParent,
              r = ((0, a.s)(e) && e.offsetWidth) || 0,
              n = ((0, a.s)(e) && e.offsetHeight) || 0,
              o = getComputedStyle(t),
              i = this.props.sizeRef.current;
            ((i.height = parseFloat(o.height)),
              (i.width = parseFloat(o.width)),
              (i.top = t.offsetTop),
              (i.left = t.offsetLeft),
              (i.right = r - i.width - i.left),
              (i.bottom = n - i.height - i.top),
              (i.direction = o.direction));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function h({
        children: e,
        isPresent: t,
        anchorX: r,
        anchorY: i,
        root: l,
        pop: s,
      }) {
        let u = (0, o.useId)(),
          a = (0, o.useRef)(null),
          d = (0, o.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            direction: "ltr",
          }),
          { nonce: m } = (0, o.useContext)(f.Q),
          g = (function (...e) {
            return o.useCallback(
              (function (...e) {
                return (t) => {
                  let r = !1,
                    n = e.map((e) => {
                      let n = p(e, t);
                      return (r || "function" != typeof n || (r = !0), n);
                    });
                  if (r)
                    return () => {
                      for (let t = 0; t < n.length; t++) {
                        let r = n[t];
                        "function" == typeof r ? r() : p(e[t], null);
                      }
                    };
                };
              })(...e),
              e,
            );
          })(a, !1 !== s ? (e.props?.ref ?? e?.ref) : void 0);
        return (
          (0, o.useInsertionEffect)(() => {
            let {
              width: e,
              height: n,
              top: o,
              left: f,
              right: p,
              bottom: c,
              direction: h,
            } = d.current;
            if (t || !1 === s || !a.current || !e || !n) return;
            let g = "rtl" === h,
              w =
                "left" === r
                  ? g
                    ? `right: ${p}`
                    : `left: ${f}`
                  : g
                    ? `left: ${f}`
                    : `right: ${p}`,
              x = "bottom" === i ? `bottom: ${c}` : `top: ${o}`;
            a.current.dataset.motionPopId = u;
            let v = document.createElement("style");
            m && (v.nonce = m);
            let E = l ?? document.head;
            return (
              E.appendChild(v),
              v.sheet &&
                v.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            ${w}px !important;
            ${x}px !important;
          }
        `),
              () => {
                (a.current?.removeAttribute("data-motion-pop-id"),
                  E.contains(v) && E.removeChild(v));
              }
            );
          }, [t]),
          (0, n.jsx)(c, {
            isPresent: t,
            childRef: a,
            sizeRef: d,
            pop: s,
            children: !1 === s ? e : o.cloneElement(e, { ref: g }),
          })
        );
      }
      let d = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: i,
        custom: a,
        presenceAffectsLayout: f,
        mode: p,
        anchorX: c,
        anchorY: d,
        root: g,
      }) => {
        let w = (0, l.M)(m),
          x = (0, o.useId)(),
          v = (0, o.useRef)(r),
          E = (0, o.useRef)(i);
        (0, s.E)(() => {
          ((v.current = r), (E.current = i));
        });
        let C = !0,
          R = (0, o.useMemo)(
            () => (
              (C = !1),
              {
                id: x,
                initial: t,
                isPresent: r,
                custom: a,
                onExitComplete: (e) => {
                  for (let t of (w.set(e, !0), w.values())) if (!t) return;
                  i && i();
                },
                register: (e) => (
                  w.set(e, !1),
                  () => {
                    (w.delete(e), v.current || w.size || E.current?.());
                  }
                ),
              }
            ),
            [r, w, i],
          );
        return (
          f && C && (R = { ...R }),
          (0, o.useMemo)(() => {
            w.forEach((e, t) => w.set(t, !1));
          }, [r]),
          o.useEffect(() => {
            r || w.size || !i || i();
          }, [r]),
          (e = (0, n.jsx)(h, {
            pop: "popLayout" === p,
            isPresent: r,
            anchorX: c,
            anchorY: d,
            root: g,
            children: e,
          })),
          (0, n.jsx)(u.t.Provider, { value: R, children: e })
        );
      };
      function m() {
        return new Map();
      }
      var g = r(79196);
      let w = (e) => e.key || "";
      function x(e) {
        let t = [];
        return (
          o.Children.forEach(e, (e) => {
            (0, o.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      let v = ({
        children: e,
        custom: t,
        initial: r = !0,
        onExitComplete: u,
        presenceAffectsLayout: a = !0,
        mode: f = "sync",
        propagate: p = !1,
        anchorX: c = "left",
        anchorY: h = "top",
        root: m,
      }) => {
        let [v, E] = (0, g.xQ)(p),
          C = (0, o.useMemo)(() => x(e), [e]),
          R = p && !v ? [] : C.map(w),
          y = (0, o.useRef)(!0),
          $ = (0, l.M)(() => new Map()),
          S = (0, o.useRef)(new Set()),
          [b, z] = (0, o.useState)(C),
          [P, M] = (0, o.useState)(C);
        ((0, s.E)(() => {
          !p || v || P.length || E?.();
        }, [v, p, P.length, E]),
          (0, s.E)(() => {
            y.current = !1;
            for (let e = 0; e < P.length; e++) {
              let t = w(P[e]);
              R.includes(t)
                ? ($.delete(t), S.current.delete(t))
                : !0 !== $.get(t) && $.set(t, !1);
            }
          }, [P, R.length, R.join("-")]));
        let j = [];
        if (C !== b) {
          let e = [...C],
            t = 0;
          for (let r of P) {
            let n = R.indexOf(w(r));
            -1 === n
              ? (e.splice(t++, 0, r), j.push(r))
              : (t = n + j.length + 1);
          }
          return (
            j.every((e) => $.get(w(e))) ? (e = C) : "wait" === f && (e = j),
            M(x(e)),
            z(C),
            null
          );
        }
        let { forceRender: k } = (0, o.useContext)(i.L);
        return (0, n.jsx)(n.Fragment, {
          children: P.map((e) => {
            let o = w(e),
              i = (!p || !!v) && (C === P || R.includes(o));
            return (0, n.jsx)(
              d,
              {
                isPresent: i,
                initial: (!y.current || !!r) && void 0,
                custom: t,
                presenceAffectsLayout: a,
                mode: f,
                root: m,
                onExitComplete: i
                  ? void 0
                  : () => {
                      if (S.current.has(o) || !$.has(o)) return;
                      (S.current.add(o), $.set(o, !0));
                      let e = !0;
                      ($.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (k?.(), z([]), p && E?.(), u && u()));
                    },
                anchorX: c,
                anchorY: h,
                children: e,
              },
              o,
            );
          }),
        });
      };
    },
  },
]);
