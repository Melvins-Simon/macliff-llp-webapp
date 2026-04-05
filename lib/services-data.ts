import {
  ShieldCheck,
  Receipt,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Users,
  GraduationCap,
  CreditCard,
  LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  img: string;
  images: string[]; // carousel max 3, first is the main img
  gradient: string;
  quote: string;
  intro: string;
  sections: { heading: string; body: string }[];
  bullets?: { heading: string; items: string[] }[];
}

const NAVY = "oklch(0.30 0.09 240)";
const GOLD = "oklch(0.72 0.12 60)";

export const services: Service[] = [
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    short:
      "Strong financial reporting procedures and controls are essential. We focus on performing excellent audits that assist your company to comply with legal obligations.",
    icon: ShieldCheck,
    img: "/imgs/services/audit.webp",
    images: ["/imgs/services/audit.webp", "/imgs/services/audit-2.webp"],
    gradient: `linear-gradient(135deg, ${NAVY}, color-mix(in oklch, ${NAVY} 60%, oklch(0.45 0.15 270)))`,
    quote:
      "Unlocking Financial Clarity. Your Financial Companion, Reliable Beyond Measure.",
    intro:
      "With quality at the core of our operations, we leverage technology to deliver confidence across a variety of audit services that meet changing stakeholder expectations and business objectives. We take a comprehensive approach and collaborate with you to manage risk, improve business operations, and provide insight you need to make wise decisions.",
    sections: [
      {
        heading: "Financial Integrity",
        body: "There is nothing more important than an unwavering trust between a business and its stakeholders. Meeting the growing expectations of your stakeholders in the quickly changing financial services sector of today requires quality, transparency, and innovation. We go beyond the financials by blending our in-depth assurance experience with data-driven insights to establish the confidence necessary for business growth.",
      },
    ],
    bullets: [
      {
        heading: "Our Audit & Assurance Services",
        items: [
          "Mandatory (Statutory) Audit",
          "Non-statutory Audits",
          "Financial Statement Compilation",
          "Training and Implementing IFRS",
          "Accounting Advice",
          "Assurance of Internal Controls",
          "Due Diligence and Capacity Evaluations",
          "Audits of Expenditures",
        ],
      },
    ],
  },
  {
    slug: "tax-consulting",
    title: "Tax Consulting",
    short:
      "We will guide you through a continuously changing tax environment. We will help you resolve tax-related difficulties, and guarantee that everything is in order.",
    icon: Receipt,
    img: "/imgs/services/tax.webp",
    images: ["/imgs/services/tax.webp", "/imgs/services/tax-2.webp"],
    gradient: `linear-gradient(135deg, color-mix(in oklch, ${NAVY} 80%, ${GOLD}), ${GOLD})`,
    quote:
      "Unlocking Financial Clarity. Your Financial Companion, Reliable Beyond Measure.",
    intro:
      "The way the tax function is being profoundly altered by global influences; tax advisors need to become more strategic. Globalization, protectionism, technological advancements, regulatory changes, and regional disturbances have all made tax revisions necessary.",
    sections: [
      {
        heading: "Tax Solutions Tailored for You",
        body: "Our tax consultants can assist your organization become more agile by sharing technology, creative ideas, and our experience. With confidence, they will guide your company through complexity. We will provide you with efficient tax planning and guidance that is customized to your unique requirements.",
      },
      {
        heading: "Tax Planning",
        body: "Businesses are more interested than ever in reducing expenses and boosting productivity in order to boost profitability. One of the costs that businesses must pay is taxes. In order to realize substantial tax savings, enhance cash flow, boost working capital, and lower the risk of tax non-compliance, our skilled tax team will assist you to incorporate tax planning into your business operations.",
      },
    ],
    bullets: [
      {
        heading: "Our Tax Services Include",
        items: [
          "Tax Advisory",
          "Tax Compliance and Reporting",
          "Tax Legislation",
          "Payroll Tax",
          "Workforce, Technology, and Analytics",
          "Reward, Employment Tax, and Compensation Plans",
          "Legal Business Services",
          "Sustainability Tax Services",
          "Tax Health Check Services",
          "Transfer Pricing Services",
          "Tax Dispute Resolution",
        ],
      },
    ],
  },
  {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    short:
      "We accompany you on your path to success. Our accountants have extensive knowledge of a wide range of business enterprises.",
    icon: BookOpen,
    img: "/imgs/services/accounting.webp",
    images: [
      "/imgs/services/accounting.webp",
      "/imgs/services/accounting-2.webp",
    ],
    gradient: `linear-gradient(135deg, oklch(0.25 0.08 240), oklch(0.40 0.12 240))`,
    quote:
      "Unlocking Financial Clarity. Your Financial Companion, Reliable Beyond Measure.",
    intro:
      "We provide all accountancy and bookkeeping services to suit every business from small businesses to large corporations. We take pride in the fact that we work closely with you and your business to make sure you receive the best outcome for your accounts in a timely, professional and friendly manner.",
    sections: [
      {
        heading: "Benefits of Our Accounting Services",
        body: "Optimize your savings, eliminate errors, boost flexibility, give scalability priority, gather vital information, maintain compliance, gain expert knowledge, and focus on your business.",
      },
      {
        heading: "Our Promise",
        body: "We will partner and accompany you on your path to success. Working with us entails working with a business advisor in addition to an accountant. By carrying out cash flow planning, determining financial needs, and predicting expenditures using budget and projection, we will help you to make better-informed and big-picture decisions.",
      },
    ],
    bullets: [
      {
        heading: "Accounting & Bookkeeping Services",
        items: [
          "Maintain proper books and records using computerized accounting systems",
          "Prepare and submit VAT returns on behalf of clients",
          "Prepare management reports including budgets and cash flow forecasts",
          "Prepare debtors and creditors statements and aging analysis",
          "Undertake monthly bank and creditor reconciliations",
          "Prepare financial statements in accordance with IFRS",
          "Computerize accounting functions of a business",
          "Train accounting staff in various accounting software",
          "Advice on accounting systems selection",
        ],
      },
    ],
  },
  {
    slug: "business-risk",
    title: "Business Risk",
    short:
      "We will help you feel secure to manage, to grow and win the game in a rapidly changing and very competitive business environment.",
    icon: AlertTriangle,
    img: "/imgs/services/risk.webp",
    images: ["/imgs/services/risk.webp", "/imgs/services/risk-2.webp"],
    gradient: `linear-gradient(135deg, oklch(0.28 0.10 250), color-mix(in oklch, ${NAVY} 70%, oklch(0.55 0.18 270)))`,
    quote:
      "Unlocking Financial Clarity. Your Financial Companion, Reliable Beyond Measure.",
    intro:
      "Are you spending money on controls that are inefficient or excessive? MACLIFF will partner with you to ensure that processes, systems, and controls continue to protect the value of the business. Our process risk and control service delivers procedure manuals, training programs and reinforces the corporate view.",
    sections: [
      {
        heading: "Risk Assessment",
        body: "Our team has vast experience in risk assessment and control. We use a rigorous approach to assess business processes and identify the inherent risks within the key processes, and the adequacy and efficiency of your existing controls in mitigating those risks.",
      },
      {
        heading: "Strategic Risk & Planning",
        body: "We provide customized strategic management planning for every kind of organization. Strategic risks relate to issues that could affect your company's ability to execute against its strategic objectives and reach its business goals.",
      },
    ],
    bullets: [
      {
        heading: "Our Business Risk Services",
        items: [
          "Strategic Risk & Planning",
          "Forensics and Investigations",
          "Financial Risk Advisory",
          "Operational Risk Advisory",
          "Compliance Risk Advisory",
          "Risk & Control Reviews",
          "Procedure Manuals Development",
        ],
      },
    ],
  },
  {
    slug: "advisory-services",
    title: "Advisory Services",
    short:
      "We help you improve your operations and financial outcomes by offering expert advice and strategy development for your business.",
    icon: Lightbulb,
    img: "/imgs/services/advisory.webp",
    images: ["/imgs/services/advisory.webp", "/imgs/services/advisory-2.webp"],
    gradient: `linear-gradient(135deg, color-mix(in oklch, ${NAVY} 85%, ${GOLD}), color-mix(in oklch, ${GOLD} 70%, ${NAVY}))`,
    quote:
      "Unlocking Financial Clarity. Your Financial Companion, Reliable Beyond Measure.",
    intro:
      "In today's rapidly changing marketplace, agile business advisers can help you thrive. Our Financial Advisory team delivers end-to-end advisory solutions that can unlock and preserve value in mergers & acquisitions, restructuring, investigations, and disputes.",
    sections: [
      {
        heading: "Expert and Timely Advice",
        body: "Our financial consulting team provides comprehensive advisory services that can maintain and unlock value in investigations, disputes, mergers and acquisitions, and restructuring. We can work collaboratively with you to create momentum throughout critical times for your company.",
      },
      {
        heading: "Mergers and Acquisitions",
        body: "There isn't much time for second-guessing when you combine firms through mergers and acquisitions. Our skilled experts will help you in building a more robust future for your company whether you are a seller or a buyer.",
      },
    ],
    bullets: [
      {
        heading: "Our Advisory Services",
        items: [
          "Mergers and Acquisitions",
          "Restructuring and Performance Improvement",
          "Tax Planning and Regulation",
          "Audit and Assurance Advisory",
          "Company Law Advisory",
          "Exchange Control Regulations",
          "Employee Benefit Regulations",
          "Sustainability Advisory",
        ],
      },
    ],
  },
  {
    slug: "corporate-finance",
    title: "Corporate Finance",
    short:
      "We will support your success by guiding you through change, and support you in taking the right risks to open up new growth opportunities.",
    icon: TrendingUp,
    img: "/imgs/services/finance.webp",
    images: ["/imgs/services/finance.webp", "/imgs/services/finance-2.webp"],
    gradient: `linear-gradient(135deg, oklch(0.22 0.07 240), oklch(0.38 0.11 250))`,
    quote:
      "Unlocking Financial Clarity. Your Financial Companion, Reliable Beyond Measure.",
    intro:
      "Rapid global change is having an influence on firms in many ways, including higher costs. Robust responses are necessary in times of change. We will support your success by guiding you through change so that your business may continue to operate favourably and grow.",
    sections: [
      {
        heading: "Your Partner",
        body: "With MaCliff as your partner, we will help you to make the best decisions with regard to selecting the appropriate markets to operate in, and help change the conventional planning process by redistributing management, funds, and personnel to new sectors.",
      },
      {
        heading: "Business Valuation",
        body: "Every corporate agenda places a strong priority on value. By analyzing the value drivers and offering advice on how value can be preserved or improved, our valuation advisory team considers not just the asset's strategic fit but also how value may be increased.",
      },
    ],
    bullets: [
      {
        heading: "Corporate Finance Services",
        items: [
          "Business Valuation",
          "Transaction Advisory",
          "Financial Due Diligence",
          "Financial Projections",
          "Mergers & Acquisitions Support",
          "Capital Raising Advisory",
          "Restructuring Advisory",
        ],
      },
    ],
  },
  {
    slug: "hr-consulting",
    title: "HR Consulting",
    short:
      "We offer advice, tailored solutions, and support you in various areas of human resources management to enhance HR policies and procedures.",
    icon: Users,
    img: "/imgs/services/hr.webp",
    images: ["/imgs/services/hr.webp", "/imgs/services/hr-2.webp"],
    gradient: `linear-gradient(135deg, ${NAVY}, color-mix(in oklch, ${NAVY} 75%, ${GOLD}))`,
    quote:
      "Unlocking Financial Clarity. Your Financial Companion, Reliable Beyond Measure.",
    intro:
      "Our human resource (HR) consulting includes implementation and advisory services pertaining to the HR function and the management of an organization's human capital. The spectrum of services includes everything from general work on human capital strategy to designing and implementing a framework for pay and benefits.",
    sections: [
      {
        heading: "Enhance Your HR Policies",
        body: "We will assist you to enhance your policies and procedures when you contract with us to handle your HR needs, which will maximize productivity for both the employer and the employee.",
      },
      {
        heading: "Outsourced Labour Management",
        body: "We make sure that your business practices and interactions with workers comply with labor regulations. We will assist you in creating the computer use, non-discrimination, and sexual harassment rules that are essential for employee management.",
      },
    ],
    bullets: [
      {
        heading: "Our HR Services",
        items: [
          "HR Strategy and Advisory",
          "Outsourced Labour Management",
          "Restructuring and Organizational Review",
          "Pay and Benefits Framework Design",
          "HR Policy Development",
          "Recruitment Support",
          "Employee Relations Advisory",
          "HR Compliance Reviews",
        ],
      },
    ],
  },
  {
    slug: "training-capacity",
    title: "Training & Capacity Building",
    short:
      "Our team will work with you to solve your most challenging issues by combining creativity and industry experience to impart financial knowledge.",
    icon: GraduationCap,
    img: "/imgs/services/training.webp",
    images: ["/imgs/services/training.webp", "/imgs/services/training-2.webp"],
    gradient: `linear-gradient(135deg, color-mix(in oklch, ${GOLD} 40%, ${NAVY}), ${NAVY})`,
    quote:
      "Unlocking Financial Clarity. Your Financial Companion, Reliable Beyond Measure.",
    intro:
      "Capacity building and training are critical components for the success and sustainability of any organization. With strong financial management capacity, a business becomes more able to control its own affairs, and without it, the future is often uncertain.",
    sections: [
      {
        heading: "Learn and Grow",
        body: "At MACLIFF, we perceive every obstacle as a chance for improvement and growth. Our team will work collaboratively with you to solve your most challenging issues by combining creativity and knowledge. Our range of services, together with our extensive industry and business knowledge, will help your business to flourish.",
      },
      {
        heading: "Capacity Building",
        body: "We conduct comprehensive needs assessments to identify specific capacity gaps, integrate capacity-building goals into strategic plans, provide financial management training, conduct governance and compliance training, and provide technology adoption training.",
      },
    ],
    bullets: [
      {
        heading: "Training & Capacity Building Services",
        items: [
          "Needs Assessment",
          "Strategic Planning Integration",
          "Financial Management Training",
          "Governance and Compliance Training",
          "Technology Adoption Training",
          "IFRS Training",
          "Accounting Software Training",
          "Custom Corporate Training Programmes",
        ],
      },
    ],
  },
  {
    slug: "payroll-services",
    title: "Payroll Services",
    short:
      "We provide end-to-end payroll outsourcing services, with the goal of providing a secure, accurate, and reasonably priced data processing platform.",
    icon: CreditCard,
    img: "/imgs/services/payroll.webp",
    images: ["/imgs/services/payroll.webp", "/imgs/services/payroll-2.webp"],
    gradient: `linear-gradient(135deg, oklch(0.30 0.09 240), color-mix(in oklch, ${GOLD} 30%, ${NAVY}))`,
    quote:
      "Unlocking Financial Clarity. Your Financial Companion, Reliable Beyond Measure.",
    intro:
      "We provide end-to-end payroll outsourcing services using a cutting-edge payroll system. The primary goal of our payroll compliance solutions is to provide a secure, accurate, and reasonably priced data processing platform that complies with all relevant laws and regulations with an emphasis on managing confidentiality and data protection.",
    sections: [
      {
        heading: "Stay Compliant",
        body: "Our payroll solution is designed to ensure accurate employee and compensation data is recorded, payroll processing is done on time, compliance with Kenyan laws and regulations is maintained, and data privacy and confidentiality are preserved.",
      },
    ],
    bullets: [
      {
        heading: "Comprehensive Payroll Services",
        items: [
          "Advice on Kenyan labour and tax laws",
          "Staff recruitment support",
          "Company and employee registration with tax and statutory authorities",
          "Initial payroll set up",
          "Pay computations",
          "Generation of payroll reports",
          "Payment distribution to employees",
          "Statutory deductions payments and filings (PAYE, NHIF, NSSF)",
          "Generation and distribution of pay slips",
          "Seconding of experienced finance staff",
        ],
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
