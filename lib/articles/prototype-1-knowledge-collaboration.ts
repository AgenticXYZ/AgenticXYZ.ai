import type { Article } from "../article-types";
import { prototypeKnowledgeArticleZh } from "./prototype-1-knowledge-collaboration.zh";

export const prototypeKnowledgeArticle: Article = {
  slug: "prototype-1-knowledge-collaboration",
  date: "2026-08-14",
  sequence: 2,
  displayDate: "August 14, 2026",
  category: "Design Note 02",
  title: "AgenticXYZ Prototype 1: A Knowledge Collaboration Layer for People and Agents",
  dek: "As agents enter every software environment, the missing layer is not another chat interface. It is a governed way for people and agents to collect, review, transfer, and reuse knowledge through real work.",
  readTime: "18 min",
  asideLabel: "Prototype 1",
  lead:
    "AgenticXYZ Prototype 1 begins with a practical problem: valuable knowledge is produced everywhere, yet remains scattered across people, applications, projects, conversations, and agent traces. We need a new collaboration layer that turns those fragments into shared, attributable, reusable knowledge without transferring human authority to agents.",
  sections: [
    {
      heading: "Knowledge Collaboration: A Foundational Problem for the Agent Era",
      paragraphs: [
        "Knowledge collaboration today is organized around documents, messages, tickets, meetings, code repositories, and databases. Each tool records one part of the work, while the meaning connecting those parts often remains in people's heads. A decision made in a meeting can lose its evidence. A user's correction may never reach the product model. A successful local solution may remain invisible to the Maintainer who could make it broadly useful. We have more information than ever, yet still lack a way to preserve the knowledge created through real work as a whole.",
        "When agents enter the workflow, the situation changes in a fundamental way. An agent can do more than read documents. It can observe how an objective was understood, which approaches failed, what a person corrected, and why the final result held. For the first time, knowledge collection can become part of execution instead of a separate archival task performed after the real work is over. In other words, the agent is not only a consumer of knowledge. It can become an intermediate node through which knowledge moves.",
        "This is why I believe the agent era needs a new model of knowledge collaboration: an agent-centered system connecting the movement of experience between people and agents, agents and agents, and people through agents. Agent-centered does not mean making the agent an unquestioned owner of knowledge. Agents infer, compress, make mistakes, and can fabricate. The system must preserve who experienced what, what the agent extracted, what the person corrected, which evidence supports a claim, where it applies, and who has the authority to adopt it.",
        "At a larger scale, the agent layer can gradually become a digital knowledge center. The internet served as a distribution system for Information. Agent systems can collect Knowledge scattered across software, projects, and individual activity, then make it available to people and other agents at the right scope. This center is not one giant database that absorbs everything. It is a governed movement system: people and agents contribute situated knowledge and retrieve knowledge when entering new tasks. Contribution without reuse becomes a log; reuse without provenance becomes rumor.",
        "Knowledge also moves at different speeds. Fresh, private, tightly scoped context can begin in Memory. Process knowledge that can be inspected, edited, tested, and rolled back can become Skills. Stable public capability can enter Reference Software and Verifiers. Only patterns that continue to generalize after leaving their original setting deserve consideration for model training. Not every useful experience should immediately become a public default, much less a model-weight update. Real knowledge infrastructure must let knowledge move without erasing privacy, provenance, and scope.",
      ],
    },
    {
      heading: "Software Substrate: Capabilities, Policies, and Verification for Agents",
      paragraphs: [
        "Agents will not live inside one chat application. They will enter writing tools, browsers, coding environments, business systems, research platforms, communication channels, and devices. Every software environment will expose some combination of knowledge, capability, state, and consequences to agents. Agent software is therefore not merely another software category. It is becoming a foundational layer shared by every kind of software.",
        "A traditional interface tells a person what can be clicked. Agent-native software must also tell an agent which concepts exist, which actions are available, what each action changes, which permissions it requires, how much risk it carries, and what evidence can verify its result. Software therefore becomes more than a collection of Resource, Logic, and Interface. It also needs explicit Policy, Description, Capability, and Verifier. Rather than relying entirely on visual imitation or undocumented convention, an agent can understand each action as a candidate state transition with a purpose, permission, risk, and proof.",
        "This structure changes the boundary of software. When a user finds that an application lacks a small feature matching a personal habit, an agent can first make a reversible change inside the user's own environment. A capability from another application can be composed within the authorized scope. Developers provide common capability, rules, and artistic direction; a user-side agent forms a concrete realization from personal memory. Software stops being only a fixed product delivered once and begins to resemble a knowledge carrier that can be reconstructed in different environments while remaining constrained by policy.",
        "The user is no longer only a consumer of software. With consent and attribution, real situations, corrections, and verified workflows can become knowledge contributions to the software's continuing evolution. A user need not become a Maintainer or surrender all private context to become a co-builder. Software developers also stop being mere consumers of foundation-model and agent companies. By making domain capabilities agent-readable, they become distributors of intelligence, delivering professional environments, rules, evaluations, and reusable capability to every agent that needs them.",
        "Organizational form changes with the software. Smaller human teams can coordinate much larger populations of agents. People retain goals and judgment, while agents handle research, implementation, monitoring, documentation, and daily operations. The value is not only lower labor cost. It is the ability to preserve the relationship among a decision, its evidence, its implementation, and its outcome. Organizational memory becomes part of the Human–Agent System rather than a pile of documents everyone hopes someone will search later. The largest missing piece today is still reliability and predictability: seeing what an agent did is not the same as knowing in advance that it will do the right thing.",
      ],
    },
    {
      heading: "Collaboration Structure: Three Relationships and One Governed Knowledge Loop",
      paragraphs: [
        "Prototype 1 connects three collaborative relationships. The first is Person with Agent: a user and an agent understand a problem, adapt software, and express a need together. The second is Agent with Agent: the user-side agent prepares structured knowledge for a Maintainer-side Agent and a Project Agent. The third is Person with Person through Agents: agents help one person's real experience reach another person in a more accurate, reviewable form, while people on both sides retain their own judgment and responsibility.",
        "These relationships converge in one loop. A person's real need becomes local exploration by the user-side agent. The exploration first produces a reversible Overlay that the user can validate in a private environment. The agent then prepares any potentially public knowledge as a proposal. The user performs Human Attestation, confirming which statements truly represent the experience. The Maintainer decides what the project should accept and at what scope. A Project Agent reconstructs the change from the project's own Contract. A Verifier checks the result. A person still makes the final adoption decision.",
        "What moves through this chain is not only code. It includes intent, scope, assumptions, evidence, counterexamples, protected behavior, uncertainty, provenance, and the judgment about which part should enter the public project. Code remains important, but it sits downstream from an explicit knowledge decision. A patch that works in one user's environment proves only that a behavior can work there. It does not automatically prove that the behavior should become the default for everyone.",
        "This is why agent-centered must remain human-governed. Agent-centered is an architectural principle: software knowledge, capabilities, state, and proof should be legible to agents. Human-governed is a principle of authority: goals, public product decisions, high-risk authorization, value judgment, and final accountability stay with people. A User-side Agent cannot modify the public project. A Maintainer-side Agent cannot accept knowledge on behalf of the Maintainer. A Project Agent cannot change the product goal, declare its own work verified, or merge an implementation. Agents can extend human capability without silently absorbing human authority.",
        "Reliability here comes largely from subtraction. A model may propose many actions, but the system exposes only actions whose inputs, permissions, risks, impacts, and proofs can be defined. Changes occur in isolated Workspaces with Checkpoints. Structured schemas constrain proposals. Budgets limit runs. Verifiers, not agent confidence, decide whether a task is complete. Human Gates stop the process wherever judgment or authorization is required. We do not assume that an agent will never be wrong. We design so that error can be detected, isolated, rejected, and rolled back.",
      ],
    },
    {
      heading: "Knowledge Integration: From KPR to Project Implementation",
      paragraphs: [
        "An ordinary issue usually tells a project where something went wrong. An ordinary pull request directly submits one implementation. Neither representation reliably separates what a user observed, what an agent inferred, what has been verified, what remains conjecture, and what should actually be generalized. Especially when agents can generate large quantities of code quickly, reviewing a patch first and reconstructing its intent afterward places an increasing cognitive burden on Maintainers.",
        "Prototype 1 therefore makes the Knowledge-based Pull Request, or KPR, the primary review object. A KPR is not a longer pull-request description. It is a governed knowledge package containing user context, intended behavior, acceptance criteria, protected invariants, structured claims, evidence, failed attempts, counterexamples, uncertainty, provenance, and a contributor patch as supporting material. The Maintainer first decides whether the knowledge holds, where it applies, and what evidence is still missing, then decides whether the project should change.",
        "Human Attestation is a boundary that cannot be removed. The user must be able to correct the agent's extraction in the user's own words and separately attest to the final claims. Agent-extracted, Human-corrected, and Human-attested are three distinct states. An agent can help a person express experience, but cannot silently convert its own interpretation into a statement attributed to that person. Private information must likewise be identified and blocked before leaving the local environment, while provenance and scope travel with every claim.",
        "The Maintainer can then Accept, Modify, Narrow, Defer, Reject, or Request Evidence for each claim. These decisions form a Knowledge Integration Contract: which behavior the project accepts, which generalization it rejects, which invariants remain protected, which implementation boundaries apply, which questions remain open, and which Verifiers must pass. One user's preference for conclusion-first reading can be narrowed into an experimental opt-in capability for Research Briefs instead of silently becoming the new default for everyone.",
        "The Project Agent performs Blind Reconstruction from the Contract. It does not read the contributor's private trace or treat the contributor patch as the authority for project implementation. The patch shows that a behavior may be possible; the project implementation must still follow the project's own architecture, Policy, and product taste. An independent Verifier then checks whether the Contract has been satisfied. Failure means further work or rollback, while success still requires final human adoption. The goal is not for an agent to write more code, but for one real experience to become a verifiable change that the project can truly own.",
      ],
      link: {
        href: "https://arxiv.org/abs/2606.26721",
        label: "Knowledge-Based Pull Requests: A Trusted Workflow for Agent-Mediated Knowledge Collaboration",
      },
      figure: {
        src: "/images/kpr-process-overview.png",
        alt: "Diagram comparing issue-based, traditional pull request, and knowledge-based pull request workflows across the contributor-project trust boundary.",
        width: 1809,
        height: 936,
        caption: "The Knowledge-based Pull Request process.",
        source: {
          href: "https://arxiv.org/abs/2606.26721",
          label: "Source: arXiv:2606.26721",
        },
      },
    },
    {
      heading: "Prototype Validation: Implementation, Boundaries, and the Open-Source Plan",
      paragraphs: [
        "The system described above is no longer only a conceptual argument. We have built AgenticXYZ Prototype 1 as an executable, inspectable, discussable concept prototype. The claims in this essay are now a workflow that people can run, question, and verify, rather than an architecture diagram or a declaration about how the future should work. I was honestly delighted when the complete loop ran for the first time, because it meant that the problem was concrete enough to become a real system.",
        "The current reference system connects a working Research Brief application, reversible local changes, Human Attestation, a Knowledge-based Pull Request, claim-by-claim shaping by a Maintainer, a Knowledge Integration Contract, Project Agent Blind Reconstruction, an independent Verifier, rollback, a deterministic Recorded Replay, and an optional Provider-backed Live Agent path. A user can operate the same governed workflow through a global or in-application XYZ Agent, while every Human Gate still requires an explicit human action.",
        "The prototype turns many abstract questions into inspectable ones: what object knowledge takes, where the user-side boundary ends and the project-side boundary begins, what an agent may and may not do, how privacy is blocked, how failure is rolled back, what a Verifier checks, and which decisions must remain human. Prototype 1 implements X / Crossing: Agents with People, Human in the Loop. Y and Z remain longer-term directions that must inherit, rather than bypass, the same standards for evidence and governance.",
        "This does not prove that the structure is production-ready or superior to every traditional form of software collaboration. The executable reference system and its human-reviewed Recorded Replay support only a bounded prototype reference. The broader hypothesis—that it improves knowledge transfer and reduces Maintainer cognitive load—still requires comparison with ordinary issue and pull-request workflows. Time to a first go or no-go decision, clarification rounds, implementation deviation, review time, defects, rollback, and total cost are all things the next stage must actually measure.",
        "The long-term ambition is broad: agents participate across software environments, collect dispersed knowledge, make it available at the right scope, and help people and other agents reuse it. The first step is intentionally narrow: establish a trustworthy path through which one real experience can become one governed piece of reusable project knowledge. If we cannot preserve intent, provenance, privacy, evidence, and authority in this small loop, a larger digital knowledge center will only amplify noise and error. If this step holds, the same structure may gradually expand across applications, teams, and organizations. AgenticXYZ Prototype 1 will be released as open-source software at the public repository below.",
      ],
      link: {
        href: "https://github.com/zhangshea/AgenticXYZ-Prototype-1",
        label: "github.com/zhangshea/AgenticXYZ-Prototype-1",
      },
    },
  ],
  endNote:
    "Prototype 1 is an executable reference system and a bounded design claim. Its reviewed replay supports the selected path for prototype reference use; it is not a production-readiness claim. The larger knowledge-collaboration benefits remain hypotheses for comparative evaluation.",
  translations: {
    zh: prototypeKnowledgeArticleZh,
  },
};
