"use client";

import { useEffect, useState } from "react";
import type { ArticleLanguage, ArticleSection } from "../../lib/content";

type ArticleNavigatorProps = {
  language: ArticleLanguage;
  sections: ArticleSection[];
};

export function ArticleNavigator({ language, sections }: ArticleNavigatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const marker = window.innerHeight * 0.28;
      let nextIndex = 0;

      sections.forEach((_, index) => {
        const section = document.getElementById(`section-${index + 1}`);
        if (section && section.getBoundingClientRect().top <= marker) {
          nextIndex = index;
        }
      });

      setActiveIndex(nextIndex);
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [sections]);

  return (
    <aside className="essay-navigator" aria-label={language === "zh" ? "文章目录" : "Article sections"}>
      <p className="essay-navigator-label">
        {language === "zh" ? "本文目录" : "On this page"}
      </p>
      <ol>
        {sections.map((section, index) => (
          <li key={section.heading}>
            <a
              href={`#section-${index + 1}`}
              aria-current={activeIndex === index ? "location" : undefined}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
