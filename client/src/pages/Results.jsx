import { useEffect, useRef } from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import { Trophy, Star, TrendingUp, Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const achievements = [
  { icon: Star, number: '12+', label: 'JEE / NEET Qualifiers', sub: 'From the 2025 batch' },
  { icon: Trophy, number: '50+', label: 'Students above 90%', sub: 'In SSC & HSC Boards 2025' },
  { icon: TrendingUp, number: '100%', label: 'Overall Pass Rate', sub: 'Across all batches' },
  { icon: Award, number: '100%', label: 'HSC Commerce Results', sub: '2024 & 2025 batch' },
]

function TopperCarousel() {
  const toppers = [
    {
      name: "Shravani Ukarde",
      score: "92%ile",
      exam: "MHT-CET",
      extra: "90% HSC - Science | Kelkar College",
      img: "/images/topper1.jpg"
    },
    {
      name: "Shreya Negi",
      score: "90%",
      exam: "HSC - Commerce",
      extra: "KJ Somaiya College",
      img: "/images/topper2.jpg"
    },
    {
      name: "Avani Birvatkar",
      score: "94.80%",
      exam: "SSC",
      extra: "N.E.S High School",
      img: "/images/topper3.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);
  const t = toppers[current];

  const prev = () => setCurrent((current - 1 + toppers.length) % toppers.length);
  const next = () => setCurrent((current + 1) % toppers.length);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', maxWidth: '680px', margin: '0 auto' }}>

      {/* Left Arrow */}
      <button
        onClick={prev}
        style={{
          flexShrink: 0,
          width: '48px', height: '48px',
          borderRadius: '50%',
          border: '2px solid #f97316',
          background: 'transparent',        // ✅ was 'white' — now theme-safe
          color: '#f97316',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(249,115,22,0.2)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#f97316';
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent'; // ✅ was 'white'
          e.currentTarget.style.color = '#f97316';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Previous"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Card — t-card handles bg in both light & dark mode */}
      <div className="t-card" style={{
        flex: 1,
        borderRadius: '24px',
        padding: '48px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
        border: '1px solid rgba(249,115,22,0.15)',
      }}>

        {/* 240px Circular Image */}
        <div style={{
          width: '240px', height: '240px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid #f97316',
          marginBottom: '24px',
          boxShadow: '0 6px 28px rgba(249,115,22,0.3)',
        }}>
          <img
            src={t.img}
            alt={t.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
          />
        </div>

        {/* Name */}
        <h3 className="font-display" style={{
          fontWeight: 800,
          fontSize: '1.5rem',
          color: 'var(--text-primary)',
          margin: '0 0 10px',
        }}>
          {t.name}
        </h3>

        {/* Score */}
        <div style={{
          fontSize: '2.6rem',
          fontWeight: 900,
          color: '#f97316',
          lineHeight: 1,
          marginBottom: '8px',
        }}>
          {t.score}
        </div>

        {/* Exam */}
        <div style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#f97316',
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
        }}>
          {t.exam}
        </div>

        {/* Extra */}
        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          {t.extra}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '28px' }}>
          {toppers.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '22px' : '8px',
                height: '8px',
                borderRadius: '999px',
                background: i === current ? '#f97316' : 'var(--text-muted)',
                opacity: i === current ? 1 : 0.35,
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        style={{
          flexShrink: 0,
          width: '48px', height: '48px',
          borderRadius: '50%',
          border: '2px solid #f97316',
          background: 'transparent',        // ✅ was 'white'
          color: '#f97316',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(249,115,22,0.2)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#f97316';
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent'; // ✅ was 'white'
          e.currentTarget.style.color = '#f97316';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Next"
      >
        <ChevronRight size={22} />
      </button>

    </div>
  );
}

export default function Results() {
  const sectionRefs = useRef([])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    sectionRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])
  const addRef = el => { if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el) }

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="py-20 relative overflow-hidden t-hero">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 t-badge">
            <Trophy size={14} className="text-orange-500" />
            <span className="text-sm font-display font-medium" style={{ color: 'var(--orange-badge-text)' }}>Our Pride, Our Students</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Our <span className="text-flame">Results</span>
          </h1>
          <div className="divider-flame w-24 mx-auto my-5" />
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Every result is a testament to the hard work of our students and the dedication of our faculty. Here's a glimpse of what Adhyayan students achieve.
          </p>
        </div>
      </section>

      {/* ACHIEVEMENT STATS */}
      <section className="py-16 t-bg-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <div key={i} ref={addRef} className="animate-on-scroll t-card-alt rounded-2xl p-6 text-center card-hover" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <a.icon size={22} className="text-white" />
                </div>
                <div className="font-display font-extrabold text-3xl text-flame mb-1">{a.number}</div>
                <div className="font-display font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{a.label}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{a.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP PERFORMERS 2025 */}
      <section className="py-20 t-bg-secondary">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>
            Top <span className="text-flame">Performers 2025</span>
          </h2>
          <p className="mb-12" style={{ color: 'var(--text-secondary)' }}>
            Celebrating our star students who made us proud
          </p>
          <TopperCarousel />
        </div>
      </section>

      

      {/* GLIMPSES OF OUR HISTORY */}
<section className="py-20 t-bg-secondary">
  <div className="max-w-6xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-6">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 t-badge">
        <Trophy size={14} className="text-orange-500" />
        <span className="text-sm font-display font-medium" style={{ color: 'var(--orange-badge-text)' }}>Legacy of Excellence</span>
      </div>
      <h2 className="font-display font-bold text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>
        Glimpses of Our <span className="text-flame">History</span>
      </h2>
      <div className="divider-flame w-32 mx-auto mt-4 mb-6" />
    </div>

    {/* Yellow highlight banner */}
    <div style={{
      background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
      borderRadius: '16px',
      padding: '20px 32px',
      marginBottom: '48px',
      maxWidth: '640px',
      margin: '0 auto 48px',
      boxShadow: '0 4px 20px rgba(249,115,22,0.3)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {['Delivering 100% result since last 15 years', 'Crafting professionals every year'].map((point, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'white', flexShrink: 0
            }} />
            <span style={{ color: 'white', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-display, inherit)' }}>
              {point}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Student Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
  {
    name: "Mayur Raonang",
    score: "99%ile",
    exam: "MHT-CET",
    extra: "94.4% HSC Science • B.Tech SPIT",
    img: "/images/history1.png"
  },
  {
    name: "Amritansh Gaud",
    score: "93%",
    exam: "HSC Commerce",
    extra: "SK Somaiya College",
    img: "/images/history2.png"
  },
  {
    name: "Dr. Chintan Dhuri",
    score: "MBBS",
    exam: "Medical",
    extra: "SKR Ayurvedic Medical College, Nagpur",
    img: "/images/history3.png"
  },
  {
    name: "Dr. Rutuja Jadhav",
    score: "MBBS",
    exam: "Medical",
    extra: "Orel State Medical University, Russia",
    img: "/images/history4.png"
  },
  {
    name: "Dr. Vaishnavi Jadhav",
    score: "MBBS",
    exam: "Medical",
    extra: "Orel State Medical University, Russia",
    img: "/images/history5.png"
  },

  // ✅ NEW 3 (from image)
  {
    name: "Swayam Kamble",
    score: "92%",
    exam: "Science",
    extra: "99%ile CET • 95% JEE",
    img: "/images/history6.png"
  },
  {
    name: "Shreya Tate",
    score: "93.17%",
    exam: "Commerce",
    extra: "MCC",
    img: "/images/history7.png"
  },
  {
    name: "Harshali Rane",
    score: "94.80%",
    exam: "SSC",
    extra: "St. Xavier",
    img: "/images/history8.png"
  }
].map((student, i) => (
        <div
          key={i}
          ref={addRef}
          className="animate-on-scroll t-card rounded-2xl overflow-hidden card-hover"
          style={{
            transitionDelay: `${i * 80}ms`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '32px 24px',
            textAlign: 'center',
          }}
        >
          {/* Circular Photo */}
          <div style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid #f97316',
            marginBottom: '16px',
            boxShadow: '0 4px 16px rgba(249,115,22,0.2)',
            flexShrink: 0,
          }}>
            <img
              src={student.img}
              alt={student.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>

          {/* Name */}
          <h3 className="font-display font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
            {student.name}
          </h3>

          {/* Score Badge */}
          <div style={{
            background: 'rgba(249,115,22,0.1)',
            border: '1px solid rgba(249,115,22,0.3)',
            borderRadius: '999px',
            padding: '4px 16px',
            marginBottom: '6px',
          }}>
            <span style={{ color: '#f97316', fontWeight: 800, fontSize: '1.2rem' }}>
              {student.score}
            </span>
            <span style={{ color: '#f97316', fontWeight: 600, fontSize: '0.8rem', marginLeft: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {student.exam}
            </span>
          </div>

          {/* Extra Info */}
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            {student.extra}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

            <section className="py-20 t-bg-primary">
        <div className="max-w-6xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>
              Our <span className="text-flame">Alumni</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Our students excelling across diverse professional fields
            </p>
            <div className="divider-flame w-32 mx-auto mt-5" />
          </div>

          {/* Grid 2 rows × 3 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-11">

            {/* Alumni Card */}
            {[
  {
    name: "Siddhi Sakpal",
    role: "B. Pharma\nSandoz India",
    img: "/images/alumni1.png"
  },
  {
    name: "Kamini Mestry",
    role: "PhD (Reproductive Diagnosis) (NIPGT)",
    img: "/images/alumni2.png"
  },
  {
    name: "Guari Angane",
    role: "Territory Manager at Mahindra & Mahindra",
    img: "/images/alumni3.png"
  },
  {
    name: "Aditya Rasam",
    role: "Chartered Accountant (CA)",
    img: "/images/alumni4.png"
  },
  {
    name: "Ashish Umape",
    role: "BLS LLB\nHigh Court Mumbai",
    img: "/images/alumni5.png"
  },
  {
    name: "Omkar Mitbavkar",
    role: "Stock Market Advisor",
    img: "/images/alumni6.png"
  }
].map((alumni, i) => (
              <div key={i} className="t-card rounded-2xl overflow-hidden card-hover">

                {/* Image */}
                <div className="flex justify-center items-center py-6">
                  <div style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid #f97316',
            marginBottom: '16px',
            boxShadow: '0 4px 16px rgba(249,115,22,0.2)',
            flexShrink: 0,
          }}>
                    <img
                      src={alumni.img}
                      alt={alumni.name}
                      className="w-39 h-39 rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="font-display font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                    {alumni.name}
                  </h3>
                  <p className="text-sm text-orange-500 font-semibold">
                    {alumni.role}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 t-bg-secondary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div ref={addRef} className="animate-on-scroll">
            <h2 className="font-display font-bold text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Your name could be on this <span className="text-flame">list next year!</span>
            </h2>
            <p className="mb-7" style={{ color: 'var(--text-secondary)' }}>Join Adhyayan Classes today and start your journey to excellence.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-display font-bold text-lg rounded-xl glow-bhagva hover:bg-orange-600 hover:scale-105 transition-all">
              Enquire Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}