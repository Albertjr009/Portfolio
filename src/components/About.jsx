import { MapPin, Code2 } from "lucide-react"
import { personalInfo } from "../data/portfolio"
import SectionHeading from "./SectionHeading"
import { Fades, Slide, Tilt } from "./animate-ui/Effects"

const highlights = [
  "Pixel-perfect implementation from Figma to production",
  "Strong focus on accessibility (WCAG) and performance",
  "Experience collaborating with designers and backend teams",
  "Passionate about clean code and reusable components",
]

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About Me"
          title="Building interfaces that make an impact"
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Slide className="relative" direction="left">
            <Tilt>
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-gray-900/50">
                <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 ring-2 ring-emerald-500/30">
                  <span className="font-display text-6xl font-bold gradient-text">
                    {personalInfo.name.charAt(0)}
                  </span>
                </div>
                <div className="mt-6 space-y-3 text-center">
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400">{personalInfo.role}</p>
                  <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <MapPin size={14} />
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </Tilt>
          </Slide>

          <Slide direction="right" delay={0.08}>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {personalInfo.bio}
            </p>
            <Fades className="mt-8 space-y-4" holdDelay={0.14}>
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <Code2 size={18} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </Fades>
          </Slide>
        </div>
      </div>
    </section>
  )
}
