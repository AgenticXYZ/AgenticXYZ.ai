import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { articles } from "../../lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Manifestos, design notes, essays, and field notes on Agentic AI from AgenticXYZ.",
};

export default function WritingPage() {
  return (
    <main>
      <div className="page-shell">
        <SiteHeader />
        <section className="subpage-hero writing-index-hero">
          <p className="eyebrow">Manifestos / design notes / research</p>
          <div className="subpage-title-row">
            <h1>Writing</h1>
            <p>Ideas and systems for how agents act, remember, collaborate, and improve.</p>
          </div>
        </section>
        <section className="section-block writing-index-list">
          <div className="article-list">
            {articles.map((article) => (
              <article className="article-row" key={article.slug}>
                <div className="article-index">{String(article.sequence).padStart(2, "0")}</div>
                <Link className="article-main" href={`/writing/${article.slug}`}>
                  <div className="article-meta"><span>{article.category}</span><time dateTime={article.date}>{article.displayDate}</time></div>
                  <h2>{article.title}</h2>
                  <p>{article.dek}</p>
                </Link>
                <div className="article-language-links" aria-label={`Open ${article.title}`}>
                  <Link href={`/writing/${article.slug}`} hrefLang="en" lang="en">
                    <span>EN</span><b aria-hidden="true">↗</b>
                  </Link>
                  {article.translations?.zh && (
                    <Link href={`/zh/writing/${article.slug}`} hrefLang="zh-CN" lang="zh-CN">
                      <span>中文</span><b aria-hidden="true">↗</b>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
