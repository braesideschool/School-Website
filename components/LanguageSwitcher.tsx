"use client";
import { useEffect, useState, useRef } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            layout: number;
            autoDisplay: boolean;
          },
          elementId: string
        ) => unknown;
      };
    };
  }
}

const LANGS = [
  { code: "en", label: "English", flag: "🇬🇧", short: "EN" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳", short: "HI" },
  { code: "ta", label: "தமிழ்", flag: "🇮🇳", short: "TA" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Google Translate widget script once
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,ta",
            layout: 0,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      } catch {}
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Read current language from cookie if any
    const cookie = document.cookie.split("; ").find((c) => c.startsWith("googtrans="));
    if (cookie) {
      const lang = cookie.split("/").pop();
      if (lang && ["en", "hi", "ta"].includes(lang)) setActive(lang);
    }
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchTo = (lang: string) => {
    // Set both cookies (root + host) so Google Translate picks it up
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    const expiresStr = expires.toUTCString();

    document.cookie = `googtrans=/en/${lang}; expires=${expiresStr}; path=/`;
    const host = window.location.hostname.split(".").slice(-2).join(".");
    if (host) {
      document.cookie = `googtrans=/en/${lang}; expires=${expiresStr}; path=/; domain=.${host}`;
    }

    setActive(lang);
    setOpen(false);
    window.location.reload();
  };

  const current = LANGS.find((l) => l.code === active) ?? LANGS[0];

  return (
    <>
      {/* Hidden Google Translate target */}
      <div id="google_translate_element" style={{ display: "none" }} />

      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg border border-border hover:border-crimson hover:text-crimson text-navy transition-all duration-200"
          aria-label="Change language"
        >
          <span className="text-base leading-none">🌐</span>
          <span className="tracking-wide">{current.short}</span>
          <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-border overflow-hidden z-50 animate-fade-down">
            <div className="px-4 py-2 text-[10px] text-muted font-bold tracking-widest uppercase border-b border-border">
              Choose Language
            </div>
            {LANGS.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchTo(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all
                  ${active === lang.code ? "bg-crimson-light text-crimson font-semibold" : "text-navy-mid hover:bg-crimson-tint hover:text-crimson"}`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="flex-1 text-left">{lang.label}</span>
                {active === lang.code && (
                  <svg className="w-4 h-4 text-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Hide Google's default banner so it doesn't interfere */}
      <style jsx global>{`
        .goog-te-banner-frame, .skiptranslate {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .goog-te-gadget-icon, .goog-te-gadget-simple {
          display: none !important;
        }
        font[style*="background-color"] {
          background-color: transparent !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
}
