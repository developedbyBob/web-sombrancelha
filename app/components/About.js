import Image from 'next/image';

export default function About() {
  // Stats da profissional
  const stats = [
    { number: '2+', text: 'Anos de Experiência' },
    { number: '300+', text: 'Clientes Satisfeitos' },
    { number: '4', text: 'Técnicas Especializadas' }
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-16">
          <div className="lg:w-5/12 relative">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Background Decorations */}
              <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-30 -z-10 transform -translate-x-4 translate-y-4"></div>
              
              {/* Photo Frame */}
              <div className="relative rounded-full overflow-hidden border-8 border-white shadow-xl">
                <Image 
                  src="/giselle.jpeg" 
                  alt="Giselle Silva - Designer de Sobrancelhas" 
                  width={400} 
                  height={400} 
                  className="object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -right-6 bottom-8 bg-white rounded-full shadow-lg py-2 px-4">
                <p className="text-sm font-medium text-pink-600">Especialista Certificada</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-7/12">
            <h3 className="text-2xl font-medium text-pink-600 mb-4">Giselle da Silva</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Com 2 anos de experiência no design de sobrancelhas, minha paixão é realçar a beleza natural de cada pessoa. Acredito que sobrancelhas bem cuidadas têm o poder de transformar completamente o rosto, trazendo harmonia e confiança.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Meu trabalho é personalizado para cada cliente, respeitando o formato do rosto, tom de pele e preferências individuais. Utilizo técnicas modernas e produtos de alta qualidade para garantir resultados impecáveis.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all">
                  <p className="text-3xl font-bold text-pink-600">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.text}</p>
                </div>
              ))}
            </div>
            
            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-700 mb-3">Especialidades:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Design de Sobrancelhas</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Micropigmentação</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Henna</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Manutenção</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}