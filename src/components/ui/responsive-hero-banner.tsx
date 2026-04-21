"use client";

import React, { useState } from "react";

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface ResponsiveHeroBannerProps {
  logoUrl?: string;
  backgroundImageUrl?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  badgeText?: string;
  badgeLabel?: string;
  title?: string;
  titleHighlight?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  children?: React.ReactNode;
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  logoUrl,
  backgroundImageUrl = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80",
  navLinks = [],
  ctaButtonText = "Acessar Painel",
  ctaButtonHref = "https://app.votumhub.com.br",
  badgeLabel = "Novo",
  badgeText = "Ecossistema eleitoral 24h",
  title = "Isso não é marketing digital.",
  titleHighlight = "É construção de voto.",
  description =
    "O VotumHub é um ecossistema que trabalha 24 horas por dia conectando o candidato ao eleitor e estruturando a campanha para conquistar votos em escala.",
  primaryButtonText = "Quero conhecer o VotumHub",
  primaryButtonHref = "#formulario",
  secondaryButtonText = "Agendar apresentação",
  secondaryButtonHref = "#formulario",
  children,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="w-full isolate min-h-screen overflow-hidden relative">
      {/* Background image */}
      <img
        src={backgroundImageUrl}
        alt=""
        className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Red accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF0000]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header nav (only when navLinks provided) */}
      {navLinks.length > 0 && (
        <header className="z-10 relative">
          <div className="mx-6">
            <div className="flex items-center justify-between pt-4">
              {logoUrl && (
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-[120px] h-[40px] bg-center bg-contain bg-no-repeat"
                  style={{ backgroundImage: `url(${logoUrl})` }}
                />
              )}
              {navLinks.length > 0 && (
                <nav className="hidden md:flex items-center gap-2">
                  <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur">
                    {navLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className={`px-3 py-2 text-sm font-medium hover:text-white transition-colors ${
                          link.isActive ? "text-white/90" : "text-white/70"
                        }`}
                      >
                        {link.label}
                      </a>
                    ))}
                    <a
                      href={ctaButtonHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-3.5 py-2 text-sm font-medium text-white hover:bg-[#CC0000] transition-colors"
                    >
                      {ctaButtonText}
                    </a>
                  </div>
                </nav>
              )}
            </div>
          </div>
        </header>
      )}

      {/* Hero content */}
      <div className="z-10 relative">
        <div className="max-w-5xl mx-auto pt-40 pb-32 px-6 text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/8 px-3 py-2 ring-1 ring-white/15 backdrop-blur animate-fade-slide-in-1">
            <span className="inline-flex items-center text-xs font-bold text-black bg-white rounded-full py-0.5 px-2.5 font-montserrat">
              {badgeLabel}
            </span>
            <span className="text-sm font-medium text-white/80 font-inter">{badgeText}</span>
          </div>

          {/* Title */}
          <h1 className="font-montserrat font-black text-5xl md:text-7xl leading-[1.05] tracking-tight text-white mb-4 animate-fade-slide-in-2">
            {title}
            <br />
            <span className="text-[#FF0000]">{titleHighlight}</span>
          </h1>

          {/* Description */}
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-inter animate-fade-slide-in-3">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-slide-in-4">
            <a
              href={primaryButtonHref}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#FF0000] hover:bg-[#CC0000] text-white font-montserrat font-bold text-base rounded-full transition-all duration-200"
            >
              {primaryButtonText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href={secondaryButtonHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 ring-1 ring-white/20 text-white font-montserrat font-semibold text-base rounded-full transition-all duration-200 backdrop-blur"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              {secondaryButtonText}
            </a>
          </div>

          {/* Impact phrase */}
          <div className="animate-fade-slide-in-4">
            <div className="h-px w-16 bg-[#FF0000]/60 mx-auto mb-5" />
            <p className="text-white/50 text-sm font-inter italic">
              "Enquanto sua campanha descansa, o VotumHub continua trabalhando."
            </p>
          </div>

          {children}
        </div>
      </div>

      {/* Bottom fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default ResponsiveHeroBanner;
