import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AzureCert from '../Assets/images/Certifications/Microsoft Certified Azure AI Apps and Agents Developer Associate.png';
import MLOpsCert from '../Assets/images/Certifications/Microsoft Certified Machine Learning Operations Engineer Associate.png';

const certifications = [
  {
    id: 1,
    name: 'Azure AI Apps and Agents Developer Associate',
    issuer: 'Microsoft',
    date: 'Jul 2026',
    image: AzureCert,
  },
  {
    id: 2,
    name: 'Machine Learning Operations Engineer Associate',
    issuer: 'Microsoft',
    date: 'Jul 2026',
    image: MLOpsCert,
  },
];

const CertificationsPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24 bg-slate-50/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4"
          >
            Certifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Industry-recognized credentials validating my expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-3 mb-5 w-full max-w-[260px] flex items-center justify-center min-h-[160px] shadow-sm group-hover:shadow-md transition-shadow">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="max-h-36 sm:max-h-40 w-auto rounded-lg object-contain"
                />
              </div>
              <h3 className="font-poppins font-semibold text-base sm:text-lg text-slate-800 mb-2 line-clamp-2">
                {cert.name}
              </h3>
              <p className="text-blue-600 font-semibold text-xs sm:text-sm mb-1">{cert.issuer}</p>
              <p className="text-slate-500 text-xs">Issued {cert.date}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button
            onClick={() => navigate('/certifications')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            View All Certifications
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsPreview;
