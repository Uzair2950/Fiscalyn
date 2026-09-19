import {
  Users2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Lock,
  FileCheck,
  Sparkles,
  Award,
  LucideIcon,
} from "lucide-react";

export interface Metric {
  value: string;
  label: string;
  desc: string;
}

export interface ValuePillar {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface EngagementFAQ {
  question: string;
  answer: string;
}

export interface EngagementPageData {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  heroDesc: string;
  heroImage: string;
  metrics: Metric[];
  pillars: ValuePillar[];
  process: ProcessStep[];
  capabilities?: string[];
  faqs: EngagementFAQ[];
}

export const engagementData: Record<string, EngagementPageData> = {
  "for-businesses": {
    slug: "for-businesses",
    title: "Full-Service Accounting Built for Growing Businesses",
    subtitle: "Replace Accounting Stress with Real-Time Clarity & Guaranteed Compliance",
    badge: "Direct Business Solutions",
    heroDesc:
      "Whether you are an ambitious startup, an established SME, or a fast-scaling global brand—47 Accountants handles your day-to-day bookkeeping, VAT, payroll, statutory accounts, and corporate tax. Experience transparent fixed pricing with a dedicated ACCA accountant in your corner.",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop",
    metrics: [
      {
        value: "99.9%",
        label: "HMRC On-Time Filing",
        desc: "Punctual submissions with zero late-filing penalties guaranteed.",
      },
      {
        value: "2-3 Days",
        label: "Seamless Onboarding",
        desc: "Complete hassle-free transition from your existing accountant.",
      },
      {
        value: "30+ Hrs/Mo",
        label: "Time Saved",
        desc: "Focus on growing your revenue while experts manage the ledgers.",
      },
    ],
    pillars: [
      {
        icon: Zap,
        title: "Hassle-Free Accountant Switch",
        desc: "We contact your previous accountant, request professional clearance, and transfer your data without any operational downtime for your business.",
      },
      {
        icon: Users2,
        title: "Dedicated Senior Accountant",
        desc: "No call centers or generic ticketing systems. You get a named, qualified senior accountant who understands your specific industry and goals.",
      },
      {
        icon: Award,
        title: "Transparent Fixed Monthly Pricing",
        desc: "Enjoy agreed-upon monthly fees with zero surprise invoices, hidden setup charges, or unexpected end-of-year billing.",
      },
      {
        icon: ShieldCheck,
        title: "Proactive Tax Minimization",
        desc: "We don't just record history—we actively analyze legal opportunities to structure salary/dividends, capital allowances, and allowable expenses.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Free Financial Health Check",
        desc: "We review your current accounting software, tax filings, and ledger structures to pinpoint immediate tax savings and process improvements.",
      },
      {
        step: "02",
        title: "Zero-Downtime Professional Transfer",
        desc: "Our team handles professional clearance with your previous accountant and migrates your historical data smoothly within 48-72 hours.",
      },
      {
        step: "03",
        title: "Software Optimization & Account Assignment",
        desc: "We configure your cloud ledger (Xero, QuickBooks, Dext) and assign your dedicated senior accountant to manage ongoing operations.",
      },
      {
        step: "04",
        title: "Ongoing Monthly Management & Tax Advisory",
        desc: "Receive monthly reconciled accounts, proactive tax alerts, and scheduled strategy sessions to accelerate your business growth.",
      },
    ],
    capabilities: [
      "Managed Day-to-Day Bookkeeping & Bank Reconciliations",
      "Corporation Tax (CT600) & Self-Assessment Returns",
      "Quarterly Making Tax Digital (MTD) VAT Submissions",
      "Weekly/Monthly PAYE Payroll & Auto-Enrolment Pensions",
      "Year-End Statutory Accounts for Companies House",
      "Fractional CFO Advisory & Cash Runway Forecasting",
    ],
    faqs: [
      {
        question: "How difficult is it to switch accountants to 47 Accountants?",
        answer:
          "It is completely effortless. You simply notify your current accountant that you are moving, and our team handles 100% of the administrative transfer, professional clearance letters, and historic data migration.",
      },
      {
        question: "Will there be any downtime in my business accounting during the move?",
        answer:
          "Zero downtime. We maintain your existing software feeds and historical data uninterrupted while taking over ongoing management in the background.",
      },
      {
        question: "Are your monthly accounting packages customizable?",
        answer:
          "Yes! Whether you only need year-end accounts and tax returns or full daily bookkeeping, payroll, and fractional CFO advisory, we tailor our fixed monthly package to your exact scope.",
      },
    ],
  },

  "outsource-workload": {
    slug: "outsource-workload",
    title: "White-Label Accounting & Workload Delegation for Firms",
    subtitle: "Expand Your Practice Capacity & Lower Operational Overhead by Up to 50%",
    badge: "Firms & Practice Delegation",
    heroDesc:
      "Designed for CPA firms, accountancy practices, tax consultants, and corporate finance teams seeking scalable back-office capacity. Delegate your excess bookkeeping, year-end accounts preparation, tax returns, and payroll overflow to 47 Accountants under strict 100% white-label confidentiality.",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
    metrics: [
      {
        value: "50%",
        label: "Cost Savings",
        desc: "Cut operational overhead vs hiring internal full-time staff.",
      },
      {
        value: "24-48 Hrs",
        label: "Fast Turnaround",
        desc: "Punctual file delivery to meet client statutory deadlines.",
      },
      {
        value: "100%",
        label: "White-Label Confidentiality",
        desc: "Strict non-disclosure agreements & zero direct client contact.",
      },
    ],
    pillars: [
      {
        icon: Lock,
        title: "Strict White-Label & NDA Protection",
        desc: "We work strictly behind the scenes under your firm's brand. We sign binding non-disclosure & non-compete agreements—we never contact your clients.",
      },
      {
        icon: TrendingUp,
        title: "Elastic Seasonal Capacity",
        desc: "Scale your capacity seamlessly during tax season (Jan/Jan-Apr peak) without taking on permanent salary liabilities during slower quarters.",
      },
      {
        icon: Sparkles,
        title: "ACCA & CPA Qualified Pool",
        desc: "Access senior, experienced accountants trained in UK FRS 102/105 GAAP, US GAAP, HMRC compliance, and international reporting standards.",
      },
      {
        icon: FileCheck,
        title: "2-Tier Quality Control Review",
        desc: "Every completed tax computation, ledger reconciliation, and statutory account pack undergoes a thorough senior manager audit before delivery back to your practice.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Partnership Agreement & NDA Sign-Off",
        desc: "We establish a binding non-disclosure, non-compete, and service level agreement (SLA) to guarantee total data privacy and brand protection.",
      },
      {
        step: "02",
        title: "Workload Allocation & Workflow Integration",
        desc: "Send us raw client files, software logins (Xero, QuickBooks, Drake, CCH), or paper workpapers via secure cloud drives or dedicated partner portals.",
      },
      {
        step: "03",
        title: "Execution & Senior Manager Audit",
        desc: "Our qualified accounting team prepares complete working paper files, tax computations, and reconciliations with a rigorous internal quality review.",
      },
      {
        step: "04",
        title: "Review-Ready White-Label Delivery",
        desc: "Receive finalized, review-ready accounting packages formatted to your practice standards, ready for partner sign-off and client delivery.",
      },
    ],
    capabilities: [
      "White-Label Year-End Statutory Accounts & Tax Prep (CT600 / 1120)",
      "Ongoing & Historic Catch-Up Bookkeeping Delegation",
      "VAT Return Reconciliations & MTD Submissions",
      "Payroll & Pension Auto-Enrolment Back-Office Processing",
      "Management Accounts & Custom Financial Dashboards",
      "Audit Support Workpaper Preparation & Asset Schedules",
    ],
    faqs: [
      {
        question: "Will 47 Accountants ever contact our clients directly?",
        answer:
          "Never. We operate as a 100% white-label back-office extension of your practice. All communication takes place strictly between our senior team and your firm's managers.",
      },
      {
        question: "How do you handle data security and GDPR compliance for partner firms?",
        answer:
          "We enforce enterprise-grade 256-bit encryption, strict access controls, multi-factor authentication, and full GDPR compliance. Your partner files and client records are stored on isolated, encrypted enterprise servers.",
      },
      {
        question: "Can we use 47 Accountants on a project-by-project or seasonal basis?",
        answer:
          "Yes! We offer flexible engagement models: pay-per-job for seasonal overflow (e.g. self-assessment season), fixed monthly FTE arrangements, or hourly batch delegation.",
      },
    ],
  },
};
