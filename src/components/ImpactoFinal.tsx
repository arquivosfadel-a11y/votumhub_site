"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ImpactoFinal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-[#FF0000]/6 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase block mb-8">
            Impacto final
          </span>

          <h2 className="font-montserrat font-black text-5xl md:text-6xl text-white leading-tight mb-8">
            Campanha não se improvisa.{" "}
            <span className="text-[#FF0000]">Se estrutura.</span>
          </h2>

          <p className="text-[#AAAAAA] text-xl font-inter leading-relaxed mb-10 max-w-2xl mx-auto">
            A eleição está mais disputada e mais exigente. Quem continuar no modelo antigo entra em
            desvantagem.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-xl px-8 py-5"
          >
            <p className="text-white font-montserrat font-bold text-2xl md:text-3xl">
              "Isso não é marketing. É vantagem de campanha."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
