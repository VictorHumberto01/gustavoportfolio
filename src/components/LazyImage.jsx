"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const spring = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 };

const LazyImage = ({ src, alt, className = "", caption, index = 0 }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ ...spring, delay: 0.1 + index * 0.05 }}
      className={`relative aspect-video overflow-hidden group cursor-pointer rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] ${className}`}
    >
      {/* Skeleton placeholder */}
      <AnimatePresence>
        {!loaded && !error && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--surface)]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--surface-hover), transparent)",
                }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-[var(--surface)] flex items-center justify-center">
          <span className="mono text-[10px] tracking-widest text-[var(--fg-muted)] uppercase">
            Erro ao carregar
          </span>
        </div>
      )}

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      />

      {/* Caption overlay */}
      {caption && loaded && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={spring}
        >
          <p className="mono text-xs text-white/90 font-medium tracking-wide">{caption}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LazyImage;
