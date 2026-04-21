"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake, Zap, RefreshCw } from "lucide-react";

const items = [
  {
    icon: Handshake,
    titulo: "Presença no campo",
    texto: "Suas lideranças continuam atuando presencialmente no campo.",
  },
  {
    icon: Zap,
    titulo: "Amplificação digital",
    texto: "O VotumHub reforça e amplifica cada ação realizada pela sua base.",
  },
  {
    icon: RefreshCw,
    titulo: "Continuidade garantida",
    texto: "Organização contínua que garante resultado todos os dias.",
  },
];

export default function Liderancas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-black overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#FF0000]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: cards */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/8 rounded-xl hover:border-[#FF0000]/25 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#FF0000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-[#FF0000]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white font-montserrat font-semibold text-sm mb-0.5">
                    {item.titulo}
                  </p>
                  <p className="text-white/50 font-inter text-sm leading-relaxed">{item.texto}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase mb-4 px-3 py-1.5 bg-[#FF0000]/8 rounded-full border border-[#FF0000]/15">
              Integração com lideranças
            </span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-6">
              Sua base continua forte.{" "}
              <span className="text-[#FF0000]">Agora com mais força ainda.</span>
            </h2>
            <p className="text-white/55 text-lg font-inter leading-relaxed mb-8">
              O VotumHub não substitui suas lideranças. Ele potencializa. Enquanto suas lideranças
              atuam presencialmente, o ecossistema reforça, organiza e amplia esse trabalho.
            </p>
            <div className="inline-block border-l-4 border-[#FF0000] pl-5 py-1">
              <p className="text-white font-montserrat font-bold text-lg leading-snug">
                "Sua liderança agora tem uma ajuda extra — todos os dias."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
