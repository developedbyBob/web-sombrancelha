import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Design de Sobrancelhas - Sua Beleza Realçada",
  description: "Especializada em design de sobrancelhas, proporcionando uma aparência perfeita e natural.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
