'use client'
import { useState } from 'react';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';

registerLocale('pt-BR', ptBR);
setDefaultLocale('pt-BR');

export default function Contact() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('');

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const filterTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (
      (hours >= 9 && hours < 18) &&
      (minutes === 0 || minutes === 40)
    );
  };

  const formatPhoneNumber = (phone) => {
    if (phone.length === 11) {
      return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return phone;
  };

  const handleSubmit = () => {
    if (phone.length !== 11) {
      alert('Por favor, insira um número de telefone válido com 11 dígitos');
      return;
    }

    const formattedDate = format(selectedDate, 'dd/MM/yyyy HH:mm', { locale: ptBR });
    const formattedPhone = formatPhoneNumber(phone);
    const whatsappUrl = `https://wa.me/5521995960510?text=Nome:%20${encodeURIComponent(fullName)}%0ATelefone:%20${encodeURIComponent(formattedPhone)}%0AData%20e%20Hora:%20${encodeURIComponent(formattedDate)}%0AServiço:%20${encodeURIComponent(serviceType)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light mb-12 text-center text-pink-600">Entre em Contato</h2>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-6">
            <form className="bg-white p-6 rounded-lg shadow-sm" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nome Completo
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Telefone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="(21)999999999 - NAO SE ESQUEÇA DO DDD"
                  pattern="\d{11}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                  Agendar Horário
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  showTimeSelect
                  filterDate={isWeekday}
                  filterTime={filterTime}
                  dateFormat="Pp"
                  placeholderText="Selecione uma data e horário"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  locale="pt-BR"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
                  Tipo de Serviço
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="service"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  required
                >
                  <option value="">Selecione o serviço</option>
                  <option value="Design de sobrancelha">Design de sobrancelha</option>
                  <option value="Henna">Henna</option>
                  <option value="Micropigmentação">Micropigmentação</option>
                  <option value="Manutenção">Manutenção</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <button className="btn-primary" type="submit">
                  Agendar
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-4 text-pink-500">Informações de Contato</h3>
              <p className="mb-2">Endereço: Rua Raul Veiga, SN</p>
              <p className="mb-2">Telefone: (21) 99596-0510</p>
              <p className="mb-4">Email: sgiselle153@gmail.com</p>
              <div className="flex space-x-4">
                <a href="#" className="text-pink-500 hover:text-pink-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/giih_silv44/" target='_blank' className="text-pink-500 hover:text-pink-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.109675679532!2d-43.283522624365595!3d-22.76131073268878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997092036895dd%3A0x714a30748e4a23ea!2sR.%20Raul%20Veiga%20-%20Duque%20de%20Caxias%2C%20RJ%2C%2025265-008!5e0!3m2!1spt-BR!2sbr!4v1720492902091!5m2!1spt-BR!2sbr" 
              width="100%"
              height="170"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

