"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import StatsCounter from "@/components/StatsCounter";
import ScrollReveal from "@/components/ScrollReveal";

const highlights = [
  { icon: "📜", title: "ICSE Affiliated", desc: "Affiliation No. (409D) 2024-001-03-5-0005-3027. Rigorous board curriculum with global standards." },
  { icon: "🧪", title: "World-Class Labs", desc: "Chemistry, Biology, Physics and Computer labs equipped with latest instruments and technology." },
  { icon: "🏊", title: "Heated Swimming Pool", desc: "Temperature-controlled year-round facility with professional swimming coaches for all skill levels." },
  { icon: "🏸", title: "International Badminton", desc: "Professional-grade international badminton courts with certified coaches and competitive training programs." },
  { icon: "⚽", title: "Floodlit Football Turf", desc: "All-weather synthetic turf with professional floodlights — training never stops, day or night." },
  { icon: "🎭", title: "Arts & Culture", desc: "Annual cultural festivals, classical dance forms, music studios and drama — celebrating every talent." },
];

const facilities = [
  { name: "Heated Swimming Pool", img: "/images/swimming.png" },
  { name: "Synthetic Basketball Court", img: "/images/basketball-1.jpeg" },
  { name: "International Badminton", img: "/images/badminton-court.jpg" },
  { name: "Floodlit Football Turf", img: "/images/football-turf.jpeg" },
  { name: "Smart Classrooms", img: "/images/kg-classroom.jpeg" },
  { name: "Skating Rink", img: "/images/skating.jpeg" },
];

const events = [
  { name: "Annual Day", date: "December", desc: "Grand celebration of student talent, awards, cultural performances and achievements.", icon: "🎊" },
  { name: "Sports Meet", date: "January", desc: "Inter-house competitions across 25+ sports and athletic events for all grades.", icon: "🏆" },
  { name: "Rhyme Expo", date: "March", desc: "Creative literary festival showcasing poetry, prose, dramatics and public speaking.", icon: "🎤" },
  { name: "Christmas Celebration", date: "December", desc: "Joyful campus-wide festival with carols, nativity plays and cultural exchange.", icon: "🎄" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const offset = window.scrollY * 0.35;
        heroRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO — Full school photo with centered logo + name at top ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-crimson-tint to-white pb-20">
        {/* Soft decorative orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-crimson/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        {/* School Name — CENTERED at TOP */}
        <div className="relative z-10 pt-10 sm:pt-12 lg:pt-14 pb-10 px-4 text-center">
          <div className="flex flex-col items-center animate-hero-text">
            {/* Swiss International Logo */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mb-4 drop-shadow-xl">
              <Image src="/swiss-logo-v2.png" alt="Swiss International School Crest" fill className="object-contain" priority />
            </div>
            {/* Main School Name */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-navy leading-[1.05] tracking-tight">
              The Swiss International School
            </h1>
            {/* Decorative crimson divider */}
            <div className="mt-4 flex items-center gap-3">
              <span className="w-10 sm:w-14 h-px bg-crimson" />
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="w-10 sm:w-14 h-px bg-crimson" />
            </div>
            {/* Subtitle */}
            <h2 className="mt-4 font-display text-base sm:text-lg lg:text-xl font-semibold text-crimson tracking-[0.25em] uppercase">
              Unit of Braeside International
            </h2>
          </div>
        </div>

        {/* Horizontal scrolling campus marquee — INSIDE HERO */}
        <div className="relative z-10">
          <div className="marquee-mask">
            <div className="marquee-track">
              {[1, 2].map((set) =>
                [
                  "/images/swimming.png",
                  "/images/archery.png",
                  "/images/campus-main-2.jpg",
                  "/images/horse-riding.png",
                  "/images/football-turf.jpeg",
                  "/images/swiss-campus.jpeg",
                ].map((src, i) => (
                  <div
                    key={`${set}-${i}`}
                    className="relative h-[300px] sm:h-[380px] lg:h-[460px] w-[500px] sm:w-[640px] lg:w-[800px] shrink-0 overflow-hidden"
                  >
                    <Image src={src} alt={`Braeside Campus View ${i + 1}`} fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/40 to-transparent" />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Bottom curved divider into next section */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 20C1200 80 720 80 0 20V80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── WELCOME / TAGLINE — Moved below hero ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <Image src="/logo.jpg" alt="" fill className="object-contain" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="section-label mb-6 inline-flex">
              <span>🎓</span> ICSE Affiliated · Est. 2008 · Ooty, Tamil Nadu
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-navy">
              Shaping{" "}<span className="gradient-text">Leaders</span>{" "}of Tomorrow
            </h2>
            <p className="text-navy-mid text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Braeside International School — where academic excellence meets world-class sports, arts, and life skills in the hills of Ooty.
            </p>
            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="text-3xl font-display font-bold text-crimson italic">&ldquo;I CAN</span>
              <span className="w-10 h-0.5 bg-gold" />
              <span className="text-3xl font-display font-bold text-gold italic">I WILL&rdquo;</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/admissions" className="btn-primary text-base">
                Apply for 2026–27
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/facilities" className="btn-secondary text-base">Explore Campus</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsCounter />

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-20 bg-off-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal type="left">
              <div className="section-label mb-5">Our Story</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-6 heading-line">
                Where Every Child Discovers Their Greatness
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-5">
                Braeside International School stands as a distinguished institution committed to delivering high-quality ICSE education, character development, and holistic growth for every student.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                For over 17 years, we have blended rigorous academics with activity-based, experiential learning — ensuring students don&apos;t just study, they discover, create, and lead. Nestled in the pristine hills of Ooty, our campus provides a serene yet world-class environment.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[{ label: "Academic Excellence", val: 95 }, { label: "Holistic Development", val: 90 }].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-4 border border-border">
                    <div className="text-3xl font-display font-bold text-crimson mb-1">{item.val}%</div>
                    <div className="text-sm text-muted font-semibold">{item.label}</div>
                    <div className="mt-2 h-1.5 bg-crimson-light rounded-full overflow-hidden">
                      <div className="h-full gradient-crimson rounded-full" style={{ width: `${item.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </ScrollReveal>

            <ScrollReveal type="right">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/students-writing.jpeg" alt="Students at Braeside" width={600} height={460} className="object-cover w-full h-[460px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-4 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-crimson rounded-lg flex items-center justify-center text-white font-bold text-lg">17</div>
                    <div><div className="font-bold text-navy text-sm">Years of</div><div className="text-crimson font-bold text-sm">Excellence</div></div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gold/30">
                  <div className="text-center"><div className="text-gold font-display font-bold text-sm">ICSE</div><div className="text-[10px] text-muted">CISCE Affiliated</div></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">Why Choose Braeside?</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-4">A Complete World-Class Education</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">From cutting-edge academics to championship sports and vibrant arts — everything your child needs to excel.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal type="stagger">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((h) => (
                <div key={h.title} className="card-premium p-7 group">
                  <div className="w-14 h-14 gradient-crimson rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">{h.icon}</div>
                  <h3 className="font-display font-bold text-xl text-navy mb-3">{h.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">{h.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FACILITIES PREVIEW ── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
              <div>
                <div className="section-label mb-3">World-Class Campus</div>
                <h2 className="font-display text-4xl font-bold text-navy">Our Premium Facilities</h2>
              </div>
              <Link href="/facilities" className="btn-secondary whitespace-nowrap">View All Facilities</Link>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 80}>
                <Link href="/facilities" className="card-premium group block cursor-pointer">
                  <div className="facility-img-wrap">
                    <Image src={f.img} alt={f.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white font-display font-bold text-lg">{f.name}</div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHAIRMAN CORNER ── */}
      <section className="py-20 gradient-crimson relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/campus-aerial.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal type="left">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">From the Chairman</div>
              <blockquote className="font-display text-3xl lg:text-4xl text-white font-bold leading-tight mb-8">
                &ldquo;Education is not just knowledge — it&apos;s transformation, building character, and the confidence to face the world.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-0.5 bg-gold" />
                <div><div className="text-white font-bold text-lg">N S RAJESHWARRAN</div><div className="text-white/70 text-sm">Chairman & Founder · Braeside International School &amp; Swiss International School</div></div>
              </div>
              <Link href="/chairman" className="btn-white">
                Read Full Message
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </ScrollReveal>
            <ScrollReveal type="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30">
                  <Image src="/founder/chairman-main.jpeg" alt="N S Rajeshwarran — Chairman" width={500} height={520} className="object-cover w-full h-[520px]" />
                </div>
                {/* Identity badge */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-4 border border-gold/30 max-w-[260px]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 gradient-crimson rounded-full flex items-center justify-center text-white text-xl shrink-0">
                      🎓
                    </div>
                    <div>
                      <div className="font-display font-bold text-navy text-sm leading-tight">N S RAJESHWARRAN</div>
                      <div className="text-crimson text-xs font-semibold">Chairman & Founder</div>
                      <div className="text-muted text-[10px] mt-0.5">Braeside Int&apos;l &amp; Swiss Int&apos;l School</div>
                    </div>
                  </div>
                </div>
                {/* Quote bubble top-left */}
                <div className="absolute -top-4 -left-4 w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-xl text-white text-2xl font-display font-bold">
                  &ldquo;
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
              <div><div className="section-label mb-3">School Life</div><h2 className="font-display text-4xl font-bold text-navy">Our Annual Events</h2></div>
              <Link href="/events" className="btn-secondary whitespace-nowrap">View All Events</Link>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((ev, i) => (
              <ScrollReveal key={ev.name} delay={i * 100}>
                <div className="card-premium p-6 text-center group">
                  <div className="w-16 h-16 bg-crimson-light rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">{ev.icon}</div>
                  <div className="text-xs text-crimson font-bold tracking-widest uppercase mb-2">{ev.date}</div>
                  <h3 className="font-display font-bold text-lg text-navy mb-3">{ev.name}</h3>
                  <p className="text-muted text-sm leading-relaxed">{ev.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-label mb-4 inline-flex">Campus Life in Pictures</div>
              <h2 className="font-display text-4xl font-bold text-navy mb-4">Life at Braeside</h2>
              <p className="text-muted max-w-xl mx-auto">A glimpse into the vibrant, inspiring world inside our campus.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {["/images/cultural-dance.jpeg","/images/chemistry-lab.jpeg","/images/basketball-2.jpeg","/images/kg-classroom.jpeg","/images/biology-lab.jpeg","/images/football-turf-2.jpeg","/images/physics-lab.jpeg","/images/computer-lab.jpeg"].map((src, i) => (
              <ScrollReveal key={src} type="scale" delay={i * 60}>
                <div className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer">
                  <Image src={src} alt="Braeside campus life" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300" />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <Link href="/gallery" className="btn-primary">
                View Full Gallery
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ADMISSION CTA ── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/campus-aerial.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-crimson/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-crimson/30 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-crimson/40">
              📣 Admissions Open Now
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">Begin Your Child&apos;s Journey to Excellence</h2>
            <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Secure your seat for Academic Year 2026–27. Limited seats available for Kindergarten through Grade 12.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions" className="btn-white text-base">Apply Now — 2026-27</Link>
              <a href="tel:+919443669586" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-crimson text-base">📞 Call Admissions</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
