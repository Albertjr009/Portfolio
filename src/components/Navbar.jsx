import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { navLinks, personalInfo } from "../data/portfolio"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const scrollToSection = (event, href) => {
    event.preventDefault()

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsOpen(false)
      return
    }

    const section = document.querySelector(href)
    section?.scrollIntoView({ behavior: "smooth", block: "start" })
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 bg-white/80 shadow-lg shadow-gray-200/50 backdrop-blur-xl dark:border-white/5 dark:bg-gray-950/80 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
            setIsOpen(false)
          }}
          className="font-display text-lg font-bold tracking-tight text-gray-900 transition-colors hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400"
        >
          {personalInfo.name.split(" ")[0]}
          <span className="text-emerald-600 dark:text-emerald-400">.</span>
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => scrollToSection(event, link.href)}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "#contact")}
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-gray-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-white/5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-xl dark:border-white/5 dark:bg-gray-950/95 md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => scrollToSection(event, link.href)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-emerald-600 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-emerald-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={(event) => scrollToSection(event, "#contact")}
                className="block rounded-full bg-emerald-500 px-5 py-3 text-center text-sm font-semibold text-gray-950"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
