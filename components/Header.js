import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { label: 'About',     href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Contact',   href: '#contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scrollspy — highlight the current section in nav
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''));
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <>
      {/* ── DESKTOP SIDEBAR ─────────────────────────────────────────── */}
      <aside className="hidden lg:flex flex-col sticky top-0 h-screen w-full overflow-y-auto
                        bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800
                        px-8 py-10 transition-colors duration-300">

        {/* Profile picture */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative w-32 h-32 mb-5">
            <img
              src="/images/raihan_profile.jpg"
              alt="Raihan Uddin"
              className="w-32 h-32 rounded-2xl object-cover shadow-lg ring-4 ring-white dark:ring-gray-800"
            />
            {/* Online badge */}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white dark:border-gray-900" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Raihan Uddin
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-snug">
            ML · DL · LLMs<br />
            <span className="text-xs">Curious Mind in the AI Space</span>
          </p>

          {/* Availability pill */}
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30
                           border border-emerald-200 dark:border-emerald-700
                           px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to opportunities
          </span>
        </div>

        {/* Social icons row */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {/* GitHub */}
          <a href="https://github.com/Raihan2511" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors" aria-label="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/itsraihanuddin/" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05C12.5 8.9 14.2 8 16.4 8 21 8 22 10.9 22 15.1V23h-4v-6.5c0-1.55-.03-3.55-2.16-3.55-2.17 0-2.5 1.7-2.5 3.44V23h-4V8z"/>
            </svg>
          </a>
          {/* Email */}
          <a href="mailto:uraihan2511@gmail.com"
             className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Email">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>

        {/* Resume button */}
        <a
          href="https://github.com/Raihan2511/Raihan2511.github.io/blob/main/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-10 w-full flex items-center justify-center gap-2 rounded-xl border-2
                     border-gray-200 dark:border-gray-700 py-2.5 text-sm font-semibold
                     text-gray-700 dark:text-gray-300
                     hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white
                     transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          </svg>
          My Resume
        </a>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <a
                    href={href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200
                      ${isActive
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white'
                      }`}
                  >
                    {/* Active indicator line */}
                    <span className={`h-4 w-0.5 rounded-full transition-all ${isActive ? 'bg-gray-900 dark:bg-white' : 'bg-transparent'}`} />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Dark mode toggle at the bottom */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-xs text-gray-400">Theme</span>
          <ThemeToggle />
        </div>
      </aside>

      {/* ── MOBILE TOP BAR ──────────────────────────────────────────── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95
                         backdrop-blur-md border-b border-gray-100 dark:border-gray-800
                         transition-colors duration-300">
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <img src="/images/raihan_profile.jpg" alt="Raihan"
                 className="w-8 h-8 rounded-full object-cover" />
            <span className="font-bold text-gray-900 dark:text-white text-sm">Raihan Uddin</span>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="p-1 text-gray-600 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown nav */}
        {mobileOpen && (
          <nav className="border-t border-gray-100 dark:border-gray-800 px-5 py-3 space-y-1 bg-white dark:bg-gray-900">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href}
                 onClick={() => setMobileOpen(false)}
                 className="block py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {label}
              </a>
            ))}
            <a
              href="https://github.com/Raihan2511/Raihan2511.github.io/blob/main/resume.pdf"
              target="_blank" rel="noopener noreferrer"
              className="block py-2 text-sm font-semibold text-gray-900 dark:text-white">
              📄 My Resume
            </a>
          </nav>
        )}
      </header>
      {/* Spacer so fixed header doesn't overlap content on mobile */}
      <div className="lg:hidden h-14" />
    </>
  );
}
