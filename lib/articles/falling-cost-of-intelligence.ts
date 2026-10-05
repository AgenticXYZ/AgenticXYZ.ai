import type { Article } from "../article-types";
import { fallingCostOfIntelligenceArticleZh } from "./falling-cost-of-intelligence.zh";

export const fallingCostOfIntelligenceArticle: Article = {
  "slug": "falling-cost-of-intelligence",
  "date": "2026-09-27",
  "sequence": 4,
  "displayDate": "September 27, 2026",
  "category": "Weekly Essay",
  "title": "The Falling Cost of Intelligence and a New System for Knowledge Collaboration",
  "dek": "Intelligence is getting cheaper faster than electricity or compute ever did. Using Xiaomi's open-source MiMo post-training code as an example, this essay shows why the agent era needs a new system for knowledge collaboration.",
  "readTime": "15 min",
  "lead": "This week brought three major releases: Anthropic's Claude Opus 5.5, OpenAI's GPT-6 Sol, and Xiaomi's MiMo v2.6. They share one thing in common. Performance keeps going up, and prices keep coming down sharply.",
  "sections": [
    {
      "heading": "What an exciting week!",
      "paragraphs": [
        "## Claude Opus 5.5: finally ready to be the main agent",
        "From my own hands-on experience, Opus 5.5 is more impressive than GPT-6 Sol. On most tasks, it now performs about as well as Fable. The bigger change is its writing style. The “AI flavor” that people used to complain about is basically gone in this version. Opus now sounds genuinely human.",
        "It also changed how I run long tasks:\n\n- **Before:** Fable was the main agent, in charge of planning and judgment. Opus was the sub-agent, the hands that carried out concrete tasks. This setup saved usage quota.\n- **Now:** Opus 5.5 is the main agent. I just set `/advisor fable`, and Fable is called in at the key checkpoints of a long task to make decisions and run retrospectives.",
        "The new setup works better, and it burns through quota much more slowly. For similar tasks, Opus is very durable as the main agent. In my experience, it uses roughly half as much quota as Fable does in the same role.",
        "## GPT-6 Sol",
        "GPT-6 Sol is also a solid upgrade. It is stronger (probably) and cheaper (that part is definitely true). But in my daily long-running tasks, it did not change how things feel as much as Opus 5.5 did. That said, Astra is still very strong. It just burns through quota far too fast, and I really can't keep up. For now I still use Astra as the main agent and Sol as the hands for concrete tasks. Even so, the quota drains incredibly fast.",
        "## MiMo v2.6: September's open-source star",
        "MiMo v2.6 is the most eye-catching open-source model of September. Xiaomi took another step forward on openness:\n\n- They had already published a dashboard of their post-training process.\n- This time they open-sourced part of their post-training components and infrastructure, together with a large amount of high-quality data.\n- MiMo v2.6 Flash, released at the same time, is currently the most balanced open-source model with the best overall price-performance.",
        "This open-source code is also the main character in the second half of this post."
      ]
    },
    {
      "heading": "The price of intelligence is falling faster than electricity and compute",
      "paragraphs": [
        "Another thing I loved this week was a chart published by Epoch AI. I think it is brilliant. The cost of intelligence is falling faster than the cost of compute and electricity ever did.",
        "My verdict on this chart fits in three words: exactly right.",
        "Epoch estimates that the price of AI at a fixed capability level falls about 47% per quarter, or about 12.7x per year. Converting the three curves into average yearly rates makes the gap even clearer. The table below the chart shows them; the last two columns are my own rough readings of the chart."
      ],
      "figure": {
        "src": "/images/falling-cost-of-intelligence/epoch-ai-price-decline.png",
        "alt": "Epoch AI chart comparing relative price declines: AI from 2021 to 2026 falls almost vertically, far faster than DNA sequencing, compute, lithium batteries, and electricity.",
        "width": 1026,
        "height": 1283,
        "caption": "The price of artificial thought may have fallen faster than for any other transformative technology in history.",
        "source": {
          "href": "https://epoch.ai",
          "label": "Source: Epoch AI (CC-BY)"
        }
      },
      "table": {
        "label": "Average price decline of three production factors (author's rough readings of the chart)",
        "headers": [
          "Production factor",
          "Period",
          "Total decline",
          "Average yearly decline"
        ],
        "rows": [
          [
            "Electricity",
            "1892–1973",
            "about 100x",
            "about 1.06x per year"
          ],
          [
            "Compute",
            "1940–2001",
            "about 1 trillion x",
            "about 1.6x per year"
          ],
          [
            "AI",
            "2021–2026",
            "about 300,000x",
            "about 12.7x per year"
          ]
        ]
      }
    },
    {
      "heading": "Why it makes sense that AI is getting cheaper faster",
      "paragraphs": [
        "This matches the view from my earlier posts exactly. Electricity and compute are both production factors that deeply reshaped society. And they stack on top of each other:\n\n- Compute is built on electricity. Computing grew up in an era that was already electrified.\n- AI is built on compute. AI is growing up in an era that is already computerized.",
        "Each new production factor starts from a layer that has already become almost free. So its cost curve falls more steeply. From this angle, it makes complete sense that AI is getting cheaper faster than compute did.",
        "## Another piece of evidence for the fourth industrial revolution",
        "I have long believed that we are living through the fourth industrial revolution, the intelligence revolution. The second was the electrical revolution, and the third was the computing revolution. Looking back at the history of electricity and compute tells us where we are now. A new production factor is quickly becoming “cheap enough”. It will move through three stages: adder, multiplier, and exponentiator. It will reshape every frontier individual, then every frontier industry, and then society as a whole.",
        "All in all, this was another week of pure excitement. The world at this time last week and the world at this time this week feel completely different. At least for me, the memories of before have already blurred."
      ]
    },
    {
      "heading": "Why the age of intelligence needs a new system for knowledge collaboration",
      "paragraphs": [
        "What I most want to talk about this week is how knowledge collaboration changes when you put Opus 5.5 together with Anthropic's Claude Artifacts, its visual and interactive system. My core claim is this. Once intelligence gets cheap, the bottleneck moves from producing knowledge to circulating it. And today's internet infrastructure was designed for humans to read. It was not designed for humans and agents to work together.",
        "Take open-source projects as an example. Today we understand an open-source project through a toolchain built for humans: the code repository, the README, issues, pull requests, and technical reports. This system has three problems:\n\n- **Knowledge is scattered.** The design motivation lives in the paper. The implementation details live in the code. The reasons behind trade-offs live in some commit or issue. Readers have to piece it together themselves.\n- **Knowledge is static.** A document starts going stale the moment it is written. It cannot answer follow-up questions. It cannot adjust its depth to the reader's background.\n- **Knowledge flows one way.** Whatever a reader thinks, improves, or transfers after understanding it rarely flows back anywhere.",
        "Git was born at the pace of human collaboration. The pace of humans working with agents has already gone far beyond what it was designed for. (I had an agent help me make the table below.)"
      ],
      "table": {
        "label": "Traditional knowledge collaboration versus knowledge collaboration in the agent era",
        "headers": [
          "Dimension",
          "Traditional knowledge collaboration",
          "Knowledge collaboration in the agent era"
        ],
        "rows": [
          [
            "Where knowledge lives",
            "Code, docs, and papers, stored separately",
            "Interactive knowledge objects organized around questions"
          ],
          [
            "How people understand",
            "Humans read line by line and assemble the picture",
            "Agents read everything and draw the structure; humans ask follow-ups as needed"
          ],
          [
            "Unit of knowledge",
            "Files, commits, PRs",
            "Concepts, components, formulas, design trade-offs"
          ],
          [
            "Direction of flow",
            "One way, from author to reader",
            "Readers' thinking can be saved, transferred, and republished"
          ],
          [
            "Infrastructure",
            "Git, web pages, PDFs",
            "Knowledge-centered versioning and collaboration systems"
          ]
        ]
      }
    },
    {
      "heading": "Example: understanding MiMo's open-source post-training code with an agent",
      "paragraphs": [
        "So I keep thinking about how to rebuild the entire internet infrastructure from the perspective of knowledge, and then build a new kind of Agentic AI System on top of it. For the past half year, I have mainly been designing a solution built entirely on agentic AI knowledge collaboration: ACKs (Agentic Collaborative Knowledge system). This is the problem it is meant to solve. I already have a good demo project, and I plan to open-source and show everything within a month. (I also know I only get one shot at this, so I want it to be reasonably polished.)",
        "That said, I think Claude is already far ahead here. I think Anthropic as a company takes knowledge collaboration seriously. So I can start demonstrating right away, using the code Xiaomi just open-sourced as the example. I put together a very short example and had an agent help me process it.",
        "The post-training code Xiaomi just open-sourced lives at [XiaomiMiMo/verl](https://github.com/XiaomiMiMo/verl). It is a fork of verl, and it comes with a long [MiMo-V2.6 technical report](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf). The traditional way, understanding it takes a weekend. You read the report, dig through the code, sketch out your own analysis, and run some experiments to try things.",
        "This time I used Opus 5.5 with Artifacts, and I went through the whole process in about 35 minutes one evening:\n\n1. **Ask about the differences.** I asked just one question: how does Xiaomi's fork differ from the original verl? Opus cloned both repositories, compared the diff line by line, and gave me a conclusion within minutes.\n2. **Ask for a diagram.** I asked it to draw a structure diagram. It went back into the code, traced the call order of the training loop, and drew a pipeline from sampling to update. Gray is upstream, and teal is what Xiaomi added.\n3. **Redraw against the original report.** I gave it the link to the technical report. It downloaded the PDF, read Sections 4 through 6 and two architecture figures, then went back to the code to check item by item what was implemented and what was not. Finally it drew the four-stage diagram in the next section.\n4. **Click to drill down.** Every box in the diagram is clickable. I clicked “Harness Pool”. It generated a follow-up question on its own, read the submodule code, and laid out the full code path for multi-harness training.\n5. **Keep drilling down.** Then I clicked “Five verifiers”, and it kept going, lining up the report against the code.",
        "## Layer one: get the conclusion first",
        "The very first sentence of its first answer was the conclusion: **this is not a rewrite. It is “upstream verl plus one 30,000-line commit”.**\n\n- The fork is pinned to upstream verl at `2781c1e4` (v0.9.0.dev, 2026-08-05).\n- Xiaomi added only one commit, `e2b9fc03` (2026-09-21). It touches 191 files, adding about 30,672 lines and deleting 88.\n- The training engine, the Megatron/FSDP backends, SGLang/vLLM rollout, and Ray scheduling are almost untouched. Changes to the core `verl/` directory come to about 3,000 lines. All of them sit behind switches that are off by default.",
        "The bulk of the addition is five agentic RL environments:"
      ],
      "table": {
        "label": "The five agentic RL environments added in the MiMo fork",
        "headers": [
          "Domain",
          "Task",
          "Verifier"
        ],
        "rows": [
          [
            "Code",
            "Fixing bugs (SWE)",
            "Executable tests"
          ],
          [
            "Cyber (ARVO)",
            "Reproducing vulnerabilities",
            "Rule checks"
          ],
          [
            "General",
            "Knowledge work",
            "Rubric plus LLM judge"
          ],
          [
            "Visual",
            "Web development",
            "Screenshot rendering plus visual scoring"
          ],
          [
            "Music",
            "Symbolic music composition",
            "Rule-based scoring"
          ]
        ]
      }
    },
    {
      "heading": "Layer two: one diagram for a whole training step",
      "paragraphs": [
        "The diagram below breaks the report's main storyline into the four stages of one training step. Every box is labeled with its report section or equation. Color and dashed borders separate three kinds of components. Once you read it, the boundary of the whole project is clear: **the open-source release covers “how the signals are made”. What stays closed is “how it runs at scale”.**",
        "- **Open-sourced:** the environments, verifiers, multi-harness training, Penalty Module, length penalty, adv_signed, and prompt-mean. These are the algorithmic pieces with the most direct effect on results.\n- **Not open-sourced:** one group is infrastructure for thousand-GPU scale, such as the Sample Mixer and MXFP4 training-inference alignment. The other group is methods that need an extra trained grader model, such as GRS and GAR for coding tasks.",
        "The one sentence worth remembering from the whole diagram: **Xiaomi did not change “how the model is updated”. They changed “which tokens the gradient should land on”.** Take `adv_signed`. In a successful trajectory, spans with tool-call errors get zero advantage. In a failed trajectory, the penalty on those spans is doubled. The rest is then rescaled separately by sign, so the total positive and negative gradient across the batch stays the same."
      ],
      "figure": {
        "src": "/images/falling-cost-of-intelligence/mimo-rl-pipeline-en.png",
        "alt": "Four-stage diagram of one MiMo-V2.6 agentic RL training step: rollout, grading, credit assignment, and training, with each component marked as upstream verl, open-sourced from the report, or described in the report only.",
        "width": 1344,
        "height": 1626,
        "caption": "One MiMo-V2.6 agentic RL training step: 4 stages and 3 kinds of components.",
        "source": {
          "href": "https://github.com/XiaomiMiMo/verl",
          "label": "Based on XiaomiMiMo/verl and the MiMo-V2.6 technical report"
        }
      }
    },
    {
      "heading": "Layer three: one click takes you down to the code",
      "paragraphs": [
        "This is what surprised me most about Artifacts. The diagram is not a static image. It is an interactive entry point into knowledge. After I clicked “Harness Pool”, I got a breakdown of the four training harnesses, shown in the table below.",
        "It also surfaced a key constraint I would likely have missed reading the code myself: **every prompt group must use the same harness.** Otherwise the GRPO group mean mixes “which harness is easier” into the advantage. The model would be rewarded for “happening to land in an easy shell” instead of “solving the task better”. The fork enforces this with a `step-hash` selector in `mimoagent_runner.py`. Table 7 of the report provides the evidence. A 9B model trained on only 4 mini-harnesses improved on all 3 real harnesses it had never seen.",
        "I did not get this understanding by reading 30,000 lines of code and dozens of report pages. I got it by working with Opus, asking question after question around one interactive diagram."
      ],
      "table": {
        "label": "The four mini-harnesses used for multi-harness training",
        "headers": [
          "Harness",
          "Tools",
          "Model protocol",
          "Notes"
        ],
        "rows": [
          [
            "mini-mimocode",
            "bash/read/write/edit/grep/glob/task",
            "Chat",
            "Includes a task sub-agent"
          ],
          [
            "mini-bash",
            "bash only",
            "Chat",
            "Minimal system prompt"
          ],
          [
            "mini-claude-code",
            "Bash/Read/Write/Edit/Grep/Glob",
            "Chat",
            "Claude Code style prompt"
          ],
          [
            "mini-codex",
            "exec_command/apply_patch",
            "Responses",
            "Context compression turned off"
          ]
        ]
      }
    },
    {
      "heading": "From understanding to building your own",
      "paragraphs": [
        "Understanding is only the first step. The real value of this new mode of knowledge collaboration comes after you understand. I can add my own thinking on top of Xiaomi's code, build my own infrastructure, or transfer its knowledge into my own projects.",
        "In the diagram below, Opus and Artifacts form a follow-up loop. My own judgment grows out of that loop, then branches into three exits."
      ],
      "figure": {
        "src": "/images/falling-cost-of-intelligence/knowledge-loop-en.png",
        "alt": "Flow diagram: code and technical report go to Opus 5.5, which exchanges follow-up questions with interactive Artifacts; this feeds my own judgment, which branches into building my own infrastructure, transferring to my projects, and sharing as knowledge.",
        "width": 1344,
        "height": 714,
        "caption": "The knowledge collaboration loop in the agent era, with MiMo verl as the example.",
        "source": {
          "href": "https://github.com/XiaomiMiMo/verl",
          "label": "Example project: XiaomiMiMo/verl"
        }
      }
    },
    {
      "heading": "Three exits: infrastructure, research, and shared knowledge",
      "paragraphs": [
        "## Exit one: build my own infrastructure on top of the open-source code",
        "The dashed boxes in the four-stage diagram are the gaps in the open-source release. The most obvious one is GAR. It breaks “passed the tests” down further into “solution quality”, and does attribution within each group. In the report, GAR depends on an SFT-trained agentic grader, which was not open-sourced.",
        "But with a complete understanding, filling that gap is not hard. Use an API model as the grader, implement the advantage redistribution from Eq.3 in the report, and plug it in after the fork's existing Penalty Module. That is how a piece of my own infrastructure grows on top of someone else's open-source code.",
        "## Exit two: transfer the knowledge into my own research",
        "After reading this project, I found that it connects directly to two of my research lines:\n\n- **Agent consistency.** The four mini-harnesses share the same environment and change only the interaction mechanism. That makes them a natural set of controlled groups. The `paired_validation` mode puts several harnesses on the same task within one group. So you can directly test whether different agent frameworks behave consistently on the same task.\n- **Trajectory attribution.** The span-level credit assignment in `adv_signed`, and the design that separates infra failures from model errors, are both at heart attribution problems in long agent trajectories.",
        "The information needed to reproduce it is also clear:\n\n- **Full training: needs dedicated resources.** You need a GPU cluster to run RL (Megatron + SGLang), plus a K8s cluster to host the sandboxes.\n- **Consistency research: normal resources.** Point the gateway at an API model and run rollouts only, with no training. You only pay for the API.\n- **Open-source release:** the code, training data (HF `XiaomiMiMo/MiMo-V2.6-RL-oss`), starting model, and both submodules are all public and ready to read and learn from.",
        "## Exit three: turn understanding into collaborative knowledge",
        "The post you are reading now is an example of the third exit. Opus 5.5 drafted it straight from my earlier conversation, and the diagrams were carried over from that conversation too. My understanding did not stay stuck in a chat log. It became a knowledge object that others can read, comment on, and keep asking questions about."
      ]
    },
    {
      "heading": "Why this is a more advanced mode of knowledge collaboration",
      "paragraphs": [
        "Compared with the traditional “read the README, dig through the code, read the paper”, this experience differs in three ways:\n\n1. **Knowledge is organized around questions, not files.** Report sections, code files, and equation numbers all end up in the same box of the same diagram.\n2. **Understanding is layered and unfolds on demand.** Get the conclusion first, then the big picture, and drill down only into the boxes you care about. I did not need to read 30,000 lines of code.\n3. **Knowledge can flow back.** A reader's thinking can become new code, new experiments, and new posts, which then become the next person's starting point.",
        "But this also exposes the limits of today's infrastructure. These knowledge objects are still scattered across individual chats and individual Artifacts. They have no version relationship with the upstream code. Other agents cannot reliably cite, verify, or merge them. That is exactly why I believe we need to rebuild infrastructure starting from knowledge."
      ]
    },
    {
      "heading": "Finally",
      "paragraphs": [
        "The price of intelligence is falling faster than anything in history. When a single Opus 5.5 can help me understand 30,000 lines of code and a long technical report in 35 minutes, I think the collaboration methods invented in the software era and the internet era need to be completely rebuilt. The underlying system is entirely different now. If we have infrastructure that lets understanding be saved, questioned, transferred, and merged, that infrastructure can become a digital knowledge center that keeps evolving.",
        "The electrical era rebuilt the factory. The computing era rebuilt how information flows. What the intelligence era needs to rebuild is how we collaborate on knowledge. This is the theme AgenticXYZ will keep writing about.",
        "See you next week!"
      ]
    }
  ],
  "endNote": "Written and published on September 27, 2026. Model impressions reflect my own usage during the release week. The two diagrams were drawn with Claude from the XiaomiMiMo/verl repository and the MiMo-V2.6 technical report. The price chart is by Epoch AI, published under CC-BY. The first draft of this essay was prepared by Claude Opus 5.5 from my working conversation and then revised by me.",
  "translations": { "zh": fallingCostOfIntelligenceArticleZh }
};
