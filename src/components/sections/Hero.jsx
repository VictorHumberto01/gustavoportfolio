import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  
  // Fluid text stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, filter: "blur(20px)", rotateX: 40 },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      rotateX: 0,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center overflow-hidden">
      {/* Soft Grid Background - Reduced opacity for readability */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
          }} 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl"
        >
          {/* Label - High Contrast */}
          <motion.div variants={itemVariants} className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-[var(--accent)]" />
            <span className="mono text-xs tracking-[0.4em] text-[var(--accent)] uppercase font-bold">
              Portfólio Acadêmico
            </span>
          </motion.div>

          {/* Title - Massive & Readable */}
          <h1 className="text-[13vw] md:text-[9rem] lg:text-[11rem] font-bold uppercase tracking-tighter leading-[0.85] mb-12 text-[var(--fg)] drop-shadow-2xl">
            <motion.span variants={itemVariants} className="block relative z-10">
              Gustavo
            </motion.span>
            <motion.div variants={itemVariants} className="block text-[#888] font-editorial ml-[0.5em] italic font-light mix-blend-plus-lighter">
              Campos
            </motion.div>
          </h1>

          {/* Intro Text - SIGNIFICANTLY increased readability */}
          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-3xl text-gray-300 max-w-3xl leading-relaxed font-sans font-light border-l-2 border-[var(--accent)] pl-6"
          >
            Explorando a intersecção entre a <strong className="text-white font-medium">justiça social</strong> e a precisão técnica da lei através de uma lente crítica e humanista.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4"
      >
        <div className="mono text-[10px] tracking-widest uppercase opacity-70 [writing-mode:vertical-rl] text-white">SCROLL</div>
        <div className="h-24 w-[1px] bg-white/20 overflow-hidden">
          <motion.div 
            className="h-full w-full bg-white"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
