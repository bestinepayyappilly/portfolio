"use client";

import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const quips = [
  "Curious one, aren't you? 😏",
  "Nothing to see here... or is there? 👀",
  "You found the secret scroll zone 🕵️",
  "Pull harder, I dare you 💪",
  "Hey! That tickles 🤭",
  "Easter egg unlocked: +10 curiosity 🥚",
  "Shh... this page has feelings 🥺",
  "You scroll, I appear. It's our thing now 🫶",
  "Go build something cool instead 🚀",
  "Plot twist: the real portfolio was the scrolling 📜",
  "You've reached the top. Now what? 🤔",
  "I see you like living on the edge... of the page 🧗",
];

export function PullToReveal() {
  const [text, setText] = useState("");
  const lastIndex = useRef(-1);

  const pickRandom = useCallback(() => {
    let idx: number;
    do {
      idx = Math.floor(Math.random() * quips.length);
    } while (idx === lastIndex.current && quips.length > 1);
    lastIndex.current = idx;
    return quips[idx];
  }, []);

  // Pick initial text on mount, then rotate every 3 seconds
  useEffect(() => {
    setText(pickRandom());
    const interval = setInterval(() => setText(pickRandom()), 3000);
    return () => clearInterval(interval);
  }, [pickRandom]);

  return (
    <div className="fixed inset-0 -z-10 flex items-start justify-center pt-8 bg-muted dark:bg-neutral-900">
      <motion.p
        key={text}
        className="text-lg font-medium text-muted-foreground select-none"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.p>
    </div>
  );
}
