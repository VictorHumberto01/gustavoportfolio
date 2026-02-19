import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import LazyImage from "@/components/LazyImage";

const spring = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 };

const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = [
    {
      id: 1,
      title: "Brasília",
      subtitle: "Distrito Federal",
      description: "Visita à sede do Governo Federal, testemunhando a arquitetura do poder e a história viva da democracia brasileira.",
      coverImage: "/places/brasilia/deputados.jpeg",
      date: "2025",
      photos: [
        { url: "/places/brasilia/stfout.jpeg", caption: "Fachada do STF" },
        { url: "/places/brasilia/stfout2.jpeg", caption: "Fachada do STF" },
        { url: "/places/brasilia/senadofederal.jpeg", caption: "Senado Federal" },
        { url: "/places/brasilia/alvorada.jpeg", caption: "Palácio do Planalto" },
        { url: "/places/brasilia/deputados.jpeg", caption: "Câmara dos Deputados" },
        { url: "/places/brasilia/catedral.jpeg", caption: "Catedral de Brasília" },
        { url: "/places/brasilia/arteindigena.jpeg", caption: "Artes Indígenas" },
        { url: "/places/brasilia/soldados.jpeg", caption: "Vista" },
      ],
    },
  ];

  return (
    <section id="lugares" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader title="Lugares" number="08" />

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {places.map((place) => (
            <motion.div
              layoutId={`place-container-${place.id}`}
              key={place.id}
              onClick={() => setSelectedPlace(place)}
              className="bg-[var(--bg)] cursor-pointer group relative overflow-hidden rounded-[var(--radius)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-500"
              whileHover={{ y: -6 }}
              transition={spring}
            >
              <div className="relative aspect-[3/2] overflow-hidden rounded-[var(--radius)]">
                <motion.img
                  layoutId={`place-image-${place.id}`}
                  src={place.coverImage}
                  alt={place.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                <div className="absolute top-6 right-6">
                  <span className="mono text-[10px] tracking-widest text-[var(--bg)] bg-[var(--accent)] px-3 py-1 rounded-full font-bold shadow-lg">
                    {place.date}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <motion.h3 
                    layoutId={`place-title-${place.id}`}
                    className="text-3xl font-bold uppercase tracking-tight text-white font-serif mb-2"
                  >
                    {place.title}
                  </motion.h3>
                  <p className="text-white/70 text-sm font-sans max-w-xs">{place.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* iOS-style expanding modal */}
      <AnimatePresence>
        {selectedPlace && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlace(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto"
            />
            <motion.div
              layoutId={`place-container-${selectedPlace.id}`}
              className="w-full max-w-5xl h-[80vh] md:h-[90vh] bg-[var(--bg)] border border-[var(--border-strong)] rounded-[var(--radius-lg)] overflow-hidden relative z-10 flex flex-col shadow-2xl pointer-events-auto"
              transition={spring}
            >
              <div className="flex justify-between items-start p-8 md:p-12 pb-6 shrink-0 bg-[var(--surface)] border-b border-[var(--border)]">
                <div>
                  <motion.h2 
                    layoutId={`place-title-${selectedPlace.id}`}
                    className="text-4xl font-bold uppercase tracking-tight font-serif text-[var(--fg)]"
                  >
                    {selectedPlace.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                    className="text-[var(--fg-dim)] text-base font-sans mt-3 max-w-2xl leading-relaxed"
                  >
                    {selectedPlace.description}
                  </motion.p>
                </div>
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors mono text-xs p-2 bg-[var(--bg)] rounded-full px-4 border border-[var(--border)] hover:border-[var(--accent)] whitespace-nowrap ml-4"
                >
                  FECHAR
                </button>
              </div>

              <motion.div 
                className="p-8 md:p-12 pt-8 overflow-y-auto bg-[var(--bg)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedPlace.photos.map((photo, index) => (
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
    </section>
  );
};

export default Places;