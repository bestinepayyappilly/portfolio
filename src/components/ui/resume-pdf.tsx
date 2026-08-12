import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  Svg,
  Path,
} from "@react-pdf/renderer";
import { DATA } from "@/data/resume";

const APPLE_LOGO_PATH =
  "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.417-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701";

const c = {
  black: "#000000",
  dark: "#111111",
  body: "#2f2f2f",
  muted: "#555555",
  light: "#7a7a7a",
  border: "#dcdcdc",
  accent: "#1d4ed8",
  white: "#ffffff",
};

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    color: c.dark,
    backgroundColor: c.white,
    paddingTop: 38,
    paddingBottom: 40,
    paddingHorizontal: 44,
    lineHeight: 1.45,
  },
  // Header
  header: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 700,
    color: c.black,
    letterSpacing: -0.4,
    lineHeight: 1.15,
  },
  subtitle: {
    fontSize: 11.5,
    color: c.dark,
    marginTop: 4,
    letterSpacing: 0.2,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
    gap: 4,
  },
  contactRowTight: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 2,
    gap: 4,
  },
  contactText: { fontSize: 9, color: c.muted },
  link: { fontSize: 9, color: c.accent, textDecoration: "none" },
  sep: { fontSize: 9, color: c.light },
  // Sections
  section: { marginTop: 16 },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: c.black,
    marginBottom: 8,
    textTransform: "uppercase",
    // Kept low on purpose: wider tracking makes pdftotext (and ATS parsers)
    // extract section headings as "S U M M A RY" instead of "SUMMARY"
    letterSpacing: 0.6,
    borderBottomWidth: 0.75,
    borderBottomColor: c.border,
    paddingBottom: 4,
  },
  summaryText: { fontSize: 10, color: c.body, lineHeight: 1.5 },
  // Expertise
  skillRow: { flexDirection: "row", marginBottom: 4 },
  skillLabel: {
    width: 118,
    fontSize: 9.5,
    fontWeight: 700,
    color: c.black,
  },
  skillText: { flex: 1, fontSize: 9.5, color: c.body, lineHeight: 1.4 },
  // Experience
  companyBlock: { marginBottom: 12 },
  companyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  companyName: { fontSize: 12, fontWeight: 700, color: c.black },
  companyMeta: { fontSize: 9, color: c.muted },
  companyNote: {
    fontSize: 9,
    color: c.muted,
    fontStyle: "italic",
    marginTop: 2,
    marginBottom: 2,
  },
  roleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: 7,
    marginBottom: 3,
  },
  roleTitle: { fontSize: 10, fontWeight: 700, color: c.body, flex: 1 },
  roleDate: { fontSize: 9, color: c.light },
  // Bullets
  bullet: { flexDirection: "row", marginBottom: 3, paddingRight: 4 },
  bulletDot: { width: 10, fontSize: 9.5, color: c.light },
  bulletText: { flex: 1, fontSize: 9.5, color: c.body, lineHeight: 1.45 },
  // Projects
  projectRow: { marginBottom: 8 },
  projectHead: { flexDirection: "row", alignItems: "center", gap: 4 },
  projectName: { fontSize: 10.5, fontWeight: 700, color: c.black },
  projectNameLink: {
    fontSize: 10.5,
    fontWeight: 700,
    color: c.accent,
    textDecoration: "none",
  },
  projectDesc: { fontSize: 9.5, color: c.body, lineHeight: 1.4, marginTop: 2 },
  projectTech: { fontSize: 9, color: c.light, fontStyle: "italic", marginTop: 1 },
  // Education
  eduRow: { flexDirection: "row", justifyContent: "space-between" },
  eduText: { fontSize: 10, color: c.body },
  eduDate: { fontSize: 9, color: c.light },
});

const BAKI_APP_STORE_URL =
  DATA.projects.find((p) => p.title === "Baki")?.href ?? DATA.url;
const WOTTER_APP_STORE_URL =
  DATA.projects.find((p) => p.title === "Wotter")?.href ?? DATA.url;

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

function AppleMark() {
  return (
    <Svg width={8} height={8} viewBox="0 0 24 24">
      <Path d={APPLE_LOGO_PATH} fill={c.accent} />
    </Svg>
  );
}

export function ResumePDF() {
  return (
    <Document
      title="Bestine Payyappilly — Resume"
      author="Bestine Payyappilly"
      subject={DATA.headline}
    >
      <Page size="A4" style={s.page}>
        {/* ─── HEADER ─── */}
        <View style={s.header}>
          <Text style={s.name}>Bestine Payyappilly</Text>
          <Text style={s.subtitle}>{DATA.headline}</Text>
          {/* Split across two rows so the line never wraps mid-separator */}
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
          </View>
          <View style={s.contactRowTight}>
            <Link
              src="https://linkedin.com/in/bestine-payyappilly"
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

        {/* ─── SUMMARY ─── */}
        <View style={s.section}>
          <SectionTitle>Summary</SectionTitle>
          <Text style={s.summaryText}>{DATA.summary}</Text>
        </View>

        {/* ─── CORE TECHNICAL EXPERTISE ─── */}
        <View style={s.section}>
          <SectionTitle>Core Technical Expertise</SectionTitle>
          {DATA.expertise.map((group) => (
            <View key={group.label} style={s.skillRow} wrap={false}>
              <Text style={s.skillLabel}>{group.label}</Text>
              <Text style={s.skillText}>{group.items}</Text>
            </View>
          ))}
        </View>

        {/* ─── EXPERIENCE ─── */}
        <View style={s.section}>
          <SectionTitle>Professional Experience</SectionTitle>
          {DATA.work.map((job) => {
            const [firstRole, ...restRoles] = job.roles;
            const [firstBullet, ...restBullets] = firstRole.bullets;
            return (
              <View key={job.company} style={s.companyBlock}>
                {/* Company heading, its first role, and that role's first
                    bullet travel together, so a heading never strands itself
                    at the foot of a page */}
                <View wrap={false}>
                  <View style={s.companyRow}>
                    <Text style={s.companyName}>
                      {job.company}
                      {job.badges.length > 0 && ` (${job.badges.join(", ")})`}
                    </Text>
                    <Text style={s.companyMeta}>
                      {job.start} – {job.end} | {job.location}
                    </Text>
                  </View>
                  <View style={s.roleRow}>
                    <Text style={s.roleTitle}>{firstRole.title}</Text>
                    <Text style={s.roleDate}>
                      {firstRole.start} – {firstRole.end}
                    </Text>
                  </View>
                  <Bullet>{firstBullet}</Bullet>
                </View>
                {restBullets.map((bullet) => (
                  <Bullet key={bullet}>{bullet}</Bullet>
                ))}
                {restRoles.map((role) => (
                  <View key={role.title + role.start}>
                    <View style={s.roleRow} wrap={false} minPresenceAhead={60}>
                      <Text style={s.roleTitle}>{role.title}</Text>
                      <Text style={s.roleDate}>
                        {role.start} – {role.end}
                      </Text>
                    </View>
                    {role.bullets.map((bullet) => (
                      <Bullet key={bullet}>{bullet}</Bullet>
                    ))}
                  </View>
                ))}
              </View>
            );
          })}
        </View>

        {/* ─── LEADERSHIP EXPERIENCE ─── */}
        <View style={s.section}>
          <SectionTitle>Leadership Experience</SectionTitle>
          {DATA.leadership.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </View>

        {/* ─── SELECTED PROJECTS ─── */}
        <View style={s.section}>
          <SectionTitle>Personal Projects</SectionTitle>

          <View style={s.projectRow} wrap={false}>
            <View style={s.projectHead}>
              <AppleMark />
              <Link src={BAKI_APP_STORE_URL} style={s.projectNameLink}>
                Baki — live on the App Store
              </Link>
            </View>
            <Text style={s.projectDesc}>
              Commitment-first budgeting app for iOS, built and shipped solo —
              real available balance, a five-mode split-expense system, AI trip
              planning, and a paid tier on RevenueCat.
            </Text>
            <Text style={s.projectTech}>
              React Native, TypeScript, Supabase, RevenueCat, Reanimated 4, Skia
            </Text>
          </View>

          <View style={s.projectRow} wrap={false}>
            <View style={s.projectHead}>
              <AppleMark />
              <Link src={WOTTER_APP_STORE_URL} style={s.projectNameLink}>
                Wotter — live on the App Store
              </Link>
            </View>
            <Text style={s.projectDesc}>
              Cross-platform hydration tracker for iOS and Android — onboarding,
              local notification reminders, and subscription management.
            </Text>
            <Text style={s.projectTech}>
              React Native, TypeScript, Redux Toolkit, Skia, MMKV
            </Text>
          </View>
        </View>

        {/* ─── EDUCATION ─── */}
        <View style={s.section}>
          <SectionTitle>Education</SectionTitle>
          <View style={s.eduRow} wrap={false}>
            <Text style={s.eduText}>
              SRM University — B.Tech, Electronics &amp; Communication
              Engineering
            </Text>
            <Text style={s.eduDate}>2022</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
