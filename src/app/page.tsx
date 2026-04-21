import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Solucao from "@/components/Solucao";
import ComoFunciona from "@/components/ComoFunciona";
import Liderancas from "@/components/Liderancas";
import Comparativo from "@/components/Comparativo";
import ParaQuem from "@/components/ParaQuem";
import ImpactoFinal from "@/components/ImpactoFinal";
import CTAFinal from "@/components/CTAFinal";
import Formulario from "@/components/Formulario";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problema />
      <Solucao />
      <ComoFunciona />
      <Liderancas />
      <Comparativo />
      <ParaQuem />
      <ImpactoFinal />
      <CTAFinal />
      <Formulario />
      <Footer />
    </main>
  );
}
