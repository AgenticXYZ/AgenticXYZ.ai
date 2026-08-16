import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { articles, moments } from "../lib/content";

const researchSystems = [
  {
    name: "Agentic Software",
    detail: "Discovers methods through human-agent interaction.",
  },
  {
    name: "Knowledge-based PR",
    detail: "Packages intent, conditions, evidence, and counterexamples.",
  },
  {
    name: "Agentic Runtime",
    detail: "Tests transfer across tools, schemas, and permissions.",
  },
  {
    name: "Agentic Internet",
    detail: "Connects capabilities with provenance and authorization.",
  },
];

const xyzFramework = [
  {
    axis: "X",
    name: "Crossing",
    action: "Collaborate",
    operator: "+",
    meaning: "The intersection of people and agents",
    relationship: "Agents with People",
    stage: "Human in the Loop",
    question:
      "How agents collaborate with people to contribute, correct, and govern knowledge.",
  },
  {
    axis: "Y",
    name: "Yours",
    action: "Delegate",
    operator: "×",
    meaning: "An agent for every person",
    relationship: "Agents for People",
    stage: "Human on the Loop",
    question:
      "How agents build personalized memory and continue serving every person.",
  },
  {
    axis: "Z",
    name: "Zero",
    action: "Evolve",
    operator: "^",
    meaning: "Towards self-improvement agentic AI",
    relationship: "Agents by Agents",
    stage: "Human beyond the Loop",
    question:
      "How agents improve agents and verify that each update is safe and effective.",
  },
];

export default function Home() {
  const latestArticle = articles[0];
  const latestMoment = moments[0];

  return (
    <main className="home-page">
      <SiteHeader home />
      <div className="home-scroll-progress" aria-hidden="true" />

      <section id="home" className="launch-hero home-chapter">
        <div className="coordinate-visual" aria-hidden="true">
          <div className="coordinate-ring coordinate-ring-one" />
          <div className="coordinate-ring coordinate-ring-two" />
          <div className="coordinate-axis axis-x"><span>X</span></div>
          <div className="coordinate-axis axis-y"><span>Y</span></div>
          <div className="coordinate-axis axis-z"><span>Z</span></div>
          <div className="coordinate-origin" />
        </div>

        <div className="home-inner launch-content">
          <p className="home-eyebrow">PERSONAL RESEARCH NOTES</p>
          <h1>
            Agentic<span>XYZ</span>
          </h1>
          <p className="launch-thesis">A coordinate system for Agentic AI.</p>
          <p className="launch-deck">
            Building agent-based knowledge collaboration and self-improving
            agent systems.
          </p>
        </div>

        <div className="home-inner hero-footer-row">
          <Link className="hero-update" href={`/writing/${latestArticle.slug}`}>
            <span>Latest update</span>
            <strong>{latestArticle.title}</strong>
            <time dateTime={latestArticle.date}>{latestArticle.displayDate}</time>
          </Link>
          <a className="scroll-cue" href="#framework">
            <span>Scroll to explore</span>
            <i aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="framework" className="framework-overview home-chapter">
        <div className="home-inner" data-reveal>
          <p className="home-eyebrow">More than a name</p>
          <h2>
            A coordinate system.
            <br />
            My initials.
            <br />
            <span>A research framework.</span>
          </h2>
          <div className="framework-table" role="table" aria-label="The AgenticXYZ coordinate system">
            <div className="framework-table-head" role="row">
              <span role="columnheader">Axis</span>
              <span role="columnheader">Meaning</span>
              <span role="columnheader">Relationship</span>
              <span role="columnheader">Stage</span>
              <span role="columnheader">Core question</span>
            </div>
            {xyzFramework.map((item) => (
              <article className="framework-row" role="row" key={item.axis}>
                <div className="framework-axis" role="cell">
                  <b>{item.axis}</b>
                  <span><strong>{item.name}</strong><small>{item.action} {item.operator}</small></span>
                </div>
                <div className="framework-cell" role="cell"><small>Meaning</small><span>{item.meaning}</span></div>
                <div className="framework-cell" role="cell"><small>Relationship</small><span>{item.relationship}</span></div>
                <div className="framework-cell" role="cell"><small>Stage</small><span>{item.stage}</span></div>
                <div className="framework-cell" role="cell"><small>Core question</small><span>{item.question}</span></div>
              </article>
            ))}
          </div>
          <p className="research-boundary">
            A research framework—not a benchmarked maturity scale. The
            operators are metaphors, not measured performance claims.
          </p>
        </div>
      </section>

      <section id="crossing" className="xyz-chapter chapter-x home-chapter">
        <div className="home-inner chapter-grid" data-reveal>
          <div className="chapter-mark" aria-hidden="true">X</div>
          <div className="chapter-copy">
            <p className="home-eyebrow">X · Crossing</p>
            <h2>Agents with People.</h2>
            <p className="chapter-lead">
              Humans and agents shape intent, act, verify, and preserve
              provenance together.
            </p>
            <p className="loop-role">Human <strong>in</strong> the Loop</p>
            <div className="leverage-line">
              <span>Additive leverage</span><strong>1–10×</strong>
            </div>
          </div>
        </div>
        <div className="home-inner crossing-flow" aria-label="Crossing research systems">
          {researchSystems.map((system, index) => (
            <div className="flow-node" key={system.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{system.name}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="environment-statement home-chapter">
        <div className="home-inner" data-reveal>
          <p className="home-eyebrow">The role of the Harness</p>
          <h2>
            Agents should enter environments,
            <span> take action, and observe consequences.</span>
          </h2>
          <p>
            The Harness connects intent, tools, permissions, memory, state, and
            outcomes. That is how a model begins to participate in the world.
          </p>
        </div>
      </section>

      <section id="yours" className="xyz-chapter chapter-y home-chapter">
        <div className="home-inner chapter-grid chapter-grid-reverse" data-reveal>
          <div className="chapter-copy">
            <p className="home-eyebrow">Y · Yours</p>
            <h2>Agents for People.</h2>
            <p className="chapter-lead">
              A persistent, user-owned personal agent. You define its goals,
              permissions, and intervention thresholds; it keeps context and
              acts over time.
            </p>
            <p className="loop-role">Human <strong>on</strong> the Loop</p>
            <div className="leverage-line">
              <span>Multiplicative leverage</span><strong>10–100×</strong>
            </div>
          </div>
          <div className="chapter-mark" aria-hidden="true">Y</div>
        </div>
        <div className="home-inner yours-principles" aria-label="Yours principles">
          <span>User-owned memory</span>
          <span>24 / 7 continuity</span>
          <span>Escalation by judgment</span>
          <span>Portable identity and history</span>
        </div>
      </section>

      <section id="zero" className="xyz-chapter chapter-z home-chapter">
        <div className="home-inner chapter-grid" data-reveal>
          <div className="chapter-mark" aria-hidden="true">Z</div>
          <div className="chapter-copy">
            <p className="home-eyebrow">Z · Zero</p>
            <h2>Agents improving Agents.</h2>
            <p className="chapter-lead">
              Z explores evidence-carrying, gated, and reversible
              self-improvement—not unconstrained self-modification.
            </p>
            <p className="loop-role">Human <strong>beyond</strong> the Loop</p>
            <div className="leverage-line">
              <span>Compounding leverage</span><strong>100–1000×</strong>
            </div>
            <p className="capability-note">Research direction · not a deployed capability claim</p>
          </div>
        </div>
      </section>

      <section className="open-loop home-chapter">
        <div className="home-inner" data-reveal>
          <p className="home-eyebrow">The open learning loop</p>
          <h2>
            Models now work inside the world.
            <span>Most of what they experience never becomes verified knowledge.</span>
          </h2>
          <p>
            Agents act, fail, recover, and get corrected. Too often, those
            outcomes remain logs instead of returning through a structured
            learning path.
          </p>
        </div>
      </section>

      <section id="flywheel" className="flywheel-section home-chapter">
        <div className="flywheel-sticky home-inner">
          <div className="flywheel-heading" data-reveal>
            <p className="home-eyebrow">The evolving digital knowledge center</p>
            <h2>Experience becomes knowledge only when it carries evidence.</h2>
          </div>
          <div className="knowledge-pipeline" aria-label="Knowledge learning pipeline">
            <div className="pipeline-node node-accent"><span>01</span><strong>Foundation Model</strong><small>General capability</small></div>
            <i aria-hidden="true">→</i>
            <div className="pipeline-node"><span>02</span><strong>Harness + Skills</strong><small>Scenarios and methods</small></div>
            <i aria-hidden="true">→</i>
            <div className="pipeline-node"><span>03</span><strong>Trajectory</strong><small>Observable experience</small></div>
            <i aria-hidden="true">→</i>
            <div className="pipeline-node node-coral"><span>04</span><strong>Signals</strong><small>Evidence and verifiers</small></div>
          </div>
          <div className="update-branches">
            <div className="update-branch fast-branch">
              <span>Fast update</span>
              <strong>Skills / Memory</strong>
              <small>Editable, reversible, immediately reusable</small>
            </div>
            <div className="update-branch slow-branch">
              <span>Slow update</span>
              <strong>Post-training</strong>
              <small>Only stable patterns that generalize</small>
            </div>
          </div>
        </div>
      </section>

      <section className="knowledge-speeds home-chapter">
        <div className="home-inner" data-reveal>
          <p className="home-eyebrow">Knowledge moves at three speeds</p>
          <h2>The model is the capability core—not the only place knowledge lives.</h2>
          <div className="speed-list">
            <article><span>Slow</span><h3>Model parameters</h3><p>Stable, general, transferable capabilities.</p></article>
            <article><span>Medium</span><h3>Skills</h3><p>Explicit, editable, versioned procedural knowledge.</p></article>
            <article><span>Fast</span><h3>Memory</h3><p>Private, fresh, and task-specific context.</p></article>
          </div>
        </div>
      </section>

      <section className="lifecycle-section home-chapter">
        <div className="home-inner" data-reveal>
          <p className="home-eyebrow">Four systems · one knowledge lifecycle</p>
          <h2>From an observed method to a validated capability.</h2>
          <div className="lifecycle-flow">
            {researchSystems.map((system, index) => (
              <article key={system.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{system.name}</h3>
                <p>{system.detail}</p>
              </article>
            ))}
            <article className="promotion-candidate">
              <span>05</span><h3>Post-training candidate</h3><p>Promotion is considered only after transfer is verified.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="promotion-section home-chapter">
        <div className="home-inner" data-reveal>
          <p className="home-eyebrow">Promotion is earned</p>
          <h2>Zero routine intervention. Never zero human authority.</h2>
          <div className="gate-questions" aria-label="Knowledge promotion questions">
            <span>General?</span><span>Valid?</span><span>Novel?</span><span>Safe?</span>
            <span>Authorized?</span><span>Stable?</span><span>Compatible?</span>
          </div>
          <div className="gate-outcomes">
            <span>Keep in Memory</span><span>Update the Skill</span>
            <span>Freeze as Evaluation</span><span>Post-training Candidate</span>
          </div>
          <div className="boundary-lines">
            <p>Skills do not update model weights by themselves.</p>
            <p>Private and time-sensitive knowledge stays external by default.</p>
            <p>Internalization requires held-out gains without the original Skill.</p>
          </div>
        </div>
      </section>

      <section id="latest" className="home-latest">
        <div className="home-inner">
          <div className="latest-heading">
            <div><p className="home-eyebrow">Latest from AgenticXYZ</p><h2>Follow the work as it evolves.</h2></div>
            <p>Essays, paper notes, experiments, and moments across Agentic AI.</p>
          </div>
          <div className="latest-layout">
            <div className="latest-writing">
              {articles.slice(0, 3).map((article, index) => (
                <Link href={`/writing/${article.slug}`} key={article.slug}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><small>{article.category} · {article.displayDate}</small><h3>{article.title}</h3></div>
                  <b aria-hidden="true">↗</b>
                </Link>
              ))}
            </div>
            <Link className="latest-moment" href={`/moments#${latestMoment.id}`}>
              <span>Latest moment · {latestMoment.displayDate}</span>
              <h3>{latestMoment.title}</h3>
              <p>{latestMoment.description}</p>
              <b>Browse Moments →</b>
            </Link>
          </div>
          <div className="home-actions">
            <Link href="/writing">Explore Writing <span>↗</span></Link>
            <Link href="/moments">Browse Moments <span>↗</span></Link>
            <Link href="/about">About <span>↗</span></Link>
          </div>
        </div>
      </section>

      <div className="home-footer-shell"><SiteFooter /></div>
    </main>
  );
}
