import React from 'react';
import { Button } from './ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto Para Transformar Sua Experiência De Viagem?
          </h2>
          <p className="text-silver-300 text-lg mb-10">
            Junte-se a milhares de viajantes que estão descobrindo uma nova forma de explorar o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-black hover:bg-silver-200 text-lg px-8 py-6">
              Reservar Minha Viagem
            </Button>
            <Button variant="outline" className="border-white text-black hover:bg-white hover:text-black text-lg px-8 py-6">
              Explorar Pacotes Turísticos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
