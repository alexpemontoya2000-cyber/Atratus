import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/blog/que-llevar-caminata-monte-colombiano', label: 'Blog' },
    { to: '/ropa-avistamiento-aves-colombia', label: 'Avistamiento' },
  ]

  const isDark = location.pathname !== '/'

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md ${isDark ? 'bg-bg-dark/90' : 'bg-bg-cream/90'} border-b ${isDark ? 'border-white/10' : 'border-selva-deep/10'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className={`font-display text-xl font-bold tracking-wide ${isDark ? 'text-text-on-dark' : 'text-selva-deep'}`}>
          Atratus
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm tracking-wide transition-colors duration-300 ${
                location.pathname === l.to
                  ? isDark ? 'text-tierra-gold' : 'text-selva-deep font-medium'
                  : isDark ? 'text-text-on-dark/70 hover:text-text-on-dark' : 'text-text-secondary hover:text-selva-deep'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://atratuscolombia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm px-5 py-2 rounded-xl bg-selva-emerald text-text-on-dark hover:bg-selva-leaf transition-all duration-300"
          >
            Tienda
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${isDark ? 'text-text-on-dark' : 'text-text-primary'}`}
          aria-label="Menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden px-6 pb-6 ${isDark ? 'bg-bg-dark' : 'bg-bg-cream'}`}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 font-body text-base ${
                isDark ? 'text-text-on-dark/80 hover:text-text-on-dark' : 'text-text-secondary hover:text-selva-deep'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://atratuscolombia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-center py-3 rounded-xl bg-selva-emerald text-text-on-dark font-body"
          >
            Tienda
          </a>
        </div>
      )}
    </nav>
  )
}
