"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
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
      {/* Page Hero */}
      <div className="page-hero pt-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">
            Who We Are
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">About Braeside</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            A journey of excellence, discipline, and passion for learning — transforming lives since 2008.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">About Us</span>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal type="left">
              <div className="section-label mb-5">Our Story</div>
              <h2 className="font-display text-4xl font-bold text-navy mb-6 heading-line">
                Built on Excellence, Driven by Purpose
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-5">
                Braeside International School was founded in 2008 with a singular vision — to create an institution that goes beyond traditional education, nurturing young minds into confident global citizens.
              </p>
              <p className="text-muted leading-relaxed mb-5">
                Set amidst the breathtaking Nilgiri hills of Ooty, our ICSE-affiliated campus has grown into one of the region&apos;s most respected institutions — combining academic rigour with a vast array of co-curricular, sports, and life-skills programmes.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                We believe true learning combines knowledge, discipline, creativity, and life skills. Education here goes beyond textbooks — students experiment in labs, train in world-class sports facilities, perform on cultural stages, and develop the resilience to lead tomorrow.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="text-center"><div className="text-3xl font-display font-bold text-crimson">17+</div><div className="text-sm text-muted">Years Old</div></div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center"><div className="text-3xl font-display font-bold text-crimson">1200+</div><div className="text-sm text-muted">Students</div></div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center"><div className="text-3xl font-display font-bold text-crimson">60+</div><div className="text-sm text-muted">Faculty</div></div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/chairman" className="btn-primary">Chairman&apos;s Message</Link>
                <Link href="/vision-mission" className="btn-secondary">Vision & Mission</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal type="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden h-64 col-span-2">
                  <Image src="/images/campus-aerial.jpeg" alt="Braeside Campus" width={600} height={300} className="object-cover w-full h-full" />
                </div>
                <div className="rounded-xl overflow-hidden h-48">
                  <Image src="/images/students-writing-2.jpeg" alt="Students" width={300} height={200} className="object-cover w-full h-full" />
                </div>
                <div className="rounded-xl overflow-hidden h-48">
                  <Image src="/images/kg-classroom-2.jpeg" alt="Kindergarten" width={300} height={200} className="object-cover w-full h-full" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Founders */}
      <section className="py-20 bg-gradient-to-br from-crimson-tint via-white to-gold-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">Meet the Founders</div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-4">Behind the Vision</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                The visionary couple whose passion and dedication built Braeside International School from the ground up.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal type="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/founder/cover.jpeg"
                    alt="Mr. & Mrs. Rajeshwarran — Founders of Braeside International School"
                    width={800}
                    height={500}
                    className="object-cover w-full h-[420px]"
                  />
                </div>
                {/* Decorative badge */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-4 border border-gold/30">
                  <div className="text-center">
                    <div className="text-gold font-display font-bold text-2xl">Since</div>
                    <div className="text-crimson font-display font-bold text-3xl">2008</div>
                  </div>
                </div>
                {/* Heart decoration */}
                <div className="absolute -top-4 -left-4 w-14 h-14 gradient-crimson rounded-full flex items-center justify-center shadow-xl text-white text-2xl">
                  ❤️
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal type="right">
              <div className="section-label mb-4">Founders &amp; Pillars</div>
              <h3 className="font-display text-3xl font-bold text-navy mb-5 heading-line">
                A Partnership Built on Purpose
              </h3>
              <p className="text-muted leading-relaxed mb-5">
                Together, <strong className="text-navy">Mr. N S Rajeshwarran</strong> and <strong className="text-navy">Mrs. Rajeshwarran</strong> founded Braeside International School in 2008 with a shared vision — to build an institution that would shape not just academic minds, but compassionate, confident, and capable individuals.
              </p>
              <p className="text-muted leading-relaxed mb-5">
                What began as a single building in the hills of Ooty has grown into one of the Nilgiris&apos; most respected ICSE-affiliated institutions, with world-class facilities, a thriving student body, and an unwavering commitment to excellence.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Their continued presence at the school — guiding teachers, mentoring students, and welcoming every parent personally — is what makes Braeside more than a school. It is a family.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-border shadow-sm">
                  <div className="text-2xl mb-2">🎓</div>
                  <div className="font-bold text-navy text-sm">Vision-Driven Leadership</div>
                  <div className="text-muted text-xs mt-1">Hands-on guidance from the top, every single day</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-border shadow-sm">
                  <div className="text-2xl mb-2">🤝</div>
                  <div className="font-bold text-navy text-sm">Personal Attention</div>
                  <div className="text-muted text-xs mt-1">Every parent, every student — known by name</div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/chairman" className="btn-primary">
                  Read Chairman&apos;s Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">What We Stand For</div>
              <h2 className="font-display text-4xl font-bold text-navy">Our Core Values</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal type="stagger">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "⚖️", title: "Integrity", desc: "Honesty and ethical conduct in every action — inside and outside the classroom." },
                { icon: "🌟", title: "Excellence", desc: "Striving for the highest standards in academics, sports, arts and personal character." },
                { icon: "🤝", title: "Respect", desc: "Honouring every individual — students, teachers, staff and the community." },
                { icon: "💪", title: "Responsibility", desc: "Owning one&apos;s actions and contributing meaningfully to society and the environment." },
                { icon: "💡", title: "Innovation", desc: "Encouraging creative thinking, problem-solving and curiosity-driven learning." },
                { icon: "🌐", title: "Collaboration", desc: "Teamwork, communication and empathy — skills essential for tomorrow&apos;s leaders." },
              ].map((v) => (
                <div key={v.title} className="card-premium p-6 group">
                  <div className="w-12 h-12 gradient-crimson rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">{v.icon}</div>
                  <h3 className="font-display font-bold text-lg text-navy mb-2">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="py-16 gradient-crimson">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="font-display text-3xl lg:text-4xl font-bold text-white/30 mb-3">DREAM BIG.</p>
            <p className="font-display text-4xl lg:text-5xl font-bold text-white mb-3">LEARN CONTINUOUSLY.</p>
            <p className="font-display text-3xl lg:text-4xl font-bold text-gold">ACHIEVE EXCELLENCE.</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
