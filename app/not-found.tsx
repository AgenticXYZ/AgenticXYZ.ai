import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export default function NotFound() {
  return (
    <main>
      <div className="page-shell">
        <SiteHeader />
        <section className="not-found">
          <p className="eyebrow">404 / Coordinate not found</p>
          <h1>Somewhere beyond the current map.</h1>
          <p>This page has not yet entered the AgenticXYZ coordinate system.</p>
          <Link className="button-link" href="/">
            Return home <span aria-hidden="true">→</span>
          </Link>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
