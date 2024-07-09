import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-pink-50 py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-pink-600">Realce Sua Beleza com Sobrancelhas Perfeitas</h1>
          <p className="text-xl mb-8 text-gray-600">Design de sobrancelhas personalizado para realçar suas melhores características</p>
          <Link href="#contato">
            <button className="btn-primary text-lg">Agende Sua Consulta Agora</button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image src="/images.jpeg" alt="Sobrancelhas perfeitas" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}
