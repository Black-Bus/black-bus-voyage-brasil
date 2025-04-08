
import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/50 to-white"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/fefb9c28-c8d3-4903-99d3-71321061e204.png')] bg-cover bg-center opacity-80"></div>
      </div>
      
      <div className="container-custom z-10">
        <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
            Transformando Viagens de Ônibus<br />
            <span className="text-gradient">Por Todo o Brasil</span>
          </h1>
          <p className="text-silver-800 text-lg md:text-xl mb-8 max-w-2xl">
            Conectamos você às melhores companhias de ônibus do país, oferecendo uma experiência de viagem sofisticada e sem complicações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="bg-black text-white hover:bg-silver-900 text-lg px-8 py-6">
              Explorar Rotas
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6">
              Descobrir Pacotes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
