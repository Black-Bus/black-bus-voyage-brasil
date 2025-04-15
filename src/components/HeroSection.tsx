
import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/images/Background.png')] bg-cover bg-center"></div>
      </div>
      
      <div className="container-custom z-10">
        <div className="max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-white">
            Transformando Viagens de Ônibus<br />
            <span className="text-white">Por Todo o Brasil</span>
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
            Conectamos você às melhores companhias de ônibus do país, oferecendo uma experiência de viagem sofisticada e sem complicações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
