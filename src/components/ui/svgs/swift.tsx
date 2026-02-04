/* eslint-disable @next/next/no-img-element */
import type { HTMLAttributes } from "react";

const Swift = (props: HTMLAttributes<HTMLImageElement>) => (
  <img {...props} src="/swift.png" alt="Swift" />
);

export { Swift };
