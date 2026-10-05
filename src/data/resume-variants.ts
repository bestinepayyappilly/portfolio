import { DATA } from "@/data/resume";

/**
 * Three positionings of the same career. Nothing here invents experience — each
 * variant reorders the companies, reframes the summary, re-prioritises the
 * skill groups, and picks the projects that support the role being applied for.
 */
export type VariantSlug = "mobile" | "frontend" | "product";

export type ResumeProject = {
  name: string;
  /** Omitted when the project has no public URL — rendered as plain text */
  href?: string;
  appStore: boolean;
  description: string;
};

/**
 * Collapses every work entry into a single company heading. Streak and the
 * National Finance Olympiad are one employer's two products, so a variant can
 * present them as one company with four roles instead of two separate jobs.
 */
export type MergedCompany = {
  name: string;
  badges: ReadonlyArray<string>;
  href: string;
  location: string;
  start: string;
  end: string;
  note: string;
};

export type ResumeVariant = {
  slug: VariantSlug;
  /** Shown on the download button and the variant switcher */
  label: string;
  headline: string;
  summary: string;
  expertise: ReadonlyArray<{ label: string; items: string }>;
  /** Company names in the order they should appear, most relevant first */
  companyOrder: ReadonlyArray<string>;
  projects: ReadonlyArray<ResumeProject>;
  fileName: string;
  /** When set, all work renders under one company heading */
  mergedCompany?: MergedCompany;
  /** Default true — set false to drop the section entirely */
  showExpertise?: boolean;
  showProjects?: boolean;
  /** Tightens type and spacing so a longer history still lands on one page */
  dense?: boolean;
};

/** One role, flattened out of the per-company nesting for a merged layout. */
export type MergedRole = {
  title: string;
  /** The product this role sat on, when it isn't the merged company itself */
  product?: string;
  start: string;
  end: string;
  bullets: ReadonlyArray<string>;
};

const projectHref = (title: string) => {
  const href = DATA.projects.find((p) => p.title === title)?.href;
  // "#" is the placeholder for projects with nothing public to link to
  return href && href !== "#" ? href : undefined;
};

const BAKI: ResumeProject = {
  name: "Baki",
  href: projectHref("Baki"),
  appStore: true,
  description:
    "Designed, built, and shipped solo. Commitment-first budgeting that shows real available balance before you spend, with five-mode expense splitting and a paid subscription tier.",
};

const WOTTER: ResumeProject = {
  name: "Wotter",
  href: projectHref("Wotter"),
  appStore: true,
  description:
    "Sole engineer, working with a designer. Hydration tracking with onboarding, local notification reminders, and subscription management.",
};

const SYNQED: ResumeProject = {
  name: "Synqed",
  href: "https://synqed.studio",
  appStore: false,
  description:
    "Built solo across three platforms (Android/Kotlin, macOS/Swift, and a Next.js site) for Android-to-Mac continuity: notifications, clipboard, files, SMS, and calls over an encrypted LAN link with no cloud, account, or relay. AES-256-GCM on a versioned protocol with ECDH pairing and per-session forward secrecy. Mac 1.0.1 released; Android in Play closed testing.",
};

const THIRDMEAL: ResumeProject = {
  name: "ThirdMeal",
  href: projectHref("ThirdMeal"),
  appStore: false,
  description:
    "Full-stack e-commerce build: multi-step checkout on Razorpay across UPI, cards, net banking, and wallets, with OTP phone verification on a Postgres schema.",
};

export const RESUME_VARIANTS: Record<VariantSlug, ResumeVariant> = {
  mobile: {
    slug: "mobile",
    label: "Mobile Engineer",
    headline: DATA.headline,
    summary: DATA.summary,
    expertise: DATA.expertise,
    companyOrder: ["Streak", "National Finance Olympiad"],
    projects: [BAKI, WOTTER],
    fileName: "Bestine_Payyappilly_Mobile_Engineer.pdf",
  },
  frontend: {
    slug: "frontend",
    label: "Frontend Developer",
    headline: "Senior Frontend Developer | React, Next.js & TypeScript",
    summary:
      "Senior Frontend Developer with ~5 years building production web products in React, Next.js, and TypeScript. I owned a financial education platform end to end: student, teacher, and admin portals plus checkout, now serving **500+ schools** and **10,000+ students**. That included a React-to-Next.js migration that cut first contentful paint from **3.2s** to **0.8s** with zero downtime. I am also the sole mobile architect for a YC-backed teen fintech app with **500k+ downloads**, and I work on the backend across Django, Postgres, payments, and production AI systems.",
    expertise: [
      {
        label: "Core Frontend",
        items:
          "React, Next.js, TypeScript, Redux Toolkit, TailwindCSS, Turborepo",
      },
      {
        label: "Performance & Delivery",
        items:
          "SSR/SSG migrations, release engineering, CI/CD, GitHub Actions, Vercel, Sentry",
      },
      {
        label: "Product & Domain",
        items:
          "Payments & checkout, server-side verification, analytics, A/B testing, attribution",
      },
      {
        label: "Backend & Data",
        items: "Django, Node.js, PostgreSQL, Supabase, Firebase, GCP",
      },
      {
        label: "Mobile",
        items:
          "React Native, Swift, Kotlin/Java, native modules & bridging, CodePush OTA",
      },
      { label: "AI / LLM", items: "Claude API, RAG, pgvector, LangGraph" },
    ],
    companyOrder: ["National Finance Olympiad", "Streak"],
    projects: [BAKI, THIRDMEAL],
    fileName: "Bestine_Payyappilly_Frontend_Developer.pdf",
  },
  // Positioned for full-stack consumer product roles where the same person owns
  // the flow, the API behind it, the AI in it, and the release that ships it.
  product: {
    slug: "product",
    label: "Product Engineer",
    headline:
      "Product Engineer | Next.js, TypeScript & Production AI Systems",
    summary:
      "Product Engineer with ~5 years shipping consumer products end to end: the interface, the API behind it, the payments inside it, and the release that ships it. Sole mobile architect at Streak (YC W22), a consumer fintech app with **500k+ downloads**, where I own architecture, release engineering, error monitoring, and on-call. I also built and own Streak's go-to-market platform, which went from zero to **500+ schools** and **10,000+ students**. That work covers a React-to-Next.js migration that cut first contentful paint from **3.2s** to **0.8s**, server-side verified checkout across **4 payment gateways**, and production AI on the Claude API with RAG on pgvector and a LangGraph multi-agent pipeline, A/B tested with **500 students**. Based in Bangalore.",
    expertise: [
      {
        label: "Product Frontend",
        items:
          "React, Next.js, TypeScript, Redux Toolkit, TailwindCSS, Turborepo, design systems, performance budgets",
      },
      {
        label: "Backend & Data",
        items:
          "Node.js, Python/Django, PostgreSQL, Supabase, schema design, API contracts, GCP",
      },
      {
        label: "AI in Production",
        items:
          "Claude API, RAG on pgvector, LangGraph multi-agent pipelines, structured outputs, eval & A/B harnesses",
      },
      {
        label: "Payments & Conversion",
        items:
          "Razorpay, Stripe, BillDesk, server-side verification, multi-step checkout, subscriptions (RevenueCat)",
      },
      {
        label: "Instrumentation & Growth",
        items:
          "Meta CAPI, WebEngage, GA4, identity resolution, funnel & retention analytics, A/B testing",
      },
      {
        label: "Release & Reliability",
        items:
          "CI/CD, GitHub Actions, staged rollouts, OTA rollbacks, Sentry, on-call",
      },
    ],
    companyOrder: ["Streak", "National Finance Olympiad"],
    projects: [BAKI, SYNQED],
    fileName: "Bestine_Payyappilly_Product_Engineer.pdf",
    mergedCompany: {
      name: "Streak",
      badges: ["YC W22"],
      href: "https://streakcard.com/",
      location: "Bengaluru, Karnataka",
      start: "Feb 2022",
      end: "Present",
      note: "One employer, two products: the consumer fintech app on iOS and Android, and National Finance Olympiad, its go-to-market arm for schools and families.",
    },
    showExpertise: false,
    showProjects: true,
    dense: true,
  },
};

/** DATA.work ordered for the given variant */
export function orderedWork(variant: ResumeVariant) {
  return [...DATA.work].sort(
    (a, b) =>
      variant.companyOrder.indexOf(a.company) -
      variant.companyOrder.indexOf(b.company),
  );
}

/** Every role across the ordered work, flattened for a merged-company layout */
export function mergedRoles(variant: ResumeVariant): MergedRole[] {
  const merged = variant.mergedCompany;
  return orderedWork(variant).flatMap((job) =>
    job.roles.map((role) => ({
      title: role.title,
      product:
        merged && job.company !== merged.name ? job.company : undefined,
      start: role.start,
      end: role.end,
      bullets: role.bullets,
    })),
  );
}
