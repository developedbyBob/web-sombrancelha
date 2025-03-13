import HeroSection from './components/HeroSection'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import ScrollAnimation from './components/ScrollAnimation'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Sobre */}
      <ScrollAnimation>
        <About />
      </ScrollAnimation>
      
      {/* Serviços */}
      <ScrollAnimation>
        <Services />
      </ScrollAnimation>
      
      {/* Portfolio (Antes e Depois) */}
      <ScrollAnimation>
        <Portfolio />
      </ScrollAnimation>
      
      {/* Depoimentos */}
      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation>
      
      {/* FAQ */}
      <ScrollAnimation>
        <FAQ />
      </ScrollAnimation>
      
      {/* Contato */}
      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>
    </>
  )
}