"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const events = [
  {
    name: "Annual Day",
    month: "December",
    icon: "🎊",
    img: "/images/cultural-dance.jpeg",
    desc: "The grandest celebration of the Braeside calendar — a spectacular showcase of student talent, academic achievements, sports trophies, cultural performances and recognition for excellence across every discipline.",
    highlights: ["Student Awards & Honours", "Cultural Performances", "Sports Championship Felicitation", "Parent–School Gathering"],
  },
  {
    name: "Sports Meet",
    month: "January",
    icon: "🏆",
    img: "/images/basketball-2.jpeg",
    desc: "An exhilarating inter-house sports extravaganza featuring 25+ events across athletics, team sports, swimming and indoor games. The entire school comes alive with competitive energy, sportsmanship and school spirit.",
    highlights: ["Athletics & Track Events", "Swimming Championships", "Team Sports Finals", "Inter-House Championship Trophy"],
  },
  {
    name: "Rhyme Expo",
    month: "March",
    icon: "🎤",
    img: "/images/students-writing.jpeg",
    desc: "A vibrant literary and performing arts festival celebrating the power of words, expression and creativity. Students participate in poetry recitation, creative writing, debates, elocution and dramatic performances.",
    highlights: ["Poetry Recitation", "Creative Writing Competition", "Elocution & Debate", "Drama & Theatrical Performances"],
  },
  {
    name: "Christmas Celebration",
    month: "December",
    icon: "🎄",
    img: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?auto=format&fit=crop&w=800&q=80",
    desc: "A joyful, campus-wide Christmas festival that brings students, faculty and families together — with carol singing, nativity plays, gift exchanges, cultural exchange programmes and festive decorations throughout campus.",
    highlights: ["Carol Singing Competition", "Nativity Play", "Gift Exchange", "Festive Campus Decoration"],
  },
];

export default function EventsPage() {
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
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">Our Events</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Celebrating talent, achievement and community — unforgettable moments that define the Braeside experience.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <span className="text-white/80">Events</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">Annual Calendar</div>
              <h2 className="font-display text-4xl font-bold text-navy mb-4">Milestones We Celebrate</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">Every event is a milestone in a student&apos;s journey — building memories that last a lifetime.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-10">
            {events.map((event, i) => (
              <ScrollReveal key={event.name} type={i % 2 === 0 ? "left" : "right"}>
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={`relative rounded-2xl overflow-hidden h-72 ${i % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                    <Image src={event.img} alt={event.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-crimson text-white px-4 py-1.5 rounded-full text-sm font-bold">{event.month}</div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-4xl">{event.icon}</div>
                  </div>
                  <div className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="section-label mb-4">{event.month}</div>
                    <h3 className="font-display text-3xl font-bold text-navy mb-4 heading-line">{event.name}</h3>
                    <p className="text-muted leading-relaxed mb-6">{event.desc}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {event.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm text-navy-mid">
                          <div className="w-4 h-4 gradient-crimson rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </div>
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="py-16 gradient-crimson">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Relive the Memories</h2>
            <p className="text-white/80 mb-8">Browse our gallery to see all our events, celebrations and achievements captured in stunning photographs.</p>
            <Link href="/gallery" className="btn-white">Visit Photo Gallery</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
