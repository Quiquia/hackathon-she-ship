export default function Footer() {
  return (
    <footer className="border-t border-violet-200 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium text-muted">
          © 2026 Salary Sister AI. Empoderando mujeres financieramente.
        </p>
        <div className="flex items-center gap-6 text-sm font-bold text-muted">
          <a href="#" className="hover:text-primary transition-colors">
            Privacidad
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Términos
          </a>
        </div>
      </div>
    </footer>
  );
}
