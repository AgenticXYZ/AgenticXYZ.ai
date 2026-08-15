import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "About AgenticXYZ",
  description:
    "About AgenticXYZ, its publishing workflow, and Xinyu Zhang's research on agentic knowledge collaboration and self-improving agents.",
};

export default function AboutPage() {
  return (
    <main>
      <div className="page-shell">
        <SiteHeader />

        <section className="about-hero">
          <p className="eyebrow">About AgenticXYZ</p>
          <h1>
            About <span>AgenticXYZ.</span>
          </h1>
          <p className="about-lead">
            A personal record of how Agentic AI becomes useful, governable, and
            capable of improving itself.
          </p>
        </section>

        <section className="about-sections" aria-label="About AgenticXYZ and Xinyu Zhang">
          <article className="about-section">
            <div className="about-section-heading">
              <span aria-hidden="true">01</span>
              <p className="eyebrow">The website</p>
            </div>
            <div className="about-section-copy">
              <h2>A research-notes website about Agentic AI.</h2>
              <p>
                AgenticXYZ is a personal website managed by Xinyu Zhang. It
                records ideas, essays, prototypes, and engineering judgments
                about Agentic AI as the field develops.
              </p>
              <p>
                The name began with my initials—XYZ—and grew into a coordinate
                system for how agents collaborate with people, serve people,
                and improve agents.
              </p>
              <p>
                The site is maintained with OpenAI ChatGPT and published as a
                static-first web experience hosted on Cloudflare. Its source is
                version-controlled in Git, with{" "}
                <a
                  className="about-contact-link"
                  href="https://github.com/zhangshea/AgenticXYZ.ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{" "}
                as the public source home.
              </p>
            </div>
          </article>

          <article className="about-section">
            <div className="about-section-heading">
              <span aria-hidden="true">02</span>
              <p className="eyebrow">The person</p>
            </div>
            <div className="about-section-copy">
              <h2>I am Xinyu Zhang—a researcher and engineer.</h2>
              <p>
                My work explores Agentic AI through research, engineering, and
                product experiments. I care about systems that make agent
                capabilities useful in real environments, not only impressive
                in isolated demonstrations.
              </p>
              <p>
                The XYZ program shown on this site is my current focus:
                beginning with agent-centered knowledge collaboration, moving
                toward personal agents that work continuously for people, and
                ultimately building self-improvement agentic AI systems whose
                updates remain evidence-based, verifiable, and governed.
              </p>
              <p>
                You are welcome to contact me on{" "}
                <a
                  className="about-contact-link"
                  href="https://x.com/xinyusheazhang"
                  target="_blank"
                  rel="noreferrer"
                >
                  X <span aria-hidden="true">↗</span>
                </a>
                .
              </p>
            </div>
          </article>
        </section>

        <section className="xyz-principles" aria-label="XYZ principles">
          <article>
            <span>X</span>
            <div>
              <h3>Crossing</h3>
              <p>Agents with People · Human in the Loop.</p>
            </div>
          </article>
          <article>
            <span>Y</span>
            <div>
              <h3>Yours</h3>
              <p>Agents for People · Human on the Loop.</p>
            </div>
          </article>
          <article>
            <span>Z</span>
            <div>
              <h3>Zero</h3>
              <p>Agents by Agents · Human beyond the Execution Loop.</p>
            </div>
          </article>
        </section>

        <section className="about-cta">
          <p>Start with the latest coordinates.</p>
          <Link className="button-link" href="/writing">
            Read the writing <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
