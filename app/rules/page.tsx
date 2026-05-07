"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const rules = [
  { num: "01", title: "Discipline and Conduct", icon: "⚖️", desc: "Students are expected to maintain discipline and demonstrate respectful behaviour towards teachers, staff members, and fellow students at all times. Courtesy, honesty, and integrity are core values that every student must uphold both inside and outside the school campus." },
  { num: "02", title: "Attendance", icon: "📅", desc: "Regular attendance is compulsory for all students. Students must attend classes punctually and should not be absent without prior permission or a valid reason. In case of illness or unavoidable circumstances, parents must inform the school authorities promptly." },
  { num: "03", title: "School Uniform", icon: "👔", desc: "Students must attend school in the prescribed school uniform, maintaining neatness and cleanliness at all times. Wearing the correct uniform reflects discipline and unity among students and is non-negotiable." },
  { num: "04", title: "Punctuality", icon: "⏰", desc: "Students are expected to arrive at school on time and attend all classes, assemblies, and school activities without delay. Late arrivals may require written explanations from parents or guardians." },
  { num: "05", title: "Respect for School Property", icon: "🏫", desc: "Students must take care of the school's infrastructure, classrooms, laboratories, library resources, and sports equipment. Any damage to school property will be considered a serious offence and may require compensation." },
  { num: "06", title: "Academic Responsibility", icon: "📚", desc: "Students are expected to complete all assignments, homework, and projects on time. They should actively participate in classroom activities and maintain proper academic discipline throughout the year." },
  { num: "07", title: "Use of Electronic Devices", icon: "📵", desc: "The use of mobile phones or other electronic devices during school hours is strictly prohibited unless permitted by the school authorities for academic purposes. Violations will result in disciplinary action." },
  { num: "08", title: "Behaviour on Campus", icon: "🤝", desc: "Students should maintain proper conduct within the school campus, including classrooms, laboratories, playgrounds, and common areas. Bullying, disrespectful behaviour, or any form of misconduct will not be tolerated under any circumstances." },
  { num: "09", title: "Participation in Activities", icon: "🎭", desc: "Students are encouraged to actively participate in sports, cultural programmes, and extracurricular activities organised by the school. These activities contribute significantly to their holistic development." },
  { num: "10", title: "Health and Safety", icon: "🏥", desc: "Students must follow all safety guidelines provided by the school. Any health concerns or medical conditions should be reported to the school authorities immediately to ensure proper care and support at all times." },
  { num: "11", title: "Parental Cooperation", icon: "👨‍👩‍👧", desc: "Parents are expected to cooperate with the school in maintaining discipline and supporting the overall development of their child. Regular communication between parents and teachers is strongly encouraged." },
  { num: "12", title: "Compliance with School Policies", icon: "📋", desc: "All students must strictly follow the rules and policies of the school. The school management reserves the right to take appropriate disciplinary action in case of violation of any rules or policies." },
];

export default function RulesPage() {
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
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">School Policy</div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">Rules & Regulations</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Building character through discipline — the foundation of the Braeside excellence framework.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <span className="text-white/80">Rules & Regulations</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-14 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="text-muted text-lg leading-relaxed">
              At Braeside School, discipline and responsibility are considered essential elements in shaping students into confident and responsible individuals. The following rules and regulations are established to maintain a safe, respectful, and productive learning environment for all students.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Rules Grid */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rules.map((rule, i) => (
              <ScrollReveal key={rule.num} delay={i * 50}>
                <div className="card-premium p-6 group h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 gradient-crimson rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-white font-display font-bold text-sm">{rule.num}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{rule.icon}</span>
                      <h3 className="font-display font-bold text-base text-navy">{rule.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed flex-1">{rule.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 gradient-crimson">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="text-5xl mb-6">🌟</div>
            <blockquote className="font-display text-2xl lg:text-3xl font-bold text-white mb-6 italic">
              &ldquo;By following these rules and regulations, students contribute to creating a positive, respectful, and enriching learning environment that benefits the entire school community.&rdquo;
            </blockquote>
            <p className="text-white/80 text-lg mb-8">— Braeside International School, Ooty</p>
            <Link href="/admissions" className="btn-white">Join Our School Family</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
