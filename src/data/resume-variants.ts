import { DATA } from "@/data/resume";

/**
 * Two positionings of the same career. Nothing here invents experience — each
 * variant reorders the companies, reframes the summary, re-prioritises the
 * skill groups, and picks the projects that support the role being applied for.
 */
export type VariantSlug = "mobile" | "frontend";

export type ResumeProject = {
  name: string;
  /** Omitted when the project has no public URL — rendered as plain text */
  href?: string;
  appStore: boolean;
  description: string;
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
    "Designed, built, and shipped solo — commitment-first budgeting that shows real available balance before you spend, with five-mode expense splitting and a paid subscription tier.",
};

const WOTTER: ResumeProject = {
  name: "Wotter",
  href: projectHref("Wotter"),
  appStore: true,
  description:
    "Sole engineer, partnered with a designer — hydration tracking with onboarding, local notification reminders, and subscription management.",
};

const THIRDMEAL: ResumeProject = {
  name: "ThirdMeal",
  href: projectHref("ThirdMeal"),
  appStore: false,
  description:
    "Full-stack e-commerce build — multi-step checkout on Razorpay across UPI, cards, net banking, and wallets, with OTP phone verification on a Postgres schema.",
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
      "Senior Frontend Developer with ~5 years building production web products in React, Next.js, and TypeScript. Owned a financial education platform end to end — student, teacher, and admin portals plus checkout, now serving **500+ schools** and **10,000+ students** — including a React-to-Next.js migration that cut first contentful paint from **3.2s** to **0.8s** with zero downtime. Also sole mobile architect for a YC-backed teen fintech app with **500k+ downloads**, with backend depth across Django, Postgres, payments, and production AI systems.",
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
};

/** DATA.work ordered for the given variant */
export function orderedWork(variant: ResumeVariant) {
  return [...DATA.work].sort(
    (a, b) =>
      variant.companyOrder.indexOf(a.company) -
      variant.companyOrder.indexOf(b.company),
  );
}
