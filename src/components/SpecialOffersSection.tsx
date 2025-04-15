
import React from 'react';
import { Button } from './ui/button';
import { Calendar } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: "Pacote Final de Semana",
    destination: "Rio de Janeiro",
    price: "R$ 249",
    discount: "20%",
    image: "https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?q=80&w=1335&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Feriados Prolongados",
    destination: "Gramado",
    price: "R$ 329",
    discount: "15%",
    image: "https://images.unsplash.com/photo-1630220836290-43f5d192142a?q=80&w=1374&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Excursão Litoral",
    destination: "Florianópolis",
    price: "R$ 289",
    discount: "25%",
    image: "https://images.unsplash.com/photo-1596457941236-c0eb846a4d1e?q=80&w=1471&auto=format&fit=crop"
  }
];

const SpecialOffersSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Promoções Especiais</h2>
          <p className="text-silver-700 max-w-3xl mx-auto">
            Aproveite nossas ofertas exclusivas e economize em sua próxima viagem.
            Preços especiais por tempo limitado!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="group relative rounded-xl overflow-hidden shadow-lg">
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full z-10">
                -{offer.discount}
              </div>
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <h3 className="text-white text-2xl font-bold">{offer.title}</h3>
                <p className="text-silver-300 mb-2">{offer.destination}</p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-silver-400 text-sm">A partir de</span>
                    <p className="text-white text-2xl font-bold">{offer.price}</p>
                  </div>
                  <Button className="bg-white text-black hover:bg-silver-200">
                    <Calendar className="mr-2 h-4 w-4" /> Reservar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-black text-white hover:bg-silver-900 px-8 py-6 text-lg">
            Ver Todas as Ofertas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
