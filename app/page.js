import HeroSection from './components/HeroSection'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Portfolio />
      <FAQ />
      <Contact />
    </main>
  )
}
