export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  link?: {
    href: string;
    label: string;
  };
  figure?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
    source: {
      href: string;
      label: string;
    };
  };
  table?: {
    label: string;
    headers: string[];
    rows: string[][];
  };
};

export type ArticleText = {
  displayDate: string;
  category: string;
  title: string;
  dek: string;
  readTime: string;
  lead: string;
  intro?: string[];
  sections: ArticleSection[];
  endNote: string;
  asideLabel?: string;
};

export type ArticleTranslation = ArticleText & {
  language: "zh-CN";
};

export type Article = ArticleText & {
  slug: string;
  date: string;
  sequence: number;
  translations?: {
    zh?: ArticleTranslation;
  };
};

export type ArticleLanguage = "en" | "zh";

export type LocalizedArticle = ArticleText & {
  slug: string;
  date: string;
  language: ArticleLanguage;
};
