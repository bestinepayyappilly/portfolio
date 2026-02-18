import {
  Document,
  Page,
  Text,
  View,
  Link,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const c = {
  black: "#000000",
  dark: "#111111",
  body: "#333333",
  muted: "#555555",
  light: "#888888",
  border: "#d4d4d4",
  accent: "#2563eb",
  sectionBg: "#f8f9fa",
  white: "#ffffff",
};

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: c.dark,
    backgroundColor: c.white,
    paddingTop: 28,
    paddingBottom: 24,
    paddingHorizontal: 32,
    lineHeight: 1.4,
  },
  // Header
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  headerText: { flex: 1 },
  name: {
    fontSize: 22,
    fontWeight: 700,
    color: c.black,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 10.5,
    color: c.muted,
    marginTop: 15,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
    gap: 3,
  },
  contactText: { fontSize: 8.5, color: c.muted },
  link: { fontSize: 8.5, color: c.accent, textDecoration: "none" },
  sep: { fontSize: 8.5, color: c.light, marginHorizontal: 1 },
  // Layout
  hr: {
    borderBottomWidth: 0.5,
    borderBottomColor: c.border,
    marginTop: 10,
    marginBottom: 10,
  },
  columns: {
    flexDirection: "row",
    gap: 18,
    flex: 1,
  },
  leftCol: { width: "32%" },
  rightCol: { flex: 1 },
  // Sections
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: c.black,
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    borderBottomWidth: 1,
    borderBottomColor: c.accent,
    paddingBottom: 3,
  },
  // Skills
  skillGroup: { marginBottom: 6 },
  skillLabel: {
    fontSize: 9,
    fontWeight: 700,
    color: c.black,
    marginBottom: 1,
  },
  skillText: { fontSize: 8.5, color: c.body, lineHeight: 1.45 },
  // Jobs
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: 7,
    marginBottom: 1,
  },
  jobTitle: { fontSize: 10, fontWeight: 700, color: c.black },
  jobCompanyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 2,
  },
  jobCompany: { fontSize: 9, color: c.muted, fontStyle: "italic" },
  jobDate: { fontSize: 8.5, color: c.light },
  // Bullets
  bullet: { flexDirection: "row", marginBottom: 2, paddingLeft: 2 },
  bulletDot: { width: 8, fontSize: 9, color: c.light },
  bulletText: { flex: 1, fontSize: 9, color: c.body, lineHeight: 1.45 },
  // Projects
  projectRow: { marginBottom: 4 },
  projectName: { fontSize: 9, fontWeight: 700, color: c.black },
  projectDesc: { fontSize: 8.5, color: c.body, lineHeight: 1.4, marginTop: 1 },
  projectTech: { fontSize: 7.5, color: c.light, fontStyle: "italic" },
  // Education
  eduTitle: { fontSize: 9.5, fontWeight: 700, color: c.black },
  eduMeta: { fontSize: 8.5, color: c.light, marginTop: 1 },
  eduDegree: { fontSize: 8.5, color: c.body, marginTop: 2 },
  // Summary
  summaryText: { fontSize: 9, color: c.body, lineHeight: 1.5 },
});

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <View style={s.bullet} wrap={false}>
      <Text style={s.bulletDot}>•</Text>
      <Text style={s.bulletText}>{children}</Text>
    </View>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <Text style={s.sectionTitle}>{children}</Text>;
}

interface ResumePDFProps {
  avatarDataUri?: string;
}

export function ResumePDF({ avatarDataUri }: ResumePDFProps) {
  return (
    <Document
      title="Bestine Payyappilly — Resume"
      author="Bestine Payyappilly"
      subject="Senior Mobile Developer & Senior Full Stack Engineer"
    >
      <Page size="A4" style={s.page}>
        {/* ─── HEADER ─── */}
        <View style={s.headerRow}>
          {avatarDataUri && <Image style={s.avatar} src={avatarDataUri} />}
          <View style={s.headerText}>
            <Text style={s.name}>Bestine Payyappilly</Text>
            <Text style={s.subtitle}>
              Senior Mobile Developer | Senior Full Stack Engineer
            </Text>
            <View style={s.contactRow}>
              <Text style={s.contactText}>Bangalore, India</Text>
              <Text style={s.sep}>|</Text>
              <Link src="mailto:bestine1234@gmail.com" style={s.link}>
                bestine1234@gmail.com
              </Link>
              <Text style={s.sep}>|</Text>
              <Link src="tel:+919895866303" style={s.link}>
                +91 9895866303
              </Link>
              <Text style={s.sep}>|</Text>
              <Link
                src="https://linkedin.com/in/bestine-payyappilly-030858113"
                style={s.link}
              >
                LinkedIn
              </Link>
              <Text style={s.sep}>|</Text>
              <Link src="https://github.com/bestinepayyappilly" style={s.link}>
                GitHub
              </Link>
              <Text style={s.sep}>|</Text>
              <Link src="https://bestinepayyappilly.com" style={s.link}>
                bestinepayyappilly.com
              </Link>
            </View>
          </View>
        </View>

        <View style={s.hr} />

        {/* ─── TWO COLUMNS ─── */}
        <View style={s.columns}>
          {/* ─── LEFT COLUMN ─── */}
          <View style={s.leftCol}>
            <SectionTitle>Technical Skills</SectionTitle>

            <View style={s.skillGroup}>
              <Text style={s.skillLabel}>Mobile</Text>
              <Text style={s.skillText}>
                React Native, iOS (Swift), Android (Kotlin/Java), Reanimated,
                Skia, Lottie, Rive, CodePush
              </Text>
            </View>
            <View style={s.skillGroup}>
              <Text style={s.skillLabel}>Frontend</Text>
              <Text style={s.skillText}>
                React, Next.js, TypeScript, JavaScript, TailwindCSS,
                Material-UI, Framer Motion, Vite
              </Text>
            </View>
            <View style={s.skillGroup}>
              <Text style={s.skillLabel}>Backend & Data</Text>
              <Text style={s.skillText}>
                Node.js, Supabase, PostgreSQL, Firebase, REST APIs
              </Text>
            </View>
            <View style={s.skillGroup}>
              <Text style={s.skillLabel}>Payments</Text>
              <Text style={s.skillText}>
                Razorpay, Stripe, BillDesk, Cashfree — UPI, Cards, Net Banking,
                Wallets, International
              </Text>
            </View>
            <View style={s.skillGroup}>
              <Text style={s.skillLabel}>Security</Text>
              <Text style={s.skillText}>
                ECDH key exchange, AES/CBC encryption, SSL pinning, FreeRASP,
                ProGuard, Hermes bytecode
              </Text>
            </View>
            <View style={s.skillGroup}>
              <Text style={s.skillLabel}>DevOps & Tools</Text>
              <Text style={s.skillText}>
                Turborepo, Sentry, GA4, Firebase Remote Config, Docker, Vercel,
                Git, Jest, ESLint
              </Text>
            </View>

            <View style={{ marginTop: 14 }} />
            <SectionTitle>Education</SectionTitle>
            <Text style={s.eduTitle}>SRM University</Text>
            <Text style={s.eduMeta}>2018 - 2022</Text>
            <Text style={s.eduDegree}>
              B.Tech in Electronics {"\n"}& Communication Engineering
            </Text>

            <View style={{ marginTop: 14 }} />
            <SectionTitle>Key Projects</SectionTitle>

            <View style={s.projectRow}>
              <Text style={s.projectName}>StreakCard</Text>
              <Text style={s.projectTech}>React Native, TS, Redux, Skia</Text>
              <Text style={s.projectDesc}>
                Fintech app for teens — prepaid card, savings, gold investing,
                7-layer ECDH encryption
              </Text>
            </View>

            <View style={s.projectRow}>
              <Text style={s.projectName}>NFO Checkout Monorepo</Text>
              <Text style={s.projectTech}>React, TS, Turborepo, Razorpay</Text>
              <Text style={s.projectDesc}>
                3 checkout apps with multi-gateway payments, A/B testing,
                dynamic pricing
              </Text>
            </View>

            <View style={s.projectRow}>
              <Text style={s.projectName}>NFO Student Hub</Text>
              <Text style={s.projectTech}>Next.js, TS, TailwindCSS</Text>
              <Text style={s.projectDesc}>
                Student portal with dashboard, proctored tests, certificates, 3
                payment gateways
              </Text>
            </View>

            <View style={s.projectRow}>
              <Text style={s.projectName}>ThirdMeal</Text>
              <Text style={s.projectTech}>
                React 19, Vite, Supabase, Razorpay
              </Text>
              <Text style={s.projectDesc}>
                E-commerce with multi-step checkout, OTP verification
              </Text>
            </View>

            <View style={s.projectRow}>
              <Text style={s.projectName}>Wotter</Text>
              <Text style={s.projectTech}>React Native, TS, Redux Toolkit</Text>
              <Text style={s.projectDesc}>
                Hydration tracker on App Store with RevenueCat subscriptions
              </Text>
            </View>
          </View>

          {/* ─── RIGHT COLUMN ─── */}
          <View style={s.rightCol}>
            <SectionTitle>Summary</SectionTitle>
            <Text style={s.summaryText}>
              Full-stack developer with 4+ years of experience building and
              shipping production applications across mobile and web. Sole
              mobile architect for a funded fintech startup handling sensitive
              payment flows and cryptographic operations. Built and owned entire
              product ecosystems — from React Native apps to Next.js portals to
              monorepo checkout systems. Integrated payment gateways including
              Razorpay, Cashfree, BillDesk, and Stripe across multiple products
              serving thousands of users.
            </Text>

            <View style={{ marginTop: 10 }} />
            <SectionTitle>Work Experience</SectionTitle>

            {/* NFO */}
            <View style={s.jobHeader}>
              <Text style={s.jobTitle}>Senior Full Stack Developer</Text>
            </View>
            <View style={s.jobCompanyRow}>
              <Text style={s.jobCompany}>National Finance Olympiad</Text>
              <Text style={s.jobDate}>
                2022 - Present | Bangalore, Karnataka
              </Text>
            </View>
            <Bullet>
              Shipped 5 production web apps serving 10,000+ students across
              checkout systems, student portal, admin panel, and teacher portal
            </Bullet>
            <Bullet>
              Integrated 3 payment gateways (Razorpay, Stripe, BillDesk)
              processing thousands of transactions with retry logic and
              server-side verification
            </Bullet>
            <Bullet>
              Migrated student portal from CRA to Next.js — reduced First
              Contentful Paint by 75% (3.2s to 0.8s), improving SEO rankings and
              user retention
            </Bullet>
            <Bullet>
              Architected Turborepo monorepo housing 3 checkout apps with A/B
              testing framework and 1,200+ GA4-tracked conversion events
            </Bullet>
            <Bullet>
              Owned end-to-end stack: frontend architecture, backend
              integration, payment flows, CI/CD pipelines, and production
              deployment
            </Bullet>

            {/* Streak */}
            <View style={s.jobHeader}>
              <Text style={s.jobTitle}>Senior Mobile Developer</Text>
            </View>
            <View style={s.jobCompanyRow}>
              <Text style={s.jobCompany}>Streak</Text>
              <Text style={s.jobDate}>
                End of 2021 - 2024 | Bangalore, Karnataka
              </Text>
            </View>
            <Bullet>
              Progressed from intern to sole mobile architect for a funded
              fintech app on iOS and Android with 500,000+ downloads
            </Bullet>
            <Bullet>
              Engineered 7-layer security stack (ECDH key exchange, SSL pinning,
              FreeRASP) with custom Kotlin and Swift native modules for
              encrypted payment flows
            </Bullet>
            <Bullet>
              Built and integrated 5 animation systems (Reanimated, Lottie,
              Rive, Skia) with shared element transitions and Skia-rendered
              squircles
            </Bullet>
            <Bullet>
              Single-handedly shipped a new Fixed Deposits app end-to-end —
              architecture, UI/UX, API integration — and redesigned gold
              investment flow
            </Bullet>
            <Bullet>
              Implemented instant OTA updates via Microsoft CodePush with
              production crash monitoring through Sentry
            </Bullet>

            {/* doyou.ae */}
            <View style={s.jobHeader}>
              <Text style={s.jobTitle}>Frontend Lead</Text>
            </View>
            <View style={s.jobCompanyRow}>
              <Text style={s.jobCompany}>doyou.ae</Text>
              <Text style={s.jobDate}>
                2024 - End of 2025 | Dubai, UAE (Remote)
              </Text>
            </View>
            <Bullet>
              Led frontend development for a Dubai-based startup, building and
              delivering 3 scalable Next.js applications as a freelance lead
              while maintaining full-time role
            </Bullet>
          </View>
        </View>
      </Page>
    </Document>
  );
}
