export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: "/icons/c.svg" },
        { name: "C++", icon: "/icons/cpp.svg" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "Java", icon: "/icons/java.svg" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: "/icons/mysql.svg" },
        { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
        { name: "Oracle", icon: "/icons/oracle.svg" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: "/icons/git.svg" },
        { name: "Vercel", icon: "/icons/vercel.svg" },
        { name: "Linux", icon: "/icons/linux.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I am passionate about learning new technologies and staying up-to-date with the latest trends in development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white p-3 rounded-lg text-center hover:bg-primary hover:text-white transition-colors cursor-default"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                      <span>{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
