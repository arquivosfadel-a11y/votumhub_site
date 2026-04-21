"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const linhas = [
  { tradicional: "Limitação humana",        votumhub: "Escala contínua" },
  { tradicional: "Dependência de terceiros", votumhub: "Estrutura própria" },
  { tradicional: "Falta de controle",        votumhub: "Organização total" },
  { tradicional: "Alto custo operacional",   votumhub: "Eficiência de investimento" },
  { tradicional: "Atuação por período",      votumhub: "Operação 24h por dia" },
  { tradicional: "Baixa previsibilidade",    votumhub: "Resultado estruturado" },
];

export default function Comparativo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="comparativo"
      ref={ref}
      className="relative py-28 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Top divider */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: 56 }}>
          <path d="M0,0 C360,56 1080,56 1440,0 L1440,0 L0,0 Z" fill="#000000" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF0000]/3 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase mb-4 px-3 py-1.5 bg-[#FF0000]/8 rounded-full border border-[#FF0000]/15">
            Comparativo
          </span>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight">
            Campanha tradicional{" "}
            <span className="text-white/30">×</span>{" "}
            <span className="text-[#FF0000]">campanha estruturada</span>
          </h2>
        </motion.div>

        {/* Table header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 mb-2 px-1"
        >
          <div className="px-5 py-3">
            <span className="font-montserrat font-bold text-xs text-white/40 uppercase tracking-widest">
              Modelo Tradicional
            </span>
          </div>
          <div className="px-5 py-3 bg-[#FF0000]/8 rounded-t-lg border-t border-x border-[#FF0000]/20">
            <span className="font-montserrat font-bold text-xs text-[#FF0000] uppercase tracking-widest">
              VotumHub Estruturado
            </span>
          </div>
        </motion.div>

        {/* Table rows */}
        <div className="rounded-xl overflow-hidden border border-white/6">
          {linhas.map((linha, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
              className="grid grid-cols-2 border-b border-white/5 last:border-0 group"
            >
              <div className="px-5 py-4 flex items-center gap-3 bg-white/[0.015] border-r border-white/5">
                <X size={14} className="text-white/25 flex-shrink-0" />
                <span className="text-white/45 font-inter text-sm">{linha.tradicional}</span>
              </div>
              <div className="px-5 py-4 flex items-center gap-3 bg-[#FF0000]/[0.04] group-hover:bg-[#FF0000]/[0.07] transition-colors">
                <Check size={14} className="text-[#FF0000] flex-shrink-0" />
                <span className="text-white font-inter text-sm font-medium">{linha.votumhub}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: 56 }}>
          <path d="M0,56 C360,0 1080,0 1440,56 L1440,56 L0,56 Z" fill="#000000" />
        </svg>
      </div>
    </section>
  );
}
