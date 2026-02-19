import { ExternalLink, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 border-t-2 border-[var(--border)]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <span className="text-3xl font-bold tracking-tighter text-[var(--fg)]">GHC</span>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="mono text-[10px] tracking-widest text-[var(--fg-muted)] uppercase">
              © {new Date().getFullYear()} Gustavo Henrique França Campos
            </p>
            <p className="mono text-[10px] tracking-widest text-[var(--fg-muted)] uppercase mt-1">
              Estudante de Direito — AFYA
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center justify-end gap-4">
            <a
              href="https://www.instagram.com/gustavof.campos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="0" ry="0" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <div className="w-[1px] h-4 bg-[var(--border)]" />

            <button
              onClick={scrollToTop}
              className="text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={16} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border)] text-center">
          <span className="mono text-[10px] text-[var(--fg-muted)] tracking-widest">
            Desenvolvido por{" "}
            <a
              href="https://victordev.is-a.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:text-[var(--fg)] transition-colors inline-flex items-center gap-1"
            >
              Victor Humberto
              <ExternalLink size={10} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}