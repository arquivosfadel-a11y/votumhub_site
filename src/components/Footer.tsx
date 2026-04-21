"use client";

import { motion } from "framer-motion";

const links = [
  { label: "O Problema", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Contato", href: "#formulario" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo + desc */}
          <div>
            <a href="#" className="inline-block mb-4">
              <span className="font-montserrat font-black text-2xl text-white">
                Votum<span className="text-[#FF0000]">Hub</span>
              </span>
            </a>
            <p className="text-[#AAAAAA] text-sm font-inter leading-relaxed max-w-xs">
              Ecossistema que trabalha 24h por dia para conquistar votos com estrutura e escala.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#AAAAAA] hover:text-white text-sm font-inter transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Painel + empresa */}
          <div>
            <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider mb-4">
              Acesso
            </h4>
            <a
              href="https://app.votumhub.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-[#FF0000] hover:bg-[#CC0000] text-white text-sm font-montserrat font-bold rounded transition-all duration-200 mb-6"
            >
              Acessar Painel →
            </a>
            <p className="text-[#AAAAAA] text-xs font-inter">
              Uma solução da{" "}
              <span className="text-white font-semibold">In9vi</span>
            </p>
            <p className="text-[#AAAAAA] text-xs font-inter mt-1">
              www.votumhub.com.br
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#AAAAAA] text-xs font-inter">
            © 2026 VotumHub · In9vi. Todos os direitos reservados.
          </p>
          <p className="text-[#AAAAAA]/50 text-xs font-inter">
            Campanha não se improvisa. Se estrutura.
          </p>
        </div>
      </div>
    </footer>
  );
}
