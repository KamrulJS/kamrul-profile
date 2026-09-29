export interface ShowcaseProject {
  id: number;
  title: string;
  category: "Shopify" | "WordPress" | "MERN" | "SaaS" | "Web Development" | "E-Commerce";
  techStack: string[];
  description: string;
  images: string[];
  client: string;
  year: string;
}

export const placeholderProjectsRow1: ShowcaseProject[] = [
  {
    id: 1,
    title: "Luxury Fashion E-Commerce",
    category: "Shopify",
    techStack: ["Shopify", "Liquid", "JavaScript", "GSAP"],
    description: "High-converting fashion storefront with custom Liquid code, instant cart drawer, and lookbook grid.",
    client: "Aura Apparel Global",
    year: "2026",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 2,
    title: "Employee Management System",
    category: "MERN",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    description: "Enterprise portal featuring automated payroll processing, employee metrics, and shift scheduling.",
    client: "Nexus Enterprise Systems",
    year: "2026",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 3,
    title: "Creative Agency Digital Hub",
    category: "Web Development",
    techStack: ["React", "GSAP", "Lenis", "TailwindCSS"],
    description: "Interactive agency landing page with 3D webgl canvas, smooth momentum scroll, and cursor effects.",
    client: "Kroma Creative Studio",
    year: "2026",
    images: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 4,
    title: "Modern SaaS Analytics Dashboard",
    category: "SaaS",
    techStack: ["React", "Node.js", "TailwindCSS", "Chart.js"],
    description: "Real-time analytics portal with automated telemetry tracking, user cohorts, and report export.",
    client: "Veloce Technologies",
    year: "2025",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 5,
    title: "Corporate Business WordPress Site",
    category: "WordPress",
    techStack: ["WordPress", "Elementor Pro", "Custom CSS", "PHP"],
    description: "Corporate portal featuring custom post types, dynamic archive loop grids, and SEO optimization.",
    client: "Vanguard Global Group",
    year: "2025",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744801-30d00f050a69?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const placeholderProjectsRow2: ShowcaseProject[] = [
  {
    id: 6,
    title: "Multi-Vendor E-Commerce Platform",
    category: "E-Commerce",
    techStack: ["Next.js", "Shopify", "TailwindCSS", "Node.js"],
    description: "Scalable marketplace with merchant onboarding, payout processing, and multi-currency checkout.",
    client: "Solstice Digital Merchants",
    year: "2026",
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 7,
    title: "Minimalist Watch & Goods Store",
    category: "Shopify",
    techStack: ["Shopify", "PageFly", "Liquid", "JavaScript"],
    description: "Bespoke watch storefront with 360-degree product viewer, custom filter drawer, and mobile funnel.",
    client: "Chronos Timepieces Ltd",
    year: "2025",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 8,
    title: "Gourmet Culinary & Dining Web App",
    category: "Web Development",
    techStack: ["React", "Express", "TailwindCSS", "GSAP"],
    description: "Interactive dining experience page featuring table reservation booking, order tracking, and chef recipes.",
    client: "L'Etoile Culinary Group",
    year: "2026",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 9,
    title: "Fitness & Wellness Community Portal",
    category: "MERN",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    description: "Subscription fitness application with live workout streams, personal trainer scheduling, and goal tracking.",
    client: "Pulse Athletic Club",
    year: "2026",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 10,
    title: "Architectural Portfolio & Studio",
    category: "WordPress",
    techStack: ["WordPress", "Custom Theme", "GSAP", "Custom CSS"],
    description: "High-end architectural showcase featuring full-screen project sliders, blueprint downloads, and interactive maps.",
    client: "Modus Architecture Studio",
    year: "2025",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];
