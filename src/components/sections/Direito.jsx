import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const spring = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 };

const Direito = () => {
  const areas = [
    { num: "I", title: "Direito Penal", desc: "Proteção de bens jurídicos fundamentais e garantia do justo processo." },
    { num: "II", title: "Filosofia do Direito", desc: "Fundamentos filosóficos que sustentam os sistemas jurídicos." },
    { num: "III", title: "Direitos Humanos", desc: "Proteção internacional e constitucional dos direitos fundamentais." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const areaVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="direito" className="py-24 md:py-40 px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader title="Amor pelo Direito" number="04" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-24 items-center">
          {/* Photo */}
          <div className="md:col-span-5 relative order-2 md:order-1">
            <motion.div
              className="aspect-[3/4] relative overflow-hidden rounded-[var(--radius)]"
              initial={{ opacity: 0, filter: "blur(12px)", rotate: -2 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <Image
                src="/gustavo.png"
                alt="Gustavo Campos"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-[filter] duration-1000"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
            </motion.div>
          </div>

          {/* Text */}
          <motion.div
            className="md:col-span-7 flex flex-col justify-center order-1 md:order-2"
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="mono text-[10px] tracking-[0.3em] text-[var(--accent)] uppercase block mb-6 px-1">
              A Descoberta
            </span>
            <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[var(--fg)] mb-8 leading-[0.9]">
              Vocação & <br/>
              <span className="font-editorial text-[var(--fg-dim)] lowercase italic">Propósito</span>
            </h3>
            <div className="space-y-6 text-[var(--fg-dim)] text-[16px] md:text-[18px] leading-[1.8] font-sans font-light max-w-lg">
              <p>
                Meu fascínio pelo Direito surgiu da percepção de que as normas
                jurídicas são mais que simples regras de conduta — são expressões
                dos valores fundamentais de uma sociedade.
              </p>
              <p>
                O Direito é uma ciência viva, em constante evolução, que demanda 
                <span className="text-[var(--fg)] font-medium"> sensibilidade humanística </span> 
                e compromisso ético.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={areaVariants}
              whileHover={{ y: -8 }}
              transition={spring}
              className="group cursor-default"
            >
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-8 h-full hover:border-[var(--accent)] transition-colors duration-500 flex flex-col justify-between">
                <div>
                  <span className="font-editorial text-5xl text-[var(--border-strong)] group-hover:text-[var(--accent)] transition-colors duration-500 block mb-6 italic">
                    {area.num}
                  </span>
                  <h4 className="text-xl font-bold uppercase tracking-tight text-[var(--fg)] mb-4 font-serif">
                    {area.title}
                  </h4>
                </div>
                <p className="text-[var(--fg-dim)] text-sm leading-relaxed font-sans opacity-80 group-hover:opacity-100 transition-opacity">
                  {area.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Direito;
