import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  articles,
  getArticle,
  getLocalizedArticle,
  getNextLocalizedArticle,
} from "../../../lib/content";
import { ArticlePageView } from "../ArticlePageView";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getLocalizedArticle(slug, "en");
  const baseArticle = getArticle(slug);

  if (!article || !baseArticle) {
    return {};
  }

  const hasChinese = Boolean(baseArticle.translations?.zh);

  return {
    title: article.title,
    description: article.dek,
    alternates: {
      canonical: `/writing/${article.slug}`,
      languages: hasChinese
        ? {
            en: `/writing/${article.slug}`,
            "zh-CN": `/zh/writing/${article.slug}`,
          }
        : { en: `/writing/${article.slug}` },
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      alternateLocale: hasChinese ? ["zh_CN"] : undefined,
      title: article.title,
      description: article.dek,
      siteName: "AgenticXYZ",
      publishedTime: article.date,
      images: [],
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.dek,
      images: [],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getLocalizedArticle(slug, "en");
  const baseArticle = getArticle(slug);

  if (!article || !baseArticle) {
    notFound();
  }

  return (
    <ArticlePageView
      article={article}
      hasChinese={Boolean(baseArticle.translations?.zh)}
      nextArticle={getNextLocalizedArticle(slug, "en")}
    />
  );
}
