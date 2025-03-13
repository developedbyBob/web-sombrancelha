'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { format, addDays, setHours, setMinutes, isAfter } from 'date-fns';

registerLocale('pt-BR', ptBR);
setDefaultLocale('pt-BR');

export default function Contact() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [step, setStep] = useState(1);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);

  // Função para formatar o número de telefone
  const formatPhoneNumber = (value) => {
    // Remove tudo que não é dígito
    const cleaned = value.replace(/\D/g, '');
    
    // Verifica se tem o tamanho correto para formatar
    if (cleaned.length === 11) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
    } else if (cleaned.length > 11) {
      // Limita a 11 dígitos
      return formatPhoneNumber(cleaned.slice(0, 11));
    }
    
    // Retorna o valor sem formatação se não tiver o tamanho correto
    return cleaned;
  };

  // Handler para atualizar o telefone com formatação
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const formattedValue = formatPhoneNumber(value);
    setPhone(formattedValue);
  };

  // Handler para avançar para o próximo passo
  const handleNextStep = () => {
    if (step === 1) {
      // Validação básica
      if (!fullName.trim()) {
        setFormError('Por favor, informe seu nome completo');
        return;
      }
      
      if (phone.replace(/\D/g, '').length !== 11) {
        setFormError('Por favor, informe um número de telefone válido com 11 dígitos');
        return;
      }
      
      setFormError('');
      setStep(2);
    } else if (step === 2) {
      if (!serviceType) {
        setFormError('Por favor, selecione um serviço');
        return;
      }
      
      setFormError('');
      setStep(3);
    }
  };

  // Handler para voltar para o passo anterior
  const handlePrevStep = () => {
    setStep(step - 1);
    setFormError('');
  };

  // Configurações do DatePicker
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0 = domingo, 6 = sábado
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return isAfter(selectedDate, currentDate);
  };

  // Configurar horários específicos disponíveis (9h às 18h, a cada 40 minutos)
  const getAvailableTimes = () => {
    // Array para armazenar os horários disponíveis
    let times = [];
    
    // Horário de início: 9h
    let start = setHours(setMinutes(new Date(), 0), 9);
    
    // Horário de fim: 18h
    const end = setHours(setMinutes(new Date(), 0), 18);
    
    // Gerar horários a cada 40 minutos
    while (start.getTime() < end.getTime()) {
      times.push(new Date(start));
      // Adicionar 40 minutos
      start = new Date(start.getTime() + 40 * 60000);
    }
    
    return times;
  };

  // Função para enviar o agendamento
  const handleSubmit = () => {
    if (!selectedDate) {
      setFormError('Por favor, selecione uma data e horário');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simular envio de formulário
    setTimeout(() => {
      const formattedDate = format(selectedDate, 'dd/MM/yyyy HH:mm', { locale: ptBR });
      const rawPhone = phone.replace(/\D/g, '');
      const whatsappUrl = `https://wa.me/5521995960510?text=Nome:%20${encodeURIComponent(fullName)}%0ATelefone:%20${encodeURIComponent(phone)}%0AData%20e%20Hora:%20${encodeURIComponent(formattedDate)}%0AServiço:%20${encodeURIComponent(serviceType)}`;
      
      // Abrir WhatsApp em nova aba
      window.open(whatsappUrl, '_blank');
      
      // Mostrar mensagem de sucesso
      setAppointmentSuccess(true);
      setIsSubmitting(false);
      
      // Resetar formulário após 5 segundos
      setTimeout(() => {
        setAppointmentSuccess(false);
        setStep(1);
        setFullName('');
        setPhone('');
        setServiceType('');
        setSelectedDate(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Agende Seu Horário</h2>
        
        <div className="mt-16 flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative">
              {/* Indicador de progresso */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                      step >= 1 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      1
                    </div>
                    <div className={`h-1 w-12 mx-2 ${
                      step >= 2 ? 'bg-pink-500' : 'bg-gray-200'
                    }`}></div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                      step >= 2 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      2
                    </div>
                    <div className={`h-1 w-12 mx-2 ${
                      step >= 3 ? 'bg-pink-500' : 'bg-gray-200'
                    }`}></div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                      step >= 3 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      3
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    Passo {step} de 3
                  </div>
                </div>
                
                {appointmentSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-gray-800 mb-4">Agendamento Realizado!</h3>
                    <p className="text-gray-600 mb-6">Seu agendamento foi enviado com sucesso. Em breve entraremos em contato para confirmação.</p>
                    <p className="text-sm text-green-600">Redirecionando para o WhatsApp...</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); step === 3 ? handleSubmit() : handleNextStep(); }}>
                    {/* Passo 1: Informações pessoais */}
                    {step === 1 && (
                      <div>
                        <h3 className="text-xl font-medium text-gray-800 mb-6">Informações Pessoais</h3>
                        
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                            Nome Completo
                          </label>
                          <input
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition"
                            id="name"
                            type="text"
                            placeholder="Seu nome completo"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="mb-6">
                          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                            Telefone
                          </label>
                          <input
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition"
                            id="phone"
                            type="tel"
                            placeholder="(21) 99999-9999"
                            value={phone}
                            onChange={handlePhoneChange}
                            required
                          />
                          <p className="text-xs text-gray-500 mt-1">Informe o DDD + número (11 dígitos)</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Passo 2: Seleção de serviço */}
                    {step === 2 && (
                      <div>
                        <h3 className="text-xl font-medium text-gray-800 mb-6">Selecione o Serviço</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          {[
                            { id: 'design', name: 'Design de sobrancelha', price: 'R$ 60,00' },
                            { id: 'henna', name: 'Henna', price: 'R$ 70,00' },
                            { id: 'micro', name: 'Micropigmentação', price: 'R$ 280,00' },
                            { id: 'manut', name: 'Manutenção', price: 'R$ 50,00' }
                          ].map((service) => (
                            <div 
                              key={service.id}
                              className={`cursor-pointer rounded-lg border p-4 transition-all ${
                                serviceType === service.name 
                                  ? 'border-pink-500 bg-pink-50 shadow-sm' 
                                  : 'border-gray-200 hover:border-pink-300'
                              }`}
                              onClick={() => setServiceType(service.name)}
                            >
                              <div className="flex items-center">
                                <div className={`w-5 h-5 rounded-full border flex-shrink-0 mr-3 ${
                                  serviceType === service.name 
                                    ? 'border-pink-500 bg-pink-500' 
                                    : 'border-gray-300'
                                }`}>
                                  {serviceType === service.name && (
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                  )}
                                </div>
                                <div>
                                  <p className="font-medium text-gray-800">{service.name}</p>
                                  <p className="text-sm text-pink-600">{service.price}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Passo 3: Seleção de data e hora */}
                    {step === 3 && (
                      <div>
                        <h3 className="text-xl font-medium text-gray-800 mb-6">Escolha a Data e Horário</h3>
                        
                        <div className="mb-6">
                          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="date">
                            Data e Horário Disponíveis
                          </label>
                          <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            showTimeSelect
                            timeIntervals={40}
                            filterDate={isWeekday}
                            filterTime={filterPassedTime}
                            injectTimes={getAvailableTimes()}
                            dateFormat="Pp"
                            placeholderText="Selecione uma data e horário"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition"
                            locale="pt-BR"
                            minDate={new Date()}
                            maxDate={addDays(new Date(), 30)}
                            required
                          />
                          <p className="text-xs text-gray-500 mt-1">Disponível de segunda a sexta, das 9h às 18h</p>
                        </div>
                        
                        <div className="mb-6 p-4 bg-pink-50 rounded-lg">
                          <h4 className="font-medium text-gray-800 mb-2">Resumo do Agendamento</h4>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span className="text-gray-600">Nome:</span>
                              <span className="font-medium text-gray-800">{fullName}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-600">Telefone:</span>
                              <span className="font-medium text-gray-800">{phone}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-600">Serviço:</span>
                              <span className="font-medium text-gray-800">{serviceType}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-gray-600">Data e Hora:</span>
                              <span className="font-medium text-gray-800">
                                {selectedDate ? format(selectedDate, 'dd/MM/yyyy HH:mm', { locale: ptBR }) : ''}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {/* Mensagem de erro */}
                    {formError && (
                      <div className="mb-6 p-3 bg-red-50 rounded-lg text-red-600 text-sm">
                        {formError}
                      </div>
                    )}
                    
                    {/* Botões de navegação */}
                    <div className="flex justify-between pb-6">
                      {step > 1 ? (
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                        >
                          Voltar
                        </button>
                      ) : (
                        <div></div>
                      )}
                      
                      <button
                        type="submit"
                        className={`px-6 py-3 rounded-lg text-white transition ${
                          isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-pink-400 to-pink-600 hover:shadow-md transform hover:-translate-y-1'
                        }`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processando...
                          </span>
                        ) : step === 3 ? 'Finalizar Agendamento' : 'Continuar'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* Informações de contato */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
              <div className="p-6">
                <h3 className="text-xl font-medium text-pink-600 mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-pink-100 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Endereço</h4>
                      <p className="text-gray-600">Rua Raul Veiga, SN</p>
                      <p className="text-gray-600">Duque de Caxias, RJ</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-pink-100 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Telefone</h4>
                      <p className="text-gray-600">(21) 99596-0510</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-pink-100 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">sgiselle153@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-pink-100 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Horário de Funcionamento</h4>
                      <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    </div>
                  </div>
                </div>
                
                {/* Redes sociais */}
                <div className="mt-8">
                  <h4 className="font-medium text-gray-800 mb-4">Siga nas Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/giih_silv44/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-full p-3 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-full p-3 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a 
                      href="https://wa.me/5521995960510" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-full p-3 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Mapa */}
                <div className="mt-8">
                  <h4 className="font-medium text-gray-800 mb-4">Localização</h4>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.109675679532!2d-43.283522624365595!3d-22.76131073268878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997092036895dd%3A0x714a30748e4a23ea!2sR.%20Raul%20Veiga%20-%20Duque%20de%20Caxias%2C%20RJ%2C%2025265-008!5e0!3m2!1spt-BR!2sbr!4v1720492902091!5m2!1spt-BR!2sbr" 
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      aria-hidden="false"
                      tabIndex="0"
                    ></iframe>
                  </div>
                </div>
                
                {/* Aviso de tempo de resposta */}
                <div className="mt-8 bg-pink-50 rounded-lg p-4 flex items-start">
                  <div className="bg-pink-100 rounded-full p-2 mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Tempo de Resposta</h5>
                    <p className="text-sm text-gray-600">Normalmente respondemos em até 2 horas durante o horário comercial. Agradecemos sua paciência!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}