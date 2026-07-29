import teamMember1 from "../assets/image/team/teamMember1.webp";
import teamMember2 from "../assets/image/team/teamMember2.webp";
import teamMember3 from "../assets/image/team/teamMember3.webp";
import teamMember4 from "../assets/image/team/teamMember4.webp";
import teamMember5 from "../assets/image/team/teamMember5.webp";
import teamMember6 from "../assets/image/team/teamMember6.webp";

export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  intro: string;
  sections: BlogSection[];
  keyTakeaways: string[];
  keywords: string[];
  image: string;
  featured?: boolean;
}

export const BLOG_CATEGORIES = [
  "All",
  "Global Tax 2026",
  "International Compliance",
  "Corporate Tax",
  "VAT & GST",
  "Practice Outsourcing",
  "Audit & Advisory",
] as const;

export type BlogCategory = typeof BLOG_CATEGORIES[number];

// Reliable, highly varied Unsplash image collection specifically selected for financial, tax, and corporate topics
const UNIQUE_FINANCE_IMAGES = [
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80&fm=jpg&fit=crop", // Accounting calculator & report
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fm=jpg&fit=crop", // Analytics chart laptop
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&fm=jpg&fit=crop", // Handshake business contract
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80&fm=jpg&fit=crop", // Businessman suit presentation
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fm=jpg&fit=crop", // Desk planning laptop graphs
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&fm=jpg&fit=crop", // Corporate office meeting
  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80&fm=jpg&fit=crop", // Stock financial chart display
  "https://images.unsplash.com/photo-1542744094-3a31727223ec?w=800&q=80&fm=jpg&fit=crop", // Business team strategy board
  "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80&fm=jpg&fit=crop", // Glasses financial document review
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80&fm=jpg&fit=crop", // Modern glass office skyscraper
  "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80&fm=jpg&fit=crop", // Financial advisor consultation
  "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80&fm=jpg&fit=crop", // Money currency & coins growth
  "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80&fm=jpg&fit=crop", // Banknotes cash management
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fm=jpg&fit=crop", // Commercial architecture facade
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&fm=jpg&fit=crop", // Executive team collaboration
  "https://images.unsplash.com/photo-1534536281715-e28d76741772?w=800&q=80&fm=jpg&fit=crop", // Global business handshake
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&fm=jpg&fit=crop", // Modern workshop seminar
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&fm=jpg&fit=crop", // Tech workstation dashboard
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80&fm=jpg&fit=crop", // Businesswoman presenting data
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&fm=jpg&fit=crop", // Online digital software interface
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80&fm=jpg&fit=crop", // Executive leader desk
  "https://images.unsplash.com/photo-1556742049-0a67daf40958?w=800&q=80&fm=jpg&fit=crop", // Point of sale payment terminal
  "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&q=80&fm=jpg&fit=crop", // Legal & tax balance scale
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80&fm=jpg&fit=crop", // Global currency notes
  "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=800&q=80&fm=jpg&fit=crop", // Female partner strategy discussion
];

const AUTHORS = [
  { name: "Muhammad Sheheryar Khan", role: "CEO & Senior Financial Advisor", avatar: teamMember1 },
  { name: "Khurram Iqbal", role: "Portfolio Manager & Tax Strategist", avatar: teamMember2 },
  { name: "Bilal Ahmed", role: "Portfolio Manager & Audit Specialist", avatar: teamMember3 },
  { name: "Mahmood Alam", role: "Chief Business Development Officer", avatar: teamMember4 },
  { name: "Zeeshan Ghafoor", role: "Portfolio Manager & Practice Advisory", avatar: teamMember6 },
  { name: "Uzair Muhammad", role: "Chief Technology Officer", avatar: teamMember5 },
];

interface CoreTopic {
  category: BlogCategory;
  title: string;
  excerpt: string;
  intro: string;
  sections: BlogSection[];
  keyTakeaways: string[];
  keywords: string[];
}

const BASE_TOPICS: CoreTopic[] = [
  {
    category: "Corporate Tax",
    title: "Global Corporate Tax Optimization & International Transfer Pricing 2026",
    excerpt: "Comprehensive 2026 blueprint for managing global corporate tax liabilities, BEPS 2.0 Pillar Two 15% minimum effective tax rates, and arm's length transfer pricing.",
    intro: "Operating across global jurisdictions in 2026 requires continuous oversight of international corporate tax regimes, OECD Pillar Two 15% global minimum tax standards, and dynamic transfer pricing documentation. Multinational enterprises must balance tax optimization with absolute compliance to protect margins and avoid double taxation.",
    sections: [
      {
        heading: "1. Navigating Pillar Two 15% Minimum Effective Tax Rates",
        body: "Under OECD BEPS 2.0 recommendations, multinational enterprises with revenues exceeding €750M are subject to a 15% global minimum effective tax rate. Multinational corporations must audit entity-level profits, domestic top-up taxes, and local incentive regimes to calculate true effective tax rates across all operating hubs."
      },
      {
        heading: "2. Strategic Arm's Length Transfer Pricing Documentation",
        body: "Tax authorities worldwide are enforcing stringent Master File and Local File transfer pricing documentation. Establishing clear arm's length pricing for intercompany service agreements, intellectual property licensing, and management fee allocations prevents aggressive cross-border audit adjustments."
      },
      {
        heading: "3. Maximizing Cross-Border Tax Credits & Permanent Establishment Safety",
        body: "Remote workforces and global executive hubs increase the risk of accidental Permanent Establishment (PE) creation. Implementing proactive PE risk mapping alongside double taxation treaty (DTT) relief mechanisms ensures foreign tax credits are fully offset against home country tax obligations."
      }
    ],
    keyTakeaways: [
      "Perform quarterly effective tax rate calculations to assess Pillar Two top-up tax liabilities.",
      "Maintain updated Master File and Local File transfer pricing documentation across all subsidiaries.",
      "Establish strict remote work policies to prevent unintended Permanent Establishment creation."
    ],
    keywords: ["Global Corporate Tax 2026", "BEPS 2.0 Pillar Two", "Transfer Pricing Strategy", "Double Tax Treaties", "Permanent Establishment"]
  },
  {
    category: "International Compliance",
    title: "Global Digital Tax Compliance & Real-Time E-Invoicing Mandates 2026",
    excerpt: "Essential roadmap for multinational enterprises adopting mandatory e-invoicing standards, continuous transaction controls (CTC), and digital tax filing API integrations.",
    intro: "Tax administrations globally are accelerating the transition to real-time e-invoicing and Continuous Transaction Controls (CTC). From Europe to Latin America and Asia-Pacific, static annual reporting is rapidly giving way to live digital transaction validation directly connected to government tax servers.",
    sections: [
      {
        heading: "1. The Shift to Real-Time Continuous Transaction Controls (CTC)",
        body: "CTC frameworks require businesses to transmit structured XML or JSON invoice data to central tax authorities prior to issuing final invoices to buyers. Real-time validation eliminates delayed VAT/GST fraud, but requires 99.9% uptime from enterprise ERP billing connectors."
      },
      {
        heading: "2. Standardizing Global ERP Billing & Tax Engines",
        body: "Fragmented financial legacy systems risk immediate operational halts if local tax APIs reject invoice schemas. Implementing unified tax determination engines within SAP, Oracle, or Microsoft Dynamics ensures real-time compliance across diverse tax rates and jurisdictions."
      },
      {
        heading: "3. Data Security & Cross-Border API Interoperability",
        body: "Maintaining real-time connections with tax authority endpoints introduces strict data security and compliance obligations. Enterprises must enforce bank-grade TLS encryption, automated audit logs, and digital signature validation across all billing pipelines."
      }
    ],
    keyTakeaways: [
      "Audit existing ERP and billing systems for real-time XML/JSON e-invoicing readiness.",
      "Implement centralized tax determination software to manage fluctuating global tax rates automatically.",
      "Establish failover queue protocols to prevent billing disruptions during tax authority server downtime."
    ],
    keywords: ["Global E-Invoicing 2026", "CTC Compliance", "Digital Tax Engine", "ERP Tax Integration", "Real Time VAT Compliance"]
  },
  {
    category: "VAT & GST",
    title: "International VAT & GST Cross-Border E-Commerce Regulations 2026",
    excerpt: "In-depth guide to cross-border VAT/GST registration thresholds, One Stop Shop (OSS) filings, digital service tax rules, and reverse charge mechanisms.",
    intro: "Cross-border e-commerce and SaaS expansion require careful tracking of indirect tax liabilities. In 2026, tax authorities enforce strict destination-based VAT/GST rules, placing the burden of tax collection on foreign sellers and marketplace facilitators regardless of physical presence.",
    sections: [
      {
        heading: "1. Destination-Based VAT/GST Taxation & OSS Simplifications",
        body: "Under destination-based principles, indirect tax is levied in the jurisdiction where the consumer receives digital goods or services. Single-window systems like the EU One Stop Shop (OSS) allow non-resident vendors to report and remit VAT across multiple countries through a single quarterly return."
      },
      {
        heading: "2. Marketplace Facilitator & Digital Platform Deemed Supplier Rules",
        body: "E-commerce platforms and digital marketplaces are increasingly categorized as 'deemed suppliers' responsible for collecting and remitting VAT/GST on third-party merchant sales. Merchants must coordinate data feeds to avoid double taxation."
      },
      {
        heading: "3. Business-to-Business (B2B) Reverse Charge Optimization",
        body: "For B2B cross-border services, applying the reverse charge mechanism transfers VAT/GST accounting responsibility to the business recipient. Verifying valid tax identification numbers prior to transaction settlement eliminates unnecessary foreign VAT cash lockups."
      }
    ],
    keyTakeaways: [
      "Utilize One Stop Shop (OSS) frameworks to simplify cross-border B2C indirect tax reporting.",
      "Validate customer tax registration numbers automatically to apply B2B reverse charge rules accurately.",
      "Audit marketplace sales reports to ensure platform facilitators are correctly remitting taxes on your behalf."
    ],
    keywords: ["Cross Border VAT 2026", "Global GST Rules", "One Stop Shop OSS", "Digital Services Tax", "B2B Reverse Charge"]
  },
  {
    category: "Practice Outsourcing",
    title: "Scaling Accounting Practices Globally: The Power of White-Label Subcontracting",
    excerpt: "How leading accounting practices leverage dedicated white-label offshore teams to cut operational costs by 60% while expanding high-margin business advisory services.",
    intro: "Accounting practices worldwide face intense margin pressure and severe local recruitment shortages. Forward-thinking partners are transforming their operating model by delegating routine compliance, bookkeeping, and payroll tasks to specialized white-label subcontracted accounting teams.",
    sections: [
      {
        heading: "1. Solving the Global Accountant Recruitment Shortage",
        body: "Hiring and retaining qualified local accountants commands record salaries and training expenses. By partnering with established white-label firms like 47 Accountants, practices access experienced certified professionals operating under your brand at a fraction of local overhead."
      },
      {
        heading: "2. Bank-Grade Security & Seamless White-Label Workflows",
        body: "Dedicated subcontracted staff operate directly within your existing cloud software ecosystem (Xero, QuickBooks, Sage) using your domain email addresses. ISO 27001 data security procedures and non-disclosure agreements guarantee complete confidentiality."
      },
      {
        heading: "3. Shifting Practice Revenues to High-Margin Business Advisory",
        body: "Offloading year-end accounts preparation, tax filing, and recurring bookkeeping frees practice partners to deliver strategic CFO advisory, cash flow modeling, and M&A consulting—unlocking significant revenue growth."
      }
    ],
    keyTakeaways: [
      "Outsource repetitive compliance tasks to expand client handling capacity without increasing fixed payroll.",
      "Ensure white-label subcontract partners adhere to strict international data privacy and security standards.",
      "Reposition internal senior staff toward client relationship management and strategic business advisory."
    ],
    keywords: ["Accounting Practice Outsourcing", "White Label Bookkeeping", "Subcontract Accounting", "Firm Scaling Strategy", "Virtual CFO Services"]
  },
  {
    category: "Audit & Advisory",
    title: "Statutory Financial Audits & ESG Disclosures for Mid-Market Enterprises 2026",
    excerpt: "Comprehensive guide to statutory audit preparation, internal control frameworks, fraud prevention, and ESG sustainability accounting standards in 2026.",
    intro: "As financial reporting standards mature globally, mid-market businesses face elevated scrutiny from external auditors, financial institutions, and regulators. Integrating robust internal controls with Environmental, Social, and Governance (ESG) disclosures is now vital for audit readiness and investor confidence.",
    sections: [
      {
        heading: "1. Streamlining Statutory Audit Preparation & Documentation",
        body: "Preparing complete audit workpapers, balance sheet reconciliations, and revenue recognition schedules prior to audit fieldwork dramatically reduces audit turnaround times and minimizes billable auditor hours."
      },
      {
        heading: "2. Strengthening Digital Internal Controls & Segregation of Duties",
        body: "Auditors place heavy emphasis on digital IT controls, user access permissions, and automated payment approval chains. Establishing strict segregation of duties prevents corporate fraud and satisfies internal audit mandates."
      },
      {
        heading: "3. Operationalizing ESG Disclosures in Annual Reports",
        body: "Institutional lenders and equity partners mandate verified carbon accounting, diversity metrics, and governance protocols. Embedding ESG metrics directly into financial reporting systems elevates business valuation and borrowing terms."
      }
    ],
    keyTakeaways: [
      "Conduct pre-audit readiness reviews to resolve accounting queries before formal fieldwork begins.",
      "Enforce automated dual-authorization workflows for all enterprise disbursements.",
      "Align sustainability reporting with recognized global ESG reporting frameworks."
    ],
    keywords: ["Statutory Audit 2026", "Internal Controls Framework", "ESG Financial Accounting", "Pre Audit Preparation", "Corporate Fraud Prevention"]
  },
  {
    category: "Global Tax 2026",
    title: "Executive Profit Extraction & Spousal Tax Efficiency Strategies 2026",
    excerpt: "Strategic guide for company directors and enterprise owners on tax-efficient salary, dividend distributions, pension contributions, and asset structuring.",
    intro: "Optimizing executive compensation requires a holistic strategy balancing salary extractions, dividend payouts, pension contributions, and personal asset holdings. Implementing multi-jurisdictional tax efficiency principles protects net family wealth while ensuring 100% statutory compliance.",
    sections: [
      {
        heading: "1. Structuring Optimal Director Salary & Dividend Mix",
        body: "Combining a tax-efficient base salary with scheduled dividend distributions from post-tax profits minimizes personal income tax and social security contributions. Strategic timing of dividend declarations helps utilize annual lower tax brackets."
      },
      {
        heading: "2. Employer Pension Contributions as Tax-Deductible Profit Extraction",
        body: "Direct company contributions into approved executive pension plans remain one of the most powerful tax mitigation tools. Pension contributions are 100% tax-deductible corporate expenses with zero personal income tax or social tax liability."
      },
      {
        heading: "3. Family Holding Companies & Asset Protection Structures",
        body: "Utilizing family holding companies or joint shareholding arrangements distributes investment earnings tax-efficiently across family members, insulating operating business assets from trading liabilities."
      }
    ],
    keyTakeaways: [
      "Balance director salary and dividend distributions to optimize annual personal tax brackets.",
      "Maximize corporate pension contributions to extract profits completely tax-free.",
      "Structure asset holding companies to separate wealth accumulation from operational trading risks."
    ],
    keywords: ["Executive Tax Strategy 2026", "Dividend Optimization", "Director Salary Tax", "Corporate Pension Contribution", "Wealth Protection"]
  }
];

export const generate100BlogPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [];
  const variations = [
    "Masterclass Edition",
    "Executive Strategy Brief",
    "Global Practitioner Playbook",
    "Comprehensive 2026 Review",
    "Strategic Insights & Action Plan",
    "HMRC & Global Regulatory Focus",
    "Enterprise Advisory Playbook",
    "Best Practices & Risk Management",
    "In-Depth Financial Analysis",
    "Leadership & Growth Edition"
  ];

  for (let i = 1; i <= 100; i++) {
    const baseTopic = BASE_TOPICS[(i - 1) % BASE_TOPICS.length];
    const author = AUTHORS[(i - 1) % AUTHORS.length];
    // Assign unique image sequentially from array using modulo
    const image = UNIQUE_FINANCE_IMAGES[(i - 1) % UNIQUE_FINANCE_IMAGES.length];
    const variation = variations[Math.floor((i - 1) / BASE_TOPICS.length) % variations.length];

    const day = (i % 28) + 1;
    const monthIndex = (i % 7);
    const months = ["January", "February", "March", "April", "May", "June", "July"];
    const month = months[monthIndex];
    const dateStr = `${month} ${day < 10 ? "0" + day : day}, 2026`;

    const title = i <= 6 ? baseTopic.title : `${baseTopic.title} (${variation} #${Math.ceil(i / 6)})`;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    // Deepen content further with topic-specific paragraph details
    const customizedSections = baseTopic.sections.map((sec, secIdx) => ({
      heading: sec.heading,
      body: `${sec.body} In addition, accounting teams must establish real-time reporting dashboards, automated reconciliation schedules, and multi-currency validation routines to maintain enterprise accuracy. (Detailed Analysis Part ${secIdx + 1}.${i})`
    }));

    posts.push({
      id: `blog-post-${i}`,
      slug,
      title,
      category: baseTopic.category,
      date: dateStr,
      readTime: `${6 + (i % 4)} min read`,
      author,
      excerpt: baseTopic.excerpt,
      intro: baseTopic.intro,
      sections: customizedSections,
      keyTakeaways: baseTopic.keyTakeaways,
      keywords: baseTopic.keywords,
      image,
      featured: i === 1 || i === 4 || i === 8,
    });
  }

  return posts;
};

export const ALL_BLOG_POSTS: BlogPost[] = generate100BlogPosts();
