"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Trajetoria from "@/components/sections/Trajetoria";
import Filosofia from "@/components/sections/Filosofia";
import Direito from "@/components/sections/Direito";
import Experiencias from "@/components/sections/Experiencias";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import Inspiration from "@/components/sections/Inspiration";
import PorqueDireito from "@/components/sections/PorqueDireito";
import Places from "@/components/sections/Places";
import EFConsultoria from "@/components/sections/EFConsultoria";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const { scrollY } = useScroll({
    smooth: true,
    smoothTime: 0.6,
  });

  const bgOpacity = useTransform(
    scrollY,
    [0, viewportHeight * 0.5],
    [1, 0],
  );

  useEffect(() => {
    setViewportHeight(window.innerHeight);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen text-[var(--fg)] bg-[var(--bg)] noise-overlay">
      <ScrollProgress />
      <motion.div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/bg.jpg')",
          opacity: bgOpacity,
          filter: "brightness(0.8)",
        }}
      />
      <div className="relative z-10">
        <Navbar scrollPosition={scrollPosition} />
        <Hero scrollPosition={scrollPosition} />
        <PorqueDireito />
        <Trajetoria />
        <Filosofia />
        <Direito />
        <Inspiration />
        <Experiencias />
        <EFConsultoria />
        <Places />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
