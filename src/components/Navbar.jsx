"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import Image from "next/image";

const spring = { type: "spring", stiffness: 400, damping: 30 };

const navItems = [
  { name: "Início", to: "hero" },
  { name: "História", to: "porque-direito" },
  { name: "Trajetória", to: "trajetoria" },
  { name: "Filosofia", to: "filosofia" },
  { name: "Direito", to: "direito" },
  { name: "Inspirações", to: "inspiration" },
  { name: "Experiências", to: "experiencias" },
  { name: "Lugares", to: "lugares" },
  { name: "Contato", to: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = 0;
    let scrollTimer = null;
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 80 || y < lastY);
      lastY = y;

      // Debounce both scrolled state and active section detection
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const sy = window.scrollY;
        setScrolled(sy > 80);

        for (let i = navItems.length - 1; i >= 0; i--) {
          const el = document.getElementById(navItems[i].to);
          if (el && el.offsetTop <= sy + window.innerHeight / 3) {
            setActiveSection(navItems[i].to);
            break;
          }
        }
      }, 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  // ─── DESKTOP ───
  // Transparent at hero, glass floating pill when scrolled
  const renderDesktop = () => (
    <motion.header
      animate={{
        y: scrolled ? 20 : 8,
        backgroundColor: scrolled ? "rgba(10,10,10,0.8)" : "rgba(0,0,0,0)",
        borderColor: scrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0)",
        backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-1 rounded-full border px-3 py-1.5"
    >
      {/* Logo */}
      <Link
        to="hero"
        smooth
        duration={1000}
        className="cursor-pointer w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 hover:bg-white/20 transition-colors"
      >
        <Image src="/logo.png" alt="GC" width={18} height={18} className="object-contain brightness-200" />
      </Link>

      {/* Nav Links */}
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          smooth
          duration={1000}
          offset={-100}
          spy
          onSetActive={() => setActiveSection(item.to)}
          className="relative px-3.5 py-1.5 cursor-pointer rounded-full group"
        >
          {activeSection === item.to && (
            <motion.div
              layoutId="pill"
              className="absolute inset-0 rounded-full bg-white/12 ring-1 ring-white/10"
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
            />
          )}
          <span
            className={`relative z-10 text-[11px] font-mono font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
              activeSection === item.to
                ? "text-white"
                : "text-white/40 group-hover:text-white/70"
            }`}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </motion.header>
  );

  // ─── MOBILE (Dynamic Island) ───
  const renderMobile = () => (
    <motion.header
      animate={{ y: visible || mobileOpen ? 0 : -200 }}
      transition={spring}
      className="fixed top-5 left-4 right-4 z-50 lg:hidden"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 350, damping: 32 }}
        className={`bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden ${
          mobileOpen ? "rounded-[28px]" : "rounded-full"
        }`}
      >
        {/* Top bar */}
        <motion.div layout="position" className="flex items-center justify-between px-4 py-3">
          <Link
            to="hero"
            smooth
            duration={1000}
            className="cursor-pointer w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            <Image src="/logo.png" alt="GC" width={18} height={18} className="object-contain brightness-200" />
          </Link>

          {/* Section Name — iOS swap */}
          <div className="flex-1 mx-3 overflow-hidden h-5 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeSection}
                initial={{ y: 10, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -10, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                className="absolute font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/60"
              >
                {navItems.find((n) => n.to === activeSection)?.name ?? ""}
              </motion.span>
            </AnimatePresence>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform shrink-0"
            aria-label="Menu"
          >
            <div className="w-3.5 flex flex-col justify-center items-center gap-[4px]">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                transition={spring}
                className="block w-3.5 h-[1.5px] bg-white rounded-full origin-center"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                transition={spring}
                className="block w-3.5 h-[1.5px] bg-white rounded-full origin-center"
              />
            </div>
          </button>
        </motion.div>

        {/* Expandable menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="overflow-hidden"
            >
              <div className="px-3 pb-4 pt-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -4, filter: "blur(4px)" }}
                    transition={{ delay: i * 0.03, type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <Link
                      to={item.to}
                      smooth
                      duration={800}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                        activeSection === item.to
                          ? "bg-white/10 text-white"
                          : "text-white/60 active:bg-white/5"
                      }`}
                    >
                      <span className="font-serif text-[17px] font-light">{item.name}</span>
                      {activeSection === item.to && (
                        <motion.div
                          layoutId="mobileDot"
                          className="w-1.5 h-1.5 rounded-full bg-white"
                          transition={spring}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );

  return (
    <>
      {renderDesktop()}
      {renderMobile()}
    </>
  );
};

export default Navbar;
