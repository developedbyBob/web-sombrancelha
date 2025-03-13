import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-white -z-10"></div>
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-pink-100 blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-pink-100 blur-3xl opacity-60 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-6 text-gray-800 leading-tight">
              <span className="block">Realce Sua Beleza</span>
              <span className="text-pink-600 font-medium">Com Sobrancelhas Perfeitas</span>
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-600 max-w-xl mx-auto lg:mx-0">
              Design de sobrancelhas personalizado que valoriza suas características naturais e realça a harmonia do seu rosto
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#contato">
                <button className="btn-primary text-base font-medium py-3 px-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full shadow-lg hover:shadow-xl transform transition hover:-translate-y-1">
                  Agende Sua Consulta
                </button>
              </Link>
              <Link href="#servicos">
                <button className="text-base font-medium py-3 px-8 border border-pink-300 text-pink-600 rounded-full hover:bg-pink-50 transition">
                  Conheça os Serviços
                </button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-pink-200 flex items-center justify-center text-xs font-medium">
                  ★
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-pink-300 flex items-center justify-center text-xs font-medium">
                  ★
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-pink-400 flex items-center justify-center text-xs font-medium">
                  ★
                </div>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-800">+300 clientes satisfeitos</p>
                <p className="text-gray-500">Avaliação média de 4.9 estrelas</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative z-10">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-100 rounded-full -z-10"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="/images.jpeg" 
                  alt="Design de sobrancelhas" 
                  width={500} 
                  height={600} 
                  className="object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -left-6 top-1/4 bg-white rounded-lg shadow-lg p-3 flex items-center space-x-2">
                <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  ✓
                </div>
                <p className="text-sm font-medium">Atendimento personalizado</p>
              </div>
              
              <div className="absolute -right-6 bottom-1/4 bg-white rounded-lg shadow-lg p-3 flex items-center space-x-2">
                <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  ♥
                </div>
                <p className="text-sm font-medium">Técnicas modernas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}