import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Android } from "@/components/ui/svgs/android";
import { Swift } from "@/components/ui/svgs/swift";

export const DATA = {
  name: "Bestine Payyappilly",
  initials: "BP",
  url: "https://bestine.dev",
  location: "Bangalore, Karnataka, India",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  description:
    "Mobile Developer & Full Stack Engineer. I build production apps & websites handling payments and sensitive financial data.",
  summary:
    "Full-stack developer who ships. I build and own entire product ecosystems — from mobile apps to admin dashboards to checkout systems. Integrated payment flows across Razorpay, Cashfree, BillDesk, and Stripe. React Native and Next.js, end-to-end.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React Native", icon: ReactLight },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Native iOS", icon: Swift },
    { name: "Native Android", icon: Android },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
        url: "https://linkedin.com/in/bestine-payyappilly-030858113",
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
      company: "National Finance Olympiad",
      badges: [],
      href: "https://nfo.edu",
      location: "Remote",
      title: "Senior Full Stack Developer",
      logoUrl: "/NFOLogo.svg",
      start: "2022",
      end: "Present",
      description:
        "Built an entire ecosystem of web applications from the ground up after Streak pivoted to financial education for kids. Products built include: Self-learning Checkout, Books Checkout, Student Hub (full-featured student portal with React to Next.js migration), Admin Panel, and Teacher Portal. Integrated multiple payment gateways including Razorpay, Stripe (international), and BillDesk. Owned the complete development stack: frontend architecture, backend integration, payment flows, and deployment.",
    },
    {
      company: "Streak",
      href: "https://streak.money",
      badges: [],
      location: "Remote",
      title: "Senior Mobile Developer",
      logoUrl: "/StreakLogo.png",
      start: "End of 2021",
      end: "2024",
      description:
        "Joined Streak, a recently funded payments app for teens, after being selected for having the best design and state management techniques among all applicants. Progressed from intern to sole mobile architect, overseeing both iOS and Android development. Architected and maintained both iOS and Android applications handling sensitive payment flows and cryptographic operations. Solved critical native code issues in both platforms. Single-handedly designed and developed a new app for Fixed Deposits (FDs), handling everything from architecture to UI/UX. Led the redesign and implementation of new features including gold investments and financial products.",
    },
    {
      company: "doyou.ae",
      href: "https://doyou.ae",
      badges: ["Freelance"],
      location: "Dubai, UAE (Remote)",
      title: "Frontend Lead",
      logoUrl: "/doyouae.svg",
      start: "2024",
      end: "End of 2025",
      description:
        "Currently serving as Frontend Lead for this Dubai-based startup while maintaining my full-time role, building scalable applications with Next.js.",
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
      title: "ThirdMeal",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "A full-stack e-commerce platform for premium health-focused food products. Features a multi-step checkout flow, Razorpay payment integration (UPI, Cards, Net Banking, Wallets), real-time cart management, and OTP-based phone verification with secure PostgreSQL database design.",
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
    },
    {
      title: "Wotter",
      href: "https://apps.apple.com/in/app/wotter/id6479811630",
      dates: "2024",
      active: true,
      description:
        "A cross-platform iOS & Android hydration tracking app built with React Native and TypeScript. Features multi-step onboarding, dashboard with metrics and drink tracking, customizable reminders with local push notifications, subscription management, and water intake calculation logic.",
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
          href: "https://apps.apple.com/in/app/wotter/id6479811630",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Wotter.png",
      video: "",
    },
    {
      title: "NFO Checkout",
      href: "#",
      dates: "2022 - Present",
      active: true,
      description:
        "A monorepo containing 3 production checkout apps (NFO Books, NFO Registration, NFA Checkout) built with Turborepo. Features multi-payment gateway integration (Razorpay, BillDesk, Stripe), A/B testing framework with GA4, OTP verification, and dynamic pricing with bundle discounts and COD support.",
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
    },
    {
      title: "NFO Student Hub",
      href: "https://nfoportal.nationalfinanceolympiad.com",
      dates: "2022 - Present",
      active: true,
      description:
        "A full-featured student portal for National Finance Olympiad. Built from scratch and migrated from React to Next.js. Includes self-learning checkout, books checkout, complete student dashboard, and integrated payment flows with Razorpay, Stripe, and BillDesk.",
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
