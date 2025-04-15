
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const cities = [
  {
    id: 1,
    name: 'Rio de Janeiro',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1470&auto=format&fit=crop',
    description: 'Conheça a cidade maravilhosa, suas praias e paisagens deslumbrantes.'
  },
  {
    id: 2,
    name: 'São Paulo',
    image: 'https://images.unsplash.com/photo-1543059080-f9b1272213a5?q=80&w=1374&auto=format&fit=crop',
    description: 'Explore a maior metrópole brasileira, com sua gastronomia e vida cultural.'
  },
  {
    id: 3,
    name: 'Salvador',
    image: 'https://images.unsplash.com/photo-1558020344-76c5c4ecbb07?q=80&w=1469&auto=format&fit=crop',
    description: 'Descubra o berço da cultura baiana, com suas praias e centro histórico.'
  },
  {
    id: 4,
    name: 'Florianópolis',
    image: 'https://images.unsplash.com/photo-1627913363993-95768ab2b91a?q=80&w=1374&auto=format&fit=crop',
    description: 'Visite a ilha da magia, com suas 42 praias paradisíacas.'
  },
  {
    id: 5,
    name: 'Brasília',
    image: 'https://images.unsplash.com/photo-1625257362743-7e0406165fe6?q=80&w=1470&auto=format&fit=crop',
    description: 'Conheça a capital do Brasil e sua impressionante arquitetura modernista.'
  },
  {
    id: 6,
    name: 'Curitiba',
    image: 'https://images.unsplash.com/photo-1605666807903-e2103d70e96a?q=80&w=1374&auto=format&fit=crop',
    description: 'Explore a capital paranaense, referência em planejamento urbano e sustentabilidade.'
  },
];

const FeaturedCitiesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Destinos em Destaque</h2>
          <p className="text-silver-700 max-w-3xl mx-auto">
            Descubra algumas das mais belas cidades brasileiras e planeje sua próxima aventura com a Black Bus.
            Oferecemos rotas para os melhores destinos em todo o país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <Card key={city.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-white text-2xl font-bold mb-2">{city.name}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="mb-6 text-silver-700">{city.description}</p>
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                  Explorar Rotas
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-black text-white hover:bg-silver-900 px-8 py-6 text-lg">
            Ver Todos os Destinos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCitiesSection;
