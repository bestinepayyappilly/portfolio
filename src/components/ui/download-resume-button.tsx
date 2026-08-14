"use client";

import { Download, Loader2 } from "lucide-react";
import { useCallback, useState } from "react";
import { RESUME_VARIANTS, type VariantSlug } from "@/data/resume-variants";
import { cn } from "@/lib/utils";

export function DownloadResumeButton({
  variant = "mobile",
  className,
}: {
  variant?: VariantSlug;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);
  const config = RESUME_VARIANTS[variant];

  const handleDownload = useCallback(async () => {
    setLoading(true);
    try {
      const [{ pdf }, { ResumePDF }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/ui/resume-pdf"),
      ]);

      const blob = await pdf(<ResumePDF variant={variant} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = config.fileName;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    } finally {
      setLoading(false);
    }
  }, [variant, config.fileName]);

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border bg-background hover:bg-accent transition-colors disabled:opacity-50 cursor-pointer",
        className,
      )}
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <Download className="size-4" />
      )}
      {loading ? "Generating..." : `${config.label} PDF`}
    </button>
  );
}
