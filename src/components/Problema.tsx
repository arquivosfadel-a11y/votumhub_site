"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Users, TrendingDown, DollarSign, BarChart2 } from "lucide-react";

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

export default function Problema() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problema" ref={ref} className="py-28 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF0000]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase block mb-4">
            O problema
          </span>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-6">
            O modelo tradicional
            <br />
            está <span className="text-[#FF0000]">limitado.</span>
          </h2>
          <p className="text-[#AAAAAA] text-lg max-w-2xl font-inter leading-relaxed">
            Campanhas ainda dependem de estruturas que não escalam: lideranças locais, vereadores e
            cabos eleitorais. Esse modelo continua importante — mas é limitado. A eleição é
            construída diariamente, mas a capacidade humana não acompanha essa necessidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {pontos.map((ponto, i) => (
            <motion.div
              key={ponto.titulo}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-[#2A2A2A]/50 border border-white/5 rounded-lg p-6 hover:border-[#FF0000]/30 transition-all duration-300"
            >
              <ponto.icon size={28} className="text-[#FF0000] mb-4" strokeWidth={1.5} />
              <h3 className="font-montserrat font-bold text-white text-base mb-2">
                {ponto.titulo}
              </h3>
              <p className="text-[#AAAAAA] text-sm font-inter leading-relaxed">{ponto.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="border-l-4 border-[#FF0000] pl-6"
        >
          <p className="text-white text-xl md:text-2xl font-montserrat font-bold">
            Não é sobre substituir o modelo. É sobre fortalecer o que já existe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
