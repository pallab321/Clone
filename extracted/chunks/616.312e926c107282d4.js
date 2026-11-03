"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [616],
  {
    65616: (e, t, n) => {
      (n.r(t), n.d(t, { Cursor: () => s }));
      var r = n(95155),
        o = n(12115),
        i = n(31623);
      function s() {
        let e = (0, o.useRef)(null),
          t = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            if (
              !window.matchMedia("(hover: hover) and (pointer: fine)").matches
            )
              return;
            let n = e.current;
            if (!n) return;
            let { gsap: r } = (0, i.V)();
            document.documentElement.classList.add("has-cursor");
            let o = r.quickTo(n, "x", { duration: 0.35, ease: "power3.out" }),
              s = r.quickTo(n, "y", { duration: 0.35, ease: "power3.out" }),
              a = (e) => {
                (o(e.clientX),
                  s(e.clientY),
                  r.to(n, { opacity: 1, duration: 0.3, overwrite: "auto" }));
              },
              d = (e) => {
                let o = e.target.closest("[data-cursor]"),
                  i = o?.dataset.cursor;
                (t.current &&
                  (t.current.textContent = "view" === i ? "View" : ""),
                  r.to(n.firstElementChild, {
                    scale: "view" === i ? 1 : "link" === i ? 0.5 : 0.12,
                    duration: 0.5,
                    ease: "power3.out",
                  }));
              },
              u = () => r.to(n, { opacity: 0, duration: 0.3 });
            return (
              window.addEventListener("pointermove", a),
              window.addEventListener("pointerover", d),
              document.documentElement.addEventListener("pointerleave", u),
              () => {
                (document.documentElement.classList.remove("has-cursor"),
                  window.removeEventListener("pointermove", a),
                  window.removeEventListener("pointerover", d),
                  document.documentElement.removeEventListener(
                    "pointerleave",
                    u,
                  ));
              }
            );
          }, []),
          (0, r.jsx)("div", {
            ref: e,
            "aria-hidden": !0,
            className:
              "pointer-events-none fixed left-0 top-0 z-[90] opacity-0 mix-blend-normal",
            children: (0, r.jsx)("div", {
              className:
                "-ml-14 -mt-14 grid h-28 w-28 scale-[0.12] place-items-center rounded-full bg-brass text-ink-deep",
              children: (0, r.jsx)("span", {
                ref: t,
                className:
                  "text-[0.7rem] font-medium uppercase tracking-[0.2em]",
              }),
            }),
          })
        );
      }
    },
  },
]);
