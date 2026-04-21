"use client";

import Image from "next/image";

const links = [
  { label: "O Problema",   href: "#problema" },
  { label: "Solução",      href: "#solucao" },
  { label: "Como Funciona",href: "#como-funciona" },
  { label: "Comparativo",  href: "#comparativo" },
  { label: "Contato",      href: "#formulario" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo + desc */}
          <div>
            <a href="#" className="inline-block mb-4">
              <Image
                src="/logovermelho.png"
                alt="VotumHub"
                width={140}
                height={44}
                className="object-contain h-9 w-auto"
              />
            </a>
            <p className="text-white/40 text-sm font-inter leading-relaxed max-w-xs">
              Ecossistema que trabalha 24h por dia para conquistar votos com estrutura e escala.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-montserrat font-bold text-white/60 text-xs uppercase tracking-widest mb-5">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm font-inter transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Access + company */}
          <div>
            <h4 className="font-montserrat font-bold text-white/60 text-xs uppercase tracking-widest mb-5">
              Acesso
            </h4>
            <a
              href="https://app.votumhub.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF0000] hover:bg-[#CC0000] text-white text-sm font-montserrat font-bold rounded-full transition-all duration-200 mb-6"
            >
              Acessar Painel →
            </a>
            <div className="flex flex-col gap-1">
              <p className="text-white/30 text-xs font-inter">
                Uma solução da{" "}
                <span className="text-white/60 font-semibold">In9vi</span>
              </p>
              <p className="text-white/25 text-xs font-inter">www.votumhub.com.br</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-inter">
            © 2026 VotumHub · In9vi. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs font-inter italic">
            Campanha não se improvisa. Se estrutura.
          </p>
        </div>
      </div>
    </footer>
  );
}
