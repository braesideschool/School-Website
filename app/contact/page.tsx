"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
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
    const subject = encodeURIComponent(formData.subject || "Contact Inquiry — Braeside International School");
    const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:braesideschool6666@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-hero pt-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">Get in Touch</div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">We&apos;d love to hear from you. Reach out for admissions, queries or to book a campus visit.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <span className="text-white/80">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal type="stagger">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📍", title: "Our Address", lines: ["8/632, Kappathorai", "Ooty – 643004", "Tamil Nadu, India"], href: "https://maps.app.goo.gl/P6CN119QuyAV45dP7", cta: "Get Directions" },
                { icon: "📞", title: "Phone", lines: ["+91 94436 69586", "+91 63746 63556", "0423 2550535"], href: "tel:+919443669586", cta: "Call Now" },
                { icon: "📧", title: "Email", lines: ["braesideschool6666@gmail.com", "braesideschool535@gmail.com", ""], href: "mailto:braesideschool6666@gmail.com", cta: "Send Email" },
                { icon: "💬", title: "WhatsApp", lines: ["+91 94436 69586", "Chat with our team", "Quick responses"], href: "https://wa.me/919443669586", cta: "Chat Now" },
              ].map((c) => (
                <div key={c.title} className="card-premium p-6 text-center group">
                  <div className="w-14 h-14 gradient-crimson rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">{c.icon}</div>
                  <h3 className="font-display font-bold text-lg text-navy mb-3">{c.title}</h3>
                  {c.lines.filter(Boolean).map((l) => (
                    <p key={l} className="text-muted text-sm">{l}</p>
                  ))}
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-crimson font-bold text-sm hover:gap-2 transition-all">
                    {c.cta} →
                  </a>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal type="left">
              <div className="section-label mb-5">Send a Message</div>
              <h2 className="font-display text-3xl font-bold text-navy mb-6 heading-line">We&apos;re Here to Help</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display font-bold text-xl text-navy mb-2">Message Sent!</h3>
                  <p className="text-muted">Thank you for reaching out. Our team will respond within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 btn-primary">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Your Name *</label>
                      <input required type="text" placeholder="Full name"
                        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-crimson focus:ring-2 focus:ring-crimson/10 outline-none transition-all text-navy" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Phone Number *</label>
                      <input required type="tel" placeholder="+91 XXXXX XXXXX"
                        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-crimson focus:ring-2 focus:ring-crimson/10 outline-none transition-all text-navy" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Email Address</label>
                    <input type="email" placeholder="your@email.com"
                      value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-crimson focus:ring-2 focus:ring-crimson/10 outline-none transition-all text-navy" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Subject</label>
                    <input type="text" placeholder="Admission inquiry, campus visit, general query..."
                      value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-crimson focus:ring-2 focus:ring-crimson/10 outline-none transition-all text-navy" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Message *</label>
                    <textarea required rows={5} placeholder="Tell us how we can help you..."
                      value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-crimson focus:ring-2 focus:ring-crimson/10 outline-none transition-all text-navy resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal type="right">
              <div>
                <div className="section-label mb-5">Find Us</div>
                <h2 className="font-display text-3xl font-bold text-navy mb-6 heading-line">Visit Our Campus</h2>
                <p className="text-muted mb-6">Braeside International School is nestled in the serene Nilgiri hills of Ooty, Tamil Nadu — accessible from all major routes.</p>
                {/* Google Maps Embed */}
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border mb-6 h-80">
                  <iframe
                    src="https://maps.google.com/maps?q=8/632,+Kappathorai,+Ooty,+Tamil+Nadu+643004&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Braeside International School Location"
                  />
                </div>
                <a href="https://maps.app.goo.gl/P6CN119QuyAV45dP7" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                  Open in Google Maps
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social + WhatsApp */}
      <section className="py-16 gradient-crimson">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Connect With Us Online</h2>
            <p className="text-white/80 mb-8">Follow us for school updates, events, achievements and campus life.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.instagram.com/braesideschool_ooty?igsh=MjhzZGxhMXdpZDJw" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all border border-white/20">
                📸 Instagram
              </a>
              <a href="https://youtube.com/@braesideschool8925" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all border border-white/20">
                ▶️ YouTube
              </a>
              <a href="https://www.facebook.com/share/1BZUjddUJ3/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-blue-600/80 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all border border-white/20">
                📘 Facebook
              </a>
              <a href="https://wa.me/919443669586" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366]/80 hover:bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all">
                💬 WhatsApp Chat
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
