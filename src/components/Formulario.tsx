"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const tipos = ["Deputado Estadual", "Deputado Federal", "Vereador", "Prefeito", "Senador", "Outro"];

const fields = [
  { name: "nome",     label: "Nome completo",      placeholder: "Seu nome",               type: "text" },
  { name: "cargo",    label: "Cargo",               placeholder: "Ex: Assessor",           type: "text" },
  { name: "cidade",   label: "Cidade",              placeholder: "Sua cidade",             type: "text" },
  { name: "telefone", label: "Telefone / WhatsApp", placeholder: "(00) 00000-0000",        type: "tel" },
] as const;

type FormKey = "nome" | "cargo" | "cidade" | "telefone" | "tipo";

export default function Formulario() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState<Record<FormKey, string>>({
    nome: "", cargo: "", cidade: "", telefone: "", tipo: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section id="formulario" ref={ref} className="relative bg-[#111111] py-28 overflow-hidden">
      <div className="section-line absolute top-0 inset-x-0" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CC0000]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#CC0000]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-10"
        >
          <span className="block text-[#CC0000] text-xs font-bold tracking-[0.25em] uppercase font-montserrat mb-5">
            Contato
          </span>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white leading-tight mb-3">
            Aplique na{" "}
            <span className="text-[#CC0000]">sua campanha</span>
          </h2>
          <p className="text-[#AAAAAA] text-sm">
            Preencha abaixo. Nossa equipe entrará em contato.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="bg-[#0A0A0A] border border-[#222222] rounded-lg p-8"
        >
          {!enviado ? (
            <form onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}
              className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fields.map((f) => (
                  <div key={f.name} className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-white/35 uppercase tracking-[0.18em] font-montserrat">
                      {f.label}
                    </label>
                    <input
                      type={f.type} name={f.name} value={form[f.name]}
                      onChange={onChange} required placeholder={f.placeholder}
                      className="bg-[#111111] border border-[#333333] focus:border-[#CC0000]/60 text-white placeholder-white/20 rounded px-4 py-3 text-sm outline-none transition-colors duration-150"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-white/35 uppercase tracking-[0.18em] font-montserrat">
                  Tipo de campanha
                </label>
                <select name="tipo" value={form.tipo} onChange={onChange} required
                  className="bg-[#111111] border border-[#333333] focus:border-[#CC0000]/60 text-white rounded px-4 py-3 text-sm outline-none transition-colors duration-150 appearance-none cursor-pointer">
                  <option value="" className="bg-[#111]">Selecione</option>
                  {tipos.map((t) => <option key={t} value={t} className="bg-[#111]">{t}</option>)}
                </select>
              </div>

              <button type="submit"
                className="group mt-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#CC0000] hover:bg-[#FF0000] text-white font-montserrat font-bold text-sm rounded transition-colors duration-150 shadow-lg shadow-red-900/25">
                Quero aplicar na minha campanha
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle size={48} className="text-[#CC0000] mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-montserrat font-bold text-white text-xl mb-2">
                Recebemos seu contato!
              </h3>
              <p className="text-[#AAAAAA] text-sm">
                Nossa equipe entrará em contato em breve.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
