"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  {
    icon: "📲",
    title: "Next-Gen Smart Boards",
    desc: "Premium high-tech interactive smart boards with multi-window capability — run up to 60 applications simultaneously, side-by-side. Zero chalk, zero dust, zero compromise. Concepts come alive through multi-touch, multi-user collaborative learning.",
  },
  {
    icon: "📚",
    title: "100% Application-Based Learning",
    desc: "We&apos;ve eliminated traditional textbook-only learning. Every concept is mastered through hands-on activities, real-time simulations, interactive projects, and real-world application — every single day, every single class.",
  },
  {
    icon: "🎯",
    title: "Next-Level Education Standards",
    desc: "International curriculum standards combined with ICSE rigour. Smaller batch sizes, individualised learning paths, and personal mentorship that elevates every student to their full potential.",
  },
  {
    icon: "🏆",
    title: "Premium Sports Programmes",
    desc: "Higher-tier coaching, advanced training schedules, and competitive exposure. Our SIS sports students don&apos;t just play — they compete at championship level across multiple disciplines.",
  },
  {
    icon: "👤",
    title: "Personalised Learning Journey",
    desc: "Lower student-teacher ratios mean every child is truly seen and supported. Personalised attention, tailored academic plans, and one-on-one mentorship are the norm — not the exception.",
  },
  {
    icon: "✨",
    title: "Premium Across Every Dimension",
    desc: "Not just academics — premium facilities, premium sports, premium dining, premium care. Every touchpoint is elevated to the standard parents and students rightfully expect from a world-class school.",
  },
];

const comparison = [
  { feature: "Teaching Method", regular: "Traditional + Smart Board", sis: "100% Smart Board (Zero Chalk)" },
  { feature: "Learning Style", regular: "Book-based + Activities", sis: "Fully Activity-Based (No Book Waste)" },
  { feature: "Education Standard", regular: "ICSE Curriculum", sis: "ICSE + International Standards" },
  { feature: "Class Size", regular: "Standard Batch", sis: "Smaller, Personalised Batches" },
  { feature: "Sports Programme", regular: "Comprehensive", sis: "Premium Championship-Level Training" },
  { feature: "Mentorship", regular: "Faculty-led", sis: "1-on-1 Personal Mentorship" },
  { feature: "Facilities Access", regular: "Shared Premium Facilities", sis: "Priority + Extended Access" },
  { feature: "Student Experience", regular: "Excellent", sis: "Truly World-Class" },
];

export default function SwissInternationalPage() {
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
      {/* PREMIUM HERO */}
      <section className="pt-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
        {/* Decorative orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-crimson/10 rounded-full blur-3xl" />
          <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gold/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          {/* Swiss International School Logo */}
          <ScrollReveal type="scale">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto mb-6 drop-shadow-xl animate-float">
              <Image
                src="/swiss-logo-v2.png"
                alt="Swiss International School Crest"
                fill
                className="object-contain"
                priority
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-crimson to-gold text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8 shadow-lg shadow-crimson/30">
              ✨ The Premium Tier · Swiss International School
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.05] mb-6 text-navy">
              Where Education<br />
              <span className="gradient-text">Reaches Its Peak.</span>
            </h1>
            <p className="text-muted text-xl max-w-3xl mx-auto leading-relaxed mb-4">
              A premium school within Braeside International — where chalk meets its end, books meet their match, and every student meets their potential.
            </p>
            <div className="flex items-center justify-center gap-3 text-sm text-muted mt-8">
              <Link href="/" className="hover:text-crimson transition-colors">Home</Link>
              <span>/</span>
              <span className="text-navy font-semibold">Swiss International School</span>
            </div>
          </ScrollReveal>

          {/* Decorative crest */}
          <ScrollReveal delay={300}>
            <div className="mt-14 flex items-center justify-center gap-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
              <div className="text-3xl">🏔️</div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
            </div>
            <p className="mt-4 font-display italic text-navy/60 text-sm">Premium · Personalised · Peak Performance</p>
          </ScrollReveal>
        </div>
      </section>

      {/* THE STATEMENT */}
      <section className="py-20 bg-white border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="section-label mb-6 inline-flex">A Different Kind of School</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-8 leading-tight">
              At Swiss International School, we&apos;ve removed everything that holds traditional schooling back.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl mb-3">🚫📝</div>
                <div className="font-display font-bold text-navy text-xl mb-2">No Chalk</div>
                <div className="text-muted text-sm">100% smart-board teaching</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🚫📖</div>
                <div className="font-display font-bold text-navy text-xl mb-2">No Book Waste</div>
                <div className="text-muted text-sm">Fully activity-based learning</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🚫⏰</div>
                <div className="font-display font-bold text-navy text-xl mb-2">No Compromise</div>
                <div className="text-muted text-sm">Higher standards everywhere</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THE 6 PILLARS */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">The SIS Difference</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-4">Six Pillars of Premium Education</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Every dimension of school life — elevated to a higher standard.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-7 border border-border hover:border-crimson/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full group">
                  <div className="w-14 h-14 bg-gradient-to-br from-crimson via-crimson-mid to-gold rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-crimson/20">{p.icon}</div>
                  <h3 className="font-display font-bold text-navy mb-3 text-lg">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM CLASSROOMS — Tech Spec */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-mid to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-crimson/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 -right-20 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-crimson to-gold text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5 shadow-lg shadow-crimson/30">
                ⚡ Premium Tech Classrooms
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
                The Most Advanced<br />Classrooms in the Region
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                We don&apos;t cut corners. Every Swiss International classroom is engineered for tomorrow&apos;s learners — high-tech, distraction-free, no-compromise.
              </p>
            </div>
          </ScrollReveal>

          {/* Big stats */}
          <ScrollReveal type="stagger">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-14">
              {[
                { val: "60+", label: "Apps Run Simultaneously", icon: "🪟", sub: "Multi-window smart board" },
                { val: "75″+", label: "Premium Smart Boards", icon: "📺", sub: "4K Ultra HD displays" },
                { val: "100%", label: "Digital Curriculum", icon: "💎", sub: "Zero chalk, zero books" },
                { val: "1:8", label: "Student-Teacher Ratio", icon: "👥", sub: "Personalised attention" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-gold/40 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <div className="font-display text-3xl lg:text-4xl font-bold gradient-text mb-2">{s.val}</div>
                  <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
                  <div className="text-white/50 text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Tech feature list */}
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal type="left">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 h-full">
                <div className="text-xs text-gold font-bold tracking-widest uppercase mb-3">⚡ The Smart Board Difference</div>
                <h3 className="font-display text-2xl font-bold mb-5">Not Just a Screen — A Learning Ecosystem</h3>
                <ul className="space-y-4">
                  {[
                    { icon: "🪟", title: "Multi-Window Capability", desc: "Up to 60 apps can run simultaneously — split-screen comparisons, live research alongside the lesson, real-time collaboration. No more single-task limitations." },
                    { icon: "👆", title: "Multi-Touch, Multi-User", desc: "Multiple students interact with the board at the same time — collaborative problem-solving, group whiteboarding, real-time annotations." },
                    { icon: "☁️", title: "Cloud-Connected Learning", desc: "Lessons sync across devices. Students can pick up where they left off from home. Teachers share materials instantly." },
                    { icon: "🎬", title: "4K Multimedia & 3D Models", desc: "Crystal-clear visuals, immersive 3D anatomy/molecular models, real-time global content streaming — geography lessons become virtual tours." },
                  ].map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-crimson to-crimson-dark flex items-center justify-center text-base shrink-0">{f.icon}</div>
                      <div>
                        <div className="font-bold text-white text-sm mb-1">{f.title}</div>
                        <div className="text-white/60 text-xs leading-relaxed">{f.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal type="right">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 h-full">
                <div className="text-xs text-gold font-bold tracking-widest uppercase mb-3">✨ No-Compromise Standard</div>
                <h3 className="font-display text-2xl font-bold mb-5">Built for Tomorrow&apos;s Learners</h3>
                <ul className="space-y-4">
                  {[
                    { icon: "🚫", title: "Zero Chalk Method", desc: "No chalk dust, no allergens, no smudged blackboards. Every surface is digital, hygienic, and crystal-clear for every student." },
                    { icon: "📵", title: "Zero Distraction", desc: "Student devices are managed and curated. Internet is filtered for learning. Focus stays where it belongs — on growth." },
                    { icon: "🎯", title: "100% Application-Based", desc: "Every concept is mastered through doing — coding, building, simulating, presenting. Learning becomes muscle memory." },
                    { icon: "🌐", title: "Global Curriculum Access", desc: "Live virtual classrooms with peer schools abroad, masterclasses from international experts, real-time global discussions." },
                  ].map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-base shrink-0">{f.icon}</div>
                      <div>
                        <div className="font-bold text-white text-sm mb-1">{f.title}</div>
                        <div className="text-white/60 text-xs leading-relaxed">{f.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-label mb-4 inline-flex">Side-by-Side</div>
              <h2 className="font-display text-4xl font-bold text-navy mb-4">SIS vs. Standard Programme</h2>
              <p className="text-muted text-lg">
                Both excellent. One is on a different level.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-lg">
              <div className="grid grid-cols-3 bg-navy text-white">
                <div className="p-4 font-bold text-sm">Feature</div>
                <div className="p-4 font-bold text-sm border-l border-white/10">Braeside Standard</div>
                <div className="p-4 font-bold text-sm border-l border-white/10 bg-gradient-to-r from-crimson to-crimson-dark">
                  ✨ Swiss International
                </div>
              </div>
              {comparison.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-off-white"} hover:bg-crimson-tint transition-colors`}>
                  <div className="p-4 font-semibold text-navy text-sm">{row.feature}</div>
                  <div className="p-4 text-muted text-sm border-l border-border">{row.regular}</div>
                  <div className="p-4 text-navy text-sm font-semibold border-l border-border bg-gradient-to-r from-gold-light/40 to-transparent">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
                      {row.sis}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-label mb-4 inline-flex">Is SIS Right for Your Child?</div>
              <h2 className="font-display text-4xl font-bold text-navy">Who SIS is Designed For</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🚀", title: "The Ambitious Learner", desc: "Students who thrive on challenge and want education that pushes boundaries — beyond rote learning, into mastery." },
              { icon: "💡", title: "The Curious Mind", desc: "Children who learn best by doing, building, experimenting and asking &ldquo;why?&rdquo; — not just memorising facts." },
              { icon: "🌟", title: "The Future Leader", desc: "Families seeking the very best — premium facilities, smaller classes, mentorship and a complete next-level experience." },
            ].map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 text-center border border-border h-full hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{p.icon}</div>
                  <h3 className="font-display font-bold text-navy text-lg mb-3">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLUBS & COMMUNITIES */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <Image src="/swiss-logo-v2.png" alt="" fill className="object-contain" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">Beyond the Classroom</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-4">
                Clubs &amp; Communities
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Every passion has a home at SIS. From robotics to riding, from drama to debate — we cultivate every talent with the same premium standard we bring to academics.
              </p>
            </div>
          </ScrollReveal>

          {/* Innovation & Tech */}
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-lg shrink-0">⚡</div>
                <h3 className="font-display text-xl font-bold text-navy">Innovation &amp; Technology</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { icon: "🤖", name: "Robotics & Innovation" },
                  { icon: "💻", name: "Coding & AI Club" },
                  { icon: "🚀", name: "Aero & Aviation Club" },
                  { icon: "🛰️", name: "Astronomy & Space" },
                ].map((c) => (
                  <div key={c.name} className="card-premium p-4 flex items-center gap-3 group">
                    <div className="text-2xl group-hover:scale-110 transition-transform">{c.icon}</div>
                    <div className="font-semibold text-navy text-sm">{c.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Academic Excellence */}
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-crimson to-crimson-dark flex items-center justify-center text-white text-lg shrink-0">📚</div>
                <h3 className="font-display text-xl font-bold text-navy">Academic Excellence</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-crimson/30 to-transparent" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { icon: "🧮", name: "Mathematics Olympiad" },
                  { icon: "🔬", name: "Science Investigators" },
                  { icon: "🧠", name: "Quiz & Knowledge Club" },
                  { icon: "♟️", name: "Chess & Strategy Club" },
                ].map((c) => (
                  <div key={c.name} className="card-premium p-4 flex items-center gap-3 group">
                    <div className="text-2xl group-hover:scale-110 transition-transform">{c.icon}</div>
                    <div className="font-semibold text-navy text-sm">{c.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Communication & Leadership */}
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white text-lg shrink-0">🎤</div>
                <h3 className="font-display text-xl font-bold text-navy">Communication &amp; Leadership</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { icon: "🗣️", name: "Debate Society" },
                  { icon: "🌍", name: "Model UN" },
                  { icon: "📝", name: "Literary & Writing" },
                  { icon: "💼", name: "Entrepreneurship Club" },
                ].map((c) => (
                  <div key={c.name} className="card-premium p-4 flex items-center gap-3 group">
                    <div className="text-2xl group-hover:scale-110 transition-transform">{c.icon}</div>
                    <div className="font-semibold text-navy text-sm">{c.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Arts & Performance */}
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-lg shrink-0">🎨</div>
                <h3 className="font-display text-xl font-bold text-navy">Arts &amp; Performance</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-transparent" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { icon: "🎵", name: "Music & Orchestra" },
                  { icon: "🎭", name: "Drama & Theatre" },
                  { icon: "💃", name: "Dance Academy" },
                  { icon: "🎨", name: "Art & Creative Studio" },
                  { icon: "📷", name: "Photography & Film" },
                ].map((c) => (
                  <div key={c.name} className="card-premium p-4 flex items-center gap-3 group">
                    <div className="text-2xl group-hover:scale-110 transition-transform">{c.icon}</div>
                    <div className="font-semibold text-navy text-sm">{c.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Sports & Adventure */}
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-lg shrink-0">🏆</div>
                <h3 className="font-display text-xl font-bold text-navy">Sports &amp; Adventure</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { icon: "🐎", name: "Equestrian Club" },
                  { icon: "🏹", name: "Archery Club" },
                  { icon: "🏊", name: "Swimming Academy" },
                  { icon: "⛸️", name: "Skating Club" },
                ].map((c) => (
                  <div key={c.name} className="card-premium p-4 flex items-center gap-3 group">
                    <div className="text-2xl group-hover:scale-110 transition-transform">{c.icon}</div>
                    <div className="font-semibold text-navy text-sm">{c.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Wellness & Service */}
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-lg shrink-0">🌱</div>
                <h3 className="font-display text-xl font-bold text-navy">Wellness, Heritage &amp; Service</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-orange-200 to-transparent" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { icon: "🧘", name: "Yoga & Wellness" },
                  { icon: "🌳", name: "Eco / Environment Club" },
                  { icon: "🏛️", name: "Heritage & Culture" },
                  { icon: "🤝", name: "Service & Community" },
                  { icon: "🍳", name: "Culinary Arts Club" },
                ].map((c) => (
                  <div key={c.name} className="card-premium p-4 flex items-center gap-3 group">
                    <div className="text-2xl group-hover:scale-110 transition-transform">{c.icon}</div>
                    <div className="font-semibold text-navy text-sm">{c.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Stats footer */}
          <ScrollReveal>
            <div className="mt-14 text-center">
              <div className="inline-flex items-center gap-6 bg-gradient-to-r from-crimson-tint via-white to-gold-light rounded-full px-8 py-4 border border-border shadow-sm">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-crimson">26+</div>
                  <div className="text-xs text-muted font-semibold tracking-widest uppercase">Active Clubs</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-crimson">6</div>
                  <div className="text-xs text-muted font-semibold tracking-widest uppercase">Domains</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-crimson">100%</div>
                  <div className="text-xs text-muted font-semibold tracking-widest uppercase">Student Choice</div>
                </div>
              </div>
              <p className="text-muted text-sm mt-5 max-w-md mx-auto">
                Every student is encouraged to join at least 2 clubs — academic, creative, or sporting.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-16 gradient-crimson relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 text-9xl text-white font-display">&ldquo;</div>
          <div className="absolute bottom-0 right-1/4 text-9xl text-white font-display">&rdquo;</div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <blockquote className="font-display text-2xl lg:text-3xl text-white font-bold leading-tight mb-6 italic">
              &ldquo;We didn&apos;t build Swiss International School to be different for the sake of difference. We built it because some children deserve education without compromise.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-gold" />
              <div>
                <div className="text-white font-bold">N S RAJESHWARRAN</div>
                <div className="text-white/90 text-sm font-semibold">Chairman & Founder</div>
                <div className="text-white/70 text-xs mt-0.5">Braeside International School &amp; Swiss International School</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">
              ✨ Limited Premium Seats — 2026–27
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Reserve Your Child&apos;s Place at SIS
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Swiss International School operates with limited seats to maintain our premium standards. Speak to our admissions team to learn more about availability, fee structure and the application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions" className="btn-white">Apply for SIS Admission</Link>
              <a href="https://wa.me/919443669586?text=Hi,%20I'd%20like%20to%20know%20more%20about%20Swiss%20International%20School%20at%20Braeside." target="_blank" rel="noopener noreferrer" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-crimson">
                💬 WhatsApp Admissions
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
