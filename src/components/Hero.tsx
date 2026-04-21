import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";

export default function Hero() {
  return (
    <ResponsiveHeroBanner
      backgroundImageUrl="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&auto=format&fit=crop&q=80"
      badgeLabel="In9vi"
      badgeText="Ecossistema eleitoral 24h"
      title="Isso não é marketing digital."
      titleHighlight="É construção de voto."
      description="O VotumHub é um ecossistema que trabalha 24 horas por dia conectando o candidato ao eleitor e estruturando a campanha para conquistar votos em escala."
      primaryButtonText="Quero conhecer o VotumHub"
      primaryButtonHref="#formulario"
      secondaryButtonText="Agendar apresentação"
      secondaryButtonHref="#formulario"
    />
  );
}
