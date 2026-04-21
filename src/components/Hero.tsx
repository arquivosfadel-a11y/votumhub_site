"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ to, suffix = "", duration = 2200 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { value: 100, suffix: "%", label: "da cidade alcançada" },
  { value: 24,  suffix: "h", label: "por dia, 7 dias por semana" },
  { value: 0,   suffix: "",  label: "dependência de redes sociais" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#CC0000 1px,transparent 1px),linear-gradient(90deg,#CC0000 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }} />

      {/* Glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-[#CC0000]/8 rounded-full blur-[120px] pointer-events-none" />
      {/* Glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#CC0000]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
        {/* Badge */}
        <div className="anim-1 inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-sm bg-[#CC0000]/10 border border-[#CC0000]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000] animate-pulse" />
          <span className="text-[#CC0000] text-xs font-bold tracking-[0.2em] uppercase font-montserrat">
            Eleições 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="anim-2 font-montserrat font-black text-white leading-[1.0] tracking-tight
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          Sua campanha está
          <br />em toda a cidade.
          <br />
          <span className="text-[#CC0000]">Ou está perdendo votos.</span>
        </h1>

        {/* Red line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.6, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-px w-full max-w-xs mx-auto mb-8 bg-gradient-to-r from-[#CC0000] to-transparent"
        />

        {/* Subheadline */}
        <p className="anim-3 text-[#AAAAAA] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          O VotumHub atinge 100% de uma cidade de forma controlada, criando contato diário com o
          eleitor — sem redes sociais, sem marketing digital.
        </p>

        {/* CTAs */}
        <div className="anim-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#formulario"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#CC0000] hover:bg-[#FF0000] text-white font-montserrat font-bold text-base rounded transition-all duration-150 shadow-lg shadow-red-900/30">
            Quero conhecer
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
          <a href="#como-funciona"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/50 text-white font-montserrat font-semibold text-base rounded transition-all duration-150">
            Ver como funciona
          </a>
        </div>

        {/* Tagline */}
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#AAAAAA]/60 font-montserrat">
            Inteligência que vence eleições.
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-lg overflow-hidden border border-white/5">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0A0A0A] px-8 py-8 text-center">
              <p className="font-montserrat font-black text-4xl md:text-5xl text-white mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[#AAAAAA] text-xs uppercase tracking-widest font-inter">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
}
