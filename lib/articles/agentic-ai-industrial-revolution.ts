import type { Article } from "../article-types";
import { industrialRevolutionArticleZh } from "./agentic-ai-industrial-revolution.zh";

export const industrialRevolutionArticle: Article = {
  slug: "agentic-ai-industrial-revolution",
  date: "2026-04-25",
  sequence: 1,
  displayDate: "April 25, 2026",
  category: "Manifesto 01",
  title:
    "AgenticXYZ: Controlled Intelligence, Superintelligent Organizations, and the Fourth Industrial Revolution",
  dek: "Agentic AI matters not simply because it makes software more intelligent, but because it turns the ability to operate on knowledge—once supplied only by people—into a productive input that can be called, organized, verified, and continuously improved.",
  readTime: "18 min",
  asideLabel: "Intelligence revolution",
  lead:
    "I use one test to decide whether a technology can drive an industrial revolution: does it create a new fundamental factor of production? Steam engines brought controlled power, electric systems brought controlled electricity, computers and networks brought controlled computation, and Agentic AI is beginning to bring controlled intelligence. AgenticXYZ is my effort to understand and build how humanity might reorganize software, knowledge, and institutions around that new productive input.",
  sections: [
    {
      heading: "Factor of Production: Controlled Intelligence and the Fourth Industrial Revolution",
      paragraphs: [
        "In March 2026, I handed a carefully prepared task to an agent system I had built, then went to sleep. When I returned the next morning, it had worked for more than eight hours, completed the report within the boundaries I had defined, and stopped after finishing. From today's perspective, the workflow was not especially complicated: specify the objective, manage context, keep calling the model, inspect intermediate state, and continue until the final result exists. But in that moment, I felt very concretely that the future was no longer an abstract forecast. It was already in front of me.",
        "What moved me was not that a model had written a report. It was that intelligence had continued working like a machine after I had left. A person no longer had to participate in every execution step. The person could define the goal, boundaries, acceptance criteria, and stopping condition. An agent could handle an increasingly long process inside that loop, while the human moved from direct executor toward designer, judge, and accountable owner. I therefore began to place Agentic AI on a longer historical timeline: if physical effort, energy, and computation were all mechanized and turned into infrastructure, could the understanding, organization, and operation of knowledge now be undergoing the same transformation?",
        "I use one criterion to decide whether a technology is worthy of the term industrial revolution: it must create a new fundamental factor of production. The first industrial revolution turned effort attached to people and animals into controlled mechanical power. The second made energy transmissible and metered as controlled electricity. The third—the information revolution—made computation programmable, reproducible, and inexpensive enough to support the internet and mobile internet. Agentic AI makes part of the knowledge work once performed only by people continuously available through electricity and computation. That is controlled intelligence, and it is why I believe a fourth, intelligent industrial revolution is possible.",
        "Once a capability becomes a fundamental factor of production, it enters society's default settings. After electrification, a new machine was expected to use electricity. Today, a new product is expected to compute and connect to a network. If someone deliberately removes electricity, computation, or connectivity, that absence requires an explanation. The same will eventually be true of intelligence: software will understand goals by default, organizations will continuously operate on knowledge, and services will act according to individual circumstances. If a new system offers no intelligence at all, people will ask why. At that point, controlled intelligence will have moved from new technology to basic social infrastructure.",
        "Intelligence here does not mean personality, consciousness, or a mystical form of general intelligence. I mean the ability to operate on knowledge: understand information in context, organize scattered information into knowledge, plan toward an objective, use tools to act, observe the result, and carry experience into the next cycle. Controlled is the half of the term that cannot be removed. A system that can act is not necessarily reliable, and a visible process is not necessarily predictable. Intelligence that enters organizational infrastructure needs bounded goals, permissions, evaluation, audit, versioning, rollback, and human accountability. The essence of Agentic AI is not intelligence alone, but intelligence that can be used and governed within explicit boundaries.",
      ],
    },
    {
      heading: "Stages of Transformation: Adder, Multiplier, and Exponent",
      paragraphs: [
        "A new factor of production never changes the world all at once. I describe its progression in three stages: the adder, the multiplier, and the exponent. These are not three model releases or three unrelated product categories. They describe how workflows and organizational forms are gradually rebuilt around a new productive input. Looking back at earlier industrial revolutions, the decisive moment was never simply that a new machine had arrived. It was that people finally learned how to redesign an entire system around its capability.",
        "The first stage is the adder. New technology is attached to an old process, while the main actor and organizational structure stay the same. Steam engines first pumped water from mines; the mines, miners, and workflow remained, but the water moved faster. Electric motors initially replaced steam power without changing factory design. Most uses of chat applications today—drafting an email, summarizing a document, modifying a few lines of code—belong here. The person still performs the old job; AI is a smarter input method or copilot. An output of 1 becomes 1.4, 1.6, or 1.8.",
        "The second stage is the multiplier. Electricity's multiplier moment was not an old factory that happened to use electricity, but a factory redesigned for electricity: small motors distributed across individual machines, equipment arranged by process, and the resulting assembly line. For Agentic AI, the leap is likewise not another chatbox inside an old workflow. The workflow itself is rebuilt around agents. A person defines the loop, coordinates queues of agents, handles exceptions, and accepts results instead of executing every step. Individual capacity no longer depends only on personal time, but on how many agents that person can organize reliably. An institution that once required a thousand coordinated employees might someday become fifty people, each working with twenty agents. The exact ratio is not the point. The point is that organizational capacity begins to separate from biological headcount.",
        "The third stage is the exponent: Agents for Agents. Agents begin helping design better models, tools, memories, evaluation systems, runtimes, and Harnesses. The output of one generation of agents becomes the production equipment used by the next. If every improvement can be verified, retained, and compounded, not only the capability curve but the rate of capability improvement begins to change. This is an early form of recursive self-improvement, and it is the direction I mean by a Self-Improvement Agentic AI System.",
        "Of course, bootstrapping does not automatically mean progress. A system capable of amplifying its own capability can also amplify a mistaken objective, a fragile implementation, or reward hacking. The more an agent can modify agents, the more evaluation, sandboxing, permissions, audit, version control, and rollback matter. The human has not magically left the loop, but moved one level higher: from changing every detail by hand to defining what better means, which boundaries cannot be crossed, and whether the result is acceptable. What should shrink is the human share of execution inside the loop, not human judgment and responsibility.",
      ],
    },
    {
      heading: "Technical System: Foundation Models, Agent Frameworks, and AI Infra",
      paragraphs: [
        "From where we stand today, the final capability of Agentic AI is jointly determined by three tightly coupled components: the foundation model, the Agent Framework, and AI Infra. We can loosely compare them to a brain, hands, and body, or think of them as computational intelligence, a context operating system, and the implementation layer. A bottleneck in any one becomes a bottleneck for the whole system.",
        "The first component is the foundation model. It is the capability core that supplies controlled intelligence—the ability to understand and generate—usually developed today through pre-training, mid-training, and post-training. Yet the model itself still resembles a stateless arithmetic unit: it produces what follows from the context that precedes it. By itself, it does not know whom it serves, whether the current task has finished, which permissions it has, or how to maintain a long-term relationship. The second component is the Agent Framework: the Agent Harness or context-orchestration layer. It manages when the model is invoked, what the model sees, how tools are used, which memories are preserved, how outputs are handled, and when the process should stop or return judgment to a person. The model supplies computation; the Harness manages context, storage, input, output, and control so that stateless calls become a persistent agent.",
        "The third component is AI Infra, the computational implementation. Training and inference capacity, model serving, KV caching, cloud-edge coordination, identity and permissions, evaluation, and observability all determine how an agent can work, how long it can run, and how many resources a task consumes. These are not independent industry layers. Better orchestration changes post-training and inference caching; stronger models change Harness design; and compute cost determines which workflows can spread in practice.",
        "This is why Agentic AI still feels like the early PC era to me. A foundation model resembles an early chip already capable of running complicated programs but not yet fully packaged. The Agent Framework resembles an early operating system, managing storage, input, output, and control around limited context and model calls. Chat applications resemble calculators: they prove that the core computational capability exists, but they are far from its final product form. Coding agents, deep research, and long-running tasks resemble scientific calculators and early system software. They reveal more complete workflows. The real application explosion will follow the creation of dependable agent operating systems.",
        "This stage is specialized, expensive, and full of engineering tradeoffs. We still need much more practice to decide which information belongs in context, how to preserve a task boundary, how to layer memory, how to maximize cache reuse, how to avoid wasteful calls, and even how to give agent tasks something like an appliance label for intelligence consumption. But that early quality is exactly what makes the field so absorbing. Nothing has been completely defined, everything can still be tried, and the future is not fantasy. It is becoming a real design language in front of us.",
      ],
    },
    {
      heading: "Organizational Redesign: Superintelligent Organizations and the Human Role",
      paragraphs: [
        "I use the term superintelligent organization for one organizational form at the mature end of this revolution. Superintelligent does not claim that one model already exceeds every human capability. It is a strict definition of organizational scale: an organization in which the number of Agentic AIs running concurrently exceeds the number of living biological humans. In 2026 terms, that means a system capable of coordinating more than eight billion agents at once. This is a definition for reasoning about a historical transition, not a validated timing forecast. When the first such organization appears, humanity will have deliberately created a new organizational structure whose participant scale is comparable to human society itself. I believe that moment would mark the transition of the fourth intelligent industrial revolution from germination to formal establishment.",
        "The superintelligent organization can also be called a super-personalized one-to-one organization. It would operate enough persistent agents to assign a distinct, long-term intelligent service to every person. The most direct example is a personal health agent. With authorization, it could continuously assemble sleep, diet, exercise, symptoms, and test results; preserve a complete health record; identify changes that deserve attention; and connect the person to professionals when the stakes are high. It should not impersonate a doctor or diagnose without evidence. Its first value is to keep scattered daily signals from disappearing, giving prevention, communication, and continuity of care an attention density that human staffing alone could never afford.",
        "Health is only one example. Education, research, creative work, professional development, household management, and public services can all be reconsidered through the same model. A useful way to think is not to ask which feature an agent can add to an existing product. Assume the agent has become the center, then imagine again how communication, work, software, and institutions should be constructed. When everyone has a persistent agent, a service no longer waits for someone to open an application. It persists around that person's goals, habits, history, and boundaries.",
        "Agentic AI will also create digital distribution centers for knowledge. The third information revolution allowed Information to move at scale, while search, recommendation, and advertising systems helped people filter the resulting explosion. The next step is movement of Knowledge: information with context, structure, judgment, and methods of action. Knowledge used to move slowly, fragmentarily, and through costly human effort. Agents can gather small pieces of knowledge from many settings, then form digital knowledge centers through memory, skills, evaluation, and governed sharing. Everyone can contribute knowledge that is consented, attributable, and reviewable, while retaining the right to keep knowledge private.",
        "The human role does not disappear in this process. It moves upward. Faced with a knowledge explosion, no person can directly consume and operate on everything. The most important human task becomes defining one's own knowledge world: its goals, values, boundaries, and acceptable outcomes. Judgment defines boundaries, and boundaries define a knowledge world. Agents can fill, connect, and operate on knowledge, but people must retain authority over which knowledge is worth pursuing, which risks are unacceptable, and who is responsible for the final result.",
      ],
    },
    {
      heading: "Research Coordinates: From X Toward Y and Z",
      paragraphs: [
        "AgenticXYZ is a coordinate system for studying how people and agents enter the next intelligent industrial revolution together. X, Y, and Z are not three calendar eras forced onto the future, nor are they mechanically identical to the adder, multiplier, and exponent. They describe three increasingly deep relationships among agents, people, knowledge, and other agents. XYZ is also my name initial, so in one sense this website is AgenticXYZ.ai by agentic AIs and XYZ. I still find that delightful.",
        "The order of the words is deliberate. X is Agents with People, not People with Agents, because everything in AgenticXYZ is constructed from the agent as the center: how an agent collaborates with people, how it continuously serves each person, and how it can be safely improved by other agents. Agent-centered does not mean pushing people to the edge. It means redesigning capabilities, relationships, and systems from the agent's point of view while keeping goals, boundaries, governance, and responsibility with people.",
        "X is Crossing: how people and agents collaborate, contribute, correct, and govern knowledge with a Human in the Loop. Y is Yours: how every person can have a persistent agent, placing agents in every loop. Z is Zero: how the human share of execution can continue moving toward zero, making Agents by Agents possible while people move beyond direct execution without leaving governance. Z never means Human beyond the Governance Loop. People can leave most execution, but cannot automatically surrender goals, authorization, values, and responsibility.",
        "The purpose of AgenticXYZ can be compressed into the two lines in my X profile: “Agentic AI enables controllable intelligence to help people. Working on self-improvement agentic AI system.” The first line states the destination: controlled intelligence should help people. The second states what I am building now: agents that help improve the systems that carry agents, with changes that remain real, verifiable, and cumulative. One explains why; the other explains what I am doing.",
        "We are, of course, still extremely early. Few people have fully delegated an objective to a long-running agent, and reliability, predictability, and cost remain far from solved. If you ask me to predict exactly what an agent workflow will look like ten years from now, I cannot. Something laborious today may become a default capability in a few months. But we can still build around the directions that appear durable: intelligence will become infrastructure, people will move from execution toward goals, judgment, and governance, and software and organizations will be redesigned around agents. AgenticXYZ will begin with X and move forward one step at a time, to see how far this system can ultimately take us.",
      ],
      table: {
        label: "The AgenticXYZ coordinate system",
        headers: ["Axis", "Meaning", "Relationship", "Stage", "Core question"],
        rows: [
          [
            "X — Crossing",
            "The intersection of people and agents",
            "Agents with People",
            "Human in the Loop",
            "How agents collaborate with people to support the contribution, correction, and governance of knowledge",
          ],
          [
            "Y — Yours",
            "An agent for every person",
            "Agents for People",
            "Agents in Every Loop",
            "How agents build personalized memory and continuously serve every person",
          ],
          [
            "Z — Zero",
            "Toward zero human execution",
            "Agents by Agents",
            "Human beyond the Execution Loop",
            "How agents improve agents and verify that each update is safe and effective",
          ],
        ],
      },
    },
  ],
  endNote:
    "AgenticXYZ studies how Agentic AI can become foundational technology for the next industrial revolution and genuinely help people. The work begins with X / Crossing: Agents with People, Human in the Loop; then moves step by step toward an agent for every person and a verified, governed form of Self-Improvement Agentic AI.",
  translations: {
    zh: industrialRevolutionArticleZh,
  },
};
