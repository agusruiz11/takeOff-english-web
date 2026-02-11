import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import logo from '@/assets/images/logo.png';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#00264A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src={logo} 
              alt="Take Off English logo" 
              className="h-36 w-36 ml-8" 
            />
            <p className="text-gray-300 text-sm">
              Inglés práctico para objetivos reales: trabajo, viajes y exámenes
            </p>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Navegación</span>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-[#FF8C00] transition-colors duration-200 text-left text-sm"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-gray-300 hover:text-[#FF8C00] transition-colors duration-200 text-left text-sm"
              >
                Programas
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-[#FF8C00] transition-colors duration-200 text-left text-sm"
              >
                Sobre mí
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-300 hover:text-[#FF8C00] transition-colors duration-200 text-left text-sm"
              >
                FAQs
              </button>
            </nav>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Programas</span>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-300 text-sm">Inglés para viajes</p>
              <p className="text-gray-300 text-sm">Inglés para el trabajo</p>
              <p className="text-gray-300 text-sm">Inglés práctico</p>
              <p className="text-gray-300 text-sm">Preparación PET/FCE</p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Contacto</span>
            <div className="space-y-3 mb-4">
              <a
                href="https://wa.me/5491179951001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FF8C00] transition-colors duration-200 text-sm block"
              >
                +54 9 11 7995-1001
              </a>
              <a
                href="mailto:info@takeoffenglish.ar"
                className="text-gray-300 hover:text-[#FF8C00] transition-colors duration-200 text-sm block"
              >
                info@takeoffenglish.ar
              </a>
              <a
                href="mailto:gaby@takeoffenglish.ar"
                className="text-gray-300 hover:text-[#FF8C00] transition-colors duration-200 text-sm block"
              >
                gaby@takeoffenglish.ar
              </a>
            </div>
            <span className="font-semibold text-lg mb-4 block mt-6">Síguenos</span>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61585903962614"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FF8C00] transition-colors duration-200"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/_takeoffenglish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FF8C00] transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:info@takeoffenglish.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FF8C00] transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
            {/* <a
              href="#"
              className="text-gray-400 hover:text-[#FF8C00] transition-colors duration-200 text-sm"
            >
              Campus (próximamente)
            </a> */}
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Take Off English. Todos los derechos reservados. Desarrollado por <a href="https://posicionarte.online" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FF8C00] transition-colors duration-200">Posicionarte Online</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;