import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { TextAnimate } from "@/components/ui/text-animate";

export default function ContactSection() {
  return (
    <div className="p-10 relative">
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 overflow-hidden rounded-2xl">
        <FlickeringGrid
          className="h-full w-screen opacity-50. mix-blend-overlay"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <TextAnimate
          as="h2"
          className="text-3xl font-bold tracking-tighter sm:text-5xl"
          animation="blurInUp"
          by="word"
        >
          Get in Touch
        </TextAnimate>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Want to chat? Feel free to reach out via{" "}
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            LinkedIn
          </Link>{" "}
          or send me an email at{" "}
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            {DATA.contact.email}
          </Link>
          . I&apos;ll respond whenever I can.
        </p>
      </div>
    </div>
  );
}
