"use client";

import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ title, number, subtitle }) => {
  return (
    <div className="mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {number && (
          <span className="mono text-xs text-[var(--fg-muted)] tracking-widest block mb-3">
            [{number}]
          </span>
        )}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-[var(--fg)] leading-none">
          {title}
        </h2>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="h-1 w-16 bg-[var(--accent)] mt-6 origin-left rounded-full"
        />
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mono text-sm text-[var(--fg-dim)] mt-4 tracking-wide"
          >
            // {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeader;
