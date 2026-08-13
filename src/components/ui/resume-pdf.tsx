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
import { splitBoldSegments } from "@/lib/bold-text";

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
    paddingTop: 32,
    paddingBottom: 34,
    paddingHorizontal: 44,
    lineHeight: 1.45,
  },
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
  section: { marginTop: 12 },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: c.black,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.6,
    borderBottomWidth: 0.75,
    borderBottomColor: c.border,
    paddingBottom: 4,
  },
  summaryText: { fontSize: 10, color: c.body, lineHeight: 1.5 },
  skillRow: { flexDirection: "row", marginBottom: 4 },
  skillLabel: {
    width: 118,
    fontSize: 9.5,
    fontWeight: 700,
    color: c.black,
  },
  skillText: { flex: 1, fontSize: 9.5, color: c.body, lineHeight: 1.4 },
  companyBlock: { marginBottom: 10 },
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
  bullet: { flexDirection: "row", marginBottom: 2, paddingRight: 4 },
  bulletDot: { width: 10, fontSize: 9.5, color: c.light },
  bulletText: { flex: 1, fontSize: 9.5, color: c.body, lineHeight: 1.45 },
  bold: { fontFamily: "Helvetica-Bold", color: c.black },
  projectRow: { marginBottom: 7 },
  projectHead: { flexDirection: "row", alignItems: "center", gap: 4 },
  projectNameLink: {
    fontSize: 10.5,
    fontWeight: 700,
    color: c.accent,
    textDecoration: "none",
  },
  projectDesc: { fontSize: 9.5, color: c.body, lineHeight: 1.4, marginTop: 2 },
  eduRow: { flexDirection: "row", justifyContent: "space-between" },
  eduText: { fontSize: 10, color: c.body },
  eduDate: { fontSize: 9, color: c.light },
});

const BAKI_APP_STORE_URL =
  DATA.projects.find((p) => p.title === "Baki")?.href ?? DATA.url;
const WOTTER_APP_STORE_URL =
  DATA.projects.find((p) => p.title === "Wotter")?.href ?? DATA.url;

function InlineText({
  text,
  style,
}: {
  text: string;
  style: typeof s.bulletText | typeof s.summaryText;
}) {
  return (
    <Text style={style}>
      {splitBoldSegments(text).map((seg, i) =>
        seg.bold ? (
          <Text key={i} style={s.bold}>
            {seg.text}
          </Text>
        ) : (
          <Text key={i}>{seg.text}</Text>
        ),
      )}
    </Text>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <View style={s.bullet} wrap={false}>
      <Text style={s.bulletDot}>•</Text>
      <InlineText text={text} style={s.bulletText} />
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
        <View style={s.header}>
          <Text style={s.name}>Bestine Payyappilly</Text>
          <Text style={s.subtitle}>{DATA.headline}</Text>
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

        <View style={s.section}>
          <SectionTitle>Summary</SectionTitle>
          <InlineText text={DATA.summary} style={s.summaryText} />
        </View>

        <View style={s.section}>
          <SectionTitle>Core Technical Expertise</SectionTitle>
          {DATA.expertise.map((group) => (
            <View key={group.label} style={s.skillRow} wrap={false}>
              <Text style={s.skillLabel}>{group.label}</Text>
              <Text style={s.skillText}>{group.items}</Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <SectionTitle>Professional Experience</SectionTitle>
          {DATA.work.map((job) => {
            const [firstRole, ...restRoles] = job.roles;
            const [firstBullet, ...restBullets] = firstRole.bullets;
            return (
              <View key={job.company} style={s.companyBlock}>
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
                  {"note" in job && job.note && (
                    <Text style={s.companyNote}>{job.note}</Text>
                  )}
                  <View style={s.roleRow}>
                    <Text style={s.roleTitle}>{firstRole.title}</Text>
                    <Text style={s.roleDate}>
                      {firstRole.start} – {firstRole.end}
                    </Text>
                  </View>
                  <Bullet text={firstBullet} />
                </View>
                {restBullets.map((bullet) => (
                  <Bullet key={bullet} text={bullet} />
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
                      <Bullet key={bullet} text={bullet} />
                    ))}
                  </View>
                ))}
              </View>
            );
          })}
        </View>

        <View style={s.section}>
          <SectionTitle>Personal Projects</SectionTitle>

          <View style={s.projectRow} wrap={false}>
            <View style={s.projectHead}>
              <AppleMark />
              <Link src={BAKI_APP_STORE_URL} style={s.projectNameLink}>
                Baki — Live on the App Store
              </Link>
            </View>
            <Text style={s.projectDesc}>
              Designed, built, and shipped solo — commitment-first budgeting
              that shows real available balance before you spend, with
              five-mode expense splitting and a paid subscription tier.
            </Text>
          </View>

          <View style={s.projectRow} wrap={false}>
            <View style={s.projectHead}>
              <AppleMark />
              <Link src={WOTTER_APP_STORE_URL} style={s.projectNameLink}>
                Wotter — Live on the App Store
              </Link>
            </View>
            <Text style={s.projectDesc}>
              Sole engineer, partnered with a designer — hydration tracking
              with onboarding, local notification reminders, and subscription
              management.
            </Text>
          </View>
        </View>

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
