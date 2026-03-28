import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Target, Heart, Users, ArrowRight } from 'lucide-react'

const faculty = [
  { name: 'Raj Rane Sir', subjects: 'Mathematics & Science', batches: '8th – 10th SSC | 11th – 12th Science', initials: 'RR', desc: 'Highly experienced educator with deep expertise in Mathematics and Science. Known for breaking down complex concepts into easy-to-understand language.' },
  { name: 'Sanket More Sir', subjects: 'Physics & Chemistry', batches: '8th – 10th SSC | 11th – 12th Science', initials: 'SM', desc: 'A passionate Physics and Chemistry teacher who prepares students thoroughly for JEE, NEET, and CET through rigorous problem-solving sessions.' },
  { name: 'Ajinkya Tatkare Sir', subjects: 'Accounts & Economics', batches: '11th – 12th Commerce', initials: 'AT', desc: 'Commerce specialist with a talent for making Accountancy, Economics, and OCM engaging and results-oriented for board and competitive examinations.' },
]

const values = [
  { icon: Target, title: 'Our Mission', text: 'To provide quality, accessible, and result-driven education that helps every student achieve their academic goals.' },
  { icon: Heart, title: 'Our Vision', text: 'To be the most trusted coaching institute in Bhandup — nurturing confident, capable, and competitive students.' },
  { icon: Users, title: 'Our Approach', text: 'Small batches, personalized attention, concept-first teaching, and regular assessments to ensure every student grows.' },
  { icon: GraduationCap, title: 'Our Commitment', text: 'We are committed to staying updated with syllabus changes and coaching methods so our students are always ahead.' },
]

export default function About() {
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
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'var(--blob-color)' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-4" style={{ color: 'var(--text-primary)' }}>
            About <span className="text-flame">Adhyayan</span>
          </h1>
          <div className="divider-flame w-24 mx-auto my-5" />
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A coaching institute built on dedication, expertise, and a passion for nurturing student success — from the 8th standard all the way to degree courses.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16 t-bg-primary">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={addRef} className="animate-on-scroll">
              <h2 className="font-display font-bold text-3xl mb-5" style={{ color: 'var(--text-primary)' }}>Our <span className="text-flame">Story</span></h2>
              {['Adhyayan Classes was founded with a simple belief — every student deserves quality education with individual attention. What started as a small batch of determined students has grown into one of Bhandup\'s trusted coaching institutes.',
                'Our name "Adhyayan" (अध्ययन) means "study" or "learning" in Marathi and Sanskrit — and that\'s exactly what we stand for. Deep, meaningful learning that goes beyond rote memorization.',
                'With experienced faculty, a structured curriculum, and a student-first approach, we have helped hundreds of students achieve top scores in SSC, JEE, NEET, CET, and board exams.'
              ].map((p, i) => <p key={i} className="leading-relaxed mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>{p}</p>)}
            </div>
            <div ref={addRef} className="animate-on-scroll grid grid-cols-2 gap-4">
              {[{ num: '1000+', label: 'Students' }, { num: '100%', label: 'Pass Rate' }, { num: '15+', label: 'Years' }, { num: '3 +', label: 'Expert Faculty' }].map((s, i) => (
                <div key={i} className="t-card-alt rounded-2xl p-6 text-center card-hover">
                  <div className="font-display font-extrabold text-3xl text-flame mb-1">{s.num}</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 t-bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <div ref={addRef} className="animate-on-scroll text-center mb-14">
            <h2 className="font-display font-bold text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>What We <span className="text-flame">Stand For</span></h2>
            <div className="divider-flame w-32 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} ref={addRef} className="animate-on-scroll flex gap-5 t-card rounded-2xl p-7 card-hover" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 shrink-0 bg-orange-500 rounded-xl flex items-center justify-center">
                  <v.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLORIOUS ALUMNI */}
      <section className="py-20 t-bg-primary">
        <div className="max-w-5xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>
              Glorious <span className="text-flame">Alumni</span>
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
              { name: "Ashwin Pawar", role: "Strategic Manager", img: "/images/alumni1.jpg" },
              { name: "Sumit Chavan", role: "Software Developer", img: "/images/alumni2.jpg" },
              { name: "Aniket Sankpal", role: "Cyber Security Expert", img: "/images/alumni3.jpg" },
              { name: "Dr. Harshada Indulkar", role: "Doctor", img: "/images/alumni4.jpg" },
              { name: "Dr. Priti Sarfare", role: "Doctor", img: "/images/alumni5.jpg" },
              { name: "Dr. Abhishek Verma", role: "Doctor", img: "/images/alumni6.jpg" },
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
              Ready to be part of the <span className="text-flame">Adhyayan family?</span>
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-display font-bold text-lg rounded-xl glow-bhagva hover:bg-orange-600 hover:scale-105 transition-all">
              Enquire Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
