"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { step: "01", title: "Submit Inquiry", desc: "Fill in the inquiry form below or call us directly. Our admissions team will contact you within 24 hours." },
  { step: "02", title: "Campus Visit", desc: "Schedule a guided campus tour. See our facilities, meet our faculty and experience Braeside firsthand." },
  { step: "03", title: "Fill Application", desc: "Complete the Student Admission Form 2026-27 with required documents and academic records." },
  { step: "04", title: "Assessment", desc: "A simple grade-appropriate interaction/assessment to understand the student&apos;s learning profile." },
  { step: "05", title: "Offer & Enrollment", desc: "Receive your admission offer, pay the fee and confirm enrollment. Welcome to the Braeside family!" },
];

const grades = [
  { label: "Kindergarten", ages: "3–5 years", icon: "🎨", note: "Play-based, activity-centred early learning" },
  { label: "Primary (1–5)", ages: "6–11 years", icon: "📖", note: "Core foundation with ICSE curriculum" },
  { label: "Middle School (6–8)", ages: "11–14 years", icon: "🔬", note: "In-depth ICSE study with labs & activities" },
  { label: "High School (9–12)", ages: "14–18 years", icon: "🎓", note: "Board prep, mentorship & career guidance" },
];

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({ name: "", grade: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Admission Inquiry — ${formData.grade} — ${formData.name}`);
    const body = encodeURIComponent(
      `Student Name: ${formData.name}\nGrade Applying For: ${formData.grade}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:braesideschool6666@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-hero pt-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">Join Braeside</div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">Admissions 2026–27</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Seats are limited — secure your child&apos;s future at Braeside International School today.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <span className="text-white/80">Admissions</span>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-gold py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-navy font-bold text-sm tracking-wide">
            🎓 Admissions Open for Academic Year 2026–2027 — Kindergarten to Grade 12 · Limited Seats Available
          </p>
        </div>
      </div>

      {/* Grades */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">What We Offer</div>
              <h2 className="font-display text-4xl font-bold text-navy">Programmes Available</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal type="stagger">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {grades.map((g) => (
                <div key={g.label} className="card-premium p-6 text-center group">
                  <div className="w-16 h-16 gradient-crimson rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">{g.icon}</div>
                  <h3 className="font-display font-bold text-lg text-navy mb-1">{g.label}</h3>
                  <div className="text-crimson font-bold text-sm mb-3">{g.ages}</div>
                  <p className="text-muted text-sm">{g.note}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="section-label mb-4 inline-flex">How to Apply</div>
              <h2 className="font-display text-4xl font-bold text-navy">Admission Process</h2>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
            <ScrollReveal type="stagger">
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {steps.map((s) => (
                  <div key={s.step} className="relative text-center">
                    <div className="w-16 h-16 gradient-crimson rounded-full flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-4 shadow-lg shadow-crimson/30">
                      {s.step}
                    </div>
                    <h3 className="font-bold text-navy mb-2 text-sm">{s.title}</h3>
                    <p className="text-muted text-xs leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Inquiry Form + Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <ScrollReveal type="left" className="lg:col-span-3">
              <div className="section-label mb-5">Inquiry Form</div>
              <h2 className="font-display text-3xl font-bold text-navy mb-6 heading-line">Student Admission Form 2026–27</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display font-bold text-xl text-navy mb-2">Thank You!</h3>
                  <p className="text-muted">Your inquiry has been sent. Our admissions team will reach out within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 btn-primary">Submit Another Inquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Student&apos;s Full Name *</label>
                      <input required type="text" placeholder="Enter student name"
                        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-crimson focus:ring-2 focus:ring-crimson/10 outline-none transition-all text-navy" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Grade Applying For *</label>
                      <select required value={formData.grade} onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-crimson focus:ring-2 focus:ring-crimson/10 outline-none transition-all text-navy bg-white">
                        <option value="">Select Grade</option>
                        <option>Kindergarten</option>
                        <option>Grade 1</option><option>Grade 2</option><option>Grade 3</option><option>Grade 4</option><option>Grade 5</option>
                        <option>Grade 6</option><option>Grade 7</option><option>Grade 8</option>
                        <option>Grade 9</option><option>Grade 10</option><option>Grade 11</option><option>Grade 12</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Parent&apos;s Phone *</label>
                      <input required type="tel" placeholder="+91 XXXXX XXXXX"
                        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-crimson focus:ring-2 focus:ring-crimson/10 outline-none transition-all text-navy" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Email Address</label>
                      <input type="email" placeholder="parent@email.com"
                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-crimson focus:ring-2 focus:ring-crimson/10 outline-none transition-all text-navy" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Message / Additional Info</label>
                    <textarea rows={4} placeholder="Any specific requirements, questions or additional information..."
                      value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-crimson focus:ring-2 focus:ring-crimson/10 outline-none transition-all text-navy resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                    Submit Admission Inquiry
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                  <p className="text-xs text-muted text-center">
                    By submitting, you agree that your information will be used solely for admission enquiry purposes. All enquiries go directly to <span className="text-crimson font-semibold">braesideschool6666@gmail.com</span>
                  </p>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal type="right" className="lg:col-span-2">
              <div className="space-y-6">
                {/* Quick contact */}
                <div className="bg-crimson-light rounded-2xl p-6 border border-crimson/20">
                  <h3 className="font-display font-bold text-xl text-navy mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Admissions Office", val: "+91 94436 69586", href: "tel:+919443669586", icon: "📞" },
                      { label: "WhatsApp", val: "+91 94436 69586", href: "https://wa.me/919443669586", icon: "💬" },
                      { label: "Email", val: "braesideschool6666@gmail.com", href: "mailto:braesideschool6666@gmail.com", icon: "📧" },
                    ].map((c) => (
                      <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="flex items-start gap-3 group">
                        <div className="w-9 h-9 gradient-crimson rounded-full flex items-center justify-center text-base shrink-0">{c.icon}</div>
                        <div>
                          <div className="text-xs text-muted font-semibold">{c.label}</div>
                          <div className="text-navy font-semibold text-sm group-hover:text-crimson transition-colors break-all">{c.val}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Documents needed */}
                <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                  <h3 className="font-display font-bold text-lg text-navy mb-4">Documents Required</h3>
                  <ul className="space-y-2.5">
                    {["Previous school report card", "Date of birth certificate", "Aadhaar card (student)", "Parent/Guardian ID proof", "Passport-size photographs (4)", "Transfer certificate (if applicable)"].map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Campus image */}
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/images/campus-aerial.jpeg" alt="Braeside Campus" width={400} height={250} className="object-cover w-full h-48" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FEE PAYMENT / BANK DETAILS ── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-label mb-4 inline-flex">Fee Payment</div>
              <h2 className="font-display text-4xl font-bold text-navy mb-4">Bank Account Details</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                For admission fees and other school payments, please use the official bank accounts below.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* HDFC Account */}
            <ScrollReveal type="left">
              <div className="bg-white rounded-2xl p-7 border-2 border-crimson/20 shadow-lg relative overflow-hidden group hover:border-crimson transition-all duration-300">
                {/* Decorative gradient corner */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-crimson/10 to-gold/10 rounded-full blur-2xl" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 gradient-crimson rounded-xl flex items-center justify-center text-white font-display font-bold text-xl shadow-md">🏦</div>
                      <div>
                        <div className="text-xs text-crimson font-bold tracking-widest uppercase">Account 1</div>
                        <div className="font-display font-bold text-navy text-xl">HDFC Bank</div>
                      </div>
                    </div>
                    <div className="bg-green-50 text-green-700 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-green-200">
                      ✓ Active
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-3 border-b border-border">
                      <div className="text-xs text-muted font-bold tracking-widest uppercase">Account Name</div>
                      <div className="font-semibold text-navy">Braeside School</div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-3 border-b border-border">
                      <div className="text-xs text-muted font-bold tracking-widest uppercase">Account Number</div>
                      <div className="font-mono font-bold text-navy text-lg tracking-wider">59209443669586</div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-3 border-b border-border">
                      <div className="text-xs text-muted font-bold tracking-widest uppercase">IFSC Code</div>
                      <div className="font-mono font-bold text-navy text-lg tracking-wider">HDFC0001270</div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-3">
                      <div className="text-xs text-muted font-bold tracking-widest uppercase">Bank</div>
                      <div className="font-semibold text-navy">HDFC Bank Ltd</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Second Account — Coming Soon Placeholder */}
            <ScrollReveal type="right">
              <div className="bg-white rounded-2xl p-7 border-2 border-dashed border-gold/40 shadow-sm relative overflow-hidden h-full flex flex-col items-center justify-center text-center min-h-[340px]">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-gold/10 to-crimson/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-5 shadow-md">🏦</div>
                  <div className="text-xs text-gold-dark font-bold tracking-widest uppercase mb-2">Account 2</div>
                  <h3 className="font-display font-bold text-navy text-xl mb-3">Additional Bank Account</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
                    Details for our second bank account will be updated here soon. Please use Account 1 above for current payments.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 bg-gold-light text-gold-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                    🕐 Coming Soon
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Important Notes */}
          <ScrollReveal>
            <div className="mt-10 bg-crimson-tint border border-crimson/20 rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 gradient-crimson rounded-full flex items-center justify-center text-white text-lg shrink-0">ℹ️</div>
                <div>
                  <h4 className="font-display font-bold text-navy mb-2">Important Notes</h4>
                  <ul className="space-y-1.5 text-sm text-navy-mid">
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-crimson mt-1.5 shrink-0" />
                      <span>Always mention the <strong>student&apos;s name and class</strong> in the payment narration/reference.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-crimson mt-1.5 shrink-0" />
                      <span>After making the payment, please share the transaction screenshot via <a href="https://wa.me/919443669586" target="_blank" rel="noopener noreferrer" className="text-crimson font-semibold hover:underline">WhatsApp</a> or email <a href="mailto:braesideschool6666@gmail.com" className="text-crimson font-semibold hover:underline">braesideschool6666@gmail.com</a>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-crimson mt-1.5 shrink-0" />
                      <span>For any payment-related queries, contact the admissions office at <a href="tel:+919443669586" className="text-crimson font-semibold hover:underline">+91 94436 69586</a>.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
