export default function Services() {
    const services = [
      { title: 'Design de Sobrancelhas', description: 'Técnica personalizada para cada tipo de rosto.' },
      { title: 'Micropigmentação', description: 'Sobrancelhas semipermanentes para um visual sempre perfeito.' },
      { title: 'Henna', description: 'Definição e cor temporária para suas sobrancelhas.' },
      { title: 'Manutenção', description: 'Toques regulares para manter suas sobrancelhas impecáveis.' },
    ]
  
    return (
      <section id="servicos" className="bg-pink-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center text-pink-600">Serviços Oferecidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <h3 className="font-medium text-xl mb-3 text-pink-500">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }