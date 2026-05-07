"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function VisionMissionPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="page-hero pt-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">Our Foundation</div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">Vision, Mission & Motto</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">The guiding principles that drive every decision, every lesson, and every life we touch.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link><span>/</span>
            <span className="text-white/80">Vision & Mission</span>
          </div>
        </div>
      </div>

      {/* Motto */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="section-label mb-5 inline-flex">Our Motto</div>
            <div className="flex items-center justify-center gap-6 mb-4">
              {["Learn", "Grow", "Lead"].map((word, i) => (
                <div key={word} className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="font-display text-4xl lg:text-5xl font-bold gradient-text">{word}</div>
                  </div>
                  {i < 2 && <div className="w-3 h-3 rounded-full bg-gold/50" />}
                </div>
              ))}
            </div>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Three words. One mission. Every student who passes through Braeside carries these principles with them for life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission side by side */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal type="left">
              <div className="bg-white rounded-2xl p-10 border border-border shadow-sm h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full gradient-crimson rounded-l-2xl" />
                <div className="w-16 h-16 gradient-crimson rounded-2xl flex items-center justify-center text-white text-2xl mb-6">🔭</div>
                <div className="section-label mb-4">Our Vision</div>
                <h2 className="font-display text-3xl font-bold text-navy mb-6 heading-line">Shaping Tomorrow&apos;s World Leaders</h2>
                <p className="text-muted leading-relaxed text-lg">
                  To nurture every student into a successful learner, confident individual, and responsible citizen by providing a supportive learning environment that encourages academic excellence, creativity, and personal growth.
                </p>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-navy font-semibold italic font-display">
                    &ldquo;To be a centre of excellence in ICSE education, nurturing capable, ethical, and globally aware individuals.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal type="right">
              <div className="bg-white rounded-2xl p-10 border border-border shadow-sm h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full gradient-gold rounded-l-2xl" />
                <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center text-white text-2xl mb-6">🎯</div>
                <div className="section-label mb-4">Our Mission</div>
                <h2 className="font-display text-3xl font-bold text-navy mb-6 heading-line">Quality, Child-Centered Education</h2>
                <p className="text-muted leading-relaxed text-lg mb-6">
                  At Braeside School, our mission is to provide quality, child-centered education that helps students build a strong academic foundation while developing their social, emotional, and intellectual abilities.
                </p>
                <ul className="space-y-3">
                  {[
                    "Foster academic excellence and critical thinking through effective teaching methods",
                    "Encourage students to become confident, responsible, and lifelong learners",
                    "Create a caring and inclusive environment where every child is valued",
                    "Promote holistic development by balancing academics with sports, arts, and activities",
                    "Prepare students to become responsible global citizens with strong values",
                  ].map((m) => (
                    <li key={m} className="flex items-start gap-3">
                      <div className="w-5 h-5 gradient-crimson rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-muted text-sm leading-relaxed">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ICSE section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal type="left">
              <div className="section-label mb-5">ICSE Affiliation</div>
              <h2 className="font-display text-4xl font-bold text-navy mb-6 heading-line">Nationally Recognised, Globally Respected</h2>
              <p className="text-muted leading-relaxed mb-5">
                Braeside International School is proudly affiliated with the Council for the Indian School Certificate Examinations (CISCE) — one of India&apos;s most respected educational boards.
              </p>
              <div className="bg-crimson-light rounded-xl p-5 border border-crimson/20 mb-6">
                <div className="text-xs text-crimson font-bold tracking-widest uppercase mb-1">Affiliation Number</div>
                <div className="font-mono font-bold text-navy text-lg">(409D) 2024-001-03-5-0005-3027</div>
                <div className="text-sm text-muted mt-1">ICSE — Council for the Indian School Certificate Examinations</div>
              </div>
              <p className="text-muted leading-relaxed">
                The ICSE curriculum&apos;s emphasis on analytical thinking, English language proficiency, and broad subject exposure prepares students comprehensively for national and international university admissions.
              </p>
            </ScrollReveal>
            <ScrollReveal type="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Activity-Based Learning", desc: "Every concept is practically experienced, not just memorised", icon: "🔬" },
                  { title: "Technology Integration", desc: "Smart classrooms, digital tools and AI-assisted learning", icon: "💻" },
                  { title: "Individual Attention", desc: "Small class sizes ensure every student gets focus", icon: "👁️" },
                  { title: "Competitive Preparation", desc: "Strong foundation for boards, olympiads and entrance exams", icon: "📚" },
                ].map((item) => (
                  <div key={item.title} className="card-premium p-5 group">
                    <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div className="font-bold text-navy text-sm mb-2">{item.title}</div>
                    <div className="text-muted text-xs leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
