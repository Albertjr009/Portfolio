import { personalInfo } from "../data/portfolio"

export default function Footer() {
  const year = new Date().getFullYear()
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="border-t border-gray-200 px-6 py-8 dark:border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500">
          &copy; {year} {personalInfo.name}
        </p>
        <button
          type="button"
          onClick={scrollToTop}
          className="text-sm text-gray-500 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          Back to top &uarr;
        </button>
      </div>
    </footer>
  )
}
