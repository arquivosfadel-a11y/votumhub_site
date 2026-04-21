"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Globe, Briefcase, Users } from "lucide-react";

const perfis = [
  {
    icon: Building2,
    titulo: "Deputados Estaduais",
    desc: "Campanhas que precisam de presença contínua em múltiplos municípios.",
  },
  {
    icon: Globe,
    titulo: "Deputados Federais",
    desc: "Estrutura para escalar a atuação em toda a região eleitoral.",
  },
  {
    icon: Briefcase,
    titulo: "Assessores",
    desc: "Ferramentas para organizar e amplificar o trabalho de campo.",
  },
  {
    icon: Users,
    titulo: "Coordenadores",
    desc: "Visão centralizada para controlar toda a operação de campanha.",
  },
];

export default function ParaQuem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FF0000]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase block mb-4">
            Para quem é
          </span>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight">
            Feito para quem leva{" "}
            <span className="text-[#FF0000]">campanha a sério.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {perfis.map((perfil, i) => (
            <motion.div
              key={perfil.titulo}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group bg-[#2A2A2A]/20 border border-white/5 hover:border-[#FF0000]/30 rounded-xl p-8 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#FF0000]/10 group-hover:bg-[#FF0000]/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                <perfil.icon size={28} className="text-[#FF0000]" strokeWidth={1.5} />
              </div>
              <h3 className="font-montserrat font-bold text-white text-base">{perfil.titulo}</h3>
              <p className="text-[#AAAAAA] text-sm font-inter leading-relaxed">{perfil.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
