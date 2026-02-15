"use client";

import { Download, Loader2 } from "lucide-react";
import { useCallback, useState } from "react";

async function loadAvatarAsDataUri(): Promise<string | undefined> {
  try {
    const res = await fetch("/me.webp");
    const blob = await res.blob();
    // Convert webp to png via canvas for react-pdf compatibility
    const img = document.createElement("img");
    const url = URL.createObjectURL(blob);
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = url;
    });
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;
    ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(url);
    return canvas.toDataURL("image/png");
  } catch {
    return undefined;
  }
}

export function DownloadResumeButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = useCallback(async () => {
    setLoading(true);
    try {
      const [{ pdf }, { ResumePDF }, avatarDataUri] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/ui/resume-pdf"),
        loadAvatarAsDataUri(),
      ]);

      const blob = await pdf(<ResumePDF avatarDataUri={avatarDataUri} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Bestine_Payyappilly_Resume.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border bg-background hover:bg-accent transition-colors disabled:opacity-50 cursor-pointer"
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <Download className="size-4" />
      )}
      {loading ? "Generating..." : "Download PDF"}
    </button>
  );
}
