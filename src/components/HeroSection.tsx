
import React from 'react';
import { Button } from './ui/button';
import { Search, Calendar, MapPin } from 'lucide-react';

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
      
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container-custom">
          <div className="bg-white rounded-t-xl shadow-xl p-6 animate-slide-up opacity-0" style={{ animationDelay: "0.6s" }}>
            <h3 className="font-montserrat font-semibold text-xl mb-4">Encontre sua viagem perfeita</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MapPin className="w-5 h-5 text-silver-500" />
                </div>
                <input
                  type="text"
                  placeholder="De onde você está saindo?"
                  className="w-full pl-10 py-3 border border-silver-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MapPin className="w-5 h-5 text-silver-500" />
                </div>
                <input
                  type="text"
                  placeholder="Para onde você vai?"
                  className="w-full pl-10 py-3 border border-silver-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Calendar className="w-5 h-5 text-silver-500" />
                </div>
                <input
                  type="text"
                  placeholder="Data da viagem"
                  className="w-full pl-10 py-3 border border-silver-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="absolute inset-y-0 right-0 flex items-center px-4 bg-black text-white rounded-r-md hover:bg-silver-900 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
