import { skills } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          subtitle="A toolkit built for modern frontend development — from concept to deployment."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="group rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-emerald-500/30 dark:border-white/5 dark:bg-gray-900/40 dark:shadow-none dark:hover:border-emerald-500/30 dark:hover:bg-gray-900/60"
            >
              <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors group-hover:border-emerald-500/20 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
