import { DATA } from "@/data/resume";
import { RESUME_VARIANTS } from "@/data/resume-variants";
import { ResumeArticle } from "@/components/ui/resume-article";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume: Mobile",
  description: `${DATA.name}, ${RESUME_VARIANTS.mobile.headline}. Resume and work experience.`,
  alternates: {
    canonical: `${DATA.url}/resume/mobile`,
  },
};

export default function MobileResumePage() {
  return <ResumeArticle variant="mobile" />;
}
