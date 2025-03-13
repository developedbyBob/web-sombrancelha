import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-pink-100 to-pink-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Seção Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1: Logo e Sobre */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-medium text-pink-600 flex items-center">
                <span className="mr-2">✨</span>
                <span className="font-serif italic">Giselle Silva</span>
              </span>
            </div>
            <p className="text-gray-600 mb-6">Especialista em design de sobrancelhas, proporcionando uma aparência perfeita e natural para realçar sua beleza.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/giih_silv44/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-pink-500 hover:text-pink-600 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a 
                href="https://wa.me/5521995960510" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-lg font-medium text-pink-600 mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-pink-500 transition">Home</Link>
              </li>
              <li>
                <Link href="#sobre" className="text-gray-600 hover:text-pink-500 transition">Sobre</Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gray-600 hover:text-pink-500 transition">Serviços</Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-600 hover:text-pink-500 transition">Portfolio</Link>
              </li>
              <li>
                <Link href="#contato" className="text-gray-600 hover:text-pink-500 transition">Contato</Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3: Serviços */}
          <div>
            <h3 className="text-lg font-medium text-pink-600 mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#servicos" className="text-gray-600 hover:text-pink-500 transition">Design de Sobrancelhas</Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gray-600 hover:text-pink-500 transition">Micropigmentação</Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gray-600 hover:text-pink-500 transition">Henna</Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gray-600 hover:text-pink-500 transition">Manutenção</Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 4: Contato */}
          <div>
            <h3 className="text-lg font-medium text-pink-600 mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">Rua Raul Veiga, SN<br />Duque de Caxias, RJ</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-600">(21) 99596-0510</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">sgiselle153@gmail.com</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Seg-Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Separador */}
        <div className="border-t border-pink-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              &copy; {currentYear} Giselle Silva Design de Sobrancelhas. Todos os direitos reservados.
            </p>
            
            {/* Links de política */}
            <div className="flex space-x-6">
              <Link href="/termos" className="text-sm text-gray-600 hover:text-pink-500 transition">
                Termos de Serviço
              </Link>
              <Link href="/privacidade" className="text-sm text-gray-600 hover:text-pink-500 transition">
                Política de Privacidade
              </Link>
            </div>
          </div>
          
          {/* Créditos do desenvolvedor */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              Desenvolvido com ❤️ por <a href="https://github.com/developedbyBob" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Bob</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}