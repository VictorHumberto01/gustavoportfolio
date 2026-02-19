import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const spring = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 };

const PorqueDireito = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const blockVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="porque-direito" className="py-24 md:py-32 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader title="Por que Direito?" number="01" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Main story */}
          <motion.div 
            variants={blockVariants} 
            className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-8 md:p-10 shadow-sm hover:border-[var(--accent)] transition-colors duration-500"
          >
            <span className="mono text-[10px] tracking-widest text-[var(--accent)] uppercase block mb-6 bg-[var(--bg)] w-max px-2 py-1 rounded-[4px]">
              O Momento Decisivo
            </span>
            <div className="space-y-5 text-[var(--fg-dim)] text-[15px] leading-[1.8] font-sans">
              <p>
                Aos 11 anos, durante uma aula de inglês em uma escola local de
                Sete Lagoas, vivenciei um momento que mudaria minha perspectiva de
                vida. Em um exercício aparentemente simples de compartilhar
                habilidades com a turma, enquanto meus colegas falavam sobre tocar
                instrumentos, praticar esportes e outras atividades, me vi em um
                momento de profunda reflexão.
              </p>
              <p>
                Naquele instante, percebi que não tinha uma habilidade específica
                para compartilhar. Foi um momento de clareza que me levou a uma
                decisão fundamental: eu precisava conquistar meu espaço no mundo.
              </p>
            </div>
          </motion.div>

          {/* Quote + cards */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={blockVariants}
              className="bg-[var(--accent)] text-[var(--bg)] p-8 md:p-10 flex-1 rounded-[var(--radius)] shadow-lg"
            >
              <span className="mono text-[10px] tracking-widest uppercase block mb-4 opacity-70">
                Citação
              </span>
              <p className="text-xl md:text-2xl font-bold leading-snug font-serif">
                &ldquo;A partir daquele dia, decidi que queria me destacar, fazer a
                diferença. Esta busca por significado me conduziu ao Direito.&rdquo;
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
              <motion.div
                variants={blockVariants}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-6 hover:bg-[var(--surface-hover)] transition-all duration-300 hover:border-[var(--accent)]"
              >
                <motion.h4
                  className="text-lg font-bold text-[var(--fg)] mb-2 font-serif"
                  whileHover={{ x: 4 }}
                  transition={spring}
                >
                  Transformação Pessoal
                </motion.h4>
                <p className="text-[var(--fg-dim)] text-sm leading-[1.7] font-sans">
                  Aquele momento de aparente vulnerabilidade se transformou em
                  força motriz. O Direito surgiu como o caminho perfeito.
                </p>
              </motion.div>
              <motion.div
                variants={blockVariants}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-6 hover:bg-[var(--surface-hover)] transition-all duration-300 hover:border-[var(--accent)]"
              >
                <motion.h4
                  className="text-lg font-bold text-[var(--fg)] mb-2 font-serif"
                  whileHover={{ x: 4 }}
                  transition={spring}
                >
                  Propósito Encontrado
                </motion.h4>
                <p className="text-[var(--fg-dim)] text-sm leading-[1.7] font-sans">
                  No Direito, encontrei não apenas uma profissão, mas uma missão
                  para defender causas e promover justiça.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PorqueDireito;