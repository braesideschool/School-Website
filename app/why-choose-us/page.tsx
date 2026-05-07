"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const ootyReasons = [
  { icon: "🌿", title: "Pollution-Free Sanctuary", desc: "Nestled at 2,200m above sea level, Ooty offers some of India's cleanest air. Studies show clean air directly improves concentration, memory and academic performance." },
  { icon: "🏔️", title: "Heart of the Nilgiris", desc: "Surrounded by UNESCO Biosphere Reserve forests, tea estates and rolling hills. A natural learning environment that sparks curiosity, creativity and connection with nature." },
  { icon: "🌡️", title: "Perfect Climate Year-Round", desc: "Mild temperatures of 15–25°C throughout the year — ideal for focused study, outdoor sports and a healthy student lifestyle without the harsh extremes of plains." },
  { icon: "🍃", title: "Rich Greenery & Open Spaces", desc: "From eucalyptus forests to expansive playgrounds, students grow up with abundant green spaces that nurture mental wellbeing and physical fitness." },
  { icon: "🛡️", title: "Safe, Peaceful Hill Station", desc: "Low crime rates, tight-knit community and a serene environment provide parents with the peace of mind that their children are growing up in one of India's safest locations." },
  { icon: "🎯", title: "Distraction-Free Learning", desc: "Away from the chaos of metro cities, students stay focused on what matters — learning, growing, and discovering their passions without urban overstimulation." },
  { icon: "🚂", title: "Cultural Heritage", desc: "Home to the UNESCO World Heritage Nilgiri Mountain Railway and a vibrant blend of cultures — exposing students to history, art and global perspectives." },
  { icon: "💧", title: "Pure Water & Climate Health", desc: "Natural springs, mountain rainfall, and a climate that promotes physical fitness — children grow stronger, healthier, and more resilient at Braeside." },
];

const braesideReasons = [
  { icon: "📜", title: "ICSE Affiliated Excellence", desc: "Officially affiliated with CISCE — Affiliation No. (409D) 2024-001-03-5-0005-3027. ICSE is globally respected and prepares students for elite universities worldwide." },
  { icon: "🏆", title: "17+ Years of Proven Track Record", desc: "Established in 2008, Braeside has consistently produced confident, capable graduates who excel in academics, sports and life. Generations of success stories." },
  { icon: "🔬", title: "Activity-Based Learning", desc: "We don't just teach from books — every concept is practically implemented in our labs, sports grounds, and creative studios. Students learn by DOING." },
  { icon: "🏟️", title: "21+ World-Class Facilities", desc: "International badminton court, heated swimming pool, floodlit football turf, synthetic basketball, skating rink — facilities that rival any premium institution." },
  { icon: "🧪", title: "Hands-On Laboratories", desc: "Fully equipped Chemistry, Biology, Physics and Computer labs where students don't just observe — they experiment, build, hypothesise, and discover." },
  { icon: "📲", title: "Smart Classrooms", desc: "Interactive smart boards, multimedia integration and digital learning resources transform every lesson into an engaging, technology-powered experience." },
  { icon: "🎭", title: "True Holistic Development", desc: "Academics balanced with sports, music, dance, drama, debates, public speaking — every student finds their passion and develops it to mastery." },
  { icon: "👨‍👩‍👧", title: "Personal Founder Attention", desc: "Mr. and Mrs. Rajeshwarran are personally present every day — knowing every student, every parent, every teacher. This is rare in modern schools." },
  { icon: "🚌", title: "Safe Transport Network", desc: "Reliable transport reaches every village and neighbourhood. BharatBenz fleet with trained drivers ensures every student travels safely to and from school." },
  { icon: "🏠", title: "Premium Boarding Option", desc: "Comfortable, supervised residential boarding for boys and girls with reliable amenities — a true second home for our boarding students." },
  { icon: "👩‍🏫", title: "Mentorship-Driven Faculty", desc: "Our 60+ faculty are not just teachers — they are mentors who inspire, challenge and personally invest in each student's journey." },
  { icon: "❤️", title: "Values-First Approach", desc: "Integrity, respect, responsibility, innovation, collaboration — the core values we instill alongside academic excellence. Character first, always." },
];

export default function WhyChooseUsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="page-hero pt-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">The Braeside Advantage</div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">Why Choose Us</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Two powerful reasons — the perfect location and the perfect institution. Together, an unbeatable advantage for your child&apos;s future.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <span className="text-white/80">Why Choose Us</span>
          </div>
        </div>
      </div>

      {/* Section 1: Why Choose Ooty */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Image src="/images/campus-aerial.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">Part 1 · Location</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-4">Why Choose Ooty (The Nilgiris)</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Some of life&apos;s most important lessons come from <em className="text-navy font-semibold">where</em> a child grows up. Ooty offers something no metro city ever can.
              </p>
            </div>
          </ScrollReveal>

          {/* Hero stat strip */}
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
              <div className="text-center p-5 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100">
                <div className="text-3xl font-display font-bold text-green-700">2,200m</div>
                <div className="text-xs text-muted font-semibold mt-1">Above Sea Level</div>
              </div>
              <div className="text-center p-5 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <div className="text-3xl font-display font-bold text-blue-700">15–25°C</div>
                <div className="text-xs text-muted font-semibold mt-1">Year-Round Climate</div>
              </div>
              <div className="text-center p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
                <div className="text-3xl font-display font-bold text-emerald-700">UNESCO</div>
                <div className="text-xs text-muted font-semibold mt-1">Biosphere Reserve</div>
              </div>
              <div className="text-center p-5 rounded-xl bg-gradient-to-br from-amber-50 to-white border border-amber-100">
                <div className="text-3xl font-display font-bold text-amber-700">100%</div>
                <div className="text-xs text-muted font-semibold mt-1">Pollution-Free</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Reasons grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ootyReasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 60}>
                <div className="card-premium p-6 group h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">{r.icon}</div>
                  <h3 className="font-display font-bold text-navy mb-3 text-base leading-tight">{r.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="py-12 gradient-crimson text-center">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-white/80 text-sm uppercase tracking-widest font-bold mb-3">And the Right Institution Matters Just as Much</p>
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-white">Now meet Braeside.</h3>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 2: Why Choose Braeside */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">Part 2 · The Institution</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-4">Why Choose Braeside</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                12 reasons that set us apart — from board accreditation to founder access, from world-class facilities to proven results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {braesideReasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 50}>
                <div className="card-premium p-6 group h-full">
                  <div className="w-12 h-12 gradient-crimson rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">{r.icon}</div>
                  <h3 className="font-display font-bold text-navy mb-3 text-base leading-tight">{r.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Swiss International School Teaser */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-crimson/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-crimson to-gold text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-lg">
              ✨ The Premium Tier
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-4">
              Looking for the Next Level?
            </h2>
            <p className="font-display text-3xl lg:text-4xl gradient-text font-bold mb-6">
              Discover Swiss International School at Braeside.
            </p>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              A premium tier within Braeside — where chalk and books are replaced by 100% smart-board, 100% activity-based learning. Higher standards in every dimension: education, sports, infrastructure, and student experience.
            </p>
            <Link href="/swiss-international" className="btn-primary text-base">
              Explore Swiss International School
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
              The Right Place. The Right School. The Right Time.
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Admissions for 2026–27 are open. Give your child the Braeside advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions" className="btn-white">Apply Now — 2026-27</Link>
              <Link href="/contact" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-crimson">Book a Campus Visit</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
