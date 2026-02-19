import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const spring = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 };

const Inspiration = () => {
  const quotes = [
    {
      num: "01",
      name: "Paulo Freire",
      role: "Educador e filósofo",
      quote: "Não há saber mais ou saber menos: há saberes diferentes. O direito não é um favor. É uma condição para a democracia.",
    },
    {
      num: "02",
      name: "Roberto Lyra Filho",
      role: "Jurista e professor",
      quote: "Direito é processo, dentro do processo histórico: não é uma coisa feita, perfeita e acabada; é aquele vir-a-ser que se enriquece nos movimentos de libertação.",
    },
    {
      num: "03",
      name: "Rui Barbosa",
      role: "Orador e jurista",
      quote: "A regra da igualdade não consiste senão em quinhoar desigualmente aos desiguais, na medida em que se desigualam.",
    },
    {
      num: "04",
      name: "Boaventura de Sousa Santos",
      role: "Sociólogo e professor",
      quote: "O direito para ser emancipatório tem de ser democraticamente conquistado, não pode ser autoritariamente imposto.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="inspiration" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          title="Inspirações"
          number="05"
          subtitle="pensadores que moldaram minha visão"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {quotes.map((item, index) => (
            <motion.div
              key={index}
              variants={rowVariants}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] py-8 px-6 md:px-8 group hover:border-[var(--accent)] transition-all duration-300"
              whileHover={{ x: 6, backgroundColor: "var(--surface-hover)", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
            >
              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-1">
                  <span className="mono text-[var(--fg-muted)] text-xs bg-[var(--bg)] w-8 h-8 flex items-center justify-center rounded-full border border-[var(--border)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-colors">
                    {item.num}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <p className="text-xl md:text-2xl font-bold text-[var(--fg)] leading-snug group-hover:text-[var(--accent)] transition-colors duration-300 font-serif italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="md:col-span-2 md:text-right flex flex-col justify-center">
                  <span className="text-[var(--fg)] font-semibold block font-sans text-sm">{item.name}</span>
                  <span className="mono text-[var(--fg-muted)] text-[10px] uppercase mt-1">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Inspiration;
