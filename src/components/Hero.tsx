"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red glow top-left */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF0000]/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Subtle glow bottom-right */}
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FF0000]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#2A2A2A] rounded-full border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse" />
          <span className="text-xs text-[#AAAAAA] font-inter tracking-widest uppercase">
            In9vi · VotumHub
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-montserrat font-black text-5xl md:text-7xl leading-[1.05] tracking-tight text-white mb-6"
        >
          Isso não é{" "}
          <span className="text-[#FF0000]">marketing digital.</span>
          <br />
          É construção de voto.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[#AAAAAA] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-inter"
        >
          O VotumHub é um ecossistema que trabalha 24 horas por dia conectando o candidato ao
          eleitor e estruturando a campanha para conquistar votos em escala.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#formulario"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#FF0000] hover:bg-[#CC0000] text-white font-montserrat font-bold text-base rounded transition-all duration-200"
          >
            Quero conhecer o VotumHub
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#formulario"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white font-montserrat font-semibold text-base rounded transition-all duration-200"
          >
            <Calendar size={18} />
            Agendar apresentação
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative"
        >
          <div className="h-px w-24 bg-[#FF0000] mx-auto mb-6" />
          <p className="text-[#AAAAAA] text-sm md:text-base font-inter italic">
            "Enquanto sua campanha descansa, o VotumHub continua trabalhando."
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
