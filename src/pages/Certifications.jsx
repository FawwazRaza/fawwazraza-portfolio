import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AzureCert from '../Assets/images/Certifications/Microsoft Certified Azure AI Apps and Agents Developer Associate.png';
import MLOpsCert from '../Assets/images/Certifications/Microsoft Certified Machine Learning Operations Engineer Associate.png';

const certificationData = [
  {
    id: 'DAAD505271FE68C5',
    title: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate',
    issuer: 'Microsoft',
    issuedDate: 'Jul 2026',
    expiryDate: 'Jul 2027',
    credentialId: 'DAAD505271FE68C5',
    verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-gb/MuhammadFawwaz-3025/DAAD505271FE68C5?sharingId=6973A792003A1D79',
    image: AzureCert,
  },
  {
    id: '9B47677C2ADDAA69',
    title: 'Microsoft Certified: Machine Learning Operations Engineer Associate',
    issuer: 'Microsoft',
    issuedDate: 'Jul 2026',
    expiryDate: 'Jul 2027',
    credentialId: '9B47677C2ADDAA69',
    verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/MuhammadFawwaz-3025/9B47677C2ADDAA69?sharingId=6973A792003A1D79',
    image: MLOpsCert,
  },
];

const Certifications = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-slate-500 hover:text-blue-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </button>
          </motion.div>

          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-6"
            >
              Certifications & Credentials
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Professional certifications demonstrating proficiency in AI, Machine Learning, and Cloud technologies.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {certificationData.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + (index * 0.1) }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div 
                  className="relative bg-slate-50 rounded-xl p-4 mb-5 cursor-pointer overflow-hidden border border-slate-100 group flex items-center justify-center min-h-[180px] sm:min-h-[220px]"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="max-h-48 sm:max-h-56 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-xl flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-slate-800 px-3.5 py-1.5 rounded-lg font-medium text-xs shadow-sm transition-opacity duration-300 flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      Click to enlarge
                    </span>
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col">
                  <h2 className="font-poppins font-bold text-xl text-slate-800 mb-3 leading-tight">
                    {cert.title}
                  </h2>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{cert.issuer}</span>
                  </div>
                  
                  <div className="space-y-2 mb-6 text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="flex justify-between">
                      <span className="font-medium">Issued:</span> {cert.issuedDate}
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Expires:</span> {cert.expiryDate}
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Credential ID:</span> 
                      <span className="font-mono text-xs bg-slate-200 px-2 py-0.5 rounded text-slate-700">{cert.credentialId}</span>
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <a 
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-2.5 px-4 bg-white border border-blue-200 text-blue-600 rounded-xl font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors duration-300"
                    >
                      <span>Verify Credential</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              src={selectedImage} 
              alt="Certification Full View" 
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;
