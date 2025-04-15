
import React from 'react';
import { Bus, Clock, Shield, Coffee } from 'lucide-react';

const services = [
  {
    icon: <Bus className="w-12 h-12 text-black" />,
    title: "Frota Premium",
    description: "Acesso às melhores companhias de ônibus do Brasil, com veículos modernos e confortáveis para sua viagem."
  },
  {
    icon: <Shield className="w-12 h-12 text-black" />,
    title: "Segurança Garantida",
    description: "Operadoras certificadas e com histórico de excelência em segurança e manutenção preventiva."
  },
  {
    icon: <Clock className="w-12 h-12 text-black" />,
    title: "Pontualidade",
    description: "Compromisso com horários e monitoramento em tempo real das viagens para sua tranquilidade."
  },
  {
    icon: <Coffee className="w-12 h-12 text-black" />,
    title: "Conforto Superior",
    description: "Assentos espaçosos, ar-condicionado, Wi-Fi e outras comodidades para uma experiência diferenciada."
  }
];

const PremiumServicesSection = () => {
  return (
    <section className="py-20 bg-silver-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Premium de Viagem</h2>
          <p className="text-silver-700 max-w-3xl mx-auto">
            Na Black Bus, transformamos sua viagem de ônibus em uma experiência sofisticada e confortável.
            Conheça nossos diferenciais e serviços exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-silver-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumServicesSection;
