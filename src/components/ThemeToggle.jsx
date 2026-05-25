import { Moon, Sun } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-emerald-600 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-emerald-400 ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
