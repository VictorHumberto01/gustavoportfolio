import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import LazyImage from "@/components/LazyImage";

const spring = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 };

const Experiencias = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      key: "temas",
      title: "TEMAS 19 — China",
      period: "Simulação Temática",
      description: "Participei da simulação temática do tribunal militar para o extremo oriente como Juiz Henry Reimburguer da França.",
      tags: ["Retórica", "Argumentação", "Contra-argumentação", "Conhecimentos históricos"],
      coverImage: "/experiences/temas/abertura.jpg",
      photos: [
        { url: "/experiences/temas/gustavo1.jpg", caption: "" },
        { url: "/experiences/temas/gustavo2.jpg", caption: "" },
        { url: "/experiences/temas/gustavo3.jpg", caption: "" },
      ],
    },
    {
      key: "quantium",
      title: "Consultor Jurídico",
      period: "Quantium Labs",
      description: "Atuei na área jurídica da empresa de desenvolvimento de software, elaborando e revisando contratos, termos de uso e políticas.",
      tags: ["Contratos", "Termos de uso", "Políticas de privacidade"],
      coverImage: "/experiences/quantium/banner.jpg",
      photos: [
        { url: "/experiences/quantium/aline.jpg", caption: "Apresentação na ACI" },
      ],
    },
    {
      key: "fisk",
      title: "Professor de Inglês",
      period: "Fisk Sete Lagoas — 8 meses",
      description: "Atuei como professor de inglês, desenvolvendo planos de aula e ministrando classes para alunos de diferentes faixas etárias.",
      tags: ["Planejamento", "Acompanhamento"],
      coverImage: "/experiences/professoringles/banneringles.png",
      photos: [],
    },
    {
      key: "liga",
      title: "Liga Acadêmica de Direito Penal",
      period: "1ª Liga — AFYA",
      description: "Lidero a primeira Liga Acadêmica de Direito Penal da instituição AFYA, dedicada ao aprofundamento na área criminal.",
      tags: ["Grupos de estudo", "Simulações de júri", "Publicação de artigos"],
      coverImage: "/experiences/liga/logo.jpeg",
      photos: [],
    },
  ];

  return (
    <section id="experiencias" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader title="Experiências" number="06" />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <motion.div
              layoutId={`exp-container-${exp.key}`}
              key={exp.key}
              onClick={() => exp.photos.length > 0 && setSelectedExp(exp)}
              className={`bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-6 md:p-8 hover:border-[var(--accent)] transition-colors duration-500 group relative overflow-hidden ${exp.photos.length > 0 ? "cursor-pointer" : ""}`}
              whileHover={{ y: -4, backgroundColor: "var(--surface-hover)" }}
              transition={spring}
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                {/* Image - fluid transition */}
                <div className="md:col-span-4 lg:col-span-3">
                  <motion.div
                    className="aspect-[4/3] overflow-hidden relative rounded-[var(--radius-sm)]"
                  >
                    <motion.img
                      layoutId={`exp-image-${exp.key}`}
                      src={exp.coverImage}
                      alt={exp.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                    <motion.h3 
                      layoutId={`exp-title-${exp.key}`}
                      className="text-2xl font-bold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors font-serif"
                    >
                      {exp.title}
                    </motion.h3>
                    <span className="mono text-[10px] tracking-widest text-[var(--fg-muted)] uppercase shrink-0 bg-[var(--bg)] px-2 py-1 rounded-[4px]">
                      {exp.period}
                    </span>
                  </div>
                  <motion.p 
                     layoutId={`exp-desc-${exp.key}`}
                     className="text-[var(--fg-dim)] text-sm leading-relaxed mb-6 font-sans max-w-2xl"
                  >
                    {exp.description}
                  </motion.p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="mono text-[10px] tracking-wider text-[var(--fg-muted)] bg-[var(--bg)] border border-[var(--border)] px-3 py-1.5 rounded-full uppercase hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {exp.photos.length > 0 && (
                     <div className="mt-6 flex items-center gap-2 text-[var(--accent)] mono text-[10px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                        Ver galeria <span>→</span>
                     </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedExp && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedExp(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md pointer-events-auto"
              />
              <motion.div
                layoutId={`exp-container-${selectedExp.key}`}
                className="w-full max-w-5xl h-[80vh] md:h-[90vh] bg-[var(--bg)] border border-[var(--border-strong)] rounded-[var(--radius-lg)] overflow-hidden relative z-10 flex flex-col shadow-2xl pointer-events-auto"
                transition={spring}
              >
                {/* Header */}
                <div className="flex justify-between items-start p-6 md:p-8 shrink-0 bg-[var(--surface)] border-b border-[var(--border)] relative z-20">
                  <div>
                    <motion.h2
                      layoutId={`exp-title-${selectedExp.key}`}
                      className="text-2xl md:text-4xl font-bold uppercase tracking-tight font-serif text-[var(--fg)]"
                    >
                      {selectedExp.title}
                    </motion.h2>
                    <motion.p 
                       layoutId={`exp-desc-${selectedExp.key}`}
                       className="text-[var(--fg-dim)] text-base font-sans mt-4 max-w-2xl leading-relaxed"
                    >
                       {selectedExp.description}
                    </motion.p>
                  </div>
                  <button
                    onClick={() => setSelectedExp(null)}
                    className="text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors mono text-xs p-2 bg-[var(--bg)] rounded-full px-4 border border-[var(--border)] hover:border-[var(--accent)] shrink-0 ml-4"
                  >
                    FECHAR
                  </button>
                </div>

                {/* Content (Scrollable) */}
                <motion.div
                  className="flex-1 overflow-y-auto bg-[var(--bg)] relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                   {/* Large Cover Image inside modal? No, photos grid */}
                  <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedExp.photos.map((photo, index) => (
                      <LazyImage
                        key={index}
                        src={photo.url}
                        alt={photo.caption}
                        caption={photo.caption}
                        index={index}
                        className="rounded-[var(--radius)]"
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experiencias;