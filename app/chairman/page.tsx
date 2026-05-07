"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ChairmanPage() {
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
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">
            Leadership
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">Chairman&apos;s Message</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Words of wisdom and vision from the founder and guiding force of Braeside.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span>/</span>
            <span className="text-white/80">Chairman&apos;s Message</span>
          </div>
        </div>
      </div>

      {/* FOUNDERS BANNER */}
      <section className="py-16 bg-gradient-to-br from-crimson-tint via-white to-gold-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal type="scale">
            <div className="grid lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <div className="section-label mb-4">Our Founders</div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-5 heading-line">
                  The Vision Behind Braeside
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  <strong className="text-navy">Mr. N S Rajeshwarran</strong> and <strong className="text-navy">Mrs. Rajeshwarran</strong> — the founding partners whose shared vision in 2008 became one of Ooty&apos;s most respected ICSE-affiliated institutions.
                </p>
                <p className="text-muted leading-relaxed">
                  Hands-on. Personally invested. Present every day. Their continued leadership is what makes Braeside more than a school — it is a family that knows every student by name.
                </p>
                <div className="mt-6 inline-flex items-center gap-3 bg-white rounded-full px-5 py-2 border border-border shadow-sm">
                  <span className="text-2xl">❤️</span>
                  <span className="font-display font-bold text-navy text-sm">Together since 2008</span>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/founder/cover.jpeg"
                    alt="Mr. & Mrs. Rajeshwarran — Founders of Braeside"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[300px]"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THE STORY BEHIND BRAESIDE */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <Image src="/logo.jpg" alt="" fill className="object-contain" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">📖 The Origin Story</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-4">How Braeside Began</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                A father&apos;s search for the right school for his daughter — and how one morning&apos;s decision changed thousands of lives.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {/* Step 1 — The Search */}
            <ScrollReveal type="left">
              <div className="grid sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-2 flex sm:justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-crimson to-crimson-dark flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-crimson/30">01</div>
                </div>
                <div className="sm:col-span-10 bg-off-white rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-xl text-navy mb-3">A Father&apos;s Search</h3>
                  <p className="text-muted leading-relaxed">
                    Years before Braeside opened its doors, our Chairman Mr. <strong className="text-navy">N S Rajeshwarran</strong> set out on what should have been a simple task — finding the right school for his beloved daughter. Like every parent, he wanted the best.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2 — Two Problems */}
            <ScrollReveal type="right">
              <div className="grid sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-2 flex sm:justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-gold/30">02</div>
                </div>
                <div className="sm:col-span-10 bg-gradient-to-br from-crimson-tint to-white rounded-2xl p-6 border border-crimson/20">
                  <h3 className="font-display font-bold text-xl text-navy mb-3">Two Heartbreaking Realities</h3>
                  <p className="text-muted leading-relaxed mb-4">
                    What he discovered was disappointing. The schools nearby had serious gaps — basic things like proper, clean restroom facilities were missing. The schools that <em>did</em> meet his standards were located far from home, with no reliable transport to ferry his daughter safely each day.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mt-4">
                    <div className="bg-white rounded-lg p-3 border border-crimson/15">
                      <div className="text-xs text-crimson font-bold tracking-widest uppercase mb-1">Problem 1</div>
                      <div className="text-sm text-navy font-semibold">Nearby schools — poor facilities</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-crimson/15">
                      <div className="text-xs text-crimson font-bold tracking-widest uppercase mb-1">Problem 2</div>
                      <div className="text-sm text-navy font-semibold">Quality schools — too far, no transport</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3 — The Decision */}
            <ScrollReveal type="left">
              <div className="grid sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-2 flex sm:justify-center">
                  <div className="w-16 h-16 rounded-2xl gradient-crimson flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-crimson/30">03</div>
                </div>
                <div className="sm:col-span-10 bg-off-white rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-xl text-navy mb-3">The Morning Everything Changed</h3>
                  <p className="text-muted leading-relaxed mb-5">
                    He thought about it for days. He couldn&apos;t accept that <em>his daughter</em> — or any child — should have to compromise. And then, one morning, the decision came:
                  </p>
                  <blockquote className="border-l-4 border-crimson pl-6 py-2 bg-crimson-tint rounded-r-xl">
                    <p className="font-display text-xl text-navy font-semibold italic">
                      &ldquo;If the right school doesn&apos;t exist — I will build it.&rdquo;
                    </p>
                  </blockquote>
                  <p className="text-muted leading-relaxed mt-4">
                    That very morning, he laid the foundation for what would become <strong className="text-navy">Braeside International School</strong>.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 4 — The First Student */}
            <ScrollReveal type="right">
              <div className="grid sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-2 flex sm:justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-crimson flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-gold/30">04</div>
                </div>
                <div className="sm:col-span-10 bg-gradient-to-br from-gold-light to-white rounded-2xl p-6 border border-gold/30">
                  <h3 className="font-display font-bold text-xl text-navy mb-3">Admission No. 1</h3>
                  <p className="text-muted leading-relaxed">
                    The very first student to be admitted to Braeside? <strong className="text-navy">His own daughter.</strong> The motivation behind the school walked through its doors as student number one — and from that day, every decision at Braeside has been guided by the same question every father asks: <em>&ldquo;Is this good enough for my own child?&rdquo;</em>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 5 — Growth into Two Schools */}
            <ScrollReveal type="left">
              <div className="grid sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-2 flex sm:justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-blue-500/30">05</div>
                </div>
                <div className="sm:col-span-10 bg-off-white rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-xl text-navy mb-3">From One School Into Two</h3>
                  <p className="text-muted leading-relaxed mb-4">
                    What began as one father&apos;s answer to one problem has grown into <strong className="text-navy">two distinct institutions</strong> serving thousands of families across the Nilgiris:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-4 border border-crimson/20">
                      <div className="text-2xl mb-2">🏫</div>
                      <div className="font-display font-bold text-navy text-base">Braeside International</div>
                      <div className="text-xs text-muted mt-1">The flagship school — comprehensive ICSE excellence for all</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gold/30">
                      <div className="text-2xl mb-2">✨</div>
                      <div className="font-display font-bold text-navy text-base">Swiss International</div>
                      <div className="text-xs text-muted mt-1">The premier tier — fully smart-board, fully activity-based</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 6 — Today */}
            <ScrollReveal type="right">
              <div className="grid sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-2 flex sm:justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-emerald-500/30">06</div>
                </div>
                <div className="sm:col-span-10 bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 border border-emerald-100">
                  <h3 className="font-display font-bold text-xl text-navy mb-3">Today — Zero Compromises</h3>
                  <p className="text-muted leading-relaxed mb-4">
                    Every promise that morning has been kept and exceeded. Today, Braeside offers a complete <strong className="text-navy">zero-to-hundred experience</strong> — every facility a child needs, and reliable transport reaching <strong className="text-navy">every part of the Nilgiris</strong>. No student is denied because of distance. No parent has to compromise.
                  </p>
                  <blockquote className="border-l-4 border-gold pl-5 py-1 bg-gold-light/40 rounded-r-lg">
                    <p className="font-display text-base text-navy font-semibold italic">
                      &ldquo;Every student deserves a proper, luxurious, comfortable, and 100% quality education. That was the promise. That is still the promise.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MAIN MESSAGE */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            <ScrollReveal type="left" className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <Image
                    src="/founder/chairman-main.jpeg"
                    alt="N S Rajeshwarran, Chairman"
                    width={600}
                    height={780}
                    className="object-cover w-full h-[520px]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent p-5">
                    <div className="text-white font-display font-bold text-xl">N S RAJESHWARRAN</div>
                    <div className="text-white/90 text-sm font-semibold">Chairman & Founder</div>
                    <div className="text-white/70 text-xs mt-0.5">Braeside International School &amp; Swiss International School</div>
                  </div>
                </div>

                <div className="bg-white border border-border rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12">
                      <Image src="/logo.jpg" alt="BSIS" fill className="object-contain" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-navy text-base leading-tight">Braeside International School</div>
                      <div className="font-display font-bold text-crimson text-sm leading-tight mt-0.5">&amp; Swiss International School</div>
                      <div className="text-muted text-xs font-semibold tracking-widest uppercase mt-1">Est. 2008 · ICSE</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted leading-relaxed mb-4">
                    Ooty, Tamil Nadu<br />
                    Affil. No: (409D) 2024-001-03-5-0005-3027
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="text-xs text-muted uppercase tracking-widest font-bold mb-2">Our Motto</div>
                    <div className="font-display text-2xl font-bold gradient-text">I CAN I WILL</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal type="right" className="lg:col-span-3">
              <div className="section-label mb-5">A Message to Our Community</div>
              <h2 className="font-display text-3xl font-bold text-navy mb-8 heading-line">
                Dear Parents, Students, and Well-Wishers,
              </h2>

              <div className="space-y-6 text-muted leading-relaxed">
                <p className="text-lg">
                  It is with great pride and pleasure that I welcome you to Braeside International School — an institution dedicated to nurturing young minds and shaping the leaders of tomorrow.
                </p>
                <blockquote className="border-l-4 border-crimson pl-6 py-2 bg-crimson-tint rounded-r-xl">
                  <p className="font-display text-xl text-navy font-semibold italic">
                    &ldquo;Education is not merely the acquisition of knowledge — it is a journey of transformation, building character, instilling confidence, and igniting a lifelong love for learning.&rdquo;
                  </p>
                </blockquote>
                <p>
                  At Braeside, our vision has always been to create a dynamic learning space where students can explore their fullest potential and develop into responsible, confident, and compassionate individuals. We are committed to academic excellence while fostering creativity, leadership, and the values that truly matter.
                </p>
                <p>
                  Our faculty are not just educators — they are mentors who inspire students to pursue goals that are meaningful and lasting. Through innovative teaching methods and modern learning tools, we ensure that every student is challenged, supported, and celebrated for their unique strengths.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECOND MESSAGE — with normal1 photo */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-center">
            <ScrollReveal type="right" className="lg:col-span-3 order-2 lg:order-1">
              <div className="section-label mb-5">On Holistic Development</div>
              <h2 className="font-display text-3xl font-bold text-navy mb-6 heading-line">
                Beyond Books — A Complete Education
              </h2>
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  We believe in the holistic development of every child. At Braeside, academics are balanced with sports, cultural activities, arts, and co-curricular programmes designed to build teamwork, discipline, resilience, and self-confidence.
                </p>
                <blockquote className="border-l-4 border-gold pl-6 py-2 bg-gold-light rounded-r-xl">
                  <p className="font-display text-lg text-navy font-semibold italic">
                    &ldquo;A child who reads grows into an adult who thinks. A child who plays grows into an adult who leads. A child who dreams grows into an adult who creates.&rdquo;
                  </p>
                </blockquote>
                <p>
                  Our floodlit football turf, heated swimming pool, international badminton courts, skating rink, and musical rooms are not luxuries — they are integral to our mission of building well-rounded individuals. Every facility on our campus is designed to spark curiosity, build skill, and deepen passion.
                </p>
                <p>
                  Our campus provides a safe, inclusive, and beautifully designed environment, equipped with modern facilities, advanced laboratories, technology-enabled classrooms, and sports infrastructure that supports intellectual, physical, and social growth.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal type="left" className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/founder/normal1.jpeg"
                    alt="Chairman in his office"
                    width={500}
                    height={700}
                    className="object-cover w-full h-[480px]"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-border max-w-[200px]">
                  <div className="text-xs text-crimson font-bold tracking-widest uppercase mb-1">Quote</div>
                  <div className="text-sm text-navy font-display italic leading-snug">&ldquo;Reading is the gateway to lifelong learning.&rdquo;</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* THIRD MESSAGE — with normal2 photo */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-center">
            <ScrollReveal type="left" className="lg:col-span-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/founder/normal2.jpeg"
                    alt="Chairman at his desk"
                    width={500}
                    height={700}
                    className="object-cover w-full h-[480px]"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-border max-w-[220px]">
                  <div className="text-xs text-crimson font-bold tracking-widest uppercase mb-1">Vision</div>
                  <div className="text-sm text-navy font-display italic leading-snug">&ldquo;Every child deserves the chance to dream big.&rdquo;</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal type="right" className="lg:col-span-3">
              <div className="section-label mb-5">A Partnership With Parents</div>
              <h2 className="font-display text-3xl font-bold text-navy mb-6 heading-line">
                Together, We Shape Tomorrow
              </h2>
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  I deeply value the partnership of our parents and guardians — your trust and involvement are vital to your child&apos;s success. Together, we create a community of learners who uplift one another and grow together.
                </p>
                <blockquote className="border-l-4 border-crimson pl-6 py-2 bg-crimson-tint rounded-r-xl">
                  <p className="font-display text-lg text-navy font-semibold italic">
                    &ldquo;As we continue our journey of excellence, we remain committed to shaping students who are not only academically capable but also ethically grounded and socially responsible.&rdquo;
                  </p>
                </blockquote>
                <p>
                  Every decision we make at Braeside is guided by a single question: <em>&ldquo;Is this in the best interest of the child?&rdquo;</em> From curriculum design to facility upgrades, from teacher training to extracurricular programmes — we never lose sight of why we exist.
                </p>
                <p>
                  Our motto — <strong className="text-crimson">I CAN I WILL</strong> — is not just a phrase. It is a belief system we instil in every child who walks through our doors. It is the confidence that no goal is too high, no dream too distant, no challenge too great.
                </p>
                <p>
                  Welcome to the Braeside family. Together, let us build a future where every child discovers their greatness.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="w-16 h-0.5 bg-gold" />
                <div>
                  <div className="font-display font-bold text-xl text-navy">N S RAJESHWARRAN</div>
                  <div className="text-crimson font-semibold text-sm">Chairman & Founder</div>
                  <div className="text-muted text-xs mt-0.5">Braeside International School &amp; Swiss International School</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/vision-mission" className="btn-primary">Our Vision & Mission</Link>
                <Link href="/admissions" className="btn-secondary">Join Our School</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
