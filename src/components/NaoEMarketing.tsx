"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X } from "lucide-react";

const itens = [
  "Marketing Digital",
  "Redes Sociais",
  "Impulsionamento",
  "Tráfego Pago",
  "Engajamento",
];

export default function NaoEMarketing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative bg-[#0D0000] py-20 overflow-hidden">
      <div className="section-line absolute top-0 inset-x-0" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[300px] bg-[#CC0000]/8 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="font-montserrat font-black text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            <span className="text-[#CC0000]">Não é</span> marketing digital.
            <br />
            É <span className="relative inline-block">
              <span className="text-white">presença física digitalizada.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#CC0000] to-transparent"
              />
            </span>
          </p>
        </motion.div>

        {/* "Not" items */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {itens.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i + 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#CC0000]/8 border border-[#CC0000]/20 rounded"
            >
              <X size={12} className="text-[#CC0000]" strokeWidth={3} />
              <span className="font-montserrat font-bold text-xs text-white/50 tracking-wider uppercase line-through decoration-[#CC0000]/50">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 justify-center mb-10"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#CC0000]" />
          <span className="text-[#CC0000] font-montserrat font-black text-sm tracking-[0.25em] uppercase">
            O que é então?
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#CC0000]" />
        </motion.div>

        {/* What it IS */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.6 }}
          className="font-montserrat font-black text-2xl md:text-3xl text-white leading-tight"
        >
          É uma{" "}
          <span className="text-[#CC0000]">máquina de guerra eleitoral</span>
          <br className="hidden sm:block" />
          {" "}que atinge{" "}
          <span className="text-white">100% da cidade</span>
          {" "}— voto por voto.
        </motion.p>
      </div>

      <div className="section-line absolute bottom-0 inset-x-0 rotate-180" />
    </section>
  );
}
