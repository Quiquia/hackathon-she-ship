import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-violet-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all group-hover:scale-105">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-xl text-foreground tracking-tight">
              Salary Sister AI
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-bold text-muted hover:text-primary transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/salary-input"
            className="text-sm font-bold text-muted hover:text-primary transition-colors"
          >
            Herramientas
          </Link>
        </nav>
      </div>
    </header>
  );
}
