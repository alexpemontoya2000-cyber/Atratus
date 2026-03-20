import { useEffect } from 'react'
import { setSEO } from '../utils/seo'
import Hero from '../components/Hero'
import ScrollReveal from '../components/ScrollReveal'
import StatCounter from '../components/StatCounter'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-selva-deep">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 10v2M16 20v2M10 16h2M20 16h2" />
        <path d="M12 12l1.5 1.5M18.5 18.5L20 20M12 20l1.5-1.5M18.5 13.5L20 12" />
      </svg>
    ),
    title: 'Silencio',
    description: 'Telas que no hacen ruido al moverte. Las aves escuchan todo.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-selva-deep">
        <path d="M8 24c0-8 4-16 8-16s8 8 8 16" />
        <path d="M6 24h20" />
        <path d="M12 18c1-2 2.5-3 4-3s3 1 4 3" />
      </svg>
    ),
    title: 'Impermeabilidad',
    description: '4 horas bajo la lluvia del Chocó esperando al Gallito de Roca. Tu ropa tiene que aguantar.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-selva-deep">
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" />
        <circle cx="16" cy="16" r="6" />
        <path d="M8 8l2 2M22 22l2 2M8 24l2-2M22 10l2-2" />
      </svg>
    ),
    title: 'Protección',
    description: 'Manga larga UV + repelencia. En zonas bajo 2.000m, los mosquitos no perdonan.',
  },
]

const products = [
  {
    name: 'Cuellito Colibrí Paramuno',
    price: '$45.000 COP',
    tag: 'Piel de Selva',
    gradient: 'from-pluma-deep/30 to-pluma-soft/20',
  },
  {
    name: 'Camisa Manga Larga Técnica',
    price: '$120.000 COP',
    tag: 'Para avistamiento',
    gradient: 'from-selva-moss/30 to-selva-leaf/20',
  },
  {
    name: 'Pantalón de Trekking',
    price: '$180.000 COP',
    tag: 'Para avistamiento',
    gradient: 'from-tierra-copper/20 to-tierra-warm/15',
  },
  {
    name: 'Chaqueta Impermeable Liviana',
    price: '$250.000 COP',
    tag: 'Esencial',
    gradient: 'from-selva-deep/30 to-selva-emerald/20',
  },
]

export default function LandingAves() {
  useEffect(() => {
    setSEO({
      title: 'Ropa para avistamiento de aves en Colombia | Atratus — Piel de Selva',
      description: 'Ropa técnica diseñada por biólogos colombianos para avistamiento de aves. Silenciosa, impermeable, con protección UV. Colección Piel de Selva inspirada en el Colibrí Paramuno.',
      canonical: 'https://atratus-seo-content.vercel.app/ropa-avistamiento-aves-colombia',
    })
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* HERO */}
      <Hero
        label="Colección Piel de Selva"
        title="Ropa para avistamiento de aves en Colombia"
        subtitle="Diseñada por quienes viven el monte — para quienes lo caminan"
        ctaPrimary={{ text: 'Ver colección →', href: 'https://atratuscolombia.com' }}
        ctaSecondary={{ text: '¿Por qué Atratus?', href: '#por-que' }}
        stat="Colombia: #1 del mundo · 1.950+ especies · Global Big Day líder"
      />

      {/* ¿POR QUÉ LA ROPA IMPORTA? */}
      <section id="por-que" className="bg-bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-selva-deep text-center mb-4">
              ¿Por qué la ropa importa en avistamiento?
            </h2>
            <p className="font-body text-text-muted text-center mb-14 max-w-xl mx-auto">
              Cada detalle cuenta cuando el objetivo es observar sin perturbar.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 150}>
                <div className="bg-bg-moss rounded-2xl p-8 border border-pluma-blush/15 shadow-[0_4px_20px_rgba(26,74,42,0.06)] hover:shadow-[0_12px_40px_rgba(26,74,42,0.1)] hover:-translate-y-1 transition-all duration-400 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-selva-deep/5 mb-6">
                    {f.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-primary mb-3">
                    {f.title}
                  </h3>
                  <p className="font-body text-text-secondary text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NACIMOS DEL MONTE */}
      <section className="bg-bg-dark">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="font-body text-xs uppercase tracking-[0.2em] text-tierra-gold mb-4 block">
                  Nuestra historia
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-text-on-dark mb-6">
                  Nacimos del monte
                </h2>
                <p className="font-body text-text-on-dark/70 text-lg leading-relaxed mb-4">
                  No diseñamos ropa outdoor desde una oficina. La diseñamos caminando los mismos senderos que vos.
                </p>
                <p className="font-body text-text-on-dark/60 leading-relaxed">
                  Toña, ecóloga, y Mate, biólogo, fundaron Atratus después de años caminando el monte colombiano con ropa que no estaba diseñada para este territorio. Probaron telas bajo la lluvia del Chocó, subieron páramos con prototipos y convirtieron esa experiencia en productos reales para quienes viven el monte como ellos.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              {/* Decorative gradient placeholder for founder photo */}
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-selva-deep/40 via-pluma-deep/20 to-tierra-copper/30 shadow-[0_16px_64px_rgba(26,74,42,0.2)]">
                <div className="w-full h-full rounded-3xl bg-gradient-to-t from-bg-dark/40 to-transparent flex items-end justify-center pb-8">
                  <p className="font-body text-xs text-text-on-dark/30 italic">Toña & Mate — Fundadores</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="bg-bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-pluma-deep text-center mb-4">
              Productos destacados
            </h2>
            <p className="font-body text-text-muted text-center mb-14 max-w-lg mx-auto">
              Cada prenda pensada para el avistamiento de aves en condiciones tropicales.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 100}>
                <ProductCard {...p} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center mt-12">
              <a
                href="https://atratuscolombia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-selva-deep font-medium hover:text-pluma-rich transition-colors duration-300 inline-flex items-center gap-2"
              >
                Ver todo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* COLOMBIA: EL PARAÍSO DE LAS AVES */}
      <section className="bg-bg-moss">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-selva-deep text-center mb-16">
              Colombia: el paraíso de las aves
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal delay={0}>
              <StatCounter end={1950} suffix="+" label="Especies registradas" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <StatCounter end={78000} suffix="+" label="Comunidad Atratus" />
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <StatCounter prefix="#" end={1} suffix="" label="Del mundo en Global Big Day" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTASection
        heading="El monte colombiano necesitaba su propia marca. Aquí está."
        buttonText="Conocé Atratus →"
        buttonHref="https://atratuscolombia.com"
        dark
      />
    </main>
  )
}
