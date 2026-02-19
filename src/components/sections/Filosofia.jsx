import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const spring = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 };

const Filosofia = () => {
  const items = [
    {
      title: "Visão de Mundo",
      text: "Acredito na interseção entre justiça social e responsabilidade individual. Minha perspectiva se fundamenta na ideia de que o verdadeiro progresso social ocorre quando harmonizamos liberdades individuais com o bem-estar coletivo, criando instituições que promovam equidade sem sacrificar a autonomia.",
      quote: "A justiça é o equilíbrio entre direito e dever.",
    },
    {
      title: "Princípios Morais",
      text: "Defendo o racionalismo crítico como método para avaliar questões morais, reconhecendo tanto a importância de princípios universais quanto dos contextos particulares. Busco conciliar a dimensão objetiva da ética com a subjetividade das experiências humanas.",
      quote: "A moral sem contexto é cega; o contexto sem moral é vazio.",
    },
  ];

  const refs = [
    { name: "John Rawls", work: "Justiça como Equidade" },
    { name: "Emmanuel Levinas", work: "Ética da Alteridade" },
    { name: "Miguel Reale", work: "Teoria Tridimensional" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="filosofia" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader title="Filosofia & Moral" number="03" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, backgroundColor: "var(--surface-hover)" }}
              transition={spring}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-8 md:p-10 flex flex-col shadow-sm hover:border-[var(--accent)] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[var(--fg)] mb-6 font-serif">
                {item.title}
              </h3>
              <p className="text-[var(--fg-dim)] text-[15px] leading-[1.8] flex-grow mb-8 font-sans">
                {item.text}
              </p>
              <motion.div
                className="bg-[var(--bg)] p-6 rounded-[var(--radius-sm)] border border-[var(--border)]"
                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ ...spring, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-[var(--accent)] text-lg font-bold italic font-serif leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* References */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...spring, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-[var(--border)] pt-8"
        >
          <span className="mono text-[10px] tracking-widest text-[var(--fg-muted)] uppercase block mb-6">
            Referências
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {refs.map((ref, i) => (
              <motion.div
                key={i}
                className="flex items-baseline gap-3 p-4 rounded-[var(--radius-sm)] hover:bg-[var(--surface)] transition-colors cursor-default"
                whileHover={{ x: 4 }}
                transition={spring}
              >
                <span className="text-[var(--fg)] font-semibold font-serif text-lg">{ref.name}</span>
                <span className="mono text-[var(--fg-muted)] text-xs">— {ref.work}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Filosofia;