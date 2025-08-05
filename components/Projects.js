
    // {
    //   id: 1,
    //   title: "MedXpert: A Multimodal Diagnosis Assistant for Radiology",
    //   description: "Developed MedXpert, a multimodal AI assistant combining fine-tuned CLIP, BLIP, for medical image-text retrieval, and automated radiology diagnosis.",
    //   image: "/images/project1.jpg",
    //   technologies: ["PyTorch", "Hugging Face Transformers", "CLIP", "BLIP", "Gemini LLM", "Streamlit", "NumPy", "Pandas"],
    //   github: "https://github.com/Raihan2511/MedXpert",
    //   live: "https://medxpert-d4kyfrpxejymtc4hj95da9.streamlit.app/"
    // },
// export default function Projects() {
//   const projects = [

//     {
//       id: 2,
//       title: "ChatGPT Clone with DeepSeek R1 & RAG-Powered PDF Q&A",
//       description: " Developed ChatGPT-like AI Assistant using DeepSeek R1 with RAGfor document-based Q&A functionality and Enabled PDF uploads with FAISS vector search and implemented persistent chat memory using PostgreSQL",
//       image: "/images/chatgpt.png",
//       technologies: ["Streamlit", "DeepSeek R1", "FAISS", "PostgreSQL","langchain","senetence-transformers"],
//       github: "https://github.com/Raihan2511/ChatRAG",
//       live: "https://chatrag-9hi5etpa4vsfmtdcrpc64i.streamlit.app/"
//     },
//     {
//       id: 3,
//       title: "ShopLens: AI Powered Shopping Assistant app",
//       description: "Fine tuned yolos model for clothings detection, Fashion-clip model for clothing recognition, Chatbot like streamlit interface with image upload feature.",
//       image: "/images/project3.jpg",
//       technologies: ["Streamlit", "PyTorch","YOLOS", "Fashion-CLIP","opencv","gemini-llm"],
//       github: "https://github.com/Raihan2511/ShopLens-AI-Shopping-Assistant/tree/feature/test01",
//       // live: "https://your-weather-app.vercel.app"
//     },
//     {
//       id: 4,
//       title: "Classification-Based Approach for Predicting SmartphonePrice Categories",
//       description:"Built machine learning models to classify smartphones into price segments using machine learning techniques. The project involved data preprocessing, feature engineering, and model evaluation to achieve high accuracy in predicting smartphone price categories.",
//       image: "/images/project3.jpg",
//       technologies: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
//       github: "https://github.com/SayanDasDev/smartphone_price_prediction/tree/main",
//       // live: "https://your-weather-app.vercel.app"
//     },
//     {
//       id: 5,
//       title: "Wavelet-Based Approach for Authenticating Medical Images & Extracting Patient Info",
//       description:"Developed a robust digital watermarking system for medical image authentication and secure patient data embedding. The solution leveraged Discrete Wavelet Transform (DWT), Histogram Shifting, and Arnold’s Cat Map for resilient watermark encoding and extraction.",
//       image: "/images/watermarking.png",
//       technologies: ["opencv", "NumPy"],
//       github: "https://github.com/Raihan2511/steganography",
//       // live: "https://your-weather-app.vercel.app"
//     }
//   ];

//   return (
// <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//   <div className="container mx-auto px-6">
//     <div className="text-center mb-16">
//       <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">My Projects</h2>
//       <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
//       <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//         Here are some of my recent projects that showcase my skills and passion for development.
//       </p>
//     </div>

//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {projects.map((project) => (
//         <div
//           key={project.id}
//           className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
//         >
//           <div className="relative overflow-hidden">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//             />
//             <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//               <div className="flex space-x-4">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-white text-primary px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors"
//                 >
//                   Code
//                 </a>

//                 {project.live && (
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-white text-primary px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors"
//                   >
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </div>

//           </div>

//           <div className="p-6">
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//               {project.title}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-6">
//               {project.description}
//             </p>

//             <div className="flex flex-wrap gap-2">
//               {project.technologies.map((tech, index) => (
//                 <span
//                   key={index}
//                   className="bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//   );
// }

export default function Projects() {
  const projects = [
    {
      id: 2,
      title: "ChatGPT Clone with DeepSeek R1 & RAG-Powered PDF Q&A",
      description: " Developed ChatGPT-like AI Assistant using DeepSeek R1 with RAGfor document-based Q&A functionality and Enabled PDF uploads with FAISS vector search and implemented persistent chat memory using PostgreSQL",
      image: "/images/chatgpt.png",
      technologies: ["Streamlit", "DeepSeek R1", "FAISS","langchain", "PostgreSQL"],
      github: "https://github.com/Raihan2511/ChatRAG",
      live: "https://chatrag-9hi5etpa4vsfmtdcrpc64i.streamlit.app/"
    },
    {
      id: 3,
      title: "ShopLens: AI Powered Shopping Assistant app",
      description: "Fine tuned yolos model for clothings detection, Fashion-clip model for clothing recognition, Chatbot like streamlit interface with image upload feature.",
      image: "/images/project3.jpg",
      technologies: ["Streamlit", "PyTorch","YOLOS", "Fashion-CLIP","opencv","gemini-llm"],
      github: "https://github.com/Raihan2511/ShopLens-AI-Shopping-Assistant/tree/feature/test01",
      // live: "https://your-weather-app.vercel.app"
    },
    {
      id: 4,
      title: "Classification-Based Approach for Predicting SmartphonePrice Categories",
      description:"Built machine learning models to classify smartphones into price segments using machine learning techniques. The project involved data preprocessing, feature engineering, and model evaluation to achieve high accuracy in predicting smartphone price categories.",
      image: "/images/project3.jpg",
      technologies: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      github: "https://github.com/SayanDasDev/smartphone_price_prediction/tree/main",
      // live: "https://your-weather-app.vercel.app"
    },
    {
      id: 5,
      title: "Wavelet-Based Approach for Authenticating Medical Images & Extracting Patient Info",
      description:"Developed a robust digital watermarking system for medical image authentication and secure patient data embedding. The solution leveraged Discrete Wavelet Transform (DWT), Histogram Shifting, and Arnold's Cat Map for resilient watermark encoding and extraction.",
      image: "/images/watermarking.png",
      technologies: ["opencv", "NumPy"],
      github: "https://github.com/Raihan2511/steganography",
      // live: "https://your-weather-app.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, projectIndex) => (
            <div
              key={project.id}
              className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${
                  projectIndex % 4 === 0 ? 'rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05)' :
                  projectIndex % 4 === 1 ? 'rgba(16, 185, 129, 0.05), rgba(59, 130, 246, 0.05)' :
                  projectIndex % 4 === 2 ? 'rgba(245, 101, 101, 0.05), rgba(251, 191, 36, 0.05)' :
                  'rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05)'
                })`
              }}
            >
              <div className="relative">
                <div className="h-48 relative overflow-hidden rounded-t-2xl">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${
                        projectIndex % 4 === 0 ? 'rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1)' :
                        projectIndex % 4 === 1 ? 'rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1)' :
                        projectIndex % 4 === 2 ? 'rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1)' :
                        'rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1)'
                      })`
                    }}>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/95 backdrop-blur-sm text-gray-700 p-2.5 rounded-xl shadow-lg border border-white/50 hover:scale-105 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white p-2.5 rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
                      style={{
                        background: `linear-gradient(135deg, ${
                          projectIndex % 4 === 0 ? '#3B82F6, #9333EA' :
                          projectIndex % 4 === 1 ? '#10B981, #3B82F6' :
                          projectIndex % 4 === 2 ? '#F59E0B, #EF4444' :
                          '#8B5CF6, #EC4899'
                        })`
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Status indicator */}
                {/* <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{
                      backgroundColor: project.live ? '#10B981' : '#F59E0B'
                    }}>
                  </div>
                  <span className="text-xs font-medium bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg"
                    style={{
                      color: project.live ? '#10B981' : '#F59E0B'
                    }}>
                    {project.live ? 'Live' : 'Development'}
                  </span>
                </div> */}
              </div>

              {/* Content Section */}
              <div className="p-6 relative">
                {/* Title and Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Gradient divider */}
                  <div className="w-16 h-1 rounded-full mb-4"
                    style={{
                      background: `linear-gradient(90deg, ${
                        projectIndex % 4 === 0 ? '#3B82F6, #9333EA' :
                        projectIndex % 4 === 1 ? '#10B981, #3B82F6' :
                        projectIndex % 4 === 2 ? '#F59E0B, #EF4444' :
                        '#8B5CF6, #EC4899'
                      })`
                    }}>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technology Tags */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Tools Used
                  </h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1.5 rounded-lg font-medium border"
                        style={{
                          background: `linear-gradient(135deg, ${
                            projectIndex % 4 === 0 ? 'rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1)' :
                            projectIndex % 4 === 1 ? 'rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1)' :
                            projectIndex % 4 === 2 ? 'rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1)' :
                            'rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1)'
                          })`,
                          color: projectIndex % 4 === 0 ? '#3B82F6' :
                          projectIndex % 4 === 1 ? '#10B981' :
                          projectIndex % 4 === 2 ? '#F59E0B' :
                          '#8B5CF6',
                          borderColor: projectIndex % 4 === 0 ? 'rgba(59, 130, 246, 0.2)' :
                          projectIndex % 4 === 1 ? 'rgba(16, 185, 129, 0.2)' :
                          projectIndex % 4 === 2 ? 'rgba(245, 158, 11, 0.2)' :
                          'rgba(139, 92, 246, 0.2)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}