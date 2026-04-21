"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake, Zap, RefreshCw } from "lucide-react";

const items = [
  {
    icon: Handshake,
    texto: "Suas lideranças continuam atuando presencialmente no campo.",
  },
  {
    icon: Zap,
    texto: "O VotumHub reforça e amplifica cada ação realizada pela sua base.",
  },
  {
    icon: RefreshCw,
    texto: "Organização contínua que garante resultado todos os dias.",
  },
];

export default function Liderancas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF0000]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-5">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="flex items-start gap-4 p-5 bg-[#2A2A2A]/20 border border-white/5 rounded-lg"
              >
                <div className="w-10 h-10 bg-[#FF0000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-[#FF0000]" strokeWidth={1.5} />
                </div>
                <p className="text-[#AAAAAA] font-inter leading-relaxed">{item.texto}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase block mb-4">
              Integração com lideranças
            </span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-6">
              Sua base continua forte.{" "}
              <span className="text-[#FF0000]">Agora com mais força ainda.</span>
            </h2>
            <p className="text-[#AAAAAA] text-lg font-inter leading-relaxed mb-8">
              O VotumHub não substitui suas lideranças. Ele potencializa. Enquanto suas lideranças
              atuam presencialmente, o ecossistema reforça, organiza e amplia esse trabalho.
            </p>
            <div className="inline-block border-l-4 border-[#FF0000] pl-5">
              <p className="text-white font-montserrat font-bold text-xl">
                "Sua liderança agora tem uma ajuda extra — todos os dias."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
