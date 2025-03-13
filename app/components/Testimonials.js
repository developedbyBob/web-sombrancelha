'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    { 
      text: 'As sobrancelhas ficaram perfeitas! Exatamente como eu queria. A Giselle entendeu perfeitamente o que eu procurava e o resultado superou minhas expectativas.',
      author: 'Juliana Andrade',
      role: 'Cliente',
      image: '/avatar-mulher-1.jpg' // Substitua pelo caminho correto da imagem
    },
    { 
      text: 'O atendimento é maravilhoso e o resultado incrível. Me sinto muito mais confiante com minhas sobrancelhas. Recomendo para todas as minhas amigas!',
      author: 'Renata Castro',
      role: 'Cliente',
      image: '/avatar-mulher-2.jpg' // Substitua pelo caminho correto da imagem
    },
    { 
      text: 'Finalmente encontrei uma designer que entende exatamente o que eu quero. A técnica é impecável e o ambiente super acolhedor. Virei cliente fiel!',
      author: 'Fernanda Lima',
      role: 'Cliente',
      image: '/avatar-mulher-3.jpg' // Substitua pelo caminho correto da imagem
    },
  ];

  // Auto-avanço de slides a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">O Que Nossas Clientes Dizem</h2>
        
        {/* Testimonial Carousel */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full -translate-y-1/4 translate-x-1/4 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-100 rounded-full translate-y-1/4 -translate-x-1/4 -z-10"></div>
            
            {/* Quote mark */}
            <div className="absolute top-6 left-8 text-7xl text-pink-200 font-serif leading-none">&quot;</div>
            
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-opacity duration-500 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                  }`}
                >
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                    {testimonial.text}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                      <Image 
                        src={testimonial.image || '/user-placeholder.jpg'} 
                        alt={testimonial.author} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                      <p className="text-pink-500 text-sm">{testimonial.role}</p>
                    </div>
                    
                    <div className="ml-auto flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className="w-5 h-5 text-yellow-400" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-pink-500 w-6' : 'bg-pink-200'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Depoimento ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <p className="text-4xl font-bold text-pink-600 mb-2">100%</p>
            <p className="text-gray-600">Satisfação</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <p className="text-4xl font-bold text-pink-600 mb-2">300+</p>
            <p className="text-gray-600">Clientes</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <p className="text-4xl font-bold text-pink-600 mb-2">4.9</p>
            <p className="text-gray-600">Avaliação Média</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <p className="text-4xl font-bold text-pink-600 mb-2">95%</p>
            <p className="text-gray-600">Retorno</p>
          </div>
        </div>
      </div>
    </section>
  );
}