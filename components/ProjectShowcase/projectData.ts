export interface ShowcaseProject {
  id: number;
  title: string;
  category: "Shopify" | "WordPress" | "MERN" | "SaaS" | "Web Development" | "E-Commerce";
  image: string;
  techStack: string[];
  description: string;
  liveUrl: string;
  client: string;
  year: string;
}

export const placeholderProjects: ShowcaseProject[] = [
  {
    id: 1,
    title: "Luxury Fashion E-commerce Store",
    category: "Shopify",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    techStack: ["Shopify", "Liquid", "JavaScript", "GSAP"],
    description: "High-converting storefront with custom Liquid templates, mega menu, and AJAX slide cart.",
    liveUrl: "https://example.com/fashion-store",
    client: "Aura Apparel Global",
    year: "2026"
  },
  {
    id: 2,
    title: "Employee Management Dashboard",
    category: "MERN",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    description: "Enterprise admin dashboard with real-time analytics, role permissions, and staff scheduling.",
    liveUrl: "https://example.com/employee-portal",
    client: "Nexus Enterprise Systems",
    year: "2026"
  },
  {
    id: 3,
    title: "Modern SaaS Analytics Platform",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "TailwindCSS", "Node.js", "GSAP"],
    description: "Performance monitoring web application featuring interactive charts and automated email alerts.",
    liveUrl: "https://example.com/saas-analytics",
    client: "Veloce Technologies",
    year: "2025"
  },
  {
    id: 4,
    title: "Creative Brand Product Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "GSAP", "Lenis", "TailwindCSS"],
    description: "Immersive product landing page with 3D product showcase, smooth momentum scroll, and micro-interactions.",
    liveUrl: "https://example.com/brand-experience",
    client: "Kroma Creative Studio",
    year: "2026"
  },
  {
    id: 5,
    title: "Corporate Business WordPress Portal",
    category: "WordPress",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    techStack: ["WordPress", "Elementor Pro", "Custom CSS", "Loop Build"],
    description: "Custom corporate website with dynamic custom post types, custom loop grids, and multi-language support.",
    liveUrl: "https://example.com/corporate-portal",
    client: "Vanguard Global Group",
    year: "2025"
  },
  {
    id: 6,
    title: "Multi-Vendor Marketplace Platform",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    techStack: ["Next.js", "Shopify", "TailwindCSS", "Node.js"],
    description: "Scalable e-commerce store with vendor onboarding, automated payout processing, and multi-currency support.",
    liveUrl: "https://example.com/marketplace",
    client: "Solstice Digital Merchants",
    year: "2026"
  }
];
