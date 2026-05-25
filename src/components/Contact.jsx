import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "./SocialIcons"
import { personalInfo, socialLinks } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
}

const inputClassName =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-600"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's work together"
          subtitle="Looking for a frontend developer? I'd love to hear about your team and the role."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-gray-600 dark:text-gray-400">
              Whether you&apos;re hiring for a full-time role or need a developer for
              a project, reach out — I typically respond within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-gray-700 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Mail size={18} />
                </div>
                {personalInfo.email}
              </a>
              <p className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MapPin size={18} />
                </span>
                {personalInfo.location}
              </p>
            </div>

            <div className="mt-10">
              <p className="text-sm font-medium text-gray-500">Find me online</p>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon]
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 text-gray-600 transition-all hover:border-emerald-500/50 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-emerald-400"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm dark:border-white/5 dark:bg-gray-900/40 dark:shadow-none"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  className={inputClassName}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about the role or project..."
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                required
                className={`${inputClassName} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-semibold text-gray-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 sm:w-auto sm:px-8"
            >
              <Send size={16} />
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
