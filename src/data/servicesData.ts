import {
  BookOpen,
  Shield,
  BarChart3,
  Users,
  Receipt,
  Briefcase,
  LucideIcon,
  CheckCircle2,
  Clock,
  Zap,
  Award,
  FileText,
  PieChart,
  Building2,
  Lock,
  Globe,
  TrendingUp,
  DollarSign,
  Calculator,
} from "lucide-react";

export interface KeyMetric {
  label: string;
  value: string;
  desc: string;
}

export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface TargetAudience {
  title: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  shortDesc: string;
  heroDesc: string;
  heroImage: string;
  icon: LucideIcon;
  accentColor: string;
  softBg: string;
  keyMetrics: KeyMetric[];
  features: ServiceFeature[];
  targetAudience: TargetAudience[];
  process: ProcessStep[];
  benefits: ServiceBenefit[];
  faqs: ServiceFAQ[];
}

export const servicesData: Record<string, ServiceData> = {
  bookkeeping: {
    slug: "bookkeeping",
    title: "Managed Bookkeeping",
    subtitle: "Real-Time Ledger Precision & Flawless Reconciliations",
    badge: "Core Financial Operations",
    shortDesc: "Accurate ledgers, automated bank reconciliations & trial-balance ready books.",
    heroDesc:
      "Eliminate stress with 47 Accountants’ Managed Bookkeeping. We handle day-to-day transactions, expense tracking, multi-currency reconciliations, and cloud ledger setup—giving you complete financial clarity 365 days a year.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=800&fit=crop",
    icon: BookOpen,
    accentColor: "var(--color-gold-primary)",
    softBg: "var(--color-gold-soft)",
    keyMetrics: [
      { label: "Ledger Accuracy", value: "99.9%", desc: "Meticulous transaction categorization" },
      { label: "Time Saved", value: "20+ hrs/mo", desc: "For business founders & finance teams" },
      { label: "Closing Speed", value: "Monthly", desc: "Trial-balance ready management reports" },
    ],
    features: [
      {
        title: "Cloud Ledger Setup & Maintenance",
        desc: "Seamless integration and maintenance with top platforms like Xero, QuickBooks, and Dext for real-time tracking.",
      },
      {
        title: "Automated Bank & Card Reconciliations",
        desc: "Daily or weekly matching of accounts, payments, and credit statements to prevent discrepancies.",
      },
      {
        title: "Expense Categorisation & Receipt Capture",
        desc: "Digitised receipt processing ensuring every allowable expense is properly recorded for tax efficiency.",
      },
      {
        title: "Multi-Currency & Global Accounting",
        desc: "Expert foreign currency transaction recording for global e-commerce and international client billing.",
      },
      {
        title: "Accounts Payable & Receivable Tracking",
        desc: "Stay on top of vendor invoices, client bills, and overdue payments to maintain healthy cash flow.",
      },
      {
        title: "Monthly Financial Performance Reports",
        desc: "Clean, actionable profit & loss statements and balance sheets delivered straight to your inbox.",
      },
    ],
    targetAudience: [
      {
        title: "Growing SMEs & Startups",
        desc: "Businesses needing dedicated bookkeeping support without the overhead of full-time internal staff.",
      },
      {
        title: "E-Commerce & Digital Brands",
        desc: "Merchants with high transaction volumes across Shopify, Amazon, Stripe, and global payment gateways.",
      },
      {
        title: "Consultants & Agency Owners",
        desc: "Professionals who want to focus on client delivery while experts maintain spotless books.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & System Audit",
        desc: "We analyze your existing accounts, tools, and transaction flows to design a customized ledger workflow.",
      },
      {
        step: "02",
        title: "Seamless Integration",
        desc: "We connect your bank feeds, invoicing platforms, and receipt capture tools for automated data inflow.",
      },
      {
        step: "03",
        title: "Ongoing Ledger Management",
        desc: "Our dedicated bookkeepers categorize entries, reconcile accounts, and address anomalies continuously.",
      },
      {
        step: "04",
        title: "Monthly Closing & Review",
        desc: "You receive reconciled financial statements and an executive summary to evaluate your growth.",
      },
    ],
    benefits: [
      {
        title: "Zero Year-End Surprises",
        desc: "Because your books are reconciled monthly, year-end accounts are fast, seamless, and stress-free.",
      },
      {
        title: "Maximum Tax Efficiency",
        desc: "Every legitimate business expense is captured and categorized to minimize your final tax bill legally.",
      },
      {
        title: "Dedicated Account Manager",
        desc: "Direct access to a named senior bookkeeper who knows your business inside and out.",
      },
    ],
    faqs: [
      {
        question: "How often are my accounts updated?",
        answer:
          "We update and reconcile your ledgers on a weekly or monthly basis, depending on your plan and transaction volume.",
      },
      {
        question: "Can you work with my existing software?",
        answer:
          "Yes! We specialize in Xero, QuickBooks, FreeAgent, Sage, Dext, and can integrate custom ERPs.",
      },
      {
        question: "What happens if I am behind on previous months' bookkeeping?",
        answer:
          "We offer catch-up and cleanup bookkeeping services to bring your historic books up to date quickly and accurately.",
      },
    ],
  },

  "tax-compliance": {
    slug: "tax-compliance",
    title: "Tax & Compliance",
    subtitle: "Zero Penalty Assurance & Strategic Tax Minimization",
    badge: "HMRC & Statutory Filing",
    shortDesc: "Corporation Tax returns, Self-Assessments & year-end statutory compliance.",
    heroDesc:
      "Navigate complex UK tax regulations with complete peace of mind. 47 Accountants prepares and files your statutory accounts, Corporation Tax returns, and Self-Assessments while deploying legal strategies to optimize your tax liabilities.",
    heroImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop",
    icon: Shield,
    accentColor: "var(--color-navy)",
    softBg: "var(--color-navy-soft)",
    keyMetrics: [
      { label: "Compliance Rate", value: "100%", desc: "On-time filing record with HMRC" },
      { label: "Tax Savings", value: "Substantial", desc: "Through optimal allowances & relief claims" },
      { label: "Penalty Guard", value: "Guaranteed", desc: "Complete protection against filing penalties" },
    ],
    features: [
      {
        title: "Corporation Tax Return (CT600)",
        desc: "Calculation and filing of your company’s Corporation Tax return with precise claim adjustments.",
      },
      {
        title: "Year-End Statutory Accounts",
        desc: "Preparation of FRS 102/105 compliant statutory financial statements for Companies House.",
      },
      {
        title: "Director Self-Assessment Returns",
        desc: "Personal tax filings for company directors, dividend strategy, and foreign income reporting.",
      },
      {
        title: "Capital Allowances & Expense Optimization",
        desc: "Maximizing claims on equipment, assets, and operational investments to reduce tax exposure.",
      },
      {
        title: "HMRC Representation & Enquiries",
        desc: "Direct communication with HMRC on your behalf, handling compliance checks and audits.",
      },
      {
        title: "R&D Tax Relief & Patent Box",
        desc: "Identifying eligible innovation expenditure to claim valuable HMRC tax credits or refunds.",
      },
    ],
    targetAudience: [
      {
        title: "Limited Companies (UK & Foreign)",
        desc: "Directors who need compliant statutory filing and proactive corporate tax advice.",
      },
      {
        title: "High-Net-Worth Individuals",
        desc: "Investors and company executives needing strategic personal tax planning.",
      },
      {
        title: "Tech & Innovation Firms",
        desc: "Companies looking to unlock R&D tax credits and specialized innovation reliefs.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Data Collection & Year-End Prep",
        desc: "We extract finalized financial records and cross-verify trial balance metrics.",
      },
      {
        step: "02",
        title: "Tax Review & Optimization",
        desc: "Our chartered tax specialists analyze opportunities for allowable expenses, reliefs, and allowances.",
      },
      {
        step: "03",
        title: "Draft Submission & Client Approval",
        desc: "We send you full statutory accounts and CT600 drafts with clear summaries before filing.",
      },
      {
        step: "04",
        title: "HMRC & Companies House Filing",
        desc: "Instant digital submission with confirmation receipts and tax payment schedule guidance.",
      },
    ],
    benefits: [
      {
        title: "Proactive Tax Efficiency",
        desc: "We don’t just calculate tax—we structure your dividends, salaries, and claims legally to reduce what you owe.",
      },
      {
        title: "Zero Deadline Stress",
        desc: "We proactively manage statutory deadlines to eliminate late filing penalties and interest charges.",
      },
      {
        title: "Full HMRC Liaison",
        desc: "Never handle complex tax authority letters again; our experts represent you directly.",
      },
    ],
    faqs: [
      {
        question: "When is my Corporation Tax payment due?",
        answer:
          "Corporation Tax is normally due 9 months and 1 day after the end of your accounting period.",
      },
      {
        question: "What is included in Self-Assessment tax returns?",
        answer:
          "It includes salary, dividends, capital gains, rental income, and foreign income with relevant relief claims.",
      },
      {
        question: "Can you help if I receive an HMRC inquiry?",
        answer:
          "Yes, we provide full support and representation for HMRC enquiries and compliance checks.",
      },
    ],
  },

  "business-advisory": {
    slug: "business-advisory",
    title: "Business Advisory",
    subtitle: "Fractional CFO Leadership & Growth Strategy",
    badge: "Strategic Financial Partner",
    shortDesc: "Financial forecasting, cash flow modeling, KPI tracking & scaling mentorship.",
    heroDesc:
      "Transform financial data into your competitive advantage. Our Business Advisory and Fractional CFO services equip ambitious leaders with actionable forecasts, margin optimization, and strategic decision support.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    icon: BarChart3,
    accentColor: "var(--color-gold-primary)",
    softBg: "var(--color-gold-soft)",
    keyMetrics: [
      { label: "Profit Growth", value: "+25% Avg", desc: "Identified margin expansion opportunities" },
      { label: "Cash Clarity", value: "12 Months", desc: "Forward-looking rolling cash forecasts" },
      { label: "Executive Review", value: "Quarterly", desc: "Dedicated strategic board sessions" },
    ],
    features: [
      {
        title: "Cash Flow Forecasting & Runway Modeling",
        desc: "Dynamic multi-scenario cash models to project cash burn, runway, and funding requirements.",
      },
      {
        title: "Quarterly Management Accounts & Dashboards",
        desc: "Visual KPI dashboards detailing gross margins, customer acquisition costs, and EBITDA.",
      },
      {
        title: "Budgeting & Variance Analysis",
        desc: "Establishing realistic operational budgets and benchmarking actual performance against targets.",
      },
      {
        title: "Director Dividend & Renumeration Strategy",
        desc: "Optimal tax-efficient profit extraction plans tailored to company cash flow and growth goals.",
      },
      {
        title: "Pricing Strategy & Unit Economics",
        desc: "In-depth profitability analysis of products, service lines, and client cohorts.",
      },
      {
        title: "Fundraising & Investment Readiness",
        desc: "Financial deck preparation, valuation modeling, and due diligence support for investors.",
      },
    ],
    targetAudience: [
      {
        title: "Scaling Founders & CEOs",
        desc: "Leaders seeking strategic financial guidance without hiring a full-time £150k+ CFO.",
      },
      {
        title: "Venture-Backed & Fast-Growth Companies",
        desc: "Teams preparing for Series A/B funding, debt financing, or international expansion.",
      },
      {
        title: "Established Business Owners",
        desc: "Entrepreneurs looking to boost profit margins, streamline costs, or exit within 3–5 years.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Financial Health Diagnostic",
        desc: "We perform a deep analysis of your historical financials, unit economics, and operational overhead.",
      },
      {
        step: "02",
        title: "Strategic Model Creation",
        desc: "We build custom financial models, 3-statement forecasts, and dynamic cash runway dashboards.",
      },
      {
        step: "03",
        title: "Monthly/Quarterly Board Reviews",
        desc: "Regular strategy sessions to review variance analysis, optimize margins, and calibrate targets.",
      },
      {
        step: "04",
        title: "Execution & Capital Support",
        desc: "Ongoing guidance for major capital allocation decisions, pricing changes, or investor pitch decks.",
      },
    ],
    benefits: [
      {
        title: "Data-Driven Decision Making",
        desc: "Replace guesswork with real-time financial models tailored to your exact industry metrics.",
      },
      {
        title: "Cash Flow Protection",
        desc: "Identify potential cash crunches months in advance so you can act before it affects operations.",
      },
      {
        title: "Investor Confidence",
        desc: "Present clean, professional financial models that impress board members and prospective investors.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between accounting and business advisory?",
        answer:
          "Accounting focuses on historical record-keeping and compliance, while business advisory focuses on future strategy, cash forecasting, and profit expansion.",
      },
      {
        question: "How often will we meet?",
        answer:
          "Depending on your package, we conduct monthly or quarterly strategy calls with on-demand email and Slack support.",
      },
      {
        question: "Do you help with investor pitch decks?",
        answer:
          "Yes, we build financial projections, cap tables, and valuation models for investor decks.",
      },
    ],
  },

  "payroll-pensions": {
    slug: "payroll-pensions",
    title: "Payroll & Pensions",
    subtitle: "Automated Pay Runs, P60s & Pension Auto-Enrolment",
    badge: "Employer Compliance",
    shortDesc: "End-to-end PAYE processing, digital payslips, RTI filings & pension administration.",
    heroDesc:
      "Ensure your workforce is paid accurately and on time every single cycle. 47 Accountants manages your end-to-end payroll operations, PAYE calculations, workplace pension auto-enrolment, and HMRC Real Time Information (RTI) reporting.",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop",
    icon: Users,
    accentColor: "var(--color-navy)",
    softBg: "var(--color-navy-soft)",
    keyMetrics: [
      { label: "On-Time Pay Runs", value: "100%", desc: "Guaranteed accurate payday execution" },
      { label: "RTI Submissions", value: "Real-Time", desc: "Instant digital filing with HMRC" },
      { label: "Team Satisfaction", value: "High", desc: "Self-service digital payslip portals" },
    ],
    features: [
      {
        title: "Complete Monthly & Weekly PAYE Runs",
        desc: "Calculation of gross-to-net pay, national insurance contributions, student loans, and tax deductions.",
      },
      {
        title: "Digital Payslip Distribution",
        desc: "Secure online portals where employees can access paystubs, P60s, and P45s 24/7.",
      },
      {
        title: "HMRC Real Time Information (RTI) Filings",
        desc: "FPS and EPS submissions completed punctually every pay cycle to guarantee full HMRC compliance.",
      },
      {
        title: "Workplace Pension Auto-Enrolment",
        desc: "Assessment of eligible workers, declaration of compliance, and automatic upload to Nest, Smart, or Aviva.",
      },
      {
        title: "Statutory Payments & Absence Management",
        desc: "Handling Sick Pay (SSP), Maternity (SMP), Paternity (SPP), and holiday pay calculations.",
      },
      {
        title: "CIS (Construction Industry Scheme) Processing",
        desc: "Monthly subcontractor verification, deduction calculations, and CIS tax returns for construction firms.",
      },
    ],
    targetAudience: [
      {
        title: "Businesses with 1 to 100+ Staff",
        desc: "Employers wanting to automate payroll administration while maintaining strict privacy and compliance.",
      },
      {
        title: "Companies Hiring UK Remote Workers",
        desc: "International businesses setting up UK entities needing localized payroll management.",
      },
      {
        title: "Construction Subcontractor Managers",
        desc: "Firms needing specialized CIS deduction tracking and HMRC reporting.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Payroll Setup & Employee Import",
        desc: "We configure your pay schedules, tax codes, bank details, and pension provider integrations.",
      },
      {
        step: "02",
        title: "Data Submission & Calculation",
        desc: "Each cycle, send us hours, bonuses, or adjustments—we calculate deductions within hours.",
      },
      {
        step: "03",
        title: "Approval & Digital Payslips",
        desc: "We send payroll summaries for your approval before publishing secure employee payslips.",
      },
      {
        step: "04",
        title: "RTI & Pension Submission",
        desc: "We transmit RTI reports to HMRC and submit pension contributions directly to your pension scheme.",
      },
    ],
    benefits: [
      {
        title: "Flawless Payday Execution",
        desc: "Eliminate payroll miscalculations and keep your team motivated with punctual payouts.",
      },
      {
        title: "Complete Pension Peace of Mind",
        desc: "We manage mandatory re-enrolment and compliance communications to protect you from Pensions Regulator fines.",
      },
      {
        title: "Secure & GDPR Compliant",
        desc: "Employee financial details are managed in encrypted, cloud-secure systems.",
      },
    ],
    faqs: [
      {
        question: "How do employees receive their payslips?",
        answer:
          "Employees receive secure login access to an online portal where they can view and download current and past payslips.",
      },
      {
        question: "Which pension providers do you support?",
        answer:
          "We integrate with all major UK providers including NEST, Smart Pension, The People's Pension, and Aviva.",
      },
      {
        question: "Can you handle director-only payroll?",
        answer:
          "Yes, we set up tax-optimized director payroll to utilize personal tax allowances efficiently.",
      },
    ],
  },

  "vat-services": {
    slug: "vat-services",
    title: "VAT Services",
    subtitle: "Making Tax Digital (MTD) Compliance & Tax Recovery",
    badge: "HMRC MTD Filing",
    shortDesc: "Quarterly MTD returns, VAT scheme optimization & international trade VAT advice.",
    heroDesc:
      "Master the complexities of Value Added Tax with expert guidance. 47 Accountants handles VAT registrations, scheme evaluations, quarterly MTD submissions, and input tax recovery maximization for businesses of all scales.",
    heroImage:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop",
    icon: Receipt,
    accentColor: "var(--color-red, #dc2626)",
    softBg: "rgba(220, 38, 38, 0.1)",
    keyMetrics: [
      { label: "MTD Compliant", value: "100%", desc: "Direct HMRC digital API filing" },
      { label: "Recovery Rate", value: "Maximized", desc: "Full input tax recovery optimization" },
      { label: "Filing Accuracy", value: "Zero Errors", desc: "Rigorous pre-submission audits" },
    ],
    features: [
      {
        title: "VAT Registration & Voluntary Setup",
        desc: "Guiding businesses through compulsory threshold registration (£90k+) or beneficial voluntary setup.",
      },
      {
        title: "Making Tax Digital (MTD) Returns",
        desc: "Preparation, digital reconciliation, and submission of quarterly VAT returns directly to HMRC.",
      },
      {
        title: "Specialized Scheme Optimization",
        desc: "Evaluating Standard, Flat Rate, Cash Accounting, or Annual Accounting schemes for max cash savings.",
      },
      {
        title: "Cross-Border & E-Commerce VAT",
        desc: "Navigating One Stop Shop (OSS/IOSS), EC sales lists, import VAT Postponed Accounting, and reverse charges.",
      },
      {
        title: "Input Tax Reclaim Audits",
        desc: "Ensuring all allowable purchase VAT on fuel, assets, software, and services is reclaimed accurately.",
      },
      {
        title: "HMRC VAT Inspection Support",
        desc: "Professional defense and representation in the event of an HMRC VAT audit or compliance review.",
      },
    ],
    targetAudience: [
      {
        title: "VAT-Registered UK Businesses",
        desc: "Companies needing compliant, error-free quarterly MTD return submissions.",
      },
      {
        title: "Cross-Border E-Commerce Merchants",
        desc: "Sellers importing goods to the UK or selling to EU customers needing clear VAT structuring.",
      },
      {
        title: "Firms Nearing Registration Threshold",
        desc: "Growing businesses approaching the mandatory UK VAT threshold seeking timing advice.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Scheme & Threshold Review",
        desc: "We analyze your turnover, supplier costs, and client base to select the most tax-advantageous VAT scheme.",
      },
      {
        step: "02",
        title: "Digital Inflow & Verification",
        desc: "We connect digital software feeds and cross-check sales invoices and expense vouchers.",
      },
      {
        step: "03",
        title: "Quarterly Audit & Draft",
        desc: "Our VAT specialists audit input/output calculations and send you a detailed return summary.",
      },
      {
        step: "04",
        title: "MTD Submission & Payment Notice",
        desc: "We file directly with HMRC via MTD API and provide exact payment or refund instructions.",
      },
    ],
    benefits: [
      {
        title: "Maximize Reclaim Potential",
        desc: "We check every invoice so you never miss allowable input VAT reclaims.",
      },
      {
        title: "Scheme Cash Flow Advantages",
        desc: "Using Cash Accounting or Flat Rate schemes can boost liquidity and lower administrative overhead.",
      },
      {
        title: "Peace of Mind with HMRC",
        desc: "Digital MTD compliance eliminates manual spreadsheet errors and risk of HMRC penalties.",
      },
    ],
    faqs: [
      {
        question: "When do I need to register for VAT in the UK?",
        answer:
          "Mandatory registration is required if your taxable turnover exceeds £90,000 in a rolling 12-month period.",
      },
      {
        question: "What is Making Tax Digital (MTD)?",
        answer:
          "MTD requires VAT-registered businesses to keep digital records and submit returns using HMRC-compatible software.",
      },
      {
        question: "Can I claim VAT on expenses incurred before registration?",
        answer:
          "Yes! You can generally reclaim VAT on goods purchased up to 4 years prior and services up to 6 months prior.",
      },
    ],
  },

  "company-secretarial": {
    slug: "company-secretarial",
    title: "Company Secretarial",
    subtitle: "Impeccable Corporate Governance & Statutory Registers",
    badge: "Companies House Compliance",
    shortDesc: "Annual confirmation statements, share transfers, director changes & incorporation.",
    heroDesc:
      "Protect your business legal standing and maintain immaculate statutory records. 47 Accountants manages your Companies House obligations, confirmation statements, corporate restructuring, and statutory registers.",
    heroImage:
      "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?w=1200&h=800&fit=crop",
    icon: Briefcase,
    accentColor: "var(--color-gold-primary)",
    softBg: "var(--color-gold-soft)",
    keyMetrics: [
      { label: "Filing Reliability", value: "100%", desc: "On-time Companies House compliance" },
      { label: "Turnaround Time", value: "Same Day", desc: "For urgent company secretarial changes" },
      { label: "Record Integrity", value: "Pristine", desc: "Up-to-date statutory registers & PSC records" },
    ],
    features: [
      {
        title: "Annual Confirmation Statement Filing",
        desc: "Timely preparation and digital filing of your annual Companies House confirmation statement.",
      },
      {
        title: "Company Formation & Incorporation",
        desc: "Fast UK company registration including Memorandum, Articles of Association, and share structure setup.",
      },
      {
        title: "Share Allotments, Transfers & Restructuring",
        desc: "Drafting stock transfer forms, issuing share certificates, and updating registers of members.",
      },
      {
        title: "Director & PSC Register Management",
        desc: "Filing changes to officers, registered addresses, and People with Significant Control (PSC).",
      },
      {
        title: "Registered Office & Service Address",
        desc: "Prestigious London/UK address service to protect your personal home address privacy on public record.",
      },
      {
        title: "Board Minutes & Written Resolutions",
        desc: "Professional drafting of board meeting minutes, annual general meeting (AGM) notices, and director resolutions.",
      },
    ],
    targetAudience: [
      {
        title: "UK Limited Companies",
        desc: "Directors who want to ensure strict statutory compliance with Companies House.",
      },
      {
        title: "Overseas Investors & Subsidiaries",
        desc: "International parent entities requiring a registered UK office and company secretarial officer.",
      },
      {
        title: "Growing Equity-Backed Firms",
        desc: "Companies adding new investors, issuing share classes, or restructuring ownership.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Statutory Register Audit",
        desc: "We inspect your current Companies House records, officer details, and share allocations.",
      },
      {
        step: "02",
        title: "Drafting & Resolution Prep",
        desc: "We prepare all necessary filings, board minutes, share certificates, or confirmation details.",
      },
      {
        step: "03",
        title: "Director Sign-Off",
        desc: "You review and sign documents through our secure digital signature workflow.",
      },
      {
        step: "04",
        title: "Companies House Submission",
        desc: "Instant filing with Companies House with official confirmation certificates archived in your cloud portal.",
      },
    ],
    benefits: [
      {
        title: "Public Record Privacy Protection",
        desc: "Keep your personal residential address off public Companies House registers with our office address service.",
      },
      {
        title: "Avoid Company Strike-Off Risks",
        desc: "Prevent severe penalties or compulsory company dissolution by maintaining punctual statutory filings.",
      },
      {
        title: "Investor-Ready Corporate Books",
        desc: "Clean share registers and board resolution history simplify future funding rounds and bank applications.",
      },
    ],
    faqs: [
      {
        question: "What is a Confirmation Statement?",
        answer:
          "It is an annual filing with Companies House confirming that company information (officers, share capital, PSCs) is accurate.",
      },
      {
        question: "Why should I use a Registered Office Service?",
        answer:
          "It protects your personal privacy by preventing your residential address from appearing on public government registries.",
      },
      {
        question: "How fast can you form a UK Limited Company?",
        answer:
          "We can complete company incorporation with Companies House within 3 to 24 hours.",
      },
    ],
  },
};
