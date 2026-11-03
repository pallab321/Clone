(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    786: (e, A, t) => {
      "use strict";
      t.d(A, { FilmCard: () => l });
      var a = t(95155),
        s = t(5772),
        r = t(12115),
        i = t(71867);
      function l({
        film: e,
        height: A = "min(70dvh, 520px)",
        className: t = "",
      }) {
        let [n, o] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          c = e.width / e.height;
        return (0, a.jsxs)("figure", {
          className: `shrink-0 ${t}`,
          style: { width: `calc(${A} * ${c})`, maxWidth: "86vw" },
          children: [
            (0, a.jsx)("div", {
              className: "relative w-full overflow-hidden bg-ink",
              style: { aspectRatio: c },
              children: n
                ? (0, a.jsx)("video", {
                    ref: d,
                    src: e.src,
                    poster: e.poster,
                    controls: !0,
                    autoPlay: !0,
                    playsInline: !0,
                    preload: "auto",
                    className:
                      "absolute inset-0 h-full w-full bg-night object-contain",
                    "aria-label": e.title,
                  })
                : (0, a.jsxs)("button", {
                    type: "button",
                    onClick: () => o(!0),
                    "data-cursor": "play",
                    "aria-label": `Play film: ${e.title}, ${e.duration}`,
                    className: "group absolute inset-0 block h-full w-full",
                    children: [
                      (0, a.jsx)(s.A, {
                        src: e.poster,
                        alt: "",
                        fill: !0,
                        sizes: "(min-width:1024px) 22vw, 70vw",
                        className:
                          "object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.04]",
                      }),
                      (0, a.jsx)("span", {
                        "aria-hidden": !0,
                        className:
                          "absolute inset-0 bg-night/10 transition-colors group-hover:bg-night/0",
                      }),
                      (0, a.jsx)("span", {
                        "aria-hidden": !0,
                        className:
                          "absolute bottom-5 left-5 grid h-14 w-14 place-items-center bg-brass text-night transition-transform duration-500 group-hover:scale-110",
                        children: (0, a.jsx)(i.j, { size: 22, weight: "fill" }),
                      }),
                    ],
                  }),
            }),
            (0, a.jsxs)("figcaption", {
              className: "mt-4",
              children: [
                (0, a.jsx)("span", {
                  className:
                    "block font-display text-[length:var(--fs-lg)] leading-snug text-cream",
                  children: e.title,
                }),
                (0, a.jsxs)("span", {
                  className:
                    "mt-1 block text-[length:var(--fs-sm)] text-cream/65",
                  children: [
                    (0, a.jsx)("span", {
                      className: "tabular-nums",
                      children: e.duration,
                    }),
                    e.caption
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [" ", "\xb7", " ", e.caption],
                        })
                      : null,
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    13663: (e, A, t) => {
      "use strict";
      (t.r(A), t.d(A, { default: () => a }));
      let a = {
        src: "/_next/static/media/trophy.0e940e2d.jpg",
        height: 1100,
        width: 1100,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACqg//EAB0QAAIBBAMAAAAAAAAAAAAAAAIRAwABBRIhIkH/2gAIAQEAAT8AkGEcwHWR6XRLjZe1/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQARgf/aAAgBAgEBPwCg2f/EABYRAQEBAAAAAAAAAAAAAAAAABEAYf/aAAgBAwEBPwBXL//Z",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    18162: (e, A, t) => {
      (Promise.resolve().then(t.bind(t, 82741)),
        Promise.resolve().then(t.bind(t, 93885)),
        Promise.resolve().then(t.bind(t, 87597)),
        Promise.resolve().then(t.bind(t, 32837)),
        Promise.resolve().then(t.bind(t, 20648)),
        Promise.resolve().then(t.bind(t, 34426)),
        Promise.resolve().then(t.bind(t, 786)),
        Promise.resolve().then(t.bind(t, 26941)),
        Promise.resolve().then(t.bind(t, 57548)),
        Promise.resolve().then(t.t.bind(t, 98500, 23)),
        Promise.resolve().then(t.t.bind(t, 38437, 23)),
        Promise.resolve().then(t.bind(t, 31778)),
        Promise.resolve().then(t.bind(t, 29413)),
        Promise.resolve().then(t.bind(t, 13663)),
        Promise.resolve().then(t.bind(t, 96833)),
        Promise.resolve().then(t.bind(t, 46281)),
        Promise.resolve().then(t.bind(t, 86979)),
        Promise.resolve().then(t.bind(t, 35299)),
        Promise.resolve().then(t.bind(t, 93769)),
        Promise.resolve().then(t.bind(t, 93975)),
        Promise.resolve().then(t.bind(t, 27288)),
        Promise.resolve().then(t.bind(t, 74843)),
        Promise.resolve().then(t.bind(t, 47631)),
        Promise.resolve().then(t.bind(t, 57518)),
        Promise.resolve().then(t.bind(t, 40421)),
        Promise.resolve().then(t.bind(t, 95028)),
        Promise.resolve().then(t.bind(t, 54643)),
        Promise.resolve().then(t.bind(t, 89634)),
        Promise.resolve().then(t.bind(t, 98151)),
        Promise.resolve().then(t.bind(t, 90899)),
        Promise.resolve().then(t.bind(t, 36320)),
        Promise.resolve().then(t.bind(t, 37397)),
        Promise.resolve().then(t.bind(t, 70584)),
        Promise.resolve().then(t.bind(t, 14685)),
        Promise.resolve().then(t.bind(t, 73530)),
        Promise.resolve().then(t.bind(t, 55693)),
        Promise.resolve().then(t.bind(t, 78197)),
        Promise.resolve().then(t.bind(t, 51362)),
        Promise.resolve().then(t.bind(t, 73779)),
        Promise.resolve().then(t.bind(t, 39374)),
        Promise.resolve().then(t.bind(t, 2333)),
        Promise.resolve().then(t.bind(t, 40154)),
        Promise.resolve().then(t.bind(t, 89071)),
        Promise.resolve().then(t.bind(t, 58848)),
        Promise.resolve().then(t.bind(t, 29300)),
        Promise.resolve().then(t.bind(t, 72615)),
        Promise.resolve().then(t.bind(t, 98296)),
        Promise.resolve().then(t.bind(t, 14613)),
        Promise.resolve().then(t.bind(t, 43761)),
        Promise.resolve().then(t.bind(t, 72352)),
        Promise.resolve().then(t.bind(t, 85171)),
        Promise.resolve().then(t.bind(t, 36020)),
        Promise.resolve().then(t.bind(t, 95253)),
        Promise.resolve().then(t.bind(t, 20500)),
        Promise.resolve().then(t.bind(t, 62676)),
        Promise.resolve().then(t.bind(t, 24554)),
        Promise.resolve().then(t.bind(t, 39069)),
        Promise.resolve().then(t.bind(t, 69668)),
        Promise.resolve().then(t.bind(t, 32812)),
        Promise.resolve().then(t.bind(t, 11414)),
        Promise.resolve().then(t.bind(t, 24170)),
        Promise.resolve().then(t.bind(t, 76302)),
        Promise.resolve().then(t.bind(t, 43323)),
        Promise.resolve().then(t.bind(t, 84432)),
        Promise.resolve().then(t.bind(t, 10929)),
        Promise.resolve().then(t.bind(t, 90852)),
        Promise.resolve().then(t.bind(t, 51323)),
        Promise.resolve().then(t.bind(t, 37056)),
        Promise.resolve().then(t.bind(t, 79692)),
        Promise.resolve().then(t.bind(t, 75522)),
        Promise.resolve().then(t.bind(t, 49010)),
        Promise.resolve().then(t.bind(t, 94228)),
        Promise.resolve().then(t.bind(t, 65044)),
        Promise.resolve().then(t.bind(t, 98848)),
        Promise.resolve().then(t.bind(t, 79281)),
        Promise.resolve().then(t.bind(t, 97283)),
        Promise.resolve().then(t.bind(t, 26214)),
        Promise.resolve().then(t.bind(t, 48097)));
    },
    20648: (e, A, t) => {
      "use strict";
      t.d(A, { HeroCinematic: () => f });
      var a = t(95155),
        s = t(5772),
        r = t(98500),
        i = t.n(r),
        l = t(12115),
        n = t(41760),
        o = t(71867),
        d = t(88930);
      let c = {
        src: "/_next/static/media/hero-poster.b0038043.jpg",
        height: 900,
        width: 1600,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAAnxM//8QAHRAAAgIBBQAAAAAAAAAAAAAAAQMCBBEAEiExQv/aAAgBAQABPwBtt6bS0iWeJEz9HYcd6//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwCs/9k=",
        blurWidth: 8,
        blurHeight: 5,
      };
      t(52519);
      let h = [
          {
            at: 0,
            place: "CP Greens, Siliguri",
            lines: ["One man's vision.", "A city's elevation."],
          },
          {
            at: 5.2,
            place: "CP Greens, Siliguri",
            lines: ["Siliguri's first", "IGBC Gold green building."],
          },
          {
            at: 9.4,
            place: "EUROPA, Siliguri",
            lines: ["Townhouses shaped by", "European discipline."],
          },
          {
            at: 13.6,
            place: "CP Plaza, Shivmandir",
            lines: ["Where the city", "shops and works."],
          },
          {
            at: 17.8,
            place: "CP Greens at night",
            lines: ["Building today.", "Defining tomorrow."],
          },
        ],
        g = "Artist's impressions",
        m = ["One man's vision.", "A city's elevation."];
      var u = t(22889),
        p = t(40528);
      function x() {
        let e = (0, l.useRef)(null);
        return (
          (0, p.n)(e, ({ gsap: A, reduced: t }) => {
            let a = e.current?.closest("section");
            if (!a || t) return;
            let s = {
              trigger: a,
              start: "top top",
              end: "bottom top",
              scrub: !0,
            };
            (A.to(a.querySelector("[data-hero-bg]"), {
              scale: 1.18,
              ease: "none",
              scrollTrigger: s,
            }),
              A.to(a.querySelectorAll("[data-hero-copy]"), {
                yPercent: -18,
                opacity: 0,
                ease: "none",
                scrollTrigger: { ...s, end: "60% top" },
              }));
          }),
          (0, a.jsx)("span", { ref: e, hidden: !0 })
        );
      }
      let b = h;
      function f() {
        let e = (0, l.useRef)(null),
          A = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            let t = e.current,
              a = A.current;
            if (!t || !a) return;
            let s = Array.from(t.querySelectorAll("[data-cap]")),
              r = Array.from(t.querySelectorAll("[data-place]")),
              i = Array.from(t.querySelectorAll("[data-tick] > span")),
              l = t.querySelector("[data-toggle]");
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              t.dataset.paused = "true";
              return;
            }
            let n = window.matchMedia("(max-width: 767px)").matches
                ? "/videos/home/hero-m.mp4"
                : "/videos/home/hero-d.mp4",
              o = window.setTimeout(() => {
                ((a.src = n),
                  a.play().catch(() => {
                    t.dataset.paused = "true";
                  }));
              }, 400),
              d = -1,
              c = 0,
              h = () => {
                let e = a.currentTime,
                  A = a.duration || 23.8,
                  t = 0;
                (b.forEach((A, a) => {
                  e >= A.at && (t = a);
                }),
                  t !== d &&
                    (s.forEach((e, A) =>
                      e.setAttribute("data-active", String(A === t)),
                    ),
                    r.forEach((e, A) =>
                      e.setAttribute("data-active", String(A === t)),
                    ),
                    (d = t)),
                  i.forEach((t, a) => {
                    let s = b[a].at,
                      r = a < b.length - 1 ? b[a + 1].at : A;
                    t.style.transform = `scaleX(${Math.min(1, Math.max(0, (e - s) / (r - s)))})`;
                  }),
                  (c = requestAnimationFrame(h)));
              },
              g = () => {
                ((t.dataset.paused = "false"),
                  a.classList.add("opacity-100"),
                  cancelAnimationFrame(c),
                  (c = requestAnimationFrame(h)));
              },
              m = () => {
                ((t.dataset.paused = "true"), cancelAnimationFrame(c));
              };
            (a.addEventListener("playing", g), a.addEventListener("pause", m));
            let u = () => (a.paused ? a.play() : a.pause());
            l?.addEventListener("click", u);
            let p = new IntersectionObserver(([e]) => {
              e.isIntersecting
                ? "paused" !== t.dataset.user &&
                  a.src &&
                  a.play().catch(() => {})
                : a.pause();
            });
            return (
              p.observe(t),
              l?.addEventListener("click", () => {
                t.dataset.user = a.paused ? "paused" : "";
              }),
              () => {
                (clearTimeout(o),
                  cancelAnimationFrame(c),
                  p.disconnect(),
                  a.removeEventListener("playing", g),
                  a.removeEventListener("pause", m),
                  l?.removeEventListener("click", u));
              }
            );
          }, []),
          (0, a.jsxs)("section", {
            ref: e,
            "data-paused": "true",
            className:
              "group/hero theme-night relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-night",
            "aria-labelledby": "hero-title",
            children: [
              (0, a.jsxs)("div", {
                "data-hero-bg": !0,
                className: "absolute inset-0 -z-10 will-change-transform",
                children: [
                  (0, a.jsx)(s.A, {
                    src: c,
                    alt: "",
                    fill: !0,
                    priority: !0,
                    placeholder: "blur",
                    sizes: "100vw",
                    className: "object-cover",
                  }),
                  (0, a.jsx)("video", {
                    ref: A,
                    "aria-hidden": !0,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    preload: "none",
                    poster: c.src,
                    className:
                      "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000",
                  }),
                ],
              }),
              (0, a.jsx)(x, {}),
              (0, a.jsx)("div", {
                "aria-hidden": !0,
                className:
                  "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_35%_at_50%_48%,rgba(11,18,32,0.5),transparent_75%),radial-gradient(ellipse_at_center,transparent_40%,rgba(11,18,32,0.55)_100%)]",
              }),
              (0, a.jsx)("div", {
                "aria-hidden": !0,
                className:
                  "absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-night/85 to-transparent",
              }),
              (0, a.jsx)("div", {
                "aria-hidden": !0,
                className:
                  "absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-night/60 to-transparent",
              }),
              (0, a.jsxs)("h1", {
                id: "hero-title",
                className: "sr-only",
                children: [u._.name, ", Siliguri. ", m.join(" ")],
              }),
              (0, a.jsx)("div", {
                "data-hero-copy": !0,
                className:
                  "wrap flex flex-1 items-center justify-center pt-24 text-center",
                children: (0, a.jsx)("div", {
                  "aria-live": "off",
                  className:
                    "relative h-[2.5em] w-full text-[clamp(2.2rem,1.1rem+3.8vw,4.6rem)] leading-[1.08]",
                  children: b.map((e, A) =>
                    (0, a.jsxs)(
                      "p",
                      {
                        "data-cap": !0,
                        "data-active": 0 === A,
                        "aria-hidden": 0 !== A,
                        className:
                          "absolute inset-x-0 top-0 font-display text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35),0_4px_40px_rgba(0,0,0,0.55)] transition-[opacity,transform,filter] duration-[900ms] ease-out data-[active=false]:translate-y-3 data-[active=false]:opacity-0 data-[active=false]:blur-[6px]",
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "block pb-1 italic text-[0.62em] text-[#f0dcae]",
                            children: e.lines[0],
                          }),
                          (0, a.jsx)("span", {
                            className: "block",
                            children: e.lines[1],
                          }),
                        ],
                      },
                      A,
                    ),
                  ),
                }),
              }),
              (0, a.jsxs)("div", {
                "data-hero-copy": !0,
                className:
                  "wrap grid items-end gap-6 pb-8 sm:grid-cols-[1fr_auto] lg:pb-10",
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "relative h-5 text-[length:var(--fs-xs)] uppercase tracking-[0.2em] text-cream/80",
                        children: b.map((e, A) =>
                          (0, a.jsxs)(
                            "p",
                            {
                              "data-place": !0,
                              "data-active": 0 === A,
                              className:
                                "absolute inset-0 transition-opacity duration-700 data-[active=false]:opacity-0",
                              children: [
                                e.place,
                                " ",
                                (0, a.jsxs)("span", {
                                  className: "text-cream/45",
                                  children: ["(", g, ")"],
                                }),
                              ],
                            },
                            A,
                          ),
                        ),
                      }),
                      (0, a.jsxs)("div", {
                        className: "mt-4 flex max-w-md items-center gap-2",
                        children: [
                          (0, a.jsxs)("button", {
                            type: "button",
                            "data-toggle": !0,
                            "aria-label": "Pause or play the film",
                            className:
                              "tap -ml-2 grid h-9 w-9 shrink-0 place-items-center text-cream/80 hover:text-cream",
                            children: [
                              (0, a.jsx)(n.v, {
                                size: 16,
                                weight: "fill",
                                "aria-hidden": !0,
                                className:
                                  "group-data-[paused=true]/hero:hidden",
                              }),
                              (0, a.jsx)(o.j, {
                                size: 16,
                                weight: "fill",
                                "aria-hidden": !0,
                                className:
                                  "hidden group-data-[paused=true]/hero:block",
                              }),
                            ],
                          }),
                          b.map((e, A) =>
                            (0, a.jsx)(
                              "span",
                              {
                                "data-tick": !0,
                                "aria-hidden": !0,
                                className:
                                  "relative h-px flex-1 overflow-hidden bg-cream/25",
                                children: (0, a.jsx)("span", {
                                  className:
                                    "absolute inset-0 origin-left scale-x-0 bg-brass-light",
                                }),
                              },
                              A,
                            ),
                          ),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-wrap gap-x-8 gap-y-3 text-[0.72rem] uppercase tracking-[0.2em]",
                    children: [
                      (0, a.jsxs)(i(), {
                        href: "#featured",
                        className: "link-underline tap gap-2 text-cream",
                        children: [
                          "View projects ",
                          (0, a.jsx)(d.Q, { size: 14, "aria-hidden": !0 }),
                        ],
                      }),
                      (0, a.jsxs)(i(), {
                        href: "/contact",
                        className: "link-underline tap gap-2 text-brass-light",
                        children: [
                          "Enquire now ",
                          (0, a.jsx)(d.Q, { size: 14, "aria-hidden": !0 }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    26941: (e, A, t) => {
      "use strict";
      (t.r(A), t.d(A, { ImageSlot: () => l }));
      var a = t(95155),
        s = t(5772),
        r = t(12115),
        i = t(40528);
      function l({
        id: e,
        ratio: A,
        alt: t,
        src: n,
        sizes: o,
        priority: d,
        position: c = "center",
        tone: h = "light",
        motion: g = "reveal",
        parallax: m = 0,
        className: u = "",
      }) {
        let p = (0, r.useRef)(null);
        (0, i.n)(p, ({ gsap: e, reduced: A }) => {
          let t = p.current;
          if (A || !t) return;
          let a = t.querySelector("[data-inner]");
          ("reveal" === g &&
            e.from(t, {
              clipPath: "inset(0 0 100% 0)",
              duration: 1.3,
              ease: "expo.out",
              scrollTrigger: { trigger: t, start: "top 92%", once: !0 },
            }),
            m &&
              a &&
              e.fromTo(
                a,
                { yPercent: -m },
                {
                  yPercent: m,
                  ease: "none",
                  scrollTrigger: {
                    trigger: t,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: !0,
                  },
                },
              ));
        });
        let x = "dark" === h;
        return (0, a.jsx)("div", {
          ref: p,
          "data-slot": e,
          className: `overflow-hidden ${/\b(absolute|fixed|sticky)\b/.test(u) ? "" : "relative"} ${x ? "bg-ink-soft" : "bg-sky"} ${u}`,
          style: { aspectRatio: A },
          children: (0, a.jsx)("div", {
            "data-inner": !0,
            className: "absolute inset-x-0 will-change-transform",
            style: m
              ? { top: `-${m}%`, bottom: `-${m}%` }
              : { top: 0, bottom: 0 },
            children: n
              ? (0, a.jsx)(s.A, {
                  src: n,
                  alt: t,
                  fill: !0,
                  sizes: o,
                  priority: d,
                  placeholder: "object" == typeof n ? "blur" : "empty",
                  className: "object-cover",
                  style: { objectPosition: c },
                })
              : (0, a.jsx)("div", {
                  role: "img",
                  "aria-label": t,
                  className: `flex h-full w-full items-end p-4 ${x ? "bg-gradient-to-br from-ink-soft to-ink" : "bg-gradient-to-br from-sky to-white"}`,
                  children: (0, a.jsxs)("span", {
                    className: `text-[11px] uppercase tracking-[0.2em] ${x ? "text-cream/55" : "text-ink/45"}`,
                    children: [
                      "Image slot: ",
                      e,
                      " (",
                      A.replace(/\s/g, ""),
                      ")",
                    ],
                  }),
                }),
          }),
        });
      }
    },
    27288: (e, A, t) => {
      "use strict";
      (t.r(A), t.d(A, { default: () => a }));
      let a = {
        src: "/_next/static/media/hero-city.3e5de3f8.jpg",
        height: 1729,
        width: 2600,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAACQDx//xAAbEAEAAAcAAAAAAAAAAAAAAAACAAEDESExof/aAAgBAQABPwCVEMathcj/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQJR/9oACAECAQE/AHdaf//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhNS/9oACAEDAQE/AK4ZR//Z",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    29413: (e, A, t) => {
      "use strict";
      (t.r(A), t.d(A, { default: () => a }));
      let a = {
        src: "/_next/static/media/igbc-award-2.57a19536.jpg",
        height: 730,
        width: 930,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAAhh0//8QAHBAAAgEFAQAAAAAAAAAAAAAAAQITAAMEBTEG/9oACAEBAAE/AH9Fs0gK5NwCZy6g9VByv//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8AeQ//xAAXEQEAAwAAAAAAAAAAAAAAAAABACFx/9oACAEDAQE/ABb2f//Z",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    31778: (e, A, t) => {
      "use strict";
      (t.r(A), t.d(A, { default: () => a }));
      let a = {
        src: "/_next/static/media/igbc-award-1.f6110698.jpg",
        height: 680,
        width: 860,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABBP/aAAwDAQACEAMQAAAAjig//8QAHhAAAAQHAAAAAAAAAAAAAAAAAAECEgMEBQYTMqH/2gAIAQEAAT8AmbkqjiTmUToZJ26P/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIx/9oACAECAQE/AEh//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Ar//Z",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    32837: (e, A, t) => {
      "use strict";
      t.d(A, { CustomerJourney: () => v });
      var a = t(95155),
        s = t(12115),
        r = t(5456),
        i = t(5019),
        l = t(91036),
        n = t(58640),
        o = t(27610),
        d = t(86118),
        c = t(4932),
        h = t(32483),
        g = t(32696);
      let m = [
        {
          icon: "ChatCircleText",
          name: "Enquiry",
          title: "We listen first",
          text: "Tell us what you need, by call, WhatsApp or the website. Our team calls you back within 24 hours.",
          care: [
            "A call back within 24 hours",
            "Homes matched to your family and budget",
          ],
        },
        {
          icon: "FileText",
          name: "Details",
          title: "Everything, upfront",
          text: "Brochures, floor plans, unit areas and RERA details, shared clearly so you can compare with confidence.",
          care: ["Floor plans and RERA details", "Answers in plain language"],
        },
        {
          icon: "MapPinLine",
          name: "Site visit",
          title: "See it for yourself",
          text: "A guided visit at a time that suits you, to walk the site, the sample spaces and the neighbourhood.",
          care: [
            "Visits at your convenience",
            "Time with the team who builds it",
          ],
        },
        {
          icon: "Handshake",
          name: "Booking",
          title: "A fair conversation",
          text: "We talk through the unit, the price and the payment plan openly, and put every figure in writing.",
          care: ["A clear cost sheet", "Payment plans explained"],
        },
        {
          icon: "Signature",
          name: "Agreement",
          title: "Paperwork, explained",
          text: "We prepare the agreement for sale and walk you through each clause before you sign.",
          care: ["Agreement drafted for you", "Every clause explained"],
        },
        {
          icon: "Bank",
          name: "Home loan",
          title: "Help with your loan",
          text: "We help you gather and prepare the documents your bank needs and stay in touch with them until the loan is sanctioned.",
          care: [
            "Document checklist and preparation",
            "Coordination with your bank",
          ],
        },
        {
          icon: "Stamp",
          name: "Registration",
          title: "Registration, handled",
          text: "We schedule the registration, prepare the papers and guide you through the day itself.",
          care: ["Scheduling and paperwork", "Guidance on the day"],
        },
        {
          icon: "Key",
          name: "Handover",
          title: "Keys, and beyond",
          text: "A walkthrough of your finished home, the keys, and a team that stays a call away after you move in.",
          care: ["A handover walkthrough", "Support after possession"],
        },
      ];
      var u = t(40528);
      function p({ className: e = "", mono: A = !1 }) {
        return (0, a.jsxs)("svg", {
          "aria-hidden": !0,
          viewBox: "395 262 410 676",
          className: e,
          focusable: "false",
          children: [
            !A &&
              (0, a.jsx)("defs", {
                children: (0, a.jsxs)("linearGradient", {
                  id: "cp-mark-gold",
                  gradientUnits: "userSpaceOnUse",
                  x1: "395",
                  y1: "0",
                  x2: "805",
                  y2: "0",
                  children: [
                    (0, a.jsx)("stop", { offset: "0", stopColor: "#bd8f6a" }),
                    (0, a.jsx)("stop", {
                      offset: "0.45",
                      stopColor: "#cfa583",
                    }),
                    (0, a.jsx)("stop", { offset: "1", stopColor: "#fcd3ad" }),
                  ],
                }),
              }),
            (0, a.jsxs)("g", {
              transform: "matrix(1,0,0,-1,0,1200)",
              fill: A ? "currentColor" : "url(#cp-mark-gold)",
              children: [
                (0, a.jsx)("path", {
                  d: "M804.228 262.341H395.772V730.226L663.709 937.659V728.292L617.116 755.432V842.661L442.366 707.375V308.935H757.634V402.877H804.228Z",
                }),
                (0, a.jsx)("path", {
                  d: "M536.296 709.609C536.214 694.693 534.316 357.309 534.316 352.54H580.909C580.909 356.672 582.174 577.485 582.684 671.179L757.634 579.997V491.928H625.72V445.335H804.228V608.254L536.504 747.785Z",
                }),
              ],
            }),
          ],
        });
      }
      let x = {
          ChatCircleText: r.c,
          FileText: i.i,
          MapPinLine: l.I,
          Handshake: n.g,
          Signature: o.t,
          Bank: d.p,
          Stamp: c.s,
          Key: h.U,
        },
        b = m.length,
        f = (2 * Math.PI * 46) / b;
      function v() {
        let e = (0, s.useRef)(null),
          [A, t] = (0, s.useState)(0);
        ((0, s.useEffect)(() => {
          let A = e.current;
          if (!A) return;
          let a = new IntersectionObserver(
            (e) => {
              e.forEach((e) => {
                e.isIntersecting && t(Number(e.target.dataset.step));
              });
            },
            { rootMargin: "-45% 0px -50% 0px" },
          );
          return (
            A.querySelectorAll("[data-step]").forEach((e) => a.observe(e)),
            () => a.disconnect()
          );
        }, []),
          (0, u.n)(e, ({ gsap: e, reduced: A }) => {
            A ||
              e.fromTo(
                "[data-route]",
                { scaleY: 0 },
                {
                  scaleY: 1,
                  transformOrigin: "50% 0%",
                  ease: "none",
                  scrollTrigger: {
                    trigger: "[data-steps]",
                    start: "top 55%",
                    end: "bottom 50%",
                    scrub: 0.4,
                  },
                },
              );
          }));
        let r = m[A],
          i = x[r.icon];
        return (0, a.jsxs)("section", {
          ref: e,
          className:
            "theme-night relative isolate overflow-clip bg-night py-24 lg:py-36",
          "aria-labelledby": "journey-title",
          children: [
            (0, a.jsx)("div", {
              "aria-hidden": !0,
              className:
                "absolute inset-0 -z-10 [background-image:linear-gradient(rgba(184,154,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(184,154,94,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_30%_40%,black,transparent_75%)]",
            }),
            (0, a.jsx)("div", {
              "aria-hidden": !0,
              className:
                "absolute -left-40 top-1/4 -z-10 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(184,154,94,0.16),transparent_65%)]",
            }),
            (0, a.jsx)(p, {
              mono: !0,
              className:
                "pointer-events-none absolute -right-16 bottom-0 -z-10 h-[80%] w-auto text-cream/[0.018]",
            }),
            (0, a.jsxs)("div", {
              className: "wrap",
              children: [
                (0, a.jsxs)("div", {
                  className: "grid gap-6 lg:grid-cols-12 lg:items-end",
                  children: [
                    (0, a.jsxs)("h2", {
                      id: "journey-title",
                      className:
                        "text-[clamp(2.3rem,1.4rem+3.2vw,4.4rem)] leading-[1.04] lg:col-span-7",
                      children: [
                        "From first call",
                        " ",
                        (0, a.jsx)("em", {
                          className:
                            "block pb-1 font-display italic text-brass-light",
                          children: "to your keys.",
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "max-w-md text-[length:var(--fs-lg)] leading-relaxed text-cream/75 lg:col-span-5",
                      children:
                        "Buying a home has many steps. We walk every one of them with you, so nothing is left to chance and nothing is left to you alone.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "mt-16 grid gap-14 border-t border-cream/10 pt-16 lg:mt-20 lg:grid-cols-12 lg:gap-x-16 lg:pt-20",
                  children: [
                    (0, a.jsx)("div", {
                      "aria-hidden": !0,
                      className: "hidden lg:col-span-5 lg:block",
                      children: (0, a.jsxs)("div", {
                        className: "sticky top-32",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "relative mx-auto aspect-square w-full max-w-[380px]",
                            children: [
                              (0, a.jsxs)("svg", {
                                viewBox: "0 0 120 120",
                                className:
                                  "absolute inset-0 h-full w-full -rotate-90",
                                children: [
                                  (0, a.jsx)("circle", {
                                    cx: "60",
                                    cy: "60",
                                    r: "56",
                                    fill: "none",
                                    stroke: "rgba(244,238,226,0.08)",
                                    strokeWidth: "0.3",
                                    strokeDasharray: "0.6 1.6",
                                  }),
                                  m.map((e, t) =>
                                    (0, a.jsx)(
                                      "circle",
                                      {
                                        cx: "60",
                                        cy: "60",
                                        r: 46,
                                        fill: "none",
                                        strokeWidth: "1.2",
                                        stroke:
                                          t <= A
                                            ? "var(--brass)"
                                            : "rgba(244,238,226,0.14)",
                                        strokeDasharray: `${f - 2.2} ${2 * Math.PI * 46 - f + 2.2}`,
                                        strokeDashoffset: -t * f - 1.1,
                                        className:
                                          "transition-[stroke] duration-700",
                                      },
                                      e.name,
                                    ),
                                  ),
                                  (0, a.jsx)("circle", {
                                    cx: "60",
                                    cy: "60",
                                    r: "34",
                                    fill: "rgba(23,34,56,0.6)",
                                    stroke: "rgba(184,154,94,0.35)",
                                    strokeWidth: "0.3",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "absolute inset-0 transition-transform duration-[900ms] ease-out-expo",
                                style: {
                                  transform: `rotate(${(360 / b) * (A + 0.5)}deg)`,
                                },
                                children: (0, a.jsx)("span", {
                                  className:
                                    "absolute left-1/2 top-[11.6%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-brass-light shadow-[0_0_18px_rgba(216,192,138,0.8)]",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "absolute inset-0 grid place-items-center",
                                children: (0, a.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "flex flex-col items-center text-center [animation:hero-rise_0.6s_var(--ease-out-expo)_both]",
                                    children: [
                                      (0, a.jsx)(i, {
                                        size: 44,
                                        weight: "thin",
                                        className: "text-brass-light",
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "mt-3 text-[length:var(--fs-xs)] uppercase tracking-[0.24em] text-cream/70",
                                        children: r.name,
                                      }),
                                    ],
                                  },
                                  r.name,
                                ),
                              }),
                            ],
                          }),
                          (0, a.jsxs)(
                            "div",
                            {
                              className:
                                "mx-auto mt-10 max-w-[380px] [animation:hero-rise_0.6s_var(--ease-out-expo)_both]",
                              children: [
                                (0, a.jsx)("p", {
                                  className:
                                    "text-center font-display text-[clamp(1.5rem,1.2rem+0.9vw,2rem)] italic leading-tight text-cream",
                                  children: r.title,
                                }),
                                (0, a.jsx)("ul", {
                                  className:
                                    "mt-6 space-y-3 border-t border-cream/10 pt-6",
                                  children: r.care.map((e) =>
                                    (0, a.jsxs)(
                                      "li",
                                      {
                                        className:
                                          "flex gap-3 text-[length:var(--fs-sm)] text-cream/85",
                                        children: [
                                          (0, a.jsx)(g.J, {
                                            size: 16,
                                            weight: "bold",
                                            className:
                                              "mt-0.5 shrink-0 text-brass-light",
                                          }),
                                          e,
                                        ],
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                              ],
                            },
                            `t-${r.name}`,
                          ),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("ol", {
                      "data-steps": !0,
                      className: "relative lg:col-span-7",
                      children: [
                        (0, a.jsx)("span", {
                          "aria-hidden": !0,
                          className:
                            "absolute bottom-8 left-[23px] top-8 w-px bg-cream/10 lg:left-[27px]",
                          children: (0, a.jsx)("span", {
                            "data-route": !0,
                            className:
                              "absolute inset-0 bg-gradient-to-b from-brass-light via-brass to-brass/40",
                          }),
                        }),
                        m.map((e, t) => {
                          let s = x[e.icon],
                            r = t === A,
                            i = t < A;
                          return (0, a.jsxs)(
                            "li",
                            {
                              "data-step": t,
                              className:
                                "relative grid grid-cols-[48px_1fr] gap-6 pb-14 last:pb-0 sm:gap-8 lg:grid-cols-[56px_1fr] lg:pb-20",
                              children: [
                                (0, a.jsx)("span", {
                                  className: `relative z-10 grid h-12 w-12 rotate-45 place-items-center border transition-colors duration-500 lg:h-14 lg:w-14 ${r ? "border-brass-light bg-brass-light text-night shadow-[0_0_30px_rgba(216,192,138,0.35)]" : i ? "border-brass/70 bg-night text-brass-light" : "border-cream/20 bg-night text-cream/50"}`,
                                  children: (0, a.jsx)(s, {
                                    size: 22,
                                    weight: r ? "regular" : "light",
                                    "aria-hidden": !0,
                                    className: "-rotate-45",
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: `transition-opacity duration-700 lg:opacity-45 ${r ? "lg:!opacity-100" : ""}`,
                                  children: [
                                    (0, a.jsx)("p", {
                                      className:
                                        "text-[length:var(--fs-xs)] uppercase tracking-[0.24em] text-brass-light",
                                      children: e.name,
                                    }),
                                    (0, a.jsx)("h3", {
                                      className:
                                        "mt-2 font-display text-[clamp(1.5rem,1.2rem+1vw,2.15rem)] leading-[1.15] text-cream",
                                      children: e.title,
                                    }),
                                    (0, a.jsx)("p", {
                                      className: "mt-3 max-w-lg text-cream/70",
                                      children: e.text,
                                    }),
                                    (0, a.jsx)("ul", {
                                      className:
                                        "mt-5 flex flex-wrap gap-x-6 gap-y-2 lg:hidden",
                                      children: e.care.map((e) =>
                                        (0, a.jsxs)(
                                          "li",
                                          {
                                            className:
                                              "flex gap-2 text-[length:var(--fs-sm)] text-cream/85",
                                            children: [
                                              (0, a.jsx)(g.J, {
                                                size: 15,
                                                weight: "bold",
                                                "aria-hidden": !0,
                                                className:
                                                  "mt-0.5 shrink-0 text-brass-light",
                                              }),
                                              e,
                                            ],
                                          },
                                          e,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.name,
                          );
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    35299: (e, A, t) => {
      "use strict";
      (t.r(A), t.d(A, { default: () => a }));
      let a = {
        src: "/_next/static/media/cp-greens-pool-family.d9a17327.jpg",
        height: 614,
        width: 1024,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAAAih5//8QAHRAAAQMFAQAAAAAAAAAAAAAAAQIDBAAFESExUf/aAAgBAQABPwC4xmWI6lAEqwOnXlf/xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIDBGH/2gAIAQIBAT8A2KhlehP/xAAZEQACAwEAAAAAAAAAAAAAAAABAgAEESL/2gAIAQMBAT8AouzV1070Z//Z",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    40528: (e, A, t) => {
      "use strict";
      t.d(A, { n: () => i });
      var a = t(12115),
        s = t(31623),
        r = t(6318);
      function i(e, A, t = []) {
        (0, a.useEffect)(() => {
          let t,
            a = (0, s.V)(),
            i = (0, r.Oe)(),
            l = a.gsap.context(() => {
              t = A({ ...a, reduced: i });
            }, e);
          return () => {
            ("function" == typeof t && t(), l.revert());
          };
        }, t);
      }
    },
    46281: (e, A, t) => {
      "use strict";
      (t.r(A), t.d(A, { default: () => a }));
      let a = {
        src: "/_next/static/media/cp-greens-gym.e1991ea1.jpg",
        height: 614,
        width: 1024,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAAlQaf/8QAGhAAAwADAQAAAAAAAAAAAAAAAQIDABMUgv/aAAgBAQABPwCFBwijTVqjYoc+c//EABgRAAMBAQAAAAAAAAAAAAAAAAECIQBB/9oACAECAQE/ACiycG//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQJBUf/aAAgBAwEBPwBSe2f/2Q==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    57548: (e, A, t) => {
      "use strict";
      t.d(A, { StatCounter: () => i });
      var a = t(95155),
        s = t(12115),
        r = t(40528);
      function i({
        value: e,
        suffix: A = "",
        prefix: t = "",
        label: l,
        className: n = "",
        tone: o = "dark",
        uniform: d = !1,
      }) {
        let c = (0, s.useRef)(null),
          h = (0, s.useRef)(null);
        (0, r.n)(c, ({ gsap: A, reduced: t }) => {
          if (t || !h.current) return;
          let a = { v: 0 };
          ((h.current.textContent = "0"),
            A.to(a, {
              v: e,
              duration: 2.4,
              ease: "power2.out",
              scrollTrigger: { trigger: c.current, start: "top 85%", once: !0 },
              onUpdate: () => {
                h.current &&
                  (h.current.textContent = Math.round(a.v).toLocaleString(
                    "en-IN",
                  ));
              },
            }));
        });
        let g = `${t}${e.toLocaleString("en-IN")}`.length > 4;
        return (0, a.jsxs)("div", {
          ref: c,
          className: n,
          children: [
            (0, a.jsxs)("p", {
              className: `font-display font-normal leading-[0.95] ${"light" === o ? "text-ink" : "text-cream"} ${d ? "whitespace-nowrap text-[clamp(2.1rem,1.2rem+2.1vw,3.4rem)]" : g ? "text-[clamp(2.25rem,1rem+3.4vw,4rem)]" : "text-fluid-numeral"}`,
              children: [
                t &&
                  (0, a.jsx)("span", {
                    className: "light" === o ? "text-brass-deep" : "text-brass",
                    children: t,
                  }),
                (0, a.jsx)("span", {
                  ref: h,
                  children: e.toLocaleString("en-IN"),
                }),
                (0, a.jsx)("span", {
                  className: `${"light" === o ? "text-brass-deep" : "text-brass"} ${A.trim().length > 1 ? "text-[0.38em] italic" : ""}`,
                  children: A,
                }),
              ],
            }),
            (0, a.jsx)("p", {
              className: `mt-3 max-w-[24ch] text-[length:var(--fs-sm)] ${"light" === o ? "text-copy" : "text-[color:var(--text-mute)]"}`,
              children: l,
            }),
          ],
        });
      }
    },
    82741: (e, A, t) => {
      "use strict";
      (t.r(A), t.d(A, { Reveal: () => i }));
      var a = t(95155),
        s = t(12115),
        r = t(40528);
      function i({
        children: e,
        as: A = "div",
        className: t = "",
        y: l = 24,
        delay: n = 0,
        stagger: o,
      }) {
        let d = (0, s.useRef)(null);
        return (
          (0, r.n)(d, ({ gsap: e, reduced: A }) => {
            if (A || !d.current) return;
            let t = o ? Array.from(d.current.children) : d.current;
            e.from(t, {
              y: l,
              opacity: 0,
              duration: 0.9,
              delay: n,
              ease: "power3.out",
              stagger: o ?? 0,
              scrollTrigger: { trigger: d.current, start: "top 88%", once: !0 },
            });
          }),
          (0, a.jsx)(A, { ref: d, className: t, children: e })
        );
      }
    },
    86979: (e, A, t) => {
      "use strict";
      (t.r(A), t.d(A, { default: () => a }));
      let a = {
        src: "/_next/static/media/cp-greens-landscape.6a4d7771.jpg",
        height: 614,
        width: 1024,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAACcBH//xAAcEAACAgIDAAAAAAAAAAAAAAABAgQRAAMFEzL/2gAIAQEAAT8AHMSGgptcBij9YuvJF5//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFR/9oACAECAQE/AIsP/8QAGREAAQUAAAAAAAAAAAAAAAAAAgABERIx/9oACAEDAQE/ALkOPC//2Q==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    87597: (e, A, t) => {
      "use strict";
      t.d(A, { BlueprintScroll: () => d });
      var a = t(95155),
        s = t(12115);
      let r = "The making of a home",
        i = [
          { name: "Land", line: ["It begins with", "open land."] },
          { name: "Foundation", line: ["A grid is set,", "footings go in."] },
          { name: "Frame", line: ["The frame rises,", "floor by floor."] },
          { name: "Envelope", line: ["Glass and light", "close it in."] },
          { name: "Home", line: ["A building becomes", "a home."] },
        ],
        l = [0, 0.2, 0.38, 0.64, 0.82];
      var n = t(31623),
        o = t(6318);
      function d() {
        let e = (0, s.useRef)(null),
          A = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let a,
              s = e.current,
              r = A.current;
            if (!s || !r) return;
            let i = (0, o.Oe)(),
              { ScrollTrigger: d } = (0, n.V)(),
              c = null,
              h = 0,
              g = !1,
              m = !1,
              u = +!!i,
              p = performance.now(),
              x = Array.from(s.querySelectorAll("[data-line]")),
              b = Array.from(s.querySelectorAll("[data-name]")),
              f = s.querySelector("[data-rail]"),
              v = (e) => {
                let A = l.filter((A) => e >= A).length - 1;
                (x.forEach((e, t) =>
                  e.setAttribute("data-active", String(t === A)),
                ),
                  b.forEach((e, t) =>
                    e.setAttribute("data-active", String(t === A)),
                  ),
                  f && (f.style.transform = `scaleX(${e})`));
              },
              y = () => {
                if (((h = 0), !c || !g || m)) return;
                let e = (performance.now() - p) / 1e3;
                (c.setDrift(i ? 0 : 2.5 * Math.sin(0.25 * e)),
                  c.render(),
                  i || (h = requestAnimationFrame(y)));
              },
              C = () => {
                h || (h = requestAnimationFrame(y));
              },
              E = new IntersectionObserver(
                async ([e]) => {
                  if ((g = e.isIntersecting) && !c) {
                    let { createBlueprint: e } = await Promise.all([
                      t.e(367),
                      t.e(212),
                      t.e(718),
                    ]).then(t.bind(t, 24718));
                    if (m) return;
                    try {
                      c = e(r);
                    } catch {
                      s.dataset.webgl = "off";
                      return;
                    }
                    (c.resize(), c.setProgress(u), (s.dataset.webgl = "on"));
                  }
                  g && C();
                },
                { rootMargin: "400px 0px" },
              );
            E.observe(s);
            let Q = () => {
              (c?.resize(), C());
            };
            return (
              window.addEventListener("resize", Q),
              i ||
                (a = d.create({
                  trigger: s,
                  start: "top top",
                  end: () => `+=${Math.round(2.6 * window.innerHeight)}`,
                  pin: !0,
                  scrub: !0,
                  anticipatePin: 1,
                  invalidateOnRefresh: !0,
                  onUpdate: (e) => {
                    ((u = e.progress), c?.setProgress(u), v(u), C());
                  },
                })),
              v(u),
              () => {
                ((m = !0),
                  cancelAnimationFrame(h),
                  E.disconnect(),
                  window.removeEventListener("resize", Q),
                  a?.kill(),
                  c?.dispose());
              }
            );
          }, []),
          (0, a.jsxs)("section", {
            ref: e,
            "aria-labelledby": "blueprint-title",
            className:
              "theme-night relative h-[100dvh] min-h-[560px] overflow-hidden bg-night",
            children: [
              (0, a.jsx)("h2", {
                id: "blueprint-title",
                className: "sr-only",
                children: r,
              }),
              (0, a.jsx)("p", {
                className: "sr-only",
                children:
                  "A 3D architectural wireframe assembles as you scroll: a site grid and plot boundary, foundations and a column grid, a concrete frame rising floor by floor, glass and mullions, and finally a finished, lit building among trees, while the camera flies down and around it.",
              }),
              (0, a.jsx)("canvas", {
                ref: A,
                "aria-hidden": !0,
                className: "absolute inset-0 h-full w-full",
              }),
              (0, a.jsx)("div", {
                "aria-hidden": !0,
                className:
                  "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(11,18,32,0.75)_100%)]",
              }),
              (0, a.jsx)("div", {
                "aria-hidden": !0,
                className:
                  "pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night/90 to-transparent",
              }),
              (0, a.jsxs)("div", {
                className:
                  "wrap pointer-events-none relative flex h-full flex-col justify-between pb-24 pt-28 sm:pb-12 lg:pb-14",
                children: [
                  (0, a.jsxs)("p", {
                    className:
                      "text-[length:var(--fs-xs)] uppercase tracking-[0.24em] text-brass-light",
                    children: ["(", r, ")"],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "relative min-h-[2.3em] text-[clamp(2.2rem,1.2rem+4vw,5.25rem)] leading-[1.04]",
                        children: i.map((e, A) =>
                          (0, a.jsxs)(
                            "p",
                            {
                              "data-line": !0,
                              "data-active": 0 === A,
                              className:
                                "absolute inset-x-0 bottom-0 font-display text-cream transition-[opacity,transform] duration-700 ease-out data-[active=false]:translate-y-4 data-[active=false]:opacity-0",
                              children: [
                                e.line[0],
                                (0, a.jsx)("br", {}),
                                (0, a.jsx)("em", {
                                  className: "italic text-brass-light",
                                  children: e.line[1],
                                }),
                              ],
                            },
                            e.name,
                          ),
                        ),
                      }),
                      (0, a.jsxs)("div", {
                        className: "mt-8 flex items-center gap-6 lg:mt-10",
                        children: [
                          (0, a.jsx)("ol", {
                            className:
                              "flex flex-wrap gap-x-5 gap-y-1 text-[length:var(--fs-xs)] uppercase tracking-[0.18em]",
                            children: i.map((e, A) =>
                              (0, a.jsx)(
                                "li",
                                {
                                  "data-name": !0,
                                  "data-active": 0 === A,
                                  className:
                                    "text-cream/35 transition-colors duration-500 data-[active=true]:text-cream max-sm:hidden max-sm:data-[active=true]:inline",
                                  children: e.name,
                                },
                                e.name,
                              ),
                            ),
                          }),
                          (0, a.jsx)("div", {
                            "aria-hidden": !0,
                            className: "h-px flex-1 bg-cream/15 max-sm:hidden",
                            children: (0, a.jsx)("span", {
                              "data-rail": !0,
                              className:
                                "block h-px origin-left scale-x-0 bg-brass",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    93769: (e, A, t) => {
      "use strict";
      (t.r(A), t.d(A, { default: () => a }));
      let a = {
        src: "/_next/static/media/cp-greens-street-view.3d410820.jpg",
        height: 737,
        width: 1024,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//aAAwDAQACEAMQAAAAgMf/xAAdEAABAwUBAAAAAAAAAAAAAAAEAhESAAEDBSET/9oACAEBAAE/AMO2HGSP6CWXKTtzia//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQMTQv/aAAgBAgEBPwC2RbZ//8QAGREAAQUAAAAAAAAAAAAAAAAAAQACA0FS/9oACAEDAQE/ADGzIpf/2Q==",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    93885: (e, A, t) => {
      "use strict";
      t.d(A, { EnquiryForm: () => g });
      var a = t(95155),
        s = t(12115),
        r = t(47591),
        i = t(9339);
      let l = (0, i.createServerReference)(
        "60f890e30837348f60aa1ea3ad893a7af5bc627c32",
        i.callServer,
        void 0,
        i.findSourceMapURL,
        "submitEnquiry",
      );
      var n = t(24940),
        o = t(22889);
      let d = { status: "idle" },
        c =
          "w-full border border-cream/30 bg-night/60 px-4 py-3.5 text-[length:var(--fs-base)] text-cream placeholder:text-cream/50 transition-colors focus:border-brass focus:outline-none aria-[invalid=true]:border-[#e58f8f]";
      function h({ id: e, label: A, error: t, hint: s, children: r }) {
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            (0, a.jsx)("label", {
              htmlFor: e,
              className: "text-[length:var(--fs-sm)] text-cream",
              children: A,
            }),
            r,
            s &&
              !t &&
              (0, a.jsx)("p", {
                id: `${e}-hint`,
                className:
                  "text-[length:var(--fs-xs)] text-[color:var(--text-mute)]",
                children: s,
              }),
            t &&
              (0, a.jsx)("p", {
                id: `${e}-error`,
                role: "alert",
                className: "text-[length:var(--fs-sm)] text-[#f0a7a7]",
                children: t,
              }),
          ],
        });
      }
      function g({ projects: e, defaultProject: A, source: t, visit: i = !1 }) {
        let [m, u, p] = (0, s.useActionState)(l, d),
          x = (0, s.useId)(),
          b = (e) => `${x}-${e}`,
          f = m.fieldErrors ?? {},
          v = m.values ?? {};
        return ((0, s.useEffect)(() => {
          "success" === m.status &&
            (0, n.u)("generate_lead", { project: A, source: t });
        }, [m.status, A, t]),
        "success" === m.status)
          ? (0, a.jsxs)("div", {
              role: "status",
              className: "border border-brass/40 bg-night/60 p-8 sm:p-10",
              children: [
                (0, a.jsx)(r.r, {
                  size: 40,
                  weight: "light",
                  className: "text-brass",
                  "aria-hidden": !0,
                }),
                (0, a.jsx)("h3", {
                  className: "mt-5 text-fluid-lg",
                  children: "Thank you. We have your enquiry.",
                }),
                (0, a.jsxs)("p", {
                  className: "mt-3",
                  children: [
                    "Our team will call you shortly. For anything urgent, call ",
                    (0, a.jsx)("a", {
                      className: "link-underline text-cream",
                      href: o._.contact.phoneHref,
                      children: o._.contact.phone,
                    }),
                    ".",
                  ],
                }),
              ],
            })
          : (0, a.jsxs)("form", {
              action: u,
              noValidate: !0,
              className:
                "grid gap-6 border border-[color:var(--line)] bg-ink/70 p-6 sm:p-10",
              children: [
                (0, a.jsx)("div", {
                  "aria-hidden": !0,
                  className: "absolute -left-[9999px] h-0 w-0 overflow-hidden",
                  children: (0, a.jsxs)("label", {
                    children: [
                      "Leave this field empty",
                      (0, a.jsx)("input", {
                        type: "text",
                        name: "website",
                        tabIndex: -1,
                        autoComplete: "off",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("input", {
                  type: "hidden",
                  name: "source",
                  value: t,
                }),
                (0, a.jsx)(h, {
                  id: b("name"),
                  label: "Full name",
                  error: f.name,
                  children: (0, a.jsx)("input", {
                    id: b("name"),
                    name: "name",
                    type: "text",
                    autoComplete: "name",
                    defaultValue: v.name,
                    required: !0,
                    "aria-invalid": !!f.name,
                    "aria-describedby": f.name ? `${b("name")}-error` : void 0,
                    className: c,
                    placeholder: "Your full name",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "grid gap-6 sm:grid-cols-2",
                  children: [
                    (0, a.jsx)(h, {
                      id: b("phone"),
                      label: "Mobile number",
                      error: f.phone,
                      hint: "10-digit Indian mobile, +91 optional",
                      children: (0, a.jsx)("input", {
                        id: b("phone"),
                        name: "phone",
                        type: "tel",
                        inputMode: "tel",
                        autoComplete: "tel",
                        defaultValue: v.phone,
                        required: !0,
                        "aria-invalid": !!f.phone,
                        "aria-describedby": f.phone
                          ? `${b("phone")}-error`
                          : `${b("phone")}-hint`,
                        className: c,
                        placeholder: "98765 43210",
                      }),
                    }),
                    (0, a.jsx)(h, {
                      id: b("email"),
                      label: "Email (optional)",
                      error: f.email,
                      children: (0, a.jsx)("input", {
                        id: b("email"),
                        name: "email",
                        type: "email",
                        autoComplete: "email",
                        defaultValue: v.email,
                        "aria-invalid": !!f.email,
                        "aria-describedby": f.email
                          ? `${b("email")}-error`
                          : void 0,
                        className: c,
                        placeholder: "you@example.com",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(h, {
                  id: b("project"),
                  label: "Project of interest",
                  error: f.project,
                  children: (0, a.jsx)("select", {
                    id: b("project"),
                    name: "project",
                    defaultValue: v.project ?? A,
                    "aria-invalid": !!f.project,
                    className: c,
                    children: e.map((e) =>
                      (0, a.jsx)(
                        "option",
                        { value: e, className: "bg-night", children: e },
                        e,
                      ),
                    ),
                  }),
                }),
                i &&
                  (0, a.jsxs)("div", {
                    className: "grid gap-6 sm:grid-cols-2",
                    children: [
                      (0, a.jsx)(h, {
                        id: b("date"),
                        label: "Preferred date",
                        children: (0, a.jsx)("input", {
                          id: b("date"),
                          name: "date",
                          type: "date",
                          defaultValue: v.date,
                          className: c,
                        }),
                      }),
                      (0, a.jsx)(h, {
                        id: b("time"),
                        label: "Preferred time",
                        children: (0, a.jsxs)("select", {
                          id: b("time"),
                          name: "time",
                          defaultValue: v.time ?? "",
                          className: c,
                          children: [
                            (0, a.jsx)("option", {
                              value: "",
                              className: "bg-night",
                              children: "Any time",
                            }),
                            [
                              "Morning (10am to 12pm)",
                              "Afternoon (12pm to 4pm)",
                              "Evening (4pm to 6pm)",
                            ].map((e) =>
                              (0, a.jsx)(
                                "option",
                                {
                                  value: e,
                                  className: "bg-night",
                                  children: e,
                                },
                                e,
                              ),
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                (0, a.jsx)(h, {
                  id: b("message"),
                  label: "Message (optional)",
                  children: (0, a.jsx)("textarea", {
                    id: b("message"),
                    name: "message",
                    rows: 4,
                    defaultValue: v.message,
                    className: c,
                    placeholder: "Tell us what you are looking for",
                  }),
                }),
                "error" === m.status &&
                  m.message &&
                  (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-[length:var(--fs-sm)] text-[#f0a7a7]",
                    children: m.message,
                  }),
                (0, a.jsx)("button", {
                  type: "submit",
                  disabled: p,
                  className:
                    "eyebrow bg-brass px-8 py-4 text-night transition-colors hover:bg-brass-light active:translate-y-px disabled:opacity-60",
                  children: p
                    ? "Sending"
                    : i
                      ? "Request site visit"
                      : "Send enquiry",
                }),
              ],
            });
      }
    },
    93975: (e, A, t) => {
      "use strict";
      (t.r(A), t.d(A, { default: () => a }));
      let a = {
        src: "/_next/static/media/office-lobby.ad1db994.jpg",
        height: 2048,
        width: 1151,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAACVAU//xAAZEAACAwEAAAAAAAAAAAAAAAABAwACIRH/2gAIAQEAAT8AapfEkXrqwcn/xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8ArP/EABURAQEAAAAAAAAAAAAAAAAAAACB/9oACAEDAQE/AI//2Q==",
        blurWidth: 4,
        blurHeight: 8,
      };
    },
    96833: (e, A, t) => {
      "use strict";
      (t.r(A), t.d(A, { default: () => a }));
      let a = {
        src: "/_next/static/media/cp-greens-aerial-blocks.58b162b7.jpg",
        height: 576,
        width: 1024,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAAnhy//8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQAEBRIi/9oACAEBAAE/AOO3JtzYip2jIvsyn0xNC8//xAAZEQACAwEAAAAAAAAAAAAAAAABAgASIUL/2gAIAQIBAT8ACKbZ0Z//xAAXEQEAAwAAAAAAAAAAAAAAAAABADFx/9oACAEDAQE/AFrJ/9k=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
  },
  (e) => {
    (e.O(0, [592, 253, 437, 477, 776, 930, 441, 794, 358], () =>
      e((e.s = 18162)),
    ),
      (_N_E = e.O()));
  },
]);
