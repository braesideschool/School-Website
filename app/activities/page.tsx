"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const activityGroups = [
  {
    title: "Academic Enrichment",
    icon: "📚",
    desc: "Strengthening students' knowledge and critical thinking skills beyond the textbook.",
    img: "/images/chemistry-lab.jpeg",
    items: ["Science Exhibitions", "Quiz Competitions", "Language Clubs", "Public Speaking", "Writing Workshops"],
  },
  {
    title: "Arts & Creative",
    icon: "🎨",
    desc: "Exploring creativity through arts, crafts and vibrant cultural programmes.",
    img: "/images/cultural-dance.jpeg",
    items: ["Drawing & Painting", "Craft and Design", "Music Training", "Dance and Drama", "Annual Cultural Fest"],
  },
  {
    title: "Sports & Physical",
    icon: "⚽",
    desc: "Promoting a healthy, active lifestyle through structured physical education.",
    img: "/images/football-turf-2.jpeg",
    items: ["Athletics Events", "Football & Cricket", "Indoor Games", "Yoga & Fitness", "Martial Arts"],
  },
  {
    title: "Skill Development",
    icon: "🧠",
    desc: "Promoting life skills, leadership and entrepreneurial thinking among students.",
    img: "/images/computer-lab.jpeg",
    items: ["Leadership Programs", "Scouts & Guides", "Environment Awareness", "Community Service", "Personality Development"],
  },
  {
    title: "Special Events",
    icon: "🎊",
    desc: "Showcasing student talents through grand annual celebrations.",
    img: "/images/basketball-2.jpeg",
    items: ["Annual Day", "Sports Meet", "Teachers' Day", "Talent Shows", "Field Trips"],
  },
  {
    title: "Social Responsibility",
    icon: "🌱",
    desc: "Encouraging social values, environmental awareness and community giving.",
    img: "/images/campus-collage.jpeg",
    items: ["Tree Plantation", "Clean Campus Drive", "Social Welfare", "Health Awareness", "Community Connect"],
  },
];

export default function ActivitiesPage() {
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
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">Campus Life</div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">Activities</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">A thriving world of learning, creativity and growth — beyond the classroom.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <span className="text-white/80">Activities</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">What We Offer</div>
              <h2 className="font-display text-4xl font-bold text-navy mb-4">Six Pillars of Campus Life</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">Every student finds their passion at Braeside — whether it&apos;s on the stage, on the field, in the lab, or in the community.</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activityGroups.map((group, i) => (
              <ScrollReveal key={group.title} delay={i * 80}>
                <div className="card-premium group overflow-hidden h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={group.img} alt={group.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="text-2xl">{group.icon}</span>
                      <span className="text-white font-display font-bold text-lg">{group.title}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-muted text-sm leading-relaxed mb-5">{group.desc}</p>
                    <ul className="space-y-2 mt-auto">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-navy-mid">
                          <div className="w-4 h-4 gradient-crimson rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal type="left">
              <div className="section-label mb-5">Sports Excellence</div>
              <h2 className="font-display text-4xl font-bold text-navy mb-6 heading-line">Champions Are Made Here</h2>
              <p className="text-muted leading-relaxed mb-5">
                Our sports programme is one of the most comprehensive in the Nilgiris district. From international badminton to heated swimming, from floodlit football to table tennis — students train like professionals.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { sport: "Badminton", icon: "🏸" },
                  { sport: "Football", icon: "⚽" },
                  { sport: "Basketball", icon: "🏀" },
                  { sport: "Swimming", icon: "🏊" },
                  { sport: "Cricket", icon: "🏏" },
                  { sport: "Tennis", icon: "🎾" },
                  { sport: "Volleyball", icon: "🏐" },
                  { sport: "Skating", icon: "⛸️" },
                  { sport: "Table Tennis", icon: "🏓" },
                ].map((s) => (
                  <div key={s.sport} className="bg-crimson-light rounded-xl p-3 text-center">
                    <div className="text-xl mb-1">{s.icon}</div>
                    <div className="text-xs font-bold text-navy">{s.sport}</div>
                  </div>
                ))}
              </div>
              <Link href="/facilities" className="btn-primary">Explore Our Sports Facilities</Link>
            </ScrollReveal>
            <ScrollReveal type="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden h-64 col-span-2">
                  <Image src="/images/basketball-2.jpeg" alt="Basketball" width={600} height={256} className="object-cover w-full h-full" />
                </div>
                <div className="rounded-xl overflow-hidden h-48">
                  <Image src="/images/skating.jpeg" alt="Skating" width={300} height={192} className="object-cover w-full h-full" />
                </div>
                <div className="rounded-xl overflow-hidden h-48">
                  <Image src="/images/swimming-new.jpeg" alt="Swimming pool" width={300} height={192} className="object-cover w-full h-full" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
