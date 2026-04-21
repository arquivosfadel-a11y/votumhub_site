"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blocos = [
  {
    tag: "01",
    titulo: "ELEITOR TRABALHADO",
    desc: "Contato individual com cada eleitor da cidade. Voto por voto, sem exceção.",
  },
  {
    tag: "02",
    titulo: "MENSAGEM CONTROLADA",
    desc: "Você define exatamente o que é dito ao eleitor. Nenhum intermediário distorce.",
  },
  {
    tag: "03",
    titulo: "ESCALA SEM LIMITE",
    desc: "Toda a cidade, todos os dias. Sem limitação geográfica ou humana.",
  },
];

export default function Solucao() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solucao" ref={ref} className="relative bg-[#0A0A0A] py-28 overflow-hidden">
      <div className="section-line absolute top-0 inset-x-0" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#CC0000]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="block text-[#CC0000] text-xs font-bold tracking-[0.25em] uppercase font-montserrat mb-5"
            >
              A Solução
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-4"
            >
              Uma estrutura que trabalha
              <br />
              <span className="text-[#CC0000]">enquanto você dorme.</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="h-px w-40 bg-gradient-to-r from-[#CC0000] to-transparent mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-[#AAAAAA] text-base leading-relaxed"
            >
              O VotumHub reúne tecnologia e estratégia em um único ecossistema que opera
              continuamente, ampliando o alcance humano da campanha.
            </motion.p>
          </div>

          {/* Right: big blocks */}
          <div className="flex flex-col gap-4">
            {blocos.map((b, i) => (
              <motion.div
                key={b.tag}
                initial={{ opacity: 0, x: 36 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i + 0.2 }}
                className="group flex items-start gap-5 bg-[#111111] border border-[#222222] hover:border-[#CC0000]/40 rounded-lg p-6 transition-all duration-250"
              >
                <span className="font-montserrat font-black text-3xl text-[#CC0000]/20 group-hover:text-[#CC0000]/50 transition-colors flex-shrink-0 leading-none">
                  {b.tag}
                </span>
                <div>
                  <h3 className="font-montserrat font-black text-white text-base tracking-wider mb-1.5">
                    {b.titulo}
                  </h3>
                  <p className="text-[#AAAAAA] text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
