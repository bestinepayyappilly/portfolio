import { DATA } from "@/data/resume";
import { RESUME_VARIANTS } from "@/data/resume-variants";
import { ResumeArticle } from "@/components/ui/resume-article";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Frontend",
  description: `${DATA.name} — ${RESUME_VARIANTS.frontend.headline}. Resume and work experience.`,
  alternates: {
    canonical: `${DATA.url}/resume/frontend`,
  },
};

export default function FrontendResumePage() {
  return <ResumeArticle variant="frontend" />;
}
