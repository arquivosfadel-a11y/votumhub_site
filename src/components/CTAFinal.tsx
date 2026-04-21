"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

export default function CTAFinal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-black overflow-hidden">
      {/* Red stripe accent top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF0000]/50 to-transparent" />

      {/* Background: red side glows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-64 h-64 bg-[#FF0000]/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-64 h-64 bg-[#FF0000]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-5">
            Se sua campanha quer disputar com estrutura,{" "}
            <span className="text-[#FF0000]">este é o momento.</span>
          </h2>
          <p className="text-white/50 text-lg font-inter mb-10 max-w-xl mx-auto">
            Não espere a eleição chegar para montar sua estrutura. A construção do voto começa
            agora.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#formulario"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#FF0000] hover:bg-[#CC0000] text-white font-montserrat font-bold text-base rounded-full transition-all duration-200 shadow-lg shadow-red-900/30"
            >
              <Calendar size={17} />
              Agendar apresentação
              <ArrowRight
                size={17}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
            <a
              href="#formulario"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-transparent border border-white/15 hover:border-white/35 text-white font-montserrat font-semibold text-base rounded-full transition-all duration-200"
            >
              <MessageCircle size={17} />
              Falar com especialista
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
