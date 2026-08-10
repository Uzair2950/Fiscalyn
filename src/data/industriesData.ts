import {
  ShoppingBag,
  Cpu,
  Briefcase,
  Building,
  Stethoscope,
  Coins,
  Coffee,
  Globe,
  Store,
  LucideIcon,
} from "lucide-react";

export interface IndustryData {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: LucideIcon;
  image: string;
  description: string;
  challenges: string[];
  solutions: string[];
  keyMetric: {
    value: string;
    label: string;
  };
  recommendedServices: Array<{
    name: string;
    path: string;
  }>;
}

export const industriesData: IndustryData[] = [
  {
    id: "ecommerce",
    title: "E-Commerce & Digital Retail",
    subtitle: "High-volume multi-channel reconciliation & global VAT compliance.",
    badge: "Digital Retail & D2C",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1000&h=700&fit=crop",
    description:
      "We partner with fast-scaling e-commerce brands across Shopify, Amazon, eBay, and WooCommerce. From COGS tracking to multi-currency payment gateway reconciliations (Stripe, PayPal) and OSS/IOSS international VAT, we ensure your books reflect accurate profit margins.",
    challenges: [
      "Reconciling complex multi-currency payment gateway payouts & fees",
      "Tracking inventory COGS & landed cost calculations accurately",
      "Navigating cross-border EU/US sales tax & UK VAT OSS/IOSS rules",
      "Managing cash flow between inventory orders and sales cycles",
    ],
    solutions: [
      "Automated platform integration (A2X, Xero, Dext)",
      "Real-time gross margin and SKU profitability analytics",
      "Quarterly cross-border VAT returns & international tax filing",
      "Inventory cash flow forecasting & working capital planning",
    ],
    keyMetric: {
      value: "99.8%",
      label: "Payout reconciliation accuracy across 500k+ monthly transactions",
    },
    recommendedServices: [
      { name: "Managed Bookkeeping", path: "/services/bookkeeping" },
      { name: "VAT Services", path: "/services/vat-services" },
    ],
  },
  {
    id: "retail-stores",
    title: "Retail Stores & Supermarkets",
    subtitle: "Multi-location POS sync, stock valuations & shopfloor shift payroll.",
    badge: "Physical Stores & Outlets",
    icon: Store,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&h=700&fit=crop",
    description:
      "Tailored for brick-and-mortar retail stores, boutiques, supermarkets, and franchise outlets. We synchronize daily POS till receipts (Square, Lightspeed, Clover) with your bank ledgers, audit stock shrinkage/inventory valuation, and manage shopfloor hourly staff payroll.",
    challenges: [
      "Reconciling daily till cash, card settlements & merchant fees",
      "Accurate year-end inventory valuation & shrinkage tracking",
      "Managing multi-site commercial leases and business rates",
      "Flexible hourly shift payroll & statutory auto-enrolment pensions",
    ],
    solutions: [
      "Automated daily POS-to-cloud ledger auto-syncing",
      "Real-time stock turnover & gross margin auditing",
      "Multi-store consolidated P&L & overhead analysis",
      "Flexible shopfloor staff payroll & auto-enrolment management",
    ],
    keyMetric: {
      value: "Daily",
      label: "Till receipt reconciliation for multi-location retail stores",
    },
    recommendedServices: [
      { name: "Managed Bookkeeping", path: "/services/bookkeeping" },
      { name: "Payroll & Pensions", path: "/services/payroll-pensions" },
    ],
  },
  {
    id: "restaurants-cafes",
    title: "Restaurants, Cafes & Hospitality",
    subtitle: "Daily POS sales, Tronc tip management & prime cost auditing.",
    badge: "Restaurants & Hospitality",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&h=700&fit=crop",
    description:
      "Built specifically for restaurants, cafes, bars, and food chains. We integrate daily EPOS sales (Zonal, TouchBistro, Lightspeed) with bank accounts, audit food & beverage gross margins, configure compliant Tronc schemes for employee tipping, and run weekly shift payroll.",
    challenges: [
      "Matching daily EPOS cash/card receipts against bank payouts",
      "Managing high staff turnover and Troncs/tip distribution rules",
      "Monitoring food/beverage waste & raw material COGS percentages",
      "Handling seasonal cash flow fluctuations and rent commitments",
    ],
    solutions: [
      "Daily EPOS-to-cloud ledger auto-syncing",
      "Tronc scheme setup & compliant tipping payroll administration",
      "Weekly prime cost reports (Labor % + Food COGS %)",
      "Landlord turnover rent calculations & cash flow buffers",
    ],
    keyMetric: {
      value: "Weekly",
      label: "Prime cost & gross margin reports for food & beverage venues",
    },
    recommendedServices: [
      { name: "Payroll & Pensions", path: "/services/payroll-pensions" },
      { name: "VAT Services", path: "/services/vat-services" },
    ],
  },
  {
    id: "tech-saas",
    title: "Technology & SaaS Startups",
    subtitle: "Recurring revenue recognition, R&D tax credits & investor runway.",
    badge: "Tech & Software",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&h=700&fit=crop",
    description:
      "From seed-stage to Series B+, we help tech founders scale efficiently. We implement SaaS-specific revenue recognition (MRR/ARR), optimize capital burn rates, build investor financial decks, and unlock substantial cash refunds through UK R&D Tax Credits.",
    challenges: [
      "Deferred revenue accounting under ASC 606 / IFRS 15 rules",
      "Managing monthly cash burn runway for investor reporting",
      "Maximizing eligible innovation claims for HMRC R&D Tax Relief",
      "Structuring international remote developer payroll & equity options",
    ],
    solutions: [
      "Automated subscription revenue modeling (Stripe/Chargebee to Xero)",
      "Dedicated R&D Tax Credit preparation and HMRC submission",
      "Fractional CFO cash runway dashboards & board deck prep",
      "Global payroll and director share option (EMI) advisory",
    ],
    keyMetric: {
      value: "£1.2M+",
      label: "In HMRC R&D tax credits claimed for tech clients",
    },
    recommendedServices: [
      { name: "Business Advisory", path: "/services/business-advisory" },
      { name: "Tax & Compliance", path: "/services/tax-compliance" },
    ],
  },
  {
    id: "professional-services",
    title: "Professional Services & Agencies",
    subtitle: "Partner draw optimization, billable utilization & client ledgers.",
    badge: "Agencies & Consultancies",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&h=700&fit=crop",
    description:
      "Designed for marketing agencies, management consultancies, law firms, and IT service providers. We streamline client billing, track project-level gross margins, optimize director dividend strategies, and keep cash flow predictable.",
    challenges: [
      "Tracking billable hour profitability & project variance",
      "Managing late client payments and credit control",
      "Tax-efficient dividend & salary distribution for equity partners",
      "Predicting retainer revenue vs. project pipeline cash flow",
    ],
    solutions: [
      "Project margin auditing & automated invoice reminders",
      "Partner remuneration & dividend optimization plans",
      "Quarterly management accounts & cash reserve strategies",
      "Full cloud ledger management (Harvest/WorkflowMax to Xero)",
    ],
    keyMetric: {
      value: "+18%",
      label: "Average increase in net agency profit margins",
    },
    recommendedServices: [
      { name: "Managed Bookkeeping", path: "/services/bookkeeping" },
      { name: "Business Advisory", path: "/services/business-advisory" },
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate & Construction",
    subtitle: "Property tax structuring, CIS returns & reverse charge VAT.",
    badge: "Property & Building",
    icon: Building,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&h=700&fit=crop",
    description:
      "Serving property developers, SPVs, buy-to-let landlords, and main contractors. We navigate complex Construction Industry Scheme (CIS) deductions, domestic reverse charge VAT, Section 24 interest restrictions, and Capital Gains Tax (CGT) planning.",
    challenges: [
      "Filing monthly CIS subcontractor returns without HMRC penalties",
      "Navigating UK Domestic Reverse Charge VAT rules",
      "Optimizing tax for property portfolios held in personal vs LTD SPVs",
      "Managing capital allowances on major commercial property builds",
    ],
    solutions: [
      "End-to-end CIS verification, deduction slips & HMRC filing",
      "Property SPV incorporation & Group structure planning",
      "Capital Gains Tax (CGT) calculation & 60-day reporting",
      "Development finance modeling & lender compliance packs",
    ],
    keyMetric: {
      value: "100%",
      label: "CIS compliance & zero late-filing penalty record",
    },
    recommendedServices: [
      { name: "Tax & Compliance", path: "/services/tax-compliance" },
      { name: "Company Secretarial", path: "/services/company-secretarial" },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare & Medical Practices",
    subtitle: "Specialized NHS/private billing, partner accounting & equipment leasing.",
    badge: "Health & Medical",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&h=700&fit=crop",
    description:
      "Supporting private medical practices, dental clinics, pharmacies, and locum doctors. We manage NHS income reconciliations, superannuation pension calculations, medical VAT exemptions, and capital allowance claims on high-tech medical machinery.",
    challenges: [
      "Reconciling complex NHS pension/superannuation contributions",
      "Managing exempt vs. standard VAT rules on medical supplies",
      "Tax planning for locum consultants & multi-doctor partnerships",
      "Structuring capital allowances for expensive clinical equipment",
    ],
    solutions: [
      "Specialized medical bookkeeping & partner profit share distribution",
      "NHS Superannuation reporting & pension tax advice",
      "Equipment lease tax structuring & annual investment allowance claims",
      "Year-end statutory accounts tailored for medical bodies",
    ],
    keyMetric: {
      value: "150+",
      label: "Medical professionals & clinics supported in the UK",
    },
    recommendedServices: [
      { name: "Payroll & Pensions", path: "/services/payroll-pensions" },
      { name: "Tax & Compliance", path: "/services/tax-compliance" },
    ],
  },
  {
    id: "crypto-web3",
    title: "Crypto & Web3 Businesses",
    subtitle: "Digital asset taxation, exchange reconciliation & Web3 treasury.",
    badge: "Web3 & Digital Assets",
    icon: Coins,
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=1000&h=700&fit=crop",
    description:
      "Pioneering accounting for Web3 startups, DAO founders, crypto funds, and blockchain protocols. We convert on-chain transactions into GAAP/IFRS financial statements, manage crypto payroll, and optimize HMRC crypto capital gains tax exposure.",
    challenges: [
      "Reconciling thousands of micro on-chain transactions & DEX swaps",
      "Valuing volatile digital asset inventory at fiscal year-end",
      "Navigating HMRC guidance on staking, liquidity pools & mining tax",
      "Executing compliant crypto payroll and token distribution grants",
    ],
    solutions: [
      "Integration with crypto accounting tools (Cryptio, Cointracker to Xero)",
      "HMRC crypto tax reporting & Corporation Tax asset classification",
      "Tokenomics treasury accounting & fiat conversion tracking",
      "DAO treasury audit preparation & statutory compliance",
    ],
    keyMetric: {
      value: "$50M+",
      label: "In on-chain transaction volume audited & reconciled",
    },
    recommendedServices: [
      { name: "Managed Bookkeeping", path: "/services/bookkeeping" },
      { name: "Business Advisory", path: "/services/business-advisory" },
    ],
  },
  {
    id: "global-sub-entities",
    title: "Global Enterprises & Subsidiaries",
    subtitle: "Cross-border entity setup, intercompany transfer pricing & global consolidation.",
    badge: "Cross-Border Corporate",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=700&fit=crop",
    description:
      "We partner with multinational corporations, international parent entities, and fast-expanding global groups. We manage multi-jurisdiction financial consolidation, cross-border corporate secretarial compliance, transfer pricing documentation, and multi-currency reporting back to global HQ.",
    challenges: [
      "Navigating complex cross-border statutory filing compliance across multiple jurisdictions",
      "Harmonizing local financial statements with US GAAP, IFRS, or parent group reporting standards",
      "Establishing arm's-length intercompany transfer pricing policies and documentation",
      "Managing foreign currency exchange risks, intercompany loans, and withholding taxes",
    ],
    solutions: [
      "End-to-end multi-country entity formation, secretarial compliance & local governance",
      "Unified monthly consolidated management reporting packs tailored for global HQ",
      "Global transfer pricing agreement drafting & international tax authority defense",
      "Cross-border VAT/GST registration, double tax treaty optimization & international filings",
    ],
    keyMetric: {
      value: "30+",
      label: "Countries represented across our global corporate client base",
    },
    recommendedServices: [
      { name: "Company Secretarial", path: "/services/company-secretarial" },
      { name: "Business Advisory", path: "/services/business-advisory" },
    ],
  },
];
