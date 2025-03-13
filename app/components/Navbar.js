'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <nav className="navbar-container flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-medium text-pink-600 flex items-center">
            <span className="mr-2">✨</span>
            <span className="font-serif italic">Giselle Silva</span>
          </div>
        </Link>
        
        <ul className="hidden md:flex space-x-8">
          <li><Link href="/" className="text-gray-700 hover:text-pink-500 transition duration-300 font-light">Home</Link></li>
          <li><Link href="#sobre" className="text-gray-700 hover:text-pink-500 transition duration-300 font-light">Sobre</Link></li>
          <li><Link href="#servicos" className="text-gray-700 hover:text-pink-500 transition duration-300 font-light">Serviços</Link></li>
          <li><Link href="#portfolio" className="text-gray-700 hover:text-pink-500 transition duration-300 font-light">Portfolio</Link></li>
          <li><Link href="#depoimentos" className="text-gray-700 hover:text-pink-500 transition duration-300 font-light">Depoimentos</Link></li>
          <li><Link href="#contato" className="text-gray-700 hover:text-pink-500 transition duration-300 font-light">Contato</Link></li>
        </ul>
        
        <Link href="#contato" className="hidden md:block bg-gradient-to-r from-pink-400 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
          Agendar Agora
        </Link>
        
        <div className="md:hidden flex items-center">
          <button 
            className="outline-none focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <div className={`w-6 h-0.5 bg-pink-600 transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-pink-600 mt-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-pink-600 mt-1.5 transition-all duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </nav>
      
      <div className={`${isOpen ? 'max-h-96' : 'max-h-0'} md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white shadow-lg`}>
        <div className="navbar-container py-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 hover:text-pink-500 transition">Home</Link>
          <Link href="#sobre" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 hover:text-pink-500 transition">Sobre</Link>
          <Link href="#servicos" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 hover:text-pink-500 transition">Serviços</Link>
          <Link href="#portfolio" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 hover:text-pink-500 transition">Portfolio</Link>
          <Link href="#depoimentos" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 hover:text-pink-500 transition">Depoimentos</Link>
          <Link href="#contato" onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 hover:text-pink-500 transition">Contato</Link>
          <Link href="#contato" onClick={() => setIsOpen(false)} className="block mx-4 my-3 py-2 bg-gradient-to-r from-pink-400 to-pink-600 text-white text-center rounded-full">Agendar Agora</Link>
        </div>
      </div>
    </header>
  );
}