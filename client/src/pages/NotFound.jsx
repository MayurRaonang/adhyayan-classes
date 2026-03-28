import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden t-bg-secondary">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'var(--blob-color)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{ background: 'var(--blob-color)' }} />
      </div>
      <div className="text-center relative z-10">
        <div className="font-display font-extrabold text-[10rem] md:text-[14rem] leading-none select-none" style={{ color: 'var(--border)' }}>
          404
        </div>
        <div className="-mt-8 md:-mt-16">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>Page Not Found</h1>
          <p className="text-lg mb-8 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>Looks like this page went on a study break! Let's get you back on track.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 text-white font-display font-bold rounded-xl glow-bhagva hover:bg-orange-600 hover:scale-105 transition-all">
              <Home size={18} /> Go Home
            </Link>
            <button onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-7 py-3.5 font-display font-bold rounded-xl hover:bg-orange-500/10 transition"
              style={{ border: '1px solid var(--border)', color: 'var(--orange)' }}>
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
