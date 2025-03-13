'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    { 
      title: 'Design de Sobrancelhas', 
      description: 'Técnica personalizada para cada tipo de rosto, valorizando suas características naturais e trazendo harmonia para sua face.',
      price: 'R$ 60,00',
      duration: '40 minutos',
      image: '/design-sobrancelhas.jpg', // Substitua pelo caminho correto da imagem
      benefits: ['Atendimento personalizado', 'Resultado natural', 'Valorização do olhar']
    },
    { 
      title: 'Micropigmentação', 
      description: 'Procedimento semipermanente que preenchem falhas e definem o formato das sobrancelhas, garantindo um visual sempre perfeito.',
      price: 'R$ 280,00',
      duration: '1h30',
      image: '/micropigmentacao.jpg', // Substitua pelo caminho correto da imagem
      benefits: ['Duração de 1 a 2 anos', 'Resultado natural', 'Efeito de preenchimento']
    },
    { 
      title: 'Henna', 
      description: 'Coloração temporária que proporciona definição e cor para suas sobrancelhas, ideal para quem deseja um visual mais marcante.',
      price: 'R$ 70,00',
      duration: '50 minutos',
      image: '/henna.jpg', // Substitua pelo caminho correto da imagem
      benefits: ['Duração de 2 a 3 semanas', 'Preenchimento de falhas', 'Efeito definido']
    },
    { 
      title: 'Manutenção', 
      description: 'Toques regulares para manter suas sobrancelhas sempre impecáveis, garantindo um visual harmonioso e bem cuidado.',
      price: 'R$ 50,00',
      duration: '30 minutos',
      image: '/manutencao.jpg', // Substitua pelo caminho correto da imagem
      benefits: ['Resultado duradouro', 'Preservação do formato', 'Aparência impecável']
    },
  ];

  // Caso as imagens dos serviços não estejam disponíveis, use a imagem genérica
  const fallbackImage = '/images.jpeg';
  
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Serviços Oferecidos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`cursor-pointer transition-all duration-300 rounded-xl p-5 ${
                activeService === index 
                  ? 'bg-gradient-to-br from-pink-50 to-pink-100 shadow-md scale-105' 
                  : 'bg-white hover:bg-pink-50 border border-pink-100'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="h-14 flex items-center justify-center mb-3">
                {/* Ícones para cada serviço - substitua com ícones reais quando disponíveis */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  activeService === index ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-500'
                }`}>
                  {index === 0 && '✨'}
                  {index === 1 && '🖌️'}
                  {index === 2 && '🎨'}
                  {index === 3 && '✂️'}
                </div>
              </div>
              <h3 className={`font-medium text-lg mb-2 text-center ${
                activeService === index ? 'text-pink-600' : 'text-gray-800'
              }`}>
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-2">Apartir de {service.price}</p>
              <div className={`w-8 h-1 rounded-full mx-auto ${
                activeService === index ? 'bg-pink-400' : 'bg-pink-200'
              }`}></div>
            </div>
          ))}
        </div>
        
        {/* Detalhes do serviço selecionado */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image 
                src={services[activeService].image || fallbackImage}
                alt={services[activeService].title}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-medium mb-2">{services[activeService].title}</h3>
                  <div className="flex space-x-4 text-sm">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                        <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"/>
                      </svg>
                      {services[activeService].duration}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 14.915V18h-2v-1.08c-2.339-.367-3-2.002-3-2.92h2c0 .615.751 1 2 1 1.25 0 2-.384 2-1 0-.615-.751-1-2-1-2.25 0-4-1.152-4-3 0-1.799 1.276-2.649 3-2.92V6h2v1.08c2.287.356 3 2.022 3 2.92h-2c0-.615-.751-1-2-1-1.25 0-2 .384-2 1 0 .615.751 1 2 1 2.25 0 4 1.152 4 3 0 1.813-1.271 2.665-3 2.915z"/>
                      </svg>
                      {services[activeService].price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <p className="text-gray-700 mb-6">{services[activeService].description}</p>
              
              {/* Continuação a partir deste ponto */}
              <h4 className="font-medium text-gray-800 mb-3">Benefícios:</h4>
              <ul className="space-y-2 mb-8">
                {services[activeService].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <Link href="#contato">
                <button className="w-full py-3 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full font-medium transition hover:shadow-lg transform hover:-translate-y-1">
                  Agendar Este Serviço
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}