import type { Article } from "../article-types";
import { personalAgentsAgenticSoftwareArticleZh } from "./personal-agents-agentic-software.zh";

export const personalAgentsAgenticSoftwareArticle: Article = {
  "slug": "personal-agents-agentic-software",
  "date": "2026-10-04",
  "sequence": 5,
  "displayDate": "October 4, 2026",
  "category": "Weekly Essay",
  "title": "Personal Agents Are the Future. Agentic Software Is the Path.",
  "dek": "Personal agents like OpenAI's Dots are the right long-term goal, but now is the wrong time. This essay argues that we should build Agentic Software first, and shows how Sign in with ChatGPT and Claude Mods help.",
  "readTime": "15 min",
  "lead": "TL;DR: Personal agents are the right long-term goal, but now is not a good time to build them. What we should build today is Agentic Software: apps with a native, built-in agent. Today, this is a more effective way to push the limits of Agentic AI. It is also the ground that personal agents will stand on in the future. That is why I think Sign in with ChatGPT and Claude Mods are this week's launches with the longer-lasting impact.",
  "intro": [
    "This week was another exciting one, because it included this year's OpenAI DevDay. On September 29, OpenAI launched [Dots](https://betanews.com/article/openai-dots-agents-chatgpt/) at DevDay 2026. Each Dot is an always-on agent with its own cloud computer. You give it a goal and connect your apps. It works in the background and brings the finished result back for your approval. Personal agents like Dots are very hot right now. Meta launched [Muse](https://www.bgr.com/2272332/openai-devday-2026-announcements/) on September 8. It made a big splash in North America and gave a lift to Meta and Tencent's stocks. Microsoft expanded Copilot Autopilot on September 25, and Perplexity launched Computer Automations on September 29 ([Orthotropy](https://orthotropy.com/en/insights/ai-agents-news-2026-10)). Every big lab wants to build a personal agent.",
    "Personal agents get a lot of attention right now. I also believe they will be a very big market in the future. They are the right product form, and the design of Dots is mostly right. But I still think now is a very bad time. A product launched at the wrong time can only be the wrong product. I feel it may go the way of OpenClaw: by this time next year, almost no one will care about it.",
    "In the same week, two other launches will, I think, have a much deeper impact on the whole industry: Sign in with ChatGPT and Claude Mods. For the whole Agentic AI ecosystem, these two are the more important part. I will also point out where I think they fall short."
  ],
  "sections": [
    {
      "heading": "1. Why personal agents are promising",
      "paragraphs": [
        "Agents (including future personal agents) will change how we use computers. Today, when we use computers, software and the internet, the user is usually the active side. With personal agents, the user gives the agent a broad goal, or an expectation. Over the whole process, the agent becomes the more active side.",
        "**Let's set aside all limits and constraints for a moment. If we were to design a personal agent, how should we design it?**",
        "The core points are:\n\n1. It must be a Y-type agent. It is not just a 24/7 agent. It is an agent fully **based on** you. It must sustain itself for a long time and keep updating its memory about the user. It must keep finding which memories are unique to the user. It must also connect, through connectors, to every product the user spends time on each day.\n2. It must use a strong enough foundation model, much stronger than the problems it is meant to solve. It must not only solve problems but also find them. So the problem space it works in is much, much larger than the space of the user's daily problems. It must use a very strong model, even one so strong that most users find it wasteful.",
        "So, here is what Dots looks like in practice:\n\n- **It persists.** A Dot keeps working between conversations and learns from your feedback.\n- **It has its own computer.** It runs GPT-6 Astra in the cloud, with a browser and access to over 4,000 apps.\n- **It works while you are away.** When it has no task, it does background research with read-only tools.\n- **It lives where you work.** You can message or call it in ChatGPT, Slack and Teams. Texting is coming soon.",
        "We can see that Dots fits our expectations well. First, it is a long-running agent. It can load all your memories and read all your ChatGPT chats and work. Through connectors, it links to your email, document libraries and local content. And Dots uses Astra as its foundation model. Many people find this very wasteful, but it is the right design. If you build a personal agent, you must use the strongest foundation model to meet what people expect from one.",
        "At launch, OpenAI showed many demos. One example is small but telling. An early tester's Dot noticed that he had forgotten to invoice a publication. Using his calendar and email, it prepared the invoice and sent it after he approved ([BGR](https://www.bgr.com/2272332/openai-devday-2026-announcements/)).",
        "This is the real promise. A chatbot answers when you ask (I have always seen chatbots as calculator-level apps). A personal agent notices everything about you. For people who study long-horizon agents, this is our research problem turned into a product. So personal agents are the right product form and meet a real need. They will surely shine in the future. I just think now is the wrong time."
      ]
    },
    {
      "heading": "2. Why it may still be too early for personal agents",
      "paragraphs": [
        "Personal agents today have only one core problem: for the industry right now, they are a misallocation of resources. At this point in time, what personal agents add to the Agentic AI industry is far smaller than the resources they consume. This matters most now, when compute is tight and we need to put more resources into pushing the limits of Agentic AI.",
        "If we think of a full personal agent as one that is always online, truly knows everything about you, and keeps acting for you, then it demands far more from the whole Agentic Stack than an ordinary agent does.",
        "First, the value of a personal agent comes from the “long term”, and long-running work is exactly where agents are weakest today. It needs persistent identity, long-term memory, continuous execution and state management. But once the time scale grows to days or months, memory drift, context pollution, inconsistent state and error buildup appear. What we do best today is still session-based agents. To solve this, the agent may need a lot of extra silent work in the background to keep managing its state and memory. This makes a personal agent very hungry for compute. It is hard to tell yet whether more use by a user would reduce this drift. If it does, maybe this problem can be solved.",
        "Second, a personal agent needs, to some degree, access to “everything about me”. This puts a heavy demand on the connector ecosystem. Most large services now offer connectors, but most of these connectors do not cover core actions. They are mostly limited, read-only designs. So every company still uses computer use as a fallback. These data silos will need more time to break down. Maybe at some point the data-ownership movement will be complete, and any service that cannot offer full connector access will have no room to survive. Then “everything about me” will connect naturally. But at least for now, we are not there.",
        "Third, even within today's access scope, personal agents have very low tolerance for mistakes, so operational safety and data security are very hard problems. When a coding agent makes a mistake, you can roll back. When a research agent makes a mistake, you can run it again. The tasks that agent post-training focuses on today are very different from what personal agents face. Sending the wrong email, spending the wrong money or leaking private data are mostly one-way actions. They are very hard to undo. In this setting, even a 95% success rate sounds low. So the whole system needs very high reliability.",
        "Another pressing issue is cost. To reach the good results described above, the only option today is brute force, and it is hard to collect that cost from ordinary users. AI today is billed by tokens, but there is no shared sense of what a token is worth. Take electricity: it is billed by the kilowatt-hour, and users know what one kilowatt-hour can do, like how long it can heat a room or run a TV, or how many loads of laundry it can wash. Even internet data is billed by usage, and people roughly know how many minutes of movies and TV, how much short video, or how much music it buys. But users today have almost no sense of what a given number of tokens can do. Different foundation models and agents behave very differently, so there is no shared way to compare value.",
        "Also, there is no stable Agentic Software layer yet. Most software is still designed for humans clicking on screens. It lacks machine-readable state, agent-native APIs, delegated authentication, transaction rollback and event subscriptions. The dependency chain is: foundation models → agent runtime and harness → Agentic Software → identity, delegation and personal context → personal agents. It is easy to jump straight to the top layer, but the layers below are not done yet.",
        "For personal agents to be truly usable, every layer of the Agentic Stack must be in place. Today, most of the resources spent on personal agents go into filling gaps in the lower layers, not into pushing the limits of what agents can do. Specifically, there are six gaps:"
      ],
      "table": {
        "label": "Six gaps between today's Agentic Stack and a usable personal agent",
        "headers": [
          "Gap",
          "Where the resources go when you build a personal agent",
          "Why it can't be filled yet"
        ],
        "rows": [
          [
            "1. Long-running work",
            "Memory management, state consistency, error recovery",
            "Session-based agents are still the most mature; over days or months, memory drift, context pollution and error buildup appear"
          ],
          [
            "2. Personal context",
            "Connectors, OAuth, data mapping and sync",
            "Personal data is spread across dozens of silos; there is no unified personal context layer yet"
          ],
          [
            "3. Delegation",
            "Fine-grained permissions, audit, revocation",
            "Today's permission systems are built for “human → software”, not “human → agent → sub-agent → service”"
          ],
          [
            "4. Fault tolerance",
            "Human approval, transactions, rollback",
            "A wrong email or wrong payment can't be reverted; a 95% success rate across dozens of actions a day is far from enough"
          ],
          [
            "5. Cost",
            "Calling the strongest foundation model 24/7",
            "Compute is tight; using Astra for Dots is the right design, but that is exactly why it is so costly, and this does not yet count the cost of silent background alignment"
          ],
          [
            "6. Agentic Software layer",
            "Using computer use to operate screens designed for human clicks",
            "Most software still has no agent-native APIs, semantic actions or event subscriptions"
          ]
        ]
      }
    },
    {
      "heading": "A misallocation of resources, not a wrong direction",
      "paragraphs": [
        "These six gaps have one thing in common: they are all problems of the lower-layer infrastructure, not of the intelligence on top. The bottleneck for personal agents is shifting from intelligence to systems reliability.",
        "So if you build an “all-purpose personal agent” today, much of the engineering work is really rebuilding authentication, connectors, memory, permissions, browser automation and reliability infrastructure, plus 24/7 frontier-model compute. This is the resource misallocation: a large investment that does little to push the limits of Agentic AI.",
        "Moreover, personal agents do little today to push the limits of Agentic AI. As a product, a personal agent's main metric is how users feel: which clear problems it solves for users, and how reliably it solves them. But I think what matters more now is pushing the limits of Agentic AI: bringing agents into more uncertain settings, where we don't yet know what help they can give. This is at odds with the metrics of the product itself.",
        "Since we have come this far, this is also a big difference between B2B and B2C business. I have always believed that **every industry develops in three stages: the lab stage → the industry rebuild stage → the mass-adoption stage. These match the adder, multiplier and exponentiator stages from my earlier article.** Electricity, compute and the internet all followed this path. Each first landed in labs and drove progress there. Then came small-scale use, to explore how the technology could upgrade industries. In other words, it first raises specialized productivity, and industries are rebuilt for it: old industrial models are redesigned around the new technology. Only then comes mass adoption by individuals, which reshapes all of society. For details, see my earlier answer, which discusses the link between industrial revolutions and the technology ramp-up.",
        "For agents, these stages map to X-type, Y-type and Z-type agents. I think we are still climbing from the X-type stage toward the Y-type stage. The most urgent task now is to push the limits of Agentic AI and make agents more reliable and predictable. Then we can rebuild important industry chains around them, like software, medicine and chemicals. Only after that should we think about Z-type agents. My earlier articles also cover this.",
        "We are now in a stage of serious misallocation. At least in my view, personal agents are not the problem we most need to solve at this stage.",
        "Still, I also believe that “too early” does not mean “wrong direction”. Personal agents are surely a good form. Since work on them has already started, I think we should think more about building Agentic Software as infrastructure. Once the lower layers are built, personal agents can understand the whole digital world on their own, with much more ease. Then they only need to be an intelligent layer that keeps acting for a person. So the next chapter discusses Agentic Software."
      ]
    },
    {
      "heading": "3. Why we should build Agentic Software now",
      "paragraphs": [
        "By Agentic Software, I mean apps that carry an agent natively. The agent is part of the app. It is a member from the time the software is designed and made. The software may even be built with the agent's help, and the finished software itself carries part of the agent that helped build it. Through this agent, users can keep building and shaping the app.",
        "I described the idea of Agentic Software in detail in an earlier article. In this sense, users are not only users of the software but also its co-builders. Users can also send knowledge to a central digital software hub through Knowledge-based Pull Requests. This helps all users and makes knowledge digital and centralized.",
        "A personal agent is horizontal: one agent across all your apps. Agentic Software is vertical: one agent that deeply knows one domain. We need both, but the vertical layer can be built well today.",
        "Personal agents sit at the top. They work best only when the apps below them are agent-native, not just clickable or fixed by design. So the Agentic Software layer is the industry layer we should build now.",
        "- **Agentic Software: a small scope makes trust possible.** The agent's data, tools and actions all have limits. Users can see what it does and correct it in time.\n- **Agentic Software: the app becomes the user's own.** Users can extend and reshape the software with the app's agent, because users are the people closest to real use cases. Every copy grows in a different direction. Software is no longer one-size-fits-all, and users become co-builders.\n- **Agentic Software: an upgrade for the software industry.** Software can improve in stages and does not need to wait for full autonomy. Existing software can first use agents for smart manuals, onboarding and personalized settings, which help users get started. Record-skill and automation features can then save users' common, standard workflows with ease. I describe the whole process in my article “Agent Software as the Foundation of All Software”.\n- **Agentic Software: building what personal agents need.** Each agentic app offers clear tools, structured knowledge, domain memory and clear permissions. Future personal agents can call these apps directly, instead of clicking around on screens.\n- **Agentic Software: pushing the limits of Agentic AI.** As all software becomes Agentic Software, many unique, real business settings will also be digitized and made agent-ready in detail. This can even give foundation-model post-training more diverse and more realistic frontier scenarios, which raises the models' AGI capability.",
        "In short, a personal agent is only as good as the software it uses. Agentic Software is how we get that software ready."
      ],
      "figure": {
        "src": "/images/personal-agents-agentic-software/agentic-stack-layers-en.png",
        "alt": "Layer diagram: personal agents (the long-term vision) call Agentic Software through clean tools; Agentic Software runs on models and agent harnesses. Two side boxes, Sign in with ChatGPT and Claude Mods, point into the Agentic Software layer.",
        "width": 1344,
        "height": 756,
        "caption": "Personal agents stand on Agentic Software, with this week's two bridges into that layer.",
        "source": {
          "href": "https://claude.ai",
          "label": "Drawn with Claude for this essay"
        }
      }
    },
    {
      "heading": "4. How unified OpenAI login and Claude Mods help us build it",
      "paragraphs": [
        "This week's two launches remove two big barriers for Agentic Software. One solves “who pays, and who is the user”. The other shows how an app can grow together with its agent.",
        "## Sign in with ChatGPT: identity and compute",
        "If you have read this far, a natural thought follows: if users also take part in building software, AI must become infrastructure, like electricity or compute. I think Sign in with ChatGPT, launched this week, is a very important step toward AI becoming infrastructure, or a factor of production! Compared with Dots, Sign in with ChatGPT is clearly the more important launch, with a deeper impact, because users can now bring their own intelligence into a much wider range of places at any time.",
        "Before, agentic apps had two bad options: the developer paid for every model call, or users pasted in their own API key. [Sign in with ChatGPT](https://developers.openai.com/siwc) offers a third option. Users log in with their ChatGPT account. Plus and Pro users can use their own plan to pay for AI requests in your app, and these requests count toward their plan's usage ([OpenAI Help Center](https://help.openai.com/en/articles/20001542-using-your-chatgpt-plan-in-other-apps-and-sites)). The design is careful. Users can set a weekly usage limit for each app. The app gets only name, email and profile picture. It does not get the user's chats, memories or API key.",
        "This matters most for small teams and open-source projects. You can ship an app with a real agent inside, without paying for inference. It also gives users one identity across many apps. This is a first step toward agents that move between apps as the same “you”.",
        "I also think this model allows a new relationship, and even a new economic model, between software makers and foundation-model companies. I explained this model in detail in an earlier article. Software makers are not only customers of foundation-model companies (because they use coding agents to build software). They can also become their distributors. When software users connect to a foundation-model company's service, and some features use the users' tokens, the software maker should treat this as distributing an intelligence service and get a share of the revenue. Then software makers will have more reason to make every part of their software agentic, even reaching full Agentic Software. Users also gain a new way to bring revenue to software makers. This helps traditional software makers fit better into the agent era.",
        "So I think Sign in with ChatGPT is a big step. It is also a step for the whole industry and community toward Agentic Software. I expect other foundation-model companies to follow soon.",
        "## Claude Mods: software that extends itself",
        "Claude Code 2.1.287 shipped Mods on October 1 ([mods](https://code.claude.com/docs/en/plugins/mods/overview)). A mod is a small JavaScript or TypeScript plugin. It hooks into events inside Claude Code, such as a tool call, a prompt, or the drawing of the interface. A mod can watch an event, change it, or take it over completely.",
        "The key point: you can ask Claude to add features to Claude Code itself. Examples include a panel that shows uncommitted changes, and “Token Weather”, which shows context window use ([daily.dev](https://daily.dev/posts/no-reason-why-everyone-should-have-an-identical-claude-experience-anthropic-s-mods-let-you-change-rkqrfwux4)). This is exactly the Agentic Software pattern: the app ships with an agent, and users grow the app with that agent. Mods also show the risk. They are not sandboxed. Anthropic warns that a mod “can read your secrets... including an API key”. But one design choice stands out: a mod can restyle most of the interface, but not the permission prompt. The safety boundary always stays out of the agent's reach.",
        "Similar ideas appeared earlier in DeepSeek Harness, such as its “everything is a plugin” idea. DeepSeek Harness clearly gives users more power to change how an app behaves. Anyone can even build their own Agent Application on top of DSH and freely change its low-level behavior. Claude's approach is more limited and stricter. But I think that is actually the better part of Claude's design. From this angle, the two start from completely different design goals. They may look a bit alike in form, but they are different things at heart. Still, both can be seen as forms of Agentic Software. Users change the parts they need, then publish those changes to a central hub through a Mods marketplace or plugin marketplace, which helps everyone.",
        "I think these are all very good attempts. But I believe both Claude and DeepSeek could go one step further in their design. Neither of the current approaches clearly separates the scope that an agent acts on. This scope is not only the actual scope of code changes, but also the scope in the developer's mind. In other words, I think every agent feature today should aim for higher reliability and predictability. A key part of this is that developers and users should know what to expect from the agent's behavior. From this point of view, Claude Mods is better designed than the DSH Plugin, because Claude Mods sets very clear and strict limits on what a mod can touch. But one thing is still missing. From a design view, the act of modifying should itself be isolated. Developers should get a completely different guided experience, so they clearly know whether the current agent will change the software's own behavior. In this setup, the software's main agent should never change the software's own behavior. The software itself is outside the main agent's scope, so users get clear expectations. When a user, acting as a developer, needs to change the behavior, they should explicitly load a separate agent setup. That agent's scope should be limited to the software itself and must not reach anything else.",
        "Some may find this a bit cumbersome. It breaks the design idea that agent software is just ordinary software. But I don't think we need to hold on to that idea. Giving users and developers higher reliability and predictability for agent behavior matters more. So an agent's scope should be separated explicitly.",
        "In practice, there is a very simple solution. Earlier this year, I built a demo for a job talk that shows it. You only need a clearly isolated area in the bottom-right corner (really just a simple developer mode). Only the agent in that bottom-right area can act on the Agent Application itself. This fully isolates the scope of the developer's control over agent behavior, and what the developer expects from it."
      ],
      "figure": {
        "src": "/images/personal-agents-agentic-software/agentic-runtime-demo-en.png",
        "alt": "Screenshot of the demo app Agentic Assistant: a normal chat in the middle, and an Agentic Runtime panel in the bottom-right corner where the user can ask the agent to change the software itself, with suggestions such as adding a terminal, setting the font size, or switching the theme.",
        "width": 3360,
        "height": 2000,
        "caption": "My job-talk demo: normal chat in the middle; only the isolated Agentic Runtime in the bottom-right corner can change the app itself.",
        "source": {
          "href": "https://agenticxyz.ai/writing/agent-applications-next-substrate",
          "label": "Demo of the Agentic Software idea from my earlier essay"
        }
      }
    },
    {
      "heading": "5. A simple recipe for developers",
      "paragraphs": [
        "Put these launches together, and you get a recipe:",
        "1. Pick a domain you know well.\n2. Put the agent inside the app, not next to it.\n3. Use a unified login so users bring their own plan, and inference cost does not hold you back.\n4. Open the app's events as hooks, so users and their agents can extend it.\n5. Keep a permission boundary that the agent cannot rewrite.\n6. Offer clear tools, so future personal agents can work with your app directly."
      ]
    },
    {
      "heading": "Conclusion: build the foundation first",
      "paragraphs": [
        "Dots gives us an early look at the future. One day, most people will have an agent that knows them, works for them, and notices what they miss. But for now, pushing the limits of Agentic AI may matter more, and personal agents can do only so much. They need apps that speak their language, share identity safely, and grow on demand.",
        "That is the work in front of us. Personal agents are the long-term vision. Agentic Software is a step toward it."
      ]
    },
    {
      "heading": "Sources",
      "paragraphs": [
        "- [OpenAI launches dots, always-on ChatGPT agents with their own computers — BetaNews](https://betanews.com/article/openai-dots-agents-chatgpt/)\n- [Everything OpenAI announced at DevDay 2026 — BGR](https://www.bgr.com/2272332/openai-devday-2026-announcements/)\n- [DevDay 2026 announcements and developer resources — OpenAI Developer Community](https://community.openai.com/t/devday-2026-announcements-and-developer-resources/1402006)\n- [OpenAI DevDay 2026 live blog — Simon Willison](https://simonwillison.net/2026/Sep/29/openai-devday-2026-live-blog/)\n- [Sign in with ChatGPT — OpenAI Developers](https://developers.openai.com/siwc)\n- [Using your ChatGPT plan in other apps and sites — OpenAI Help Center](https://help.openai.com/en/articles/20001542-using-your-chatgpt-plan-in-other-apps-and-sites)\n- [AI Agents News: October 2026 agent releases — Orthotropy](https://orthotropy.com/en/insights/ai-agents-news-2026-10)\n- [Personal AI agents are coming to work — Aembit](https://aembit.io/blog/blog-personal-ai-agents-enterprise-security)\n- [Claude Code 2.1.287 adds mods — Mixed](https://mixed-news.com/en/claude-code-2-1-287-mods-not-sandboxed-api-key/)\n- [Anthropic's mods let you change Claude Code's look and behavior — daily.dev](https://daily.dev/posts/no-reason-why-everyone-should-have-an-identical-claude-experience-anthropic-s-mods-let-you-change-rkqrfwux4)\n- [Claude Mods: setup, function hooks and security — Wavect](https://wavect.io/blog/claude-mods-function-hooks/)"
      ]
    }
  ],
  "endNote": "Written and published on October 4, 2026. Product details reflect launch-week coverage of OpenAI DevDay 2026 and Claude Code 2.1.287. The layer diagram was drawn with Claude, and the screenshot comes from my Agentic Runtime demo. The English version was translated from the Chinese original with Claude's help and then reviewed by me.",
  "translations": { "zh": personalAgentsAgenticSoftwareArticleZh }
};
