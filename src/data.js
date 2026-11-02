// ─────────────────────────────────────────────────────────
// Edit your content here. Add your own photos as files in
// /public/images/ (not /src/assets/) — see README.md for why.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Naufal Fawwaz Munarto",
  role: "Telecommunications Engineer / Fullstack Developer",
  location: "Bandung, West Java, Indonesia",
  phone: "082129926729",
  email: "naufal.munarto@gmail.com",
  linkedin: "https://www.linkedin.com/in/naufal-munarto-7543b3265/",
  portfolio: "https://naufal-portofolio-kappa.vercel.app/",
  tagline:
    "Telecommunications engineer who turns technical problems into reliable solutions — across networks, software, and documentation.",
  summary:
    "Telecommunications Engineering graduate with hands-on experience in network deployment and configuration, as well as fullstack web development. Skilled in troubleshooting and technical problem-solving. Adaptable, detail-oriented, and eager to contribute in dynamic, solution-oriented engineering teams.",
  photo: "/images/profile.jpg",
  cv: "/CV_Naufal_Fawwaz_Munarto.pdf",
};

export const aboutFacts = [
  { label: "Education", value: "Telecommunication Engineering, Telkom University (2022 – 2026)" },
  { label: "Based in", value: "Bandung, West Java" },
  { label: "Focus", value: "Network deployment, fullstack development, technical documentation" },
  { label: "Status", value: "Open to internship and entry-level roles" },
];

export const finalProject = {
  id: "uniflow",
  title: "UniFlow — Non-Stationary IoT Water Quality Monitoring",
  org: "Final Project · Telkom University",
  period: "2026",
  role: "Team of 4 · Backend Developer",
  summary:
    "UniFlow is an IoT system that monitors the water quality of Telkom University's open waterways in real time. An ESP32 device with four sensors streams readings over MQTT to a cloud backend, which computes a Water Quality Index, triggers early-warning alerts, and powers a Gemini-based chatbot. As the backend developer in a four-person team, I designed the layered Express.js API, the PostgreSQL storage, and the Railway deployment.",
  metrics: [
    { value: "0%", label: "MQTT packet loss over 1,800 packets" },
    { value: "~4 s", label: "Data update latency in the app" },
    { value: "86 B", label: "Average MQTT payload" },
    { value: ">94%", label: "Average sensor accuracy" },
  ],
  highlights: [
    "Layered Express.js API (routes → controllers → services → repositories) on PostgreSQL, with continuous deployment on Railway.",
    "Unified ingestion pipeline: REST and MQTT both call a single saveSensorData(), so no logic is duplicated.",
    "Water Quality Index engine with center-best and lower-better sub-index formulas, driving status colors and threshold alerts.",
    "Gemini 2.5 Flash chatbot using RAG and function calling, restricted to the water-quality domain.",
    "Operations: health-check endpoint, automatic device status via last_seen, 90-day history, and CSV export.",
  ],
  tags: ["Express.js", "PostgreSQL", "MQTT", "REST API", "Gemini API", "Railway", "ESP32"],
  images: [
    "/images/UNIFLOW_1.png",
    "/images/UNIFLOW_2.webp",
    "/images/UNIFLOW_3.png",
    "/images/UNIFLOW_4.png",
    "/images/UNIFLOW_5.png",
    "/images/UNIFLOW_6.png",
    "/images/UNIFLOW_7.png",
  ],
  links: [{ label: "Open web app", href: "https://www.uniflow.me/" }],
};

export const networkProjects = [
  {
    id: "madiun-mpls",
    title: "Point-to-Point MPLS Link — Madiun",
    org: "PT Maktekindo",
    period: "May 2025",
    summary:
      "Traced and identified point-to-point fiber optic paths between two stations (LC duplex, 4 cores per side, 4 SFPs total), then configured MPLS routing to carry E1 traffic toward the Access Multiplexer, enabling voice/data communication over the link.",
    tags: ["MPLS", "P2P Topology", "Fiber Optic Tracing", "E1 Interfacing"],
    images: [
      "/images/MPLSMN_1.jpeg",
      "/images/MPLSMN_2.jpeg",
      "/images/MPLSMN_3.jpeg",
      "/images/MPLSMN_4.jpeg",
    ],
  },
  {
    id: "12-station-mpls",
    title: "12-Station MPLS Ring Deployment",
    org: "PT Maktekindo",
    period: "Aug 2021 – Mar 2022",
    summary:
      "Installed and configured MPLS across 12 stations, interconnected via fiber optic links using ERPS and ELPS ring-protection protocols. Conducted hands-on training for KAI personnel on operating the newly deployed devices.",
    tags: ["MPLS", "ERPS", "ELPS", "Ring Topology"],
    images: [
      "/images/MPLSBD_3.jpg",
      "/images/MPLSBD_1.jpg",
      "/images/MPLSBD_2.jpg",
      "/images/MPLSBD_4.jpg",
    ],
  },
];

export const softwareProjects = [
  {
    id: "tekmira-bookstore",
    title: "Book Marketplace Platform",
    org: "Tekmira — Fullstack Developer Intern",
    period: "Jun 2025 – Aug 2025",
    summary:
      "Built a fullstack book buy-and-sell web application end-to-end: user authentication, product catalog with full CRUD, and a complete cart-to-checkout transaction flow, backed by a RESTful API.",
    stack: ["React", "Express.js", "PostgreSQL", "REST API"],
    images: [
      "/images/TEKMIRA_1.png",
      "/images/TEKMIRA_2.png",
      "/images/TEKMIRA_3.png",
      "/images/TEKMIRA_4.jpeg",
    ],
    link: "https://tekmira-frontend.vercel.app/",
  },
];

export const adminProjects = [
  {
    id: "rejeki-marino-admin",
    title: "Warehouse Operations Documentation",
    org: "PT Rejeki Marino KSO",
    period: "Jul 2021 – Oct 2021",
    summary:
      "Handled day-to-day administrative operations for a warehouse: preparing work reports, tracking incoming and outgoing goods, and compiling weekly progress reports with S-Curve charts to monitor project timelines.",
    tags: ["Reporting", "Inventory Tracking", "S-Curve", "Documentation"],
    images: [
      "/images/Admin_1.jpg",
      "/images/Admin_2.jpg",
      "/images/Admin_3.png",
      "/images/Admin_4.jpg",
    ],
  },
];

export const experience = [
  {
    title: "Fullstack Developer Intern",
    org: "Tekmira",
    period: "Jun 2025 – Aug 2025",
    type: "software",
  },
  {
    title: "Network Installation Engineer",
    org: "PT Maktekindo — Madiun",
    period: "May 2025",
    type: "network",
  },
  {
    title: "Telecommunication Engineer",
    org: "PT Maktekindo — Bandung",
    period: "Aug 2021 – Mar 2022",
    type: "network",
  },
  {
    title: "Admin",
    org: "PT Rejeki Marino KSO",
    period: "Jul 2021 – Oct 2021",
    type: "admin",
  },
];

export const skills = {
  network: [
    "MPLS (P2P & Ring)",
    "ERPS",
    "ELPS",
    "E1 Interfacing",
    "Fiber Optic Tracing & Identification",
    "Network Troubleshooting",
  ],
  software: ["React", "Express.js", "PostgreSQL", "REST API", "JavaScript"],
  tools: ["Linux", "Microsoft Excel", "Microsoft Word", "CLI / Command Line", "VS Code"],
};

export const education = {
  school: "Telkom University",
  degree: "Telecommunication Engineering — Undergraduate",
  period: "2022 – 2026",
  notes: [
    "Member, HIPMI (Himpunan Pengusaha Muda Indonesia)",
    "Lab Practicum Coordinator, Cyber Physical System Laboratory (2024 – 2026)",
  ],
};