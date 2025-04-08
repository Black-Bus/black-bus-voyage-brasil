import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black text-white py-3 shadow-lg' : 'bg-transparent text-black py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/images/Logo-preta-sem-fundo.png" 
            alt="Black Bus Voyage Logo" 
            className="h-24 md:h-32 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium hover:opacity-80 transition-opacity ${
              isScrolled ? 'text-white' : 'text-black'
            }`}
          >
            Início
          </Link>
          <div className="relative group">
            <button 
              onClick={() => setIsPackagesOpen(!isPackagesOpen)}
              className={`flex items-center font-medium hover:opacity-80 transition-opacity ${
                isScrolled ? 'text-white' : 'text-black'
              }`}
            >
              Pacotes <ChevronDown size={16} className="ml-1" />
            </button>
            <div className={`absolute top-full right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition-all duration-150 ${
              isPackagesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
              <Link to="/packages" className="block px-4 py-2 text-sm text-black hover:bg-silver-50">Todos os Pacotes</Link>
              <Link to="/packages/tourism" className="block px-4 py-2 text-sm text-black hover:bg-silver-50">Turismo</Link>
              <Link to="/packages/events" className="block px-4 py-2 text-sm text-black hover:bg-silver-50">Eventos Especiais</Link>
            </div>
          </div>
          <Link 
            to="/routes" 
            className={`font-medium hover:opacity-80 transition-opacity ${
              isScrolled ? 'text-white' : 'text-black'
            }`}
          >
            Rotas
          </Link>
          <Link 
            to="/about" 
            className={`font-medium hover:opacity-80 transition-opacity ${
              isScrolled ? 'text-white' : 'text-black'
            }`}
          >
            Sobre
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium hover:opacity-80 transition-opacity ${
              isScrolled ? 'text-white' : 'text-black'
            }`}
          >
            Contato
          </Link>
          <Button 
            variant={isScrolled ? "outline" : "default"} 
            className={isScrolled ? "border-white text-black hover:bg-white hover:text-black" : "bg-black text-white hover:bg-silver-900"}
          >
            Reservar Agora
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? "text-white" : "text-black"} />
          ) : (
            <Menu size={24} className={isScrolled ? "text-white" : "text-black"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white text-black shadow-lg absolute top-full left-0 right-0`}>
        <div className="px-4 py-2 space-y-3">
          <Link to="/" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
            Início
          </Link>
          <div>
            <button 
              onClick={() => setIsPackagesOpen(!isPackagesOpen)}
              className="flex items-center w-full py-2 font-medium"
            >
              Pacotes <ChevronDown size={16} className={`ml-1 transition-transform ${isPackagesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 space-y-1 transition-all duration-300 ${isPackagesOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <Link to="/packages" className="block py-2" onClick={() => setIsMenuOpen(false)}>Todos os Pacotes</Link>
              <Link to="/packages/tourism" className="block py-2" onClick={() => setIsMenuOpen(false)}>Turismo</Link>
              <Link to="/packages/events" className="block py-2" onClick={() => setIsMenuOpen(false)}>Eventos Especiais</Link>
            </div>
          </div>
          <Link to="/routes" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
            Rotas
          </Link>
          <Link to="/about" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
            Sobre
          </Link>
          <Link to="/contact" className="block py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
            Contato
          </Link>
          <Button 
            className="w-full bg-black text-white hover:bg-silver-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Reservar Agora
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
