
import React from 'react';
import { Button } from './ui/button';

const CtaSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/cta-background.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Pronto Para Transformar Sua Experiência De Viagem?
          </h2>
          <p className="text-silver-300 text-lg mb-10">
            Junte-se a milhares de viajantes que estão descobrindo uma nova forma de explorar o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-black hover:bg-silver-200 text-lg px-8 py-6">
              Reservar Minha Viagem
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6">
              Explorar Pacotes Turísticos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
