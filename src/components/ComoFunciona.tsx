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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ComoFunciona() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="como-funciona"
      ref={ref}
      className="relative py-28 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Top divider */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: 56 }}>
          <path d="M0,0 C480,56 960,56 1440,0 L1440,0 L0,0 Z" fill="#000000" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#FF0000]/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase mb-4 px-3 py-1.5 bg-[#FF0000]/8 rounded-full border border-[#FF0000]/15">
            Como funciona
          </span>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight">
            Uma estrutura que trabalha pelo seu voto{" "}
            <span className="text-[#FF0000]">todos os dias.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {cards.map((card) => (
            <motion.div
              key={card.titulo}
              variants={cardVariants}
              className="group relative bg-white/[0.03] border border-white/8 hover:border-[#FF0000]/30 rounded-xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF0000]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="w-11 h-11 bg-[#FF0000]/10 group-hover:bg-[#FF0000]/18 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300">
                <card.icon size={22} className="text-[#FF0000]" strokeWidth={1.5} />
              </div>
              <h3 className="font-montserrat font-bold text-white text-base mb-2">{card.titulo}</h3>
              <p className="text-white/50 text-sm font-inter leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
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
