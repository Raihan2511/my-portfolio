// pages/index.js
import Sidebar from '../components/Header'
import About from '../components/About'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">

      {/* ── DESKTOP: two-column grid ────────────────────────── */}
      <div className="lg:flex lg:min-h-screen">

        {/* LEFT — sticky sidebar */}
        <div className="hidden lg:block lg:w-[320px] lg:flex-shrink-0">
          <Sidebar />
        </div>

        {/* RIGHT — scrollable main content */}
        <main className="flex-1 min-w-0">
          <About />
          <Education />
          <Projects />
          <Contact />
        </main>
      </div>

      {/* ── MOBILE: sidebar becomes a top bar ──────────────── */}
      {/* The mobile bar is rendered inside Sidebar only on small screens */}
      <div className="lg:hidden">
        {/* Mobile Sidebar top bar is sticky inside the component itself */}
      </div>

      <Footer />
    </div>
  )
}
