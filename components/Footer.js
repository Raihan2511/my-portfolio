// // components/Footer.js
// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-6">
//         <div className="grid md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
//             <p className="text-gray-300 mb-4">
//               Passionate developer creating innovative solutions with modern technologies.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
//               <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
//               <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
//               <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
//               <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Services</h4>
//             <ul className="space-y-2 text-gray-300">
//               <li>Web Development</li>
//               <li>Mobile Apps</li>
//               <li>UI/UX Design</li>
//               <li>API Development</li>
//               <li>Consulting</li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center">
//           <p className="text-gray-300">
//             © 2025 Your Name. All rights reserved. Built with Next.js and Tailwind CSS.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// components/Footer.js
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer aria-labelledby="site-footer-title" className="bg-gray-950 text-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + About */}
          <div>
            <h3 id="site-footer-title" className="text-2xl font-bold tracking-tight">
              Raihan Uddin
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Student developer focused on Gen AI, Building innovative solutions with modern technologies.
            </p>

            {/* Availability badge */}
            <p className="mt-4 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to internships and job opportunities
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded p-1 text-gray-400 outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-400"
                title="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.85 9.71.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.13-1.52-1.13-1.52-.93-.65.07-.64.07-.64 1.03.07 1.57 1.08 1.57 1.08.91 1.58 2.39 1.12 2.97.86.09-.68.36-1.12.66-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.76 1.05.8-.23 1.66-.35 2.52-.35s1.72.12 2.52.35c1.92-1.32 2.76-1.05 2.76-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.37.33.7.98.7 1.98 0 1.43-.01 2.59-.01 2.94 0 .27.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/itsraihanuddin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded p-1 text-gray-400 outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-400"
                title="LinkedIn"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05C12.5 8.9 14.2 8 16.4 8 21 8 22 10.9 22 15.1V23h-4v-6.5c0-1.55-.03-3.55-2.16-3.55-2.17 0-2.5 1.7-2.5 3.44V23h-4V8z" />
                </svg>
              </a>

              <a
                href="mailto:uraihan2511@gmail.com"
                aria-label="Email"
                className="rounded p-1 text-gray-400 outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-400"
                title="Email"
              >
                <span className="sr-only">Email</span>
                ✉️
              </a>

              <a
                href="https://github.com/Raihan2511/Raihan2511.github.io/blob/main/resume_rkmveri.pdf"
                aria-label="Download Resume"
                className="rounded p-1 text-gray-400 outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-400"
                title="Resume (PDF)"
                download
              >
                <span className="sr-only">Resume</span>
                📄
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="#projects" className="text-gray-400 hover:text-white">Projects</Link></li>
              <li><Link href="#skills" className="text-gray-400 hover:text-white">Skills</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </nav>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li><a className="hover:text-white" href="https://github.com/Raihan2511/Raihan2511.github.io/blob/main/resume_rkmveri.pdf" download>Resume (PDF)</a></li>
              <li><a className="hover:text-white" href="mailto:uraihan2511@gmail.com">email</a></li>
              <li><a className="hover:text-white" href="https://github.com/Raihan2511" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a className="hover:text-white" href="https://www.linkedin.com/in/itsraihanuddin/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a className="hover:text-white" href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer">X / Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {year} Built with Next.js & Tailwind • Last updated: Sept 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
