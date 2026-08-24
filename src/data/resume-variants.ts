import { DATA } from "@/data/resume";

/**
 * Three positionings of the same career. Nothing here invents experience. Each
 * variant reorders the roles, reframes the summary, re-prioritises the skill
 * groups, and picks the projects that support the role being applied for.
 */
export type VariantSlug = "mobile" | "frontend" | "product";

/** Which body of work a role belongs to — see `track` on DATA.work[].roles */
export type RoleTrack = "mobile" | "frontend";

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
  /**
   * Role tracks in the order they should appear within a company, most relevant
   * first. Both tracks ran at the same employer, so the variant picks which one
   * the reader sees at the top rather than reordering companies.
   */
  trackOrder: ReadonlyArray<RoleTrack>;
  /**
   * Collapses the per-role breakdown into one heading under this title, running
   * the full length of the company. Use it when the promotion history is noise
   * for the role being applied for and the span matters more than the steps.
   */
  collapseRolesAs?: string;
  projects: ReadonlyArray<ResumeProject>;
  fileName: string;
};

/** A role as the resume renders it, whether real or collapsed from several. */
export type RoleView = {
  title: string;
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
    "Designed, built, and shipped solo. Commitment-first budgeting that shows your real available balance before you spend, with five-mode expense splitting and a paid subscription tier.",
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
  href: projectHref("Synqed"),
  appStore: false,
  description:
    "Built solo across three platforms (Android/Kotlin, macOS/Swift, and a Next.js site) for Android to Mac continuity: notifications, clipboard, files, SMS, and calls over an encrypted link on your own Wi-Fi, with no cloud, account, or relay. AES-256-GCM on a versioned protocol with ECDH pairing and per-session forward secrecy. Mac 1.0.1 released, Android in Play closed testing.",
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
    trackOrder: ["mobile", "frontend"],
    projects: [BAKI, WOTTER],
    fileName: "Bestine_Payyappilly_Mobile_Engineer.pdf",
  },
  frontend: {
    slug: "frontend",
    label: "Frontend Developer",
    headline: "Senior Frontend Developer | React, Next.js & TypeScript",
    summary:
      "Senior Frontend Developer with ~5 years building production web products in React, Next.js, and TypeScript. I owned a financial education platform end to end: student, teacher, and admin portals plus checkout, now serving **500+ schools** and **10,000+ students**. That included a React to Next.js migration that cut first contentful paint from **3.2s** to **0.8s** with no downtime. I am also the sole mobile architect for a YC-backed teen fintech app with **500k+ downloads**, and I work on the backend across Django, Postgres, payments, and production AI systems.",
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
    trackOrder: ["frontend", "mobile"],
    projects: [BAKI, THIRDMEAL],
    fileName: "Bestine_Payyappilly_Frontend_Developer.pdf",
  },
  // Positioned for full-stack consumer product roles where the same person owns
  // the flow, the API behind it, the AI in it, and the release that ships it.
  product: {
    slug: "product",
    label: "Product Engineer",
    headline: "Product Engineer | Next.js, TypeScript & Production AI Systems",
    summary:
      "Product Engineer with ~5 years shipping consumer products end to end: the interface, the API behind it, the payments inside it, and the release that ships it. At Streak (YC W22) I was sole mobile architect for a teen fintech app with **500k+ downloads** on iOS and Android, owning architecture, release engineering, and on-call across React Native, Swift, and Kotlin, mentoring **4 engineers**, and working with the founders on what to build next. I also built and own the education platform the business runs on, taking it from zero to **500+ schools** and **10,000+ students**: a React to Next.js migration run on a documented runbook and rollback path that cut first contentful paint from **3.2s** to **0.8s** without downtime, checkout across **4 payment gateways** verified server-side instead of trusting client callbacks, and production AI on the Claude API with RAG on pgvector and a LangGraph multi-agent pipeline, A/B tested with **500 students**. On my own I designed and shipped Synqed, an Android to Mac continuity app in Kotlin and Swift that keeps notifications, files, and calls on an encrypted link over your own Wi-Fi, with no cloud or account behind it. Based in Bangalore.",
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
    // The web platform is the stronger product story, so it leads here.
    trackOrder: ["frontend", "mobile"],
    projects: [SYNQED, BAKI],
    fileName: "Bestine_Payyappilly_Product_Engineer.pdf",
  },
};

/**
 * DATA.work with each company's roles ordered for the given variant. The sort is
 * stable, so roles stay newest-first within their own track.
 */
export function orderedWork(variant: ResumeVariant) {
  return DATA.work.map((job) => {
    // Stable sort, so bullets keep their authored order inside each track.
    const roles: RoleView[] = job.roles.map((role) => ({
      title: role.title,
      start: role.start,
      end: role.end,
      bullets: [...role.bullets]
        .sort(
          (a, b) =>
            variant.trackOrder.indexOf(a.track) -
            variant.trackOrder.indexOf(b.track),
        )
        .map((bullet) => bullet.text),
    }));

    if (!variant.collapseRolesAs) return { ...job, roles };

    // One heading spanning the company, keeping every bullet in track order.
    return {
      ...job,
      roles: [
        {
          title: variant.collapseRolesAs,
          start: job.start,
          end: job.end,
          bullets: roles.flatMap((role) => [...role.bullets]),
        },
      ],
    };
  });
}
