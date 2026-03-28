import { Link } from 'react-router-dom'
import { BookOpen, Phone, Mail, MapPin, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-footer)', borderTop: '1px solid rgba(249,115,22,0.15)' }} className="pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <BookOpen size={20} className="text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-orange-400 block">Adhyayan</span>
                <span className="text-xs text-orange-400/60 tracking-widest uppercase">Classes</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students from SSC to Degree with quality education, dedicated faculty, and result-oriented teaching.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.instagram.com/adhyayanclassesofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center hover:bg-orange-500 transition-colors group">
                <Instagram size={16} className="text-orange-400 group-hover:text-white" />
              </a>
              {/* <a href="#" className="w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center hover:bg-red-600 transition-colors group">
                <Youtube size={16} className="text-orange-400 group-hover:text-white" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-orange-400 mb-4 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/courses', label: 'Our Courses' },
                { to: '/results', label: 'Results' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-2">
                    <span className="text-orange-500">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Batches */}
          <div>
            <h4 className="font-display font-semibold text-orange-400 mb-4 tracking-wide uppercase text-sm">Batches</h4>
            <ul className="space-y-2">
              {['8th – 10th SSC', '11th – 12th Science', '11th – 12th Commerce', '1st Year Engineering', 'Science Degree', 'Commerce Degree'].map(b => (
                <li key={b} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="text-orange-500">›</span> {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-orange-400 mb-4 tracking-wide uppercase text-sm">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={15} className="text-orange-500 mt-0.5 shrink-0" />
                <span>Adhyayan Classes, Beside Oxford School, Near Shivaji Talao, Bhandup (west), Mumbai 400078, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={15} className="text-orange-500 shrink-0" />
                <a href="https://wa.me/918097169318?text=Hello%2C%20I%20want%20to%20enquire%20about%20Adhyayan%20Classes" className="hover:text-orange-400 transition-colors">+91 8097169318</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={15} className="text-orange-500 shrink-0" />
                <a href="mailto:adhyayanclasses.78@gmail.com" className="hover:text-orange-400 transition-colors">adhyayanclasses.78@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-flame mb-6" />
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-orange-400 font-medium">Adhyayan Classes</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
