import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Results from './pages/Results'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen t-bg-primary t-text-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
