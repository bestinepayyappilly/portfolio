"use client";

import { useState, useRef, useEffect, type ComponentProps } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "../ui/button";
import { bundledLanguagesInfo } from "shiki/bundle/web";
import { cn } from "@/lib/utils";

type CodeBlockProps = ComponentProps<"pre">;

const webBundledIds = new Set(bundledLanguagesInfo.map((l) => l.id));
const aliasToId = new Map<string, string>();
for (const lang of bundledLanguagesInfo) {
  for (const alias of lang.aliases ?? []) {
    aliasToId.set(alias, lang.id);
  }
}

function resolveWebLang(lang: string): string | null {
  if (webBundledIds.has(lang)) return lang;
  const mapped = aliasToId.get(lang);
  return mapped ?? null;
}

let highlighterPromise: ReturnType<typeof getHighlighter> | null = null;

async function getHighlighter() {
  const { createHighlighterCore } = await import("shiki/core");
  const { createOnigurumaEngine } = await import("shiki/engine/oniguruma");
  return createHighlighterCore({
    themes: [
      import("shiki/themes/github-light"),
      import("shiki/themes/github-dark"),
    ],
    engine: createOnigurumaEngine(import("shiki/wasm")),
  });
}

async function highlightCode(code: string, lang: string): Promise<string> {
  // For languages included in the web bundle, use the fast sync highlighter
  const webLang = resolveWebLang(lang);
  if (webLang || lang === "plaintext") {
    const { codeToHtml } = await import("shiki/bundle/web");
    return codeToHtml(code, {
      lang: (webLang ?? lang) as any,
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    });
  }

  // For other languages, use the full highlighter with dynamic loading
  if (!highlighterPromise) highlighterPromise = getHighlighter();
  const highlighter = await highlighterPromise;

  const loadedLangs = highlighter.getLoadedLanguages();
  if (!loadedLangs.includes(lang)) {
    try {
      await highlighter.loadLanguage(
        (await import(`shiki/langs/${lang}.mjs`)).default
      );
    } catch {
      // Language not available in shiki at all — fall back to plaintext
      return highlighter.codeToHtml(code, {
        lang: "plaintext",
        themes: { light: "github-light", dark: "github-dark" },
        defaultColor: false,
      });
    }
  }

  return highlighter.codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  });
}

function extractLanguage(className?: string): string {
  if (!className) return "plaintext";
  const match = className.match(/language-([a-z0-9-]+)/i);
  return match ? match[1] : "plaintext";
}

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [{ html, className, title }, setRenderState] = useState<{
    html: string;
    className: string;
    title: string | null;
  }>({ html: "", className: "", title: null });
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const pre = preRef.current;
    const codeEl = pre?.querySelector("code");
    if (!pre || !codeEl) return;

    const codeText = codeEl.textContent || "";
    const lang = extractLanguage(codeEl.className);
    const nextTitle = codeEl.getAttribute("data-title");
    const nextClassName = codeEl.className || "";

    void highlightCode(codeText, lang)
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        setRenderState({
          html: doc.querySelector("code")?.innerHTML ?? "",
          className: nextClassName,
          title: nextTitle,
        });
      })
      .catch((error) => {
        console.error("Failed to highlight code:", error);
        setRenderState({ html: "", className: nextClassName, title: nextTitle });
      });
  }, [children]);

  const handleCopy = async () => {
    const code = preRef.current?.textContent || "";
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <div className="group relative rounded-xl overflow-hidden border border-border">
      <pre
        ref={preRef}
        {...props}
        className={cn("p-0! m-0! overflow-x-auto", props.className)}
      >
        {title && (
          <div className="p-3 text-xs font-medium border-b border-border rounded-t-xl bg-muted/50 text-foreground">
            {title}
          </div>
        )}

        <Button
          onClick={handleCopy}
          variant="outline"
          size="icon"
          className={cn("absolute size-8 text-primary cursor-pointer right-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity rounded-md border border-border shadow-none", title ? "top-13" : "top-3", props.className)}
          aria-label="Copy code"
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        </Button>
        {html && (
          <div className="p-3">
            <code
              className={`shiki ${className}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        )}

        {!html && (
          <div className="p-4">
            {children}
          </div>
        )}
      </pre >
    </div >
  );
}

