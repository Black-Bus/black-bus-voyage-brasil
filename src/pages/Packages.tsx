
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { ArrowRight, Star, Filter } from 'lucide-react';

const Packages = () => {
  // This would typically come from an API
  const packages = [
    {
      title: "Litoral Norte Paulista",
      description: "Pacote especial com passagens de ida e volta para explorar as belíssimas praias do litoral norte de São Paulo.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      days: "4 dias",
      rating: 4.8,
      price: "R$ 599,90",
      category: "beach"
    },
    {
      title: "Cidades Históricas de Minas",
      description: "Conheça o circuito das cidades históricas de Minas Gerais com transporte premium e guias especializados.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      days: "5 dias",
      rating: 4.9,
      price: "R$ 799,90",
      category: "historical"
    },
    {
      title: "Serra Gaúcha",
      description: "Uma experiência inesquecível pelos charmosos destinos da Serra Gaúcha, incluindo Gramado e Canela.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      days: "6 dias",
      rating: 4.7,
      price: "R$ 999,90",
      category: "mountain"
    },
    {
      title: "Chapada Diamantina",
      description: "Descubra as maravilhas naturais da Chapada Diamantina com transporte confortável e guias especializados.",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      days: "7 dias",
      rating: 4.9,
      price: "R$ 1.299,90",
      category: "ecotourism"
    },
    {
      title: "Foz do Iguaçu",
      description: "Visite as impressionantes Cataratas do Iguaçu e outros pontos turísticos com transporte premium.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      days: "4 dias",
      rating: 4.8,
      price: "R$ 899,90",
      category: "nature"
    },
    {
      title: "Rota das Emoções",
      description: "Uma jornada pelos Lençóis Maranhenses, Delta do Parnaíba e Jericoacoara.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      days: "8 dias",
      rating: 4.9,
      price: "R$ 1.499,90",
      category: "adventure"
    }
  ];

  const categories = [
    { id: "all", name: "Todos" },
    { id: "beach", name: "Praias" },
    { id: "mountain", name: "Montanhas" },
    { id: "historical", name: "Histórico" },
    { id: "ecotourism", name: "Ecoturismo" },
    { id: "adventure", name: "Aventura" },
    { id: "nature", name: "Natureza" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-silver-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pacotes de Viagem</h1>
          <p className="text-silver-700 text-lg mb-8 max-w-3xl">
            Descubra experiências de viagem cuidadosamente selecionadas para você explorar o melhor do Brasil.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-silver-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category.id === 'all' 
                      ? 'bg-black text-white' 
                      : 'bg-silver-100 text-silver-800 hover:bg-silver-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-silver-100 rounded-full text-sm font-medium hover:bg-silver-200 transition-colors">
              <Filter size={16} />
              <span>Filtrar</span>
            </button>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className="bg-white border border-silver-100 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div 
                  className="h-64 bg-cover bg-center" 
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

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não Encontrou O Que Procura?
          </h2>
          <p className="text-silver-300 text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato com nossa equipe para pacotes personalizados ou informações adicionais.
          </p>
          <Button className="bg-white text-black hover:bg-silver-200 text-lg px-8 py-6">
            Falar Com Um Especialista
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
