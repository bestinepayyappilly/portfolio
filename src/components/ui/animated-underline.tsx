"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface UnderlineData {
  width: number;
  height: number;
  viewBox: string;
  path: string;
  strokeWidth?: number;
  strokeDasharray?: string;
}

const underlines: Record<string, UnderlineData> = {
  about: {
    width: 104,
    height: 10,
    viewBox: "0 0 104 10",
    path: "M5 1.59007C40 -0.90865 63 5.59072 102 1.59038C65.5 3.01726 1 8.08882 1 8.08882C9.5 5.08882 67 -2.41118 102.5 8.58882",
  },
  workExperience: {
    width: 187,
    height: 14,
    viewBox: "0 0 187 14",
    path: "M73 2.7799C135.427 -1.37439 114.5 2.77971 186 4.7797C117.255 2.98113 1 12.5393 1 12.5393C4.23189 9.38347 116.5 -2.22002 181.5 9.27971",
  },
  skills: {
    width: 60,
    height: 5,
    viewBox: "0 0 60 5",
    path: "M1 3.92046C24.0216 -0.0556488 36.5962 0.109552 59 3.92046",
  },
};

interface AnimatedUnderlineProps {
  variant: keyof typeof underlines;
  className?: string;
  delay?: number;
  duration?: number;
  stroke?: string;
}

export function AnimatedUnderline({
  variant,
  className,
  delay = 0,
  duration = 0.8,
  stroke = "#EC1D23",
}: AnimatedUnderlineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const data = underlines[variant];

  return (
    <svg
      ref={ref}
      width={data.width}
      height={data.height}
      viewBox={data.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d={data.path}
        stroke={stroke}
        strokeWidth={data.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={data.strokeDasharray}
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}
