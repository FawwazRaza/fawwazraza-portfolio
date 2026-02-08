import React, { useState } from 'react';
import { motion } from 'framer-motion';

function SkillIcon({ name, icon, size = 'md' }) {
  const [hasError, setHasError] = useState(false);
  const sizeClasses = size === 'lg' ? 'w-9 h-9 md:w-11 md:h-11' : 'w-7 h-7 md:w-9 md:h-9';

  if (hasError || !icon) {
    return (
      <div className={`${sizeClasses} flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-slate-100`}>
        <span className="text-sm font-bold bg-gradient-to-br from-blue-600 to-slate-700 bg-clip-text text-transparent">
          {name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={icon}
      alt={name}
      onError={() => setHasError(true)}
      className={`${sizeClasses} object-contain`}
      loading="lazy"
      decoding="async"
    />
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

function SkillsGrid({ title, items, iconSize = 'md' }) {
  return (
    <div className="mb-12">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        <h3 className="font-poppins text-xl lg:text-2xl font-bold text-slate-800">
          {title}
        </h3>
        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">
          {items.length}
        </span>
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-12 gap-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group flex flex-col items-center gap-1 cursor-default"
            title={item.name}
            whileHover={{ y: -4, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <div className="p-1.5 rounded-lg bg-transparent border border-slate-200 group-hover:border-blue-300 transition-all duration-300">
              <SkillIcon name={item.name} icon={item.icon} size={iconSize} />
            </div>
            <span className="font-poppins text-[9px] md:text-[10px] text-slate-500 group-hover:text-slate-700 text-center leading-tight max-w-[60px] transition-colors duration-200 truncate">
              {item.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function SkillsSection() {
  // Dynamically import skills config
  const [coreSkills, setCoreSkills] = React.useState([]);
  const [toolsAndTech, setToolsAndTech] = React.useState([]);

  React.useEffect(() => {
    import('../data/skillsConfig.js').then((mod) => {
      setCoreSkills(mod.coreSkills);
      setToolsAndTech(mod.toolsAndTech);
    });
  }, []);

  return (
    <section className="relative w-full py-16 lg:py-24">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-10 right-10 w-80 h-80 bg-blue-200 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-200 rounded-full filter blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-slate-800 mb-3">
            Skills & Technologies
          </h2>
          <p className="font-poppins text-base lg:text-lg text-slate-500 max-w-2xl mx-auto">
            My technical arsenal for building production systems
          </p>
        </motion.div>

        {/* Core Skills */}
        <SkillsGrid title="Core Skills" items={coreSkills} iconSize="lg" />

        {/* Tools & Technologies */}
        <SkillsGrid title="Tools & Technologies" items={toolsAndTech} iconSize="md" />

        {/* Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 gap-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-slate-100 shadow-sm p-5 text-center hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
              {coreSkills.length}
            </div>
            <div className="text-sm text-slate-500 font-medium">Core Skills</div>
          </div>
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-slate-100 shadow-sm p-5 text-center hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-1">
              {toolsAndTech.length}
            </div>
            <div className="text-sm text-slate-500 font-medium">Tools & Technologies</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default React.memo(SkillsSection);
