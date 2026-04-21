import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VotumHub — Inteligência que vence eleições",
  description:
    "O VotumHub atinge 100% de uma cidade de forma controlada, criando contato diário com o eleitor — sem redes sociais, sem marketing digital.",
  keywords: ["campanha eleitoral", "voto", "eleitor", "estrutura de campanha", "votumhub", "eleições 2026"],
  openGraph: {
    title: "VotumHub — Inteligência que vence eleições",
    description: "Sua campanha está em toda a cidade. Ou está perdendo votos.",
    url: "https://www.votumhub.com.br",
    siteName: "VotumHub",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
