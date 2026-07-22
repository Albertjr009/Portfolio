import { ExternalLink } from "lucide-react"
import { GitHubIcon } from "./SocialIcons"
import { projects } from "../data/portfolio"
import SectionHeading from "./SectionHeading"
import { Magnetic, Slides, Tilt } from "./animate-ui/Effects"

function ProjectCard({ project, large = false }) {
  return (
    <Tilt>
      <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm transition-all hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 dark:border-white/5 dark:bg-gray-900/40 dark:shadow-none">
        <div className={`relative overflow-hidden ${large ? "h-56" : "h-44"}`}>
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-gray-100/20 to-transparent dark:from-gray-950 dark:via-gray-950/20" />
          <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 transition-colors group-hover:bg-emerald-500/15 dark:text-emerald-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex gap-4">
            <Magnetic>
              <a
                href={project.liveUrl}
                className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
                target="_self"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            </Magnetic>
            {project.githubUrl && project.githubUrl !== "#" && (
              <Magnetic>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon size={14} />
                  Source Code
                </a>
              </Magnetic>
            )}
          </div>
        </div>
      </article>
    </Tilt>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Selected work"
          subtitle="Real projects that showcase my approach to frontend development - performance, polish, and user-first design."
        />

        <Slides className="mt-16 grid gap-8 lg:grid-cols-2" offset={36} holdDelay={0.08}>
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} large />
          ))}
        </Slides>

        {other.length > 0 && (
          <Slides className="mt-8 grid gap-6 sm:grid-cols-2" offset={30}>
            {other.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </Slides>
        )}
      </div>
    </section>
  )
}
