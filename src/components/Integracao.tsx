"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Zap, RefreshCw } from "lucide-react";

const cols = [
  {
    icon: Users,
    titulo: "Presença no campo",
    desc: "Suas lideranças continuam atuando presencialmente. A base física permanece intacta.",
  },
  {
    icon: Zap,
    titulo: "Amplificação digital",
    desc: "O VotumHub reforça cada ação da sua base, multiplicando o alcance real.",
  },
  {
    icon: RefreshCw,
    titulo: "Continuidade garantida",
    desc: "Operação sem pausas. Quando a equipe descansa, a estrutura continua.",
  },
];

export default function Integracao() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-[#0D0000] py-28 overflow-hidden">
      <div className="section-line absolute top-0 inset-x-0" />

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#CC0000]/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#CC0000]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="block text-[#CC0000] text-xs font-bold tracking-[0.25em] uppercase font-montserrat mb-5"
        >
          Integração com Lideranças
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-4 max-w-3xl"
        >
          Sua base continua forte.
          <br />
          <span className="text-[#CC0000]">Agora com mais força.</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-px w-40 bg-gradient-to-r from-[#CC0000] to-transparent mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {cols.map((c, i) => (
            <motion.div
              key={c.titulo}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 * i + 0.25 }}
              className="group bg-[#0A0A0A]/60 border border-[#CC0000]/10 hover:border-[#CC0000]/35 rounded-lg p-7 transition-all duration-250"
            >
              <div className="w-10 h-10 bg-[#CC0000]/12 group-hover:bg-[#CC0000]/20 rounded flex items-center justify-center mb-5 transition-colors">
                <c.icon size={20} className="text-[#CC0000]" strokeWidth={1.5} />
              </div>
              <h3 className="font-montserrat font-bold text-white text-sm mb-2">{c.titulo}</h3>
              <p className="text-[#AAAAAA] text-xs leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="border-l-2 border-[#CC0000] pl-5"
        >
          <p className="font-montserrat font-bold text-lg text-white">
            "Sua liderança agora tem uma ajuda extra —{" "}
            <span className="text-[#CC0000]">todos os dias.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
