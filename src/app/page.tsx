/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import type { Metadata } from "next";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { AnimatedUnderline } from "@/components/ui/animated-underline";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  alternates: {
    canonical: DATA.url,
  },
};

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className=" max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="order-1 md:order-2 overflow-visible"
            >
              <div className="relative overflow-visible">
                <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>

                {/* <div className="absolute -bottom-28 -right-12 md:-bottom-32 md:-right-16 pointer-events-none flex flex-col items-center">
                  <img
                    src="/AvatarLasso.png"
                    alt=""
                    className="mt-5 w-[500px] h-[500px] md:w-[201px] md:h-[150px] pointer-events-none"
                    aria-hidden="true"
                  />
                  <img
                    src="/Arrow.svg"
                    alt=""
                    className="w-16 md:w-20 -rotate-12"
                    aria-hidden="true"
                  />
                  <img
                    src="/ThatsMeIllustration.svg"
                    alt=""
                    className="w-20 md:w-24 -mt-2"
                    aria-hidden="true"
                  />
                </div> */}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="max-w-4xl mx-auto w-full">
        <div className="flex min-h-0 flex-col gap-y-4">
          <div className="relative w-fit">
            <TextAnimate
              as="h2"
              className="text-xl font-bold"
              animation="blurInUp"
              by="word"
              once
              delay={BLUR_FADE_DELAY * 3}
            >
              About
            </TextAnimate>
            <AnimatedUnderline
              variant="about"
              className="absolute -bottom-1 left-0 w-full"
              delay={BLUR_FADE_DELAY * 3}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work" className="max-w-4xl mx-auto w-full">
        <div className="flex min-h-0 flex-col gap-y-6">
          <div className="relative w-fit">
            <TextAnimate
              as="h2"
              className="text-xl font-bold"
              animation="blurInUp"
              by="word"
              once
              delay={BLUR_FADE_DELAY * 5}
            >
              Work Experience
            </TextAnimate>
            <AnimatedUnderline
              variant="workExperience"
              className="absolute -bottom-2 left-0 w-full"
              delay={BLUR_FADE_DELAY * 5}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education" className="max-w-4xl mx-auto w-full">
        <div className="flex min-h-0 flex-col gap-y-6">
          <TextAnimate
            as="h2"
            className="text-xl font-bold"
            animation="blurInUp"
            by="word"
            once
            delay={BLUR_FADE_DELAY * 7}
          >
            Education
          </TextAnimate>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="max-w-4xl mx-auto w-full">
        <div className="flex min-h-0 flex-col gap-y-4">
          <div className="relative w-fit">
            <TextAnimate
              as="h2"
              className="text-xl font-bold"
              animation="blurInUp"
              by="word"
              once
              delay={BLUR_FADE_DELAY * 9}
            >
              Skills
            </TextAnimate>
            <AnimatedUnderline
              variant="skills"
              className="absolute -bottom-1 left-0 w-full"
              delay={BLUR_FADE_DELAY * 9}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {skill.icon && (
                    <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                  )}
                  <span className="text-foreground text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      {DATA.hackathons.length > 0 && (
        <section id="hackathons">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <HackathonsSection />
          </BlurFade>
        </section>
      )}
      <section id="contact" className="max-w-4xl mx-auto w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
