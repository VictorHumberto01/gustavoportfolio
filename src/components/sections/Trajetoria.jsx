import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const spring = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 };

const Trajetoria = () => {
  const items = [
    {
      num: "01",
      title: "Origens",
      text: "Nascido em Belo Horizonte e criado na cidade de Sete Lagoas, em Minas Gerais, desde cedo demonstrei interesse pelos debates sobre justiça e sociedade. Minha jornada começou com questionamentos sobre os fundamentos das relações humanas e sobre os princípios que regem nossa convivência social.",
    },
    {
      num: "02",
      title: "Educação Fundamental",
      text: "Durante minha formação básica, desenvolvi habilidades de oratória e de argumentação que me permitiram destacar em debates e apresentações. A leitura de clássicos da literatura brasileira e mundial ampliou minha visão crítica sobre a sociedade.",
    },
    {
      num: "03",
      title: "Faculdade Santo Agostinho — AFYA",
      text: "Atualmente cursando Direito na Faculdade Santo Agostinho - AFYA em Sete Lagoas, onde encontrei ambiente propício para desenvolver minhas ideias e contribuir com a comunidade acadêmica através de projetos inovadores.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(8px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="trajetoria" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader title="Trajetória" number="02" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={rowVariants}
              className="grid md:grid-cols-12 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-8 md:py-10 group hover:border-[var(--accent)] transition-all duration-300"
              whileHover={{ x: 6, backgroundColor: "var(--surface-hover)", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
            >
              <div className="md:col-span-1">
                <span className="mono text-[var(--accent)] text-sm font-bold bg-[var(--bg)] w-8 h-8 flex items-center justify-center rounded-full border border-[var(--border)]">
                  {item.num}
                </span>
              </div>
              <div className="md:col-span-3 mt-4 md:mt-0 flex items-center">
                <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors font-serif">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-8 mt-4 md:mt-0 flex items-center">
                <p className="text-[var(--fg-dim)] text-[15px] leading-[1.8] font-sans">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Trajetoria;
