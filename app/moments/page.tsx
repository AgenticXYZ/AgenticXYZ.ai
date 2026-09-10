import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { momentArchive } from "../../lib/content";
import { MomentsCalendar } from "./MomentsCalendar";

export const metadata: Metadata = {
  title: "Moments",
  description:
    "A calendar of model releases, ideas, writing milestones, and meaningful changes.",
};

export default function MomentsPage() {
  return (
    <main>
      <div className="page-shell">
        <SiteHeader />

        <section className="subpage-hero">
          <p className="eyebrow">Personal archive / ongoing</p>
          <div className="subpage-title-row">
            <h1>Moments</h1>
            <p>
              A quiet calendar for the releases, ideas, decisions, and small
              turns that may matter later.
            </p>
          </div>
        </section>

        <MomentsCalendar moments={momentArchive} />

        <section className="timeline-section" aria-labelledby="timeline-heading">
          <div className="timeline-intro">
            <p className="eyebrow">The list</p>
            <h2 id="timeline-heading">What happened</h2>
            <p>
              Each entry stays intentionally light: a date, a title, and a
              note on why it deserves to be remembered.
            </p>
          </div>
          <div className="timeline-list">
            {momentArchive.map((moment) => (
              <article className="timeline-item" id={moment.id} key={moment.id}>
                <div className="timeline-date">
                  <time dateTime={moment.date}>{moment.displayDate}</time>
                  <span>{moment.date.slice(0, 4)}</span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-label">{moment.label}</span>
                  <h3>
                    {moment.href ? (
                      <Link
                        href={moment.href}
                        {...(moment.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                      >
                        {moment.title}
                        <span className="timeline-link-arrow" aria-hidden="true">↗</span>
                      </Link>
                    ) : (
                      moment.title
                    )}
                  </h3>
                  <p>{moment.description}</p>
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
