export interface Project {
  slug: string;
  name: string;
  tagline: string | null;
  status: 'ongoing' | 'completed';
  category: 'residential' | 'commercial' | 'mixed-use';
  location: string | null;
  year: number | null;
  units: number | null;
  configuration: string | null;
  summary: string;
  heroImage: string;
  heroAlt: string;
  rera: string | null;
  tint: string;
  badge?: string;
  facts: string[];
  specs: { label: string; value: string }[];
  scenes?: {
    id: string;
    label: string;
    image: string;
    alt: string;
    details: { value: string; text: string }[];
  }[];
  amenities?: {
    title: string;
    text: string;
    icon: string;
  }[];
}

export const CP_COMPANY = {
  name: "CP Real Estate",
  group: "CP Group",
  tagline: "Building Today. Defining Tomorrow.",
  founded: 1998,
  member: "CREDAI North Bengal",
  description: "CP Real Estate is a Siliguri developer of residences and commercial spaces, building trust through delivery since 1998.",
  mission: "Deliver without compromise.",
  philosophy: "Precision in every detail.",
  vision: "Redefine how quality is experienced.",
  contact: {
    phone: "+91 97333 88879",
    phoneHref: "tel:+919733388879",
    email: "inquiry@cprealestate.in",
    address: "2nd Floor, Block II, Office Block, The Universe, Behind Himalayan Kanya Abasan, Eastern By-pass, Siliguri, West Bengal 734008",
    whatsapp: "919733388879",
    whatsappHref: "https://wa.me/919733388879",
  },
  social: {
    facebook: "https://www.facebook.com/cprealestate.in/",
    instagram: "https://www.instagram.com/cprealestate.in/",
    youtube: "https://www.youtube.com/@CPRealEstateSlg",
    linkedin: "https://in.linkedin.com/company/cp-real-estate-siliguri",
  },
  stats: [
    { value: "27+", label: "Years of experience" },
    { value: "20+", label: "Landmark projects delivered" },
    { value: "1,200+", label: "Happy families" },
    { value: "2M+", label: "Sq. ft. of excellence" },
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

export const PROJECTS: Project[] = [
  {
    slug: "cp-greens",
    name: "CP Greens",
    tagline: "The Great Upgrade",
    status: "ongoing",
    category: "residential",
    location: "Thakur Panchanan Rd, Ward 42, Don Bosco Colony, Siliguri 734008",
    year: null,
    units: 94,
    configuration: "3 & 4 BHK apartments and duplex, G+8",
    summary: "An environment perfectly designed for luxurious and green, peaceful living. Siliguri's first IGBC-certified green building.",
    heroImage: "/images/projects/cp-greens/hero-dusk.jpg",
    heroAlt: "CP Greens at dusk with illuminated blocks",
    rera: "WBRERA/P/JAL/2023/000319",
    tint: "estate",
    badge: "Siliguri's First IGBC Gold Certified",
    facts: [
      "3 & 4 BHK apartments and duplex",
      "Ground plus 8 floors across 3 blocks",
      "Over 60% open green space",
      "4,800 sq ft exclusive clubhouse",
    ],
    specs: [
      { label: "Families", value: "94" },
      { label: "Open Space", value: "60%+" },
      { label: "Storeys", value: "G+8" },
      { label: "Clubhouse", value: "4,800 sq ft" },
    ],
    scenes: [
      {
        id: "day",
        label: "Day View",
        image: "/images/projects/cp-greens/day-view.jpg",
        alt: "CP Greens by day",
        details: [
          { value: "G+8", text: "Ground plus eight floors across three blocks" },
          { value: "IGBC Gold", text: "Siliguri's first IGBC-certified green building" },
        ],
      },
      {
        id: "dusk",
        label: "Dusk View",
        image: "/images/projects/cp-greens/hero-dusk.jpg",
        alt: "CP Greens at dusk",
        details: [
          { value: "3 & 4 BHK", text: "Premium and luxury apartments with duplex homes" },
          { value: "Pool & Lounge", text: "Swimming pool, TV lounge, games room & community hall" },
        ],
      },
      {
        id: "night",
        label: "Night View",
        image: "/images/projects/cp-greens/night-view.jpg",
        alt: "CP Greens at night",
        details: [
          { value: "94 Families", text: "Across 3 residential blocks" },
          { value: "WBRERA", text: "Registered: WBRERA/P/JAL/2023/000319" },
        ],
      },
    ],
    amenities: [
      { title: "Swimming Pool", text: "A swimming pool with a sun deck beside the clubhouse.", icon: "pool" },
      { title: "Games Room", text: "Table tennis, billiards and lounge spaces for relaxation.", icon: "gamepad" },
      { title: "TV Lounge", text: "Unwind in a comfortable setting designed for entertainment.", icon: "tv" },
      { title: "Indoor Gym", text: "State of the art fitness equipment for high intensity workouts.", icon: "dumbbell" },
      { title: "Yoga & Meditation", text: "A peaceful sanctuary to tone your body and calm the mind.", icon: "sun" },
      { title: "Kids' Creche & Play", text: "Dedicated indoor and outdoor spaces for holistic development.", icon: "sparkles" },
    ],
  },
  {
    slug: "europa",
    name: "EUROPA",
    tagline: "The Ultimate Lifestyle",
    status: "ongoing",
    category: "residential",
    location: "Near Uttarayon Township, Siliguri",
    year: null,
    units: null,
    configuration: "G+2 townhouses, 4 BHK residences",
    summary: "Townhouses that bring the discipline of European architecture to the warmth of vibrant Indian living, with a private EQUINOX clubhouse at the heart.",
    heroImage: "/images/projects/europa/gate-hero.jpg",
    heroAlt: "EUROPA illuminated grand entrance gate and court",
    rera: "WBRERA/P/DAR/2023/000259",
    tint: "ink",
    badge: "7-Star Luxury Townhouses",
    facts: [
      "G+2 private luxury townhouses",
      "4 BHK spacious multi-level layouts",
      "~52,000 sq ft EQUINOX clubhouse",
      "European architectural lines with private courtyards",
    ],
    specs: [
      { label: "Levels", value: "G+2" },
      { label: "Configuration", value: "4 BHK" },
      { label: "Clubhouse", value: "~52,000 sft" },
      { label: "Standard", value: "7-Star" },
    ],
    scenes: [
      {
        id: "golden",
        label: "Golden Hour",
        image: "/images/projects/europa/townhouse-row.jpg",
        alt: "EUROPA townhouse row in warm golden-hour light",
        details: [
          { value: "G+2", text: "Townhouses blending European architecture with Indian elegance" },
          { value: "4 BHK", text: "Luxury townhouse residences across three spacious levels" },
        ],
      },
      {
        id: "dusk",
        label: "Dusk Court",
        image: "/images/projects/europa/fountain-court.jpg",
        alt: "The EQUINOX clubhouse court at dusk",
        details: [
          { value: "EQUINOX", text: "A private grand clubhouse at the heart of the community" },
          { value: "~52,000 sft", text: "Of clubhouse amenities and wellness spaces" },
        ],
      },
      {
        id: "night",
        label: "Night Entrance",
        image: "/images/projects/europa/gate-hero.jpg",
        alt: "EUROPA grand entrance at night",
        details: [
          { value: "7-Star Living", text: "Across Sigma, Beta, and Theta blocks" },
          { value: "WBRERA", text: "Registered: WBRERA/P/DAR/2023/000259" },
        ],
      },
    ],
    amenities: [
      { title: "Grand Banquet Hall", text: "Grand celebrations and timeless memories in style.", icon: "glass" },
      { title: "Infinity Pool", text: "Sunset swims in a lavish infinity-edge swimming pool.", icon: "pool" },
      { title: "Fitness Studio", text: "Premium gym equipment and personalized wellness areas.", icon: "dumbbell" },
      { title: "Games & Billiards", text: "Billiards, board games, and an elegant place to unwind.", icon: "gamepad" },
      { title: "Panchatantra Play Area", text: "10,000 sft themed play area with sand and soft flooring.", icon: "sparkles" },
    ],
  },
  {
    slug: "cp-plaza",
    name: "CP Plaza",
    tagline: "Commercial Landmark",
    status: "completed",
    category: "commercial",
    location: "Shivmandir, Siliguri",
    year: 2021,
    units: null,
    configuration: "Retail & Grade-A Offices",
    summary: "A premier glass-fronted commercial and retail complex, home to leading national brands including Style Bazaar, V-Mart, and Apollo Diagnostics.",
    heroImage: "/images/projects/cp-plaza/cp-plaza.jpg",
    heroAlt: "CP Plaza commercial glass facade building",
    rera: null,
    tint: "brass",
    badge: "Delivered & Operating",
    facts: [
      "Prime frontage on major transit highway",
      "Anchor tenants: V-Mart, Style Bazaar, Apollo Diagnostics",
      "100% power backup and multi-tier parking",
      "High footfall commercial landmark",
    ],
    specs: [
      { label: "Status", value: "Delivered" },
      { label: "Category", value: "Retail & Offices" },
      { label: "Location", value: "Shivmandir" },
      { label: "Tenants", value: "V-Mart, Apollo" },
    ],
  },
];

export const JOURNEY_STEPS = [
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

export const HISTORIC_PROJECTS = [
  { year: 2000, name: "Shree Shyam Complex", location: "Ashrampara", type: "Residential", units: 8 },
  { year: 2003, name: "Shree Krishna Apartment", location: "Ashrampara", type: "Residential", units: 6 },
  { year: 2004, name: "Upasana Apartment", location: "Punjabi Para", type: "Residential", units: 12 },
  { year: 2006, name: "Krishna Apartment", location: "Ashrampara", type: "Residential", units: 8 },
  { year: 2008, name: "Shree Kanta Apartment", location: "Ashrampara", type: "Residential", units: 12 },
  { year: 2010, name: "Hill View Residency", location: "Thakur Panchanan Lane", type: "Residential", units: 127 },
  { year: 2012, name: "Suryajyot Residence", location: "Jyotinagar", type: "Residential", units: 48 },
  { year: 2013, name: "Milestone", location: "Checkpost", type: "Commercial", units: 101 },
  { year: 2013, name: "Krishna Enclave", location: "Jyotinagar", type: "Residential", units: 8 },
  { year: 2014, name: "Sky View", location: "Sevoke Road", type: "Mixed-use", units: 53 },
  { year: 2016, name: "Vasant Kunj", location: "Jyotinagar", type: "Residential", units: 30 },
  { year: 2018, name: "Indigo Residency", location: "Thakur Panchanan Lane", type: "Residential", units: 95 },
  { year: 2018, name: "Nirvana Homes", location: "Near Nirmala Convent School", type: "Residential", units: 24 },
  { year: 2020, name: "The Universe", location: "Eastern By-pass", type: "Residential", units: 256 },
  { year: 2021, name: "AINU Hospital", location: "Shivmandir", type: "Healthcare", units: null },
  { year: 2023, name: "CP Avenue", location: "Near Nirmala Convent School", type: "Mixed-use", units: 42 },
];

