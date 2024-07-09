import Image from 'next/image'

export default function Portfolio() {
  const portfolioItems = [
    { before: '/sombra.jpg', after: '/sombra.jpg' },
    { before: '/sombra.jpg', after: '/sombra.jpg' },
    { before: '/sombra.jpg', after: '/sombra.jpg' },
  ]

  return (
    <section id="portfolio" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light mb-12 text-center text-pink-600">Antes e Depois</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full h-64 mb-4">
                <Image src={item.before} alt="Antes" layout="fill" objectFit="cover" className="rounded-lg" />
                <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-xs rounded">Antes</div>
              </div>
              <div className="relative w-full h-64">
                <Image src={item.after} alt="Depois" layout="fill" objectFit="cover" className="rounded-lg" />
                <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-xs rounded">Depois</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}