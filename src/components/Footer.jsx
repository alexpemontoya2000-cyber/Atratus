import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-on-dark">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Atratus</h3>
            <p className="text-text-on-dark/60 font-body text-sm leading-relaxed">
              Ropa outdoor diseñada en Colombia, para el monte colombiano. Nacimos de biólogos y ecólogos que caminan los mismos senderos que vos.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-body text-sm uppercase tracking-widest text-text-on-dark/40 mb-4">Contenido</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/blog/que-llevar-caminata-monte-colombiano" className="font-body text-sm text-text-on-dark/70 hover:text-tierra-gold transition-colors duration-300">
                  Guía: Qué llevar al monte
                </Link>
              </li>
              <li>
                <Link to="/ropa-avistamiento-aves-colombia" className="font-body text-sm text-text-on-dark/70 hover:text-tierra-gold transition-colors duration-300">
                  Ropa para avistamiento de aves
                </Link>
              </li>
              <li>
                <a href="https://atratuscolombia.com" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-text-on-dark/70 hover:text-tierra-gold transition-colors duration-300">
                  Tienda Atratus
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-sm uppercase tracking-widest text-text-on-dark/40 mb-4">Seguinos</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/atratuscolombia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text-on-dark/60 hover:text-tierra-gold transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@atratuscolombia" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-text-on-dark/60 hover:text-tierra-gold transition-colors duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.86 2.86 0 0 1 .86.13V9.01a6.28 6.28 0 0 0-1-.05 6.33 6.33 0 0 0-6.33 6.33 6.33 6.33 0 0 0 6.33 6.33A6.33 6.33 0 0 0 15.7 15.3V8.73a8.28 8.28 0 0 0 3.89.96V6.69Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-text-on-dark/40">
            &copy; {new Date().getFullYear()} Atratus Colombia. Hecho en Colombia, para el monte colombiano.
          </p>
          <p className="font-body text-xs text-text-on-dark/30 italic">
            Colección Piel de Selva — Inspirada en el Colibrí Paramuno
          </p>
        </div>
      </div>
    </footer>
  )
}
