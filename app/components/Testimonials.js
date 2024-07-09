export default function Testimonials() {
    const testimonials = [
      { text: 'As sobrancelhas ficaram perfeitas! Exatamente como eu queria.', author: 'Nome do Cliente' },
      { text: 'O atendimento é maravilhoso e o resultado incrível.', author: 'Nome do Cliente' },
      { text: 'Finalmente encontrei um designer que entende exatamente o que eu quero.', author: 'Nome do Cliente' },
    ]
  
    return (
      <section id="depoimentos" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">O que Nossos Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">"{testimonial.text}"</p>
                <p className="font-bold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }