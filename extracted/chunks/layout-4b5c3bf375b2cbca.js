(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    13038: (e, t, r) => {
      "use strict";
      r.d(t, { CookieBanner: () => l });
      var n = r(95155),
        s = r(98500),
        i = r.n(s),
        o = r(12115),
        a = r(96550);
      function l() {
        let e = (0, a.S)(),
          [t, r] = (0, o.useState)(!1);
        return ((0, o.useEffect)(() => {
          let e = () => r(!0),
            t = window.setTimeout(e, 6e3),
            n = { once: !0, passive: !0 };
          return (
            window.addEventListener("scroll", e, n),
            window.addEventListener("pointerdown", e, n),
            window.addEventListener("keydown", e, n),
            () => {
              (window.clearTimeout(t),
                window.removeEventListener("scroll", e),
                window.removeEventListener("pointerdown", e),
                window.removeEventListener("keydown", e));
            }
          );
        }, []),
        "unset" === e && t)
          ? (0, n.jsxs)("div", {
              role: "region",
              "aria-label": "Cookie consent",
              className:
                "fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl bg-night p-5 text-cream shadow-2xl sm:left-6 sm:right-auto",
              children: [
                (0, n.jsxs)("p", {
                  className: "text-[length:var(--fs-sm)]",
                  children: [
                    "We use analytics cookies to improve this site. See our ",
                    (0, n.jsx)(i(), {
                      href: "/privacy",
                      className: "underline underline-offset-4",
                      children: "Privacy Policy",
                    }),
                    ".",
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "mt-4 flex gap-3",
                  children: [
                    (0, n.jsx)("button", {
                      type: "button",
                      onClick: () => (0, a.b)("granted"),
                      className:
                        "eyebrow bg-brass px-5 py-3 text-night hover:bg-brass-light",
                      children: "Accept",
                    }),
                    (0, n.jsx)("button", {
                      type: "button",
                      onClick: () => (0, a.b)("denied"),
                      className:
                        "eyebrow border border-cream/30 px-5 py-3 hover:bg-cream/10",
                      children: "Decline",
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
    },
    52340: (e, t, r) => {
      (Promise.resolve().then(r.bind(r, 98250)),
        Promise.resolve().then(r.bind(r, 13038)),
        Promise.resolve().then(r.bind(r, 85554)),
        Promise.resolve().then(r.t.bind(r, 10920, 23)),
        Promise.resolve().then(r.t.bind(r, 73646, 23)),
        Promise.resolve().then(r.t.bind(r, 66872, 23)),
        Promise.resolve().then(r.bind(r, 70637)),
        Promise.resolve().then(r.bind(r, 58666)),
        Promise.resolve().then(r.t.bind(r, 98500, 23)),
        Promise.resolve().then(r.bind(r, 74843)),
        Promise.resolve().then(r.bind(r, 47631)),
        Promise.resolve().then(r.bind(r, 57518)),
        Promise.resolve().then(r.bind(r, 40421)),
        Promise.resolve().then(r.bind(r, 95028)),
        Promise.resolve().then(r.bind(r, 54643)),
        Promise.resolve().then(r.bind(r, 89634)),
        Promise.resolve().then(r.bind(r, 98151)),
        Promise.resolve().then(r.bind(r, 90899)),
        Promise.resolve().then(r.bind(r, 36320)),
        Promise.resolve().then(r.bind(r, 37397)),
        Promise.resolve().then(r.bind(r, 70584)),
        Promise.resolve().then(r.bind(r, 14685)),
        Promise.resolve().then(r.bind(r, 73530)),
        Promise.resolve().then(r.bind(r, 55693)),
        Promise.resolve().then(r.bind(r, 78197)),
        Promise.resolve().then(r.bind(r, 51362)),
        Promise.resolve().then(r.bind(r, 73779)),
        Promise.resolve().then(r.bind(r, 39374)),
        Promise.resolve().then(r.bind(r, 2333)),
        Promise.resolve().then(r.bind(r, 40154)),
        Promise.resolve().then(r.bind(r, 89071)),
        Promise.resolve().then(r.bind(r, 58848)),
        Promise.resolve().then(r.bind(r, 29300)),
        Promise.resolve().then(r.bind(r, 72615)),
        Promise.resolve().then(r.bind(r, 98296)),
        Promise.resolve().then(r.bind(r, 14613)),
        Promise.resolve().then(r.bind(r, 43761)),
        Promise.resolve().then(r.bind(r, 72352)),
        Promise.resolve().then(r.bind(r, 85171)),
        Promise.resolve().then(r.bind(r, 36020)),
        Promise.resolve().then(r.bind(r, 95253)),
        Promise.resolve().then(r.bind(r, 20500)),
        Promise.resolve().then(r.bind(r, 62676)),
        Promise.resolve().then(r.bind(r, 24554)),
        Promise.resolve().then(r.bind(r, 39069)),
        Promise.resolve().then(r.bind(r, 69668)),
        Promise.resolve().then(r.bind(r, 32812)),
        Promise.resolve().then(r.bind(r, 11414)),
        Promise.resolve().then(r.bind(r, 24170)),
        Promise.resolve().then(r.bind(r, 76302)),
        Promise.resolve().then(r.bind(r, 43323)),
        Promise.resolve().then(r.bind(r, 84432)),
        Promise.resolve().then(r.bind(r, 10929)),
        Promise.resolve().then(r.bind(r, 90852)),
        Promise.resolve().then(r.bind(r, 51323)),
        Promise.resolve().then(r.bind(r, 37056)),
        Promise.resolve().then(r.bind(r, 79692)),
        Promise.resolve().then(r.bind(r, 75522)),
        Promise.resolve().then(r.bind(r, 49010)),
        Promise.resolve().then(r.bind(r, 94228)),
        Promise.resolve().then(r.bind(r, 65044)),
        Promise.resolve().then(r.bind(r, 98848)),
        Promise.resolve().then(r.bind(r, 79281)),
        Promise.resolve().then(r.bind(r, 97283)),
        Promise.resolve().then(r.bind(r, 26214)),
        Promise.resolve().then(r.bind(r, 48097)));
    },
    58666: (e, t, r) => {
      "use strict";
      r.d(t, { LazyMotion: () => a });
      var n = r(95155),
        s = r(37206);
      let i = (0, s.default)(
          () =>
            r
              .e(183)
              .then(r.bind(r, 14564))
              .then((e) => e.SmoothScroll),
          { loadableGenerated: { webpack: () => [14564] }, ssr: !1 },
        ),
        o = (0, s.default)(
          () =>
            r
              .e(616)
              .then(r.bind(r, 65616))
              .then((e) => e.Cursor),
          { loadableGenerated: { webpack: () => [65616] }, ssr: !1 },
        );
      function a() {
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(i, {}), (0, n.jsx)(o, {})],
        });
      }
    },
    66872: () => {},
    70637: (e, t, r) => {
      "use strict";
      r.d(t, { Header: () => P });
      var n = r(95155),
        s = r(98500),
        i = r.n(s),
        o = r(5772),
        a = r(73321),
        l = r(12115),
        d = r(61530),
        c = r(7890),
        h = r(80642),
        m = r(19489);
      let b = [
        { label: "Projects", href: "/projects", mega: !0 },
        { label: "About", href: "/about" },
        { label: "Commercial", href: "/commercial" },
        { label: "Gallery", href: "/gallery" },
        { label: "Journal", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ];
      var u = r(22889),
        p = r(52519),
        v = r(6318),
        x = r(87361),
        g = r(44836);
      function f({ tone: e = "dark", className: t = "", size: r = "header" }) {
        return (0, n.jsxs)(i(), {
          href: "/",
          className: `inline-flex shrink-0 items-center ${t}`,
          children: [
            (0, n.jsx)("img", {
              src:
                "dark" === e
                  ? "/brand/cp-group-logo-reverse.svg"
                  : "/brand/cp-group-logo-primary.svg",
              alt: "CP Group, CP Real Estate, We build trust",
              width: 1290,
              height: 680,
              className: `${"footer" === r ? "h-20 sm:h-24" : "h-12 sm:h-14 lg:h-[68px]"} w-auto`,
            }),
            (0, n.jsx)("span", { className: "sr-only", children: ", home" }),
          ],
        });
      }
      var w = r(34426);
      function P() {
        let e = (0, a.usePathname)(),
          t = "/" === e,
          r = (0, x.C)(),
          [s, P] = (0, l.useState)(!1),
          [j, y] = (0, l.useState)(!1),
          [N, k] = (0, l.useState)(null),
          [E, _] = (0, l.useState)(null),
          C = N === e,
          L = E === e,
          S = (t) => _(t ? e : null),
          { scrollY: $ } = (0, d.L)();
        ((0, c.L)($, "change", (e) => {
          let r = $.getPrevious() ?? 0;
          (P(e > 60),
            !t && (e > 240 && e > r + 2 ? y(!0) : e < r - 2 && y(!1)));
        }),
          (0, l.useEffect)(
            () => (
              document.documentElement.classList.toggle("lenis-stopped", C),
              () => document.documentElement.classList.remove("lenis-stopped")
            ),
            [C],
          ),
          (0, l.useEffect)(() => {
            let e = (e) => {
              "Escape" === e.key && (k(null), _(null));
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, []));
        let I = t
          ? s || L || C
            ? "bg-night shadow-[0_14px_34px_-18px_rgba(0,0,0,0.65)]"
            : "bg-night/60 backdrop-blur-md border-b border-cream/10"
          : s || L || C
            ? "bg-night/90 backdrop-blur-md"
            : "bg-transparent";
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("header", {
              className: `fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-out-expo ${j && !C && !L ? "-translate-y-full" : "translate-y-0"} ${I}`,
              onMouseLeave: () => S(!1),
              children: [
                (0, n.jsxs)("div", {
                  className: `page-wrap flex items-center justify-between ${t ? "h-[84px]" : "h-[76px]"}`,
                  children: [
                    (0, n.jsx)(f, {}),
                    (0, n.jsx)("nav", {
                      "aria-label": "Primary",
                      className: "hidden items-center gap-6 xl:gap-10 lg:flex",
                      children: b.map((t) =>
                        (0, n.jsx)(
                          i(),
                          {
                            href: t.href,
                            onMouseEnter: () => S("mega" in t),
                            onFocus: () => S("mega" in t),
                            "aria-current": e.startsWith(t.href)
                              ? "page"
                              : void 0,
                            className:
                              "link-underline tap eyebrow transition-colors text-cream/85 hover:text-cream",
                            children: t.label,
                          },
                          t.href,
                        ),
                      ),
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex items-center gap-4",
                      children: [
                        (0, n.jsxs)(w.Button, {
                          href: r,
                          magnetic: !0,
                          event: "header_enquire",
                          className: "max-md:!hidden !px-6 !py-3",
                          children: [
                            "Enquire now ",
                            (0, n.jsx)(g.F, { size: 14, "aria-hidden": !0 }),
                          ],
                        }),
                        (0, n.jsxs)("button", {
                          type: "button",
                          className:
                            "eyebrow relative z-[60] flex h-11 items-center gap-3 text-cream lg:hidden",
                          "aria-expanded": C,
                          "aria-controls": "mobile-menu",
                          onClick: () => {
                            let t;
                            return (
                              (t = (e) => !e),
                              k((r) => (t(r === e) ? e : null))
                            );
                          },
                          children: [
                            (0, n.jsx)("span", {
                              className: "max-sm:sr-only",
                              children: C ? "Close" : "Menu",
                            }),
                            (0, n.jsxs)("span", {
                              "aria-hidden": !0,
                              className: "relative block h-3 w-7",
                              children: [
                                (0, n.jsx)("span", {
                                  className: `absolute left-0 h-px w-full bg-current transition-all duration-500 ${C ? "top-1/2 rotate-45" : "top-0"}`,
                                }),
                                (0, n.jsx)("span", {
                                  className: `absolute left-0 h-px w-full bg-current transition-all duration-500 ${C ? "top-1/2 -rotate-45" : "bottom-0"}`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)(h.N, {
                  children:
                    L &&
                    (0, n.jsx)(m.P.div, {
                      initial: { opacity: 0, y: -8 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -8 },
                      transition: { duration: 0.35, ease: v.ON },
                      className: "hidden border-t border-cream/10 lg:block",
                      children: (0, n.jsxs)("div", {
                        className: "page-wrap grid grid-cols-12 gap-8 py-10",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "col-span-3",
                            children: [
                              (0, n.jsx)("p", {
                                className: "label",
                                children: "Projects",
                              }),
                              (0, n.jsx)("ul", {
                                className: "mt-6 space-y-3 text-cream/90",
                                children: [
                                  ["All projects", "/projects"],
                                  ["Ongoing", "/projects?status=ongoing"],
                                  ["Completed", "/projects?status=completed"],
                                  ["Commercial", "/projects?type=commercial"],
                                ].map(([e, t]) =>
                                  (0, n.jsx)(
                                    "li",
                                    {
                                      children: (0, n.jsx)(i(), {
                                        href: t,
                                        className:
                                          "link-underline font-display text-2xl",
                                        children: e,
                                      }),
                                    },
                                    t,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          (0, n.jsx)("ul", {
                            className: "col-span-9 grid grid-cols-3 gap-6",
                            children: p.Mx.map((e) =>
                              (0, n.jsx)(
                                "li",
                                {
                                  children: (0, n.jsxs)(i(), {
                                    href: `/projects/${e.slug}`,
                                    "data-cursor": "view",
                                    className: "group block",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className:
                                          "relative aspect-[16/10] overflow-hidden bg-ink",
                                        children: (0, n.jsx)(o.A, {
                                          src: e.hero.src,
                                          alt: e.hero.alt,
                                          fill: !0,
                                          sizes: "20vw",
                                          className:
                                            "object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105",
                                        }),
                                      }),
                                      (0, n.jsx)("p", {
                                        className:
                                          "mt-3 font-display text-2xl text-cream",
                                        children: e.name,
                                      }),
                                      (0, n.jsx)("p", {
                                        className:
                                          "mt-1 text-[length:var(--fs-sm)] italic text-brass",
                                        children: e.tagline,
                                      }),
                                    ],
                                  }),
                                },
                                e.slug,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
                }),
              ],
            }),
            (0, n.jsx)(h.N, {
              children:
                C &&
                (0, n.jsxs)(m.P.div, {
                  id: "mobile-menu",
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": "Menu",
                  initial: { clipPath: "inset(0 0 100% 0)" },
                  animate: { clipPath: "inset(0 0 0% 0)" },
                  exit: { clipPath: "inset(0 0 100% 0)" },
                  transition: { duration: 0.7, ease: v.ON },
                  className:
                    "fixed inset-0 z-40 flex flex-col justify-between bg-ink px-[var(--gutter)] pb-10 pt-28 lg:hidden",
                  children: [
                    (0, n.jsx)("ul", {
                      className: "space-y-2",
                      children: [{ label: "Home", href: "/" }, ...b].map(
                        (e, t) =>
                          (0, n.jsx)(
                            m.P.li,
                            {
                              initial: { opacity: 0, y: 30 },
                              animate: { opacity: 1, y: 0 },
                              transition: {
                                delay: 0.25 + 0.07 * t,
                                duration: 0.7,
                                ease: v.ON,
                              },
                              children: (0, n.jsx)(i(), {
                                href: e.href,
                                className:
                                  "block font-display text-[clamp(2.5rem,11vw,4rem)] leading-[1.1] text-cream",
                                children: e.label,
                              }),
                            },
                            e.href,
                          ),
                      ),
                    }),
                    (0, n.jsxs)("div", {
                      className: "space-y-4 text-cream/80",
                      children: [
                        (0, n.jsx)(w.Button, {
                          href: r,
                          className: "w-full",
                          event: "mobile_menu_enquire",
                          children: "Enquire now",
                        }),
                        (0, n.jsx)("p", {
                          className: "eyebrow",
                          children: (0, n.jsx)("a", {
                            href: u._.contact.phoneHref,
                            children: u._.contact.phone,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            }),
          ],
        });
      }
    },
    85554: (e, t, r) => {
      "use strict";
      r.d(t, { FloatingCTA: () => u });
      var n = r(95155),
        s = r(98500),
        i = r.n(s),
        o = r(12115),
        a = r(61530),
        l = r(7890),
        d = r(2563),
        c = r(22889),
        h = r(24940),
        m = r(87361),
        b = r(73321);
      function u() {
        let [e, t] = (0, o.useState)(!1),
          [r, s] = (0, o.useState)(!1),
          u = (0, m.C)(),
          p = (0, b.usePathname)(),
          { scrollY: v } = (0, a.L)();
        ((0, l.L)(v, "change", (e) => t(e > 0.6 * window.innerHeight)),
          (0, o.useEffect)(() => {
            let e = ["enquire", "visit"]
              .map((e) => document.getElementById(e))
              .filter(Boolean);
            if (!e.length) return;
            let t = new Set(),
              r = new IntersectionObserver(
                (e) => {
                  (e.forEach((e) =>
                    e.isIntersecting ? t.add(e.target) : t.delete(e.target),
                  ),
                    s(t.size > 0));
                },
                { threshold: 0.15 },
              );
            return (e.forEach((e) => r.observe(e)), () => r.disconnect());
          }, [p]));
        let x = `https://wa.me/${c._.contact.whatsapp}?text=${encodeURIComponent("Hello CP Real Estate, I'd like to know more about your projects.")}`;
        return (0, n.jsxs)("div", {
          className: `fixed bottom-3 right-3 z-40 sm:bottom-5 sm:right-5 flex items-center gap-3 transition-[transform,opacity] duration-500 ease-out-expo ${e && !r ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`,
          children: [
            (0, n.jsx)(i(), {
              href: u,
              onClick: () =>
                (0, h.u)("cta_click", { label: "floating_enquire" }),
              className:
                "eyebrow bg-brass px-4 py-3 text-night sm:px-6 sm:py-4 shadow-[0_8px_30px_rgba(11,18,32,0.5)] transition-colors hover:bg-brass-light",
              children: "Enquire now",
            }),
            (0, n.jsx)("a", {
              href: x,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Chat on WhatsApp",
              onClick: () =>
                (0, h.u)("cta_click", { label: "floating_whatsapp" }),
              className:
                "grid h-[44px] w-[44px] place-items-center sm:h-[52px] sm:w-[52px] bg-estate-lift text-cream shadow-[0_8px_30px_rgba(11,18,32,0.5)] transition-colors hover:bg-estate",
              children: (0, n.jsx)(d._, {
                size: 26,
                weight: "regular",
                "aria-hidden": !0,
              }),
            }),
          ],
        });
      }
    },
    87361: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => s });
      var n = r(73321);
      function s() {
        return (0, n.usePathname)().startsWith("/projects/")
          ? "#enquire"
          : "/contact";
      }
    },
    96550: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => l, b: () => i });
      var n = r(12115);
      let s = "cp-consent";
      function i(e) {
        try {
          localStorage.setItem(s, e);
        } catch {}
        window.dispatchEvent(new Event("cp:consent"));
      }
      let o = (e) => (
          window.addEventListener("cp:consent", e),
          () => window.removeEventListener("cp:consent", e)
        ),
        a = () => {
          try {
            return localStorage.getItem(s) ?? "unset";
          } catch {
            return "denied";
          }
        },
        l = () => (0, n.useSyncExternalStore)(o, a, () => "unknown");
    },
    98250: (e, t, r) => {
      "use strict";
      r.d(t, { Analytics: () => a });
      var n = r(95155),
        s = r(65596),
        i = r(96550);
      let o = r(41463).env.NEXT_PUBLIC_GA_ID;
      function a() {
        let e = (0, i.S)();
        return o && "granted" === e
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(s.default, {
                  src: `https://www.googletagmanager.com/gtag/js?id=${o}`,
                  strategy: "afterInteractive",
                }),
                (0, n.jsx)(s.default, {
                  id: "ga4",
                  strategy: "afterInteractive",
                  children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${o}');`,
                }),
              ],
            })
          : null;
      }
    },
  },
  (e) => {
    (e.O(0, [783, 592, 253, 437, 489, 952, 320, 776, 930, 441, 794, 358], () =>
      e((e.s = 52340)),
    ),
      (_N_E = e.O()));
  },
]);
