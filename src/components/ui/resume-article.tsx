import Link from "next/link";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { DownloadResumeButton } from "@/components/ui/download-resume-button";
import { BoldText } from "@/lib/bold-text";
import {
  RESUME_VARIANTS,
  orderedWork,
  type VariantSlug,
} from "@/data/resume-variants";
import { cn } from "@/lib/utils";

const VARIANT_PATH: Record<VariantSlug, string> = {
  mobile: "/resume",
  frontend: "/resume/frontend",
};

function VariantSwitcher({ active }: { active: VariantSlug }) {
  return (
    <div className="inline-flex rounded-lg border border-border p-0.5 text-sm">
      {(Object.keys(RESUME_VARIANTS) as VariantSlug[]).map((slug) => (
        <Link
          key={slug}
          href={VARIANT_PATH[slug]}
          className={cn(
            "px-3 py-1.5 rounded-md transition-colors",
            slug === active
              ? "bg-muted font-medium text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {RESUME_VARIANTS[slug].label}
        </Link>
      ))}
    </div>
  );
}

export function ResumeArticle({ variant }: { variant: VariantSlug }) {
  const v = RESUME_VARIANTS[variant];
  const work = orderedWork(v);

  return (
    <section className="max-w-3xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <VariantSwitcher active={variant} />
        <DownloadResumeButton variant={variant} />
      </div>
      <article
        id="resume-content"
        className="prose max-w-full font-sans text-foreground dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
      >
        <div className="not-prose mb-8 flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">{DATA.name}</h1>
          <p className="text-lg text-muted-foreground">{v.headline}</p>
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

        <h2>Summary</h2>
        <p>
          <BoldText text={v.summary} />
        </p>

        <hr />

        <h2>Core Technical Expertise</h2>
        <ul>
          {v.expertise.map((group) => (
            <li key={group.label}>
              <strong>{group.label}:</strong> {group.items}
            </li>
          ))}
        </ul>

        <hr />

        <h2>Professional Experience</h2>

        {work.map((job) => (
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
            {"note" in job && job.note && (
              <p className="text-sm! italic mt-0!">{job.note}</p>
            )}
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
                    <li key={bullet}>
                      <BoldText text={bullet} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        <hr />

        <h2>Personal Projects</h2>

        {v.projects.map((project) => (
          <div key={project.name}>
            <h3>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}{" "}
              {project.appStore && (
                <span className="inline-flex items-center gap-1 text-xs font-medium bg-muted px-1.5 py-0.5 rounded align-middle">
                  <Icons.apple className="size-3" />
                  Live on the App Store
                </span>
              )}
            </h3>
            <p>{project.description}</p>
          </div>
        ))}

        <hr />

        <h2>Education</h2>
        <p>
          <strong>SRM University</strong>, B.Tech, Electronics &amp;
          Communication Engineering &middot; 2022
        </p>
      </article>
    </section>
  );
}
