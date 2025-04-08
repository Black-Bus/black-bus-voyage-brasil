
import React from 'react';

const PartnersSection = () => {
  // This would normally come from your API or CMS
  const partners = [
    { name: "Viação Cometa", logo: "https://via.placeholder.com/150x60?text=Cometa" },
    { name: "Itapemirim", logo: "https://via.placeholder.com/150x60?text=Itapemirim" },
    { name: "Águia Branca", logo: "https://via.placeholder.com/150x60?text=Águia+Branca" },
    { name: "1001", logo: "https://via.placeholder.com/150x60?text=1001" },
    { name: "Gontijo", logo: "https://via.placeholder.com/150x60?text=Gontijo" },
    { name: "Catarinense", logo: "https://via.placeholder.com/150x60?text=Catarinense" }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Parceiros Confiáveis</h2>
          <p className="text-silver-700 text-lg max-w-3xl mx-auto">
            Trabalhamos com as principais empresas de ônibus do Brasil para oferecer a melhor experiência de viagem.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
