/* eslint-disable @next/next/no-img-element */

interface Props {
  images: string[];
  alt?: string;
}

export function ScreenshotRow({ images, alt = "" }: Props) {
  return (
    <div className="not-prose flex gap-4 justify-start flex-wrap my-6">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          className="h-64 w-auto object-contain rounded-xl shadow-md ring-1 ring-border"
        />
      ))}
    </div>
  );
}
