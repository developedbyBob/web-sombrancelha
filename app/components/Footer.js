import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-pink-100 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-medium text-pink-600 mb-2">Designer de Sobrancelhas</h3>
            <p className="text-sm text-gray-600">Realçando sua beleza natural</p>
          </div>
          <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <h4 className="text-sm font-medium text-pink-600 mb-2">Links Rápidos</h4>
            <ul className="text-sm text-gray-600">
              <li>
                <Link href="/termos">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link href="/privacidade">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <p className="text-sm text-gray-600">&copy; 2024 Designer de Sobrancelhas. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
