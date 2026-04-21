"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Impacto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-[#1A0000] py-32 overflow-hidden">
      <div className="section-line absolute top-0 inset-x-0" />

      {/* Centered glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[450px] bg-[#CC0000]/12 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="block text-[#CC0000] text-xs font-bold tracking-[0.25em] uppercase font-montserrat mb-8"
        >
          Impacto Final
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-montserrat font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.0] mb-5"
        >
          Campanha não se improvisa.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="font-montserrat font-black text-5xl md:text-6xl lg:text-7xl text-[#CC0000] leading-[1.0] mb-10"
        >
          Se estrutura.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          style={{ originX: 0.5 }}
          className="h-px w-32 bg-gradient-to-r from-transparent via-[#CC0000] to-transparent mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#AAAAAA] text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          A eleição está mais disputada e mais exigente. Quem continuar no modelo antigo entra em
          desvantagem competitiva.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="inline-block bg-[#CC0000]/10 border border-[#CC0000]/25 rounded-lg px-8 py-6"
        >
          <p className="font-montserrat font-black text-2xl md:text-3xl text-white leading-snug">
            "Isso não é marketing.
            <br />
            É <span className="text-[#CC0000]">vantagem de campanha.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
