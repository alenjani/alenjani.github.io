export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto max-w-[1100px] px-8 py-9 flex flex-wrap justify-between gap-3 text-[12.5px] text-muted">
        <span>© Ali Lenjani 2026</span>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/ali-lenjani-34791410a/"
            target="_blank"
            rel="noopener"
            className="hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://scholar.google.com/citations?user=vVPC7g0AAAAJ&hl=en"
            target="_blank"
            rel="noopener"
            className="hover:text-ink transition-colors"
          >
            Google Scholar
          </a>
          <a
            href="https://github.com/alenjani"
            target="_blank"
            rel="noopener"
            className="hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://logo.dev"
            target="_blank"
            rel="noopener"
            className="hover:text-ink transition-colors"
          >
            Logos by Logo.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
