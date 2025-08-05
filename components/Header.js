// import { useState } from 'react'

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
//       <nav className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           <div className="text-2xl font-bold text-primary">
//             Portfolio
//           </div>
          
//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
//             <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
//             <a href="#projects" className="text-gray-700 hover:text-primary transition-colors">Projects</a>
//             <a href="#skills" className="text-gray-700 hover:text-primary transition-colors">Skills</a>
//             <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <div className="w-6 h-6 flex flex-col justify-center items-center">
//               <span className={`w-full h-0.5 bg-gray-700 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
//               <span className={`w-full h-0.5 bg-gray-700 my-1 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
//               <span className={`w-full h-0.5 bg-gray-700 transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
//             </div>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden mt-4 pb-4">
//             <a href="#home" className="block py-2 text-gray-700 hover:text-primary">Home</a>
//             <a href="#about" className="block py-2 text-gray-700 hover:text-primary">About</a>
//             <a href="#projects" className="block py-2 text-gray-700 hover:text-primary">Projects</a>
//             <a href="#skills" className="block py-2 text-gray-700 hover:text-primary">Skills</a>
//             <a href="#contact" className="block py-2 text-gray-700 hover:text-primary">Contact</a>
//           </div>
//         )}
//       </nav>
//     </header>
//   )
// }

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Title */}
          <div className="text-2xl font-bold text-primary dark:text-white">
            Raihan
          </div>

          {/* Desktop Menu + Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            {['home', 'about', 'projects', 'contact'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`w-full h-0.5 bg-gray-700 dark:bg-gray-200 transition-all ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 dark:bg-gray-200 my-1 transition-all ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 dark:bg-gray-200 transition-all ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 px-2 rounded-lg bg-white/95 dark:bg-gray-800/95 shadow-md space-y-3">
            {['home', 'about', 'projects', 'skills', 'contact'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
