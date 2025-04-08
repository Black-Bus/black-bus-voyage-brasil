
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Paula Silva",
      location: "Rio de Janeiro",
      testimonial: "Viajar com a Black Bus transformou minha percepção sobre viagens de ônibus. O processo de reserva foi incrivelmente fácil e o conforto durante a viagem superou minhas expectativas.",
      rating: 5
    },
    {
      name: "Carlos Eduardo Mendes",
      location: "São Paulo",
      testimonial: "Excelente serviço! Encontrei opções de horários que não estavam disponíveis em outros sites e o preço foi mais acessível. Com certeza será minha primeira opção nas próximas viagens.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      location: "Belo Horizonte",
      testimonial: "A experiência com o pacote para as Cidades Históricas foi incrível. Tudo organizado perfeitamente, ônibus confortável e um itinerário bem planejado. Recomendo!",
      rating: 4
    }
  ];

  return (
    <section className="section bg-silver-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-silver-700 text-lg max-w-3xl mx-auto">
            Descubra como estamos transformando a experiência de viagens de ônibus pelo Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow relative"
            >
              <div className="absolute -top-4 left-8 bg-black text-white p-2 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 7.5C11 5.01472 8.98528 3 6.5 3C4.01472 3 2 5.01472 2 7.5C2 9.98528 4.01472 12 6.5 12H7C7.55228 12 8 12.4477 8 13V16C8 16.5523 7.55228 17 7 17H6.5C5.11929 17 4 18.1193 4 19.5C4 20.8807 5.11929 22 6.5 22H10.5C11.8807 22 13 20.8807 13 19.5V10C13 8.89543 12.1046 8 11 8V7.5ZM22 7.5C22 5.01472 19.9853 3 17.5 3C15.0147 3 13 5.01472 13 7.5C13 9.98528 15.0147 12 17.5 12H18C18.5523 12 19 12.4477 19 13V16C19 16.5523 18.5523 17 18 17H17.5C16.1193 17 15 18.1193 15 19.5C15 20.8807 16.1193 22 17.5 22H21.5C22.8807 22 24 20.8807 24 19.5V10C24 8.89543 23.1046 8 22 8V7.5Z" fill="white"/>
                </svg>
              </div>
              
              <div className="flex items-center mb-2 mt-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                ))}
              </div>

              <p className="text-silver-800 italic mb-6">"{testimonial.testimonial}"</p>

              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-silver-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
