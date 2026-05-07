"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Chairman's Message", href: "/chairman" },
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "Why Choose Us", href: "/why-choose-us" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Curriculum & Learning", href: "/academics" },
      { label: "✨ Swiss International", href: "/swiss-international" },
    ],
  },
  { label: "Facilities & Sports", href: "/facilities" },
  {
    label: "Campus Life",
    children: [
      { label: "Activities", href: "/activities" },
      { label: "Events", href: "/events" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navBg = scrolled || !isHome ? "navbar-glass shadow-sm" : "navbar-transparent";
  const textColor = scrolled || !isHome ? "text-navy" : "text-navy";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative w-12 h-12">
                <Image src="/logo.jpg" alt="BSIS Logo" fill className="object-contain" />
              </div>
              <div className="hidden sm:block">
                <div className="text-crimson font-bold text-base leading-tight font-display">
                  Braeside International
                </div>
                <div className="text-[11px] text-muted tracking-widest uppercase font-semibold">
                  School · Est. 2008
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div ref={dropdownRef} className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200
                        ${textColor} hover:text-crimson hover:bg-crimson-light`}
                    >
                      {item.label}
                      <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-border overflow-hidden z-50
                        animate-fade-down">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href}
                            className={`block px-5 py-3 text-sm font-medium transition-all duration-150
                              ${pathname === child.href
                                ? "bg-crimson-light text-crimson font-semibold"
                                : "text-navy-mid hover:bg-crimson-tint hover:text-crimson"}`}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.href} href={item.href!}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200
                      ${pathname === item.href
                        ? "text-crimson bg-crimson-light"
                        : `${textColor} hover:text-crimson hover:bg-crimson-light`}`}>
                    {item.label}
                  </Link>
                )
              )}
              <div className="ml-1 notranslate">
                <LanguageSwitcher />
              </div>
              <Link href="/admissions"
                className="ml-2 btn-primary text-sm !py-2.5 !px-6 rounded-lg notranslate">
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-crimson-light transition-colors"
              aria-label="Toggle menu">
              <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-navy rounded-lg hover:bg-crimson-tint hover:text-crimson transition-colors">
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-crimson-light pl-3">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href}
                            className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors
                              ${pathname === child.href ? "text-crimson font-semibold" : "text-navy-mid hover:text-crimson"}`}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.href} href={item.href!}
                    className={`block px-4 py-3 text-sm font-semibold rounded-lg transition-colors
                      ${pathname === item.href ? "text-crimson bg-crimson-light" : "text-navy hover:bg-crimson-tint hover:text-crimson"}`}>
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-2 flex items-center justify-between gap-2">
                <Link href="/admissions" className="btn-primary flex-1 justify-center text-sm notranslate">
                  Apply Now 2026-27
                </Link>
                <div className="notranslate"><LanguageSwitcher /></div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
