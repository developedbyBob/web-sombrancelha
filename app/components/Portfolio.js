'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const portfolioItems = [
    { 
      before: '/sombra.jpg', 
      after: '/sombra.jpg',
      description: 'Design personalizado para valorizar o formato natural'
    },
    { 
      before: '/sombra.jpg', 
      after: '/sombra.jpg',
      description: 'Micropigmentação para definição e preenchimento'
    },
    { 
      before: '/sombra.jpg', 
      after: '/sombra.jpg',
      description: 'Aplicação de henna para um look mais marcante'
    },
  ];

  // Função para ir para o próximo slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para ir para o slide anterior
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="portfolio" className="py-24 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Transformações</h2>
        
        <div className="mt-16 flex flex-col md:flex-row gap-12 items-center">
          {/* Showcase principal */}
          <div className="md:w-8/12 relative bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Antes */}
              <div className="md:w-1/2">
                <div className="relative h-72 rounded-lg overflow-hidden">
                  <Image 
                    src={portfolioItems[activeIndex].before} 
                    alt="Antes" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2">
                    Antes
                  </div>
                </div>
              </div>
              
              {/* Depois */}
              <div className="md:w-1/2">
                <div className="relative h-72 rounded-lg overflow-hidden">
                  <Image 
                    src={portfolioItems[activeIndex].after} 
                    alt="Depois" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-pink-500 text-white text-center py-2">
                    Depois
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-700">{portfolioItems[activeIndex].description}</p>
            </div>
            
            {/* Controles de navegação */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/80 shadow-md hover:bg-pink-100 flex items-center justify-center -ml-5"
                aria-label="Anterior"
              >
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/80 shadow-md hover:bg-pink-100 flex items-center justify-center -mr-5"
                aria-label="Próximo"
              >
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Informações complementares */}
          <div className="md:w-4/12 text-center md:text-left">
            <h3 className="text-2xl font-medium text-pink-600 mb-4">Resultados Reais</h3>
            <p className="text-gray-700 mb-6">
              Veja exemplos de transformações reais com minhas técnicas especializadas de design de sobrancelhas. Cada trabalho é personalizado para realçar a beleza natural de cada cliente.
            </p>
            
            {/* Indicadores de slide */}
            <div className="flex justify-center md:justify-start space-x-2 mb-8">
              {portfolioItems.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? 'bg-pink-500' : 'bg-pink-200'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-pink-400">
              <p className="text-sm text-gray-600 italic">
                &quot;As sobrancelhas emolduram o olhar e podem transformar completamente a expressão facial. Um bom design valoriza suas características naturais.&quot;
              </p>
              <p className="text-right mt-2 text-sm font-medium text-pink-600">- Giselle da Silva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}