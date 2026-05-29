/* eslint-disable @next/next/no-img-element */

interface Props {
  href: string;
  websiteHref?: string;
}

export function AppStoreBadge({ href, websiteHref }: Props) {
  return (
    <div className="not-prose flex flex-wrap items-center gap-4 my-8">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src="/baki/appstore-badge.svg"
          alt="Download on the App Store"
          className="h-12 w-auto"
        />
      </a>
      {websiteHref && (
        <a
          href={websiteHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
        >
          Visit website →
        </a>
      )}
    </div>
  );
}
