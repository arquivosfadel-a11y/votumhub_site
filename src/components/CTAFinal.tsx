"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

export default function CTAFinal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-[#0A0A0A] py-28 overflow-hidden">
      <div className="section-line absolute top-0 inset-x-0" />

      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-64 h-64 bg-[#CC0000]/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-64 h-64 bg-[#CC0000]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-4"
        >
          Se sua campanha quer disputar com estrutura,{" "}
          <span className="text-[#CC0000]">este é o momento.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#AAAAAA] text-lg mb-10"
        >
          Agende antes que seu adversário descubra isso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#formulario"
            className="group inline-flex items-center gap-2.5 px-9 py-4 bg-[#CC0000] hover:bg-[#FF0000] text-white font-montserrat font-bold text-base rounded transition-all duration-150 shadow-lg shadow-red-900/30">
            <Calendar size={17} />
            Agendar apresentação
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#formulario"
            className="inline-flex items-center gap-2.5 px-9 py-4 border border-white/15 hover:border-white/35 text-white font-montserrat font-semibold text-base rounded transition-all duration-150">
            <MessageCircle size={17} />
            Falar com especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
