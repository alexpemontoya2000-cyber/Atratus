import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BlogArticle from './pages/BlogArticle'
import LandingAves from './pages/LandingAves'

function Home() {
  return (
    <main className="min-h-screen bg-bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-selva-deep mb-6">
          Atratus Colombia
        </h1>
        <p className="font-body text-text-secondary text-lg mb-10">
          Contenido SEO — Colección Piel de Selva
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/blog/que-llevar-caminata-monte-colombiano"
            className="inline-block px-8 py-4 rounded-2xl bg-selva-deep text-text-on-dark font-body font-medium hover:bg-selva-emerald transition-all duration-400"
          >
            Blog: Guía de Senderismo
          </Link>
          <Link
            to="/ropa-avistamiento-aves-colombia"
            className="inline-block px-8 py-4 rounded-2xl bg-pluma-deep text-text-on-dark font-body font-medium hover:bg-pluma-rich transition-all duration-400"
          >
            Landing: Avistamiento de Aves
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/que-llevar-caminata-monte-colombiano" element={<BlogArticle />} />
          <Route path="/ropa-avistamiento-aves-colombia" element={<LandingAves />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
