export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Passionate Developer & Tech Enthusiast
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated full-stack developer with a passion for creating innovative solutions. 
              With expertise in modern web technologies and machine learning, I love turning complex 
              problems into elegant, user-friendly applications.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Problem Solver</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Team Player</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Continuous Learner</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-600">GitHub Commits</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}