import React, { useState, useEffect } from 'react';
import skillsData from '../data/skills.json';
import chromaDbLogo from '../Assets/logos/chroma_db.png';

// Complete skill logo mapping using official CDN URLs
const skillLogos = {
  // Languages
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg',
  'Assembly': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/labview/labview-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'Go': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
  'Golang': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
  
  // Frontend
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React 19': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Next.js 15': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'MaterialUI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
  'material UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
  'SCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  'Framer Motion': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg',
  
  // Backend
  'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Express Js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Node Js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'ASP.Net': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'Streamlit': 'https://streamlit.io/images/brand/streamlit-mark-color.svg',
  
  // Databases
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'ChromaDB': chromaDbLogo,
  'Pinecone': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pinecone.svg',
  'Pinecone Vector Database': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pinecone.svg',
  'Vector Databases': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  
  // ML/AI & LLMs
  'Langchain': 'https://python.langchain.com/img/favicon.ico',
  'LangChain': 'https://python.langchain.com/img/favicon.ico',
  'Groq API': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
  'OpenAI API': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
  'Hugging Face': 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
  'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
  'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  'Scikit-Learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'SciPy': 'https://scipy.org/images/logo.svg',
  'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'Machine Learning': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Artificial Intelligence (AI)': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
  'Large Language Models (LLM)': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
  'RAG': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg',
  'Embedding Models': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  'Semantic Search': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg',
  'Speech-to-Text': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googletranslate.svg',
  
  // Tools & DevOps
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'VSCode': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'Visual Studio': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg',
  'VMware': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vmware.svg',
  'LiveKit': 'https://livekit.io/favicon.ico',
  'ngrok': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ngrok.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'XAMPP (Apache + MySQL)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
  'Google OAuth': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  
  // APIs & Services
  'Twilio API': 'https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg',
  'Deepgram API': 'https://deepgram.com/favicon.ico',
  'ElevenLabs API': 'https://elevenlabs.io/favicon.ico',
  'SWR': 'https://swr.vercel.app/favicon/favicon-32x32.png',
  'Tesseract.js (OCR)': 'https://tesseract.projectnaptha.com/img/tesseract.png',
  'Web Speech API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg',
  
  // Other
  'Chatbot Development': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/chatbot.svg',
  'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  'LaTeX': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg',
};

// Icon Component - transparent background, logo only
function SkillIcon({ skillName }) {
  const [hasError, setHasError] = useState(false);
  const logoUrl = skillLogos[skillName];
  
  if (hasError || !logoUrl) {
    // Text fallback with gradient
    return (
      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
        <span className="text-xl md:text-2xl font-bold bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          {skillName.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }
  
  return (
    <img
      src={logoUrl}
      alt={skillName}
      onError={() => setHasError(true)}
      className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
      loading="lazy"
    />
  );
}

function SkillsSummary() {
  const [visibleSkills, setVisibleSkills] = useState([]);
  
  // Flatten all skills into single array
  const allSkills = Object.values(skillsData).flat();

  useEffect(() => {
    allSkills.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSkills(prev => [...prev, index]);
      }, index * 40);
    });
  }, []);

  return (
    <div className="relative w-full py-16 lg:py-24">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-300 dark:bg-gradient-to-br dark:from-cyan-500/20 dark:to-blue-500/15 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-300 dark:bg-gradient-to-br dark:from-teal-500/15 dark:to-green-500/20 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Skills & Technologies
          </h2>
          <p className="font-poppins text-base lg:text-lg text-gray-600 dark:text-cyan-300 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Cloud - Transparent logos with natural flow */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 px-4">
          {allSkills.map((skill, index) => {
            const isVisible = visibleSkills.includes(index);
            
            return (
              <div
                key={index}
                className={`group flex flex-col items-center gap-2 transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                title={skill}
              >
                {/* Logo only - no background box */}
                <div className="relative p-1 hover:scale-110 transition-transform duration-300">
                  <SkillIcon skillName={skill} />
                  
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/20 group-hover:to-blue-400/20 blur-xl transition-all duration-300 -z-10"></div>
                </div>

                {/* Skill Name */}
                <span className="font-poppins text-xs font-medium text-gray-700 dark:text-gray-300 text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300 max-w-[80px] leading-tight">
                  {skill}
                </span>
              </div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-1">
              {allSkills.length}+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Skills</div>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-1">
              {Object.keys(skillsData).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Categories</div>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-1">
              {skillsData['ML/AI & LLMs']?.length || 0}+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">AI/ML Tools</div>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent mb-1">
              {skillsData.Languages?.length || 0}+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Languages</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSummary;
