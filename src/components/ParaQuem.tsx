"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Globe, Briefcase, Users } from "lucide-react";

const perfis = [
  { icon: Building2, titulo: "Deputado Estadual",        desc: "Presença contínua em múltiplos municípios da região." },
  { icon: Globe,     titulo: "Deputado Federal",         desc: "Estrutura que escala a atuação em toda a circunscrição." },
  { icon: Briefcase, titulo: "Assessor Político",        desc: "Ferramentas para organizar e ampliar o trabalho de campo." },
  { icon: Users,     titulo: "Coordenador de Campanha",  desc: "Visão centralizada para controlar toda a operação." },
];

export default function ParaQuem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-[#111111] py-28 overflow-hidden">
      <div className="section-line absolute top-0 inset-x-0" />

      <div className="absolute top-0 left-0 w-80 h-80 bg-[#CC0000]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#CC0000]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="block text-[#CC0000] text-xs font-bold tracking-[0.25em] uppercase font-montserrat mb-5"
        >
          Para Quem É
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-4"
        >
          Feito para quem leva
          <br />
          <span className="text-[#CC0000]">campanha a sério.</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-px w-40 bg-gradient-to-r from-[#CC0000] to-transparent mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {perfis.map((p, i) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 * i + 0.25 }}
              className="group bg-[#0A0A0A] border border-[#222222] hover:border-[#CC0000]/40 rounded-lg p-7 flex flex-col items-center text-center gap-4 transition-all duration-250 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#CC0000]/10 group-hover:bg-[#CC0000]/20 rounded-lg flex items-center justify-center transition-colors duration-250">
                <p.icon size={22} className="text-[#CC0000]" strokeWidth={1.5} />
              </div>
              <h3 className="font-montserrat font-bold text-white text-sm leading-snug">{p.titulo}</h3>
              <p className="text-[#AAAAAA] text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
