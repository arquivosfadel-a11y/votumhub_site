"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    titulo: "Cabo eleitoral dorme",
    desc: "Capacidade humana tem limite de horas. A campanha para quando ele para.",
  },
  {
    titulo: "Vereador negocia",
    desc: "Interesses próprios interferem na mensagem e no comprometimento real.",
  },
  {
    titulo: "Liderança tem alcance limitado",
    desc: "Impossível cobrir 100% da cidade com estrutura exclusivamente humana.",
  },
  {
    titulo: "Sem controle real",
    desc: "Você não sabe o que está sendo dito ao eleitor em seu nome.",
  },
];

export default function Problema() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problema" ref={ref} className="relative bg-[#111111] py-28 overflow-hidden">
      <div className="section-line absolute top-0 inset-x-0" />

      <div className="absolute right-0 top-0 w-96 h-96 bg-[#CC0000]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <span className="text-[#CC0000] text-xs font-bold tracking-[0.25em] uppercase font-montserrat">
            O Problema
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl"
        >
          O modelo tradicional tem limite.
          <br />
          <span className="text-[#CC0000]">E esse limite custa votos.</span>
        </motion.h2>

        {/* Red growing line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-px w-48 bg-gradient-to-r from-[#CC0000] to-transparent mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#AAAAAA] text-lg max-w-2xl leading-relaxed mb-14"
        >
          Campanhas ainda dependem de cabos eleitorais que dormem, vereadores que negociam e
          lideranças que têm capacidade limitada. Esse modelo tem seu valor — mas não escala.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {cards.map((c, i) => (
            <motion.div
              key={c.titulo}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 * i + 0.3 }}
              className="group bg-[#0A0A0A] border border-[#222222] hover:border-[#CC0000]/40 rounded-lg p-6 transition-all duration-250"
            >
              <div className="w-2 h-2 rounded-full bg-[#CC0000] mb-4 group-hover:scale-125 transition-transform" />
              <h3 className="font-montserrat font-bold text-white text-sm mb-2 leading-snug">
                {c.titulo}
              </h3>
              <p className="text-[#AAAAAA] text-xs leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact phrase */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-l-2 border-[#CC0000] pl-5"
        >
          <p className="font-montserrat font-bold text-xl text-white">
            Não é sobre substituir.{" "}
            <span className="text-[#AAAAAA] font-medium">É sobre não depender.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
