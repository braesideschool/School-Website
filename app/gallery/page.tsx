"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const galleryItems = [
  // Featured campus shots (newest)
  { src: "/images/campus-main-2.jpg", label: "Campus — Front View", cat: "Campus" },
  { src: "/images/campus-main-3.jpg", label: "Campus — Skating & Hostel", cat: "Campus" },
  { src: "/images/campus-main-4.jpg", label: "Campus — Wide View", cat: "Campus" },
  // Latest gallery additions
  { src: "/images/gallery/g7.jpeg", label: "Campus Life", cat: "Campus" },
  { src: "/images/gallery/g8.jpeg", label: "Campus Life", cat: "Campus" },
  { src: "/images/gallery/g9.jpeg", label: "Student Activities", cat: "Students" },
  { src: "/images/gallery/g10.jpeg", label: "Student Activities", cat: "Students" },
  { src: "/images/gallery/g11.jpeg", label: "Student Activities", cat: "Students" },
  { src: "/images/gallery/g12.jpeg", label: "School Moments", cat: "Events" },
  { src: "/images/gallery/g13.jpeg", label: "School Moments", cat: "Events" },
  { src: "/images/gallery/g15.jpeg", label: "School Life", cat: "Campus" },
  { src: "/images/gallery/g16.jpeg", label: "School Life", cat: "Campus" },
  // Earlier event photos
  { src: "/images/gallery/event-1.jpeg", label: "School Event", cat: "Events" },
  { src: "/images/gallery/event-2.jpeg", label: "School Event", cat: "Events" },
  { src: "/images/gallery/event-3.jpeg", label: "School Event", cat: "Events" },
  { src: "/images/gallery/event-4.jpeg", label: "School Event", cat: "Events" },
  { src: "/images/gallery/event-5.jpeg", label: "School Event", cat: "Events" },
  { src: "/images/gallery/event-6.jpeg", label: "School Event", cat: "Events" },
  // Newest student & event photos
  { src: "/images/gallery/students-group-green.jpeg", label: "Braeside Students", cat: "Students" },
  { src: "/images/gallery/sis-students-maroon.jpeg", label: "Swiss International Students", cat: "Students" },
  { src: "/images/gallery/sis-students-turf.jpeg", label: "Students on the Football Turf", cat: "Students" },
  { src: "/images/gallery/field-trip-group.jpeg", label: "School Group Outing", cat: "Events" },
  { src: "/images/gallery/botanical-garden.jpeg", label: "Botanical Garden Field Trip", cat: "Events" },
  { src: "/images/gallery/christmas.jpeg", label: "Christmas Celebration", cat: "Events" },
  // Earlier general photos
  { src: "/images/gallery/photo-1.jpeg", label: "Campus Moment", cat: "Campus" },
  { src: "/images/gallery/photo-2.jpeg", label: "School Life", cat: "Campus" },
  { src: "/images/gallery/photo-3.jpeg", label: "Braeside Memories", cat: "Campus" },
  // Sports
  { src: "/images/swimming.png", label: "Heated Swimming Pool", cat: "Facilities" },
  { src: "/images/football-turf.jpeg", label: "Floodlit Football Turf", cat: "Sports" },
  { src: "/images/basketball-2.jpeg", label: "Synthetic Basketball Court", cat: "Sports" },
  { src: "/images/skating.jpeg", label: "Skating Rink", cat: "Sports" },
  { src: "/images/badminton-court.jpg", label: "International Badminton", cat: "Sports" },
  { src: "/images/tennis.png", label: "Tennis Court", cat: "Sports" },
  { src: "/images/volleyball.png", label: "Volleyball Court", cat: "Sports" },
  { src: "/images/table-tennis.jpg", label: "Table Tennis", cat: "Sports" },
  { src: "/images/pickleball.jpeg", label: "Pickleball Court", cat: "Sports" },
  // Academic
  { src: "/images/chemistry-lab.jpeg", label: "Chemistry Laboratory", cat: "Academic" },
  { src: "/images/biology-lab.jpeg", label: "Biology Laboratory", cat: "Academic" },
  { src: "/images/physics-lab.jpeg", label: "Physics Laboratory", cat: "Academic" },
  { src: "/images/computer-lab.jpeg", label: "Computer Laboratory", cat: "Academic" },
  { src: "/images/kg-classroom.jpeg", label: "Smart Classroom — Kindergarten", cat: "Academic" },
  { src: "/images/students-writing.jpeg", label: "Students in Classroom", cat: "Academic" },
  // Events
  { src: "/images/cultural-dance.jpeg", label: "Annual Day — Cultural Dance", cat: "Events" },
];

const videos = [
  { src: "/images/gallery/video-1.mp4", label: "Campus Life — Highlights", poster: "/images/gallery/photo-1.jpeg" },
  { src: "/images/gallery/video-2.mp4", label: "Behind the Scenes at Braeside", poster: "/images/gallery/photo-2.jpeg" },
];

const cats = ["All", "Students", "Sports", "Academic", "Facilities", "Events", "Campus"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.cat === active);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);

  return (
    <>
      <div className="page-hero pt-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">Campus Life</div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">Photo & Video Gallery</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Life at Braeside — every moment, every achievement, every memory.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <span className="text-white/80">Gallery</span>
          </div>
        </div>
      </div>

      {/* ── VIDEOS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="section-label mb-4 inline-flex">▶ Watch</div>
              <h2 className="font-display text-4xl font-bold text-navy mb-3">Videos from Campus</h2>
              <p className="text-muted text-lg max-w-xl mx-auto">A peek into life at Braeside — in motion.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((v, i) => (
              <ScrollReveal key={v.src} type="scale" delay={i * 100}>
                <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-navy group">
                  <video
                    controls
                    preload="metadata"
                    poster={v.poster}
                    className="w-full h-auto aspect-video bg-navy"
                  >
                    <source src={v.src} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                  <div className="px-5 py-4 bg-white border-t border-border flex items-center justify-between">
                    <div className="font-display font-bold text-navy text-sm">{v.label}</div>
                    <div className="text-xs text-crimson font-bold tracking-widest uppercase">▶ Play</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTOS ── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="section-label mb-4 inline-flex">📷 Photos</div>
              <h2 className="font-display text-4xl font-bold text-navy mb-3">Captured Memories</h2>
              <p className="text-muted text-lg max-w-xl mx-auto">Click any photo to view it in full.</p>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {cats.map((cat) => (
                <button key={cat} onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200
                    ${active === cat
                      ? "gradient-crimson text-white shadow-lg shadow-crimson/30"
                      : "bg-white text-muted border border-border hover:border-crimson hover:text-crimson"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.src} type="scale" delay={i * 40}>
                <div
                  className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative"
                  onClick={() => setLightbox({ src: item.src, label: item.label })}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-end">
                    <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-white font-bold text-sm">{item.label}</div>
                      <div className="text-white/70 text-xs">{item.cat}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white text-sm font-bold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              Close
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image src={lightbox.src} alt={lightbox.label} width={1200} height={800} className="w-full h-auto object-contain max-h-[80vh]" />
            </div>
            <div className="mt-4 text-center">
              <div className="text-white font-bold">{lightbox.label}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
