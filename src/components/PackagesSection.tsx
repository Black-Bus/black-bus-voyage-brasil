
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Star } from 'lucide-react';

const PackagesSection = () => {
  const packages = [
    {
      title: "Litoral Norte Paulista",
      description: "Pacote especial com passagens de ida e volta para explorar as belíssimas praias do litoral norte de São Paulo.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      days: "4 dias",
      rating: 4.8,
      price: "R$ 599,90"
    },
    {
      title: "Cidades Históricas de Minas",
      description: "Conheça o circuito das cidades históricas de Minas Gerais com transporte premium e guias especializados.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      days: "5 dias",
      rating: 4.9,
      price: "R$ 799,90"
    },
    {
      title: "Serra Gaúcha",
      description: "Uma experiência inesquecível pelos charmosos destinos da Serra Gaúcha, incluindo Gramado e Canela.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      days: "6 dias",
      rating: 4.7,
      price: "R$ 999,90"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pacotes de Viagem Exclusivos</h2>
            <p className="text-silver-700 text-lg max-w-3xl">
              Experiências cuidadosamente selecionadas para você descobrir o melhor do Brasil.
            </p>
          </div>
          <Button 
            variant="link" 
            className="font-semibold text-black flex items-center underline underline-offset-4 mt-4 md:mt-0"
          >
            Explorar todos os pacotes <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="bg-white border border-silver-100 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div 
                className="h-56 bg-cover bg-center" 
                style={{ backgroundImage: `url(${pkg.image})` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium py-1 px-3 bg-silver-100 rounded-full">{pkg.days}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-silver-700 mb-4 line-clamp-3">{pkg.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="block text-xs text-silver-500">A partir de</span>
                    <span className="text-lg font-bold">{pkg.price}</span>
                  </div>
                  <Button className="bg-black text-white hover:bg-silver-900">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
