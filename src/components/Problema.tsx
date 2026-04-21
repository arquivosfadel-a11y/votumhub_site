"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Users, DollarSign, BarChart2 } from "lucide-react";

const pontos = [
  {
    icon: Users,
    titulo: "Dependência de terceiros",
    desc: "Lideranças e cabos eleitorais controlam o acesso ao eleitor.",
  },
  {
    icon: AlertTriangle,
    titulo: "Falta de controle",
    desc: "Nenhuma visibilidade real sobre o que está sendo feito no campo.",
  },
  {
    icon: DollarSign,
    titulo: "Alto custo",
    desc: "Estrutura inflada sem garantia de resultado proporcional.",
  },
  {
    icon: BarChart2,
    titulo: "Baixa previsibilidade",
    desc: "Impossível escalar ou prever resultados com o modelo tradicional.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Problema() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="problema"
      ref={ref}
      className="relative py-28 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Top divider */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: 56 }}>
          <path d="M0,0 C360,56 1080,56 1440,0 L1440,0 L0,0 Z" fill="#000000" />
        </svg>
      </div>

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF0000]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-[300px] h-[300px] bg-[#FF0000]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="inline-block text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase mb-4 px-3 py-1.5 bg-[#FF0000]/8 rounded-full border border-[#FF0000]/15">
            O problema
          </span>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-5">
            O modelo tradicional
            <br />
            está <span className="text-[#FF0000]">limitado.</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl font-inter leading-relaxed">
            Campanhas ainda dependem de estruturas que não escalam: lideranças locais, vereadores e
            cabos eleitorais. Esse modelo continua importante — mas é limitado. A eleição é
            construída diariamente, mas a capacidade humana não acompanha essa necessidade.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {pontos.map((ponto) => (
            <motion.div
              key={ponto.titulo}
              variants={cardVariants}
              className="group relative bg-white/[0.03] border border-white/8 rounded-xl p-6 hover:border-[#FF0000]/30 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/0 to-[#FF0000]/0 group-hover:from-[#FF0000]/5 transition-all duration-500 rounded-xl" />
              <ponto.icon size={26} className="text-[#FF0000] mb-4 relative z-10" strokeWidth={1.5} />
              <h3 className="font-montserrat font-bold text-white text-sm mb-2 relative z-10">
                {ponto.titulo}
              </h3>
              <p className="text-white/50 text-sm font-inter leading-relaxed relative z-10">
                {ponto.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="border-l-4 border-[#FF0000] pl-6 py-1"
        >
          <p className="text-white text-xl md:text-2xl font-montserrat font-bold leading-snug">
            Não é sobre substituir o modelo.{" "}
            <span className="text-white/60">É sobre fortalecer o que já existe.</span>
          </p>
        </motion.div>
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
