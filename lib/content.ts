import type { Article, ArticleLanguage, LocalizedArticle } from "./article-types";
import { industrialRevolutionArticle } from "./articles/agentic-ai-industrial-revolution";
import { prototypeKnowledgeArticle } from "./articles/prototype-1-knowledge-collaboration";

export type {
  Article,
  ArticleLanguage,
  ArticleSection,
  ArticleTranslation,
  LocalizedArticle,
} from "./article-types";

const articleCatalog: Article[] = [
  industrialRevolutionArticle,
  prototypeKnowledgeArticle,
];

export const articles = [...articleCatalog].sort((left, right) => {
  const dateOrder = right.date.localeCompare(left.date);
  return dateOrder || right.sequence - left.sequence;
});

export type Moment = {
  id: string;
  date: string;
  day: number;
  displayDate: string;
  label: string;
  title: string;
  description: string;
  href?: string;
};

export const moments: Moment[] = [
  {
    id: "glm-5-3",
    date: "2026-08-14",
    day: 14,
    displayDate: "August 14",
    label: "Model release",
    title: "GLM-5.3 Released",
    description:
      "Z.ai released GLM-5.3, a post-training-driven update focused on stronger coding, longer agent tasks, and newly observed cybersecurity capabilities.",
  },
  {
    id: "opus-5",
    date: "2026-07-24",
    day: 24,
    displayDate: "July 24",
    label: "Model release",
    title: "Opus 5 Released",
    description:
      "A new milestone in models. The question to revisit later: did it transform long-horizon agent work, or only improve benchmark scores?",
  },
  {
    id: "kimi-k3",
    date: "2026-07-16",
    day: 16,
    displayDate: "July 16",
    label: "Model release",
    title: "Kimi K3 Released",
    description:
      "Kimi released its 2.8-trillion-parameter K3 model with native vision, a one-million-token context window, and a focus on long-horizon coding and knowledge work.",
  },
  {
    id: "glm-5-2",
    date: "2026-06-16",
    day: 16,
    displayDate: "June 16",
    label: "Model release",
    title: "GLM-5.2 Released",
    description:
      "Z.ai released GLM-5.2 for long-horizon tasks, pairing a one-million-token context window with stronger project-scale coding and sustained agent execution.",
  },
];

const momentDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

const writingMoments: Moment[] = articles.map((article) => ({
  id: `writing-${article.slug}`,
  date: article.date,
  day: Number(article.date.slice(8, 10)),
  displayDate: momentDateFormatter.format(new Date(`${article.date}T00:00:00Z`)),
  label: `Writing · ${article.category}`,
  title: article.title,
  description: article.dek,
  href: `/writing/${article.slug}`,
}));

export const momentArchive = [...moments, ...writingMoments].sort((left, right) =>
  right.date.localeCompare(left.date),
);

export const getArticle = (slug: string) =>
  articles.find((article) => article.slug === slug);

export const localizeArticle = (
  article: Article,
  language: ArticleLanguage,
): LocalizedArticle | undefined => {
  const source = language === "zh" ? article.translations?.zh : article;

  if (!source) {
    return undefined;
  }

  return {
    slug: article.slug,
    date: article.date,
    language,
    displayDate: source.displayDate,
    category: source.category,
    title: source.title,
    dek: source.dek,
    readTime: source.readTime,
    lead: source.lead,
    sections: source.sections,
    endNote: source.endNote,
    asideLabel: source.asideLabel,
  };
};

export const getLocalizedArticle = (
  slug: string,
  language: ArticleLanguage,
) => {
  const article = getArticle(slug);
  return article ? localizeArticle(article, language) : undefined;
};

export const getNextLocalizedArticle = (
  slug: string,
  language: ArticleLanguage,
) => {
  const currentIndex = articles.findIndex((article) => article.slug === slug);

  for (let index = currentIndex + 1; index < articles.length; index += 1) {
    const localized = localizeArticle(articles[index], language);
    if (localized) {
      return localized;
    }
  }

  return undefined;
};
