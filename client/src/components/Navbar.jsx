import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, BookOpen, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import logo from '../../public/images/logo.png'  // adjust path if needed

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/courses', label: 'Courses' },
  { path: '/results', label: 'Results' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 t-nav ${scrolled ? 'shadow-md' : 'shadow-sm'}`}
      style={{ borderBottom: '1px solid var(--border-light)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          {/* <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center glow-bhagva-sm group-hover:scale-110 transition-transform">
              <BookOpen size={20} className="text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-xl text-flame block">Adhyayan</span>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Classes</span>
            </div>
          </Link> */}
          

<Link to="/" className="flex items-center group">
  <img
    src={logo}
    alt="Adhyayan Classes"
    className="h-12 md:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
  />
</Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 font-display font-medium text-sm rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-orange-500 bg-orange-500/10'
                    : 'hover:text-orange-500 hover:bg-orange-500/10'
                }`}
                style={{ color: location.pathname === link.path ? undefined : 'var(--text-secondary)' }}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle mx-3"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              <div className="theme-toggle-knob">
                {isDark
                  ? <Moon size={11} className="text-white" />
                  : <Sun size={11} className="text-white" />
                }
              </div>
            </button>

            <Link
              to="/contact"
              className="px-5 py-2.5 bg-orange-500 text-white font-display font-semibold text-sm rounded-lg hover:bg-orange-600 transition-all glow-bhagva-sm hover:scale-105"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              <div className="theme-toggle-knob">
                {isDark
                  ? <Moon size={11} className="text-white" />
                  : <Sun size={11} className="text-white" />
                }
              </div>
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="text-orange-500 p-2 rounded-lg hover:bg-orange-500/10 transition"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="t-nav px-4 py-4 flex flex-col gap-2" style={{ borderTop: '1px solid var(--border-light)' }}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-3 font-display font-medium rounded-lg transition ${
                location.pathname === link.path
                  ? 'text-orange-500 bg-orange-500/10'
                  : 'hover:text-orange-500 hover:bg-orange-500/10'
              }`}
              style={{ color: location.pathname === link.path ? undefined : 'var(--text-secondary)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 px-5 py-3 bg-orange-500 text-white font-display font-semibold rounded-lg text-center hover:bg-orange-600 transition"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
