export default function Hero({ breadcrumb, label, title, subtitle, meta, ctaPrimary, ctaSecondary, stat, children }) {
  return (
    <section className="relative bg-bg-dark overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-selva-deep/30 to-bg-dark" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />

      {/* SVG texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <pattern id="feather" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M30 0 Q35 15 30 30 Q25 15 30 0Z" fill="white" />
          <path d="M0 30 Q15 35 30 30 Q15 25 0 30Z" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#feather)" />
      </svg>

      <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-32 text-center">
        {breadcrumb && (
          <p className="font-body text-xs text-text-on-dark/40 mb-4 animate-fade-in-up tracking-wide">
            {breadcrumb}
          </p>
        )}

        {label && (
          <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-tierra-gold bg-tierra-gold/10 px-4 py-1.5 rounded-full mb-6 animate-fade-in-up animation-delay-200">
            {label}
          </span>
        )}

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-on-dark leading-tight mb-6 animate-fade-in-up animation-delay-200">
          {title}
        </h1>

        {subtitle && (
          <p className="font-body text-lg md:text-xl text-text-on-dark/70 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-400">
            {subtitle}
          </p>
        )}

        {meta && (
          <p className="font-body text-sm text-text-on-dark/40 mb-10 animate-fade-in-up animation-delay-400">
            {meta}
          </p>
        )}

        {(ctaPrimary || ctaSecondary) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            {ctaPrimary && (
              <a
                href={ctaPrimary.href}
                target={ctaPrimary.href?.startsWith('http') ? '_blank' : undefined}
                rel={ctaPrimary.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-selva-emerald to-selva-leaf text-text-on-dark font-body font-medium hover:from-pluma-rich hover:to-pluma-soft transition-all duration-400 shadow-[0_8px_32px_rgba(26,74,42,0.3)]"
              >
                {ctaPrimary.text}
              </a>
            )}
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="inline-block px-8 py-4 rounded-2xl border border-text-on-dark/20 text-text-on-dark/80 font-body font-medium hover:border-text-on-dark/40 hover:text-text-on-dark transition-all duration-400"
              >
                {ctaSecondary.text}
              </a>
            )}
          </div>
        )}

        {stat && (
          <p className="mt-12 font-body text-sm text-text-on-dark/50 animate-fade-in-up animation-delay-600">
            {stat}
          </p>
        )}

        {children}
      </div>
    </section>
  )
}
