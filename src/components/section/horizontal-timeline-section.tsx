/* eslint-disable @next/next/no-img-element */
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";

export default function HorizontalTimelineSection() {
  return (
    <section id="horizontal-timeline" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-6">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Hackathons</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">I like building things</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              During my time in university, I attended {DATA.hackathons.length}+
              hackathons. People from around the country would come together and
              build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.
            </p>
          </div>
        </div>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background to-transparent" />
          <div className="w-full overflow-x-auto py-6">
            <div className="flex">
              <div className="shrink-0 w-10" />
              <Timeline orientation="horizontal">
                {DATA.hackathons.slice(0, 5).map((hackathon) => (
                  <TimelineItem key={hackathon.title + hackathon.dates} className="min-w-32">
                    <TimelineConnectItem>
                      {hackathon.image ? (
                        <img
                          src={hackathon.image}
                          alt={hackathon.title}
                          className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                        />
                      ) : (
                        <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                      )}
                    </TimelineConnectItem>
                    <div className="flex flex-col items-center gap-1 mt-3 text-center">
                      <h3 className="text-sm font-semibold leading-tight">{hackathon.title}</h3>
                      <time className="text-xs text-muted-foreground">{hackathon.dates}</time>
                    </div>
                  </TimelineItem>
                ))}
              </Timeline>
              <div className="shrink-0 w-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
