import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const spring = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 };

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const blockVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: spring },
  };

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader title="Contato" number="09" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Info */}
          <motion.div 
            variants={blockVariants} 
            className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-8 md:p-10 hover:border-[var(--accent)] transition-colors duration-500"
          >
            <span className="mono text-[10px] tracking-widest text-[var(--accent)] uppercase block mb-6 bg-[var(--bg)] w-max px-2 py-1 rounded-[4px]">
              Informações
            </span>
            <p className="text-[var(--fg-dim)] text-[15px] leading-[1.8] mb-10 font-sans">
              Estou sempre aberto a novas oportunidades, discussões acadêmicas
              e projetos colaborativos na área jurídica.
            </p>

            <div className="space-y-6">
              {[
                { label: "Email", value: "gustavo.campos@exemplo.com" },
                { label: "Telefone", value: "(31) 9XXXX-XXXX" },
                { label: "Local", value: "AFYA, Sete Lagoas, MG" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="border-t border-[var(--border)] pt-4"
                  whileHover={{ x: 6 }}
                  transition={spring}
                >
                  <span className="mono text-[10px] tracking-widest text-[var(--fg-muted)] uppercase block mb-1">
                    {item.label}
                  </span>
                  <span className="text-[var(--fg)] text-sm font-medium">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            variants={blockVariants} 
            className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-8 md:p-10 hover:border-[var(--accent)] transition-colors duration-500"
          >
            <span className="mono text-[10px] tracking-widest text-[var(--accent)] uppercase block mb-6 bg-[var(--bg)] w-max px-2 py-1 rounded-[4px]">
              Mensagem
            </span>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="mono text-[10px] tracking-widest text-[var(--fg-muted)] uppercase block mb-2 px-1">
                  Nome
                </label>
                <motion.input
                  type="text"
                  id="name"
                  className="w-full p-4 bg-[var(--bg)] border border-[var(--border)] rounded-[var(--radius-sm)] focus:border-[var(--accent)] outline-none transition-all text-[var(--fg)] text-sm placeholder-[var(--fg-muted)]"
                  placeholder="Seu nome"
                  whileFocus={{ scale: 1.01, borderColor: "var(--accent)", boxShadow: "0 0 0 2px rgba(245, 158, 11, 0.1)" }}
                  transition={spring}
                />
              </div>

              <div>
                <label htmlFor="email" className="mono text-[10px] tracking-widest text-[var(--fg-muted)] uppercase block mb-2 px-1">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  className="w-full p-4 bg-[var(--bg)] border border-[var(--border)] rounded-[var(--radius-sm)] focus:border-[var(--accent)] outline-none transition-all text-[var(--fg)] text-sm placeholder-[var(--fg-muted)]"
                  placeholder="seu@email.com"
                  whileFocus={{ scale: 1.01, borderColor: "var(--accent)", boxShadow: "0 0 0 2px rgba(245, 158, 11, 0.1)" }}
                  transition={spring}
                />
              </div>

              <div>
                <label htmlFor="message" className="mono text-[10px] tracking-widest text-[var(--fg-muted)] uppercase block mb-2 px-1">
                  Mensagem
                </label>
                <motion.textarea
                  id="message"
                  rows="4"
                  className="w-full p-4 bg-[var(--bg)] border border-[var(--border)] rounded-[var(--radius-sm)] focus:border-[var(--accent)] outline-none transition-all text-[var(--fg)] text-sm resize-none placeholder-[var(--fg-muted)]"
                  placeholder="Sua mensagem..."
                  whileFocus={{ scale: 1.01, borderColor: "var(--accent)", boxShadow: "0 0 0 2px rgba(245, 158, 11, 0.1)" }}
                  transition={spring}
                />
              </div>

              <motion.button
                type="submit"
                className="mono text-[11px] tracking-widest uppercase bg-[var(--accent)] text-[var(--bg)] font-bold px-8 py-4 w-full rounded-[var(--radius-sm)]"
                whileHover={{ scale: 1.02, y: -2, boxShadow: "0 10px 20px -5px rgba(245, 158, 11, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                transition={spring}
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;