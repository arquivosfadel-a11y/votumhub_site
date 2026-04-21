"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const blocos = [
  {
    numero: "01",
    titulo: "Campanha estruturada.",
    desc: "Uma base organizada e contínua que sustenta cada ação da sua campanha.",
  },
  {
    numero: "02",
    titulo: "Eleitor trabalhado.",
    desc: "Presença constante e individual com cada eleitor, todos os dias.",
  },
  {
    numero: "03",
    titulo: "Voto construído.",
    desc: "Resultado gerado pela soma de estrutura, escala e continuidade.",
  },
];

export default function Solucao() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solucao" ref={ref} className="relative py-28 bg-black overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF0000]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase mb-4 px-3 py-1.5 bg-[#FF0000]/8 rounded-full border border-[#FF0000]/15">
              A solução
            </span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-6">
              Uma estrutura criada para{" "}
              <span className="text-[#FF0000]">conquistar votos.</span>
            </h2>
            <p className="text-white/55 text-lg font-inter leading-relaxed">
              O VotumHub reúne diversas tecnologias em um único ecossistema que atua continuamente
              sobre o eleitor. Enquanto campanhas tradicionais operam com limitações humanas, o
              VotumHub amplia essa capacidade com organização, escala e continuidade.
            </p>
          </motion.div>

          {/* Right cards */}
          <div className="flex flex-col gap-4">
            {blocos.map((bloco, i) => (
              <motion.div
                key={bloco.numero}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="group bg-white/[0.03] border border-white/8 hover:border-[#FF0000]/35 rounded-xl p-6 flex items-start gap-5 transition-all duration-300 hover:bg-white/[0.05]"
              >
                <span className="font-montserrat font-black text-4xl text-[#FF0000]/20 group-hover:text-[#FF0000]/50 transition-colors min-w-[48px] leading-none">
                  {bloco.numero}
                </span>
                <div>
                  <h3 className="font-montserrat font-bold text-white text-lg mb-1">
                    {bloco.titulo}
                  </h3>
                  <p className="text-white/50 text-sm font-inter leading-relaxed">{bloco.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
