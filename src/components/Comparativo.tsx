"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const linhas = [
  {
    tradicional: "Limitação humana",
    votumhub: "Escala contínua",
  },
  {
    tradicional: "Dependência de terceiros",
    votumhub: "Estrutura própria",
  },
  {
    tradicional: "Falta de controle",
    votumhub: "Organização total",
  },
  {
    tradicional: "Alto custo operacional",
    votumhub: "Eficiência de investimento",
  },
  {
    tradicional: "Atuação por período",
    votumhub: "Operação 24h por dia",
  },
  {
    tradicional: "Baixa previsibilidade",
    votumhub: "Resultado estruturado",
  },
];

export default function Comparativo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="comparativo" ref={ref} className="py-28 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#FF0000]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase block mb-4">
            Comparativo
          </span>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight">
            Campanha tradicional{" "}
            <span className="text-[#AAAAAA]">x</span>{" "}
            <span className="text-[#FF0000]">campanha estruturada</span>
          </h2>
        </motion.div>

        {/* Header da tabela */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 mb-3"
        >
          <div className="px-6 py-3">
            <span className="font-montserrat font-bold text-sm text-[#AAAAAA] uppercase tracking-wider">
              Modelo Tradicional
            </span>
          </div>
          <div className="px-6 py-3 bg-[#FF0000]/10 rounded-t-lg border-t border-x border-[#FF0000]/20">
            <span className="font-montserrat font-bold text-sm text-[#FF0000] uppercase tracking-wider">
              VotumHub Estruturado
            </span>
          </div>
        </motion.div>

        {/* Linhas da tabela */}
        <div className="rounded-lg overflow-hidden border border-white/5">
          {linhas.map((linha, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
              className="grid grid-cols-2 border-b border-white/5 last:border-0"
            >
              <div className="px-6 py-5 flex items-center gap-3 bg-[#2A2A2A]/10 border-r border-white/5">
                <X size={16} className="text-[#AAAAAA]/50 flex-shrink-0" />
                <span className="text-[#AAAAAA] font-inter text-sm">{linha.tradicional}</span>
              </div>
              <div className="px-6 py-5 flex items-center gap-3 bg-[#FF0000]/5 hover:bg-[#FF0000]/8 transition-colors">
                <Check size={16} className="text-[#FF0000] flex-shrink-0" />
                <span className="text-white font-inter text-sm font-medium">{linha.votumhub}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
