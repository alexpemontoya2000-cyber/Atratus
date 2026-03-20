export default function CalloutCard({ stat, text, variant = 'green' }) {
  const borderColor = variant === 'green'
    ? 'border-selva-emerald'
    : variant === 'pluma'
    ? 'border-pluma-soft'
    : 'border-tierra-gold'

  const statColor = variant === 'green'
    ? 'text-selva-deep'
    : variant === 'pluma'
    ? 'text-pluma-deep'
    : 'text-tierra-copper'

  return (
    <div className={`bg-bg-moss rounded-2xl p-6 md:p-8 border-l-4 ${borderColor} shadow-[0_8px_32px_rgba(26,74,42,0.08)]`}>
      {stat && (
        <p className={`font-display text-2xl md:text-3xl font-bold ${statColor} mb-3`}>
          {stat}
        </p>
      )}
      <p className="text-text-secondary font-body text-base leading-relaxed">
        {text}
      </p>
    </div>
  )
}
