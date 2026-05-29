/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

export function BlogCarousel({
  screenshots,
  title,
}: {
  screenshots: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const n = screenshots.length;

  const tick = useCallback(() => {
    if (!paused.current) {
      setActive((i) => (i + 1) % n);
    }
  }, [n]);

  useEffect(() => {
    const id = setInterval(tick, 2500);
    return () => clearInterval(id);
  }, [tick]);

  function getOffset(i: number) {
    let offset = i - active;
    if (offset > n / 2) offset -= n;
    if (offset < -n / 2) offset += n;
    return offset;
  }

  return (
    <div
      className="relative flex items-center justify-center h-[340px] w-full overflow-hidden my-6"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      {screenshots.map((src, i) => {
        const offset = getOffset(i);
        const abs = Math.abs(offset);
        if (abs > 2) return null;

        const scale = abs === 0 ? 1 : abs === 1 ? 0.72 : 0.52;
        const opacity = abs === 0 ? 1 : abs === 1 ? 0.5 : 0.2;
        const translateX = offset * 130;
        const zIndex = 10 - abs;

        return (
          <img
            key={src}
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            onClick={() => setActive(i)}
            className="absolute h-[300px] w-auto object-contain cursor-pointer"
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
