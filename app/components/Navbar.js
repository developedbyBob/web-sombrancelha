'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-10">
      <nav className="navbar-container px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-light text-pink-600">Logo</div>
        <ul className="hidden md:flex space-x-8">
          <li><Link href="/" className="text-gray-600 hover:text-pink-500 transition duration-300">Home</Link></li>
          <li><Link href="#sobre" className="text-gray-600 hover:text-pink-500 transition duration-300">Sobre</Link></li>
          <li><Link href="#servicos" className="text-gray-600 hover:text-pink-500 transition duration-300">Serviços</Link></li>
          <li><Link href="#depoimentos" className="text-gray-600 hover:text-pink-500 transition duration-300">Depoimentos</Link></li>
          <li><Link href="#contato" className="text-gray-600 hover:text-pink-500 transition duration-300">Contato</Link></li>
        </ul>
        <Link href="#contato" className="btn-primary hidden md:block">Agendar</Link>
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-gray-500 hover:text-pink-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden navbar-container`}>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-pink-500 hover:text-white transition duration-300">Home</Link>
        <Link href="#sobre" className="block py-2 px-4 text-sm hover:bg-pink-500 hover:text-white transition duration-300">Sobre</Link>
        <Link href="#servicos" className="block py-2 px-4 text-sm hover:bg-pink-500 hover:text-white transition duration-300">Serviços</Link>
        <Link href="#depoimentos" className="block py-2 px-4 text-sm hover:bg-pink-500 hover:text-white transition duration-300">Depoimentos</Link>
        <Link href="#contato" className="block py-2 px-4 text-sm hover:bg-pink-500 hover:text-white transition duration-300">Contato</Link>
        <Link href="#contato" className="block py-2 px-4 text-sm hover:bg-pink-500 hover:text-white transition duration-300">Agendar</Link>
      </div>
    </header>
  );
}
