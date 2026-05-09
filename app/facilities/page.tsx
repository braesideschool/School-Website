"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const categories = ["All", "Sports", "Academic", "Campus Life"];

const facilities = [
  {
    name: "International Badminton Court",
    category: "Sports",
    img: "/images/badminton-court.jpg",
    realImg: "/images/badminton-court.jpg",
    desc: "Professional-grade indoor badminton courts built to international standards. Exclusive certified coaches with a proven track record of student sporting achievements and district-level competition wins.",
    icon: "🏸",
  },
  {
    name: "Heated Swimming Pool",
    category: "Sports",
    img: "/images/swimming.png",
    realImg: null,
    desc: "A year-round, temperature-controlled heated swimming pool with professional coaching for young swimmers of all skill levels. The perfect facility to develop competitive student swimmers in the cool Ooty climate.",
    icon: "🏊",
  },
  {
    name: "Synthetic Basketball Court",
    category: "Sports",
    img: "/images/basketball-1.jpeg",
    realImg: null,
    desc: "Professional-grade synthetic surface designed for agility, speed and safety. Fully marked regulation court with professional hoops and flood lighting for evening sessions.",
    icon: "🏀",
  },
  {
    name: "Floodlit Football Turf",
    category: "Sports",
    img: "/images/football-turf.jpeg",
    realImg: null,
    desc: "All-weather high-performance synthetic turf with professional-level floodlights for evening training. Fully enclosed, regulation-sized pitch designed for competitive-level football.",
    icon: "⚽",
  },
  {
    name: "Pickleball Court",
    category: "Sports",
    img: "/images/pickleball.jpeg",
    realImg: null,
    desc: "Modern pickleball courts — one of the fastest-growing sports globally. Introduces students to a fun, strategic racket sport combining elements of tennis, badminton, and table tennis.",
    icon: "🥒",
  },
  {
    name: "Tennis Court",
    category: "Sports",
    img: "/images/tennis.png",
    realImg: null,
    desc: "Full-sized tennis courts with high-quality surfaces and net systems. Professional coaching available for beginners to advanced players, with inter-school tournaments hosted annually.",
    icon: "🎾",
  },
  {
    name: "Skating Rink",
    category: "Sports",
    img: "/images/skating.jpeg",
    realImg: null,
    desc: "Custom-built skating rink designed to professional standards for both beginners and advanced skaters. Safety gear provided and certified instructors ensure students glide toward their potential.",
    icon: "⛸️",
  },
  {
    name: "Table Tennis",
    category: "Sports",
    img: "/images/table-tennis.jpg",
    realImg: null,
    desc: "Multiple regulation table tennis tables in a dedicated indoor space. Regular training sessions and inter-house tournaments build reflexes, focus and competitive spirit.",
    icon: "🏓",
  },
  {
    name: "Volleyball Court",
    category: "Sports",
    img: "/images/volleyball.png",
    realImg: null,
    desc: "Regulation indoor and outdoor volleyball courts fostering teamwork, communication and athletic development. Both boys and girls teams compete at inter-school championship level.",
    icon: "🏐",
  },
  {
    name: "Indoor Games Room",
    category: "Sports",
    img: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=1200&q=85",
    realImg: null,
    desc: "A premium indoor games room featuring chess sets, carrom boards, and various strategy games. Develops logical thinking, patience and sportsmanship in a relaxed environment.",
    icon: "♟️",
  },
  {
    name: "Chemistry Laboratory",
    category: "Academic",
    img: "/images/chemistry-lab.jpeg",
    realImg: null,
    desc: "Fully equipped with modern apparatus, safety equipment and reagent storage. Students conduct real experiments and develop analytical thinking skills through hands-on chemistry.",
    icon: "🧪",
  },
  {
    name: "Physics Laboratory",
    category: "Academic",
    img: "/images/physics-lab.jpeg",
    realImg: null,
    desc: "Advanced physics lab with instruments for mechanics, optics, electricity and wave experiments. Students understand fundamental principles through immersive practical work.",
    icon: "⚡",
  },
  {
    name: "Biology Laboratory",
    category: "Academic",
    img: "/images/biology-lab.jpeg",
    realImg: null,
    desc: "Equipped with microscopes, biological specimens and anatomical models. Students gain practical exposure to human anatomy, plant biology and environmental science.",
    icon: "🔬",
  },
  {
    name: "Computer Laboratory",
    category: "Academic",
    img: "/images/computer-lab-2.jpeg",
    realImg: null,
    desc: "State-of-the-art computer systems and high-speed internet in a premium wood-panelled lab. Students develop digital literacy, coding and tech skills for the modern world.",
    icon: "💻",
  },
  {
    name: "Smart Classrooms",
    category: "Academic",
    img: "/images/kg-classroom.jpeg",
    realImg: null,
    desc: "Interactive smart boards and multimedia integration transform every lesson. Teachers leverage cutting-edge digital tools while students lead seminars, presentations and collaborative projects — developing the critical skills needed on the global stage.",
    icon: "📲",
  },
  {
    name: "Musical Rooms & Instruments",
    category: "Campus Life",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=85",
    realImg: null,
    desc: "Dedicated music rooms with a rich collection of instruments — keyboard, guitar, tabla, mridangam, flute and more. Professional instructors cultivate musical talent and cultural appreciation.",
    icon: "🎵",
  },
  {
    name: "Cultural Dance Studio",
    category: "Campus Life",
    img: "/images/cultural-dance.jpeg",
    realImg: null,
    desc: "Professional training in classical and folk dance forms. Students learn grace, rhythm and the beauty of India's rich cultural heritage — performing on stage at Annual Day and competitions.",
    icon: "💃",
  },
  {
    name: "Transport Facility",
    category: "Campus Life",
    img: "/images/campus-collage.jpeg",
    realImg: null,
    desc: "Safe, reliable school transport serving every village and neighbourhood. Our BharatBenz fleet with trained drivers and supervisors ensures every student travels safely, every day.",
    icon: "🚌",
  },
  {
    name: "Premium Boarding School",
    category: "Campus Life",
    img: "/images/hostel.jpg",
    realImg: "/images/hostel.jpg",
    desc: "Comfortable, well-maintained residential boarding for boys and girls. Reliable power, potable water, supervised accommodation, nutritious meals and regular outings included.",
    icon: "🏠",
  },
  {
    name: "Dining & Nutrition",
    category: "Campus Life",
    img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80",
    realImg: null,
    desc: "Nutritious vegetarian and non-vegetarian options prepared under strict hygiene standards. Dietitian-approved menus ensure students are fuelled for academic and athletic excellence.",
    icon: "🍽️",
  },
  {
    name: "Medical Care Centre",
    category: "Campus Life",
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    realImg: null,
    desc: "On-campus sick room with a resident nurse and first-aid availability at all times. Student health is paramount — medical conditions are tracked and managed with full parental communication.",
    icon: "🏥",
  },
];

export default function FacilitiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? facilities : facilities.filter((f) => f.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <>
      <div className="page-hero pt-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/20">World-Class Campus</div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">Facilities & Sports</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">21+ premium amenities — from international sports courts to cutting-edge labs. Everything a champion needs.</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <span className="text-white/80">Facilities & Sports</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="text-muted text-lg leading-relaxed">
              At Braeside International School, we believe that a well-designed learning environment plays a crucial role in shaping a student&apos;s academic journey and personal growth. Our campus boasts 21+ world-class facilities — each designed to inspire, challenge and develop every student to their highest potential.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200
                    ${activeCategory === cat
                      ? "gradient-crimson text-white shadow-lg shadow-crimson/30"
                      : "bg-white text-muted border border-border hover:border-crimson hover:text-crimson"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 60}>
                <div className="card-premium group overflow-hidden h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={f.img}
                      alt={f.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-navy border border-white/50">
                      {f.category}
                    </div>
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="text-xl">{f.icon}</span>
                      <span className="text-white font-display font-bold text-sm">{f.name}</span>
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
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
            <h2 className="font-display text-3xl font-bold text-white mb-4">Experience Our Campus in Person</h2>
            <p className="text-white/80 mb-8">Book a campus tour and see our world-class facilities for yourself.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">Book a Campus Tour</Link>
              <Link href="/admissions" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-crimson">Apply Now</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
