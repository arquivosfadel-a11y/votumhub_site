import Image from "next/image";

const nav = [
  { label: "O Problema",    href: "#problema" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Comparativo",   href: "#comparativo" },
  { label: "Contato",       href: "#formulario" },
];

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[#CC0000]/20 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block mb-5">
              <Image src="/logovermelho.png" alt="VotumHub" width={140} height={44}
                className="h-9 w-auto object-contain" />
            </a>
            <p className="text-[#AAAAAA] text-sm leading-relaxed max-w-xs">
              Inteligência que vence eleições. Ecossistema que trabalha 24h por dia para conquistar
              votos com estrutura e escala.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-montserrat font-bold text-[10px] text-white/40 uppercase tracking-[0.2em] mb-5">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href}
                    className="text-[#AAAAAA] hover:text-white text-sm transition-colors duration-150">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Access */}
          <div>
            <h4 className="font-montserrat font-bold text-[10px] text-white/40 uppercase tracking-[0.2em] mb-5">
              Acesso
            </h4>
            <a href="https://app.votumhub.com.br" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#CC0000] hover:bg-[#FF0000] text-white text-sm font-bold rounded transition-colors duration-150 font-montserrat mb-6">
              Acessar Painel →
            </a>
            <div className="flex flex-col gap-1">
              <p className="text-white/30 text-xs">
                Uma solução da{" "}
                <span className="text-white/55 font-semibold">In9vi</span>
              </p>
              <p className="text-white/20 text-xs">www.votumhub.com.br</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © 2026 VotumHub · In9vi. Todos os direitos reservados.
          </p>
          <p className="text-white/15 text-xs italic font-montserrat">
            Campanha não se improvisa. Se estrutura.
          </p>
        </div>
      </div>
    </footer>
  );
}
