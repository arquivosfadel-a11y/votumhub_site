"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, UserCheck, Globe, LayoutDashboard, TrendingUp, Target } from "lucide-react";

const cards = [
  {
    icon: Clock,
    titulo: "Atuação contínua",
    desc: "O sistema opera 24h por dia mantendo presença constante na mente do eleitor.",
  },
  {
    icon: UserCheck,
    titulo: "Trabalho individual",
    desc: "Atuação eleitor por eleitor, impossível de replicar manualmente.",
  },
  {
    icon: Globe,
    titulo: "Escala real",
    desc: "Capacidade de atuação em toda a cidade, sem limitação geográfica.",
  },
  {
    icon: LayoutDashboard,
    titulo: "Operação centralizada",
    desc: "Tudo organizado em um único ambiente, com total visibilidade.",
  },
  {
    icon: TrendingUp,
    titulo: "Eficiência de investimento",
    desc: "Redução de custos operacionais com resultados proporcionais à escala.",
  },
  {
    icon: Target,
    titulo: "Foco no objetivo",
    desc: "Não é sobre aparecer. É sobre conquistar voto.",
  },
];

export default function ComoFunciona() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="como-funciona" ref={ref} className="py-28 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF0000]/4 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase block mb-4">
            Como funciona
          </span>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight">
            Uma estrutura que trabalha pelo seu voto{" "}
            <span className="text-[#FF0000]">todos os dias.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.titulo}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className="group relative bg-[#2A2A2A]/20 border border-white/5 hover:border-[#FF0000]/30 rounded-xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF0000]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <card.icon
                size={32}
                className="text-[#FF0000] mb-5"
                strokeWidth={1.5}
              />
              <h3 className="font-montserrat font-bold text-white text-lg mb-2">{card.titulo}</h3>
              <p className="text-[#AAAAAA] text-sm font-inter leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
