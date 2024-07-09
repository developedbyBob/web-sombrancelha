import Image from 'next/image'

export default function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light mb-12 text-center text-pink-600">Sobre Mim</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/giselle.jpeg" alt="Designer de Sobrancelhas" width={400} height={400} className="rounded-full shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Sou Giselle da Silva, especialista em design de sobrancelhas com 2 anos de experiência. Meu objetivo é realçar a beleza natural de cada cliente, oferecendo um serviço personalizado e de alta qualidade. Acredito que sobrancelhas bem cuidadas podem transformar completamente o rosto, trazendo harmonia e confiança para cada pessoa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}