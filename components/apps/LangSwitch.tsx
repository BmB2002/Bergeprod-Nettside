"use client";

import { createContext, useContext, useState } from "react";
import type { Lang } from "@/lib/apps";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void } | null>(null);

// Holds both language versions of a page and shows one. Only the active one is in the DOM,
// so section ids stay unique.
export function LangSwitch({ initial, no, en }: { initial: Lang; no: React.ReactNode; en: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(initial);
  return <LangContext.Provider value={{ lang, setLang }}>{lang === "en" ? en : no}</LangContext.Provider>;
}

export function LangToggle({ current }: { current: Lang }) {
  const ctx = useContext(LangContext);
  if (!ctx) return null;
  return (
    <div
      role="group"
      aria-label={current === "en" ? "Language" : "Språk"}
      className="mb-6 flex w-fit rounded-full border border-(color:--doc-line-strong) bg-(color:--doc-chip) p-1 text-xs font-semibold sm:absolute sm:right-8 sm:top-8 sm:mb-0"
    >
      {(["no", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          lang={l === "no" ? "nb" : "en"}
          aria-pressed={l === current}
          onClick={() => {
            ctx.setLang(l);
            // Keep an existing ?lang in step so a refresh shows the same language
            const url = new URL(window.location.href);
            if (url.searchParams.has("lang")) {
              url.searchParams.set("lang", l);
              window.history.replaceState(window.history.state, "", url);
            }
          }}
          className={`rounded-full px-3.5 py-1.5 tracking-wider transition-colors ${
            l === current ? "bg-(color:--doc-active-bg) text-(color:--doc-active-fg)" : "text-(color:--doc-soft) hover:text-(color:--doc-fg)"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
