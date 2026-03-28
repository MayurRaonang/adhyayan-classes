import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Award, BookOpen, Clock, Star, TrendingUp, Flame } from 'lucide-react'

const stats = [
  { icon: Users, value: '1000+', label: 'Students Taught' },
  { icon: Award, value: '100%', label: 'Result Rate' },
  { icon: BookOpen, value: '5+', label: 'Batches Running' },
  { icon: Clock, value: '15+', label: 'Years Experience' },
]

const highlights = [
  { icon: Flame, title: 'Expert Faculty', desc: 'Learn from highly experienced and dedicated educators with a strong track record of guiding students to academic success.' },
  { icon: TrendingUp, title: 'Result Oriented', desc: 'Our focused teaching methodology consistently produces top scorers in SSC, JEE, NEET, CET and board exams.' },
  { icon: Users, title: 'Small Batches', desc: 'Limited seats ensure every student gets personal attention and concept clarity.' },
  { icon: Star, title: 'Exhaustive Test Series', desc: 'Regular tests, mock exams, ensure continuous evaluation, improvement, and exam readiness.' },
]

const testimonials = [
  { name: 'Priya Kulkarni', class: 'Class 10 SSC', text: 'Raj sir\'s teaching made Maths so easy to understand. I scored 94% in boards!', stars: 5 },
  { name: 'Rohan Deshmukh', class: '12th Science – JEE', text: 'Sanket sir\'s Physics notes and problem solving approach is unmatched. Cleared JEE Mains!', stars: 5 },
  { name: 'Sneha Patil', class: '12th Commerce', text: 'Tatkare sir explains Accounts and Economics with real-world examples.', stars: 5 },
  { name: 'Amit Shah', class: 'Class 9', text: 'Best foundation classes. Concepts are super clear now!', stars: 4 },
  { name: 'Neha Joshi', class: '12th Science', text: 'Doubt solving sessions helped me boost confidence.', stars: 5 },
  { name: 'Kunal More', class: 'Class 10', text: 'Weekly tests and analysis really improved my score.', stars: 4 },
];

export default function Home() {
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = el => { if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el) }

  return (
    <div className="bg-pattern">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden t-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'var(--blob-color)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{ background: 'var(--blob-color)' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in-up t-badge">
            <Flame size={14} className="text-orange-500" />
            <span className="text-sm font-display font-medium" style={{ color: 'var(--orange-badge-text)' }}>Bhandup's Trusted Coaching Institute</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight mb-6">
            <span style={{ color: 'var(--text-primary)' }}>Excellence in</span><br />
            <span className="text-flame">Education</span><br />
            <span style={{ color: 'var(--text-primary)' }} className="text-4xl sm:text-5xl md:text-6xl">From SSC to Degree</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Adhyayan Classes empowers students with focused coaching for SSC, JEE, NEET, CET, Boards, and Degree courses — guided by experienced and passionate educators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-display font-bold text-lg rounded-xl hover:bg-orange-600 transition-all glow-bhagva hover:scale-105"
            >
              Enquire Now <ArrowRight size={20} />
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 font-display font-bold text-lg rounded-xl transition-all hover:bg-orange-500/10"
              style={{ borderColor: 'var(--orange)', color: 'var(--orange)' }}
            >
              Our Courses <BookOpen size={20} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" style={{ fill: 'var(--bg-primary)' }}/>
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 t-bg-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} ref={addRef} className="animate-on-scroll t-card rounded-2xl p-6 text-center card-hover" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'var(--orange-badge)' }}>
                  <s.icon size={22} className="text-orange-500" />
                </div>
                <div className="font-display font-extrabold text-3xl text-flame mb-1">{s.value}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ADHYAYAN ── */}
      <section className="py-20 t-bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <div ref={addRef} className="animate-on-scroll text-center mb-14">
            <h2 className="font-display font-bold text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>
              Why Choose <span className="text-flame">Adhyayan?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }} className="max-w-xl mx-auto">We go beyond textbooks — building foundations for bright futures.</p>
            <div className="divider-flame w-32 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((h, i) => (
              <div key={i} ref={addRef} className="animate-on-scroll flex gap-5 t-card rounded-2xl p-7 card-hover" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 shrink-0 bg-orange-500 rounded-xl flex items-center justify-center">
                  <h.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>{h.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BATCHES ── */}
      <section className="py-20 t-bg-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div ref={addRef} className="animate-on-scroll text-center mb-14">
            <h2 className="font-display font-bold text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>
              Our <span className="text-flame">Batches</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>Structured programs for every stage of your academic journey</p>
            <div className="divider-flame w-32 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: '8th – 10th', sub: 'SSC Board', desc: 'All subjects | Raj Rane Sir & Sanket More Sir' },
              { label: '11th – 12th', sub: 'Science (JEE / NEET / CET)', desc: 'Physics, Chemistry, Maths, Biology | Raj Rane Sir & Sanket More Sir' },
              { label: '11th – 12th', sub: 'Commerce', desc: 'Accounts, Economics, OCM | Ajinkya Tatkare Sir' },
              { label: 'Engineering', sub: '1st Year', desc: 'Core engineering subjects' },
              { label: 'Degree Courses Science', sub: 'Degree Courses', desc: 'Commerce degree ', soon: false },
              { label: 'Degree Courses Commerce', sub: 'Degree Courses', desc: 'Science degree ', soon: false },
            ].map((b, i) => (
              <div key={i} ref={addRef} className="animate-on-scroll t-card rounded-2xl overflow-hidden card-hover" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="h-1.5 bg-orange-500" />
                <div className="p-6">
                  {b.soon && <span className="inline-block px-2 py-0.5 t-badge text-xs rounded-full font-display mb-3">Coming Soon</span>}
                  <div className="font-display font-extrabold text-2xl mb-0.5" style={{ color: 'var(--text-primary)' }}>{b.label}</div>
                  <div className="font-display font-semibold text-sm text-orange-500 mb-2">{b.sub}</div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 t-bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
    
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-4xl mb-3">
            What Students <span className="text-flame">Say</span>
          </h2>
        <div className="divider-flame w-32 mx-auto mt-5" />
      </div>

    {/* Marquee Wrapper */}
    <div className="relative w-full overflow-hidden">
      
      <div className="flex gap-6 animate-marquee">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="min-w-[300px] t-card rounded-2xl p-6 card-hover"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(t.stars)].map((_, j) => (
                <Star key={j} size={14} fill="#f97316" className="text-orange-500" />
              ))}
            </div>

            <p className="text-sm italic mb-4">
              "{t.text}"
            </p>

            <div className="pt-3 border-t">
              <div className="font-semibold">{t.name}</div>
              <div className="text-orange-500 text-xs">{t.class}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
{/* ── TESTIMONIALS ── */}
      {/* GOOGLE REVIEWS */}
<section className="py-20 t-bg-secondary">
  <div className="max-w-6xl mx-auto px-4">

    <div className="text-center mb-14">
      <h2 className="font-display font-bold text-4xl mb-3">
        What Students <span className="text-flame">Say</span>
      </h2>
      <div className="divider-flame w-32 mx-auto mt-5" />
    </div>

    <div className="t-card rounded-2xl p-6">
      {/* ⚠️ This is wrong currently */}
      {/* You cannot use elfsight script inside iframe */}

      {/* Correct usage below 👇 */}
      <div className="elfsight-app-a008f3bc-8980-436a-b49b-ab39e8514618" data-elfsight-app-lazy></div>
    </div>

  </div>
</section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 t-bg-primary">
        <div className="max-w-5xl mx-auto px-4">
          <div ref={addRef} className="animate-on-scroll relative bg-orange-500 rounded-3xl p-10 text-center overflow-hidden glow-bhagva">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-3 relative z-10">Start Your Journey Today!</h2>
            <p className="text-orange-100 mb-7 relative z-10 text-lg">Limited seats available. Fill in your details and we'll get back to you.</p>
            <Link to="/contact" className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-display font-bold text-lg rounded-xl hover:bg-orange-50 transition hover:scale-105">
              Enquire Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
