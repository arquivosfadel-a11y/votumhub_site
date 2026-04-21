"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Map, LayoutDashboard, TrendingUp, Award } from "lucide-react";

const cards = [
  { icon: Zap,             titulo: "Atuação 24h",          desc: "Opera continuamente sem pausas ou limitações humanas." },
  { icon: Target,          titulo: "Eleitor por eleitor",   desc: "Contato individual impossível de replicar manualmente." },
  { icon: Map,             titulo: "Escala total",          desc: "100% da cidade coberta sem limitação geográfica." },
  { icon: LayoutDashboard, titulo: "Operação centralizada", desc: "Tudo visível em um único ambiente de controle." },
  { icon: TrendingUp,      titulo: "Eficiência",            desc: "Redução de custos com resultado proporcional à escala." },
  { icon: Award,           titulo: "Foco no voto",          desc: "Não é sobre aparecer. É sobre conquistar voto." },
];

export default function ComoFunciona() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-funciona" ref={ref} className="relative bg-[#111111] py-28 overflow-hidden">
      <div className="section-line absolute top-0 inset-x-0" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-[#CC0000]/4 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="block text-[#CC0000] text-xs font-bold tracking-[0.25em] uppercase font-montserrat mb-5"
        >
          Como Funciona
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl"
        >
          Uma estrutura que trabalha
          <br />
          pelo seu voto <span className="text-[#CC0000]">todos os dias.</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-px w-40 bg-gradient-to-r from-[#CC0000] to-transparent mb-14"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.titulo}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 * i + 0.2 }}
              className="group bg-[#0A0A0A] border border-[#222222] hover:border-[#CC0000]/40 rounded-lg p-7 transition-all duration-250 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-[#CC0000]/10 group-hover:bg-[#CC0000]/18 rounded flex items-center justify-center mb-5 transition-colors">
                <c.icon size={20} className="text-[#CC0000]" strokeWidth={1.5} />
              </div>
              <h3 className="font-montserrat font-bold text-white text-sm mb-2">{c.titulo}</h3>
              <p className="text-[#AAAAAA] text-xs leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
