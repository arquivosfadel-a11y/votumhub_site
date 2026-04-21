"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const WHATSAPP = "5514996114720";

const tipos = ["Deputado Estadual", "Deputado Federal", "Vereador", "Prefeito", "Senador", "Outro"];

const fields = [
  { name: "nome",     label: "Nome completo",      placeholder: "Seu nome",        type: "text" },
  { name: "cargo",    label: "Cargo",               placeholder: "Ex: Assessor",    type: "text" },
  { name: "cidade",   label: "Cidade",              placeholder: "Sua cidade",      type: "text" },
  { name: "telefone", label: "Telefone / WhatsApp", placeholder: "(00) 00000-0000", type: "tel"  },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = [
      `Olá! Tenho interesse no VotumHub.`,
      ``,
      `*Nome:* ${form.nome}`,
      `*Cargo:* ${form.cargo}`,
      `*Cidade:* ${form.cidade}`,
      `*Telefone:* ${form.telefone}`,
      `*Tipo de campanha:* ${form.tipo}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setEnviado(true);
  };

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
            Preencha abaixo e você será direcionado diretamente para nossa equipe via WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="bg-[#0A0A0A] border border-[#222222] rounded-lg p-8"
        >
          {!enviado ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fields.map((f) => (
                  <div key={f.name} className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-white/35 uppercase tracking-[0.18em] font-montserrat">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name]}
                      onChange={onChange}
                      required
                      placeholder={f.placeholder}
                      className="bg-[#111111] border border-[#333333] focus:border-[#CC0000]/60 text-white placeholder-white/20 rounded px-4 py-3 text-sm outline-none transition-colors duration-150"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-white/35 uppercase tracking-[0.18em] font-montserrat">
                  Tipo de campanha
                </label>
                <select
                  name="tipo"
                  value={form.tipo}
                  onChange={onChange}
                  required
                  className="bg-[#111111] border border-[#333333] focus:border-[#CC0000]/60 text-white rounded px-4 py-3 text-sm outline-none transition-colors duration-150 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#111]">Selecione</option>
                  {tipos.map((t) => (
                    <option key={t} value={t} className="bg-[#111]">{t}</option>
                  ))}
                </select>
              </div>

              {/* WhatsApp hint */}
              <div className="flex items-center gap-2 text-xs text-[#AAAAAA]/60 bg-[#CC0000]/5 border border-[#CC0000]/10 rounded px-3 py-2.5">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366] flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Você será redirecionado para o WhatsApp da nossa equipe.</span>
              </div>

              <button
                type="submit"
                className="group mt-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#CC0000] hover:bg-[#FF0000] text-white font-montserrat font-bold text-sm rounded transition-colors duration-150 shadow-lg shadow-red-900/25"
              >
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
              <CheckCircle size={48} className="text-[#25D366] mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-montserrat font-bold text-white text-xl mb-2">
                WhatsApp aberto!
              </h3>
              <p className="text-[#AAAAAA] text-sm">
                Conclua o envio no WhatsApp. Nossa equipe responderá em breve.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
