export default function FAQ() {
    const faqs = [
      {
        question: 'Quanto tempo dura a micropigmentação?',
        answer: 'A duração média é de 1 a 2 anos, dependendo do tipo de pele e cuidados.',
      },
      {
        question: 'É possível agendar uma consulta online?',
        answer: 'Sim, use nosso sistema de agendamento online para marcar seu horário.',
      },
      {
        question: 'Quais são os cuidados pós-procedimento?',
        answer: 'Evite exposição ao sol e siga as instruções fornecidas para garantir a melhor cicatrização.',
      },
    ]
  
    return (
      <section id="faq" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center text-pink-600">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2 text-pink-500">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }