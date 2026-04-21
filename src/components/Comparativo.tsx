"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const rows = [
  { trad: "Limitação humana",              vh: "Escala contínua" },
  { trad: "Dependência de terceiros",       vh: "Estrutura própria" },
  { trad: "Sem controle da mensagem",       vh: "Mensagem controlada" },
  { trad: "Alto custo operacional",         vh: "Eficiência de investimento" },
  { trad: "Funciona por período",           vh: "Opera 24h por dia" },
  { trad: "Baixa previsibilidade",          vh: "Resultado estruturado" },
  { trad: "Usa redes sociais",              vh: "Zero dependência de redes sociais" },
];

export default function Comparativo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="comparativo" ref={ref} className="relative bg-[#0A0A0A] py-28 overflow-hidden">
      <div className="section-line absolute top-0 inset-x-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CC0000]/2 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="block text-[#CC0000] text-xs font-bold tracking-[0.25em] uppercase font-montserrat mb-5"
        >
          Comparativo
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-4"
        >
          Campanha tradicional{" "}
          <span className="text-white/25">×</span>{" "}
          <span className="text-[#CC0000]">VotumHub</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-px w-40 bg-gradient-to-r from-[#CC0000] to-transparent mb-12"
        />

        {/* Table header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 mb-1"
        >
          <div className="px-5 py-3">
            <span className="font-montserrat font-bold text-[10px] text-white/35 tracking-[0.2em] uppercase">
              Modelo Tradicional
            </span>
          </div>
          <div className="px-5 py-3 bg-[#CC0000]/8 rounded-t-lg border-t border-x border-[#CC0000]/20">
            <span className="font-montserrat font-bold text-[10px] text-[#CC0000] tracking-[0.2em] uppercase">
              VotumHub Estruturado
            </span>
          </div>
        </motion.div>

        {/* Rows */}
        <div className="rounded-lg overflow-hidden border border-[#222222]">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -18 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.07 * i + 0.35 }}
              className="grid grid-cols-2 border-b border-[#222222] last:border-0 group"
            >
              <div className="px-5 py-4 flex items-center gap-3 bg-[#111111]/50 border-r border-[#222222]">
                <X size={13} className="text-white/20 flex-shrink-0" />
                <span className="text-white/40 text-sm">{r.trad}</span>
              </div>
              <div className="px-5 py-4 flex items-center gap-3 bg-[#CC0000]/4 group-hover:bg-[#CC0000]/8 transition-colors">
                <Check size={13} className="text-[#CC0000] flex-shrink-0" />
                <span className="text-white text-sm font-medium">{r.vh}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
