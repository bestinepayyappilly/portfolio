import { DATA } from "@/data/resume";
import { RESUME_VARIANTS } from "@/data/resume-variants";
import { ResumeArticle } from "@/components/ui/resume-article";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume: Product",
  description: `${DATA.name}, ${RESUME_VARIANTS.product.headline}. Resume and work experience.`,
  alternates: {
    canonical: `${DATA.url}/resume/product`,
  },
};

export default function ProductResumePage() {
  return <ResumeArticle variant="product" />;
}
