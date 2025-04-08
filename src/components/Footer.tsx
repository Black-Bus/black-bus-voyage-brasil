
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link to="/" className="font-montserrat font-bold text-2xl inline-block mb-4">
              <span className="text-black">BLACK</span> 
              <span className="text-silver-700">BUS</span>
            </Link>
            <p className="text-silver-700 mb-6">
              Transformando a experiência de viagens de ônibus em todo o Brasil com opções premium e serviço excepcional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-silver-900 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-silver-900 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-silver-900 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-silver-900 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-silver-700 hover:text-black transition-colors">Início</Link></li>
              <li><Link to="/packages" className="text-silver-700 hover:text-black transition-colors">Pacotes</Link></li>
              <li><Link to="/routes" className="text-silver-700 hover:text-black transition-colors">Rotas</Link></li>
              <li><Link to="/about" className="text-silver-700 hover:text-black transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contact" className="text-silver-700 hover:text-black transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Informações Úteis</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-silver-700 hover:text-black transition-colors">Perguntas Frequentes</Link></li>
              <li><Link to="/terms" className="text-silver-700 hover:text-black transition-colors">Termos e Condições</Link></li>
              <li><Link to="/privacy" className="text-silver-700 hover:text-black transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/refund" className="text-silver-700 hover:text-black transition-colors">Política de Reembolso</Link></li>
              <li><Link to="/blog" className="text-silver-700 hover:text-black transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-black mr-3 mt-0.5" />
                <span className="text-silver-700">(11) 4002-8922</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-black mr-3 mt-0.5" />
                <span className="text-silver-700">contato@blackbus.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-black mr-3 mt-0.5" />
                <span className="text-silver-700">
                  Av. Paulista, 1000<br />
                  São Paulo, SP<br />
                  01310-100
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-silver-100 text-center md:flex md:justify-between md:items-center">
          <p className="text-silver-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Black Bus. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <img src="https://via.placeholder.com/40x25?text=VISA" alt="Visa" className="h-6 object-contain" />
            <img src="https://via.placeholder.com/40x25?text=MASTER" alt="MasterCard" className="h-6 object-contain" />
            <img src="https://via.placeholder.com/40x25?text=AMEX" alt="American Express" className="h-6 object-contain" />
            <img src="https://via.placeholder.com/40x25?text=PIX" alt="Pix" className="h-6 object-contain" />
            <img src="https://via.placeholder.com/40x25?text=BOLETO" alt="Boleto" className="h-6 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
