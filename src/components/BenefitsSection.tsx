
import React from 'react';
import { Check, ShieldCheck, Clock, Headphones } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sua Jornada Exclusiva de Ônibus Começa Aqui
          </h2>
          <p className="text-silver-700 text-lg max-w-3xl mx-auto">
            Oferecemos uma plataforma premium dedicada exclusivamente à venda de passagens de ônibus em todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-silver-50 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
              <Check className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Transportadoras Confiáveis</h3>
            <p className="text-silver-700">
              Parceria com as principais empresas de ônibus do Brasil, garantindo conforto e segurança em cada viagem.
            </p>
          </div>

          <div className="p-6 bg-silver-50 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Reservas Seguras</h3>
            <p className="text-silver-700">
              Sistema de reserva transparente e seguro, com confirmação instantânea e política de reembolso clara.
            </p>
          </div>

          <div className="p-6 bg-silver-50 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
              <Clock className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Economia de Tempo</h3>
            <p className="text-silver-700">
              Interface intuitiva que permite encontrar e reservar sua viagem perfeita em poucos cliques.
            </p>
          </div>

          <div className="p-6 bg-silver-50 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
              <Headphones className="text-white w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Suporte Premium</h3>
            <p className="text-silver-700">
              Equipe de suporte dedicada, disponível 24/7 para ajudar com qualquer dúvida ou problema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
