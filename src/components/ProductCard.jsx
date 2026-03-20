export default function ProductCard({ name, price, tag, gradient = 'from-selva-moss/30 to-selva-deep/20' }) {
  return (
    <div className="group bg-bg-moss rounded-2xl overflow-hidden border border-pluma-blush/20 shadow-[0_4px_20px_rgba(26,74,42,0.06)] hover:shadow-[0_12px_40px_rgba(26,74,42,0.12)] hover:-translate-y-1 transition-all duration-400">
      {/* Gradient placeholder for product image */}
      <div className={`aspect-[4/5] bg-gradient-to-br ${gradient} relative`}>
        {tag && (
          <span className="absolute top-4 left-4 font-body text-xs uppercase tracking-wider bg-selva-deep/90 text-text-on-dark px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-text-primary mb-1 group-hover:text-selva-deep transition-colors duration-300">
          {name}
        </h3>
        {price && (
          <p className="font-body text-sm text-tierra-copper font-medium">
            {price}
          </p>
        )}
      </div>
    </div>
  )
}
