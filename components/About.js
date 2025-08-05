import { useState, useEffect, useRef } from "react";
import { Code, Brain, Users, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { skill: "C", img: "C.png" },
        { skill: "Cpp", img: "Cpp.png" },
        { skill: "Python", img: "Python.png" },
        { skill: "Java", img: "Java.png" },
      ],
    },
    {
      title: "Database",
      skills: [
        { skill: "MySQL", img: "MySQL.png" },
        { skill: "PostgreSQL", img: "PostgreSQL.png" },
        { skill: "Oracle", img: "Oracle.png" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { skill: "Git", img: "Git.png" },
        { skill: "Vercel", img: "Vercel.png" },
        { skill: "Linux", img: "Linux.png" },
      ],
    },
  ];

  const categoryColors = {
    Languages: "bg-blue-100 text-blue-800",
    Database: "bg-green-100 text-green-800",
    "Tools & Others": "bg-purple-100 text-purple-800",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // useEffect(() => {console.log('count', count)}, [count])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50  dark:from-gray-700 dark:to-gray-700 transition-colors duration-300"
    >
      {/* 
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full "></div>
          <p className="text-gray-500 mt-4 text-lg">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <div className="grid lg:px-10 lg:grid-cols-[2fr,1fr] gap-16 items-start">
          {/* About Content - Left Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative pl-4">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3 dark:text-white">
                <Rocket className="w-8 h-8 text-blue-500" />
                Passionate Developer and Tech Enthusiast
              </h3>

              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg dark:text-gray-300">
                  I am currently pursuing an{" "}
                  <span className="font-semibold text-blue-600">
                    MSc in Computer Science
                  </span>{" "}
                  with a growing interest in
                  <span className="font-semibold text-purple-600">
                    {" "}
                    Data Science
                  </span>
                  ,
                  <span className="font-semibold text-green-600">
                    {" "}
                    Machine Learning
                  </span>
                  , and
                  <span className="font-semibold text-indigo-600">
                    {" "}
                    Software Development
                  </span>
                  . I am eager to learn new skills and gain practical experience
                  through hands-on projects.
                </p>

                <p className="text-gray-600 leading-relaxed text-lg dark:text-gray-300">
                  When I am not coding, you will find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community. I believe in the power
                  of collaboration and continuous learning.
                </p>
              </div>

              {/* Core Values */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-700 mb-4 dark:text-white">
                  Core Values
                </h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Problem Solver
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Team Player
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    Continuous Learner
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section - Right Side */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <h4 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3 dark:text-gray-300">
                <Code className="w-6 h-6 text-blue-500 " />
                Technical Skills
              </h4>

              <div className="space-y-10">
                {skillCategories.map((category) => (
                  <div key={category.title}>
                    <h5 className="text-lg font-semibold dark:text-gray-300 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {category.title}
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map(({ skill, img }) => (
                        <span
                          key={skill}
                          className={`${
                            categoryColors[category.title]
                          } px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2`}
                        >
                          <img
                            src={`/icons/${img}`}
                            alt={skill}
                            className="w-4 h-4"
                          />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
