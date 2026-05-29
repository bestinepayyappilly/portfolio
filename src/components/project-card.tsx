/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, NotebookPen } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-fit h-52 object-contain shadow-xl rounded-2xl overflow-hidden bg-white"
      onError={() => setImageError(true)}
    />
  );
}

function ScreenshotCarousel({
  screenshots,
  title,
}: {
  screenshots: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = screenshots.length;

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setActive((i) => (i + 1) % n);
    }, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, n]);

  // For each screenshot, compute its position relative to active (-2, -1, 0, 1, 2)
  function getOffset(i: number) {
    let offset = i - active;
    // wrap around
    if (offset > n / 2) offset -= n;
    if (offset < -n / 2) offset += n;
    return offset;
  }

  return (
    <div
      className="relative flex items-center justify-center h-56 w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {screenshots.map((src, i) => {
        const offset = getOffset(i);
        const abs = Math.abs(offset);
        // Only render items within 2 positions of center
        if (abs > 2) return null;

        const scale = abs === 0 ? 1 : abs === 1 ? 0.72 : 0.52;
        const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0.25;
        const translateX = offset * 105; // px gap between items
        const zIndex = 10 - abs;

        return (
          <img
            key={src}
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            onClick={() => setActive(i)}
            className="absolute h-48 w-auto object-contain cursor-pointer"
            style={{
              transform: `translateX(${translateX}px) scale(${scale})`,
              opacity,
              zIndex,
              transition:
                "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease",
            }}
          />
        );
      })}
    </div>
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  screenshots?: readonly string[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  blogs?: readonly {
    title: string;
    slug: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  screenshots,
  links,
  blogs,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-3xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
        className,
      )}
    >
      <div className="relative shrink-0 overflow-hidden">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 flex items-center justify-center"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-fit h-52 object-contain shadow-xl rounded-2xl overflow-hidden bg-black"
            />
          ) : screenshots && screenshots.length > 1 ? (
            <ScreenshotCarousel screenshots={[...screenshots]} title={title} />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-52 bg-muted" />
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 rounded-full text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {blogs && blogs.length > 0 && (
          <div className="flex flex-col gap-1.5">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group/blog"
              >
                <NotebookPen className="size-3 shrink-0" />
                <span className="group-hover/blog:underline underline-offset-2">
                  {blog.title}
                </span>
              </Link>
            ))}
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
