import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  articles,
  getArticle,
  getLocalizedArticle,
  getNextLocalizedArticle,
} from "../../../../lib/content";
import { ArticlePageView } from "../../../writing/ArticlePageView";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles
    .filter((article) => article.translations?.zh)
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getLocalizedArticle(slug, "zh");

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.dek,
    alternates: {
      canonical: `/zh/writing/${article.slug}`,
      languages: {
        en: `/writing/${article.slug}`,
        "zh-CN": `/zh/writing/${article.slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: "zh_CN",
      alternateLocale: ["en_US"],
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

export default async function ChineseArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getLocalizedArticle(slug, "zh");
  const baseArticle = getArticle(slug);

  if (!article || !baseArticle?.translations?.zh) {
    notFound();
  }

  return (
    <ArticlePageView
      article={article}
      hasChinese
      nextArticle={getNextLocalizedArticle(slug, "zh")}
    />
  );
}
