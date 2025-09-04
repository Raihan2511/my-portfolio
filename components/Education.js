// // components/Education.js
// export default function Education() {
//   const items = [
//     {
//       school: "Ramakrishna Mission Vivekananda Educational and Research Institute (RKMVERI), Howrah",
//       degree: "M.Sc. in Computer Science",
//       period: "2024 – Present",
//       gpa: null, // e.g., "8.9/10"
//       details: [
//         // Replace with your real focus/courses/achievements
//         "Focus: Machine Learning, Deep Learning, and Generative AI,Agentic AI,",
//         "Coursework: Machine Learning, Computer Vision, Deep Learning & NLP, Large Language Models, Theory of Computation, Probability, Linear Algebra, Statistics-I, Computational Geometry, Spectral Graph Theory",
//         // "Scholarship: XYZ Merit Award",
//       ],
//     },
//     {
//       school: "Ramakrishna Mission Residential College (Autonomous), Narendrapur, Kolkata",
//       degree: "B.Sc. in Computer Science",
//       period: "2021 – 2024",
//       gpa: "CGPA: 8.30 / 10",
//       details: [
//         "Coursework: Data Structures, Operating Systems, DBMS, Computer Networks,Numerical Analysis",
//         // Add your final year project title/1-liner:
//         // 'Final Year Project: "Smart Attendance System" — React + Flask + OpenCV',
//       ],
//     },
//     {
//       school: "Mohisda Ramnarayan High School, Paschim Medinipur, West Bengal",
//       degree: "Higher Secondary & Secondary Education",
//       period: "2019-2021", // optional
//       gpa: "H.S.: 85.6%",
//       details: [
//         // Add board %, olympiads, or notable achievements if any
//       ],
//     },
//   ];

//   return (
//     <section id="education" aria-labelledby="education-title" className="bg-white dark:bg-gray-950">
//       <div className="mx-auto max-w-6xl px-6 py-12">
//         <h2 id="education-title" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//           Education
//         </h2>

//         <ol className="mt-8 relative border-s border-gray-200 dark:border-white/10">
//           {items.map((item, idx) => (
//             <li key={idx} className="ms-6 mb-10">
//               {/* timeline dot */}
//               <span className="absolute -start-1.5 mt-2.5 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />

//               <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-gray-900/60 backdrop-blur p-5 shadow-sm">
//                 <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                     {item.degree}
//                   </h3>
//                   {item.period && (
//                     <span className="text-xs text-gray-500 dark:text-gray-400">
//                       {item.period}
//                     </span>
//                   )}
//                 </div>

//                 <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
//                   {item.school}
//                 </p>

//                 <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-400">
//                   {item.gpa && (
//                     <span className="inline-flex items-center rounded-full border border-gray-300 dark:border-white/10 px-2 py-0.5">
//                       {item.gpa}
//                     </span>
//                   )}
//                   {/* Example availability badge (optional) */}
//                   {/* <span className="inline-flex items-center rounded-full border border-emerald-300/40 bg-emerald-100/40 dark:bg-emerald-400/10 px-2 py-0.5 text-emerald-700 dark:text-emerald-300">Dean's List</span> */}
//                 </div>

//                 {item.details?.length > 0 && (
//                   <ul className="mt-3 space-y-1.5 text-sm text-gray-700 dark:text-gray-300 list-disc ps-5">
//                     {item.details.map((d, i) => (
//                       <li key={i}>{d}</li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </section>
//   );
// }



// components/Education.js
export default function Education() {
  const items = [
    {
      school: "Ramakrishna Mission Vivekananda Educational and Research Institute (RKMVERI), Howrah",
      degree: "M.Sc. in Computer Science",
      period: "2024 – Present",
      gpa: null, // e.g., "8.9/10"
      details: [
        // Replace with your real focus/courses/achievements
        "Focus: Machine Learning, Deep Learning, and Generative AI,Agentic AI,",
        "Coursework:  Advanced Algorithms, Machine Learning, Computer Vision, Deep Learning and NLP, Large Language Models,Reinforcement Learning, Approximation Algorithms, Theory of Computation, Probability, Linear Algebra, Statistics-I, Computational Geometry, Spectral Graph Theory,  Deep learning-Cyber Security",
        "Qualified GATE 2025 in Computer Science and Information Technology (CSE) conducted by IIT Roorkee ",
        // "Scholarship: XYZ Merit Award",
      ],
    },
    {
      school: "Ramakrishna Mission Residential College (Autonomous), Narendrapur, Kolkata",
      degree: "B.Sc. in Computer Science",
      period: "2021 – 2024",
      gpa: "CGPA: 8.30 / 10",
      details: [
        "Coursework: Data Structures and Algorithms, Graph Theory, Computer Fundamentals,  Operating Systems,  DBMS,  Computer Networks, Image processing,  Software enginnering, Discrete Mathematics, Numerical Analysis",
        "Secured AIR 2 in MPST Entrance Exam 2024, conducted by the Indian Association for the Cultivation of Science (IACS)",
        // Add your final year project title/1-liner:
        // 'Final Year Project: "Smart Attendance System" — React + Flask + OpenCV',
      ],
    },
    {
      school: "Mohisda Ramnarayan High School, Paschim Medinipur, West Bengal",
      degree: "Higher Secondary",
      period: "2019-2021", // optional
      gpa: "H.S.: 85.6%",
      details: [
        "Qualified WBJEE (West Bengal Joint Entrance Examination)",
      ],
    },
  ];

  return (
    <section id="education" aria-labelledby="education-title" className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-cyan-400/20 dark:from-indigo-600/10 dark:to-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Section header with enhanced styling */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-4 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <h2 id="education-title" className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-3">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey in computer science and technology
          </p>
        </div>

        <ol className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 dark:from-indigo-400 dark:via-purple-400 dark:to-blue-400"></div>
          
          {items.map((item, idx) => (
            <li key={idx} className="relative mb-12 last:mb-0 group">
              {/* Enhanced timeline dot with glow effect */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full ring-4 ring-white dark:ring-gray-900 shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-300">
                <div className="absolute inset-0.5 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-indigo-950 rounded-full"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full"></div>
              </div>

              {/* Enhanced card design */}
              <div className="ml-12 group-hover:translate-x-1 transition-all duration-300">
                <div className="relative rounded-2xl border border-gray-200/60 dark:border-gray-700/60 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/20 transition-all duration-300 overflow-hidden">
                  {/* Card background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/20"></div>
                  
                  {/* Accent border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 dark:from-indigo-400/20 dark:via-purple-400/20 dark:to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                          {item.degree}
                        </h3>
                        {item.period && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-700/50">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {item.period}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.school}
                      </p>
                    </div>

                    {item.gpa && (
                      <div className="mb-4">
                        <span className="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/40 dark:to-green-950/40 border border-emerald-200/50 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-300 text-sm font-semibold">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          {item.gpa}
                        </span>
                      </div>
                    )}

                    {item.details?.length > 0 && (
                      <div className="space-y-3">
                        {item.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                            <div className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-2"></div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}