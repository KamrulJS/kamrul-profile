export interface ProjectBrainstorming {
  title: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  platform: string;
  technologies: string[];
  shortDescription: string;
  description: string;
  role: string;
  features: string[];
  brainstorming: ProjectBrainstorming[];
  images: {
    hero: string;
    gallery: { title: string; url: string; caption?: string }[];
  };
  liveUrl?: string;
  featured: boolean;
  resultsHighlights: string[];
}

export const CATEGORIES = [
  "ALL STACKS",
  "REACT/Next.js",
  "CUSTOM DEVELOPMENT",
  "UI/UX DESIGN",
  "SHOPIFY",
  "E-COMMERCE",
] as const;

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "Aura Apparel Shopify Store",
    slug: "aura-apparel-shopify-store",
    category: "SHOPIFY",
    platform: "Shopify",
    technologies: ["Shopify", "PageFly", "Liquid", "JavaScript", "Custom CSS"],
    shortDescription:
      "Modern fashion e-commerce experience focused on product discovery, responsive layouts, and custom Shopify section development.",
    description:
      "A complete Shopify e-commerce solution designed for a contemporary apparel brand. Built using custom Shopify sections alongside PageFly page builder for high-conversion product landing pages. Features seamless mobile shopping, fast AJAX cart drawer, custom color swatch filters, and optimized checkout flow.",
    role: "Lead Shopify Developer",
    features: [
      "Custom Shopify Liquid theme section development",
      "PageFly page builder landing page optimization",
      "Dynamic AJAX side-cart drawer & mini-cart",
      "Custom product variant color swatch selector",
      "Mobile-first responsive layout & mega menu",
      "Integrated product reviews & trust badge signals",
    ],
    brainstorming: [
      {
        title: "Project Goal",
        content:
          "Transform the brand's online storefront into a high-speed, mobile-optimized shopping experience with custom product presentation flexibility.",
      },
      {
        title: "Design & UX Considerations",
        content:
          "Prioritized visual clarity and minimal click-to-buy friction. Used bold visual hierarchy, crisp typography, and touch-friendly UI elements.",
      },
      {
        title: "Development Approach",
        content:
          "Combined Shopify's native Liquid templating engine with custom CSS and modular JavaScript for interactive filters without heavy third-party app bloat.",
      },
      {
        title: "Challenges & Solutions",
        content:
          "Optimized image loading across high-res fashion galleries by implementing lazy-loading, WebP assets, and responsive srcset attributes.",
      },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        {
          title: "Homepage Hero & Featured Collection",
          url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
          caption: "Hero section showcasing seasonal lookbook and instant shop CTA.",
        },
        {
          title: "Product Detail View & Variant Selector",
          url: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80",
          caption: "Interactive variant picker with real-time inventory indicator.",
        },
        {
          title: "Mobile Shopping View",
          url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
          caption: "Mobile drawer navigation and touch-optimized checkout funnel.",
        },
      ],
    },
    liveUrl: "https://example.com/aura-apparel",
    featured: true,
    resultsHighlights: [
      "Pixel-perfect responsive layout across all device screens",
      "Custom Shopify Liquid code built for easy store merchant updates",
      "Sub-2 second mobile page load performance",
      "Streamlined checkout conversion UX",
    ],
  },
  {
    id: "proj-2",
    title: "Vanguard Corporate WordPress",
    slug: "vanguard-corporate-wordpress", 
    category: "WORDPRESS",
    platform: "WordPress",
    technologies: ["WordPress", "Elementor Pro", "Custom CSS", "Loop Build", "PHP"],
    shortDescription:
      "Professional business website with custom layouts, responsive sections, dynamic loop grids, and optimized content presentation.",
    description:
      "A high-performing corporate WordPress portal crafted with Elementor Pro and custom PHP loop queries. Designed to showcase company services, case studies, team profiles, and investor relations with custom post types and dynamic templates.",
    role: "WordPress Developer",
    features: [
      "Elementor Pro custom single & archive template builds",
      "Custom Post Types & Taxonomy loop grids",
      "Custom CSS styling for tailored corporate identity",
      "On-page SEO optimization & metadata schema",
      "Interactive service calculator & inquiry form modal",
      "Cross-browser tested & WCAG accessibility compliant",
    ],
    brainstorming: [
      {
        title: "Project Goal",
        content:
          "Establish an authoritative web presence with dynamic content publishing capabilities for non-technical team members.",
      },
      {
        title: "Design Direction",
        content:
          "Clean corporate structure with sharp typography, micro-interactions, and visual proof metrics.",
      },
      {
        title: "Technical Execution",
        content:
          "Leveraged Elementor Pro's Loop Grid builder combined with custom hooks in functions.php to maintain light database query footprints.",
      },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        {
          title: "Executive Homepage Overview",
          url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
          caption: "Hero section highlighting core enterprise verticals.",
        },
        {
          title: "Service Portfolio & Loop Grid",
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
          caption: "Dynamic post grid filtered by industry category.",
        },
      ],
    },
    liveUrl: "https://example.com/vanguard-corp",
    featured: true,
    resultsHighlights: [
      "Custom WordPress Loop Builder integration",
      "Enhanced user navigation architecture",
      "Fully editable CMS dashboard for client staff",
    ],
  },
  {
    id: "proj-3",
    title: "Nova Analytics React Dashboard",
    slug: "nova-analytics-react-dashboard",
    category: "REACT",
    platform: "React / Web App",
    technologies: ["React.js", "TailwindCSS", "JavaScript ES6+", "GSAP"],
    shortDescription:
      "Responsive dashboard interface demonstrating component-based UI development, data visualization, and interactive state management.",
    description:
      "A modern, single-page analytics web application built using React.js and TailwindCSS. Features modular component architecture, dark/light theme switching, filterable data tables, and animated KPI metrics built with GSAP.",
    role: "Front-End Developer",
    features: [
      "React.js component-driven frontend architecture",
      "TailwindCSS utility styling & theme provider",
      "GSAP smooth micro-animations for data metrics",
      "Filterable data grids & search logic",
      "Responsive navigation drawer for desktop & mobile",
    ],
    brainstorming: [
      {
        title: "Project Goal",
        content:
          "Provide business operators with a clean, fast interface to digest key revenue metrics and real-time operational data.",
      },
      {
        title: "Technical Stack",
        content:
          "React 19 Hooks for local state management, TailwindCSS for layout, and GSAP for state transition animations.",
      },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        {
          title: "Main Control Center & KPI Cards",
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
          caption: "Real-time statistics dashboard with interactive metrics.",
        },
        {
          title: "Filterable Data Table View",
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          caption: "Searchable data table with paginated control.",
        },
      ],
    },
    liveUrl: "https://example.com/nova-analytics",
    featured: true,
    resultsHighlights: [
      "Modular reusable React component library",
      "Smooth GSAP data entry animations",
      "Fast client-side rendering & state management",
    ],
  },
  {
    id: "proj-4",
    title: "Lumina Custom GemPages Shopify Theme",
    slug: "lumina-custom-gempages-shopify-theme",
    category: "SHOPIFY",
    platform: "Shopify",
    technologies: ["Shopify", "GemPages", "Custom Shopify Code", "Liquid", "CSS3"],
    shortDescription:
      "High-converting Shopify cosmetics brand storefront built with custom GemPages templates and customized Liquid snippets.",
    description:
      "A tailored Shopify store for a premium cosmetics brand. Features custom GemPages layout templates, interactive ingredient highlight accordion, custom bundle builder, and optimized mobile drawer cart.",
    role: "Shopify Developer",
    features: [
      "GemPages drag-and-drop customized layouts",
      "Custom Shopify Liquid code extensions",
      "Interactive Product Bundle & Upsell widget",
      "Custom CSS styling matching brand design guidelines",
      "Customer reviews & photo user-generated content integration",
    ],
    brainstorming: [
      {
        title: "Project Goal",
        content:
          "Create a visually captivating e-commerce experience highlighting product purity and customer testimonials.",
      },
      {
        title: "Development Strategy",
        content:
          "Combined GemPages for rapid page layout iterations with custom Liquid snippets for store logic.",
      },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        {
          title: "Storefront & Beauty Collection",
          url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
          caption: "Custom promotional hero banner with shop now CTA.",
        },
      ],
    },
    liveUrl: "https://example.com/lumina-beauty",
    featured: false,
    resultsHighlights: [
      "Custom Shopify bundle builder workflow",
      "Optimized mobile buyer journey",
      "High aesthetic standards matching beauty industry benchmarks",
    ],
  },
  {
    id: "proj-5",
    title: "UrbanTech WooCommerce Store",
    slug: "urbantech-woocommerce-store",
    category: "E-COMMERCE",
    platform: "WordPress / WooCommerce",
    technologies: ["WordPress", "WooCommerce", "Elementor Pro", "Custom CSS", "PHP"],
    shortDescription:
      "Electronics & gadget e-commerce platform with customized product filters, payment gateway integration, and customer dashboard.",
    description:
      "A feature-packed WooCommerce store for consumer electronics. Features multi-currency switcher, custom product attribute filters, AJAX search with instant suggestions, and customized customer account portal.",
    role: "WordPress & WooCommerce Developer",
    features: [
      "WooCommerce catalog & checkout customization",
      "Elementor Pro single product & category shop templates",
      "Custom PHP hooks for checkout field customization",
      "AJAX live search with auto-complete product cards",
      "Speed optimized with caching and WebP asset conversion",
    ],
    brainstorming: [
      {
        title: "Project Goal",
        content:
          "Build a scalable tech e-commerce store capable of cataloging 500+ product SKUs with instant search and filtering.",
      },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        {
          title: "Shop Catalog & Tech Categories",
          url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
          caption: "Product catalog grid with dynamic specs filtering.",
        },
      ],
    },
    liveUrl: "https://example.com/urbantech-store",
    featured: false,
    resultsHighlights: [
      "Streamlined multi-category e-commerce navigation",
      "Customized WooCommerce checkout experience",
      "Scalable CMS database configuration",
    ],
  },
  {
    id: "proj-6",
    title: "Kinetic Interactive Web Experience",
    slug: "kinetic-interactive-web-experience",
    category: "CUSTOM DEVELOPMENT",
    platform: "Front-End",
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "GSAP", "TailwindCSS"],
    shortDescription:
      "High-impact agency landing page featuring custom GSAP scroll-triggered animations, interactive SVG graphics, and responsive design.",
    description:
      "A creative web experience showcasing modern front-end capabilities. Built with raw HTML5/CSS3, TailwindCSS, vanilla JS ES6+, and GSAP timeline animations for scroll-based storytelling and micro-interactions.",
    role: "Front-End Developer",
    features: [
      "GSAP ScrollTrigger timeline animations",
      "Custom cursor & magnetic button hover effects",
      "Modular JS structure without heavy framework overhead",
      "Pixel-perfect responsive layout across display breakpoints",
    ],
    brainstorming: [
      {
        title: "Project Goal",
        content:
          "Demonstrate high-end visual interaction craftsmanship with smooth 60fps animations.",
      },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        {
          title: "Interactive Showcase View",
          url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
          caption: "Scroll-triggered animation stage with retro badges.",
        },
      ],
    },
    liveUrl: "https://example.com/kinetic-web",
    featured: true,
    resultsHighlights: [
      "Ultra-smooth 60fps GSAP scroll animations",
      "Zero-framework lightweight performance",
      "Creative retro digital interaction design",
    ],
  },
  {
    id: "proj-7",
    title: "Kroma Creative Studio Portfolio",
    slug: "kroma-creative-studio-portfolio",
    category: "UI/UX DESIGN",
    platform: "UI/UX & Web Design",
    technologies: ["Figma", "UI/UX Design", "Wireframing", "TailwindCSS", "React"],
    shortDescription:
      "Interactive digital studio brand identity, design system, and pixel-perfect UI/UX design prototype.",
    description:
      "A comprehensive UI/UX design project for a modern creative agency. Includes modular design tokens, interactive Figma prototypes, responsive grid structures, and dark/light design systems tailored for creative professionals.",
    role: "Lead UI/UX & Web Designer",
    features: [
      "Figma design system & component library",
      "Pixel-perfect responsive desktop & mobile artboards",
      "Interactive micro-interaction prototype states",
      "Design token mapping for seamless front-end handoff",
    ],
    brainstorming: [
      {
        title: "UX Strategy",
        content:
          "Established bold typography scale and intuitive navigation structure to highlight studio deliverables with zero friction.",
      },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        {
          title: "UI Design System",
          url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
          caption: "Figma design tokens and typography hierarchy.",
        },
      ],
    },
    liveUrl: "https://example.com/kroma-studio",
    featured: true,
    resultsHighlights: [
      "Pixel-perfect UI design system",
      "Seamless front-end component handoff",
    ],
  },
  {
    id: "proj-8",
    title: "Solstice Multi-Vendor Marketplace",
    slug: "solstice-multivendor-marketplace",
    category: "E-COMMERCE",
    platform: "E-Commerce / Next.js",
    technologies: ["Next.js", "Stripe", "E-Commerce", "TailwindCSS", "Node.js"],
    shortDescription:
      "Scalable headless multi-vendor e-commerce marketplace with real-time search, vendor dashboards, and custom checkout.",
    description:
      "Full-scale e-commerce marketplace platform connecting artisan vendors with global buyers. Features instant Algolia-powered search, automated Stripe Connect payout splits, custom seller dashboards, and high-conversion product pages.",
    role: "Full-Stack E-Commerce Developer",
    features: [
      "Next.js App Router server-side rendered storefront",
      "Stripe Connect multi-vendor automated payment routing",
      "Real-time product filtering & instant search",
      "Vendor catalog management & revenue analytics",
    ],
    brainstorming: [
      {
        title: "Architecture",
        content:
          "Decoupled headless storefront using Next.js for sub-second page loads and dynamic checkout scaling.",
      },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        {
          title: "Marketplace Storefront",
          url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
          caption: "Multi-vendor catalog view and instant category filter.",
        },
      ],
    },
    liveUrl: "https://example.com/solstice-market",
    featured: true,
    resultsHighlights: [
      "Sub-second page load performance",
      "Seamless multi-vendor Stripe Connect payouts",
    ],
  },
  {
    id: "proj-9",
    title: "Veloce High-Performance SaaS Web App",
    slug: "veloce-saas-web-app",
    category: "REACT/Next.js Front-End",
    platform: "React / Web App",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "GSAP"],
    shortDescription:
      "Lightning-fast SaaS platform marketing site built with Next.js App Router, TypeScript, and GSAP animations.",
    description:
      "A modern SaaS marketing landing page engineered for high conversion rates. Features smooth scroll-driven GSAP animations, interactive pricing calculators, light/dark theme toggling, and clean TypeScript component architecture.",
    role: "Front-End Developer",
    features: [
      "Next.js SSG prerendering with TypeScript safety",
      "Interactive tier pricing toggle calculator",
      "GSAP timeline scroll-triggered feature reveals",
      "100/100 Lighthouse performance score optimization",
    ],
    brainstorming: [
      {
        title: "Performance Focus",
        content:
          "Achieved perfect 100/100 Google Lighthouse scores by optimizing font loading and bundle sizes.",
      },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        {
          title: "SaaS Dashboard Hero",
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
          caption: "Hero section with animated dashboard metric preview.",
        },
      ],
    },
    liveUrl: "https://example.com/veloce-saas",
    featured: true,
    resultsHighlights: [
      "100/100 Lighthouse performance rating",
      "Interactive pricing calculator UI",
    ],
  },
  {
    id: "proj-10",
    title: "Nexus Enterprise Headless CMS Portal",
    slug: "nexus-enterprise-cms-portal",
    category: "CUSTOM DEVELOPMENT",
    platform: "Custom Development",
    technologies: ["Node.js", "Express.js", "REST API", "MongoDB", "TailwindCSS"],
    shortDescription:
      "Custom REST API management dashboard and decoupled headless CMS backend for corporate content publishing.",
    description:
      "Custom enterprise portal built to manage multi-channel digital content publishing via RESTful APIs. Includes role-based access control (RBAC), media manager with Cloudinary integration, and live API documentation.",
    role: "Full-Stack Custom Developer",
    features: [
      "Custom Node.js & Express.js REST API server",
      "Role-based authorization & JWT security",
      "Decoupled React management console",
      "MongoDB database indexing & schema validation",
    ],
    brainstorming: [
      {
        title: "API Design",
        content:
          "Designed clean REST endpoints with robust validation middleware to serve content securely.",
      },
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        {
          title: "CMS Control Center",
          url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
          caption: "API key management & analytics dashboard view.",
        },
      ],
    },
    liveUrl: "https://example.com/nexus-portal",
    featured: true,
    resultsHighlights: [
      "Secure JWT & RBAC access control",
      "Decoupled headless content delivery",
    ],
  },
];

export function getAllProjects(): Project[] {
  return PROJECTS_DATA;
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS_DATA.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}
