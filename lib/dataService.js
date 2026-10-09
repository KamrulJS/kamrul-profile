import { supabase, isSupabaseConfigured } from "./supabase.js";

export const CATEGORIES = [
  "ALL STACKS",
  "REACT/Next.js",
  "CUSTOM DEVELOPMENT",
  "UI/UX DESIGN",
  "SHOPIFY",
  "E-COMMERCE",
];

// Fetch all projects from Supabase with strict deduplication
export async function getProjects() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("order_index", { ascending: true })
        .order("id", { ascending: true });

      if (!error && data && data.length > 0) {
        const seen = new Set();
        const unique = [];

        for (const item of data) {
          const key = (item.slug || item.id || "").toString().trim().toLowerCase();
          if (key && !seen.has(key)) {
            seen.add(key);
            unique.push(item);
          }
        }

        return unique.map((item) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          category: item.category,
          platform: item.platform,
          technologies: Array.isArray(item.technologies) ? item.technologies : [],
          shortDescription: item.short_description || item.shortDescription || "",
          description: item.description,
          role: item.role,
          features: Array.isArray(item.features) ? item.features : [],
          brainstorming: Array.isArray(item.brainstorming) ? item.brainstorming : [],
          images:
            typeof item.images === "string"
              ? JSON.parse(item.images)
              : item.images || { hero: item.hero_image || "", gallery: item.gallery || [] },
          liveUrl: item.live_url || item.liveUrl,
          featured: item.featured ?? false,
          resultsHighlights: Array.isArray(item.results_highlights || item.resultsHighlights)
            ? item.results_highlights || item.resultsHighlights
            : [],
        }));
      }
    } catch (err) {
      console.error("Supabase fetch projects error:", err);
    }
  }

  return [];
}

// Fetch single project by slug from Supabase
export async function getProjectBySlug(slug) {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .limit(1)
        .single();

      if (!error && data) {
        return {
          id: data.id,
          title: data.title,
          slug: data.slug,
          category: data.category,
          platform: data.platform,
          technologies: Array.isArray(data.technologies) ? data.technologies : [],
          shortDescription: data.short_description || data.shortDescription || "",
          description: data.description,
          role: data.role,
          features: Array.isArray(data.features) ? data.features : [],
          brainstorming: Array.isArray(data.brainstorming) ? data.brainstorming : [],
          images:
            typeof data.images === "string"
              ? JSON.parse(data.images)
              : data.images || { hero: data.hero_image || "", gallery: data.gallery || [] },
          liveUrl: data.live_url || data.liveUrl,
          featured: data.featured ?? false,
          resultsHighlights: Array.isArray(data.results_highlights || data.resultsHighlights)
            ? data.results_highlights || data.resultsHighlights
            : [],
        };
      }
    } catch (err) {
      console.error("Supabase fetch project by slug error:", err);
    }
  }

  return null;
}

// Fetch featured projects (ticker showcase) from Supabase with strict deduplication
export async function getFeaturedProjects() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("featured_projects")
        .select("*")
        .order("order_index", { ascending: true })
        .order("id", { ascending: true });

      if (!error && data && data.length > 0) {
        const deduplicateRow = (items) => {
          const seen = new Set();
          const result = [];
          for (const item of items) {
            const key = (item.title || item.id || "").toString().trim().toUpperCase();
            if (key && !seen.has(key)) {
              seen.add(key);
              result.push({
                id: item.id,
                title: item.title,
                category: item.category,
                techStack: Array.isArray(item.tech_stack) ? item.tech_stack : [],
                description: item.description,
                client: item.client,
                year: item.year,
                images: Array.isArray(item.images) ? item.images : [],
              });
            }
          }
          return result;
        };

        const row1 = deduplicateRow(data.filter((item) => item.row_number === 1));
        const row2 = deduplicateRow(data.filter((item) => item.row_number === 2));

        return { row1, row2 };
      }
    } catch (err) {
      console.error("Supabase fetch featured projects error:", err);
    }
  }

  return { row1: [], row2: [] };
}

// Fetch metrics banner data from Supabase with strict deduplication
export async function getMetrics() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("metrics")
        .select("*")
        .order("order_index", { ascending: true })
        .order("id", { ascending: true });

      if (!error && data && data.length > 0) {
        const seen = new Set();
        const unique = [];

        for (const item of data) {
          const key = (item.label || item.value || item.id || "").toString().trim().toUpperCase();
          if (key && !seen.has(key)) {
            seen.add(key);
            unique.push({
              id: item.id,
              value: item.value,
              label: item.label,
              tags: Array.isArray(item.tags) ? item.tags : [],
            });
          }
        }

        return unique;
      }
    } catch (err) {
      console.error("Supabase fetch metrics error:", err);
    }
  }

  return [];
}

const DEFAULT_SERVICES = [
  {
    id: "serv-1",
    num: "01",
    title: "SHOPIFY & ECOMMERCE ENGINEERING",
    iconName: "ShoppingBag",
    scope: "Building high-converting eCommerce experiences with custom Shopify themes, advanced Liquid development, storefront integrations, and tailored shopping functionality.",
    skills: [
      "Custom Shopify Theme & Liquid Section Development",
      "Storefront API, Custom Apps & Webhook Integrations",
      "Advanced Product Variants, Pricing & Cart Logic",
      "Custom Storefront Features & Third-Party Integrations",
      "Conversion-Focused Product Pages & Checkout UX",
    ],
    pills: ["Shopify", "Liquid", "StorefrontAPI", "CustomApps", "Ecommerce"],
    orderIndex: 1,
  },
  {
    id: "serv-2",
    num: "02",
    title: "CUSTOM APPLICATIONS & API DEVELOPMENT",
    iconName: "Code2",
    scope: "Developing tailored web applications and business tools using modern frontend frameworks, scalable backend architecture, and database-driven functionality.",
    skills: [
      "React.js & Next.js Application Development",
      "Node.js, Express.js & REST API Engineering",
      "MongoDB & MySQL Database Integration",
      "Custom Dashboards, Admin Panels & CRUD Systems",
      "Third-Party API Integration, Authentication & Automation",
    ],
    pills: ["React", "NextJS", "NodeJS", "MongoDB", "APIIntegration"],
    orderIndex: 2,
  },
  {
    id: "serv-3",
    num: "03",
    title: "FRONTEND ENGINEERING, UI/UX & PROTOTYPING",
    iconName: "Layout",
    scope: "Transforming ideas and design concepts into responsive, interactive interfaces through modern frontend engineering, rapid prototyping, and polished user experiences.",
    skills: [
      "Responsive UI Development with React.js & Next.js",
      "Interactive Prototypes & Functional MVP Development",
      "Custom HTML, CSS, JavaScript & Component Systems",
      "GSAP Animations, Scroll Interactions & Micro-Interactions",
      "Performance Optimization, Accessibility & Core Web Vitals",
    ],
    pills: ["FrontendDevelopment", "UIUX", "Prototyping", "GSAP", "ResponsiveDesign"],
    orderIndex: 3,
  },
  {
    id: "serv-4",
    num: "04",
    title: "ECOMMERCE MARKETING & WORKFLOW AUTOMATION",
    iconName: "Zap",
    scope: "Connecting eCommerce platforms with analytics, marketing tools, and automated workflows to streamline operations, improve customer engagement, and support business growth.",
    skills: [
      "Klaviyo Email Marketing & Automated Customer Journeys",
      "Marketing API Integrations & Workflow Automation",
      "Google Analytics 4 & Conversion Tracking",
      "Meta Pixel, Event Tracking & Marketing Attribution",
      "Conversion Rate Optimization (CRO) & Technical SEO",
      "Lead Capture, CRM Integration & Automated Notifications",
    ],
    pills: ["MarketingAutomation", "Klaviyo", "GA4", "CRO", "MetaPixel", "WorkflowAutomation"],
    orderIndex: 4,
  },
];

// Fetch services / domain expertise from Supabase with strict deduplication
export async function getServices() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("order_index", { ascending: true })
        .order("id", { ascending: true });

      if (!error && data && data.length > 0) {
        const seen = new Set();
        const unique = [];

        for (const item of data) {
          const key = (item.num || item.title || item.id || "").toString().trim().toUpperCase();
          if (key && !seen.has(key)) {
            seen.add(key);
            unique.push({
              id: item.id,
              num: item.num,
              title: item.title,
              iconName: item.icon_name || item.iconName || "Layout",
              scope: item.scope,
              skills: Array.isArray(item.skills) ? item.skills : [],
              pills: Array.isArray(item.pills) ? item.pills : [],
              orderIndex: item.order_index,
            });
          }
        }

        return unique;
      }
    } catch (err) {
      console.error("Supabase fetch services error:", err);
    }
  }

  return DEFAULT_SERVICES;
}

// Fetch skills & technologies from Supabase with deduplication
export async function getSkills() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .order("order_index", { ascending: true })
        .order("id", { ascending: true });

      if (!error && data && data.length > 0) {
        const seen = new Set();
        const unique = [];

        for (const item of data) {
          const key = (item.title || item.name || item.id || "").toString().trim().toUpperCase();
          if (key && !seen.has(key)) {
            seen.add(key);
            unique.push(item);
          }
        }

        return unique;
      }
    } catch (err) {
      console.error("Supabase fetch skills error:", err);
    }
  }

  return [];
}

// Fetch workflow pipeline steps from Supabase with strict deduplication
export async function getWorkflow() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("workflow")
        .select("*")
        .order("order_index", { ascending: true })
        .order("id", { ascending: true });

      if (!error && data && data.length > 0) {
        const seen = new Set();
        const unique = [];

        for (const item of data) {
          const key = (item.step_id || item.id || "").toString().trim().toUpperCase();
          if (key && !seen.has(key)) {
            seen.add(key);
            unique.push({
              id: item.id,
              stepId: item.step_id || item.stepId,
              stepLabel: item.step_label || item.stepLabel,
              tabTitle: item.tab_title || item.tabTitle,
              tagline: item.tagline,
              description: item.description,
              deliverables: Array.isArray(item.deliverables) ? item.deliverables : [],
              timeline: item.timeline,
              milestone: item.milestone,
              orderIndex: item.order_index,
            });
          }
        }

        return unique;
      }
    } catch (err) {
      console.error("Supabase fetch workflow error:", err);
    }
  }

  return [];
}

// Fetch experiences from Supabase with deduplication
export async function getExperience() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("experiences")
        .select("*")
        .order("order_index", { ascending: true })
        .order("id", { ascending: true });

      if (!error && data && data.length > 0) {
        const seen = new Set();
        const unique = [];

        for (const item of data) {
          const key = (item.role || item.company || item.id || "").toString().trim().toUpperCase();
          if (key && !seen.has(key)) {
            seen.add(key);
            unique.push(item);
          }
        }

        return unique;
      }
    } catch (err) {
      console.error("Supabase fetch experience error:", err);
    }
  }

  return [];
}
