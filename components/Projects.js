export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "MedXpert: A Multimodal Diagnosis Assistant for Radiology",
      description: "Developed MedXpert, a multimodal AI assistant combining fine-tuned CLIP, BLIP, for medical image-text retrieval, and automated radiology diagnosis.",
      image: "/images/project1.jpg",
      technologies: ["PyTorch", "Hugging Face Transformers", "CLIP", "BLIP", "Gemini LLM", "Streamlit", "NumPy", "Pandas"],
      github: "https://github.com/Raihan2511/MedXpert",
      live: "https://medxpert-d4kyfrpxejymtc4hj95da9.streamlit.app/"
    },
    {
      id: 2,
      title: "ChatGPT Clone with DeepSeek R1 & RAG-Powered PDF Q&A",
      description: " Developed ChatGPT-like AI Assistant using DeepSeek R1 with RAGfor document-based Q&A functionality and Enabled PDF uploads with FAISS vector search and implemented persistent chat memory using PostgreSQL",
      image: "/images/project2.jpg",
      technologies: ["Streamlit", "DeepSeek R1", "FAISS", "PostgreSQL","langchain","senetence-transformers"],
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
      live: "https://your-weather-app.vercel.app"
    },
    {
      id: 4,
      title: "Classification-Based Approach for Predicting SmartphonePrice Categories",
      description:"Built machine learning models to classify smartphones into price segments using machine learning techniques. The project involved data preprocessing, feature engineering, and model evaluation to achieve high accuracy in predicting smartphone price categories.",
      image: "/images/project3.jpg",
      technologies: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      github: "https://github.com/SayanDasDev/smartphone_price_prediction/tree/main",
      live: "https://your-weather-app.vercel.app"
    },
    {
      id: 5,
      title: "Wavelet-Based Approach for Authenticating Medical Images & Extracting Patient Info",
      description:"Developed a robust digital watermarking system for medical image authentication and secure patient data embedding. The solution leveraged Discrete Wavelet Transform (DWT), Histogram Shifting, and Arnold’s Cat Map for resilient watermark encoding and extraction.",
      image: "/images/project3.jpg",
      technologies: ["opencv", "NumPy"],
      github: "https://github.com/Raihan2511/steganography",
      // live: "https://your-weather-app.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-primary px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Code
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-primary px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}