export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <img 
            src="/images/raihan_profile.jpg" 
            alt="Profile" 
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-8 shadow-2xl animate-bounce-slow"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I am <span className="text-primary">Raihan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            ML | DL | LLMs | Curious Mind in the AI Space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-all transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}