"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const nav = [
  { label: "O Problema",    href: "#problema" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Comparativo",   href: "#comparativo" },
  { label: "Contato",       href: "#formulario" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/92 backdrop-blur-xl border-b border-[#CC0000]/30 shadow-lg shadow-black/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <Image src="/logovermelho.png" alt="VotumHub" width={148} height={48}
            className="h-10 w-auto object-contain" priority />
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-white/55 hover:text-white transition-colors duration-200 tracking-wide">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a href="https://app.votumhub.com.br" target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#CC0000] hover:bg-[#FF0000] text-white text-sm font-bold rounded transition-colors duration-150 font-montserrat">
            Acessar Painel
          </a>
          <button onClick={() => setOpen(!open)} aria-label="menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded bg-white/8 border border-white/10 text-white">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-black/96 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {nav.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-white/60 hover:text-white py-3 border-b border-white/5 text-sm">
                  {l.label}
                </a>
              ))}
              <a href="https://app.votumhub.com.br" target="_blank" rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center py-3.5 bg-[#CC0000] text-white text-sm font-bold rounded font-montserrat">
                Acessar Painel
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
