import ScrollReveal from './ScrollReveal'

export default function CTASection({ heading, body, buttonText, buttonHref, dark = true }) {
  return (
    <section className={dark ? 'bg-bg-dark' : 'bg-bg-cream'}>
      <div className={`relative overflow-hidden ${dark ? 'bg-gradient-to-br from-bg-dark via-selva-deep/20 to-pluma-deep/10' : ''}`}>
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <ScrollReveal>
            <h2 className={`font-display text-3xl md:text-4xl font-bold mb-6 ${dark ? 'text-text-on-dark' : 'text-selva-deep'}`}>
              {heading}
            </h2>
          </ScrollReveal>

          {body && (
            <ScrollReveal delay={100}>
              <p className={`font-body text-lg mb-10 max-w-xl mx-auto ${dark ? 'text-text-on-dark/70' : 'text-text-secondary'}`}>
                {body}
              </p>
            </ScrollReveal>
          )}

          <ScrollReveal delay={200}>
            <a
              href={buttonHref}
              target={buttonHref?.startsWith('http') ? '_blank' : undefined}
              rel={buttonHref?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-selva-emerald to-selva-leaf text-text-on-dark font-body font-medium text-lg hover:from-pluma-rich hover:to-pluma-soft transition-all duration-400 shadow-[0_8px_32px_rgba(26,74,42,0.3)] hover:shadow-[0_12px_40px_rgba(139,54,112,0.3)]"
            >
              {buttonText}
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
