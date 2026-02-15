import { DATA } from "@/data/resume";
import { DownloadResumeButton } from "@/components/ui/download-resume-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: `${DATA.name} — Mobile Developer & Full Stack Engineer. Resume and work experience.`,
  alternates: {
    canonical: `${DATA.url}/resume`,
  },
};

export default function ResumePage() {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="flex justify-end mb-6">
        <DownloadResumeButton />
      </div>
      <article id="resume-content" className="prose max-w-full font-sans text-foreground dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
        {/* Header */}
        <div className="not-prose mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            {DATA.name}
          </h1>
          <p className="text-lg text-muted-foreground mt-1">
            Senior Mobile Developer &middot; Senior Full Stack Developer
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {DATA.location} &middot;{" "}
            <a href={`mailto:${DATA.contact.email}`} className="underline underline-offset-4 hover:text-foreground transition-colors">
              {DATA.contact.email}
            </a>{" "}
            &middot;{" "}
            <a href={`tel:${DATA.contact.tel}`} className="underline underline-offset-4 hover:text-foreground transition-colors">
              {DATA.contact.tel}
            </a>
          </p>
          <div className="flex gap-3 mt-2 text-sm text-muted-foreground">
            <a href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground transition-colors">LinkedIn</a>
            <a href={DATA.contact.social.GitHub.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground transition-colors">GitHub</a>
            <a href={DATA.url} className="underline underline-offset-4 hover:text-foreground transition-colors">{DATA.url.replace("https://", "")}</a>
          </div>
        </div>

        <hr />

        {/* Summary */}
        <h2>Summary</h2>
        <p>
          Full-stack developer with 4+ years of experience building and shipping production applications across mobile and web. Sole mobile architect for a funded fintech startup handling sensitive payment flows, cryptographic operations, and multi-platform releases. Built and owned entire product ecosystems — from React Native apps to Next.js portals to checkout systems. Integrated payment gateways including Razorpay, Cashfree, BillDesk, and Stripe across multiple products. Strong expertise in React Native, Next.js, TypeScript, and native iOS/Android development.
        </p>

        <hr />

        {/* Skills */}
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Mobile:</strong> React Native, Native iOS (Swift), Native Android (Kotlin/Java), Reanimated, Skia, Lottie, Rive, CodePush</li>
          <li><strong>Frontend:</strong> React, Next.js, TypeScript, JavaScript, TailwindCSS, Material-UI, Framer Motion</li>
          <li><strong>Backend & Data:</strong> Node.js, Supabase, PostgreSQL, Firebase, REST APIs</li>
          <li><strong>Payments:</strong> Razorpay, Stripe, BillDesk, Cashfree — UPI, Cards, Net Banking, Wallets, International</li>
          <li><strong>Security:</strong> ECDH key exchange, AES/CBC encryption, SSL pinning, FreeRASP, ProGuard, Hermes bytecode</li>
          <li><strong>DevOps & Tools:</strong> Turborepo, Sentry, GA4, Firebase Remote Config, Docker, Vercel, Git</li>
        </ul>

        <hr />

        {/* Work Experience */}
        <h2>Work Experience</h2>

        <h3>Senior Full Stack Developer — National Finance Olympiad</h3>
        <p className="text-sm! mt-0!">2022 – Present &middot; Bangalore, Karnataka</p>
        <ul>
          <li>Built 5+ production web apps from scratch: checkout systems, student portal, admin panel, and teacher portal</li>
          <li>Integrated 3 payment gateways (Razorpay, Stripe, BillDesk) with retry logic and verification flows</li>
          <li>Migrated student portal from CRA to Next.js — FCP reduced from 3.2s to 0.8s (75% improvement)</li>
          <li>Built Turborepo monorepo housing 3 checkout apps with A/B testing and 1,200+ GA4 tracked events</li>
          <li>Owned full stack: frontend architecture, backend integration, payment flows, and deployment</li>
        </ul>

        <h3>Senior Mobile Developer — Streak</h3>
        <p className="text-sm! mt-0!">End of 2021 – 2024 &middot; Bangalore, Karnataka</p>
        <ul>
          <li>Progressed from intern to sole mobile architect for a funded fintech app on iOS and Android</li>
          <li>Implemented 7-layer security with custom ECDH native modules (Kotlin + Swift) for encrypted payment flows</li>
          <li>Integrated 5 animation systems (Reanimated, Lottie, Rive, Skia) with shared element transitions</li>
          <li>Single-handedly built a new Fixed Deposits app end-to-end and led gold investment feature redesign</li>
        </ul>

        <h3>Frontend Lead — doyou.ae</h3>
        <p className="text-sm! mt-0!">2024 – End of 2025 &middot; Dubai, UAE (Remote) &middot; Freelance</p>
        <ul>
          <li>Led frontend development for a Dubai-based startup, building scalable Next.js applications</li>
        </ul>

        <hr />

        {/* Projects */}
        <h2>Key Projects</h2>

        <h3>StreakCard</h3>
        <p className="text-sm! mt-0!">React Native &middot; TypeScript &middot; Redux &middot; Reanimated &middot; Skia &middot; Firebase</p>
        <ul>
          <li>Fintech app for teenagers — prepaid card, savings, gold investing, and gamification</li>
          <li>7-layer security with ECDH encryption via custom native modules for both platforms</li>
          <li>5 animation systems with shared element transitions and Skia-rendered squircles</li>
        </ul>

        <h3>NFO Checkout Monorepo</h3>
        <p className="text-sm! mt-0!">React 18 &middot; TypeScript &middot; Turborepo &middot; Razorpay &middot; BillDesk &middot; Stripe</p>
        <ul>
          <li>3 production checkout apps with shared payment infrastructure in a single monorepo</li>
          <li>Multi-gateway payment integration with A/B testing, OTP verification, and dynamic pricing</li>
        </ul>

        <h3>NFO Student Hub</h3>
        <p className="text-sm! mt-0!">Next.js &middot; React &middot; TypeScript &middot; TailwindCSS</p>
        <ul>
          <li>Full-featured student portal with self-learning checkout, dashboard, and 3 integrated payment gateways</li>
          <li>Migrated from React to Next.js with 75% improvement in First Contentful Paint</li>
        </ul>

        <h3>ThirdMeal</h3>
        <p className="text-sm! mt-0!">React 19 &middot; Vite &middot; Supabase &middot; PostgreSQL &middot; Razorpay</p>
        <ul>
          <li>Full-stack e-commerce platform with multi-step checkout, Razorpay integration, and OTP-based phone verification</li>
        </ul>

        <h3>Wotter</h3>
        <p className="text-sm! mt-0!">React Native &middot; TypeScript &middot; Redux Toolkit &middot; Skia &middot; MMKV</p>
        <ul>
          <li>Cross-platform hydration tracking app published on App Store with subscription management via RevenueCat</li>
        </ul>

        <hr />

        {/* Education */}
        <h2>Education</h2>

        <h3>SRM University</h3>
        <p className="text-sm! mt-0!">2018 – 2022</p>
        <p>Bachelor of Technology in Electronics and Communication Engineering</p>
      </article>
    </section>
  );
}
