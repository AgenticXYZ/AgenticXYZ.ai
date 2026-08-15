import Link from "next/link";

export function SiteHeader({ home = false }: { home?: boolean }) {
  return (
    <header className={`site-header${home ? " site-header-home" : ""}`}>
      <div className="site-header-inner">
        <Link className="wordmark" href="/" aria-label="AgenticXYZ home">
          <span>Agentic</span>
          <span className="wordmark-xyz">XYZ</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">Main</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/moments">Moments</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="footer-signature">
        <strong className="footer-wordmark" aria-label="AgenticXYZ.ai">
          <span>Agentic</span>
          <span className="wordmark-xyz">XYZ</span>
          <span className="footer-domain-suffix">.ai</span>
        </strong>
        <span>by Xinyu Zhang</span>
        <span>© 2026</span>
      </p>
    </footer>
  );
}
