"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [489],
  {
    5556: (t, e, i) => {
      (i.d(e, { $: () => n, V: () => s }), i(41463));
      let n = () => {},
        s = () => {};
    },
    6900: (t, e, i) => {
      let n;
      i.d(e, { OQ: () => h });
      var s = i(73852),
        r = i(79537),
        o = i(37035),
        a = i(27933);
      class l {
        constructor(t, e = {}) {
          ((this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t) => {
              let e = o.k.now();
              if (
                (this.updatedAt !== e && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  (this.notifyChange(), this.dependents))
              )
                for (let t of this.dependents) t.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner));
        }
        setCurrent(t) {
          ((this.current = t),
            (this.updatedAt = o.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = !isNaN(parseFloat(this.current))));
        }
        setPrevFrameValue(t = this.current) {
          ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          var i;
          return "change" === t
            ? this.onChangeSubscribe(e)
            : ((i = this.events)[t] || (i[t] = new s.v())).add(e);
        }
        onChangeSubscribe(t) {
          let { events: e } = this;
          return (
            e.change || this.changeSubscriber
              ? (e.change ||
                  ((e.change = new s.v()),
                  e.change.add(this.changeSubscriber),
                  (this.changeSubscriber = void 0)),
                e.change.add(t))
              : (this.changeSubscriber = t),
            () => {
              (this.changeSubscriber === t
                ? (this.changeSubscriber = void 0)
                : e.change?.remove(t),
                this.stopIfUnobserved());
            }
          );
        }
        stopIfUnobserved() {
          a.Gt.read(() => {
            this.changeSubscriber ||
              this.events.change?.getSize() ||
              this.stop();
          });
        }
        clearListeners() {
          for (let t in ((this.changeSubscriber = void 0), this.events))
            this.events[t].clear();
        }
        attach(t, e) {
          ((this.passiveEffect = t), (this.stopPassiveEffect = e));
        }
        set(t) {
          this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t);
        }
        setWithVelocity(t, e, i) {
          (this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i));
        }
        jump(t, e = !0) {
          (this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        dirty() {
          this.notifyChange();
        }
        notifyChange() {
          let { current: t, changeSubscriber: e } = this;
          e ? e(t) : this.events.change?.notify(t);
        }
        addDependent(t) {
          (this.dependents || (this.dependents = new Set()),
            this.dependents.add(t));
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t);
        }
        get() {
          return (n && n.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = o.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e,
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              let i;
              this.hasAnimated = !0;
              let n = !1;
              ((i = t(() => {
                ((n = !0),
                  this.events.animationComplete?.notify(),
                  this.animation === i && this.clearAnimation(),
                  e());
              })),
                n || (this.animation = i),
                this.events.animationStart?.notify());
            })
          );
        }
        stop() {
          (this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation());
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          this.animation = void 0;
        }
        destroy() {
          (this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }
      function h(t, e) {
        return new l(t, e);
      }
    },
    7145: (t, e, i) => {
      i.d(e, { J: () => r });
      var n = i(96291);
      let s = {};
      function r(t, e) {
        let i = (0, n.p)(t);
        return () => s[e] ?? i();
      }
    },
    15131: (t, e, i) => {
      i.d(e, { t: () => n });
      let n = (0, i(12115).createContext)(null);
    },
    18844: (t, e, i) => {
      i.d(e, { q: () => n });
      let n = (t, e, i) => {
        let n = e - t;
        return n ? (i - t) / n : 1;
      };
    },
    19489: (t, e, i) => {
      i.d(e, { P: () => rv });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        s = new Set([...n, "pathRotation"]);
      var r = i(94712);
      let o = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        a = { ...o, transform: (t) => (0, r.q)(0, 1, t) },
        l = { ...o, default: 1 },
        h = (t) => Math.round(1e5 * t) / 1e5,
        u = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        d =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        c = (t, e) => (i) =>
          !!(
            ("string" == typeof i && d.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        p = (t, e, i) => (n) => {
          if ("string" != typeof n) return n;
          let [s, r, o, a] = n.match(u);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(r),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        m = { ...o, transform: (t) => Math.round((0, r.q)(0, 255, t)) },
        f = {
          test: c("rgb", "red"),
          parse: p("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            m.transform(t) +
            ", " +
            m.transform(e) +
            ", " +
            m.transform(i) +
            ", " +
            h(a.transform(n)) +
            ")",
        },
        y = {
          test: c("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              s = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (s = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (s = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (s += s)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: s ? parseInt(s, 16) / 255 : 1,
              }
            );
          },
          transform: f.transform,
        },
        v = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        g = v("deg"),
        x = v("%"),
        w = v("px"),
        T = v("vh"),
        b = v("vw"),
        P = {
          ...x,
          parse: (t) => x.parse(t) / 100,
          transform: (t) => x.transform(100 * t),
        },
        S = {
          test: c("hsl", "hue"),
          parse: p("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            x.transform(h(e)) +
            ", " +
            x.transform(h(i)) +
            ", " +
            h(a.transform(n)) +
            ")",
        },
        A = {
          test: (t) => f.test(t) || y.test(t) || S.test(t),
          parse: (t) =>
            f.test(t) ? f.parse(t) : S.test(t) ? S.parse(t) : y.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
                ? f.transform(t)
                : S.transform(t),
          getAnimatableNone: (t) => {
            let e = A.parse(t);
            return ((e.alpha = 0), A.transform(e));
          },
        },
        E = new RegExp(u.source),
        M = RegExp(
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
            .source,
          "i",
        ),
        C = "number",
        V = "color",
        k =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function D(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          s = [],
          r = 0,
          o = e
            .replace(
              k,
              (t) => (
                A.test(t)
                  ? (n.color.push(r), s.push(V), i.push(A.parse(t)))
                  : t.startsWith("var(")
                    ? (n.var.push(r), s.push("var"), i.push(t))
                    : (n.number.push(r), s.push(C), i.push(parseFloat(t))),
                ++r,
                "${}"
              ),
            )
            .split("${}");
        return { values: i, split: o, indexes: n, types: s };
      }
      function R({ split: t, types: e }) {
        let i = t.length;
        return (n) => {
          let s = "";
          for (let r = 0; r < i; r++)
            if (((s += t[r]), void 0 !== n[r])) {
              let t = e[r];
              t === C
                ? (s += h(n[r]))
                : t === V
                  ? (s += A.transform(n[r]))
                  : (s += n[r]);
            }
          return s;
        };
      }
      let L = {
          test: function (t) {
            return isNaN(t) && "string" == typeof t && (E.test(t) || M.test(t));
          },
          parse: function (t) {
            return D(t).values;
          },
          createTransformer: function (t) {
            return R(D(t));
          },
          getAnimatableNone: function (t) {
            let e = D(t);
            return R(e)(
              e.values.map((t, i) =>
                ((t, e) =>
                  "number" == typeof t
                    ? e?.trim().endsWith("/")
                      ? t
                      : 0
                    : "number" == typeof t
                      ? 0
                      : A.test(t)
                        ? A.getAnimatableNone(t)
                        : t)(t, e.split[i]),
              ),
            );
          },
        },
        B = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function j(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(u) || [];
        if (!n) return t;
        let s = i.replace(n, ""),
          r = +!!B.has(e);
        return (n !== i && (r *= 100), e + "(" + r + s + ")");
      }
      let F = /\b([a-z-]*)\(.*?\)/gu,
        I = {
          ...L,
          getAnimatableNone: (t) => {
            let e = t.match(F);
            return e ? e.map(j).join(" ") : t;
          },
        },
        O = {
          ...L,
          getAnimatableNone: (t) => {
            let e = L.parse(t);
            return L.createTransformer(t)(
              e.map((t) =>
                "number" == typeof t
                  ? 0
                  : "object" == typeof t
                    ? { ...t, alpha: 1 }
                    : t,
              ),
            );
          },
        },
        W = { ...o, transform: Math.round },
        U = {
          borderWidth: w,
          borderTopWidth: w,
          borderRightWidth: w,
          borderBottomWidth: w,
          borderLeftWidth: w,
          borderRadius: w,
          borderTopLeftRadius: w,
          borderTopRightRadius: w,
          borderBottomRightRadius: w,
          borderBottomLeftRadius: w,
          width: w,
          maxWidth: w,
          height: w,
          maxHeight: w,
          top: w,
          right: w,
          bottom: w,
          left: w,
          inset: w,
          insetBlock: w,
          insetBlockStart: w,
          insetBlockEnd: w,
          insetInline: w,
          insetInlineStart: w,
          insetInlineEnd: w,
          padding: w,
          paddingTop: w,
          paddingRight: w,
          paddingBottom: w,
          paddingLeft: w,
          paddingBlock: w,
          paddingBlockStart: w,
          paddingBlockEnd: w,
          paddingInline: w,
          paddingInlineStart: w,
          paddingInlineEnd: w,
          margin: w,
          marginTop: w,
          marginRight: w,
          marginBottom: w,
          marginLeft: w,
          marginBlock: w,
          marginBlockStart: w,
          marginBlockEnd: w,
          marginInline: w,
          marginInlineStart: w,
          marginInlineEnd: w,
          fontSize: w,
          backgroundPositionX: w,
          backgroundPositionY: w,
          rotate: g,
          pathRotation: g,
          rotateX: g,
          rotateY: g,
          rotateZ: g,
          scale: l,
          scaleX: l,
          scaleY: l,
          scaleZ: l,
          skew: g,
          skewX: g,
          skewY: g,
          distance: w,
          translateX: w,
          translateY: w,
          translateZ: w,
          x: w,
          y: w,
          z: w,
          perspective: w,
          transformPerspective: w,
          opacity: a,
          originX: P,
          originY: P,
          originZ: w,
          zIndex: W,
          fillOpacity: a,
          strokeOpacity: a,
          numOctaves: W,
        },
        $ = {
          ...U,
          color: A,
          backgroundColor: A,
          outlineColor: A,
          fill: A,
          stroke: A,
          borderColor: A,
          borderTopColor: A,
          borderRightColor: A,
          borderBottomColor: A,
          borderLeftColor: A,
          filter: I,
          WebkitFilter: I,
          mask: O,
          WebkitMask: O,
        },
        N = (t) => $[t],
        G = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        z = () => ({ x: G(), y: G() }),
        q = () => ({ min: 0, max: 0 }),
        X = () => ({ x: q(), y: q() }),
        Y = (t) => !!(t && t.getVelocity),
        H = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...n,
        ]),
        K = [o, w, x, g, b, T, { test: (t) => "auto" === t, parse: (t) => t }],
        _ = (t) => K.find((e) => e.test(t));
      var Z = i(5556);
      let Q = (t) => (e) => "string" == typeof e && e.startsWith(t),
        J = Q("--"),
        tt = Q("var(--"),
        te = (t) => !!tt(t) && ti.test(t.split("/*")[0].trim()),
        ti =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
      function tn(t) {
        return "string" == typeof t && t.split("/*")[0].includes("var(--");
      }
      let ts = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        tr = new Set([I, O]);
      function to(t, e) {
        let i = N(t);
        return (
          tr.has(i) || (i = L),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let ta = (t) => (180 * t) / Math.PI,
        tl = (t) => tu(ta(Math.atan2(t[1], t[0]))),
        th = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: tl,
          rotateZ: tl,
          skewX: (t) => ta(Math.atan(t[1])),
          skewY: (t) => ta(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        tu = (t) => ((t %= 360) < 0 && (t += 360), t),
        td = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        tc = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        tp = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: td,
          scaleY: tc,
          scale: (t) => (td(t) + tc(t)) / 2,
          rotateX: (t) => tu(ta(Math.atan2(t[6], t[5]))),
          rotateY: (t) => tu(ta(Math.atan2(-t[2], t[0]))),
          rotateZ: tl,
          rotate: tl,
          skewX: (t) => ta(Math.atan(t[4])),
          skewY: (t) => ta(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function tm(t) {
        return +!!t.includes("scale");
      }
      function tf(t, e) {
        let i, n;
        if (!t || "none" === t) return tm(e);
        let s = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (s) ((i = tp), (n = s));
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          ((i = th), (n = e));
        }
        if (!n) return tm(e);
        let r = i[e],
          o = n[1].split(",").map(ty);
        return "function" == typeof r ? r(o) : o[r];
      }
      function ty(t) {
        return parseFloat(t.trim());
      }
      let tv = (t) => t === o || t === w,
        tg = new Set(["x", "y", "z"]),
        tx = n.filter((t) => !tg.has(t)),
        tw = new Set(["bottom", "right"]);
      function tT(t, e, i, n, s, r) {
        let o = parseFloat(t);
        if (!isNaN(o)) return o;
        let { min: a, max: l } = e()[i],
          h = l - a;
        return "border-box" === r ? h : h - parseFloat(n) - parseFloat(s);
      }
      let tb = {
        width: (
          {
            width: t,
            paddingLeft: e = "0",
            paddingRight: i = "0",
            boxSizing: n,
          },
          s,
        ) => tT(t, s, "x", e, i, n),
        height: (
          {
            height: t,
            paddingTop: e = "0",
            paddingBottom: i = "0",
            boxSizing: n,
          },
          s,
        ) => tT(t, s, "y", e, i, n),
        top: ({ top: t }) => parseFloat(t),
        left: ({ left: t }) => parseFloat(t),
        bottom: ({ top: t }, e) => {
          let { y: i } = e();
          return parseFloat(t) + (i.max - i.min);
        },
        right: ({ left: t }, e) => {
          let { x: i } = e();
          return parseFloat(t) + (i.max - i.min);
        },
        x: ({ transform: t }) => tf(t, "x"),
        y: ({ transform: t }) => tf(t, "y"),
      };
      ((tb.translateX = tb.x), (tb.translateY = tb.y));
      var tP = i(27933);
      let tS = new Set(),
        tA = !1,
        tE = !1,
        tM = !1;
      function tC() {
        if (tE) {
          let t = [],
            e = new Set(),
            i = new Set();
          tS.forEach((n) => {
            n.needsMeasurement &&
              (t.push(n), e.add(n.element), tw.has(n.name) && i.add(n.element));
          });
          let n = new Map();
          (i.forEach((t) => {
            let e,
              i =
                ((e = []),
                tx.forEach((i) => {
                  let n = t.getValue(i);
                  if (void 0 !== n) {
                    let t = n.get(),
                      s = +!!i.startsWith("scale");
                    if (t === s) return;
                    (e.push([i, t]), n.set(s));
                  }
                }),
                e);
            i.length && (n.set(t, i), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = n.get(t);
              e &&
                e.forEach(([e, i]) => {
                  t.getValue(e)?.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            }));
        }
        ((tE = !1), (tA = !1), tS.forEach((t) => t.complete(tM)), tS.clear());
      }
      function tV() {
        tS.forEach((t) => {
          (t.readKeyframes(), t.needsMeasurement && (tE = !0));
        });
      }
      class tk {
        constructor(t, e, i, n, s, r = !1) {
          ((this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = s),
            (this.isAsync = r));
        }
        scheduleResolve() {
          ((this.state = "scheduled"),
            this.isAsync
              ? (tS.add(this),
                tA || ((tA = !0), tP.Gt.read(tV), tP.Gt.resolveKeyframes(tC)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          if (null === t[0]) {
            let s = n?.get(),
              r = t[t.length - 1];
            if (void 0 !== s) t[0] = s;
            else if (i && e) {
              let n = (function (t, e, i) {
                if ("string" == typeof t) {
                  if (
                    /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t) ||
                    /^0[^.\s]+$/u.test(t)
                  )
                    return parseFloat(t);
                  if (!L.test(t) && L.test(i)) return to(e, i);
                }
                return t ?? void 0;
              })(i.readValue(e, r), e, r);
              void 0 !== n && (t[0] = n);
            }
            (void 0 === t[0] && (t[0] = r), n && void 0 === s && n.set(t[0]));
          }
          for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          ((this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            tS.delete(this));
        }
        cancel() {
          "scheduled" === this.state &&
            (tS.delete(this), (this.state = "pending"));
        }
        resume() {
          "pending" === this.state && this.scheduleResolve();
        }
      }
      let tD = new Set(["auto", "none", "0"]);
      class tR extends tk {
        constructor(t, e, i, n, s) {
          super(t, e, i, n, s, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && te((n = n.trim()))) {
              let s = (function t(e, i, n = 1) {
                (0, Z.V)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                  "max-css-var-depth",
                );
                let [s, r] = (function (t) {
                  let e = ts.exec(t);
                  if (!e) return [,];
                  let [, i, n, s] = e;
                  return [`--${i ?? n}`, s];
                })(e);
                if (!s) return;
                let o = window.getComputedStyle(i).getPropertyValue(s);
                if (o) {
                  let t = o.trim();
                  return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
                    ? parseFloat(t)
                    : t;
                }
                return te(r) ? t(r, i, n + 1) : r;
              })(n, e.current);
              (void 0 !== s && (t[i] = s),
                i === t.length - 1 && (this.finalKeyframe = n));
            }
          }
          if ((this.resolveNoneKeyframes(), !H.has(i) || 2 !== t.length))
            return;
          let [n, s] = t;
          if ("number" == typeof n && "number" == typeof s) return;
          let r = _(n),
            o = _(s);
          if (tn(n) !== tn(s) && tb[i]) {
            this.needsMeasurement = !0;
            return;
          }
          if (r !== o)
            if (tv(r) && tv(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else tb[i] && (this.needsMeasurement = !0);
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++)
            (null === t[e] ||
              (function (t) {
                if ("number" == typeof t) return 0 === t;
                if (null === t) return !0;
                return "none" === t || "0" === t || /^0[^.\s]+$/u.test(t);
              })(t[e])) &&
              i.push(e);
          i.length &&
            (function (t, e, i) {
              let n,
                s = 0;
              for (; s < t.length && !n;) {
                let e = t[s];
                ("string" == typeof e &&
                  !tD.has(e) &&
                  (function (t) {
                    let e = t.toString();
                    return E.test(e) || M.test(e);
                  })(e) &&
                  (n = t[s]),
                  s++);
              }
              if (n && i) for (let s of e) t[s] !== n && (t[s] = to(i, n));
            })(t, i, e);
        }
        measure() {
          let { element: t, name: e } = this;
          return tb[e](window.getComputedStyle(t.current), () =>
            t.measureViewportBox(),
          );
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          ("height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = this.measure()),
            (e[0] = this.measuredOrigin));
          let n = e[e.length - 1];
          void 0 !== n && this.motionValue?.jump(n, !1);
        }
        measureEndState() {
          let { element: t, unresolvedKeyframes: e } = this;
          if (!t || !t.current) return;
          this.motionValue?.jump(this.measuredOrigin, !1);
          let i = e.length - 1,
            n = e[i];
          ((e[i] = this.measure()),
            null !== n &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = n),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i);
              }),
            this.resolveNoneKeyframes());
        }
      }
      let tL = (t) => 1e3 * t;
      var tB = i(73852),
        tj = i(72025);
      function tF(t, e, i) {
        e.startsWith("--") ? t.style.setProperty(e, i) : (t.style[e] = i);
      }
      var tI = i(69166);
      let tO = (t) => null !== t;
      function tW(t, { repeat: e, repeatType: i = "loop" }, n, s = 1) {
        let r = t.filter(tO),
          o = s < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : r.length - 1;
        return o && void 0 !== n ? n : r[o];
      }
      class tU {
        constructor() {
          this.isResolved = !1;
        }
        get finished() {
          return (
            this._finished ||
              (this._finished = this.isResolved
                ? Promise.resolve()
                : new Promise((t) => {
                    this._resolve = t;
                  })),
            this._finished
          );
        }
        updateFinished() {
          ((this._finished = this._resolve = void 0), (this.isResolved = !1));
        }
        notifyFinished() {
          ((this.isResolved = !0), this._resolve?.());
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
      var t$ = i(37035);
      function tN(t, e) {
        return {
          kind: t,
          animation: e,
          timestamp: t$.k.now(),
          frameTimestamp: tP.uv.timestamp,
          frameIsProcessing: tP.uv.isProcessing,
        };
      }
      function tG(t, e, i) {
        let n = globalThis.__MOTION_INSPECT__;
        if (n)
          try {
            n({ ...tN("animation-start", t), options: i ? { ...e, ...i } : e });
          } catch {}
      }
      let tz = (t) => Array.isArray(t) && "number" == typeof t[0],
        tq = (0, i(7145).J)(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        tX = (t, e, i = 10) => {
          let n = "",
            s = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < s; e++)
            n += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
          return `linear(${n.substring(0, n.length - 2)})`;
        },
        tY = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        tH = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tY([0, 0.65, 0.55, 1]),
          circOut: tY([0.55, 0, 1, 0.45]),
          backIn: tY([0.31, 0.01, 0.66, -0.59]),
          backOut: tY([0.33, 1.53, 0.69, 0.99]),
        };
      function tK(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class t_ extends tU {
        constructor(t) {
          if (
            (super(),
            (this.finishedTime = null),
            (this.isStopped = !1),
            (this.manualStartTime = null),
            !t)
          )
            return;
          let {
            element: e,
            name: i,
            keyframes: n,
            pseudoElement: s,
            allowFlatten: r = !1,
            finalKeyframe: o,
            onComplete: a,
          } = t;
          ((this.isPseudoElement = !!s),
            (this.allowFlatten = r),
            (this.options = t),
            (0, Z.V)(
              "string" != typeof t.type,
              'Mini animate() doesn\'t support "type" as a string.',
              "mini-spring",
            ));
          let l = (function ({ type: t, ...e }) {
            return tK(t) && tq()
              ? t.applyToOptions(e)
              : (e.duration ?? (e.duration = 300),
                e.ease ?? (e.ease = "easeOut"),
                e);
          })(t);
          ((this.animation = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: s = 300,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a = "easeOut",
              times: l,
            } = {},
            h,
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let d = (function t(e, i) {
              if (e)
                return "function" == typeof e
                  ? tq()
                    ? tX(e, i)
                    : "ease-out"
                  : tz(e)
                    ? tY(e)
                    : Array.isArray(e)
                      ? e.map((e) => t(e, i) || tH.easeOut)
                      : tH[e];
            })(a, s);
            Array.isArray(d) && (u.easing = d);
            let c = {
              delay: n,
              duration: s,
              easing: Array.isArray(d) ? "linear" : d,
              fill: "both",
              iterations: r + 1,
              direction: "reverse" === o ? "alternate" : "normal",
            };
            return (h && (c.pseudoElement = h), t.animate(u, c));
          })(e, i, n, l, s)),
            !1 === l.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !s)) {
                let t = tW(n, this.options, o, this.speed);
                (this.updateMotionValue && this.updateMotionValue(t),
                  tF(e, i, t),
                  this.animation.cancel());
              }
              (a?.(), this.notifyFinished());
            }),
            tG(this, t, l));
        }
        play() {
          this.isStopped ||
            ((this.manualStartTime = null),
            this.animation.play(),
            "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: t } = this;
          "idle" !== t &&
            "finished" !== t &&
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          let t = this.options?.element;
          !this.isPseudoElement &&
            t?.isConnected &&
            this.animation.commitStyles?.();
        }
        get duration() {
          return (
            Number(this.animation.effect?.getComputedTiming?.().duration || 0) /
            1e3
          );
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + t / 1e3;
        }
        get time() {
          return (Number(this.animation.currentTime) || 0) / 1e3;
        }
        set time(t) {
          let e = null !== this.finishedTime;
          ((this.manualStartTime = null),
            (this.finishedTime = null),
            (this.animation.currentTime = tL(t)),
            e && this.animation.pause());
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          (t < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = t));
        }
        get state() {
          return null !== this.finishedTime
            ? "finished"
            : this.animation.playState;
        }
        get startTime() {
          return this.manualStartTime ?? Number(this.animation.startTime);
        }
        set startTime(t) {
          this.manualStartTime = this.animation.startTime = t;
        }
        attachTimeline({
          timeline: t,
          rangeStart: e,
          rangeEnd: i,
          observe: n,
        }) {
          return (this.allowFlatten &&
            this.animation.effect?.updateTiming({ easing: "linear" }),
          (this.animation.onfinish = null),
          t && (0, tI.J)())
            ? ((this.animation.timeline = t),
              e && (this.animation.rangeStart = e),
              i && (this.animation.rangeEnd = i),
              tj.l)
            : n(this);
        }
      }
      let tZ = new Set([
        "opacity",
        "clipPath",
        "filter",
        "transform",
        "backgroundColor",
      ]);
      var tQ = i(38873),
        tJ = i(6900);
      let t0 = new WeakMap();
      function t1(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function t5(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let t2 = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        t3 = ["initial", ...t2];
      function t9(t) {
        if (t1(t.animate)) return !0;
        for (let e = 0; e < t3.length; e++) if (t5(t[t3[e]])) return !0;
        return !1;
      }
      function t7(t) {
        return !!(t9(t) || t.variants);
      }
      let t6 = { current: null },
        t8 = { current: !1 },
        t4 = "u" > typeof window;
      function et(t) {
        let e = [{}, {}];
        return (
          t?.values.forEach((t, i) => {
            ((e[0][i] = t.get()), (e[1][i] = t.getVelocity()));
          }),
          e
        );
      }
      function ee(t, e, i, n) {
        if ("function" == typeof e) {
          let [s, r] = et(n);
          e = e(void 0 !== i ? i : t.custom, s, r);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, r] = et(n);
          e = e(void 0 !== i ? i : t.custom, s, r);
        }
        return e;
      }
      let ei = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        en = {};
      class es {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            skipAnimations: s,
            blockInitialAnimation: r,
            visualState: o,
          },
          a = {},
        ) {
          ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.shouldSkipAnimations = !1),
            (this.values = new Map()),
            (this.KeyframeResolver = tk),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.hasBeenMounted = !1),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = t$.k.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                tP.Gt.render(this.render, !1, !0));
            }));
          let { latestValues: l, renderState: h } = o;
          ((this.latestValues = l),
            (this.baseTarget = { ...l }),
            (this.initialValues = e.initial ? { ...l } : {}),
            (this.renderState = h),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.skipAnimationsConfig = s),
            (this.options = a),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = t9(e)),
            (this.isVariantNode = t7(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current)));
          let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== l[t] && Y(e) && e.set(l[t]);
          }
        }
        mount(t) {
          if (this.hasBeenMounted)
            for (let t in this.initialValues)
              (this.values.get(t)?.jump(this.initialValues[t]),
                (this.latestValues[t] = this.initialValues[t]));
          ((this.current = t),
            t0.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            "never" === this.reducedMotionConfig
              ? (this.shouldReduceMotion = !1)
              : "always" === this.reducedMotionConfig
                ? (this.shouldReduceMotion = !0)
                : (t8.current ||
                    (function () {
                      if (((t8.current = !0), t4))
                        if (window.matchMedia) {
                          let t = window.matchMedia("(prefers-reduced-motion)"),
                            e = () => (t6.current = t.matches);
                          (t.addEventListener("change", e), e());
                        } else t6.current = !1;
                    })(),
                  (this.shouldReduceMotion = t6.current)),
            (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext),
            (this.hasBeenMounted = !0));
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          (0, tP.WG)(this.notifyUpdate),
          (0, tP.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent?.removeChild(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        addChild(t) {
          (this.children.add(t),
            this.enteringChildren ?? (this.enteringChildren = new Set()),
            this.enteringChildren.add(t));
        }
        removeChild(t) {
          (this.children.delete(t),
            this.enteringChildren && this.enteringChildren.delete(t));
        }
        bindToMotionValue(t, e) {
          let i;
          if (
            (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
            e.accelerate && tZ.has(t) && this.current instanceof HTMLElement)
          ) {
            let {
                factory: i,
                keyframes: n,
                times: s,
                ease: r,
                duration: o,
              } = e.accelerate,
              a = new t_({
                element: this.current,
                name: t,
                keyframes: n,
                times: s,
                ease: r,
                duration: tL(o),
              }),
              l = i(a);
            this.valueSubscriptions.set(t, () => {
              (l(), a.cancel());
            });
            return;
          }
          let n = s.has(t);
          n && this.onBindTransform && this.onBindTransform();
          let r = e.on("change", (e) => {
            ((this.latestValues[t] = e),
              this.props.onUpdate && tP.Gt.preRender(this.notifyUpdate),
              n && this.projection && (this.projection.isTransformDirty = !0),
              this.scheduleRender());
          });
          ("u" > typeof window &&
            window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              (r(), i && i());
            }));
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in en) {
            let e = en[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : X();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          ((t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e));
          for (let e = 0; e < ei.length; e++) {
            let i = ei[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          ((this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let s = e[n],
                r = i[n];
              if (Y(s)) t.addValue(n, s);
              else if (Y(r)) t.addValue(n, (0, tJ.OQ)(s, { owner: t }));
              else if (r !== s)
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, tJ.OQ)(void 0 !== e ? e : s, { owner: t }));
                }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue());
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          (e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState));
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, tJ.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          let i =
            void 0 === this.latestValues[t] && this.current
              ? (this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options))
              : this.latestValues[t];
          if (null != i) {
            let n, s;
            ("string" == typeof i &&
            ((n = i),
            /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n) ||
              ((s = i), /^0[^.\s]+$/u.test(s)))
              ? (i = parseFloat(i))
              : "number" != typeof i &&
                !L.test(i) &&
                L.test(e) &&
                (i = to(t, e)),
              this.setBaseTarget(t, Y(i) ? i.get() : i));
          }
          return Y(i) ? i.get() : i;
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          let e,
            { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let n = ee(this.props, i, this.presenceContext?.custom);
            n && (e = n[t]);
          }
          if (i && void 0 !== e) return e;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || Y(n)
            ? void 0 !== this.initialValues[t] && void 0 === e
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new tB.v()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
        scheduleRenderMicrotask() {
          tQ.k.render(this.render);
        }
      }
      class er extends es {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = tR));
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          let i = t.style;
          return i ? i[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          (delete e[t], delete i[t]);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          Y(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      function eo(t) {
        return t.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
      }
      let ea = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        el = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        eh = n.length;
      function eu(t, e, i) {
        let { style: r, vars: o, transformOrigin: a } = t,
          l = !1,
          h = !1;
        for (let t in e) {
          let i = e[t];
          if (s.has(t)) {
            l = !0;
            continue;
          }
          if (J(t)) {
            o[t] = i;
            continue;
          }
          {
            let e = ea(i, U[t]);
            t.startsWith("origin") ? ((h = !0), (a[t] = e)) : (r[t] = e);
          }
        }
        if (
          (!e.transform &&
            (l || i
              ? (r.transform = (function (t, e, i) {
                  let s = "",
                    r = !0;
                  for (let o = 0; o < eh; o++) {
                    let a = n[o],
                      l = t[a];
                    if (void 0 === l) continue;
                    let h = !0;
                    if ("number" == typeof l)
                      h = l === +!!a.startsWith("scale");
                    else {
                      let t = parseFloat(l);
                      h = a.startsWith("scale") ? 1 === t : 0 === t;
                    }
                    if (!h || i) {
                      let t = ea(l, U[a]);
                      if (!h) {
                        r = !1;
                        let e = el[a] || a;
                        s += `${e}(${t}) `;
                      }
                      i && (e[a] = t);
                    }
                  }
                  let o = t.pathRotation;
                  return (
                    o && ((r = !1), (s += `rotate(${ea(o, U.pathRotation)}) `)),
                    (s = s.trim()),
                    i ? (s = i(e, r ? "" : s)) : r && (s = "none"),
                    s
                  );
                })(e, t.transform, i))
              : r.transform && (r.transform = "none")),
          h)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          r.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let ed = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        ec = { offset: "strokeDashoffset", array: "strokeDasharray" },
        ep = [
          "transform",
          "opacity",
          "offsetDistance",
          "offsetPath",
          "offsetRotate",
          "offsetAnchor",
        ];
      function em(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          pathLength: s,
          pathSpacing: r = 1,
          pathOffset: o = 0,
          ...a
        },
        l,
        h,
        u,
      ) {
        if ((eu(t, a, h), l)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        ((t.attrs = t.style), (t.style = {}));
        let { attrs: d, style: c } = t;
        for (let t of ep) void 0 !== d[t] && ((c[t] = d[t]), delete d[t]);
        ((c.transform || d.transformOrigin) &&
          ((c.transformOrigin = d.transformOrigin ?? "50% 50%"),
          delete d.transformOrigin),
          c.transform &&
            ((c.transformBox = u?.transformBox ?? "fill-box"),
            delete d.transformBox),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== s &&
            (function (t, e, i = 1, n = 0, s = !0) {
              t.pathLength = 1;
              let r = s ? ed : ec;
              ((t[r.offset] = `${-n}`), (t[r.array] = `${e} ${i}`));
            })(d, s, r, o, !1));
      }
      let ef = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
          "startOffset",
          "textLength",
          "lengthAdjust",
        ]),
        ey = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function ev(t, { style: e, vars: i }, n, s) {
        let r,
          o = t.style;
        for (r in e) o[r] = e[r];
        for (r in (s?.applyProjectionStyles(o, n), i)) o.setProperty(r, i[r]);
      }
      let eg = [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomRightRadius",
        "borderBottomLeftRadius",
      ];
      function ex(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ew = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t)
              if (!w.test(t)) return t;
              else t = parseFloat(t);
            let i = ex(t, e.target.x),
              n = ex(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        eT = (t, e, i) => t + (e - t) * i,
        eb = {
          borderRadius: { ...ew, applyTo: [...eg] },
          borderTopLeftRadius: ew,
          borderTopRightRadius: ew,
          borderBottomLeftRadius: ew,
          borderBottomRightRadius: ew,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let n = L.parse(t);
              if (n.length > 5) return t;
              let s = L.createTransformer(t),
                r = +("number" != typeof n[0]),
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              ((n[0 + r] /= o), (n[1 + r] /= a));
              let l = eT(o, a, 0.5);
              return (
                "number" == typeof n[2 + r] && (n[2 + r] /= l),
                "number" == typeof n[3 + r] && (n[3 + r] /= l),
                s(n)
              );
            },
          },
        };
      function eP(t, { layout: e, layoutId: i }) {
        return (
          s.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!eb[t] || "opacity" === t))
        );
      }
      function eS(t, e, i) {
        let n = t.style,
          s = e?.style,
          r = {};
        if (!n) return r;
        for (let e in n)
          (Y(n[e]) ||
            (s && Y(s[e])) ||
            eP(e, t) ||
            i?.getValue(e)?.liveStyle !== void 0) &&
            (r[e] = n[e]);
        return r;
      }
      function eA(t, e, i) {
        let s = eS(t, e, i);
        for (let i in t)
          (Y(t[i]) || Y(e[i])) &&
            (s[
              -1 !== n.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return s;
      }
      class eE extends er {
        constructor() {
          (super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = X));
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (s.has(e)) {
            let t = N(e);
            return (t && t.default) || 0;
          }
          if (ep.includes(e)) {
            let i = getComputedStyle(t)[e];
            if ("string" == typeof i && i) return i.trim();
          }
          return ((e = ef.has(e) ? e : eo(e)), t.getAttribute(e));
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return eA(t, e, i);
        }
        build(t, e, i) {
          em(t, e, this.isSVGTag, i.transformTemplate, i.style);
        }
        renderInstance(t, e, i, n) {
          for (let i in (ev(t, e, void 0, n), e.attrs))
            t.setAttribute(ef.has(i) ? i : eo(i), e.attrs[i]);
        }
        mount(t) {
          ((this.isSVGTag = ey(t.tagName)), super.mount(t));
        }
      }
      function eM({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function eC(t) {
        return void 0 === t || 1 === t;
      }
      function eV({ scale: t, scaleX: e, scaleY: i }) {
        return !eC(t) || !eC(e) || !eC(i);
      }
      function ek(t) {
        return (
          eV(t) ||
          eD(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function eD(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function eR(t, e, i, n, s) {
        return (void 0 !== s && (t = n + s * (t - n)), n + i * (t - n) + e);
      }
      function eL(t, e = 0, i = 1, n, s) {
        ((t.min = eR(t.min, e, i, n, s)), (t.max = eR(t.max, e, i, n, s)));
      }
      function eB(t, { x: e, y: i }) {
        (eL(t.x, e.translate, e.scale, e.originPoint),
          eL(t.y, i.translate, i.scale, i.originPoint));
      }
      function ej(t, e) {
        ((t.min += e), (t.max += e));
      }
      function eF(t, e, i, n, s = 0.5) {
        let r = eT(t.min, t.max, s);
        eL(t, e, i, r, n);
      }
      function eI(t, e) {
        return "string" == typeof t
          ? (parseFloat(t) / 100) * (e.max - e.min)
          : t;
      }
      function eO(t, e, i) {
        let n = i ?? t;
        (eF(t.x, eI(e.x, n.x), e.scaleX, e.scale, e.originX),
          eF(t.y, eI(e.y, n.y), e.scaleY, e.scale, e.originY));
      }
      function eW(t, e) {
        return eM(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e),
        );
      }
      class eU extends er {
        constructor() {
          (super(...arguments),
            (this.type = "html"),
            (this.renderInstance = ev));
        }
        mount(t) {
          ((0, Z.V)(
            !!t.style,
            "motion.create() components must forward their ref to a HTML or SVG element",
            "custom-component-ref",
          ),
            super.mount(t));
        }
        readValueFromInstance(t, e) {
          if (s.has(e))
            return this.projection?.isProjecting
              ? tm(e)
              : ((t, e) => {
                  let { transform: i = "none" } = getComputedStyle(t);
                  return tf(i, e);
                })(t, e);
          {
            let i = window.getComputedStyle(t),
              n = (J(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return eW(t, e);
        }
        build(t, e, i) {
          eu(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return eS(t, e, i);
        }
      }
      var e$ = i(12115);
      let eN = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function eG(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (eN.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var ez = i(95155),
        eq = i(39551);
      let eX = (0, e$.createContext)({ strict: !1 });
      var eY = i(24866);
      let eH = (0, e$.createContext)({});
      function eK(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let e_ = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function eZ(t, e, i) {
        for (let n in e) Y(e[n]) || eP(n, i) || (t[n] = e[n]);
      }
      let eQ = () => ({ ...e_(), attrs: {} }),
        eJ = new Set([
          "animate",
          "exit",
          "variants",
          "initial",
          "style",
          "values",
          "variants",
          "transition",
          "transformTemplate",
          "custom",
          "inherit",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "_dragX",
          "_dragY",
          "onHoverStart",
          "onHoverEnd",
          "onViewportEnter",
          "onViewportLeave",
          "globalTapTarget",
          "propagate",
          "ignoreStrict",
          "viewport",
        ]);
      function e0(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          eJ.has(t)
        );
      }
      function e1(t) {
        return Y(t) ? t.get() : t;
      }
      var e5 = i(15131),
        e2 = i(28819);
      let e3 = (t) => (e, i) => {
          let n = (0, e$.useContext)(eH),
            s = (0, e$.useContext)(e5.t),
            r = () =>
              (function (
                { scrapeMotionValuesFromProps: t, createRenderState: e },
                i,
                n,
                s,
              ) {
                return {
                  latestValues: (function (t, e, i, n) {
                    let s = {},
                      r = n(t, {});
                    for (let t in r) s[t] = e1(r[t]);
                    let { initial: o, animate: a } = t,
                      l = t9(t),
                      h = t7(t);
                    e &&
                      h &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === a && (a = e.animate));
                    let u = !!i && !1 === i.initial,
                      d = (u = u || !1 === o) ? a : o;
                    if (d && "boolean" != typeof d && !t1(d)) {
                      let e = Array.isArray(d) ? d : [d];
                      for (let i = 0; i < e.length; i++) {
                        let n = ee(t, e[i]);
                        if (n) {
                          let { transitionEnd: t, transition: e, ...i } = n;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = u ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (s[t] = e);
                          }
                          for (let e in t) s[e] = t[e];
                        }
                      }
                    }
                    return s;
                  })(i, n, s, t),
                  renderState: e(),
                };
              })(t, e, n, s);
          return i ? r() : (0, e2.M)(r);
        },
        e9 = e3({ scrapeMotionValuesFromProps: eS, createRenderState: e_ }),
        e7 = e3({ scrapeMotionValuesFromProps: eA, createRenderState: eQ }),
        e6 = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        e8 = !1;
      function e4() {
        return (
          !(function () {
            if (e8) return;
            let t = {};
            for (let e in e6)
              t[e] = { isEnabled: (t) => e6[e].some((e) => !!t[e]) };
            ((en = t), (e8 = !0));
          })(),
          en
        );
      }
      let it = Symbol.for("motionComponentSymbol"),
        ie = "data-" + eo("framerAppearId"),
        ii = (0, e$.createContext)({});
      function is(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var ir = i(65239);
      function io(t, { forwardMotionProps: e = !1, type: i } = {}, n, s) {
        n &&
          (function (t) {
            let e = e4();
            for (let i in t) e[i] = { ...e[i], ...t[i] };
            en = e;
          })(n);
        let r = i ? "svg" === i : eG(t),
          o = r ? e7 : e9;
        function a(i, n) {
          var a;
          let l,
            h,
            u,
            d = {
              ...(0, e$.useContext)(eY.Q),
              ...i,
              layoutId: (function ({ layoutId: t }) {
                let e = (0, e$.useContext)(eq.L).id;
                return e && void 0 !== t ? e + "-" + t : t;
              })(i),
            },
            { isStatic: c, isValidProp: p } = d,
            m = (function (t) {
              let { initial: e, animate: i } = (function (t, e) {
                if (t9(t)) {
                  let { initial: e, animate: i } = t;
                  return {
                    initial: !1 === e || t5(e) ? e : void 0,
                    animate: t5(i) ? i : void 0,
                  };
                }
                return !1 !== t.inherit ? e : {};
              })(t, (0, e$.useContext)(eH));
              return (0, e$.useMemo)(
                () => ({ initial: e, animate: i }),
                [eK(e), eK(i)],
              );
            })(i),
            f = o(i, c);
          if (!c && "u" > typeof window) {
            (0, e$.useContext)(eX).strict;
            let e = (function (t) {
              let { drag: e, layout: i } = e4();
              if (!e && !i) return {};
              let n = { ...e, ...i };
              return {
                MeasureLayout:
                  e?.isEnabled(t) || i?.isEnabled(t) ? n.MeasureLayout : void 0,
                ProjectionNode: n.ProjectionNode,
              };
            })(d);
            ((l = e.MeasureLayout),
              (m.visualElement = (function (t, e, i, n, s, r) {
                let { visualElement: o } = (0, e$.useContext)(eH),
                  a = (0, e$.useContext)(eX),
                  l = (0, e$.useContext)(e5.t),
                  h = (0, e$.useContext)(eY.Q),
                  u = h.reducedMotion,
                  d = h.skipAnimations,
                  c = (0, e$.useRef)(null),
                  p = (0, e$.useRef)(!1);
                ((n = n || a.renderer),
                  !c.current &&
                    n &&
                    ((c.current = n(t, {
                      visualState: e,
                      parent: o,
                      props: i,
                      presenceContext: l,
                      blockInitialAnimation: !!l && !1 === l.initial,
                      reducedMotionConfig: u,
                      skipAnimations: d,
                      isSVG: r,
                    })),
                    p.current &&
                      c.current &&
                      (c.current.manuallyAnimateOnMount = !0)));
                let m = c.current,
                  f = (0, e$.useContext)(ii);
                m &&
                  !m.projection &&
                  s &&
                  ("html" === m.type || "svg" === m.type) &&
                  (function (t, e, i, n) {
                    let {
                      layoutId: s,
                      layout: r,
                      drag: o,
                      dragConstraints: a,
                      layoutScroll: l,
                      layoutRoot: h,
                      layoutAnchor: u,
                      layoutCrossfade: d,
                    } = e;
                    ((t.projection = new i(
                      t.latestValues,
                      e["data-framer-portal-id"]
                        ? void 0
                        : (function t(e) {
                            if (e)
                              return !1 !== e.options.allowProjection
                                ? e.projection
                                : t(e.parent);
                          })(t.parent),
                    )),
                      t.projection.setOptions({
                        layoutId: s,
                        layout: r,
                        alwaysMeasureLayout: !!o || (a && is(a)),
                        visualElement: t,
                        animationType: "string" == typeof r ? r : "both",
                        initialPromotionConfig: n,
                        crossfade: d,
                        layoutScroll: l,
                        layoutRoot: h,
                        layoutAnchor: u,
                      }));
                  })(c.current, i, s, f);
                let y = (0, e$.useRef)(!1);
                (0, e$.useInsertionEffect)(() => {
                  m && y.current && m.update(i, l);
                });
                let v = i[ie],
                  g = (0, e$.useRef)(
                    !!v &&
                      "u" > typeof window &&
                      !window.MotionHandoffIsComplete?.(v) &&
                      window.MotionHasOptimisedAnimation?.(v),
                  );
                return (
                  (0, ir.E)(() => {
                    p.current &&
                      m &&
                      (m.animationState?.animateChanges(),
                      (m.enteringChildren = void 0));
                  }, []),
                  (0, ir.E)(() => {
                    ((p.current = !0),
                      m &&
                        ((y.current = !0),
                        (window.MotionIsMounted = !0),
                        m.updateFeatures(),
                        m.scheduleRenderMicrotask(),
                        g.current &&
                          m.animationState &&
                          m.animationState.animateChanges()));
                  }),
                  (0, e$.useEffect)(() => {
                    m &&
                      (!g.current &&
                        m.animationState &&
                        m.animationState.animateChanges(),
                      g.current &&
                        (queueMicrotask(() => {
                          window.MotionHandoffMarkAsComplete?.(v);
                        }),
                        (g.current = !1)),
                      (m.enteringChildren = void 0));
                  }),
                  m
                );
              })(t, f, d, s, e.ProjectionNode, r)));
          }
          return (0, ez.jsxs)(eH.Provider, {
            value: m,
            children: [
              l && m.visualElement
                ? (0, ez.jsx)(l, { visualElement: m.visualElement, ...d })
                : null,
              (function (t, e, i, { latestValues: n }, s, r = !1, o, a) {
                let l = (
                    (o ?? eG(t))
                      ? function (t, e, i, n) {
                          let s = (0, e$.useMemo)(() => {
                            let i = eQ();
                            return (
                              em(i, e, ey(n), t.transformTemplate, t.style),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            (eZ(e, t.style, t),
                              (s.style = { ...e, ...s.style }));
                          }
                          return s;
                        }
                      : function (t, e) {
                          let i,
                            n,
                            s = {},
                            r =
                              ((i = t.style || {}),
                              eZ((n = {}), i, t),
                              Object.assign(
                                n,
                                (function ({ transformTemplate: t }, e) {
                                  return (0, e$.useMemo)(() => {
                                    let i = e_();
                                    return (
                                      eu(i, e, t),
                                      Object.assign({}, i.vars, i.style)
                                    );
                                  }, [e]);
                                })(t, e),
                              ),
                              n);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((s.draggable = !1),
                              (r.userSelect =
                                r.WebkitUserSelect =
                                r.WebkitTouchCallout =
                                  "none"),
                              (r.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (s.tabIndex = 0),
                            (s.style = r),
                            s
                          );
                        }
                  )(e, n, s, t),
                  h = (function (t, e, i, n) {
                    let s = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        !Y(t[r]) &&
                        ((r.startsWith("on") ? !e0(r) : (n?.(r) ?? !e0(r))) ||
                          (!0 === i && e0(r)) ||
                          (!e && !e0(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (s[r] = t[r]);
                    return s;
                  })(e, "string" == typeof t, r, a),
                  u = t !== e$.Fragment ? { ...h, ...l, ref: i } : {},
                  { children: d } = e,
                  c = (0, e$.useMemo)(() => (Y(d) ? d.get() : d), [d]);
                return (0, e$.createElement)(t, { ...u, children: c });
              })(
                t,
                i,
                ((a = m.visualElement),
                (h = (0, e$.useRef)(n)),
                (0, e$.useInsertionEffect)(() => {
                  h.current = n;
                }),
                (u = (0, e$.useRef)(null)),
                (0, e$.useCallback)(
                  (t) => {
                    (t && f.onMount?.(t), a && (t ? a.mount(t) : a.unmount()));
                    let e = h.current;
                    if ("function" == typeof e)
                      if (t) {
                        let i = e(t);
                        "function" == typeof i && (u.current = i);
                      } else
                        u.current ? (u.current(), (u.current = null)) : e(t);
                    else e && (e.current = t);
                  },
                  [a],
                )),
                f,
                c,
                e,
                r,
                p,
              ),
            ],
          });
        }
        a.displayName = `motion.${"string" == typeof t ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
        let l = (0, e$.forwardRef)(a);
        return ((l[it] = t), l);
      }
      class ia {
        constructor(t) {
          ((this.isMounted = !1), (this.node = t));
        }
        update() {}
      }
      function il(t, e, i) {
        let n = t.getProps();
        return ee(n, e, void 0 !== i ? i : n.custom, t);
      }
      function ih(t, e) {
        if (t?.inherit && e) {
          let { inherit: i, ...n } = t;
          return { ...e, ...n };
        }
        return t;
      }
      function iu(t, e) {
        let i = t?.[e] ?? t?.default ?? t;
        return i !== t ? ih(i, t) : i;
      }
      let id = (t) => Array.isArray(t);
      var ic = i(28153);
      function ip(t, e) {
        let i = t.getValue("willChange");
        if (Y(i) && i.add) return i.add(e);
        if (!i && ic.W.WillChange) {
          let i = new ic.W.WillChange("auto");
          (t.addValue("willChange", i), i.add(e));
        }
      }
      let im = (...t) => t.reduce((t, e) => (i) => e(t(i)));
      function iy(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      function iv(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let ig = (t, e, i) => {
          let n = t * t,
            s = i * (e * e - n) + n;
          return s < 0 ? 0 : Math.sqrt(s);
        },
        ix = [y, f, S];
      function iw(t) {
        let e = ix.find((e) => e.test(t));
        if (!e)
          return (
            (0, Z.$)(
              !1,
              `'${t}' is not an animatable color. Use the equivalent color code instead.`,
              "color-not-animatable",
            ),
            !1
          );
        let i = e.parse(t);
        return (
          e === S &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              ((t /= 360), (i /= 100));
              let s = 0,
                r = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                ((s = iy(a, n, t + 1 / 3)),
                  (r = iy(a, n, t)),
                  (o = iy(a, n, t - 1 / 3)));
              } else s = r = o = i;
              return {
                red: Math.round(255 * s),
                green: Math.round(255 * r),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let iT = (t, e) => {
          let i = iw(t),
            n = iw(e);
          if (!i || !n) return iv(t, e);
          let s = { ...i };
          return (t) => (
            (s.red = ig(i.red, n.red, t)),
            (s.green = ig(i.green, n.green, t)),
            (s.blue = ig(i.blue, n.blue, t)),
            (s.alpha = eT(i.alpha, n.alpha, t)),
            f.transform(s)
          );
        },
        ib = new Set(["none", "hidden"]);
      function iP(t, e) {
        return (i) => eT(t, e, i);
      }
      function iS(t) {
        return "number" == typeof t
          ? iP
          : "string" == typeof t
            ? te(t)
              ? iv
              : A.test(t)
                ? iT
                : iM
            : Array.isArray(t)
              ? iA
              : "object" == typeof t
                ? A.test(t)
                  ? iT
                  : iE
                : iv;
      }
      function iA(t, e) {
        let i = [...t],
          n = i.length,
          s = t.map((t, i) => iS(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = s[e](t);
          return i;
        };
      }
      function iE(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let s in i)
          void 0 !== t[s] && void 0 !== e[s] && (n[s] = iS(t[s])(t[s], e[s]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let iM = (t, e) => {
          let i = L.createTransformer(e),
            n = D(t),
            s = D(e);
          if (!(
            n.indexes.var.length === s.indexes.var.length &&
            n.indexes.color.length === s.indexes.color.length &&
            n.indexes.number.length >= s.indexes.number.length
          ))
            return (
              (0, Z.$)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
                "complex-values-different",
              ),
              iv(t, e)
            );
          if (
            (ib.has(t) && !s.values.length) ||
            (ib.has(e) && !n.values.length)
          )
            return ib.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t);
          return im(
            iA(
              (function (t, e) {
                let i = [],
                  n = { color: 0, var: 0, number: 0 };
                for (let s = 0; s < e.values.length; s++) {
                  let r = e.types[s],
                    o = t.indexes[r][n[r]],
                    a = t.values[o] ?? 0;
                  ((i[s] = a), n[r]++);
                }
                return i;
              })(n, s),
              s.values,
            ),
            i,
          );
        },
        iC = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
      function iV(t, e, i) {
        if (
          "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
        )
          return eT(t, e, i);
        if ("string" == typeof t && "string" == typeof e) {
          let i = (function (t, e) {
            let i = iC.exec(t);
            if (!i) return;
            let n = iC.exec(e);
            if (!n || i[2] !== n[2]) return;
            let s = i[2],
              r = parseFloat(i[1]),
              o = parseFloat(n[1]);
            return (t) => h(eT(r, o, t)) + s;
          })(t, e);
          if (i) return i;
        }
        return iS(t)(t, e);
      }
      let ik = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: (t = !0) => tP.Gt.update(e, t),
          stop: () => (0, tP.WG)(e),
          now: () => (tP.uv.isProcessing ? tP.uv.timestamp : t$.k.now()),
        };
      };
      function iD(t, e = 50, i = 2e4, n) {
        let s = 0,
          r = t.next(s);
        for (n?.push(r.value); !r.done && s < i;)
          ((s += e), (r = t.next(s)), n?.push(r.value));
        return s >= i ? 1 / 0 : s;
      }
      let iR = 0.01,
        iL = 2,
        iB = 0.005,
        ij = 0.5;
      function iF(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let iI = (t, e) => (e ? t >= 0 : t > 0) && t < 1 / 0;
      function iO(t, e) {
        if (iI(t, e)) return t;
      }
      function iW(t = 0.3, e = 0.3) {
        let i,
          n,
          s,
          o =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          a = o.keyframes[0],
          l = o.keyframes[o.keyframes.length - 1],
          h = { done: !1, value: a },
          {
            stiffness: u,
            damping: d,
            mass: c,
            duration: p,
            isResolvedFromDuration: m,
            isTimeDefined: f,
          } = (function (t) {
            let e = iO(t.stiffness),
              i = iO(t.damping, !0),
              n = iO(t.mass),
              s = {
                ...t,
                stiffness: e ?? 100,
                damping: i ?? 10,
                mass: n ?? 1,
                isResolvedFromDuration: !1,
                isTimeDefined:
                  (e ?? i ?? n) === void 0 &&
                  (void 0 !== t.duration || void 0 !== t.bounce),
              };
            if (s.isTimeDefined) {
              if (t.visualDuration) {
                let e = (2 * Math.PI) / (1.2 * t.visualDuration);
                ((s.stiffness = e * e),
                  (s.damping =
                    2 *
                    (0, r.q)(0.05, 1, 1 - (t.bounce || 0)) *
                    Math.sqrt(s.stiffness)));
              } else
                (Object.assign(
                  s,
                  (function ({ duration: t = 800, bounce: e = 0.3 }) {
                    let i, n;
                    (0, Z.$)(
                      t <= tL(10),
                      "Spring duration must be 10 seconds or less",
                      "spring-duration-limit",
                    );
                    let s = 1 - e;
                    ((s = (0, r.q)(0.05, 1, s)),
                      (t = (0, r.q)(0.01, 10, t / 1e3)),
                      s < 1
                        ? ((i = (e) => {
                            let i = e * s,
                              n = i * t;
                            return 0.001 - (i / iF(e, s)) * Math.exp(-n);
                          }),
                          (n = (e) => {
                            let n = e * s * t,
                              r = s * s * e * e * t,
                              o = Math.exp(-n),
                              a = iF(e * e, s);
                            return (
                              (-((-i(e) + 0.001 > 0 ? -1 : 1) * r) * o) / a
                            );
                          }))
                        : ((i = (e) => -0.001 + Math.exp(-e * t) * (e * t + 1)),
                          (n = (e) => -(t * t * e * Math.exp(-e * t)))));
                    let o = (function (t, e, i) {
                        let n = i;
                        for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                        return n;
                      })(i, n, 5 / t),
                      a = o * o;
                    return {
                      stiffness: a,
                      damping: 2 * s * Math.sqrt(a),
                      duration: tL(t),
                    };
                  })(s),
                ),
                  (s.isResolvedFromDuration = !0));
              (iI(s.stiffness) && iI(s.damping, !0)) ||
                ((s.stiffness = 100), (s.damping = 10));
            }
            return s;
          })({ ...o }),
          y = (t) => (f ? 0 : -(t / 1e3)),
          v = d / (2 * Math.sqrt(u * c)),
          g = Math.sqrt(u / c) / 1e3,
          x = v * g,
          w = {
            target: l,
            delta: l - a,
            velocity: y(o.velocity || 0) || 0,
            restSpeed: 0,
            restDelta: 0,
          },
          T = () => {
            let t = 5 > Math.abs(w.delta);
            ((w.restSpeed = o.restSpeed || (t ? iR : iL)),
              (w.restDelta = o.restDelta || (t ? iB : ij)));
          };
        if ((T(), v < 1)) {
          let t = iF(g, v),
            e = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
          s = () => {
            ((e.A = (w.velocity + x * w.delta) / t),
              (e.sinC = x * e.A + w.delta * t),
              (e.cosC = x * w.delta - e.A * t));
          };
          let r = (i) => {
            i !== e.t &&
              ((e.t = i),
              (e.env = Math.exp(-x * i)),
              (e.sin = Math.sin(t * i)),
              (e.cos = Math.cos(t * i)));
          };
          ((i = (t) => (
            r(t),
            w.target - e.env * (e.A * e.sin + w.delta * e.cos)
          )),
            (n = (t) => (r(t), e.env * (e.sinC * e.sin + e.cosC * e.cos))));
        } else if (1 === v) {
          i = (t) =>
            w.target -
            Math.exp(-g * t) * (w.delta + (w.velocity + g * w.delta) * t);
          let t = { C: 0 };
          ((s = () => {
            t.C = w.velocity + g * w.delta;
          }),
            (n = (e) => Math.exp(-g * e) * (g * t.C * e - w.velocity)));
        } else {
          let t = g * Math.sqrt(v * v - 1);
          i = (e) => {
            let i = Math.exp(-x * e),
              n = Math.min(t * e, 300);
            return (
              w.target -
              (i *
                ((w.velocity + x * w.delta) * Math.sinh(n) +
                  t * w.delta * Math.cosh(n))) /
                t
            );
          };
          let e = { P: 0, sinh: 0, cosh: 0 };
          ((s = () => {
            ((e.P = (w.velocity + x * w.delta) / t),
              (e.sinh = x * e.P - w.delta * t),
              (e.cosh = x * w.delta - e.P * t));
          }),
            (n = (i) => {
              let n = Math.exp(-x * i),
                s = Math.min(t * i, 300);
              return n * (e.sinh * Math.sinh(s) + e.cosh * Math.cosh(s));
            }));
        }
        s();
        let b = (m && p) || null,
          P = {
            calculatedDuration: b,
            retarget: (t, e) => {
              ((w.target = t[t.length - 1]),
                (w.delta = w.target - t[0]),
                (w.velocity = y(e)),
                (o.restSpeed && o.restDelta) || T(),
                (P.calculatedDuration = b),
                (h.done = !1),
                s());
            },
            velocity: (t) => tL(n(t)),
            next: (t) => {
              let e = i(t);
              return (
                m
                  ? (h.done = t >= p)
                  : (h.done =
                      Math.abs(tL(n(t))) <= w.restSpeed &&
                      Math.abs(w.target - e) <= w.restDelta),
                (h.value = h.done ? w.target : e),
                h
              );
            },
            toString: () => {
              let t = Math.min(iD(P), 2e4),
                e = tX((e) => P.next(t * e).value, t, 30);
              return t + "ms " + e;
            },
            toTransition: () => {},
          };
        return P;
      }
      function iU({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: s = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: h = 0.5,
        restSpeed: u,
      }) {
        let d,
          c,
          p = t[0],
          m = { done: !1, value: p },
          f = i * e,
          y = p + f,
          v = void 0 === o ? y : o(y);
        v !== y && (f = v - p);
        let g = (t) => -f * Math.exp(-t / n),
          x = (t) => {
            let e = g(t);
            ((m.done = Math.abs(e) <= h), (m.value = m.done ? v : v + e));
          },
          w = (t) => {
            let e;
            if ((e = m.value) < a || e > l) {
              var i;
              ((d = t),
                (c = iW({
                  keyframes: [
                    m.value,
                    ((i = m.value),
                    void 0 === a
                      ? l
                      : void 0 === l || Math.abs(a - i) < Math.abs(l - i)
                        ? a
                        : l),
                  ],
                  velocity: (-g(t) / n) * 1e3,
                  damping: s,
                  stiffness: r,
                  restDelta: h,
                  restSpeed: u,
                })));
            }
          };
        return (
          w(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), x(t), w(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || x(t), m);
            },
          }
        );
      }
      iW.applyToOptions = (t) => {
        let e = (function (t, e = 100, i) {
          let n = i({ ...t, keyframes: [0, e] }),
            s = Math.min(iD(n), 2e4);
          return {
            type: "keyframes",
            ease: (t) => n.next(s * t).value / e,
            duration: s / 1e3,
          };
        })(t, 100, iW);
        return (
          (t.ease = e.ease),
          (t.duration = tL(e.duration)),
          (t.type = "keyframes"),
          t
        );
      };
      let i$ = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function iN(t, e, i, n) {
        return t === e && i === n
          ? tj.l
          : (s) =>
              0 === s || 1 === s
                ? s
                : i$(
                    (function (t, e, i, n, s) {
                      let r,
                        o,
                        a = 0;
                      do
                        (r = i$((o = e + (i - e) / 2), n, s) - t) > 0
                          ? (i = o)
                          : (e = o);
                      while (Math.abs(r) > 1e-7 && ++a < 12);
                      return o;
                    })(s, 0, 1, t, i),
                    e,
                    n,
                  );
      }
      let iG = iN(0.42, 0, 1, 1),
        iz = iN(0, 0, 0.58, 1),
        iq = iN(0.42, 0, 0.58, 1),
        iX = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
        iY = (t) => (e) => 1 - t(1 - e),
        iH = iN(0.33, 1.53, 0.69, 0.99),
        iK = iY(iH),
        i_ = iX(iK),
        iZ = (t) =>
          t >= 1
            ? 1
            : (t *= 2) < 1
              ? 0.5 * iK(t)
              : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        iQ = (t) => 1 - Math.sin(Math.acos(t)),
        iJ = iY(iQ),
        i0 = iX(iQ),
        i1 = {
          linear: tj.l,
          easeIn: iG,
          easeInOut: iq,
          easeOut: iz,
          circIn: iQ,
          circInOut: i0,
          circOut: iJ,
          backIn: iK,
          backInOut: i_,
          backOut: iH,
          anticipate: iZ,
        },
        i5 = (t) => {
          if (tz(t)) {
            (0, Z.V)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
              "cubic-bezier-length",
            );
            let [e, i, n, s] = t;
            return iN(e, i, n, s);
          }
          return "string" == typeof t
            ? ((0, Z.V)(
                void 0 !== i1[t],
                `Invalid easing type '${t}'`,
                "invalid-easing-type",
              ),
              i1[t])
            : t;
        };
      var i2 = i(18844);
      function i3({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        var s;
        let o,
          a =
            Array.isArray(n) && "number" != typeof n[0]
              ? n.map(i5)
              : i5(n) || iq,
          l = { done: !1, value: e[0] };
        if (
          2 === e.length &&
          !Array.isArray(a) &&
          (!i || 2 !== i.length || (0 === i[0] && 1 === i[1]))
        ) {
          let [i, n] = e,
            s = i === n ? void 0 : (ic.W.mix || iV)(i, n);
          return {
            calculatedDuration: t,
            next: (e) => (
              (l.value = s ? s(a(t > 0 ? (0, r.q)(0, 1, e / t) : 1)) : n),
              (l.done = e >= t),
              l
            ),
          };
        }
        let h = (function (t, e, { clamp: i = !0, ease: n, mixer: s } = {}) {
          let o = t.length;
          if (
            ((0, Z.V)(
              o === e.length,
              "Both input and output ranges must be the same length",
              "range-length",
            ),
            1 === o)
          )
            return () => e[0];
          if (2 === o && e[0] === e[1]) return () => e[1];
          let a = t[0] === t[1];
          t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
          let l = (function (t, e, i) {
              let n = [],
                s = i || ic.W.mix || iV,
                r = t.length - 1;
              for (let i = 0; i < r; i++) {
                let r = s(t[i], t[i + 1]);
                (e && (r = im(Array.isArray(e) ? e[i] || tj.l : e, r)),
                  n.push(r));
              }
              return n;
            })(e, n, s),
            h = l.length,
            u = (i) => {
              if (a && i < t[0]) return e[0];
              let n = 0;
              if (h > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
              let s = (0, i2.q)(t[n], t[n + 1], i);
              return l[n](s);
            };
          return i ? (e) => u((0, r.q)(t[0], t[o - 1], e)) : u;
        })(
          ((s =
            i && i.length === e.length
              ? i
              : (!(function (t, e) {
                  let i = t[t.length - 1];
                  for (let n = 1; n <= e; n++) {
                    let s = (0, i2.q)(0, e, n);
                    t.push(eT(i, 1, s));
                  }
                })((o = [0]), e.length - 1),
                o)),
          s.map((e) => e * t)),
          e,
          {
            ease: Array.isArray(a)
              ? a
              : e.map(() => a || iq).splice(0, e.length - 1),
          },
        );
        return {
          calculatedDuration: t,
          next: (e) => ((l.value = h(e)), (l.done = e >= t), l),
        };
      }
      var i9 = i(79537);
      let i7 = { decay: iU, inertia: iU, tween: i3, keyframes: i3, spring: iW };
      function i6(t) {
        "string" == typeof t.type && (t.type = i7[t.type]);
      }
      let i8 = (t) => t / 100;
      class i4 extends tU {
        constructor(t) {
          (super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.delayState = { done: !1, value: void 0 }),
            (this.stop = () => {
              let { motionValue: t } = this.options;
              (t && t.updatedAt !== t$.k.now() && this.tick(t$.k.now()),
                (this.isStopped = !0),
                "idle" !== this.state &&
                  (this.teardown(), this.options.onStop?.()));
            }),
            (this.options = t),
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause(),
            tG(this, this.options));
        }
        initAnimation() {
          let { options: t } = this;
          i6(t);
          let {
              type: e = i3,
              repeat: i = 0,
              repeatDelay: n = 0,
              repeatType: s,
              velocity: r = 0,
            } = t,
            { keyframes: o } = t,
            a = e || i3;
          a !== i3 &&
            "number" != typeof o[0] &&
            ((this.mixKeyframes = im(i8, iV(o[0], o[1]))), (o = [0, 100]));
          let l = a(o === t.keyframes ? t : { ...t, keyframes: o });
          ("mirror" === s &&
            (this.mirroredGenerator = a({
              ...t,
              keyframes: [...o].reverse(),
              velocity: -r,
            })),
            null === l.calculatedDuration && (l.calculatedDuration = iD(l)));
          let { calculatedDuration: h } = l;
          ((this.calculatedDuration = h),
            (this.resolvedDuration = h + n),
            (this.totalDuration = this.resolvedDuration * (i + 1) - n),
            (this.generator = l));
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = e);
        }
        tick(t, e = !1) {
          let i,
            {
              generator: n,
              totalDuration: s,
              mixKeyframes: o,
              mirroredGenerator: a,
              resolvedDuration: l,
              calculatedDuration: h,
            } = this;
          if (null === this.startTime) return n.next(0);
          let {
            delay: u = 0,
            keyframes: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            type: f,
            onUpdate: y,
            finalKeyframe: v,
          } = this.options;
          (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - s / this.speed, this.startTime)),
            e ? (this.currentTime = t) : this.updateTime(t));
          let g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
            x = this.playbackSpeed >= 0 ? g < 0 : g > s;
          ((this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = s));
          let w = this.currentTime,
            T = n;
          if (c) {
            let t = Math.min(this.currentTime, s) / l,
              e = Math.floor(t),
              i = t % 1;
            (!i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / l))
                  : "mirror" === p && (T = a)),
              (w = (0, r.q)(0, 1, i) * l));
          }
          (x
            ? ((this.delayState.value = d[0]), (i = this.delayState))
            : (i = T.next(w)),
            o && !x && (i.value = o(i.value)));
          let { done: b } = i;
          x ||
            null === h ||
            (b =
              this.playbackSpeed >= 0
                ? this.currentTime >= s
                : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && b));
          return (
            P && f !== iU && (i.value = tW(d, this.options, v, this.speed)),
            y && y(i.value),
            P && this.finish(),
            i
          );
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return this.calculatedDuration / 1e3;
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + t / 1e3;
        }
        get time() {
          return this.currentTime / 1e3;
        }
        set time(t) {
          ((t = tL(t)),
            (this.currentTime = t),
            null === this.startTime ||
            null !== this.holdTime ||
            0 === this.playbackSpeed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver
              ? this.driver.start(!1)
              : ((this.startTime = 0),
                (this.state = "paused"),
                (this.holdTime = t),
                this.tick(t)));
        }
        getGeneratorVelocity() {
          return (function (t, e, i = 0) {
            var n, s;
            let r;
            return e <= 0
              ? i
              : t.velocity
                ? t.velocity(e)
                : ((n = (e) => t.next(e).value),
                  (s = t.next(e).value),
                  (r = Math.max(e - 5, 0)),
                  (0, i9.f)(s - n(r), e - r));
          })(this.generator, this.currentTime, this.options.velocity);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (e && this.driver && this.updateTime(t$.k.now()),
            (this.playbackSpeed = t),
            e && this.driver && (this.time = this.currentTime / 1e3));
        }
        play() {
          if (this.isStopped) return;
          let { driver: t = ik, startTime: e } = this.options;
          (this.driver || (this.driver = t((t) => this.tick(t))),
            this.options.onPlay?.());
          let i = this.driver.now();
          ("finished" === this.state
            ? (this.updateFinished(), (this.startTime = i))
            : null !== this.holdTime
              ? (this.startTime = i - this.holdTime)
              : this.startTime || (this.startTime = e ?? i),
            "finished" === this.state &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start());
        }
        pause() {
          ((this.state = "paused"),
            this.updateTime(t$.k.now()),
            (this.holdTime = this.currentTime));
        }
        complete() {
          ("running" !== this.state && this.play(),
            (this.state = "finished"),
            (this.holdTime = null));
        }
        finish() {
          (this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            this.options.onComplete?.());
        }
        cancel() {
          ((this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.());
        }
        teardown() {
          ((this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null));
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return ((this.startTime = 0), this.tick(t, !0));
        }
        attachTimeline(t) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"),
              (this.options.ease = "linear"),
              this.initAnimation()),
            this.driver?.stop(),
            t.observe(this)
          );
        }
      }
      let nt = { anticipate: iZ, backInOut: i_, circInOut: i0 };
      class ne extends t_ {
        constructor(t) {
          ("string" == typeof t.ease && t.ease in nt && (t.ease = nt[t.ease]),
            i6(t),
            super(t),
            void 0 !== t.startTime &&
              !1 !== t.autoplay &&
              (this.startTime = t.startTime),
            (this.options = t));
        }
        updateMotionValue(t) {
          let {
            motionValue: e,
            onUpdate: i,
            onComplete: n,
            element: s,
            ...o
          } = this.options;
          if (!e) return;
          if (void 0 !== t) return void e.set(t);
          let a = new i4({ ...o, autoplay: !1 }),
            l = Math.max(10, t$.k.now() - this.startTime),
            h = (0, r.q)(0, 10, l - 10),
            u = a.sample(l).value,
            { name: d } = this.options;
          (s && d && tF(s, d, u),
            e.setWithVelocity(a.sample(Math.max(0, l - h)).value, u, h),
            a.stop());
        }
      }
      let ni = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (L.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      function nn(t) {
        ((t.duration = 0), (t.type = "keyframes"));
      }
      var ns = i(96291);
      let nr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
        no = new Set([
          "color",
          "backgroundColor",
          "outlineColor",
          "fill",
          "stroke",
          "borderColor",
          "borderTopColor",
          "borderRightColor",
          "borderBottomColor",
          "borderLeftColor",
        ]),
        na = (0, ns.p)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate"),
        );
      class nl extends tU {
        constructor(t) {
          (super(),
            (this.stop = () => {
              (this._animation &&
                (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel());
            }),
            (this.createdAt = t$.k.now()));
          let { keyframes: e, name: i, motionValue: n, element: s } = t;
          (t.autoplay ?? (t.autoplay = !0),
            t.delay ?? (t.delay = 0),
            t.type ?? (t.type = "keyframes"),
            t.repeat ?? (t.repeat = 0),
            t.repeatDelay ?? (t.repeatDelay = 0),
            t.repeatType ?? (t.repeatType = "loop"));
          let r = s?.KeyframeResolver || tk;
          ((this.keyframeResolver = new r(
            e,
            (e, i, n) => this.onKeyframesResolved(e, i, t, !n),
            i,
            n,
            s,
          )),
            this.keyframeResolver?.scheduleResolve());
        }
        onKeyframesResolved(t, e, i, n) {
          let s;
          this.keyframeResolver = void 0;
          let {
            name: r,
            type: o,
            velocity: a,
            delay: l,
            isHandoff: h,
            onUpdate: u,
          } = i;
          this.resolvedAt = t$.k.now();
          let d = !0;
          !(function (t, e, i, n) {
            let s = t[0];
            if (null === s) return !1;
            if ("display" === e || "visibility" === e) return !0;
            let r = t[t.length - 1],
              o = ni(s, e),
              a = ni(r, e);
            return o && a
              ? (function (t) {
                  let e = t[0];
                  if (1 === t.length) return !0;
                  for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0;
                })(t) ||
                  (("spring" === i || tK(i)) && n)
              : (o !== a &&
                  (0, Z.$)(
                    !1,
                    `You are trying to animate ${e} from "${s}" to "${r}". "${o ? r : s}" is not an animatable value.`,
                    "value-not-animatable",
                  ),
                !1);
          })(t, r, o, a) &&
            ((d = !1),
            (ic.W.instantAnimations || !l) && u?.(tW(t, i, e)),
            (t[0] = t[t.length - 1]),
            nn(i),
            (i.repeat = 0));
          let c = n
              ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                ? this.resolvedAt
                : this.createdAt
              : void 0,
            { onComplete: p } = i;
          if (
            (i.startTime ?? (i.startTime = c),
            (i.finalKeyframe = e),
            (i.keyframes = t),
            (i.onComplete = () => {
              (p?.(), this.notifyFinished());
            }),
            d &&
              !h &&
              (function (t) {
                let {
                  motionValue: e,
                  name: i,
                  repeatDelay: n,
                  repeatType: s,
                  damping: r,
                  type: o,
                  keyframes: a,
                } = t;
                if (!i || !(tZ.has(i) || no.has(i))) return !1;
                let l = e?.owner?.current;
                if (!(l instanceof HTMLElement) && !(l instanceof SVGElement))
                  return !1;
                let { onUpdate: h, transformTemplate: u } = e.owner.getProps();
                return (
                  na() &&
                  (tZ.has(i) ||
                    (no.has(i) &&
                      (function (t) {
                        for (let e = 0; e < t.length; e++)
                          if ("string" == typeof t[e] && nr.test(t[e]))
                            return !0;
                        return !1;
                      })(a))) &&
                  ("transform" !== i || !u) &&
                  !h &&
                  !n &&
                  "mirror" !== s &&
                  0 !== r &&
                  "inertia" !== o
                );
              })(i))
          ) {
            i.element = i.motionValue?.owner?.current;
            try {
              s = new ne(i);
            } catch {
              s = new i4(i);
            }
          } else s = new i4(i);
          (this.pendingTimeline &&
            ((this.stopTimeline = s.attachTimeline(this.pendingTimeline)),
            (this.pendingTimeline = void 0)),
            (this._animation = s));
        }
        get finished() {
          return this._animation ? this._animation.finished : super.finished;
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        get animation() {
          return (
            this._animation ||
              (this.keyframeResolver?.resume(),
              (tM = !0),
              tV(),
              tC(),
              (tM = !1)),
            this._animation
          );
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(t) {
          this.animation.time = t;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(t) {
          this.animation.speed = t;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(t) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(t))
              : (this.pendingTimeline = t),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          (this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel());
        }
      }
      let nh = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        nu = { type: "keyframes", duration: 0.8 },
        nd = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        nc = new Set([
          "when",
          "delay",
          "delayChildren",
          "staggerChildren",
          "staggerDirection",
          "repeat",
          "repeatType",
          "repeatDelay",
          "from",
          "elapsed",
        ]),
        np =
          (t, e, i, n = {}, r, o) =>
          (a) => {
            let l = iu(n, t) || {},
              h = l.delay || n.delay || 0,
              { elapsed: u = 0 } = n;
            u -= tL(h);
            let d = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...l,
              delay: -u,
              onUpdate: (t) => {
                (e.set(t), l.onUpdate && l.onUpdate(t));
              },
              onComplete: () => {
                (a(), l.onComplete && l.onComplete());
              },
              name: t,
              motionValue: e,
              element: o ? void 0 : r,
            };
            (!(function (t) {
              for (let e in t) if (!nc.has(e)) return !0;
              return !1;
            })(l) &&
              Object.assign(
                d,
                ((t, { keyframes: e }) =>
                  e.length > 2
                    ? nu
                    : s.has(t)
                      ? t.startsWith("scale")
                        ? {
                            type: "spring",
                            stiffness: 550,
                            damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                            restSpeed: 10,
                          }
                        : nh
                      : nd)(t, d),
              ),
              d.duration && (d.duration = tL(d.duration)),
              d.repeatDelay && (d.repeatDelay = tL(d.repeatDelay)),
              void 0 !== d.from && (d.keyframes[0] = d.from));
            let c = !1;
            if (
              ((!1 !== d.type && (0 !== d.duration || d.repeatDelay)) ||
                (nn(d), 0 === d.delay && (c = !0)),
              (ic.W.instantAnimations ||
                ic.W.skipAnimations ||
                r?.shouldSkipAnimations ||
                l.skipAnimations) &&
                ((c = !0), nn(d), (d.delay = 0)),
              (d.allowFlatten = !l.type && !l.ease),
              c && !o && void 0 !== e.get())
            ) {
              let t = tW(d.keyframes, l);
              if (void 0 !== t)
                return void tP.Gt.update(() => {
                  (d.onUpdate(t), d.onComplete());
                });
            }
            return l.isSync ? new i4(d) : new nl(d);
          },
        nm = "u" > typeof window;
      function nf(t, e, { delay: i = 0, transitionOverride: n, type: s } = {}) {
        let { transition: r, transitionEnd: o, ...a } = e,
          l = t.getDefaultTransition();
        r = r ? ih(r, l) : l;
        let h = r?.reduceMotion,
          u = r?.skipAnimations;
        n && (r = n);
        let d = [],
          c = s && t.animationState && t.animationState.getState()[s],
          p = r?.path;
        for (let e in (p && p.animateVisualElement(t, a, r, i, d), a)) {
          let n = t.getValue(e, t.latestValues[e] ?? null),
            s = a[e];
          if (
            void 0 === s ||
            (c &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return ((e[i] = !1), n);
              })(c, e))
          )
            continue;
          let o = { delay: i, ...iu(r || {}, e) };
          u && (o.skipAnimations = !0);
          let l = n.get();
          if (
            void 0 !== l &&
            !n.isAnimating() &&
            !Array.isArray(s) &&
            s === l &&
            !o.velocity
          ) {
            tP.Gt.update(() => n.set(s));
            continue;
          }
          let p = !1;
          if (nm && window.MotionHandoffAnimation) {
            let i = t.props[ie];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, tP.Gt);
              null !== t && ((o.startTime = t), (p = !0));
            }
          }
          ip(t, e);
          let m = h ?? t.shouldReduceMotion;
          n.start(np(e, n, s, m && H.has(e) ? { type: !1 } : o, t, p));
          let f = n.animation;
          f && d.push(f);
        }
        if (o) {
          let e = () =>
            tP.Gt.update(() => {
              o &&
                (function (t, e) {
                  let {
                    transitionEnd: i = {},
                    transition: n = {},
                    ...s
                  } = il(t, e) || {};
                  for (let e in (s = { ...s, ...i })) {
                    var r;
                    let i = id((r = s[e])) ? r[r.length - 1] || 0 : r;
                    t.hasValue(e)
                      ? t.getValue(e).set(i)
                      : t.addValue(e, (0, tJ.OQ)(i));
                  }
                })(t, o);
            });
          d.length ? Promise.all(d).then(e) : e();
        }
        return d;
      }
      function ny(t, e, i, n = 0, s = 1) {
        let r = Array.from(t)
            .sort((t, e) => t.sortNodePosition(e))
            .indexOf(e),
          o = t.size,
          a = (o - 1) * n;
        return "function" == typeof i ? i(r, o) : 1 === s ? r * n : a - r * n;
      }
      function nv(t, e, i = {}) {
        let n = il(
            t,
            e,
            "exit" === i.type ? t.presenceContext?.custom : void 0,
          ),
          { transition: s = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (s = i.transitionOverride);
        let r = n ? () => Promise.all(nf(t, n, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, n = 0, s = 0, r = 1, o) {
                    let a = [];
                    for (let l of t.variantChildren)
                      (l.notify("AnimationStart", e),
                        a.push(
                          nv(l, e, {
                            ...o,
                            delay:
                              i +
                              ("function" == typeof n ? 0 : n) +
                              ny(t.variantChildren, l, n, s, r),
                          }).then(() => l.notify("AnimationComplete", e)),
                        ));
                    return Promise.all(a);
                  })(t, e, n, r, o, a, i);
                }
              : () => Promise.resolve(),
          { when: a } = s;
        if (!a) return Promise.all([r(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [r, o] : [o, r];
          return t().then(() => e());
        }
      }
      let ng = t3.length;
      function nx(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      let nw = [...t2].reverse(),
        nT = t2.length;
      function nb(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function nP() {
        return {
          animate: nb(!0),
          whileInView: nb(),
          whileHover: nb(),
          whileTap: nb(),
          whileDrag: nb(),
          whileFocus: nb(),
          exit: nb(),
        };
      }
      class nS extends ia {
        constructor(t) {
          (super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => nv(t, e, i)));
                          else if ("string" == typeof e) n = nv(t, e, i);
                          else {
                            let s =
                              "function" == typeof e ? il(t, e, i.custom) : e;
                            n = Promise.all(nf(t, s, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i),
                      ),
                    ),
                  i = nP(),
                  n = !0,
                  s = !1,
                  r = (e) => (i, n) => {
                    let s = il(
                      t,
                      n,
                      "exit" === e ? t.presenceContext?.custom : void 0,
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function o(o) {
                  let { props: a } = t,
                    l =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < ng; t++) {
                          let n = t3[t],
                            s = e.props[n];
                          (t5(s) || !1 === s) && (i[n] = s);
                        }
                        return i;
                      })(t.parent) || {},
                    h = [],
                    u = new Set(),
                    d = {},
                    c = 1 / 0;
                  for (let e = 0; e < nT; e++) {
                    var p, m;
                    let f = nw[e],
                      y = i[f],
                      v = void 0 !== a[f] ? a[f] : l[f],
                      g = t5(v),
                      x = f === o ? y.isActive : null;
                    !1 === x && (c = e);
                    let w = v === l[f] && v !== a[f] && g;
                    if (
                      (w && (n || s) && t.manuallyAnimateOnMount && (w = !1),
                      (y.protectedKeys = { ...d }),
                      (!y.isActive && null === x) ||
                        (!v && !y.prevProp) ||
                        t1(v) ||
                        "boolean" == typeof v)
                    )
                      continue;
                    if ("exit" === f && y.isActive && !0 !== x) {
                      y.prevResolvedValues &&
                        (d = { ...d, ...y.prevResolvedValues });
                      continue;
                    }
                    let T =
                        ((p = y.prevProp),
                        "string" == typeof (m = v)
                          ? m !== p
                          : !!Array.isArray(m) && !nx(m, p)),
                      b =
                        T || (f === o && y.isActive && !w && g) || (e > c && g),
                      P = !1,
                      S = Array.isArray(v) ? v : [v],
                      A = S.reduce(r(f), {});
                    !1 === x && (A = {});
                    let { prevResolvedValues: E = {} } = y,
                      M = { ...E, ...A },
                      C = (e) => {
                        ((b = !0),
                          u.has(e) && ((P = !0), u.delete(e)),
                          (y.needsAnimating[e] = !0));
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = A[t],
                        i = E[t];
                      if (!d.hasOwnProperty(t))
                        (id(e) && id(i) ? !nx(e, i) || T : e !== i)
                          ? null != e
                            ? C(t)
                            : u.add(t)
                          : void 0 !== e && u.has(t)
                            ? C(t)
                            : (y.protectedKeys[t] = !0);
                    }
                    ((y.prevProp = v),
                      (y.prevResolvedValues = A),
                      y.isActive && (d = { ...d, ...A }),
                      (n || s) && t.blockInitialAnimation && (b = !1));
                    let V = w && T,
                      k = !V || P;
                    b &&
                      k &&
                      h.push(
                        ...S.map((e) => {
                          let i = { type: f };
                          if (
                            "string" == typeof e &&
                            (n || s) &&
                            !V &&
                            t.manuallyAnimateOnMount &&
                            t.parent
                          ) {
                            let { parent: n } = t,
                              s = il(n, e);
                            if (n.enteringChildren && s) {
                              let { delayChildren: e } = s.transition || {};
                              i.delay = ny(n.enteringChildren, t, e);
                            }
                          }
                          return { animation: e, options: i };
                        }),
                      );
                  }
                  if (u.size) {
                    let e = {};
                    if ("boolean" != typeof a.initial) {
                      let i = il(
                        t,
                        Array.isArray(a.initial) ? a.initial[0] : a.initial,
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    (u.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        s = t.getValue(i);
                      (s && (s.liveStyle = !0), (e[i] = n ?? null));
                    }),
                      h.push({ animation: e }));
                  }
                  let f = !!h.length;
                  return (
                    n &&
                      (!1 === a.initial || a.initial === a.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (f = !1),
                    (n = !1),
                    (s = !1),
                    f ? e(h) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (e, n) {
                    if (i[e].isActive === n) return Promise.resolve();
                    (t.variantChildren?.forEach((t) =>
                      t.animationState?.setActive(e, n),
                    ),
                      (i[e].isActive = n));
                    let s = o(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    ((i = nP()), (s = !0));
                  },
                };
              })(t)));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          t1(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          (this.node.animationState.reset(), this.unmountControls?.());
        }
      }
      let nA = 0;
      class nE extends ia {
        constructor() {
          (super(...arguments), (this.id = nA++), (this.isExitComplete = !1));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          if (t && !1 === i) {
            if (this.isExitComplete) {
              let { initial: t, custom: e } = this.node.getProps();
              if (
                "string" == typeof t ||
                ("object" == typeof t && null !== t && !Array.isArray(t))
              ) {
                let i = il(this.node, t, e);
                if (i) {
                  let { transition: t, transitionEnd: e, ...n } = i;
                  for (let t in n) this.node.getValue(t)?.jump(n[t]);
                }
              }
              ((this.node.blockInitialAnimation = !1),
                this.node.animationState.reset(),
                this.node.animationState.animateChanges());
            } else this.node.animationState.setActive("exit", !1);
            ((this.isExitComplete = !1), (this.exitAnimation = void 0));
            return;
          }
          let n = (this.exitAnimation = this.node.animationState.setActive(
            "exit",
            !t,
          ));
          e &&
            !t &&
            n.then(() => {
              this.exitAnimation === n &&
                ((this.isExitComplete = !0), e(this.id));
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          (e && e(this.id), t && (this.unmount = t(this.id)));
        }
        unmount() {}
      }
      let nM = { x: !1, y: !1 };
      function nC(t) {
        return [t("x"), t("y")];
      }
      function nV(t) {
        return t.max - t.min;
      }
      function nk(t, e, i, n = 0.5) {
        ((t.origin = n),
          (t.originPoint = eT(e.min, e.max, t.origin)),
          (t.scale = nV(i) / nV(e)),
          (t.translate = eT(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0));
      }
      function nD(t, e, i, n) {
        (nk(t.x, e.x, i.x, n ? n.originX : void 0),
          nk(t.y, e.y, i.y, n ? n.originY : void 0));
      }
      function nR(t, e, i, n = 0) {
        ((t.min = (n ? eT(i.min, i.max, n) : i.min) + e.min),
          (t.max = t.min + nV(e)));
      }
      function nL(t, e, i, n = 0) {
        let s = n ? eT(i.min, i.max, n) : i.min;
        ((t.min = e.min - s), (t.max = t.min + nV(e)));
      }
      function nB(t, e, i, n) {
        (nL(t.x, e.x, i.x, n?.x), nL(t.y, e.y, i.y, n?.y));
      }
      let nj = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        nF = new Set(["INPUT", "SELECT", "TEXTAREA"]);
      function nI(t, e, i, n = { passive: !0 }) {
        return (
          t.addEventListener(e, i, n),
          () => t.removeEventListener(e, i, n)
        );
      }
      var nO = i(51275);
      let nW = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function nU(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      function n$(t, e, i, n) {
        return nI(t, e, (t) => nW(t) && i(t, nU(t)), n);
      }
      let nN = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        nG = (t, e) => Math.abs(t - e),
        nz = new Set(["auto", "scroll"]);
      class nq {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n = window,
            dragSnapToOrigin: s = !1,
            distanceThreshold: r = 3,
            element: o,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.lastRawMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.scrollPositions = new Map()),
            (this.removeScrollListeners = null),
            (this.onElementScroll = (t) => {
              this.handleScroll(t.target);
            }),
            (this.onWindowScroll = () => {
              this.handleScroll(window);
            }),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              ((this.hasPendingMove = !1),
                this.lastRawMoveEventInfo &&
                  (this.lastMoveEventInfo = nX(
                    this.lastRawMoveEventInfo,
                    this.transformPagePoint,
                  )));
              let i = nH(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                s =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(nG(t.x, e.x) ** 2 + nG(t.y, e.y) ** 2) >=
                    this.distanceThreshold);
              if (!n && !s) return;
              let { point: r } = i;
              this.history.push({ ...r, timestamp: t$.k.now() });
              let { onStart: o, onMove: a } = this.handlers;
              (n ||
                (o && o(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, i));
            }),
            (this.handlePointerMove = (t, e) => {
              ((this.lastMoveEvent = t),
                (this.lastRawMoveEventInfo = e),
                (this.lastMoveEventInfo = nX(e, this.transformPagePoint)),
                (this.hasPendingMove = !0),
                tP.Gt.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (t, e) => {
              (this.hasPendingMove && this.updatePoint(), this.end());
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: s,
              } = this.handlers;
              if (
                ((this.dragSnapToOrigin || !this.startEvent) && s && s(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = nH(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : nX(e, this.transformPagePoint),
                this.history,
              );
              (this.startEvent && i && i(t, r), n && n(t, r));
            }),
            !nW(t))
          )
            return;
          ((this.dragSnapToOrigin = s),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.distanceThreshold = r),
            (this.contextWindow = n || window));
          let a = nX(nU(t), this.transformPagePoint),
            { point: l } = a,
            { timestamp: h } = tP.uv;
          this.history = [{ ...l, timestamp: h }];
          let { onSessionStart: u } = e;
          u && u(t, nH(a, this.history));
          let d = { passive: !0, capture: !0 };
          ((this.removeListeners = im(
            n$(this.contextWindow, "pointermove", this.handlePointerMove, d),
            n$(this.contextWindow, "pointerup", this.handlePointerUp, d),
            n$(this.contextWindow, "pointercancel", this.handlePointerUp, d),
          )),
            o && this.startScrollTracking(o));
        }
        startScrollTracking(t) {
          let e = t.parentElement;
          for (; e;) {
            let t = getComputedStyle(e);
            ((nz.has(t.overflowX) || nz.has(t.overflowY)) &&
              this.scrollPositions.set(e, { x: e.scrollLeft, y: e.scrollTop }),
              (e = e.parentElement));
          }
          (this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY,
          }),
            window.addEventListener("scroll", this.onElementScroll, {
              capture: !0,
            }),
            window.addEventListener("scroll", this.onWindowScroll),
            (this.removeScrollListeners = () => {
              (window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0,
              }),
                window.removeEventListener("scroll", this.onWindowScroll));
            }));
        }
        handleScroll(t) {
          let e = this.scrollPositions.get(t);
          if (!e) return;
          let i = t === window,
            n = i
              ? { x: window.scrollX, y: window.scrollY }
              : { x: t.scrollLeft, y: t.scrollTop },
            s = { x: n.x - e.x, y: n.y - e.y };
          (0 !== s.x || 0 !== s.y) &&
            (i
              ? this.lastMoveEventInfo &&
                ((this.lastMoveEventInfo.point.x += s.x),
                (this.lastMoveEventInfo.point.y += s.y))
              : this.history.length > 0 &&
                ((this.history[0].x -= s.x), (this.history[0].y -= s.y)),
            this.scrollPositions.set(t, n),
            tP.Gt.update(this.updatePoint, !0));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            (0, tP.WG)(this.updatePoint));
        }
      }
      function nX(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function nY(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function nH({ point: t }, e) {
        return {
          point: t,
          delta: nY(t, nK(e)),
          offset: nY(t, e[0]),
          velocity: (function (t) {
            if (t.length < 2) return { x: 0, y: 0 };
            let e = t.length - 1,
              i = null,
              n = nK(t);
            for (
              ;
              e >= 0 && ((i = t[e]), !(n.timestamp - i.timestamp > tL(0.1)));
            )
              e--;
            if (!i) return { x: 0, y: 0 };
            i === t[0] &&
              t.length > 2 &&
              n.timestamp - i.timestamp > 2 * tL(0.1) &&
              (i = t[1]);
            let s = (n.timestamp - i.timestamp) / 1e3;
            if (0 === s) return { x: 0, y: 0 };
            let r = { x: (n.x - i.x) / s, y: (n.y - i.y) / s };
            return (1 / 0 === r.x && (r.x = 0), 1 / 0 === r.y && (r.y = 0), r);
          })(e),
        };
      }
      function nK(t) {
        return t[t.length - 1];
      }
      function n_(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function nZ(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]),
          { min: i, max: n }
        );
      }
      function nQ(t, e, i) {
        return { min: nJ(t, e), max: nJ(t, i) };
      }
      function nJ(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let n0 = new WeakMap();
      class n1 {
        constructor(t) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = X()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = t));
        }
        start(t, { snapToCursor: e = !1, distanceThreshold: i } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let s = (t) => {
              (e && this.snapToCursor(t), this.stopAnimation());
            },
            r = (t, e) => {
              let {
                drag: i,
                dragPropagation: n,
                onDragStart: s,
              } = this.getProps();
              if (
                i &&
                !n &&
                (this.openDragLock && this.openDragLock(),
                (this.openDragLock = (function (t) {
                  if ("x" === t || "y" === t)
                    if (nM[t]) return null;
                    else
                      return (
                        (nM[t] = !0),
                        () => {
                          nM[t] = !1;
                        }
                      );
                  return nM.x || nM.y
                    ? null
                    : ((nM.x = nM.y = !0),
                      () => {
                        nM.x = nM.y = !1;
                      });
                })(i)),
                !this.openDragLock)
              )
                return;
              ((this.latestPointerEvent = t),
                (this.latestPanInfo = e),
                (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                nC((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (x.test(e)) {
                    let { projection: i } = this.visualElement;
                    if (i && i.layout) {
                      let n = i.layout.layoutBox[t];
                      n && (e = nV(n) * (parseFloat(e) / 100));
                    }
                  }
                  this.originPoint[t] = e;
                }),
                s && tP.Gt.update(() => s(t, e), !1, !0),
                ip(this.visualElement, "transform"));
              let { animationState: r } = this.visualElement;
              r && r.setActive("whileDrag", !0);
            },
            o = (t, e) => {
              ((this.latestPointerEvent = t), (this.latestPanInfo = e));
              let {
                dragPropagation: i,
                dragDirectionLock: n,
                onDirectionLock: s,
                onDrag: r,
              } = this.getProps();
              if (!i && !this.openDragLock) return;
              let { offset: o } = e;
              if (n && null === this.currentDirection) {
                ((this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (
                    Math.abs(t.y) > e
                      ? (i = "y")
                      : Math.abs(t.x) > e && (i = "x"),
                    i
                  );
                })(o)),
                  null !== this.currentDirection &&
                    s &&
                    s(this.currentDirection));
                return;
              }
              (this.updateAxis("x", e.point, o),
                this.updateAxis("y", e.point, o),
                this.visualElement.render(),
                r && tP.Gt.update(() => r(t, e), !1, !0));
            },
            a = (t, e) => {
              ((this.latestPointerEvent = t),
                (this.latestPanInfo = e),
                this.stop(t, e),
                (this.latestPointerEvent = null),
                (this.latestPanInfo = null));
            },
            l = () => {
              let { dragSnapToOrigin: t } = this.getProps();
              (t || this.constraints) && this.startAnimation({ x: 0, y: 0 });
            },
            { dragSnapToOrigin: h } = this.getProps();
          this.panSession = new nq(
            t,
            {
              onSessionStart: s,
              onStart: r,
              onMove: o,
              onSessionEnd: a,
              resumeAnimation: l,
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: h,
              distanceThreshold: i,
              contextWindow: nN(this.visualElement),
              element: this.visualElement.current,
            },
          );
        }
        stop(t, e) {
          let i = t || this.latestPointerEvent,
            n = e || this.latestPanInfo,
            s = this.isDragging;
          if ((this.cancel(), !s || !n || !i)) return;
          let { velocity: r } = n;
          this.startAnimation(r);
          let { onDragEnd: o } = this.getProps();
          o && tP.Gt.postRender(() => o(i, n));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          (t && (t.isAnimationBlocked = !1), this.endPanSession());
          let { dragPropagation: i } = this.getProps();
          (!i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1));
        }
        endPanSession() {
          (this.panSession && this.panSession.end(),
            (this.panSession = void 0));
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !n2(t, n, this.currentDirection)) return;
          let s = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          (this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? eT(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? eT(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            s.set(r));
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            n = this.constraints;
          (t && is(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: n, right: s },
                ) {
                  return { x: n_(t.x, i, s), y: n_(t.y, e, n) };
                })(i.layoutBox, t))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: nQ(t, "left", "right"), y: nQ(t, "top", "bottom") }
              );
            })(e)),
            n !== this.constraints &&
              !is(t) &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              nC((t) => {
                var e, n;
                let s;
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] =
                    ((e = i.layoutBox[t]),
                    (n = this.constraints[t]),
                    (s = {}),
                    void 0 !== n.min && (s.min = n.min - e.min),
                    void 0 !== n.max && (s.max = n.max - e.min),
                    s));
              }));
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !is(e)) return !1;
          let n = e.current;
          (0, Z.V)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            "drag-constraints-ref",
          );
          let { projection: s } = this.visualElement;
          if (!s || !s.layout) return !1;
          s.root && ((s.root.scroll = void 0), s.root.updateScroll());
          let r = (function (t, e, i) {
              let n = eW(t, i),
                { scroll: s } = e;
              return (s && (ej(n.x, s.offset.x), ej(n.y, s.offset.y)), n);
            })(n, s.root, this.visualElement.getTransformPagePoint()),
            o =
              ((t = s.layout.layoutBox), { x: nZ(t.x, r.x), y: nZ(t.y, r.y) });
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o),
            );
            ((this.hasMutatedConstraints = !!t), t && (o = eM(t)));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: s,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            nC((o) => {
              if (!n2(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              (!0 === r || r === o) && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...l,
              };
              return this.startAxisValueAnimation(o, h);
            }),
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            ip(this.visualElement, t),
            i.start(np(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          nC((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`;
          return (
            this.visualElement.getProps()[e] ||
            this.visualElement.getValue(
              t,
              this.visualElement.latestValues[t] ?? 0,
            )
          );
        }
        snapToCursor({ clientX: t, clientY: e }) {
          let { drag: i } = this.getProps(),
            n = { x: t, y: e },
            s = this.visualElement.getTransformPagePoint()?.(n) || n,
            r = this.visualElement.measureViewportBox();
          nC((t) => {
            if (!n2(t, i, this.currentDirection)) return;
            let e = this.getAxisMotionValue(t),
              { min: n, max: o } = r[t];
            e.set((e.get() || 0) + s[t] - eT(n, o, 0.5));
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!is(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = this.constraints,
            s = { x: 0, y: 0 };
          nC((t) => {
            var e, i;
            let o,
              a,
              l,
              h = this.getAxisMotionValue(t).get();
            s[t] =
              ((e = { min: h, max: h }),
              (i = n[t]),
              (o = 0.5),
              (a = nV(e)),
              (l = nV(i)) > a
                ? (o = (0, i2.q)(i.min, i.max - a, e.min))
                : a > l && (o = (0, i2.q)(e.min, e.max - l, i.min)),
              (0, r.q)(0, 1, o));
          });
          let { transformTemplate: o } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = o
            ? o({}, "")
            : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            (this.constraints = !1),
            this.resolveConstraints(),
            nC((e) => {
              let i = this.getAxisMotionValue(e);
              if (!n2(e, t, null) || !i.get()) return;
              let { min: n, max: r } = this.constraints[e];
              i.set(eT(n, r, s[e]));
            }),
            this.visualElement.render());
        }
        addListeners() {
          let t;
          if (!this.visualElement.current) return;
          n0.set(this.visualElement, this);
          let e = this.visualElement.current,
            i = n$(e, "pointerdown", (t) => {
              let { drag: i, dragListener: n = !0 } = this.getProps(),
                s = t.target,
                r =
                  s !== e && (nF.has(s.tagName) || !0 === s.isContentEditable);
              i && n && !r && this.start(t);
            }),
            n = () => {
              var i, n, s;
              let r,
                o,
                { dragConstraints: a } = this.getProps();
              is(a) &&
                a.current &&
                ((this.constraints = this.resolveRefConstraints()),
                t ||
                  ((i = e),
                  (n = a.current),
                  (s = () => this.scalePositionWithinConstraints()),
                  (r = (0, nO.X)(i, n5(s))),
                  (o = (0, nO.X)(n, n5(s))),
                  (t = () => {
                    (r(), o());
                  })));
            },
            { projection: s } = this.visualElement,
            r = s.addEventListener("measure", n);
          (s &&
            !s.layout &&
            (s.root && s.root.updateScroll(), s.updateLayout()),
            tP.Gt.read(n));
          let o = nI(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            a = s.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (nC((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            (o(), i(), r(), a && a(), t && t());
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: s = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: s,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      }
      function n5(t) {
        let e = !0;
        return () => {
          if (e) {
            e = !1;
            return;
          }
          t();
        };
      }
      function n2(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class n3 extends ia {
        constructor(t) {
          (super(t),
            (this.removeGroupControls = tj.l),
            (this.removeListeners = tj.l),
            (this.controls = new n1(t)));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          (t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tj.l));
        }
        update() {
          let { dragControls: t } = this.node.getProps(),
            { dragControls: e } = this.node.prevProps || {};
          t !== e &&
            (this.removeGroupControls(),
            t && (this.removeGroupControls = t.subscribe(this.controls)));
        }
        unmount() {
          (this.removeGroupControls(),
            this.removeListeners(),
            this.controls.isDragging || this.controls.endPanSession());
        }
      }
      let n9 = (t) => (e, i) => {
        t && tP.Gt.update(() => t(e, i), !1, !0);
      };
      class n7 extends ia {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = tj.l));
        }
        onPointerDown(t) {
          this.session = new nq(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: nN(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: n9(t),
            onStart: n9(e),
            onMove: n9(i),
            onEnd: (t, e) => {
              (delete this.session, n && tP.Gt.postRender(() => n(t, e)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = n$(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t),
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          (this.removePointerDownListener(),
            this.session && this.session.end());
        }
      }
      let n6 = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      var n8 = i(79196);
      let n4 = !1;
      class st extends e$.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: s } = t;
          (s &&
            (e.group && e.group.add(s),
            i && i.register && n && i.register(s),
            n4 && s.root.didUpdate(),
            s.addEventListener("animationComplete", () => {
              this.safeToRemove();
            }),
            s.setOptions({
              ...s.options,
              layoutDependency: this.props.layoutDependency,
              onExitComplete: () => this.safeToRemove(),
            })),
            (n6.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: s,
            } = this.props,
            { projection: r } = i;
          return (
            r &&
              ((r.isPresent = s),
              t.layoutDependency !== e &&
                r.setOptions({ ...r.options, layoutDependency: e }),
              (n4 = !0),
              n || t.layoutDependency !== e || void 0 === e || t.isPresent !== s
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent !== s &&
                (s
                  ? r.promote()
                  : r.relegate() ||
                    tP.Gt.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { visualElement: t, layoutAnchor: e } = this.props,
            { projection: i } = t;
          i &&
            ((i.options.layoutAnchor = e),
            i.root.didUpdate(),
            tQ.k.postRender(() => {
              !i.currentAnimation && i.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          ((n4 = !0),
            n &&
              (n.scheduleCheckAfterUnmount(),
              e && e.group && e.group.remove(n),
              i && i.deregister && i.deregister(n)));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function se(t) {
        let [e, i] = (0, n8.xQ)(),
          n = (0, e$.useContext)(eq.L);
        return (0, ez.jsx)(st, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, e$.useContext)(ii),
          isPresent: e,
          safeToRemove: i,
        });
      }
      var si = i(69028);
      let sn = eg.length,
        ss = (t) => ("string" == typeof t ? parseFloat(t) : t),
        sr = (t) => "number" == typeof t || w.test(t);
      function so(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let sa = sh(0, 0.5, iJ),
        sl = sh(0.5, 0.95, tj.l);
      function sh(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, i2.q)(t, e, n)));
      }
      function su(t, e) {
        ((t.min = e.min), (t.max = e.max));
      }
      function sd(t, e) {
        (su(t.x, e.x), su(t.y, e.y));
      }
      function sc(t, e) {
        ((t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin));
      }
      function sp(t, e, i, n, s) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== s && (t = n + (1 / s) * (t - n)),
          t
        );
      }
      function sm(t, e, [i, n, s], r, o) {
        !(function (t, e = 0, i = 1, n = 0.5, s, r = t, o = t) {
          if (
            (x.test(e) &&
              ((e = parseFloat(e)), (e = eT(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = eT(r.min, r.max, n);
          (t === r && (a -= e),
            (t.min = sp(t.min, e, i, a, s)),
            (t.max = sp(t.max, e, i, a, s)));
        })(t, e[i], e[n], e[s], e.scale, r, o);
      }
      let sf = ["x", "scaleX", "originX"],
        sy = ["y", "scaleY", "originY"];
      function sv(t, e, i, n) {
        (sm(t.x, e, sf, i ? i.x : void 0, n ? n.x : void 0),
          sm(t.y, e, sy, i ? i.y : void 0, n ? n.y : void 0));
      }
      function sg(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function sx(t) {
        return sg(t.x) && sg(t.y);
      }
      function sw(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function sT(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function sb(t, e) {
        return sT(t.x, e.x) && sT(t.y, e.y);
      }
      function sP(t) {
        return nV(t.x) / nV(t.y);
      }
      function sS(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      var sA = i(78170);
      class sE {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, sA.Kq)(this.members, t);
          for (let e = this.members.length - 1; e >= 0; e--) {
            let i = this.members[e];
            if (i === t || i === this.lead || i === this.prevLead) continue;
            let n = i.instance;
            (n && !1 !== n.isConnected) ||
              i.snapshot ||
              ((0, sA.Ai)(this.members, i), i.unmount());
          }
          t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, sA.Ai)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          for (let e = this.members.indexOf(t) - 1; e >= 0; e--) {
            let t = this.members[e];
            if (!1 !== t.isPresent && t.instance?.isConnected !== !1)
              return (this.promote(t), !0);
          }
          return !1;
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            (i.updateSnapshot(), t.scheduleRender());
            let { layoutDependency: n } = i.options,
              { layoutDependency: s } = t.options;
            ((void 0 === n || n !== s) &&
              ((t.resumeFrom = i),
              e && (i.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root?.isUpdating && (t.isLayoutDirty = !0)),
              !1 === t.options.crossfade && i.hide());
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            (t.options.onExitComplete?.(),
              t.resumingFrom?.options.onExitComplete?.());
          });
        }
        scheduleRender() {
          this.members.forEach((t) => t.instance && t.scheduleRender(!1));
        }
        removeLeadSnapshot() {
          this.lead?.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let sM = (t, e) => t.depth - e.depth;
      class sC {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(t) {
          ((0, sA.Kq)(this.children, t), (this.isDirty = !0));
        }
        remove(t) {
          ((0, sA.Ai)(this.children, t), (this.isDirty = !0));
        }
        forEach(t) {
          (this.isDirty && this.children.sort(sM),
            (this.isDirty = !1),
            this.children.forEach(t));
        }
      }
      let sV = ["", "X", "Y", "Z"],
        sk = 0;
      function sD(t, e, i, n) {
        let { latestValues: s } = e;
        s[t] && ((i[t] = s[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function sR({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: s,
      }) {
        return class {
          constructor(t = {}, i = e?.()) {
            ((this.id = sk++),
              (this.animationId = 0),
              (this.animationCommitId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                ((this.projectionUpdateScheduled = !1),
                  this.nodes.forEach(sj),
                  this.nodes.forEach(sq),
                  this.nodes.forEach(sX),
                  this.nodes.forEach(sF));
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0));
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new sC());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new tB.v()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e) {
            if (this.instance) return;
            ((this.isSVG =
              (0, si.x)(e) && (!(0, si.x)(e) || "svg" !== e.tagName)),
              (this.instance = e));
            let { layoutId: i, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.root.hasTreeAnimated &&
                (n || i) &&
                (this.isLayoutDirty = !0),
              t)
            ) {
              let i,
                n = 0,
                s = () => (this.root.updateBlockedByResize = !1);
              (tP.Gt.read(() => {
                n = window.innerWidth;
              }),
                t(e, () => {
                  let t = window.innerWidth;
                  if (t !== n) {
                    let e, r;
                    ((n = t),
                      (this.root.updateBlockedByResize = !0),
                      i && i(),
                      (e = t$.k.now()),
                      (r = ({ timestamp: t }) => {
                        let i = t - e;
                        i >= 250 && ((0, tP.WG)(r), s());
                      }),
                      tP.Gt.setup(r, !0),
                      (i = () => (0, tP.WG)(r)),
                      n6.hasAnimatedSinceResize &&
                        ((n6.hasAnimatedSinceResize = !1),
                        this.nodes.forEach(sz)));
                  }
                }));
            }
            (i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      ((this.target = void 0), (this.relativeTarget = void 0));
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        sQ,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !sb(this.targetLayout, n),
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      h ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0));
                      let e = { ...iu(r, "layout"), onPlay: o, onComplete: a };
                      ((s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e),
                        this.setAnimationOrigin(t, h, e.path));
                    } else
                      (e || sz(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete());
                    this.targetLayout = n;
                  },
                ));
          }
          unmount() {
            (this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this));
            let t = this.getStack();
            (t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              (0, tP.WG)(this.updateProjection));
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(sY),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[ie];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      tP.Gt,
                      !(t || i),
                    );
                  }
                  let { parent: s } = e;
                  s && !s.hasCheckedOptimisedAppear && t(s);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              ((e.shouldResetTransform = !0),
                ("string" == typeof e.latestValues.x ||
                  "string" == typeof e.latestValues.y) &&
                  (e.isLayoutDirty = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1));
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            ((this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate"));
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              let t = this.updateBlockedByResize;
              (this.unblockUpdate(),
                (this.updateBlockedByResize = !1),
                this.clearAllSnapshots(),
                t && this.nodes.forEach(sW),
                this.nodes.forEach(sO));
              return;
            }
            if (this.animationId <= this.animationCommitId)
              return void this.nodes.forEach(sU);
            ((this.animationCommitId = this.animationId),
              this.isUpdating
                ? ((this.isUpdating = !1),
                  this.nodes.forEach(s$),
                  this.nodes.forEach(sN),
                  this.nodes.forEach(sG),
                  this.nodes.forEach(sL),
                  this.nodes.forEach(sB))
                : this.nodes.forEach(sU),
              this.clearAllSnapshots());
            let t = t$.k.now();
            ((tP.uv.delta = (0, r.q)(0, 1e3 / 60, t - tP.uv.timestamp)),
              (tP.uv.timestamp = t),
              (tP.uv.isProcessing = !0),
              tP.PP.update.process(tP.uv),
              tP.PP.preRender.process(tP.uv),
              tP.PP.render.process(tP.uv),
              (tP.uv.isProcessing = !1));
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), tQ.k.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            (this.nodes.forEach(sI), this.sharedNodes.forEach(sH));
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tP.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tP.Gt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot &&
              this.instance &&
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                nV(this.snapshot.measuredBox.x) ||
                nV(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            ((this.layout = this.measure(!1)),
              this.layoutCorrected || (this.layoutCorrected = X()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox));
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0,
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e && this.instance)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!s) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !sx(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              r = n !== this.prevTransformTemplateValue;
            t &&
              this.instance &&
              (e || ek(this.latestValues) || r) &&
              (s(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              s1((e = n).x),
              s1(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return X();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(s2))) {
              let { scroll: t } = this.root;
              t && (ej(e.x, t.offset.x), ej(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = X();
            if ((sd(e, t), this.scroll?.wasRoot)) return e;
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: s, options: r } = n;
              n !== this.root &&
                s &&
                r.layoutScroll &&
                (s.wasRoot && sd(e, t),
                ej(e.x, s.offset.x),
                ej(e.y, s.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1, i) {
            let n = i || X();
            sd(n, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              (!e &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                (ej(n.x, -i.scroll.offset.x), ej(n.y, -i.scroll.offset.y)),
                ek(i.latestValues) &&
                  eO(n, i.latestValues, i.layout?.layoutBox));
            }
            return (
              ek(this.latestValues) &&
                eO(n, this.latestValues, this.layout?.layoutBox),
              n
            );
          }
          removeTransform(t) {
            let e = X();
            sd(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i,
                n = this.path[t];
              ek(n.latestValues) &&
                (n.instance &&
                  (eV(n.latestValues) && n.updateSnapshot(),
                  sd((i = X()), n.measurePageBox())),
                sv(e, n.latestValues, n.snapshot?.layoutBox, i));
            }
            return (ek(this.latestValues) && sv(e, this.latestValues), e);
          }
          setTargetDelta(t) {
            ((this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0));
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            ((this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1));
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                tP.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            (this.isProjectionDirty ||
              (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = e.isSharedProjectionDirty));
            let i = !!this.resumingFrom || this !== e;
            if (!(
              t ||
              (i && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              this.parent?.isProjectionDirty ||
              this.attemptToResolveRelativeTarget ||
              this.root.updateBlockedByResize
            ))
              return;
            let { layout: n, layoutId: s } = this.options;
            if (!this.layout || !(n || s)) return;
            this.resolvedRelativeTargetAt = tP.uv.timestamp;
            let r = this.getClosestProjectingParent();
            if (
              (this.targetDelta ||
                this.relativeTarget ||
                (!1 !== this.options.layoutAnchor && r && r.layout
                  ? this.createRelativeTarget(
                      r,
                      this.layout.layoutBox,
                      r.layout.layoutBox,
                    )
                  : this.removeRelativeTarget()),
              this.relativeTarget || this.targetDelta)
            ) {
              if (
                (this.target ||
                  ((this.target = X()), (this.targetWithTransforms = X())),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.relativeParent &&
                  this.relativeParent.target)
              ) {
                var o, a, l, h;
                (this.forceRelativeParentToResolveTarget(),
                  (o = this.target),
                  (a = this.relativeTarget),
                  (l = this.relativeParent.target),
                  (h = this.options.layoutAnchor || void 0),
                  nR(o.x, a.x, l.x, h?.x),
                  nR(o.y, a.y, l.y, h?.y));
              } else
                this.targetDelta
                  ? (this.resumingFrom
                      ? this.applyTransform(
                          this.layout.layoutBox,
                          !1,
                          this.target,
                        )
                      : sd(this.target, this.layout.layoutBox),
                    eB(this.target, this.targetDelta))
                  : sd(this.target, this.layout.layoutBox);
              this.attemptToResolveRelativeTarget &&
                ((this.attemptToResolveRelativeTarget = !1),
                !1 !== this.options.layoutAnchor &&
                r &&
                !!r.resumingFrom == !!this.resumingFrom &&
                !r.options.layoutScroll &&
                r.target &&
                1 !== this.animationProgress
                  ? this.createRelativeTarget(r, this.target, r.target)
                  : (this.relativeParent = this.relativeTarget = void 0));
            }
          }
          getClosestProjectingParent() {
            if (!(
              !this.parent ||
              eV(this.parent.latestValues) ||
              eD(this.parent.latestValues)
            ))
              if (this.parent.isProjecting()) return this.parent;
              else return this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          createRelativeTarget(t, e, i) {
            ((this.relativeParent = t),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = X()),
              (this.relativeTargetOrigin = X()),
              nB(
                this.relativeTargetOrigin,
                e,
                i,
                this.options.layoutAnchor || void 0,
              ),
              sd(this.relativeTarget, this.relativeTargetOrigin));
          }
          removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0;
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
                (i = !1),
              e &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === tP.uv.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            sd(this.layoutCorrected, this.layout.layoutBox);
            let r = this.treeScale.x,
              o = this.treeScale.y;
            (!(function (t, e, i, n = !1) {
              let s,
                r,
                o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (s = i[a]).projectionDelta;
                  let { visualElement: o } = s.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (n &&
                      s.options.layoutScroll &&
                      s.scroll &&
                      s !== s.root &&
                      (ej(t.x, -s.scroll.offset.x),
                      ej(t.y, -s.scroll.offset.y)),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), eB(t, r)),
                    n &&
                      ek(s.latestValues) &&
                      eO(t, s.latestValues, s.layout?.layoutBox));
                }
                (e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1));
              }
            })(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = X())));
            let { target: a } = t;
            if (!a) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            (this.projectionDelta && this.prevProjectionDelta
              ? (sc(this.prevProjectionDelta.x, this.projectionDelta.x),
                sc(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              nD(
                this.projectionDelta,
                this.layoutCorrected,
                a,
                this.latestValues,
              ),
              (this.treeScale.x === r &&
                this.treeScale.y === o &&
                sS(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                sS(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", a)));
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            ((this.prevProjectionDelta = z()),
              (this.projectionDelta = z()),
              (this.projectionDeltaWithTransform = z()));
          }
          setAnimationOrigin(t, e = !1, i) {
            let n,
              s = this.snapshot,
              r = s ? s.latestValues : {},
              o = { ...this.latestValues },
              a = z();
            ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e));
            let l = X(),
              h =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              d = !u || u.members.length <= 1,
              c = !!(
                h &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(sZ)
              );
            this.animationProgress = 0;
            let p = i?.interpolateProjection(t);
            ((this.mixTargetDelta = (e) => {
              let i = e / 1e3,
                s = p?.(i);
              if (
                (s
                  ? ((a.x.translate = s.x),
                    (a.x.scale = eT(t.x.scale, 1, i)),
                    (a.x.origin = t.x.origin),
                    (a.x.originPoint = t.x.originPoint),
                    (a.y.translate = s.y),
                    (a.y.scale = eT(t.y.scale, 1, i)),
                    (a.y.origin = t.y.origin),
                    (a.y.originPoint = t.y.originPoint))
                  : (sK(a.x, t.x, i), sK(a.y, t.y, i)),
                this.setTargetDelta(a),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout)
              ) {
                var u, m, f, y, v, g;
                (nB(
                  l,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox,
                  this.options.layoutAnchor || void 0,
                ),
                  (f = this.relativeTarget),
                  (y = this.relativeTargetOrigin),
                  (v = l),
                  (g = i),
                  s_(f.x, y.x, v.x, g),
                  s_(f.y, y.y, v.y, g),
                  n &&
                    ((u = this.relativeTarget),
                    (m = n),
                    sw(u.x, m.x) && sw(u.y, m.y)) &&
                    (this.isProjectionDirty = !1),
                  n || (n = X()),
                  sd(n, this.relativeTarget));
              }
              (h &&
                ((this.animationValues = o),
                (function (t, e, i, n, s, r) {
                  s
                    ? ((t.opacity = eT(0, i.opacity ?? 1, sa(n))),
                      (t.opacityExit = eT(e.opacity ?? 1, 0, sl(n))))
                    : r && (t.opacity = eT(e.opacity ?? 1, i.opacity ?? 1, n));
                  for (let s = 0; s < sn; s++) {
                    let r = eg[s],
                      o = so(e, r),
                      a = so(i, r);
                    (void 0 !== o || void 0 !== a) &&
                      (o || (o = 0),
                      a || (a = 0),
                      0 === o || 0 === a || sr(o) === sr(a)
                        ? ((t[r] = Math.max(eT(ss(o), ss(a), n), 0)),
                          (x.test(a) || x.test(o)) && (t[r] += "%"))
                        : (t[r] = a));
                  }
                  (e.rotate || i.rotate) &&
                    (t.rotate = eT(e.rotate || 0, i.rotate || 0, n));
                })(o, r, this.latestValues, i, c, d)),
                s &&
                  void 0 !== s.rotate &&
                  (this.animationValues || (this.animationValues = o),
                  (this.animationValues.pathRotation = s.rotate)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                (this.animationProgress = i));
            }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot));
          }
          startAnimation(t) {
            (this.notifyListeners("animationStart"),
              this.currentAnimation?.stop(),
              this.resumingFrom?.currentAnimation?.stop(),
              this.pendingAnimation &&
                ((0, tP.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tP.Gt.update(() => {
                var e, i, n;
                let s;
                ((n6.hasAnimatedSinceResize = !0),
                  this.motionValue || (this.motionValue = (0, tJ.OQ)(0)),
                  this.motionValue.jump(0, !1),
                  (this.currentAnimation =
                    ((e = this.motionValue),
                    (i = [0, 1e3]),
                    (n = {
                      ...t,
                      velocity: 0,
                      isSync: !0,
                      onUpdate: (e) => {
                        (this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e));
                      },
                      onComplete: () => {
                        (t.onComplete && t.onComplete(),
                          this.completeAnimation());
                      },
                    }),
                    (s = Y(e) ? e : (0, tJ.OQ)(e)).start(np("", s, i, n)),
                    s.animation)),
                  (function (t, e) {
                    let i = globalThis.__MOTION_INSPECT__;
                    if (i)
                      try {
                        i({ ...tN("layout-animation-start", t), node: e });
                      } catch {}
                  })(this.currentAnimation, this),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0));
              })));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            (t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete"));
          }
          finishAnimation() {
            (this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation());
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              { targetWithTransforms: e, layout: i, latestValues: n } = t,
              { target: s } = t;
            if (e && s && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                s5(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox,
                )
              ) {
                s = this.target || X();
                let e = nV(this.layout.layoutBox.x);
                ((s.x.min = t.target.x.min), (s.x.max = s.x.min + e));
                let i = nV(this.layout.layoutBox.y);
                ((s.y.min = t.target.y.min), (s.y.max = s.y.min + i));
              }
              (sd(e, s),
                eO(e, n),
                nD(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n,
                ));
            }
          }
          registerSharedNode(t, e) {
            (this.sharedNodes.has(t) || this.sharedNodes.set(t, new sE()),
              this.sharedNodes.get(t).add(e));
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            (n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e }));
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && sD("z", t, n, this.animationValues);
            for (let e = 0; e < sV.length; e++)
              (sD(`rotate${sV[e]}`, t, n, this.animationValues),
                sD(`skew${sV[e]}`, t, n, this.animationValues));
            for (let e in (t.render(), n))
              (t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]));
            t.scheduleRender();
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
              t.visibility = "hidden";
              return;
            }
            let i = this.getTransformTemplate();
            if (this.needsReset) {
              ((this.needsReset = !1),
                (t.visibility = ""),
                (t.opacity = ""),
                (t.pointerEvents = e1(e?.pointerEvents) || ""),
                (t.transform = i ? i(this.latestValues, "") : "none"));
              return;
            }
            let n = this.getLead();
            if (!this.projectionDelta || !this.layout || !n.target) {
              (this.options.layoutId &&
                ((t.opacity =
                  void 0 !== this.latestValues.opacity
                    ? this.latestValues.opacity
                    : 1),
                (t.pointerEvents = e1(e?.pointerEvents) || "")),
                this.hasProjected &&
                  !ek(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)));
              return;
            }
            t.visibility = "";
            let s = n.animationValues || n.latestValues;
            this.applyTransformsToTarget();
            let r = (function (t, e, i) {
              let n = "",
                s = t.x.translate / e.x,
                r = t.y.translate / e.y,
                o = i?.z || 0;
              if (
                ((s || r || o) && (n = `translate3d(${s}px, ${r}px, ${o}px) `),
                (1 !== e.x || 1 !== e.y) &&
                  (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                i)
              ) {
                let {
                  transformPerspective: t,
                  rotate: e,
                  pathRotation: s,
                  rotateX: r,
                  rotateY: o,
                  skewX: a,
                  skewY: l,
                } = i;
                (t && (n = `perspective(${t}px) ${n}`),
                  e && (n += `rotate(${e}deg) `),
                  s && (n += `rotate(${s}deg) `),
                  r && (n += `rotateX(${r}deg) `),
                  o && (n += `rotateY(${o}deg) `),
                  a && (n += `skewX(${a}deg) `),
                  l && (n += `skewY(${l}deg) `));
              }
              let a = t.x.scale * e.x,
                l = t.y.scale * e.y;
              return (
                (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                n || "none"
              );
            })(this.projectionDeltaWithTransform, this.treeScale, s);
            (i && (r = i(s, r)), (t.transform = r));
            let { x: o, y: a } = this.projectionDelta;
            for (let e in ((t.transformOrigin = `${100 * o.origin}% ${100 * a.origin}% 0`),
            n.animationValues
              ? (t.opacity =
                  n === this
                    ? (s.opacity ?? this.latestValues.opacity ?? 1)
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : s.opacityExit)
              : (t.opacity =
                  n === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ""
                    : void 0 !== s.opacityExit
                      ? s.opacityExit
                      : 0),
            eb)) {
              if (void 0 === s[e]) continue;
              let { correct: i, applyTo: o, isCSSVariable: a } = eb[e],
                l = "none" === r ? s[e] : i(s[e], n);
              if (o) {
                let e = o.length;
                for (let i = 0; i < e; i++) t[o[i]] = l;
              } else
                a
                  ? (this.options.visualElement.renderState.vars[e] = l)
                  : (t[e] = l);
            }
            this.options.layoutId &&
              (t.pointerEvents =
                n === this ? e1(e?.pointerEvents) || "" : "none");
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            (this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
              this.root.nodes.forEach(sO),
              this.root.sharedNodes.clear());
          }
        };
      }
      function sL(t) {
        t.updateLayout();
      }
      function sB(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: i, measuredBox: n } = t.layout,
            { animationType: s } = t.options,
            r = e.source !== t.layout.source;
          if ("size" === s)
            nC((t) => {
              let n = r ? e.measuredBox[t] : e.layoutBox[t],
                s = nV(n);
              ((n.min = i[t].min), (n.max = n.min + s));
            });
          else if ("x" === s || "y" === s) {
            let t = "x" === s ? "y" : "x";
            su(r ? e.measuredBox[t] : e.layoutBox[t], i[t]);
          } else
            s5(s, e.layoutBox, i) &&
              nC((n) => {
                let s = r ? e.measuredBox[n] : e.layoutBox[n],
                  o = nV(i[n]);
                ((s.max = s.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o)));
              });
          let o = z();
          nD(o, i, e.layoutBox);
          let a = z();
          r
            ? nD(a, t.applyTransform(n, !0), e.measuredBox)
            : nD(a, i, e.layoutBox);
          let l = !sx(o),
            h = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: s, layout: r } = n;
              if (s && r) {
                let o = t.options.layoutAnchor || void 0,
                  a = X();
                nB(a, e.layoutBox, s.layoutBox, o);
                let l = X();
                (nB(l, i, r.layoutBox, o),
                  sb(a, l) || (h = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = l),
                    (t.relativeTargetOrigin = a),
                    (t.relativeParent = n)));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: e,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function sj(t) {
        t.parent &&
          (t.isProjecting() ||
            (t.isProjectionDirty = t.parent.isProjectionDirty),
          t.isSharedProjectionDirty ||
            (t.isSharedProjectionDirty = !!(
              t.isProjectionDirty ||
              t.parent.isProjectionDirty ||
              t.parent.isSharedProjectionDirty
            )),
          t.isTransformDirty ||
            (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function sF(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function sI(t) {
        t.clearSnapshot();
      }
      function sO(t) {
        t.clearMeasurements();
      }
      function sW(t) {
        ((t.isLayoutDirty = !0), t.updateLayout());
      }
      function sU(t) {
        t.isLayoutDirty = !1;
      }
      function s$(t) {
        t.isAnimationBlocked &&
          t.layout &&
          !t.isLayoutDirty &&
          ((t.snapshot = t.layout), (t.isLayoutDirty = !0));
      }
      function sN(t) {
        t.relativeTarget &&
          t.relativeParent?.isLayoutDirty &&
          (t.currentAnimation
            ? (t.isLayoutDirty = !0)
            : ((t.targetDelta = void 0), t.removeRelativeTarget()));
      }
      function sG(t) {
        let { visualElement: e } = t.options;
        (e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform());
      }
      function sz(t) {
        (t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0));
      }
      function sq(t) {
        t.resolveTargetDelta();
      }
      function sX(t) {
        t.calcProjection();
      }
      function sY(t) {
        t.resetSkewAndRotation();
      }
      function sH(t) {
        t.removeLeadSnapshot();
      }
      function sK(t, e, i) {
        ((t.translate = eT(e.translate, 0, i)),
          (t.scale = eT(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint));
      }
      function s_(t, e, i, n) {
        ((t.min = eT(e.min, i.min, n)), (t.max = eT(e.max, i.max, n)));
      }
      function sZ(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let sQ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        sJ = (t) =>
          "u" > typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        s0 = sJ("applewebkit/") && !sJ("chrome/") ? Math.round : tj.l;
      function s1(t) {
        ((t.min = s0(t.min)), (t.max = s0(t.max)));
      }
      function s5(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(sP(e) - sP(i))))
        );
      }
      function s2(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let s3 = sR({
          attachResizeListener: (t, e) => nI(t, "resize", e),
          measureScroll: () => ({
            x:
              document.documentElement.scrollLeft ||
              document.body?.scrollLeft ||
              0,
            y:
              document.documentElement.scrollTop ||
              document.body?.scrollTop ||
              0,
          }),
          checkIsScrollRoot: () => !0,
        }),
        s9 = { current: void 0 },
        s7 = sR({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!s9.current) {
              let t = new s3({});
              (t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (s9.current = t));
            }
            return s9.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var s6 = i(58392);
      function s8(t, e) {
        let i = (0, s6.K)(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function s4(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let s = n["onHover" + i];
        s && tP.Gt.postRender(() => s(e, nU(e)));
      }
      class rt extends ia {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, s, r] = s8(t, i);
              return (
                n.forEach((t) => {
                  let i,
                    n = !1,
                    r = !1,
                    o = (e) => {
                      (i && (i(e), (i = void 0)),
                        t.removeEventListener("pointerleave", l));
                    },
                    a = (t) => {
                      ((n = !1),
                        window.removeEventListener("pointerup", a),
                        window.removeEventListener("pointercancel", a),
                        r && ((r = !1), o(t)));
                    },
                    l = (t) => {
                      if ("touch" !== t.pointerType) {
                        if (n) {
                          r = !0;
                          return;
                        }
                        o(t);
                      }
                    };
                  (t.addEventListener(
                    "pointerenter",
                    (n) => {
                      if ("touch" === n.pointerType || nM.x || nM.y) return;
                      r = !1;
                      let o = e(t, n);
                      "function" == typeof o &&
                        ((i = o), t.addEventListener("pointerleave", l, s));
                    },
                    s,
                  ),
                    t.addEventListener(
                      "pointerdown",
                      () => {
                        ((n = !0),
                          window.addEventListener("pointerup", a, s),
                          window.addEventListener("pointercancel", a, s));
                      },
                      s,
                    ));
                }),
                r
              );
            })(
              t,
              (t, e) => (
                s4(this.node, e, "Start"),
                (t) => s4(this.node, t, "End")
              ),
            ));
        }
        unmount() {}
      }
      class re extends ia {
        constructor() {
          (super(...arguments), (this.isActive = !1));
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = im(
            nI(this.node.current, "focus", () => this.onFocus()),
            nI(this.node.current, "blur", () => this.onBlur()),
          );
        }
        unmount() {}
      }
      var ri = i(78757);
      let rn = (t, e) => !!e && (t === e || rn(t, e.parentElement)),
        rs = new WeakSet();
      function rr(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function ro(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
        );
      }
      function ra(t) {
        return nW(t) && !(nM.x || nM.y);
      }
      let rl = new WeakSet();
      function rh(t, e, i) {
        let { props: n } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let s = n["onTap" + ("End" === i ? "" : i)];
        s && tP.Gt.postRender(() => s(e, nU(e)));
      }
      class ru extends ia {
        mount() {
          let { current: t } = this.node;
          if (!t) return;
          let { globalTapTarget: e, propagate: i } = this.node.props;
          this.unmount = (function (t, e, i = {}) {
            let [n, s, r] = s8(t, i),
              o = (t) => {
                let n = t.currentTarget;
                if (!ra(t) || rl.has(t)) return;
                (rs.add(n), i.stopPropagation && rl.add(t));
                let r = e(n, t),
                  o = { ...s, capture: !0 },
                  a = (t, e) => {
                    (window.removeEventListener("pointerup", l, o),
                      window.removeEventListener("pointercancel", h, o),
                      rs.has(n) && rs.delete(n),
                      ra(t) && "function" == typeof r && r(t, { success: e }));
                  },
                  l = (t) => {
                    a(
                      t,
                      n === window ||
                        n === document ||
                        i.useGlobalTarget ||
                        rn(n, t.target),
                    );
                  },
                  h = (t) => {
                    a(t, !1);
                  };
                (window.addEventListener("pointerup", l, o),
                  window.addEventListener("pointercancel", h, o));
              };
            return (
              n.forEach((t) => {
                ((i.useGlobalTarget ? window : t).addEventListener(
                  "pointerdown",
                  o,
                  s,
                ),
                (0, ri.s)(t)) &&
                  (t.addEventListener("focus", (t) =>
                    ((t, e) => {
                      let i = t.currentTarget;
                      if (!i) return;
                      let n = rr(() => {
                        if (rs.has(i)) return;
                        ro(i, "down");
                        let t = rr(() => {
                          ro(i, "up");
                        });
                        (i.addEventListener("keyup", t, e),
                          i.addEventListener("blur", () => ro(i, "cancel"), e));
                      });
                      (i.addEventListener("keydown", n, e),
                        i.addEventListener(
                          "blur",
                          () => i.removeEventListener("keydown", n),
                          e,
                        ));
                    })(t, s),
                  ),
                  nj.has(t.tagName) ||
                    !0 === t.isContentEditable ||
                    t.hasAttribute("tabindex") ||
                    (t.tabIndex = 0));
              }),
              r
            );
          })(
            t,
            (t, e) => (
              rh(this.node, e, "Start"),
              (t, { success: e }) => rh(this.node, t, e ? "End" : "Cancel")
            ),
            { useGlobalTarget: e, stopPropagation: i?.tap === !1 },
          );
        }
        unmount() {}
      }
      let rd = new WeakMap(),
        rc = new WeakMap(),
        rp = (t) => {
          let e = rd.get(t.target);
          e && e(t);
        },
        rm = (t) => {
          t.forEach(rp);
        },
        rf = { some: 0, all: 1 };
      class ry extends ia {
        constructor() {
          (super(...arguments),
            (this.hasEnteredView = !1),
            (this.isInView = !1));
        }
        startObserver() {
          var t;
          let e;
          this.stopObserver?.();
          let { viewport: i = {} } = this.node.getProps(),
            { root: n, margin: s, amount: r = "some", once: o } = i,
            a = {
              root: n ? n.current : void 0,
              rootMargin: s,
              threshold: "number" == typeof r ? r : rf[r],
            },
            l = (t) => {
              let { isIntersecting: e } = t;
              if (
                this.isInView === e ||
                ((this.isInView = e), o && !e && this.hasEnteredView)
              )
                return;
              (e && (this.hasEnteredView = !0),
                this.node.animationState &&
                  this.node.animationState.setActive("whileInView", e));
              let { onViewportEnter: i, onViewportLeave: n } =
                  this.node.getProps(),
                s = e ? i : n;
              s && s(t);
            };
          this.stopObserver =
            ((t = this.node.current),
            (e = (function ({ root: t, ...e }) {
              let i = t || document;
              rc.has(i) || rc.set(i, {});
              let n = rc.get(i),
                s = JSON.stringify(e);
              return (
                n[s] ||
                  (n[s] = new IntersectionObserver(rm, { root: t, ...e })),
                n[s]
              );
            })(a)),
            rd.set(t, l),
            e.observe(t),
            () => {
              (rd.delete(t), e.unobserve(t));
            });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("u" < typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e),
          ) && this.startObserver();
        }
        unmount() {
          (this.stopObserver?.(),
            (this.hasEnteredView = !1),
            (this.isInView = !1));
        }
      }
      let rv = (function (t, e) {
        if ("u" < typeof Proxy) return io;
        let i = new Map(),
          n = (i, n) => io(i, n, t, e);
        return new Proxy((t, e) => n(t, e), {
          get: (s, r) =>
            "create" === r
              ? n
              : (i.has(r) || i.set(r, io(r, void 0, t, e)), i.get(r)),
        });
      })(
        {
          animation: { Feature: nS },
          exit: { Feature: nE },
          inView: { Feature: ry },
          tap: { Feature: ru },
          focus: { Feature: re },
          hover: { Feature: rt },
          pan: { Feature: n7 },
          drag: { Feature: n3, ProjectionNode: s7, MeasureLayout: se },
          layout: { ProjectionNode: s7, MeasureLayout: se },
        },
        (t, e) =>
          (e.isSVG ?? eG(t))
            ? new eE(e)
            : new eU(e, { allowProjection: t !== e$.Fragment }),
      );
    },
    24866: (t, e, i) => {
      i.d(e, { Q: () => n });
      let n = (0, i(12115).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    27933: (t, e, i) => {
      i.d(e, { Gt: () => s, PP: () => a, WG: () => r, uv: () => o });
      var n = i(72025);
      let {
        schedule: s,
        cancel: r,
        state: o,
        steps: a,
      } = (0, i(57835).I)(
        "u" > typeof requestAnimationFrame ? requestAnimationFrame : n.l,
        !0,
      );
    },
    28153: (t, e, i) => {
      i.d(e, { W: () => n });
      let n = {};
    },
    28819: (t, e, i) => {
      i.d(e, { M: () => s });
      var n = i(12115);
      function s(t) {
        let e = (0, n.useRef)(null);
        return (null === e.current && (e.current = t()), e.current);
      }
    },
    37035: (t, e, i) => {
      let n;
      i.d(e, { k: () => a });
      var s = i(28153),
        r = i(27933);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              r.uv.isProcessing || s.W.useManualTiming
                ? r.uv.timestamp
                : performance.now(),
            ),
          n
        ),
        set: (t) => {
          ((n = t), queueMicrotask(o));
        },
      };
    },
    38873: (t, e, i) => {
      i.d(e, { c: () => s, k: () => n });
      let { schedule: n, cancel: s } = (0, i(57835).I)(queueMicrotask, !1);
    },
    39551: (t, e, i) => {
      i.d(e, { L: () => n });
      let n = (0, i(12115).createContext)({});
    },
    51275: (t, e, i) => {
      let n, s;
      i.d(e, { X: () => m });
      var r = i(69028),
        o = i(58392);
      let a = new WeakMap(),
        l = (t, e, i) => (n, s) =>
          s && s[0]
            ? s[0][t + "Size"]
            : (0, r.x)(n) && "getBBox" in n
              ? n.getBBox()[e]
              : n[i],
        h = l("inline", "width", "offsetWidth"),
        u = l("block", "height", "offsetHeight");
      function d({ target: t, borderBoxSize: e }) {
        a.get(t)?.forEach((i) => {
          i(t, {
            get width() {
              return h(t, e);
            },
            get height() {
              return u(t, e);
            },
          });
        });
      }
      function c(t) {
        t.forEach(d);
      }
      let p = new Set();
      function m(t, e) {
        let i;
        return "function" == typeof t
          ? (p.add(t),
            s ||
              ((s = () => {
                let t = {
                  get width() {
                    return window.innerWidth;
                  },
                  get height() {
                    return window.innerHeight;
                  },
                };
                p.forEach((e) => e(t));
              }),
              window.addEventListener("resize", s)),
            () => {
              (p.delete(t),
                p.size ||
                  "function" != typeof s ||
                  (window.removeEventListener("resize", s), (s = void 0)));
            })
          : (!n && "u" > typeof ResizeObserver && (n = new ResizeObserver(c)),
            (i = (0, o.K)(t)).forEach((t) => {
              let i = a.get(t);
              (i || ((i = new Set()), a.set(t, i)), i.add(e), n?.observe(t));
            }),
            () => {
              i.forEach((t) => {
                let i = a.get(t);
                (i?.delete(e), i?.size || n?.unobserve(t));
              });
            });
      }
    },
    57835: (t, e, i) => {
      i.d(e, { I: () => r });
      var n = i(28153);
      let s = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function r(t, e) {
        let i = !1,
          r = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = s.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  s = !1,
                  r = new Set(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  (r.has(e) && (i.add(e), t()), e(o));
                }
                let l = {
                  schedule: (t, s = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return (s && r.add(t), a.add(t), t);
                  },
                  cancel: (t) => {
                    (i.delete(t), r.delete(t));
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      s = !0;
                      return;
                    }
                    n = !0;
                    let r = e;
                    ((e = i),
                      (i = r),
                      e.forEach(a),
                      e.clear(),
                      (n = !1),
                      s && ((s = !1), l.process(t)));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {},
          ),
          {
            setup: h,
            read: u,
            resolveKeyframes: d,
            preUpdate: c,
            update: p,
            preRender: m,
            render: f,
            postRender: y,
          } = l,
          v = () => {
            let s = n.W.useManualTiming,
              a = s ? o.timestamp : performance.now();
            ((i = !1),
              s ||
                (o.delta = r
                  ? 1e3 / 60
                  : Math.max(Math.min(a - o.timestamp, 40), 1)),
              (o.timestamp = a),
              (o.isProcessing = !0),
              h.process(o),
              u.process(o),
              d.process(o),
              c.process(o),
              p.process(o),
              m.process(o),
              f.process(o),
              y.process(o),
              (o.isProcessing = !1),
              i && e && ((r = !1), t(v)));
          };
        return {
          schedule: s.reduce((e, n) => {
            let s = l[n];
            return (
              (e[n] = (e, n = !1, a = !1) => (
                !i && ((i = !0), (r = !0), o.isProcessing || t(v)),
                s.schedule(e, n, a)
              )),
              e
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < s.length; e++) l[s[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    58392: (t, e, i) => {
      i.d(e, { K: () => n });
      function n(t, e, i) {
        if (null == t) return [];
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
          let n = document;
          e && (n = e.current);
          let s = i?.[t] ?? n.querySelectorAll(t);
          return s ? Array.from(s) : [];
        }
        return Array.from(t).filter((t) => null != t);
      }
    },
    65239: (t, e, i) => {
      i.d(e, { E: () => s });
      var n = i(12115);
      let s = "u" > typeof window ? n.useLayoutEffect : n.useEffect;
    },
    69028: (t, e, i) => {
      i.d(e, { x: () => s });
      var n = i(94601);
      function s(t) {
        return (0, n.G)(t) && "ownerSVGElement" in t;
      }
    },
    69166: (t, e, i) => {
      i.d(e, { J: () => s, d: () => r });
      var n = i(7145);
      let s = (0, n.J)(
          () => void 0 !== window.ScrollTimeline,
          "scrollTimeline",
        ),
        r = (0, n.J)(() => void 0 !== window.ViewTimeline, "viewTimeline");
    },
    72025: (t, e, i) => {
      i.d(e, { l: () => n });
      let n = (t) => t;
    },
    73852: (t, e, i) => {
      i.d(e, { v: () => s });
      var n = i(78170);
      class s {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return ((0, n.Kq)(this.subscriptions, t), () => this.remove(t));
        }
        remove(t) {
          (0, n.Ai)(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n)
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let s = 0; s < n; s++) {
                let n = this.subscriptions[s];
                n && n(t, e, i);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    78170: (t, e, i) => {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function s(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, { Ai: () => s, Kq: () => n });
    },
    78757: (t, e, i) => {
      i.d(e, { s: () => s });
      var n = i(94601);
      function s(t) {
        return (0, n.G)(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
      }
    },
    79196: (t, e, i) => {
      i.d(e, { xQ: () => r });
      var n = i(12115),
        s = i(15131);
      function r(t = !0) {
        let e = (0, n.useContext)(s.t);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: o, register: a } = e,
          l = (0, n.useId)();
        (0, n.useEffect)(() => {
          if (t) return a(l);
        }, [t]);
        let h = (0, n.useCallback)(() => t && o && o(l), [l, o, t]);
        return !i && o ? [!1, h] : [!0];
      }
    },
    79537: (t, e, i) => {
      i.d(e, { f: () => n });
      let n = (t, e) => (e ? (1e3 / e) * t : 0);
    },
    94601: (t, e, i) => {
      i.d(e, { G: () => n });
      let n = (t) => "object" == typeof t && null !== t;
    },
    94712: (t, e, i) => {
      i.d(e, { q: () => n });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    96291: (t, e, i) => {
      i.d(e, { p: () => n });
      function n(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
    },
  },
]);
