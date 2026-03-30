import { useState, useEffect, useRef } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react'

const batches = ['8th – 10th SSC', '11th – 12th Science (JEE/NEET/CET)', '11th – 12th Commerce', '1st Year Engineering', 'Commerce Degree Courses', 'Science Degree Courses', 'Other / Not sure']
const API_URL = 'https://adhyayan-classes.onrender.com/api/enquiry'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', batch: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    sectionRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])
  const addRef = el => { if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el) }
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault(); setLoading(true); setError('')
    try {
      const res = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (data.success) setSubmitted(true)
      else setError(data.message || 'Something went wrong. Please try again.')
    } catch { setError('Could not connect to server. Please WhatsApp us directly.') }
    finally { setLoading(false) }
  }

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="py-20 relative overflow-hidden t-hero">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Get In <span className="text-flame">Touch</span>
          </h1>
          <div className="divider-flame w-24 mx-auto my-5" />
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Have questions about our batches, fees, or timings? Fill in the form below and we'll get back to you within 24 hours!
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="pb-24 t-bg-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 items-start">

            {/* Left */}
            <div className="md:col-span-2 space-y-5">
              <div ref={addRef} className="animate-on-scroll">
                <h2 className="font-display font-bold text-2xl mb-6" style={{ color: 'var(--text-primary)' }}>Contact Information</h2>
                {[
                  { icon: Phone, label: 'Phone', value: '+91 97683 59324', href: "https://wa.me/919768359324?text=Hello%2C%20I%20want%20to%20enquire%20about%20Adhyayan%20Classes" },
                  { icon: Mail, label: 'Email', value: 'adhyayanclasses.78@gmail.com', href: 'mailto:adhyayanclasses.78@gmail.com' },
                  { icon: MapPin, label: 'Address', value: 'Adhyayan Classes, Beside Oxford School, Near Shivaji Talao, Bhandup (west), Mumbai 400078, Maharashtra', href: 'https://share.google/uZwnE2N3O5HJEDCSc' },
                ].map((c, i) => (
                  <a key={i} href={c.href} className="flex items-start gap-4 t-card rounded-2xl p-5 card-hover mb-4 block">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-orange-500 flex items-center justify-center">
                      <c.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-display uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>{c.label}</div>
                      <div className="text-sm" style={{ color: 'var(--text-primary)' }}>{c.value}</div>
                    </div>
                  </a>
                ))}
                <a href="https://wa.me/919768359324?text=Hello%2C%20I%20want%20to%20enquire%20about%20Adhyayan%20Classes" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl px-6 py-4 font-display font-semibold transition-all hover:scale-105 mt-2">
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </div>

              <div ref={addRef} className="animate-on-scroll t-card-alt rounded-2xl p-6">
                <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Office Hours</h3>
                <div className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <div className="flex justify-between"><span>Monday – Saturday</span><span className="text-orange-500 font-medium">8:00 AM – 10:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-orange-500 font-medium">10:00 AM – 10:00 PM</span></div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div ref={addRef} className="animate-on-scroll md:col-span-3">
              <div className="t-card rounded-3xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 glow-bhagva">
                      <CheckCircle size={36} className="text-white" />
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>Enquiry Submitted!</h3>
                    <p className="text-sm leading-relaxed max-w-sm mx-auto" style={{ color: 'var(--text-secondary)' }}>
                      Thank you for reaching out! Our team will contact you within 24 hours.{form.email && ' A confirmation email has been sent to your inbox.'}
                    </p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', batch: '', message: '' }) }}
                      className="mt-6 px-6 py-2.5 rounded-xl text-sm font-display transition"
                      style={{ border: '1px solid var(--border)', color: 'var(--orange)' }}>
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display font-bold text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>Enquiry Form</h2>
                    <p className="text-sm mb-7" style={{ color: 'var(--text-muted)' }}>Fill in your details and we'll reach out shortly.</p>

                    {error && (
                      <div className="flex items-start gap-3 rounded-xl px-4 py-3 mb-5" style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.3)' }}>
                        <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                        <p className="text-red-500 text-sm">{error}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[{ name: 'name', label: 'Full Name *', placeholder: 'Your full name', required: true, type: 'text' },
                          { name: 'phone', label: 'Phone Number *', placeholder: '+91 XXXXX XXXXX', required: true, type: 'text' }].map(f => (
                          <div key={f.name}>
                            <label className="block text-xs font-display uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>{f.label}</label>
                            <input name={f.name} value={form[f.name]} onChange={handleChange} required={f.required} placeholder={f.placeholder} type={f.type}
                              className="t-input w-full rounded-xl px-4 py-3 text-sm font-body transition-all focus:ring-2 focus:ring-orange-200" style={{ outline: 'none' }} />
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block text-xs font-display uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Email Address <span style={{ color: 'var(--text-muted)' }} className="normal-case">(for auto-reply)</span></label>
                        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com"
                          className="t-input w-full rounded-xl px-4 py-3 text-sm font-body transition-all" style={{ outline: 'none' }} />
                      </div>
                      <div>
                        <label className="block text-xs font-display uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Interested Batch *</label>
                        <select name="batch" value={form.batch} onChange={handleChange} required
                          className="t-input w-full rounded-xl px-4 py-3 text-sm font-body appearance-none cursor-pointer" style={{ outline: 'none' }}>
                          <option value="" disabled>Select a batch...</option>
                          {batches.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-display uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Message <span style={{ color: 'var(--text-muted)' }} className="normal-case">(optional)</span></label>
                        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                          placeholder="Any specific questions about timing, fees, subjects, etc."
                          className="t-input w-full rounded-xl px-4 py-3 text-sm font-body resize-none" style={{ outline: 'none' }} />
                      </div>
                      <button type="submit" disabled={loading}
                        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 text-white font-display font-bold text-lg rounded-xl hover:bg-orange-600 transition-all glow-bhagva hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed">
                        {loading ? (<><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending Enquiry...</>) : (<><Send size={20} />Submit Enquiry</>)}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div
            ref={addRef}
            className="animate-on-scroll mt-10 t-card-alt rounded-2xl overflow-hidden h-64"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0927995665047!2d72.92838847466693!3d19.147414749727787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9fdb8059a25%3A0x9fc1c4bbf552924c!2sAdhyayan%20classes!5e0!3m2!1sen!2sin!4v1774545028368!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
