import Link from "next/link";
import Image from "next/image";
import type { LocalizedArticle } from "../../lib/content";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { ArticleNavigator } from "./ArticleNavigator";

type ArticlePageViewProps = {
  article: LocalizedArticle;
  hasChinese: boolean;
  nextArticle?: LocalizedArticle;
};

export function ArticlePageView({
  article,
  hasChinese,
  nextArticle,
}: ArticlePageViewProps) {
  const isChinese = article.language === "zh";
  const englishHref = `/writing/${article.slug}`;
  const chineseHref = `/zh/writing/${article.slug}`;

  return (
    <main>
      <div className="page-shell">
        <SiteHeader />

        <article className="essay" lang={isChinese ? "zh-CN" : "en"}>
          <header className="essay-header">
            <div className="essay-topbar">
              <Link className="back-link" href="/writing">
                {isChinese ? "← 所有文章" : "← All writing"}
              </Link>
              {hasChinese && (
                <nav className="language-switcher" aria-label={isChinese ? "切换文章语言" : "Switch article language"}>
                  <Link
                    href={englishHref}
                    hrefLang="en"
                    lang="en"
                    aria-current={!isChinese ? "page" : undefined}
                  >
                    English
                  </Link>
                  <Link
                    href={chineseHref}
                    hrefLang="zh-CN"
                    lang="zh-CN"
                    aria-current={isChinese ? "page" : undefined}
                  >
                    中文
                  </Link>
                </nav>
              )}
            </div>
            <div className="essay-meta">
              <span>{article.category}</span>
              <time dateTime={article.date}>{article.displayDate}</time>
              <span>{isChinese ? `${article.readTime}阅读` : `${article.readTime} read`}</span>
            </div>
            <h1>{article.title}</h1>
            <p className="essay-dek">{article.dek}</p>
          </header>

          <div className="essay-layout">
            <ArticleNavigator language={article.language} sections={article.sections} />
            <div className="essay-body">
              <p className="essay-lead">{article.lead}</p>
              {article.sections.map((section, index) => (
                <section
                  id={`section-${index + 1}`}
                  data-article-section
                  key={section.heading}
                >
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.link && (
                    <p className="article-project-link">
                      <a href={section.link.href} target="_blank" rel="noreferrer">
                        {section.link.label}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </p>
                  )}
                  {section.figure && (
                    <figure className="article-figure">
                      <Image
                        src={section.figure.src}
                        alt={section.figure.alt}
                        width={section.figure.width}
                        height={section.figure.height}
                        loading="lazy"
                        unoptimized
                      />
                      <figcaption>
                        {section.figure.caption}{" "}
                        <a
                          href={section.figure.source.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {section.figure.source.label}
                          <span aria-hidden="true">↗</span>
                        </a>
                      </figcaption>
                    </figure>
                  )}
                  {section.table && (
                    <div className="article-table-wrap">
                      <table className="article-table">
                        <caption>{section.table.label}</caption>
                        <thead>
                          <tr>
                            {section.table.headers.map((header) => (
                              <th scope="col" key={header}>{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr key={row[0]}>
                              {row.map((cell, cellIndex) => (
                                <td
                                  data-label={section.table?.headers[cellIndex]}
                                  key={`${row[0]}-${cellIndex}`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}
              <div className="essay-end">
                <span>{isChinese ? "说明" : "End note"}</span>
                <p>{article.endNote}</p>
              </div>
            </div>
          </div>
        </article>

        <nav className="next-reading" aria-label={isChinese ? "继续阅读" : "Continue reading"}>
          <p>{isChinese ? "继续阅读" : "Continue exploring"}</p>
          {nextArticle ? (
            <Link href={isChinese ? `/zh/writing/${nextArticle.slug}` : `/writing/${nextArticle.slug}`}>
              {nextArticle.title} <span aria-hidden="true">→</span>
            </Link>
          ) : (
            <Link href="/moments">
              {isChinese ? "浏览 Moments 记录" : "Browse the Moments archive"}{" "}
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </nav>

        <SiteFooter />
      </div>
    </main>
  );
}
