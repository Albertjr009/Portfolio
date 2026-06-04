import { ArrowDown, Download, Mail } from "lucide-react"
import { personalInfo } from "../data/portfolio"
import { Fade, Fades, Magnetic, Slide } from "./animate-ui/Effects"

export default function Hero() {
  const scrollToSection = (event, id) => {
    event.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 mesh-bg">
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40 dark:opacity-[0.03]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Fade
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-600 dark:text-emerald-400"
          delay={0.08}
          inView={false}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {personalInfo.availability}
        </Fade>

        <Slide
          className="font-display text-5xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl"
          delay={0.16}
          direction="up"
          inView={false}
          offset={42}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name}</span>
        </Slide>

        <Fade
          className="mt-4 text-xl font-medium text-gray-600 dark:text-gray-400 sm:text-2xl"
          delay={0.28}
          inView={false}
        >
          {personalInfo.role}
        </Fade>

        <Fade
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400"
          delay={0.38}
          inView={false}
        >
          {personalInfo.tagline}
        </Fade>

        <Fades
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          holdDelay={0.48}
          inView={false}
        >
          <Magnetic>
            <a
              href="#projects"
              onClick={(event) => scrollToSection(event, "#projects")}
              className="block rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-gray-950 transition-all hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/30"
            >
              View My Work
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "#contact")}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-8 py-3.5 text-sm font-semibold text-gray-900 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
            >
              <Download size={16} />
              Download CV
            </a>
          </Magnetic>
        </Fades>

        <Fades
          className="mt-16 grid grid-cols-3 gap-6 border-t border-gray-200 pt-10 dark:border-white/5"
          holdDelay={0.62}
          inView={false}
        >
          {personalInfo.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </Fades>
      </div>

      <a
        href="#about"
        onClick={(event) => scrollToSection(event, "#about")}
        className="animate-float absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 transition-colors hover:text-emerald-600 dark:text-gray-600 dark:hover:text-emerald-400"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  )
}
