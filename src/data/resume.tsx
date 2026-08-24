import React from "react";
import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Android } from "@/components/ui/svgs/android";
import { Swift } from "@/components/ui/svgs/swift";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";

// Single source of truth for how the role is labelled — headline, page metadata,
// and the PDF all read from this so the wording never drifts apart.
const HEADLINE = "Senior Mobile Engineer | React Native, iOS & Android";

export const DATA = {
  name: "Bestine Payyappilly",
  initials: "BP",
  headline: HEADLINE,
  url: "https://bestinepayyappilly.com",
  location: "Bangalore, Karnataka, India",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  description: `${HEADLINE}. I build the mobile app, the web platform, and the backend behind them.`,
  summary:
    "Senior Mobile Engineer with ~5 years building production iOS and Android apps in React Native, Swift, and Kotlin. Sole mobile architect for a YC-backed teen fintech app with **500k+ downloads**, owning mobile architecture, on-device payment encryption, security hardening, release engineering, and on-call. I ship financial products end to end, and I work across Next.js, Django, payments, and production AI systems.",
  avatarUrl: "/me.webp",
  skills: [
    { name: "React Native", icon: ReactLight },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python / Django", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Native iOS", icon: Swift },
    { name: "Native Android", icon: Android },
  ],
  // Ordered by relevance to a senior mobile role — mobile first, everything
  // else as supporting depth rather than a flat technology checklist.
  expertise: [
    {
      label: "Core Mobile",
      items:
        "React Native, TypeScript, Redux Toolkit, Reanimated, Skia, Lottie, MMKV",
    },
    {
      label: "Native Mobile",
      items:
        "iOS, Android, Swift, Kotlin/Java, native modules & bridging, Xcode, Gradle",
    },
    {
      label: "Architecture & Delivery",
      items:
        "Release engineering, CI/CD, Fastlane, GitHub Actions, CodePush OTA, Sentry",
    },
    {
      label: "Product & Domain",
      items:
        "Payments, mobile security & encryption, analytics, A/B testing, attribution",
    },
    {
      label: "Additional Engineering",
      items:
        "Next.js, Node.js, Django, PostgreSQL, Supabase, Firebase, GCP",
    },
    { label: "AI / LLM", items: "Claude API, RAG, pgvector, LangGraph" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/resume", icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    email: "bestine1234@gmail.com",
    tel: "+919895866303",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bestinepayyappilly",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/bestine-payyappilly",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/bestine1234",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:bestine1234@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Streak",
      badges: ["YC W22"],
      // One employer, one timeline: National Finance Olympiad is Streak's
      // education product, so its roles sit here rather than reading as a
      // second, simultaneous full-time job.
      note: "National Finance Olympiad is Streak's financial education product, so the web work below sat inside the same company as the mobile work.",
      href: "https://streakcard.com/",
      location: "Bengaluru, Karnataka",
      title: "Senior Mobile & Frontend Developer",
      logoUrl: "/StreakLogo.webp",
      start: "Feb 2022",
      end: "Present",
      description:
        "YC-backed teen fintech. The app covers prepaid cards, savings, fixed deposits, and gold investing on iOS and Android, and the company also runs National Finance Olympiad, its financial education platform. I joined as a mobile developer, became the sole mobile architect, and owned the NFO web platform alongside that.",
      roles: [
        {
          track: "mobile",
          title: "Senior Mobile Developer",
          start: "Oct 2024",
          end: "Jan 2026",
          bullets: [
            "Owned mobile architecture, release engineering, and on-call as sole mobile architect for a teen fintech app on iOS and Android with **500k+ downloads**.",
            "Designed and shipped custom Swift and Kotlin native modules for ECDH key exchange (prime256v1) and AES encryption, which moved card-transaction crypto on-device and out of the JS bundle.",
            "Hardened the app against mobile threats with root and jailbreak detection, runtime protection, SSL pinning, biometric authentication, encrypted storage and payloads, and locked-down release builds.",
            "Delivered a Fixed Deposits product solo end to end and rebuilt the gold investment flow around pre-calculated return projections, so users can see the expected return before they invest.",
            "Cut hotfix turnaround with CodePush OTA updates checked on app resume, and automated Sentry source-map uploads so production crashes stay debuggable.",
            "Built reusable animation abstractions on Reanimated, Lottie, Rive, and Skia, so feature teams could ship consistent motion without touching native code.",
            "Mentored **4 engineers** across mobile and web through code review, set the engineering standards both codebases follow, and partnered with founders on scope and prioritisation.",
          ],
        },
        {
          track: "mobile",
          title: "Mobile Developer",
          start: "Feb 2022",
          end: "Oct 2024",
          bullets: [
            "Built the core prepaid-card and savings flows in React Native with Redux on Hermes. The state and navigation architecture from that work still runs the app.",
            "Handled the fintech lifecycle edge cases: re-authentication after backgrounding, force-update and maintenance gates, and deep links that survive PIN verification instead of being dropped.",
          ],
        },
        {
          track: "frontend",
          title: "Senior Frontend Developer (National Finance Olympiad)",
          start: "Mar 2024",
          end: "Present",
          bullets: [
            "Led the student portal's React to Next.js migration on a documented runbook and rollback path. First contentful paint went from **3.2s** to **0.8s**, with no downtime at cutover.",
            "Designed the Postgres/Supabase schemas and server-side verification for **4 payment gateways**. Every transaction is checked against the gateway instead of a client-side success callback.",
            "Built server-side attribution end to end: Meta CAPI on Django and GCP with cross-subdomain session stitching, plus a WebEngage migration onto CUID identity resolution while two brands merged.",
            "Built a RAG adaptive learning platform on pgvector and the Claude API, plus a LangGraph multi-agent pipeline for question-paper generation. A/B tested with **500 students**, and **50 papers** are in production.",
          ],
        },
        {
          track: "frontend",
          title: "Frontend Developer (National Finance Olympiad)",
          start: "Feb 2022",
          end: "Mar 2024",
          bullets: [
            "Built the web ecosystem from scratch: student, teacher, and admin portals plus two checkout surfaces. It now serves **500+ schools** and **10,000+ students**.",
            "Architected a Turborepo monorepo with 3 checkout apps on shared Razorpay, Stripe, and BillDesk infrastructure, so a gateway change shipped once instead of three times.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: "SRM University",
      href: "https://www.srmist.edu.in",
      degree:
        "Bachelor of Technology in Electronics and Communication Engineering",
      logoUrl: "/SRMLogo.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Synqed",
      href: "https://synqed.studio",
      dates: "2026",
      active: true,
      description:
        "Continuity for people who carry an Android phone and work on a Mac. Calls, SMS, notifications, clipboard, and file transfer move between the two over an AES-256-GCM encrypted tunnel on your own Wi-Fi, with no cloud, account, or relay in the path. Native Kotlin on Android and Swift on macOS, with a menu-bar popover, a notch drop zone, call banners, a remote file browser with resumable transfers, and a notification digest that runs on-device through Apple Intelligence.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Swift",
        "SwiftUI",
        "Network.framework",
        "AES-256-GCM",
        "ECDH",
        "Apple Intelligence",
      ],
      links: [
        {
          type: "Website",
          href: "https://synqed.studio",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/synqed/banner.png",
      video: "",
      blogs: [],
    },
    {
      title: "Baki",
      href: "https://apps.apple.com/in/app/baki-budget-expense-tracker/id6760950323",
      dates: "2025",
      active: true,
      description:
        "Shipped and live on the App Store. A commitment-first budgeting app for iOS that shows your real available balance (salary minus locked commitments minus spending) before you spend. Built solo on bare React Native 0.84, Supabase, and RevenueCat, with a full split-expense system, animated mesh gradients, shared element transitions, AI trip planning, and a paid Pro tier with Weave spreadsheet sync.",
      technologies: [
        "React Native",
        "TypeScript",
        "Supabase",
        "RevenueCat",
        "Reanimated 4",
        "Zustand",
        "MMKV",
        "Firebase",
        "Skia",
        "i18next",
      ],
      links: [
        {
          type: "App Store",
          href: "https://apps.apple.com/in/app/baki-budget-expense-tracker/id6760950323",
          icon: <Icons.apple className="size-3" />,
        },
        {
          type: "Website",
          href: "https://baki-xi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/baki/screen-home.png",
      screenshots: [
        "/baki/screen-home.png",
        "/baki/screen-add.png",
        "/baki/screen-insights.png",
        "/baki/screen-insights-detail.png",
        "/baki/screen-plan-trip.png",
        "/baki/screen-travel.png",
      ],
      video: "",
      blogs: [
        { title: "Building Baki", slug: "building-baki-expense-tracker" },
      ],
    },
    {
      title: "StreakCard",
      href: "https://streakcard.com/",
      dates: "2022 - 2024",
      active: false,
      description:
        "A React Native fintech app for teenagers: prepaid card, savings, gold investing, and gamification. Built with 7-layer security (FreeRASP, SSL pinning, ECDH encryption via custom native modules), 5 animation systems (Reanimated, Lottie, Rive, Skia), and instant OTA updates via CodePush.",
      technologies: [
        "React Native",
        "TypeScript",
        "Redux",
        "Reanimated",
        "Skia",
        "Lottie",
        "Rive",
        "Sentry",
        "CodePush",
        "Firebase",
      ],
      links: [],
      image: "/StreakLogo.webp",
      video: "/StreakVideo.mp4",
      blogs: [
        {
          title: "Building StreakCard",
          slug: "building-streakcard-react-native-fintech",
        },
        {
          title: "Custom Native Modules",
          slug: "building-native-modules-react-native-fintech",
        },
      ],
    },
    {
      title: "ThirdMeal",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "A full-stack e-commerce platform for health food products. It has a multi-step checkout, Razorpay payments across UPI, cards, net banking, and wallets, real-time cart management, and OTP phone verification on a PostgreSQL schema.",
      technologies: [
        "React 19",
        "Vite",
        "Supabase",
        "PostgreSQL",
        "Razorpay",
        "React Hook Form",
        "Yup",
        "Framer Motion",
      ],
      links: [],
      image: "",
      video: "/Thirdmeal.mp4",
      blogs: [
        { title: "Building ThirdMeal", slug: "building-thirdmeal-ecommerce" },
      ],
    },
    {
      title: "Wotter",
      href: "https://apps.apple.com/us/app/wotter/id6479811630",
      dates: "2024",
      active: true,
      description:
        "A hydration tracking app for iOS and Android, built with React Native and TypeScript. It has multi-step onboarding, a dashboard for metrics and drink tracking, customizable reminders on local push notifications, subscription management, and the intake calculation behind the targets.",
      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "React Navigation",
        "React Native Reanimated",
        "Gesture Handler",
        "Shopify React Native Skia",
        "MMKV",
        "Lottie",
        "Rive",
        "Jest",
        "ESLint",
      ],
      links: [
        {
          type: "App Store",
          href: "https://apps.apple.com/us/app/wotter/id6479811630",
          icon: <Icons.apple className="size-3" />,
        },
      ],
      image: "/Wotter.png",
      video: "",
      blogs: [
        { title: "Building Wotter", slug: "building-wotter-react-native" },
      ],
    },
    {
      title: "NFO Checkout",
      href: "#",
      dates: "2022 - Present",
      active: true,
      description:
        "A Turborepo monorepo holding 3 production checkout apps: NFO Books, NFO Registration, and NFA Checkout. It integrates Razorpay, BillDesk, and Stripe, with an A/B testing framework on GA4, OTP verification, and dynamic pricing that covers bundle discounts and cash on delivery.",
      technologies: [
        "React 18",
        "TypeScript",
        "Turborepo",
        "Razorpay",
        "BillDesk",
        "Stripe",
        "Material-UI",
        "Sentry",
        "Firebase",
        "GA4",
      ],
      links: [],
      image: "",
      video: "/NFOCheckout.mp4",
      blogs: [{ title: "Checkout Monorepo", slug: "nfo-checkout-monorepo" }],
    },
    {
      title: "NFO Student Hub",
      href: "https://nfoportal.nationalfinanceolympiad.com",
      dates: "2022 - Present",
      active: true,
      description:
        "The student portal for National Finance Olympiad, built from scratch and later migrated from React to Next.js. It covers self-learning checkout, books checkout, the student dashboard, and payment flows on Razorpay, Stripe, and BillDesk.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Razorpay",
        "Stripe",
        "BillDesk",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://nfoportal.nationalfinanceolympiad.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/NFOImage.png",
      video: "/NFOPortal.mp4",
      blogs: [
        {
          title: "React to Next.js Migration",
          slug: "nfo-student-hub-migration",
        },
        { title: "Building NFO Portal", slug: "building-nfo-portal" },
      ],
    },
  ],
  hackathons: [] as Array<{
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    mlh?: string;
    win?: string;
    links: Array<{ title: string; icon: React.ReactNode; href: string }>;
  }>,
} as const;
