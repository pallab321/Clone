"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [930],
  {
    22889: (e, t, a) => {
      a.d(t, { _: () => i });
      let i = {
        name: "CP Real Estate",
        group: "CP Group",
        url: "https://cprealestate.in",
        tagline: "Building Today. Defining Tomorrow.",
        description:
          "CP Real Estate is a Siliguri developer of residences and commercial spaces, building trust through delivery since 1998.",
        founded: 1998,
        member: "CREDAI North Bengal",
        mission: "Deliver without compromise.",
        philosophy: "Precision in every detail.",
        vision: "Redefine how quality is experienced.",
        contact: {
          phone: "+91 97333 88879",
          phoneHref: "tel:+919733388879",
          email: "inquiry@cprealestate.in",
          supportEmail: "support@cprealestate.in",
          address: [
            "2nd Floor, Block II, Office Block, The Universe",
            "Behind Himalayan Kanya Abasan, Eastern By-pass",
            "Siliguri, West Bengal 734008",
          ],
          whatsapp: "919733388879",
        },
        social: {
          facebook: "https://www.facebook.com/cprealestate.in/",
          instagram: "https://www.instagram.com/cprealestate.in/",
          youtube: "https://www.youtube.com/@CPRealEstateSlg",
          linkedin: "https://in.linkedin.com/company/cp-real-estate-siliguri",
        },
        stats: [
          { value: 27, suffix: "+", label: "Years of experience" },
          { value: 20, suffix: "+", label: "Landmark projects delivered" },
          { value: 1200, suffix: "+", label: "Happy families" },
          { value: 2, suffix: "M", label: "Sq. ft. of excellence" },
        ],
        values: [
          {
            title: "Precision",
            text: "We deliver every project with exacting standards, ensuring accuracy in design, planning and execution.",
          },
          {
            title: "Craftsmanship",
            text: "Every development reflects our commitment to quality construction and refined attention to build excellence.",
          },
          {
            title: "Integrity",
            text: "We operate with transparency and honesty, building lasting trust with every stakeholder.",
          },
          {
            title: "Reliability",
            text: "Consistent delivery and dependable performance make us a name clients can count on.",
          },
          {
            title: "Detail",
            text: "Thoughtful attention to every element ensures superior quality and a seamless experience.",
          },
          {
            title: "Endurance",
            text: "We create developments that stand the test of time, both in structure and value.",
          },
        ],
      };
    },
    24940: (e, t, a) => {
      a.d(t, { u: () => i });
      function i(e, t = {}) {
        "function" == typeof window.gtag && window.gtag("event", e, t);
      }
    },
    34426: (e, t, a) => {
      (a.r(t), a.d(t, { Button: () => u, TextLink: () => h }));
      var i = a(95155),
        n = a(98500),
        o = a.n(n),
        l = a(12115),
        r = a(31623),
        s = a(24940);
      let d = {
        primary: "bg-brass text-night hover:bg-brass-light",
        outline:
          "border border-cream/40 text-cream hover:bg-cream hover:text-night",
        blue: "bg-ink text-white hover:bg-azure",
        line: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
      };
      function u({
        children: e,
        href: t,
        onClick: a,
        variant: n = "primary",
        magnetic: h,
        event: c,
        type: m = "button",
        disabled: p,
        className: g = "",
      }) {
        let f = (0, l.useRef)(null),
          y = {
            className: `relative inline-flex items-center justify-center gap-3 px-8 py-4 text-[length:var(--fs-xs)] font-normal uppercase tracking-[0.2em] transition-colors duration-500 active:translate-y-px disabled:opacity-50 whitespace-nowrap ${d[n]} ${g}`,
            onPointerMove: (e) => {
              if (!h || "mouse" !== e.pointerType || !f.current) return;
              let { gsap: t } = (0, r.V)(),
                a = f.current.getBoundingClientRect();
              t.to(f.current, {
                x: (e.clientX - a.left - a.width / 2) * 0.25,
                y: (e.clientY - a.top - a.height / 2) * 0.35,
                duration: 0.5,
                ease: "power3.out",
                overwrite: !0,
              });
            },
            onPointerLeave: () => {
              h &&
                f.current &&
                (0, r.V)().gsap.to(f.current, {
                  x: 0,
                  y: 0,
                  duration: 0.7,
                  ease: "elastic.out(1,0.5)",
                  overwrite: !0,
                });
            },
            onClick: () => {
              (c && (0, s.u)("cta_click", { label: c }), a?.());
            },
          };
        return t
          ? /^(https?:|tel:|mailto:)/.test(t)
            ? (0, i.jsx)("a", {
                ref: f,
                href: t,
                ...(t.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {}),
                ...y,
                children: e,
              })
            : (0, i.jsx)(o(), { ref: f, href: t, ...y, children: e })
          : (0, i.jsx)("button", {
              ref: f,
              type: m,
              disabled: p,
              ...y,
              children: e,
            });
      }
      function h({ href: e, children: t, className: a = "" }) {
        return (0, i.jsxs)(o(), {
          href: e,
          className: `link-underline tap gap-2 text-[length:var(--fs-xs)] font-normal uppercase tracking-[0.2em] ${a}`,
          children: [
            t,
            (0, i.jsx)("span", { "aria-hidden": !0, children: "→" }),
          ],
        });
      }
    },
    52519: (e, t, a) => {
      a.d(t, { Mx: () => eg });
      var i = a(74843);
      let n = {
          landing: !1,
          specs: [],
          slides: [],
          scenes: [],
          amenities: [],
          unitTypes: [],
          plans: [],
          landmarks: [],
          mapQuery: null,
          brochureUrl: null,
          progressUpdates: [],
        },
        o = {
          slug: "cp-anando",
          name: "CP Anando",
          tagline: "Ease of Living",
          status: "ongoing",
          category: "residential",
          location: null,
          year: null,
          units: null,
          configuration: "2 & 3 BHK apartments",
          summary:
            "Thoughtfully planned 2 and 3 BHK residences designed around ease of everyday living.",
          hero: { src: i.default, alt: "CP Anando residential building" },
          gallery: [],
          rera: null,
          ...n,
        };
      var l = a(89634),
        r = a(95028),
        s = a(70584),
        d = a(57518),
        u = a(98151),
        h = a(54643),
        c = a(95253),
        m = a(90899),
        p = a(20500),
        g = a(36020),
        f = a(36320),
        y = a(40421),
        b = a(85171),
        v = a(72615),
        w = a(98296),
        k = a(14613),
        x = a(43761),
        P = a(72352),
        C = a(37397),
        G = a(29300),
        A = a(2333),
        B = a(40154),
        T = a(89071),
        R = a(58848),
        E = a(73779),
        S = a(14685),
        H = a(73530),
        U = a(51362),
        F = a(39374),
        O = a(55693),
        K = a(78197);
      let I = (e, t) => ({ src: e, alt: t, group: "Renders" }),
        D = (e, t) => ({ src: e, alt: t, group: "Photographs" }),
        j = (e, t) => ({ src: e, alt: t }),
        N = {
          ...n,
          slug: "cp-greens",
          name: "CP Greens",
          tagline: "The Great Upgrade",
          status: "ongoing",
          category: "residential",
          location:
            "Thakur Panchanan Rd, Ward 42, Don Bosco Colony, Siliguri 734008",
          year: null,
          units: 94,
          configuration: "3 & 4 BHK apartments and duplex, G+8",
          summary:
            "An environment perfectly designed for luxurious and green, peaceful living. Siliguri's first IGBC-certified green building.",
          hero: j(
            l.default,
            "CP Greens at dusk, with the three residential blocks lit against an orange sky",
          ),
          logo: j(C.default, "CP Greens, eco-friendly homes"),
          rera: "WBRERA/P/JAL/2023/000319",
          tint: "estate",
          landing: !0,
          developer: "CP Real Estate",
          headline: ["Own the key that turns", "moments to memories."],
          heroFacts: [
            "3 & 4 BHK apartments and duplex",
            "Ground plus 8 floors",
            "IGBC Gold certified",
          ],
          mapQuery:
            "CP Greens, Thakur Panchanan Road, Don Bosco Colony, Siliguri",
          brochureUrl: "/brochures/cp-greens-brochure.pdf",
          slides: [
            {
              tone: "night",
              title: "A home designed around green, peaceful living.",
              text: "CP Greens offers an environment perfectly designed for luxurious and green living. The location and the beauty of its spaces are here to fill your every day with convenience and exceptional experience.",
              image: j(
                d.default,
                "Aerial view of the three CP Greens blocks among trees",
              ),
              facts: [
                { label: "Blocks", value: "3" },
                { label: "Storeys", value: "G+8" },
                { label: "Families", value: "94" },
              ],
            },
            {
              tone: "paper",
              imageLeft: !0,
              contain: !0,
              title: "A historic green milestone for Siliguri.",
              text: "IGBC Gold under the Green Homes Rating System, awarded by the Indian Green Building Council. Every design decision and material was chosen with the planet and your family's health in mind.",
              image: j(u.default, "IGBC Gold certificate issued to CP Greens"),
              facts: [
                { label: "IGBC rating", value: "Gold" },
                { label: "Certified", value: "May 2026" },
                { label: "Reg. number", value: "GH200178" },
              ],
            },
            {
              tone: "estate",
              numeral: "3 & 4",
              unit: "BHK",
              title: "Premium and luxury apartments.",
              text: "A spacious 3 BHK premium apartment and an expansive 4 BHK luxury apartment, with duplex homes on the upper floors, all on a G+8 plan and IGBC certified.",
              image: j(r.default, "CP Greens by day, seen from the main road"),
              facts: [
                { label: "RERA carpet from", value: "1,112 sq ft" },
                { label: "Up to", value: "2,397 sq ft" },
                { label: "Floors", value: "G+8" },
              ],
            },
            {
              tone: "night",
              imageLeft: !0,
              title: "2.5 miles from the centre of Siliguri.",
              text: "Thakur Panchanan Road, Ward 42, Don Bosco Colony, with unmatched connectivity to the city's financial district.",
              image: j(
                G.default,
                "The completed CP Greens block photographed from the ground",
              ),
              facts: [
                { label: "Ward", value: "42" },
                { label: "Colony", value: "Don Bosco" },
                { label: "Pin code", value: "734008" },
              ],
            },
          ],
          specs: [
            { value: 94, label: "Families, across three blocks" },
            { value: 60, suffix: "%+", label: "Open green space" },
            { value: 4800, suffix: " sq ft", label: "Clubhouse" },
            { value: 8, prefix: "G+", label: "Storeys above the ground" },
          ],
          scenes: [
            {
              id: "day",
              label: "Day",
              night: 0,
              image: I(r.default, "CP Greens by day"),
              details: [
                {
                  value: "G+8",
                  text: "Ground plus eight floors across three blocks",
                },
                {
                  value: "IGBC Gold",
                  text: "Siliguri's first IGBC-certified green building",
                },
              ],
            },
            {
              id: "dusk",
              label: "Dusk",
              night: 0.55,
              image: I(l.default, "CP Greens at dusk"),
              details: [
                {
                  value: "3 & 4 BHK",
                  text: "Premium and luxury apartments, with duplex homes",
                },
                {
                  value: "Pool and lounge",
                  text: "Swimming pool, TV lounge, games room and community hall",
                },
              ],
            },
            {
              id: "night",
              label: "Night",
              night: 1,
              image: I(s.default, "CP Greens at night"),
              details: [
                {
                  value: "94 families",
                  text: "In three blocks, with over 60% open green space",
                },
                {
                  value: "WBRERA",
                  text: "Registered: WBRERA/P/JAL/2023/000319",
                },
              ],
            },
          ],
          features: {
            title: "Built to be lived in.",
            intro:
              "Safety, sustainability and everyday comfort were designed in from the first drawing.",
            groups: [
              {
                title: "Safety and security",
                text: "Protection is part of the plan, not an add-on.",
                points: [
                  "Seismic sensors in every elevator",
                  "Automated boom barriers and a round-the-clock security cabin",
                  "Secure balcony locking systems",
                  "Fire rescue platforms and fire-rated doors",
                  "Addressable fire detection, smoke detectors and automated sprinklers",
                  "Fire hydrants across all areas",
                ],
              },
              {
                title: "Green and sustainable",
                text: "The reason the project earned Siliguri's first IGBC certification.",
                points: [
                  "Over 60% open green space",
                  "Solar lighting in common areas, driveways and the clubhouse",
                  "Driveway lighting timers for low consumption",
                  "A sewage treatment plant that recycles water for the landscape",
                  "Rainwater harvesting",
                  "Scientific waste segregation with dedicated collection zones",
                ],
              },
              {
                title: "Design and comfort",
                text: "Homes open to light and air on three sides.",
                points: [
                  "Three-side open homes with natural light and airflow",
                  "10-foot ceiling height",
                  "Low-VOC paints for healthier living",
                  "Ground-level parking with 18-foot height, airy and well lit",
                  "UV-protective glass (ST-100) to cut heat and keep the light",
                ],
              },
              {
                title: "Modern utilities",
                text: "Ready for the way people live now.",
                points: [
                  "100% DG power backup for residences, lifts and essential utilities",
                  "Dedicated EV charging points",
                  "Pre-wired optical fibre backbone for phone, internet and cable",
                  "Waterproofed and heat-proofed terraces",
                ],
              },
            ],
          },
          amenitiesIntro: "Pick the lifestyle you want.",
          amenities: [
            {
              title: "Swimming pool",
              text: "A swimming pool with a sun deck beside the clubhouse.",
              image: j(g.default, "The CP Greens swimming pool"),
              icon: "pool",
            },
            {
              title: "Games room",
              text: "Peace of mind with games.",
              image: j(h.default, "The CP Greens games room"),
              icon: "games",
            },
            {
              title: "TV lounge",
              text: "Unwind in a comfortable setting designed for relaxation, entertainment and quality time with loved ones.",
              image: j(c.default, "The CP Greens TV lounge"),
              icon: "tv",
            },
            {
              title: "Indoor gym",
              text: "For the fitness fanatics, a gym where residents can work up a sweat with modern equipment.",
              image: j(m.default, "The CP Greens indoor gym"),
              icon: "gym",
            },
            {
              title: "Yoga and meditation",
              text: "A gentler way to tone body and mind.",
              image: j(p.default, "The CP Greens yoga and meditation room"),
              icon: "yoga",
            },
            {
              title: "Childcare",
              text: "From a children's play area to a kids' creche, we understand the needs of your little ones.",
              image: j(S.default, "The CP Greens kids' creche"),
              icon: "kids",
            },
            {
              title: "Outdoor play",
              text: "Indoor as well as outdoor spaces for the holistic development of the little ones.",
              image: j(f.default, "The CP Greens outdoor kids' play area"),
              icon: "kids",
            },
            {
              title: "Community hall",
              text: "Where residents come together to meet, celebrate and share interests.",
              image: j(y.default, "The CP Greens community hall"),
              icon: "hall",
            },
          ],
          unitTypes: [
            {
              name: "3 BHK",
              kind: "Premium apartment, 3 bath",
              details: [
                { label: "RERA carpet", value: "1,112 to 1,247 sq ft" },
                { label: "Saleable", value: "1,679 to 1,907 sq ft" },
              ],
            },
            {
              name: "4 BHK",
              kind: "Luxury apartment, 4 bath",
              details: [
                { label: "RERA carpet", value: "1,439 to 1,601 sq ft" },
                { label: "Saleable", value: "2,193 to 2,414 sq ft" },
              ],
            },
            {
              name: "Duplex",
              kind: "Upper-floor duplex",
              details: [
                { label: "RERA carpet", value: "1,973 to 2,397 sq ft" },
                { label: "Saleable", value: "2,962 to 3,586 sq ft" },
              ],
            },
          ],
          plans: [
            {
              id: "master",
              label: "Master plan",
              title: "Master plan",
              tagline:
                "Three blocks around a central lawn, with the pool and clubhouse at Block A and entry from the main road.",
              image: j(
                b.default,
                "CP Greens master plan with Blocks A, B and C, the pool, central lawn and parking",
              ),
              specs: [
                { label: "Blocks", value: "A (1), B (2), C (3)" },
                { label: "Floors", value: "G+8" },
                { label: "Families", value: "94" },
                { label: "Open green space", value: "60%+" },
              ],
            },
            {
              id: "block-a",
              group: "Floor plans",
              label: "Block A",
              title: "Block A (1), 2nd to 7th floor",
              tagline:
                "Five apartments and a duplex per floor, around a 6' wide lift lobby.",
              image: j(
                v.default,
                "Block A typical floor plan, 2nd to 7th floor, with flats A to E",
              ),
              specs: [
                { label: "Floors", value: "2nd to 7th" },
                { label: "Homes", value: "3 and 4 BHK, duplex" },
              ],
              units: [
                {
                  name: "Flat A",
                  type: "3 BHK",
                  floors: "2nd to 7th",
                  carpet: "1,117",
                  saleable: "1,679",
                },
                {
                  name: "Flat B",
                  type: "4 BHK",
                  floors: "2nd to 5th",
                  carpet: "1,601",
                  saleable: "2,414",
                },
                {
                  name: "Flat C",
                  type: "3 BHK",
                  floors: "2nd to 7th",
                  carpet: "1,199",
                  saleable: "1,789",
                },
                {
                  name: "Flat D",
                  type: "3 BHK",
                  floors: "2nd to 7th",
                  carpet: "1,152",
                  saleable: "1,721",
                },
                {
                  name: "Flat E",
                  type: "3 BHK",
                  floors: "2nd to 7th",
                  carpet: "1,208",
                  saleable: "1,846",
                },
                {
                  name: "Duplex B",
                  type: "Duplex",
                  floors: "6th to 7th",
                  carpet: "2,397",
                  saleable: "3,586",
                },
              ],
            },
            {
              id: "block-b",
              group: "Floor plans",
              label: "Block B",
              title: "Block B (2), 1st to 7th floor",
              tagline:
                "Four corner homes per floor, with duplexes on the 7th and 8th floors.",
              image: j(
                w.default,
                "Block B typical floor plan, 1st to 7th floor, with flats A to D",
              ),
              specs: [
                { label: "Floors", value: "1st to 7th" },
                { label: "Homes", value: "3 and 4 BHK, duplex" },
              ],
              units: [
                {
                  name: "Flat A",
                  type: "3 BHK",
                  floors: "1st to 7th",
                  carpet: "1,215",
                  saleable: "1,814",
                },
                {
                  name: "Flat B",
                  type: "4 BHK",
                  floors: "1st to 6th",
                  carpet: "1,522",
                  saleable: "2,235",
                },
                {
                  name: "Flat C",
                  type: "4 BHK",
                  floors: "1st to 6th",
                  carpet: "1,550",
                  saleable: "2,280",
                },
                {
                  name: "Flat D",
                  type: "3 BHK",
                  floors: "1st to 7th",
                  carpet: "1,138",
                  saleable: "1,722",
                },
                {
                  name: "Duplex B",
                  type: "Duplex",
                  floors: "7th to 8th",
                  carpet: "1,980",
                  saleable: "2,962",
                },
                {
                  name: "Duplex C",
                  type: "Duplex",
                  floors: "7th to 8th",
                  carpet: "2,315",
                  saleable: "3,420",
                },
              ],
            },
            {
              id: "block-c",
              group: "Floor plans",
              label: "Block C",
              title: "Block C (3), 1st to 7th floor",
              tagline:
                "Six homes per floor on either side of a 6' wide passage.",
              image: j(
                k.default,
                "Block C typical floor plan, 1st to 7th floor, with flats A to F",
              ),
              specs: [
                { label: "Floors", value: "1st to 7th" },
                { label: "Homes", value: "3 and 4 BHK, duplex" },
              ],
              units: [
                {
                  name: "Flat A",
                  type: "3 BHK",
                  floors: "1st to 7th",
                  carpet: "1,187",
                  saleable: "1,764",
                },
                {
                  name: "Flat B",
                  type: "3 BHK",
                  floors: "1st to 7th",
                  carpet: "1,129",
                  saleable: "1,694",
                },
                {
                  name: "Flat C",
                  type: "3 BHK",
                  floors: "1st to 7th",
                  carpet: "1,130",
                  saleable: "1,703",
                },
                {
                  name: "Flat D",
                  type: "4 BHK",
                  floors: "1st to 5th",
                  carpet: "1,439",
                  saleable: "2,193",
                },
                {
                  name: "Flat E",
                  type: "3 BHK",
                  floors: "1st to 7th",
                  carpet: "1,112",
                  saleable: "1,692",
                },
                {
                  name: "Flat F",
                  type: "3 BHK",
                  floors: "1st to 7th",
                  carpet: "1,247",
                  saleable: "1,907",
                },
                {
                  name: "Duplex D",
                  type: "Duplex",
                  floors: "6th to 7th",
                  carpet: "1,973",
                  saleable: "3,007",
                },
              ],
            },
            {
              id: "clubhouse",
              group: "Amenities and ground",
              label: "Clubhouse",
              title: "Exclusive clubhouse",
              tagline:
                "Games room, gymnasium, yoga room, changing rooms, pool, kids' play room, TV lounge and admin office.",
              image: j(
                x.default,
                "CP Greens clubhouse cutaway with games room, gym, yoga room, swimming pool, kids' play room and TV lounge",
              ),
              specs: [
                { label: "Clubhouse", value: "4,800 sq ft" },
                { label: "Floor to ceiling", value: "11 ft" },
                { label: "Pool", value: "With changing room" },
                { label: "Entry", value: "RFID" },
              ],
            },
            {
              id: "ground",
              group: "Amenities and ground",
              label: "Ground floor",
              title: "Ground floor, parking and shops",
              tagline:
                "Covered parking, the community hall and eight shops facing the 12.6 m wide road.",
              image: j(
                P.default,
                "CP Greens ground floor plan with parking, community hall, landscape garden and eight shops on the main road",
              ),
              specs: [
                { label: "Road", value: "12.6 m wide" },
                { label: "Shops", value: "8" },
              ],
              units: [
                { name: "Shop 1", carpet: "473", saleable: "741" },
                { name: "Shop 2", carpet: "848", saleable: "1,215" },
                { name: "Shop 3", carpet: "632", saleable: "952" },
                { name: "Shop 4", carpet: "555", saleable: "813" },
                { name: "Shop 5", carpet: "880", saleable: "1,236" },
                { name: "Shop 6", carpet: "783", saleable: "1,104" },
                { name: "Shop 7", carpet: "471", saleable: "689" },
                { name: "Shop 8", carpet: "817", saleable: "1,237" },
              ],
            },
          ],
          landmarks: [],
          gallery: [
            I(l.default, "CP Greens at dusk"),
            I(r.default, "CP Greens by day"),
            I(s.default, "CP Greens at night"),
            I(d.default, "Aerial view of CP Greens"),
            I(g.default, "The CP Greens swimming pool"),
            I(f.default, "The CP Greens outdoor play area"),
            I(c.default, "The CP Greens TV lounge"),
            I(h.default, "The CP Greens games room"),
            I(m.default, "The CP Greens indoor gym"),
            I(p.default, "The CP Greens yoga room"),
            I(y.default, "The CP Greens community hall"),
            D(A.default, "The CP Greens swimming pool, photographed"),
            D(B.default, "Poolside at CP Greens"),
            D(T.default, "The pool and sun deck at CP Greens"),
            D(R.default, "The clubhouse entrance to the pool"),
            D(E.default, "The CP Greens lounge"),
            D(S.default, "The CP Greens kids' creche"),
            D(H.default, "The kids' creche, with its forest mural"),
            D(F.default, "The CP Greens playroom with billiards table"),
            D(O.default, "The foosball table in the games room"),
            D(K.default, "The CP Greens games lounge"),
            D(U.default, "The CP Greens gym, photographed"),
          ],
          films: [
            {
              id: "director",
              title: "A word from Vikash Agarwal",
              caption: "Director, CP Group, on CP Greens",
              src: "/videos/cp-greens/director-intro.mp4",
              poster: "/videos/cp-greens/director-intro.jpg",
              width: 720,
              height: 960,
              duration: "1:00",
            },
            {
              id: "amenities",
              title: "Amenities tour",
              caption: "Gym, yoga room and games room",
              src: "/videos/cp-greens/amenities-tour.mp4",
              poster: "/videos/cp-greens/amenities-tour.jpg",
              width: 720,
              height: 1280,
              duration: "0:34",
            },
            {
              id: "everyday",
              title: "Everyday life at CP Greens",
              caption: "Mornings, families and open space",
              src: "/videos/cp-greens/everyday-life.mp4",
              poster: "/videos/cp-greens/everyday-life.jpg",
              width: 720,
              height: 1280,
              duration: "0:34",
            },
            {
              id: "walkthrough",
              title: "On-site walkthrough",
              caption: "Grounds, lobby and homes",
              src: "/videos/cp-greens/walkthrough.mp4",
              poster: "/videos/cp-greens/walkthrough.jpg",
              width: 720,
              height: 1280,
              duration: "1:03",
            },
          ],
          testimonialFilms: [
            {
              id: "resident-1",
              title: "Hear from our homeowners",
              caption: "CP Greens resident",
              src: "/videos/residents/resident-1.mp4",
              poster: "/videos/residents/resident-1.jpg",
              width: 720,
              height: 900,
              duration: "1:03",
            },
            {
              id: "resident-2",
              title: "Why we chose CP Greens",
              caption: "CP Greens resident",
              src: "/videos/residents/resident-2.mp4",
              poster: "/videos/residents/resident-2.jpg",
              width: 720,
              height: 900,
              duration: "0:43",
            },
            {
              id: "resident-3",
              title: "Our experience",
              caption: "CP Greens resident",
              src: "/videos/residents/resident-3.mp4",
              poster: "/videos/residents/resident-3.jpg",
              width: 716,
              height: 1280,
              duration: "0:46",
            },
            {
              id: "resident-4",
              title: "A family's view",
              caption: "CP Greens resident",
              src: "/videos/residents/resident-4.mp4",
              poster: "/videos/residents/resident-4.jpg",
              width: 720,
              height: 1280,
              duration: "1:05",
            },
          ],
        };
      var q = a(90852),
        z = a(69668),
        L = a(24170),
        M = a(94228),
        V = a(65044),
        W = a(98848),
        Q = a(43323),
        X = a(76302),
        $ = a(32812),
        _ = a(11414),
        J = a(49010),
        Y = a(10929),
        Z = a(51323),
        ee = a(37056),
        et = a(84432),
        ea = a(79692),
        ei = a(75522);
      let en = (e, t) => ({ src: e, alt: t }),
        eo = {
          ...n,
          slug: "europa",
          name: "EUROPA",
          tagline: "The Ultimate Lifestyle",
          status: "ongoing",
          category: "residential",
          location: null,
          year: null,
          units: null,
          configuration: "G+2 townhouses, 4 BHK residences",
          summary:
            "Townhouses that bring the discipline of European architecture to the warmth of vibrant Indian living, with a private EQUINOX clubhouse at the heart.",
          hero: en(
            q.default,
            "The illuminated EUROPA entrance gate and the EQUINOX clubhouse court at night",
          ),
          rera: "WBRERA/P/DAR/2023/000259",
          tint: "ink",
          landing: !0,
          developer: "CP Real Estate and Green Hill Group",
          headline: ["Siliguri's most", "coveted homes."],
          heroFacts: [
            "G+2 townhouses",
            "4 BHK luxury residences",
            "7 star living",
          ],
          mapQuery: null,
          brochureUrl: null,
          specs: [
            { value: 2, prefix: "G+", label: "Storeys of townhouse living" },
            { value: 4, suffix: " BHK", label: "Luxury townhouse residences" },
            { value: 7, suffix: " star", label: "Living standard" },
            {
              value: 52e3,
              prefix: "~",
              suffix: " sft",
              label: "Clubhouse and indoor amenities",
            },
          ],
          slides: [],
          scrollStills: {
            stills: [
              en(z.default, "EUROPA from the air, among trees and cloud"),
              en(
                L.default,
                "The fountain court and EQUINOX clubhouse from above",
              ),
              en(q.default, "The EUROPA entrance at night"),
              en(W.default, "The townhouse row in golden-hour light"),
              en(J.default, "The pool at sunset"),
            ],
            captions: [
              { from: 0.02, to: 0.17, lines: ["A township", "in the green."] },
              {
                from: 0.22,
                to: 0.37,
                lines: ["At its heart,", "the EQUINOX court."],
              },
              { from: 0.42, to: 0.57, lines: ["Arrive through", "the gate."] },
              {
                from: 0.62,
                to: 0.77,
                lines: ["European lines,", "Indian warmth."],
              },
              { from: 0.82, to: 1, lines: ["Evenings,", "by the water."] },
            ],
            note: "Artist's impression",
            alt: "A scroll-driven flight through EUROPA: the township from the air, the fountain court, the illuminated entrance gate, the townhouse row at golden hour and the pool at sunset.",
          },
          scenes: [
            {
              id: "golden",
              label: "Golden hour",
              night: 0.12,
              image: en(
                W.default,
                "The EUROPA townhouse row in golden-hour light",
              ),
              details: [
                {
                  value: "G+2",
                  text: "Townhouses blending European architecture with Indian elegance",
                },
                {
                  value: "4 BHK",
                  text: "Luxury townhouse residences across three levels",
                },
              ],
            },
            {
              id: "dusk",
              label: "Dusk",
              night: 0.55,
              image: en(Q.default, "The EQUINOX clubhouse court at dusk"),
              details: [
                {
                  value: "EQUINOX",
                  text: "A private clubhouse at the heart of the community",
                },
                {
                  value: "~52,000 sft",
                  text: "Of clubhouse and indoor amenities",
                },
              ],
            },
            {
              id: "night",
              label: "Night",
              night: 1,
              image: en(
                q.default,
                "The EUROPA entrance and fountain court at night",
              ),
              details: [
                {
                  value: "7 star",
                  text: "Living standard across the Sigma, Beta and Theta blocks",
                },
                {
                  value: "WBRERA",
                  text: "Registered: WBRERA/P/DAR/2023/000259",
                },
              ],
            },
          ],
          amenitiesIntro: "The perfect upgrade.",
          amenities: [
            {
              title: "Banquet hall",
              text: "Celebrate in style. Grand celebrations, timeless memories.",
              image: en($.default, "The EQUINOX banquet hall"),
              icon: "banquet",
            },
            {
              title: "Infinity pool",
              text: "Sunset swims in an infinity pool.",
              image: en(J.default, "The EUROPA swimming pool at sunset"),
              icon: "pool",
            },
            {
              title: "Fitness studio",
              text: "Never give up. Fitness, just the way you like it.",
              image: en(Z.default, "The EUROPA fitness studio"),
              icon: "gym",
            },
            {
              title: "Games room",
              text: "Billiards, board games and a place to unwind with friends.",
              image: en(Y.default, "The EUROPA games room"),
              icon: "games",
            },
            {
              title: "Kids' play area",
              text: "A 10,000 sft Panchatantra-themed play area with soft, padded flooring, sand and play water, crafted to inspire adventure and creativity.",
              image: en(ee.default, "The EUROPA kids' play area"),
              icon: "kids",
            },
          ],
          unitTypes: [
            {
              name: "4 BHK",
              kind: "Townhouse",
              details: [
                { label: "Area per floor", value: "2,423 sft" },
                { label: "Floors", value: "Ground, first, second" },
              ],
            },
          ],
          plans: [
            {
              id: "ground",
              label: "Ground",
              title: "Ground floor",
              tagline:
                "Living, dining, kitchen, home theatre and covered parking.",
              image: en(et.default, "EUROPA ground floor plan"),
              specs: [
                { label: "Area", value: "2,423 sft" },
                { label: "Floors", value: "Ground, first, second" },
              ],
              rooms: [
                {
                  name: "Drawing",
                  size: "16'6\" x 13'11\"",
                  box: [0, 0, 27, 44],
                },
                {
                  name: "Guest bedroom",
                  size: "12'0\" x 13'1\"",
                  box: [27.5, 0, 25, 44],
                },
                {
                  name: "Kitchen",
                  size: "11'5\" x 13'9\"",
                  box: [63, 0, 25, 29],
                },
                {
                  name: "Utility",
                  size: "9'10\" x 5'0\"",
                  box: [88, 0, 12, 29],
                },
                {
                  name: "Family living and dining",
                  size: "13'3\" x 25'0\"",
                  box: [28, 30, 45, 40],
                },
                {
                  name: "Master bedroom",
                  size: "14'0\" x 13'0\"",
                  box: [73.5, 55, 26.5, 38],
                },
                {
                  name: "Kids' bedroom 1",
                  size: "12'0\" x 13'11\"",
                  box: [0, 60, 27.5, 33],
                },
                {
                  name: "Kids' bedroom 2",
                  size: "8'0\" x 10'11\"",
                  box: [34, 70, 15, 23],
                },
                {
                  name: "Outdoor living balcony",
                  size: "10'8\" x 13'2\"",
                  box: [49, 70, 24, 23],
                },
              ],
            },
            {
              id: "first",
              label: "First",
              title: "First floor",
              tagline: "Two bedrooms, dressing area and a private balcony.",
              image: en(
                ea.default,
                "Three-dimensional cutaway of the EUROPA first floor",
              ),
              specs: [{ label: "Area", value: "2,423 sft" }],
            },
            {
              id: "second",
              label: "Second",
              title: "Second floor",
              tagline: "Bedroom suites, lounge and an open terrace.",
              image: en(
                ei.default,
                "Three-dimensional cutaway of the EUROPA second floor",
              ),
              specs: [{ label: "Area", value: "2,423 sft" }],
            },
          ],
          landmarks: [
            {
              category: "Hospitals",
              items: [
                { name: "Greenage Hospital", distance: "3.6 km, 10 min" },
                { name: "Neotia Healthcare", distance: "5.4 km, 14 min" },
                {
                  name: "Asian Institute of Nephrology & Urology",
                  distance: "7 km, 20 min",
                },
              ],
            },
            {
              category: "Schools",
              items: [
                {
                  name: "Pragati College of Education",
                  distance: "450 m, walking",
                },
                { name: "G.D. Goenka Public School", distance: "1 km, 3 min" },
                { name: "Delhi Public School", distance: "1.1 km, 3 min" },
                { name: "Mahbert High School", distance: "2.6 km, 7 min" },
                { name: "Techno India", distance: "3.7 km, 11 min" },
              ],
            },
            {
              category: "Shopping and leisure",
              items: [
                { name: "Cinemax", distance: "2.5 km, 7 min" },
                {
                  name: "Blue Mountain Country Club",
                  distance: "2.4 km, 7 min",
                },
                { name: "City Center Mall", distance: "4.9 km, 15 min" },
                { name: "Inox", distance: "4.9 km, 15 min" },
                { name: "Salbari Market", distance: "5.4 km, 7 min" },
                { name: "Mahbert Market", distance: "5.6 km, 10 min" },
              ],
            },
            {
              category: "Banks and hotels",
              items: [
                { name: "Central Bank of India", distance: "1.1 km, 5 min" },
                { name: "Barsana Hotel & Resort", distance: "4.4 km, 12 min" },
                { name: "Bank of Baroda", distance: "4.7 km, 19 min" },
                { name: "Uttarayon Township", distance: "4.9 km, 13 min" },
                {
                  name: "State Bank of India (Salbari)",
                  distance: "5.4 km, 7 min",
                },
                {
                  name: "MayFair Tea Resort Siliguri",
                  distance: "5.8 km, 13 min",
                },
                { name: "The Four Vedas", distance: "7.9 km, 17 min" },
              ],
            },
          ],
          gallery: [
            en(
              z.default,
              "Aerial view of the EUROPA township among trees and cloud",
            ),
            en(q.default, "EUROPA entrance gate and court at night"),
            en(M.default, "The EUROPA townhouse row at dusk"),
            en(W.default, "EUROPA townhouses at golden hour"),
            en(V.default, "Front view of the EUROPA townhouses"),
            en(Q.default, "EQUINOX clubhouse court at dusk"),
            en(
              L.default,
              "The fountain court and EQUINOX clubhouse seen from above",
            ),
            en(X.default, "The fountain court by day"),
            en(J.default, "EUROPA pool at sunset"),
            en($.default, "EQUINOX banquet hall"),
            en(_.default, "EUROPA master bedroom"),
            en(Y.default, "EUROPA games room"),
            en(Z.default, "EUROPA fitness studio"),
            en(ee.default, "EUROPA kids' play area"),
          ],
          films: [
            {
              id: "lifestyle",
              title: "The EUROPA lifestyle",
              caption: "A guided look at the clubhouse and pool",
              src: "/videos/europa/lifestyle-tour.mp4",
              poster: "/videos/europa/lifestyle-tour.jpg",
              width: 720,
              height: 1280,
              duration: "0:31",
            },
            {
              id: "where-you-stay",
              title: "About where you stay",
              caption: "Life among the townhouses",
              src: "/videos/europa/where-you-stay.mp4",
              poster: "/videos/europa/where-you-stay.jpg",
              width: 720,
              height: 1280,
              duration: "0:42",
            },
            {
              id: "townhouse-tour",
              title: "Townhouse tour",
              caption: "Streets, courts and interiors",
              src: "/videos/europa/townhouse-tour.mp4",
              poster: "/videos/europa/townhouse-tour.jpg",
              width: 720,
              height: 1280,
              duration: "0:38",
            },
            {
              id: "ground-to-home",
              title: "From ground to home",
              caption: "The site, then the finished township",
              src: "/videos/europa/construction-to-home.mp4",
              poster: "/videos/europa/construction-to-home.jpg",
              width: 1280,
              height: 720,
              duration: "0:56",
            },
            {
              id: "serenity",
              title: "Serenity begins here",
              caption: "The pool and terraces",
              src: "/videos/europa/serenity.mp4",
              poster: "/videos/europa/serenity.jpg",
              width: 720,
              height: 1280,
              duration: "0:22",
            },
          ],
        };
      var el = a(47631),
        er = a(48097),
        es = a(97283),
        ed = a(79281),
        eu = a(26214);
      let eh = [
        [2e3, "Shree Shyam Complex", "Ashrampara", "residential", 8],
        [2003, "Shree Krishna Apartment", "Ashrampara", "residential", 6],
        [2004, "Upasana Apartment", "Punjabi Para", "residential", 12],
        [2006, "Krishna Apartment", "Ashrampara", "residential", 8],
        [2008, "Shree Kanta Apartment", "Ashrampara", "residential", 12],
        [
          2010,
          "Hill View Residency",
          "Thakur Panchanan Lane",
          "residential",
          127,
        ],
        [2012, "Suryajyot Residence", "Jyotinagar", "residential", 48],
        [2013, "Milestone", "Checkpost", "commercial", 101, ed.default],
        [2013, "Krishna Enclave", "Jyotinagar", "residential", 8],
        [2013, "Survadeen Residence", "Jyotinagar", "residential", 15],
        [2014, "Sky View", "Sevoke Road", "mixed-use", 53, eu.default],
        [2016, "Vasant Kunj", "Jyotinagar", "residential", 30],
        [2018, "Indigo Residency", "Thakur Panchanan Lane", "residential", 95],
        [2018, "Ashiyana Apartment", "Ashrampara", "residential", 8],
        [
          2018,
          "Nirvana Homes",
          "Near Nirmala Convent School",
          "residential",
          24,
          es.default,
        ],
        [2019, "Galaxy Enclave", null, "residential", 36],
        [2020, "The Universe", null, "residential", 256, er.default],
        [2021, "Vedic Homes", null, "residential", 23],
        [2021, "AINU Hospital", "Shivmandir", "healthcare", null],
        [
          2023,
          "CP Avenue",
          "Near Nirmala Convent School",
          "mixed-use",
          42,
          el.default,
        ],
      ].map(([e, t, a, i, o, l]) => ({
        slug: t
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, ""),
        name: t,
        tagline: null,
        status: "completed",
        category: i,
        location: a,
        year: e,
        units: o,
        configuration: null,
        summary: `${t}${a ? `, ${a}` : ""}, delivered in ${e}.`,
        hero: {
          src: l ?? "/images/placeholder-project.svg",
          alt: `${t}`,
          placeholder: !l,
        },
        gallery: [],
        rera: null,
        ...n,
      }));
      var ec = a(24554),
        em = a(39069),
        ep = a(62676);
      let eg = [
        N,
        eo,
        o,
        {
          ...n,
          slug: "cp-plaza",
          name: "CP Plaza",
          tagline: null,
          status: "completed",
          category: "commercial",
          location: "Shivmandir, Siliguri",
          year: null,
          units: null,
          configuration: "Retail and commercial",
          summary:
            "A glass-fronted retail and commercial building at Shivmandir, home to Style Bazaar, V-Mart and Apollo Diagnostics.",
          hero: {
            src: em.default,
            alt: "CP Plaza at dusk: a glass-fronted commercial building with a lit canopy",
          },
          gallery: [
            {
              src: ec.default,
              alt: "CP Plaza photographed at Shivmandir, with the Style Bazaar store",
            },
            { src: em.default, alt: "CP Plaza at dusk, front view" },
            { src: ep.default, alt: "CP Plaza at dusk, corner view" },
          ],
          rera: null,
          landing: !1,
        },
        ...eh,
      ].filter((e) => "ongoing" === e.status);
      eh.filter((e) => !e.hero.placeholder).reverse();
    },
  },
]);
