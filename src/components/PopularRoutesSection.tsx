
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const PopularRoutesSection = () => {
  const popularRoutes = [
    {
      from: "São Paulo",
      to: "Rio de Janeiro",
      price: "R$ 89,90",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      time: "6h",
      companies: ["Viação Cometa", "1001", "Itapemirim"]
    },
    {
      from: "Belo Horizonte",
      to: "Brasília",
      price: "R$ 149,90",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      time: "8h",
      companies: ["Gontijo", "Nacional Expresso"]
    },
    {
      from: "Salvador",
      to: "Recife",
      price: "R$ 159,90",
      image: "https://images.unsplash.com/photo-1544966729-3260aad936d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      time: "10h",
      companies: ["Águia Branca", "Progresso"]
    },
    {
      from: "Curitiba",
      to: "Florianópolis",
      price: "R$ 79,90",
      image: "https://images.unsplash.com/photo-1564500601606-c0c77a2d3048?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      time: "4h",
      companies: ["Catarinense", "Reunidas"]
    }
  ];

  return (
    <section className="section bg-silver-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rotas Populares</h2>
            <p className="text-silver-700 text-lg max-w-3xl">
              Descubra os destinos mais procurados em toda a rede rodoviária brasileira.
            </p>
          </div>
          <Button 
            variant="link" 
            className="font-semibold text-black flex items-center underline underline-offset-4 mt-4 md:mt-0"
          >
            Ver todas as rotas <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularRoutes.map((route, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${route.image})` }}
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{route.from}</h3>
                    <p className="text-silver-700 text-sm">Origem</p>
                  </div>
                  <ArrowRight className="mx-4 text-silver-500" />
                  <div>
                    <h3 className="text-lg font-semibold">{route.to}</h3>
                    <p className="text-silver-700 text-sm">Destino</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm text-silver-700">
                    <span className="font-medium">{route.time}</span> de duração
                  </div>
                  <div className="text-black font-semibold">
                    {route.price}
                  </div>
                </div>
                <div className="text-sm text-silver-600 mb-5">
                  {route.companies.slice(0, 2).join(", ")}
                  {route.companies.length > 2 && " e mais..."}
                </div>
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                  Ver Horários
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutesSection;
