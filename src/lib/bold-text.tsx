import React from "react";

/**
 * Split a string with **bold** markers into segments for web / PDF rendering.
 * ATS still sees the plain words; bold is visual-only for human scanning.
 */
type Segment = { text: string; bold: boolean };

export function splitBoldSegments(text: string): Segment[] {
  return text.split(/(\*\*[^*]+\*\*)/g).flatMap<Segment>((part) => {
    if (!part) return [];
    if (part.startsWith("**") && part.endsWith("**")) {
      return [{ text: part.slice(2, -2), bold: true }];
    }
    return [{ text: part, bold: false }];
  });
}

export function BoldText({ text }: { text: string }) {
  return (
    <>
      {splitBoldSegments(text).map((seg, i) =>
        seg.bold ? <strong key={i}>{seg.text}</strong> : seg.text,
      )}
    </>
  );
}
