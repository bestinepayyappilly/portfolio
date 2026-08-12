import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { DownloadResumeButton } from "@/components/ui/download-resume-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: `${DATA.name} — ${DATA.headline}. Resume and work experience.`,
  alternates: {
    canonical: `${DATA.url}/resume`,
  },
};

const BAKI_APP_STORE_URL =
  DATA.projects.find((p) => p.title === "Baki")?.href ?? DATA.url;
const WOTTER_APP_STORE_URL =
  DATA.projects.find((p) => p.title === "Wotter")?.href ?? DATA.url;

export default function ResumePage() {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="flex justify-end mb-6">
        <DownloadResumeButton />
      </div>
      <article
        id="resume-content"
        className="prose max-w-full font-sans text-foreground dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
      >
        {/* Header */}
        <div className="not-prose mb-8 flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">{DATA.name}</h1>
          <p className="text-lg text-muted-foreground">
            {DATA.headline}
          </p>
          <p className="text-sm text-muted-foreground">
            {DATA.location} &middot;{" "}
            <a
              href={`mailto:${DATA.contact.email}`}
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              {DATA.contact.email}
            </a>{" "}
            &middot;{" "}
            <a
              href={`tel:${DATA.contact.tel}`}
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              {DATA.contact.tel}
            </a>
          </p>
          <div className="flex gap-3 text-sm text-muted-foreground">
            <a
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href={DATA.url}
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              {DATA.url.replace("https://", "")}
            </a>
          </div>
        </div>

        <hr />

        {/* Summary */}
        <h2>Summary</h2>
        <p>{DATA.summary}</p>

        <hr />

        {/* Core Technical Expertise */}
        <h2>Core Technical Expertise</h2>
        <ul>
          {DATA.expertise.map((group) => (
            <li key={group.label}>
              <strong>{group.label}:</strong> {group.items}
            </li>
          ))}
        </ul>

        <hr />

        {/* Work Experience */}
        <h2>Professional Experience</h2>

        {DATA.work.map((job) => (
          <div key={job.company}>
            <h3>
              <a
                href={job.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground transition-colors"
              >
                {job.company}
              </a>{" "}
              {job.badges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium bg-muted px-1.5 py-0.5 rounded"
                >
                  {badge}
                </span>
              ))}
            </h3>
            <p className="text-sm! mt-0!">
              {job.start} – {job.end} &middot; {job.location}
            </p>
            <p className="text-sm!">{job.description}</p>
            {job.roles.map((role) => (
              <div key={role.title + role.start}>
                <p className="mb-1! font-semibold text-foreground">
                  {role.title}
                  {job.roles.length > 1 && (
                    <span className="ml-2 font-normal text-sm text-muted-foreground">
                      {role.start} – {role.end}
                    </span>
                  )}
                </p>
                <ul className="mt-0!">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        <hr />

        {/* Leadership */}
        <h2>Leadership Experience</h2>
        <ul>
          {DATA.leadership.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <hr />

        {/* Projects */}
        <h2>Personal Projects</h2>

        <h3>
          <a
            href={BAKI_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Baki
          </a>{" "}
          <span className="inline-flex items-center gap-1 text-xs font-medium bg-muted px-1.5 py-0.5 rounded align-middle">
            <Icons.apple className="size-3" />
            Live on the App Store
          </span>
        </h3>
        <p className="text-sm! mt-0!">
          React Native &middot; TypeScript &middot; Supabase &middot; RevenueCat
          &middot; Reanimated 4 &middot; Skia
        </p>
        <ul>
          <li>
            Commitment-first budgeting app for iOS, built and shipped solo —
            shows real available balance (salary minus locked commitments minus
            spending) before you spend
          </li>
          <li>
            Bare React Native on the New Architecture, with a five-mode
            split-expense system, AI trip planning, and a paid tier on RevenueCat
          </li>
        </ul>

        <h3>
          <a
            href={WOTTER_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Wotter
          </a>{" "}
          <span className="inline-flex items-center gap-1 text-xs font-medium bg-muted px-1.5 py-0.5 rounded align-middle">
            <Icons.apple className="size-3" />
            Live on the App Store
          </span>
        </h3>
        <p className="text-sm! mt-0!">
          React Native &middot; TypeScript &middot; Redux Toolkit &middot; Skia
          &middot; MMKV
        </p>
        <ul>
          <li>
            Cross-platform hydration tracker for iOS and Android — onboarding,
            local notification reminders, and subscription management
          </li>
        </ul>

        <hr />

        {/* Education */}
        <h2>Education</h2>
        <p>
          <strong>SRM University</strong> — B.Tech, Electronics &amp;
          Communication Engineering &middot; 2022
        </p>
      </article>
    </section>
  );
}
