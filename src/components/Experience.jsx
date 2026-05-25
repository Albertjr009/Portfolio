import { Briefcase } from "lucide-react"
import { experience } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Experience"
          title="Where I've worked"
          subtitle="National service experience supporting cocoa health and extension programs."
        />

        <div className="relative mt-16">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent md:block" />

          <div className="space-y-12">
            {experience.map((job) => (
              <div key={job.company} className="relative flex gap-8 md:pl-16">
                <div className="absolute left-6 top-1 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-emerald-500 bg-white dark:bg-gray-950 md:block" />

                <div className="flex-1 rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-emerald-500/30 dark:border-white/5 dark:bg-gray-900/40 dark:shadow-none dark:hover:border-emerald-500/20">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
                        {job.role}
                      </h3>
                      <p className="mt-1 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                        <Briefcase size={14} />
                        {job.company}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400">
                      {job.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
