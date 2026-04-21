"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ImpactoFinal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-[#0A0A0A]">
      {/* Top divider */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: 56 }}>
          <path d="M0,0 C480,56 960,56 1440,0 L1440,0 L0,0 Z" fill="#000000" />
        </svg>
      </div>

      {/* Centered red glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-[#FF0000]/8 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase mb-8 px-3 py-1.5 bg-[#FF0000]/8 rounded-full border border-[#FF0000]/15">
            Impacto final
          </span>

          <h2 className="font-montserrat font-black text-5xl md:text-6xl text-white leading-[1.05] mb-7">
            Campanha não se improvisa.
            <br />
            <span className="text-[#FF0000]">Se estrutura.</span>
          </h2>

          <p className="text-white/55 text-xl font-inter leading-relaxed mb-12 max-w-2xl mx-auto">
            A eleição está mais disputada e mais exigente. Quem continuar no modelo antigo entra em
            desvantagem.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block bg-gradient-to-br from-[#FF0000]/15 to-[#FF0000]/5 border border-[#FF0000]/25 rounded-2xl px-8 py-6 shadow-xl shadow-red-900/10"
          >
            <p className="text-white font-montserrat font-black text-2xl md:text-3xl leading-snug">
              "Isso não é marketing.
              <br />
              É vantagem de campanha."
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: 56 }}>
          <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" fill="#000000" />
        </svg>
      </div>
    </section>
  );
}
