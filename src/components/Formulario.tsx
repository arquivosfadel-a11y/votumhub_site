"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const tiposCampanha = [
  "Deputado Estadual",
  "Deputado Federal",
  "Vereador",
  "Prefeito",
  "Senador",
  "Outro",
];

export default function Formulario() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    cargo: "",
    cidade: "",
    telefone: "",
    tipo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section id="formulario" ref={ref} className="py-28 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF0000]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase block mb-4">
            Contato
          </span>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-4">
            Aplique na{" "}
            <span className="text-[#FF0000]">sua campanha</span>
          </h2>
          <p className="text-[#AAAAAA] font-inter">
            Preencha os campos abaixo e nossa equipe entrará em contato.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-[#2A2A2A]/20 border border-white/8 rounded-2xl p-8"
        >
          {!enviado ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-montserrat font-semibold text-[#AAAAAA] uppercase tracking-wider">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className="bg-[#2A2A2A]/60 border border-white/10 focus:border-[#FF0000]/50 text-white placeholder-[#AAAAAA]/50 rounded-lg px-4 py-3 text-sm font-inter outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-montserrat font-semibold text-[#AAAAAA] uppercase tracking-wider">
                    Cargo
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    value={form.cargo}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Assessor, Coordenador"
                    className="bg-[#2A2A2A]/60 border border-white/10 focus:border-[#FF0000]/50 text-white placeholder-[#AAAAAA]/50 rounded-lg px-4 py-3 text-sm font-inter outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-montserrat font-semibold text-[#AAAAAA] uppercase tracking-wider">
                    Cidade
                  </label>
                  <input
                    type="text"
                    name="cidade"
                    value={form.cidade}
                    onChange={handleChange}
                    required
                    placeholder="Sua cidade"
                    className="bg-[#2A2A2A]/60 border border-white/10 focus:border-[#FF0000]/50 text-white placeholder-[#AAAAAA]/50 rounded-lg px-4 py-3 text-sm font-inter outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-montserrat font-semibold text-[#AAAAAA] uppercase tracking-wider">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    required
                    placeholder="(00) 00000-0000"
                    className="bg-[#2A2A2A]/60 border border-white/10 focus:border-[#FF0000]/50 text-white placeholder-[#AAAAAA]/50 rounded-lg px-4 py-3 text-sm font-inter outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-montserrat font-semibold text-[#AAAAAA] uppercase tracking-wider">
                  Tipo de campanha
                </label>
                <select
                  name="tipo"
                  value={form.tipo}
                  onChange={handleChange}
                  required
                  className="bg-[#2A2A2A]/60 border border-white/10 focus:border-[#FF0000]/50 text-white rounded-lg px-4 py-3 text-sm font-inter outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#1A1A1A]">
                    Selecione o tipo de campanha
                  </option>
                  {tiposCampanha.map((tipo) => (
                    <option key={tipo} value={tipo} className="bg-[#1A1A1A]">
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF0000] hover:bg-[#CC0000] text-white font-montserrat font-bold text-base rounded transition-all duration-200"
              >
                Quero aplicar na minha campanha
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle size={56} className="text-[#FF0000] mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-montserrat font-bold text-white text-2xl mb-2">
                Recebemos seu contato!
              </h3>
              <p className="text-[#AAAAAA] font-inter">
                Nossa equipe entrará em contato em breve para apresentar o VotumHub.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
