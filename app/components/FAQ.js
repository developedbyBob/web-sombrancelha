'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: 'Quanto tempo dura a micropigmentação?',
      answer: 'A duração média é de 1 a 2 anos, dependendo do tipo de pele, exposição ao sol e cuidados diários. Fatores como pele oleosa, exposição solar frequente e uso de produtos com ácidos podem diminuir a duração do procedimento.',
    },
    {
      question: 'É possível agendar uma consulta online?',
      answer: 'Sim, você pode agendar sua consulta diretamente pelo nosso site através do formulário de contato ou pelo WhatsApp. Basta preencher seus dados, selecionar o serviço desejado e escolher data e horário disponíveis.',
    },
    {
      question: 'Quais são os cuidados pós-procedimento?',
      answer: 'Para micropigmentação e henna, recomenda-se evitar exposição ao sol, não molhar a área nas primeiras 24-48h, não utilizar maquiagem na região, evitar piscinas, saunas e academias por alguns dias. Instruções detalhadas serão fornecidas após o procedimento.',
    },
    {
      question: 'Quais métodos de pagamento são aceitos?',
      answer: 'Aceitamos pagamento em dinheiro, cartões de débito e crédito (podendo parcelar em até 3x), e também via PIX.',
    },
    {
      question: 'A micropigmentação dói?',
      answer: 'O procedimento causa um desconforto moderado, que varia de pessoa para pessoa. Utilizamos produtos anestésicos tópicos para minimizar o desconforto durante o procedimento.',
    },
    {
      question: 'Com que frequência devo fazer manutenção das sobrancelhas?',
      answer: 'Para o design convencional, recomenda-se manutenção a cada 20-30 dias. Para micropigmentação, a retoque pode ser necessário após 30-45 dias da aplicação inicial, e depois manutenções anuais.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Perguntas Frequentes</h2>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden divide-y divide-pink-100">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-pink-100 last:border-b-0">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-pink-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-medium text-gray-800">{faq.question}</h3>
                  <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Não encontrou sua pergunta? Entre em contato diretamente</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://wa.me/5521995960510" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition"
            >
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a 
              href="mailto:sgiselle153@gmail.com"
              className="flex items-center bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition"
            >
              <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              E-mail
            </a>
          </div>
        </div>
        
        {/* Seção de dicas */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-medium text-pink-600 mb-4">Dicas de Cuidados com as Sobrancelhas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-pink-100 rounded-full p-2 mr-3">
                <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Hidratação</h4>
                <p className="text-gray-600 text-sm">Aplique óleo de rícino ou coco nas sobrancelhas para mantê-las hidratadas e estimular o crescimento.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-pink-100 rounded-full p-2 mr-3">
                <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Proteção Solar</h4>
                <p className="text-gray-600 text-sm">Proteja as sobrancelhas do sol, especialmente após procedimentos como micropigmentação.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-pink-100 rounded-full p-2 mr-3">
                <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Evite Excessos</h4>
                <p className="text-gray-600 text-sm">Não remova pelos em excesso. É melhor buscar ajuda profissional para manter a forma natural.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-pink-100 rounded-full p-2 mr-3">
                <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Manutenção Regular</h4>
                <p className="text-gray-600 text-sm">Faça manutenções regulares para manter o formato e a aparência das sobrancelhas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}