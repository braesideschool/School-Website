import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Top bar */}
      <div className="gradient-crimson py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/90 text-sm font-semibold tracking-wide">
            🎓 Admissions Open 2026–27 — Limited Seats Available
          </p>
          <Link href="/admissions"
            className="btn-white !py-2 !px-6 text-sm shrink-0">
            Apply Now →
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                <Image src="/logo.jpg" alt="BSIS Logo" fill className="object-contain bg-white/5" />
              </div>
              <div>
                <div className="font-display font-bold text-lg leading-tight">Braeside</div>
                <div className="text-white/60 text-xs tracking-widest uppercase">International School</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              ICSE-affiliated institution dedicated to academic excellence, holistic development, and shaping tomorrow&apos;s leaders since 2008.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gold text-xs font-bold tracking-widest uppercase">Affil. No:</span>
              <span className="text-white/70 text-xs">(409D) 2024-001-03-5-0005-3027</span>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a href="https://www.instagram.com/braesideschool_ooty?igsh=MjhzZGxhMXdpZDJw"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-crimson flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@braesideschool8925?si=-NzX8dMpivBWwlm8"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1BZUjddUJ3/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base mb-5 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Chairman's Message", href: "/chairman" },
                { label: "Academics", href: "/academics" },
                { label: "Facilities & Sports", href: "/facilities" },
                { label: "Activities", href: "/activities" },
                { label: "Events", href: "/events" },
                { label: "Gallery", href: "/gallery" },
                { label: "Rules & Regulations", href: "/rules" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-display font-bold text-base mb-5 text-white">Programmes</h4>
            <ul className="space-y-2.5">
              {[
                "Kindergarten",
                "Primary (Grades 1–5)",
                "Middle School (Grades 6–8)",
                "High School (Grades 9–12)",
                "ICSE Board",
                "Activity-Based Learning",
                "Science & Tech Labs",
                "Sports Academy",
              ].map((l) => (
                <li key={l} className="text-white/60 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-crimson/60" />
                  {l}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-base mb-5 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-crimson/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/80 text-sm">8/632, Kappathorai</div>
                  <div className="text-white/60 text-sm">Ooty – 643004, Tamil Nadu</div>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-crimson/20 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <a href="tel:+919443669586" className="text-white/80 text-sm hover:text-gold transition-colors block">+91 94436 69586</a>
                  <a href="tel:+916374663556" className="text-white/60 text-sm hover:text-gold transition-colors block">+91 63746 63556</a>
                  <a href="tel:04232550535" className="text-white/60 text-sm hover:text-gold transition-colors block">0423 2550535</a>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-crimson/20 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <a href="mailto:braesideschool6666@gmail.com" className="text-white/80 text-sm hover:text-gold transition-colors block break-all">braesideschool6666@gmail.com</a>
                  <a href="mailto:braesideschool535@gmail.com" className="text-white/60 text-sm hover:text-gold transition-colors block break-all">braesideschool535@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 Braeside International School. All rights reserved. &nbsp;|&nbsp; Motto: <span className="text-gold/80 font-semibold">I CAN I WILL</span>
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="/rules" className="hover:text-white/70 transition-colors">Rules & Regulations</Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
            <Link href="/admissions" className="hover:text-white/70 transition-colors">Admissions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
