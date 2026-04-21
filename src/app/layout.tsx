import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VotumHub — Isso não é marketing digital. É construção de voto.",
  description:
    "O VotumHub é um ecossistema que trabalha 24 horas por dia conectando o candidato ao eleitor e estruturando a campanha para conquistar votos em escala.",
  keywords: ["campanha eleitoral", "voto", "eleitor", "estrutura de campanha", "votumhub"],
  openGraph: {
    title: "VotumHub — Construção de voto em escala",
    description: "Ecossistema que trabalha 24h por dia para conquistar votos com estrutura e escala.",
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
