"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const lassoRef = useRef(null);
  const isInView = useInView(lassoRef, { once: true, margin: "-100px" });

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                My Projects
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Check out my{" "}
              <span className="relative inline-block" ref={lassoRef}>
                latest
                <svg
                  width="110"
                  height="80"
                  viewBox="0 0 103 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -top-3 -left-2 -right-2 -bottom-3 w-[calc(100%+20px)] h-[calc(100%+30px)] pointer-events-none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M83.7062 1.50049C52.1881 9.00146 -2.10007 4.50146 1.68824 31.5015C5.47655 58.5015 104.688 95.5015 101.206 48.0025C97.723 0.503464 14.2064 6.50073 14.2064 6.50073"
                    stroke="#FF030B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="0"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      isInView
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                  />
                </svg>
              </span>{" "}
              work
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-[1200px] mx-auto auto-rows-fr">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
                blogs={project.blogs}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
