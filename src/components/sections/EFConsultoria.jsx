import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const spring = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 };

const EFConsultoria = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: spring },
  };

  return (
    <section id="efconsultoria" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader title="Empreendimento" number="07" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.005, y: -4, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
          transition={spring}
          className="bg-[var(--bg)] border border-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden hover:border-[var(--accent)] transition-all duration-500 shadow-xl"
        >
          <div className="grid md:grid-cols-2">
            {/* Content */}
            <div className="p-8 md:p-14 flex flex-col justify-center">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...spring, delay: 0.1 }}
                viewport={{ once: true }}
                className="mono text-[10px] tracking-widest text-[var(--accent)] uppercase block mb-6 bg-[var(--surface)] w-max px-3 py-1 rounded-full border border-[var(--border)]"
              >
                Em breve
              </motion.span>
              <motion.div
                 initial={{ opacity: 0, y: 15 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ ...spring, delay: 0.15 }}
                 viewport={{ once: true }}
              >
                <h3 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter text-[var(--fg)] leading-[0.85] font-serif">
                  Estanislau
                </h3>
                <h3 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter text-[var(--accent)] leading-[0.85] mb-8 font-serif">
                  França
                </h3>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ...spring, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-[var(--fg-dim)] text-[16px] leading-[1.8] mb-10 font-sans max-w-md"
              >
                Transformamos desafios em oportunidades com estratégias
                personalizadas e implementação eficiente para empresas que
                buscam excelência.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ...spring, delay: 0.35 }}
                viewport={{ once: true }}
                className="space-y-4 mb-12"
              >
                {["Consultoria Estratégica", "Otimização de Processos", "Gestão de Talentos"].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    whileHover={{ x: 6 }}
                    transition={spring}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    <span className="text-[var(--fg-dim)] text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.a
                href="https://estanislaufranca.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-[11px] tracking-widest text-[var(--bg)] uppercase inline-flex items-center gap-2 bg-[var(--accent)] px-6 py-3 rounded-[var(--radius-sm)] font-bold w-max"
                whileHover={{ gap: "12px", x: 3, boxShadow: "0 10px 20px -5px rgba(245, 158, 11, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={spring}
              >
                Visitar website <span>→</span>
              </motion.a>
            </div>

            {/* Visual */}
            <div className="relative bg-[var(--surface)] flex items-center justify-center min-h-[400px] overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: "linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }} />
              
              {/* Decorative Circle */}
              <div className="absolute w-[80%] aspect-square rounded-full border border-[var(--border-strong)] opacity-20" />
              <div className="absolute w-[60%] aspect-square rounded-full border border-[var(--border-strong)] opacity-20" />
              
              <motion.div
                className="relative z-10 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ ...spring, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-8xl md:text-[10rem] font-bold text-[var(--accent)] tracking-tighter leading-none font-serif"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  transition={spring}
                >
                  EF
                </motion.div>
                <div className="mono text-[10px] tracking-[0.6em] text-[var(--fg-muted)] uppercase mt-6 font-bold">
                  Soluções
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EFConsultoria;
