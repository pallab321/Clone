(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [397],
  {
    6318: (e, t, i) => {
      "use strict";
      i.d(t, { ON: () => n, Oe: () => r });
      let n = [0.22, 1, 0.36, 1];
      function r() {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      }
    },
    72067: (e, t, i) => {
      Promise.resolve().then(i.bind(i, 88504));
    },
    88504: (e, t, i) => {
      "use strict";
      (i.r(t), i.d(t, { default: () => s }));
      var n = i(95155),
        r = i(19489),
        a = i(6318);
      function s({ children: e }) {
        return (0, n.jsx)(r.P.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6, ease: a.ON },
          children: e,
        });
      }
    },
  },
  (e) => {
    (e.O(0, [489, 441, 794, 358], () => e((e.s = 72067))), (_N_E = e.O()));
  },
]);
