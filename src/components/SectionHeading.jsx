export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
        {label}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  )
}
