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
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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
    <section
      id="formulario"
      ref={ref}
      className="relative py-28 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Top divider */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: 56 }}>
          <path d="M0,0 C360,56 1080,56 1440,0 L1440,0 L0,0 Z" fill="#000000" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF0000]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF0000]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-[#FF0000] text-xs font-montserrat font-bold tracking-widest uppercase mb-4 px-3 py-1.5 bg-[#FF0000]/8 rounded-full border border-[#FF0000]/15">
            Contato
          </span>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-3">
            Aplique na{" "}
            <span className="text-[#FF0000]">sua campanha</span>
          </h2>
          <p className="text-white/50 font-inter text-sm">
            Preencha os campos abaixo e nossa equipe entrará em contato.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="bg-white/[0.03] border border-white/8 rounded-2xl p-8"
        >
          {!enviado ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "nome",     label: "Nome completo",        placeholder: "Seu nome",                   type: "text" },
                  { name: "cargo",    label: "Cargo",                 placeholder: "Ex: Assessor, Coordenador", type: "text" },
                  { name: "cidade",   label: "Cidade",                placeholder: "Sua cidade",                type: "text" },
                  { name: "telefone", label: "Telefone / WhatsApp",   placeholder: "(00) 00000-0000",           type: "tel" },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-montserrat font-bold text-white/40 uppercase tracking-widest">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="bg-white/[0.04] border border-white/10 focus:border-[#FF0000]/50 focus:bg-white/[0.06] text-white placeholder-white/20 rounded-lg px-4 py-3 text-sm font-inter outline-none transition-all duration-200"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-montserrat font-bold text-white/40 uppercase tracking-widest">
                  Tipo de campanha
                </label>
                <select
                  name="tipo"
                  value={form.tipo}
                  onChange={handleChange}
                  required
                  className="bg-white/[0.04] border border-white/10 focus:border-[#FF0000]/50 text-white rounded-lg px-4 py-3 text-sm font-inter outline-none transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#111]">Selecione o tipo de campanha</option>
                  {tiposCampanha.map((tipo) => (
                    <option key={tipo} value={tipo} className="bg-[#111]">{tipo}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF0000] hover:bg-[#CC0000] text-white font-montserrat font-bold text-base rounded-full transition-all duration-200 shadow-lg shadow-red-900/25"
              >
                Quero aplicar na minha campanha
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <CheckCircle size={52} className="text-[#FF0000] mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-montserrat font-bold text-white text-2xl mb-2">
                Recebemos seu contato!
              </h3>
              <p className="text-white/50 font-inter text-sm">
                Nossa equipe entrará em contato em breve para apresentar o VotumHub.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
