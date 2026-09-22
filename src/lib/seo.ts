export const SITE_NAME = "47 Accountants";
export const SITE_URL = "https://47accountants.com";
export const DEFAULT_SOCIAL_IMAGE =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=630&fit=crop";

type StructuredData = Record<string, unknown>;

interface ServiceSeoItem {
  slug: string;
  title: string;
  description: string;
  image: string;
}

interface BlogSeoItem {
  slug: string;
  title: string;
  seoTitle: string;
  category: string;
  description: string;
  image: string;
  author: string;
  publishedAt: string;
  modifiedAt: string;
}

const SERVICE_SEO_ITEMS: ServiceSeoItem[] = [
  { slug: "bookkeeping", title: "Managed Bookkeeping", description: "Accurate ledgers, automated bank reconciliations and trial-balance ready books.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=800&fit=crop" },
  { slug: "tax-compliance", title: "Tax & Compliance", description: "Corporation Tax returns, Self-Assessments and year-end statutory compliance.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop" },
  { slug: "business-advisory", title: "Business Advisory", description: "Financial forecasting, cash-flow modelling, KPI tracking and scaling support.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop" },
  { slug: "payroll-pensions", title: "Payroll & Pensions", description: "End-to-end PAYE processing, digital payslips, RTI filings and pension administration.", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop" },
  { slug: "vat-services", title: "VAT Services", description: "Quarterly MTD returns, VAT scheme support and international trade VAT advice.", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop" },
  { slug: "company-secretarial", title: "Company Secretarial", description: "Confirmation statements, share transfers, director changes and company incorporation support.", image: "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?w=1200&h=800&fit=crop" },
];

const BLOG_SEO_ITEMS: BlogSeoItem[] = [
  {
    slug: "beyond-cost-cutting-why-global-businesses-are-re-thinking-outsourced-bookkeeping",
    title: "Beyond Cost Cutting: Why Global Businesses Are Re-Thinking Outsourced Bookkeeping",
    seoTitle: "Outsourced Bookkeeping Beyond Cost Cutting | 47 Accountants",
    category: "Managed Bookkeeping",
    description: "Why global businesses use outsourced bookkeeping for dependable capacity, current records and stronger financial decision-making.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80&fm=jpg&fit=crop",
    author: "Mahmood Alam",
    publishedAt: "2026-02-10",
    modifiedAt: "2026-02-10",
  },
  {
    slug: "global-corporate-tax-optimization-international-transfer-pricing-2026",
    title: "Global Corporate Tax Optimization & International Transfer Pricing 2026",
    seoTitle: "Corporate Tax & Transfer Pricing 2026 | 47 Accountants",
    category: "Corporate Tax",
    description: "A 2026 overview of global corporate tax, Pillar Two minimum effective tax rates and transfer-pricing documentation.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80&fm=jpg&fit=crop",
    author: "Muhammad Sheheryar Khan",
    publishedAt: "2026-02-02",
    modifiedAt: "2026-02-02",
  },
  {
    slug: "global-digital-tax-compliance-real-time-e-invoicing-mandates-2026",
    title: "Global Digital Tax Compliance & Real-Time E-Invoicing Mandates 2026",
    seoTitle: "E-Invoicing & Digital Tax Compliance 2026 | 47 Accountants",
    category: "International Compliance",
    description: "An overview of e-invoicing mandates, continuous transaction controls and digital tax-filing integrations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fm=jpg&fit=crop",
    author: "Khurram Iqbal",
    publishedAt: "2026-03-03",
    modifiedAt: "2026-03-03",
  },
  {
    slug: "international-vat-gst-cross-border-e-commerce-regulations-2026",
    title: "International VAT & GST Cross-Border E-Commerce Regulations 2026",
    seoTitle: "Cross-Border VAT & GST for E-Commerce | 47 Accountants",
    category: "VAT & GST",
    description: "An overview of cross-border VAT and GST, OSS filings, digital-service rules and reverse-charge mechanisms.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&fm=jpg&fit=crop",
    author: "Bilal Ahmed",
    publishedAt: "2026-04-04",
    modifiedAt: "2026-04-04",
  },
  {
    slug: "scaling-accounting-practices-globally-the-power-of-white-label-subcontracting",
    title: "Scaling Accounting Practices Globally: The Power of White-Label Subcontracting",
    seoTitle: "How White-Label Accounting Outsourcing Works | 47 Accountants",
    category: "Practice Outsourcing",
    description: "How accounting practices can use structured white-label support to add capacity and refocus internal teams.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80&fm=jpg&fit=crop",
    author: "Mahmood Alam",
    publishedAt: "2026-05-05",
    modifiedAt: "2026-05-05",
  },
  {
    slug: "statutory-financial-audits-esg-disclosures-for-mid-market-enterprises-2026",
    title: "Statutory Financial Audits & ESG Disclosures for Mid-Market Enterprises 2026",
    seoTitle: "Audit Preparation & ESG Disclosures 2026 | 47 Accountants",
    category: "Audit & Advisory",
    description: "An overview of audit preparation, internal controls, fraud prevention and ESG reporting considerations.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fm=jpg&fit=crop",
    author: "Zeeshan Ghafoor",
    publishedAt: "2026-06-06",
    modifiedAt: "2026-06-06",
  },
  {
    slug: "executive-profit-extraction-spousal-tax-efficiency-strategies-2026",
    title: "Executive Profit Extraction & Spousal Tax Efficiency Strategies 2026",
    seoTitle: "Director Profit Extraction Strategies 2026 | 47 Accountants",
    category: "Global Tax 2026",
    description: "An overview of salary, dividend, pension and asset-structuring considerations for company directors.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&fm=jpg&fit=crop",
    author: "Uzair Muhammad",
    publishedAt: "2026-07-07",
    modifiedAt: "2026-07-07",
  },
];

export interface SeoDescriptor {
  title: string;
  description: string;
  path: string;
  canonical: string;
  image: string;
  type: "website" | "article";
  robots: string;
  publishedAt?: string;
  modifiedAt?: string;
  structuredData: StructuredData[];
}

export interface PublicRoute {
  path: string;
  lastModified: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
}

const DEFAULT_ROBOTS =
  "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

const ORGANIZATION_SCHEMA: StructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  email: "info@47accountants.com",
  telephone: "+44 7462 229006",
  description:
    "Accounting, tax, payroll, advisory and white-label outsourcing support for businesses and accounting practices.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "info@47accountants.com",
    telephone: "+44 7462 229006",
    availableLanguage: "English",
  },
};

const staticPages: Record<
  string,
  { title: string; description: string; image?: string }
> = {
  "/": {
    title: "47 Accountants | Accounting, Tax & Outsourcing",
    description:
      "Accounting, tax, payroll, advisory and white-label outsourcing support for growing businesses and accounting practices.",
  },
  "/about": {
    title: "About Our Accounting Team | 47 Accountants",
    description:
      "Meet the 47 Accountants team and learn how we support businesses and accounting practices with dependable finance operations.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop",
  },
  "/services": {
    title: "Accounting & Tax Services | 47 Accountants",
    description:
      "Explore bookkeeping, tax compliance, payroll, VAT, company secretarial and business advisory services from 47 Accountants.",
  },
  "/industries": {
    title: "Accounting Services by Industry | 47 Accountants",
    description:
      "Explore accounting, tax and finance support tailored to the operating needs of different industries and business models.",
  },
  "/solutions/for-businesses": {
    title: "Accounting Support for Growing Businesses | 47 Accountants",
    description:
      "Flexible accounting, tax, payroll and advisory support designed for startups, SMEs and growing international businesses.",
  },
  "/solutions/outsource-workload": {
    title: "White-Label Accounting Outsourcing | 47 Accountants",
    description:
      "Extend your accounting practice with white-label bookkeeping, tax, payroll and accounts-production support under a structured workflow.",
  },
  "/contact": {
    title: "Contact 47 Accountants | Send an Enquiry",
    description:
      "Tell 47 Accountants what support you need and send an accounting, tax, advisory or outsourcing enquiry to the team.",
  },
  "/blog": {
    title: "Accounting, Tax & Outsourcing Insights | 47 Accountants",
    description:
      "Read practical insights about accounting operations, tax compliance, VAT, audit preparation and practice outsourcing.",
  },
  "/privacy": {
    title: "Privacy Policy | 47 Accountants",
    description:
      "Read how 47 Accountants collects, uses, protects and retains information submitted through this website.",
  },
  "/terms": {
    title: "Website Terms | 47 Accountants",
    description:
      "Read the terms that apply when using the 47 Accountants website and its general informational content.",
  },
  "/editorial-policy": {
    title: "Editorial Policy | 47 Accountants",
    description:
      "Learn how 47 Accountants creates, reviews, dates, updates and corrects its accounting and tax information.",
  },
  "/sitemap": {
    title: "HTML Sitemap | 47 Accountants",
    description:
      "Browse the public pages, services and editorial articles available on the 47 Accountants website.",
  },
};

const normalisePath = (pathname: string): string => {
  const withoutQuery = pathname.split(/[?#]/, 1)[0] || "/";
  if (withoutQuery === "/") return "/";
  return withoutQuery.replace(/\/+$/, "") || "/";
};

const absoluteUrl = (path: string): string =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

const truncateDescription = (value: string): string =>
  value.length <= 160 ? value : `${value.slice(0, 157).trimEnd()}...`;

const personSlug = (name: string): string =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const breadcrumbSchema = (
  items: ReadonlyArray<{ name: string; path: string }>,
): StructuredData => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

const baseDescriptor = (
  path: string,
  title: string,
  description: string,
  image = DEFAULT_SOCIAL_IMAGE,
): SeoDescriptor => ({
  title,
  description: truncateDescription(description),
  path,
  canonical: absoluteUrl(path),
  image,
  type: "website",
  robots: DEFAULT_ROBOTS,
  structuredData: [],
});

export const getSeoForPath = (pathname: string): SeoDescriptor => {
  const path = normalisePath(pathname);
  const staticPage = staticPages[path];

  if (staticPage) {
    const seo = baseDescriptor(
      path,
      staticPage.title,
      staticPage.description,
      staticPage.image,
    );

    if (path === "/") {
      seo.structuredData.push(ORGANIZATION_SCHEMA, {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      });
    } else {
      const label = staticPage.title.split(" | ")[0];
      seo.structuredData.push(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: label, path },
        ]),
      );
    }

    if (path === "/about") seo.structuredData.push(ORGANIZATION_SCHEMA);
    return seo;
  }

  if (path.startsWith("/services/")) {
    const slug = path.slice("/services/".length);
    const service = SERVICE_SEO_ITEMS.find((item) => item.slug === slug);
    if (service) {
      const seo = baseDescriptor(
        path,
        `${service.title} Services | 47 Accountants`,
        service.description,
        service.image,
      );
      seo.structuredData.push(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${seo.canonical}#service`,
          name: service.title,
          description: service.description,
          url: seo.canonical,
          provider: {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: SITE_NAME,
            url: `${SITE_URL}/`,
          },
        },
      );
      return seo;
    }
  }

  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length);
    const post = BLOG_SEO_ITEMS.find((item) => item.slug === slug);
    if (post) {
      const seo = baseDescriptor(
        path,
        post.seoTitle,
        post.description,
        post.image,
      );
      seo.type = "article";
      seo.publishedAt = post.publishedAt;
      seo.modifiedAt = post.modifiedAt;
      seo.structuredData.push(
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blog" },
          { name: post.title, path },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${seo.canonical}#article`,
          headline: post.title,
          description: post.description,
          image: [post.image],
          datePublished: post.publishedAt,
          dateModified: post.modifiedAt,
          mainEntityOfPage: seo.canonical,
          inLanguage: "en",
          author: {
            "@type": "Person",
            name: post.author,
            url: `${SITE_URL}/about#${personSlug(post.author)}`,
          },
          publisher: {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: SITE_NAME,
            url: `${SITE_URL}/`,
          },
        },
      );
      return seo;
    }
  }

  return {
    ...baseDescriptor(
      path,
      "Page Not Found | 47 Accountants",
      "The requested page could not be found.",
    ),
    robots: "noindex,nofollow",
  };
};

const STATIC_ROUTE_DATE = "2026-09-19";

export const PUBLIC_ROUTES: PublicRoute[] = [
  { path: "/", lastModified: STATIC_ROUTE_DATE, priority: 1, changeFrequency: "weekly" },
  { path: "/about", lastModified: STATIC_ROUTE_DATE, priority: 0.7, changeFrequency: "monthly" },
  { path: "/services", lastModified: STATIC_ROUTE_DATE, priority: 0.9, changeFrequency: "monthly" },
  ...SERVICE_SEO_ITEMS.map((service) => ({
    path: `/services/${service.slug}`,
    lastModified: STATIC_ROUTE_DATE,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
  { path: "/industries", lastModified: STATIC_ROUTE_DATE, priority: 0.7, changeFrequency: "monthly" },
  { path: "/solutions/for-businesses", lastModified: STATIC_ROUTE_DATE, priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/outsource-workload", lastModified: STATIC_ROUTE_DATE, priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", lastModified: STATIC_ROUTE_DATE, priority: 0.8, changeFrequency: "yearly" },
  { path: "/blog", lastModified: STATIC_ROUTE_DATE, priority: 0.8, changeFrequency: "weekly" },
  ...BLOG_SEO_ITEMS.map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: post.modifiedAt,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  { path: "/privacy", lastModified: STATIC_ROUTE_DATE, priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", lastModified: STATIC_ROUTE_DATE, priority: 0.2, changeFrequency: "yearly" },
  { path: "/editorial-policy", lastModified: STATIC_ROUTE_DATE, priority: 0.4, changeFrequency: "yearly" },
  { path: "/sitemap", lastModified: STATIC_ROUTE_DATE, priority: 0.3, changeFrequency: "monthly" },
];

const LEGACY_VARIATIONS = [
  "Masterclass Edition",
  "Executive Strategy Brief",
  "Global Practitioner Playbook",
  "Comprehensive 2026 Review",
  "Strategic Insights & Action Plan",
  "HMRC & Global Regulatory Focus",
  "Enterprise Advisory Playbook",
  "Best Practices & Risk Management",
  "In-Depth Financial Analysis",
  "Leadership & Growth Edition",
] as const;

const ORIGINAL_BLOG_SEO_ITEMS = BLOG_SEO_ITEMS.slice(1);

export const LEGACY_BLOG_REDIRECTS = Array.from({ length: 94 }, (_, offset) => {
  const index = offset + 7;
  const topic = ORIGINAL_BLOG_SEO_ITEMS[(index - 1) % ORIGINAL_BLOG_SEO_ITEMS.length];
  const variation =
    LEGACY_VARIATIONS[
      Math.floor((index - 1) / ORIGINAL_BLOG_SEO_ITEMS.length) % LEGACY_VARIATIONS.length
    ];
  const legacyTitle = `${topic.title} (${variation} #${Math.ceil(index / ORIGINAL_BLOG_SEO_ITEMS.length)})`;

  return {
    from: `/blog/${personSlug(legacyTitle)}`,
    to: `/blog/${topic.slug}`,
  };
});
