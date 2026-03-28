import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, FlaskConical, TrendingUp, Cpu, GraduationCap, ArrowRight, CheckCircle2, Clock } from 'lucide-react'

const batches = [
  { id: 'ssc', icon: BookOpen, label: '8th – 10th Standard', sub: 'SSC Board Preparation', subjects: ['Mathematics', 'Science', 'English', 'Hindi / Sanskrit', 'Marathi', 'Social Science'], features: ['Concept-based teaching', 'Regular tests & assessments', 'Doubt-clearing sessions', 'Regular Parent Teacher interaction', 'Board exam pattern focus'], timing: 'Afternoon & Evening batches', available: true },
  { id: 'science', icon: FlaskConical, label: '11th – 12th Science', sub: 'JEE / NEET / CET / Boards', subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'Electronics'], features: ['JEE / NEET / CET focused syllabus', 'Exhaustive Test Series', 'Regular Parent Teacher interaction', 'Chapter-wise notes', 'Rank improvement strategy'], timing: 'Morning & Evening batches', available: true },
  { id: 'commerce', icon: TrendingUp, label: '11th – 12th Commerce', sub: 'Board Examination', subjects: ['Book keeping and Accountancy','Secretarial Practices', 'Economics', 'Organisation of Commerce (OCM)', 'Mathematics & Statistics', 'English', 'Marathi/Hindi'], features: ['Board exam pattern coverage', 'Practical accounts sessions', 'Regular Parent Teacher interaction', 'Study material provided', 'Regular revision classes'], timing: 'Morning & Evening batches', available: true },
  { id: 'engineering', icon: Cpu, label: 'Engineering', sub: 'All Engineering Streams', subjects: ['Engineering Mathematics', 'Basic Electrical Engineering', 'Engineering Mechanics', 'Programming Fundamentals', 'Engineering Drawing'], features: ['University exam focus', 'ATKT help & guidance', 'Practical support', 'Career Guidance', 'Online study material'], timing: 'Friday, Saturday, Sunday morning and evening', available: true },
  { id: 'degree', icon: GraduationCap, label: 'Commerce Degree', sub: 'Other Degree Courses', subjects: ['B.Com – Bachelor of Commerce', 'BAF – Bachelor of Accounting and Finance', 'BBI – Bachelor of Banking and Insurance','BMS – Bachelor of Management Studies', 'BFM – Bachelor of Financial Markets'], features: ['University syllabus aligned', 'Semester-wise preparation', 'Practical guidance',], timing: 'Morning & Evening batches', available: true }, 
  { id: 'degree', icon: GraduationCap, label: 'Science Degree', sub: 'Other Degree Courses', subjects: ['BSc Computer', 'Bsc IT', 'Other courses — finalizing soon'], features: ['University syllabus aligned', 'Semester-wise preparation', 'Career guidance'], timing: 'Evening batches', available: true },
]

export default function Courses() {
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
          <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Our <span className="text-flame">Courses</span>
          </h1>
          <div className="divider-flame w-24 mx-auto my-5" />
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            From 8th standard to degree level — Adhyayan Classes offers comprehensive coaching across all major streams and competitive exams.
          </p>
        </div>
      </section>

      {/* COURSE CARDS */}
      <section className="pb-24 t-bg-primary">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          {batches.map((b, i) => (
            <div key={b.id} ref={addRef} className="animate-on-scroll t-card rounded-3xl overflow-hidden card-hover" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="h-1.5 bg-orange-500" />
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="md:w-1/3">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center mb-4">
                      <b.icon size={26} className="text-white" />
                    </div>
                    {!b.available && <span className="inline-block px-3 py-1 t-badge text-xs rounded-full font-display mb-3">Coming Soon</span>}
                    <h2 className="font-display font-extrabold text-2xl mb-1" style={{ color: 'var(--text-primary)' }}>{b.label}</h2>
                    <div className="text-sm font-semibold text-orange-500 mb-3">{b.sub}</div>
                    
                    <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <Clock size={14} className="text-orange-500" />
                      <span>{b.timing}</span>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>Subjects Covered</h3>
                    <ul className="space-y-2">
                      {b.subjects.map((s, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-1/3">
                    <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>Key Features</h3>
                    <ul className="space-y-2">
                      {b.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <CheckCircle2 size={14} className="text-orange-500 mt-0.5 shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white font-display font-semibold text-sm rounded-xl hover:bg-orange-600 hover:scale-105 transition-all">
                      {b.available ? 'Enquire Now' : 'Get Notified'} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 t-bg-secondary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div ref={addRef} className="animate-on-scroll">
            <h2 className="font-display font-bold text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Not sure which batch is right? <span className="text-flame">We'll guide you!</span>
            </h2>
            <p className="mb-7" style={{ color: 'var(--text-secondary)' }}>Contact us and our team will help you choose the perfect batch based on your goals.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-display font-bold text-lg rounded-xl glow-bhagva hover:bg-orange-600 hover:scale-105 transition-all">
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
