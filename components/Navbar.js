import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="bg-white/90 dark:bg-slate-900 dark:text-white backdrop-blur sticky top-0 z-50 shadow-sm transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-indigo-600 dark:text-indigo-300">
          Mohamed Tarek
        </Link>

        <div className="flex gap-4 items-center">
          <Link href="/" className="text-sm hover:text-indigo-500">
            Home
          </Link>
          <Link href="/projects" className="text-sm hover:text-indigo-500">
            Projects
          </Link>
          <Link href="/contact" className="text-sm hover:text-indigo-500">
            Contact
          </Link>
          <a
            className="text-sm px-3 py-1 border rounded hover:bg-indigo-50 dark:hover:bg-indigo-800"
            href="/files/Mohamed_Tarek_AI_Updated.docx"
          >
            CV
          </a>

          {/* 🌗 زر تغيير الثيم */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
