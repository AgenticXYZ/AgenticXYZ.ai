import type { Article, ArticleLanguage, LocalizedArticle } from "./article-types";
import { industrialRevolutionArticle } from "./articles/agentic-ai-industrial-revolution";
import { prototypeKnowledgeArticle } from "./articles/prototype-1-knowledge-collaboration";
import { agentApplicationsArticle } from "./articles/agent-applications-next-substrate";
import { fallingCostOfIntelligenceArticle } from "./articles/falling-cost-of-intelligence";
import { personalAgentsAgenticSoftwareArticle } from "./articles/personal-agents-agentic-software";

export type {
  Article,
  ArticleLanguage,
  ArticleSection,
  ArticleTranslation,
  LocalizedArticle,
} from "./article-types";

const articleCatalog: Article[] = [
  personalAgentsAgenticSoftwareArticle,
  fallingCostOfIntelligenceArticle,
  agentApplicationsArticle,
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
    id: "mimo-v2-6",
    date: "2026-09-22",
    day: 22,
    displayDate: "September 22",
    label: "Model release",
    title: "MiMo-V2.6 Released",
    description:
      "Xiaomi released and open-sourced the MiMo-V2.6 Pro and Flash multimodal models, alongside their technical report and resources for reinforcement-learning research.",
    href:
      "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf",
  },
  {
    id: "gpt-6-sol",
    date: "2026-09-22",
    day: 22,
    displayDate: "September 22",
    label: "Model release",
    title: "GPT-6 Sol Released",
    description:
      "OpenAI released GPT-6 Sol for complex coding and agentic workflows, with text and image input through the Responses and Chat Completions APIs.",
    href: "https://developers.openai.com/api/docs/changelog",
  },
  {
    id: "claude-opus-5-5",
    date: "2026-09-22",
    day: 22,
    displayDate: "September 22",
    label: "Model release",
    title: "Claude Opus 5.5 Released",
    description:
      "Anthropic released Claude Opus 5.5 for agentic coding and knowledge work, with stronger performance and lower typical running costs than Opus 5.",
    href: "https://www.anthropic.com/claude-opus-5-5-system-card",
  },
  {
    id: "deepseek-v4-1-flash",
    date: "2026-09-10",
    day: 10,
    displayDate: "September 10",
    label: "Model release",
    title: "DeepSeek-V4.1-Flash Released",
    description:
      "DeepSeek released DeepSeek-V4.1-Flash, a native multimodal Mixture-of-Experts model that pairs a causal encoder-decoder architecture with a one-million-token context window and a substantially smaller KV cache.",
    href:
      "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/DeepSeek_V41_Tech_Report.pdf",
  },
  {
    id: "gpt-6-astra",
    date: "2026-09-03",
    day: 3,
    displayDate: "September 3",
    label: "Model release",
    title: "GPT-6 Astra Released",
    description:
      "OpenAI released GPT-6 Astra, its most capable model for end-to-end work across computer use, coding, research, and professional workflows, beginning with a limited trusted-access rollout.",
  },
  {
    id: "claude-fable-5-1",
    date: "2026-09-01",
    day: 1,
    displayDate: "September 1",
    label: "Model release",
    title: "Claude Fable 5.1 Released",
    description:
      "Anthropic released Claude Fable 5.1 for demanding reasoning and long-horizon agentic work, strengthening coding, multistep research, and document-heavy workflows.",
  },
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
    intro: source.intro,
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
