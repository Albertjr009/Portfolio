import { Fade, Slide } from "./animate-ui/Effects"

export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="text-center">
      <Fade className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
        {label}
      </Fade>
      <Slide className="mt-3 font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl" offset={24}>
        {title}
      </Slide>
      {subtitle && (
        <Fade className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400" delay={0.08}>
          {subtitle}
        </Fade>
      )}
    </div>
  )
}
