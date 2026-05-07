"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const labs = [
  { name: "Chemistry Laboratory", img: "/images/chemistry-lab.jpeg", local: true, desc: "Fully equipped with modern apparatus and safety equipment. Students conduct experiments and develop analytical thinking skills through hands-on chemical investigations." },
  { name: "Physics Laboratory", img: "/images/physics-lab.jpeg", local: true, desc: "Designed to help students understand fundamental principles of physics through practical experiments — mechanics, optics, electricity and beyond." },
  { name: "Biology Laboratory", img: "/images/biology-lab.jpeg", local: true, desc: "Microscopes, biological specimens and anatomical models allow students to explore human anatomy, plant biology and environmental science firsthand." },
  { name: "Computer Laboratory", img: "/images/computer-lab.jpeg", local: true, desc: "Modern computer systems, high-speed internet and latest software. Students develop digital literacy, coding skills and creative technology projects." },
  { name: "Smart Classrooms", img: "/images/smart-classroom.jpeg", local: true, desc: "Interactive whiteboards, multimedia projectors and Wi-Fi connectivity transform every lesson into an engaging, technology-powered experience." },
  { name: "Kindergarten Studio", img: "/images/kg-classroom.jpeg", local: true, desc: "A vibrant, joyful space designed for early learners — colourful, activity-oriented and nurturing for the youngest Braesiders." },
];

const grades = [
  { range: "Kindergarten", ages: "3–5 years", desc: "Play-based, activity-centred learning that builds curiosity, language and social foundations.", icon: "🎨" },
  { range: "Primary (1–5)", ages: "6–11 years", desc: "Core subjects strengthened through creative projects, experiments and extracurriculars.", icon: "📖" },
  { range: "Middle School (6–8)", ages: "11–14 years", desc: "ICSE framework deepens analytical thinking with labs, debates and leadership activities.", icon: "🔬" },
  { range: "High School (9–12)", ages: "14–18 years", desc: "Board-level preparation with mentorship, mock exams and career counselling support.", icon: "🎓" },
];

export default function AcademicsPage() {
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
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">ICSE Curriculum</div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">Academic Excellence</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Not just book learning — activity-based, lab-driven education that builds thinkers, creators, and leaders.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <span className="text-white/80">Academics</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-72 -mt-1 overflow-hidden">
        <Image src="/images/students-writing.jpeg" alt="Braeside students learning" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* Why Activity-Based */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal type="left">
              <div className="section-label mb-5">Our Approach</div>
              <h2 className="font-display text-4xl font-bold text-navy mb-6 heading-line">Activity-Based Learning — Not Just Books</h2>
              <p className="text-muted text-lg leading-relaxed mb-5">
                At Braeside, education transcends textbooks. Every concept is practically implemented — students experiment in labs, debate in classrooms, build in workshops and compete on grounds.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                This approach doesn&apos;t just improve grades — it builds critical thinking, creativity and the confidence to apply knowledge in the real world. Our ICSE curriculum is delivered through seminars, group projects, lab work and collaborative learning experiences that mirror what students will face beyond school.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🔬", label: "Lab Experiments", val: "100+" },
                  { icon: "📊", label: "Project-Based Units", val: "50+" },
                  { icon: "🎤", label: "Seminars/Year", val: "24+" },
                  { icon: "🏆", label: "Academic Awards", val: "200+" },
                ].map((s) => (
                  <div key={s.label} className="stat-card">
                    <div className="text-2xl mb-2">{s.icon}</div>
                    <div className="text-2xl font-display font-bold text-crimson">{s.val}</div>
                    <div className="text-xs text-muted font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal type="right">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/images/students-writing.jpeg" alt="Students in class" width={600} height={320} className="object-cover w-full h-64" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden">
                    <Image src="/images/smart-classroom.jpeg" alt="Smart classroom" width={300} height={200} className="object-cover w-full h-40" />
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <Image src="/images/kg-classroom-2.jpeg" alt="KG classroom" width={300} height={200} className="object-cover w-full h-40" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Grades */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">Programmes Offered</div>
              <h2 className="font-display text-4xl font-bold text-navy">From Kindergarten to Grade 12</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal type="stagger">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {grades.map((g) => (
                <div key={g.range} className="card-premium p-6 text-center group">
                  <div className="w-16 h-16 gradient-crimson rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">{g.icon}</div>
                  <h3 className="font-display font-bold text-lg text-navy mb-1">{g.range}</h3>
                  <div className="text-crimson text-sm font-semibold mb-3">{g.ages}</div>
                  <p className="text-muted text-sm leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Labs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">Hands-On Learning</div>
              <h2 className="font-display text-4xl font-bold text-navy">World-Class Labs & Classrooms</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto mt-4">Every lab is designed to transform theory into tangible, unforgettable learning experiences.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((lab, i) => (
              <ScrollReveal key={lab.name} delay={i * 80}>
                <div className="card-premium group overflow-hidden">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={lab.img} alt={lab.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white font-display font-bold text-base">{lab.name}</div>
                  </div>
                  <div className="p-5">
                    <p className="text-muted text-sm leading-relaxed">{lab.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-crimson">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Give Your Child the Best Academic Foundation</h2>
            <p className="text-white/80 text-lg mb-8">ICSE affiliated · Activity-Based Learning · World-Class Labs · Expert Faculty</p>
            <Link href="/admissions" className="btn-white">Apply for Admissions 2026–27</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
