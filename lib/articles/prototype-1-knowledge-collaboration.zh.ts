import type { ArticleTranslation } from "../article-types";

export const prototypeKnowledgeArticleZh: ArticleTranslation = {
  language: "zh-CN",
  displayDate: "2026 年 8 月 14 日",
  category: "设计文 02",
  title: "AgenticXYZ Prototype 1：面向人与 Agent 的知识协作层",
  dek: "当 Agent 进入每一个软件环境，真正缺失的不是另一个聊天界面，而是一种受治理的方式，让人和 Agent 能够在真实工作中收集、审查、传递与复用知识。",
  readTime: "约 18 分钟",
  asideLabel: "Prototype 1",
  lead:
    "AgenticXYZ Prototype 1 从一个现实问题出发：有价值的知识产生在所有地方，却散落在人、应用、项目、对话与 Agent 轨迹之中。我们需要一个新的协作层，把这些碎片转化为共享、可归因、可复用的知识，同时不把人的权力交给 Agent。",
  sections: [
    {
      heading: "知识协作：Agent 时代的基础命题",
      paragraphs: [
        "今天的知识协作围绕文档、消息、工单、会议、代码仓库和数据库组织。每一种工具只记录工作的一部分，把它们连接起来的含义却经常留在人脑中。会议中的决定可能失去证据，用户的纠正可能永远到不了产品模型，一次成功的本地解决方案也可能始终不被能够推广它的维护者看见。我们拥有越来越多的信息，却依然缺少一种方式，把真实工作中产生的知识完整地留下来。",
        "Agent 进入工作流之后，情况会发生本质变化。它不只能够读取文档，还可以观察一个目标是怎样被理解的、哪些方法失败了、人做了什么纠正、最终结果为什么成立。知识收集第一次有机会成为执行过程的一部分，而不再是实际工作结束之后额外进行的归档任务。换句话说，Agent 不只是知识的消费者，它也可以成为知识流动的中间节点。",
        "这就是为什么我认为，Agent 时代需要一种新的知识协作模式：以 Agent 为中心，把人与 Agent、Agent 与 Agent、人与人之间的经验流动连接起来。这里的“以 Agent 为中心”不是把 Agent 变成不受质疑的知识所有者。Agent 会推断、压缩，也会犯错甚至产生不存在的内容。系统必须始终知道谁经历了什么、Agent 提取了什么、人纠正了什么、什么证据支持这条 Claim、它适用于哪里，以及谁有权决定是否采纳。",
        "从更大的范围看，Agent 层会逐渐成为一个数字知识中心。过去互联网承担了 Information 的数字化集散，未来 Agent 系统则会把散落在软件、项目和个人活动里的 Knowledge 收集起来，在正确范围内提供给人和其他 Agent。这个中心不是一个吞掉所有内容的巨大数据库，而是一套受治理的流动机制：人和 Agent 可以向它贡献情境知识，也可以在进入新任务时从中获得知识；只有贡献而没有复用，会变成日志，只有复用而没有来源，则会变成传闻。",
        "知识本身也会以不同速度移动。新鲜、私有、范围明确的上下文可以先进入 Memory；能够被检查、修改、测试和回滚的过程知识可以成为 Skills；稳定的公共能力可以进入 Reference Software 与 Verifier；只有在离开原始情境之后仍然能够稳定泛化的模式，才值得考虑进入模型训练。不是每一次有用经验都应该立刻成为公共默认，更不应该直接变成模型权重。真正的知识基础设施，必须让知识可以流动，同时不抹平隐私、来源和适用范围。",
      ],
    },
    {
      heading: "软件载体：面向 Agent 的能力、策略与验证",
      paragraphs: [
        "Agent 不会只生活在一个聊天应用中。它会进入写作工具、浏览器、代码环境、业务系统、研究平台、沟通渠道和各种设备。每一个软件环境都会向 Agent 暴露一部分知识、能力、状态和行动后果。也就是说，将来的 Agent 软件不是某一种独立软件，而会成为所有软件共同依赖的一层基础技术。",
        "传统界面告诉人什么可以点击，Agent-native 软件还必须告诉 Agent：系统里有哪些概念，可以使用哪些行动，每个行动会改变什么，需要什么权限，具有多大风险，又可以通过什么证据验证结果。软件因此不只是 Resource、Logic 和 Interface 的集合，还需要显式的 Policy、Description、Capability 与 Verifier。Agent 不必完全依赖视觉模仿或者没有文档的约定，而可以把每一次行动理解为带有目的、权限、风险和 Proof 的候选状态转换。",
        "这种结构会重新定义软件的边界。用户打开一个应用，发现缺少一个符合自己习惯的小功能，可以先让 Agent 在自己的环境中做出可逆修改；另一个软件的能力，也可以通过 Agent 在授权范围内被组合进来。开发者提供公共的能力、规则和艺术风格，用户侧 Agent 根据个人 Memory 形成具体实现。软件不再只是一件交付之后固定不动的产品，而更像一个可以在不同环境中不断重构、又始终受到 Policy 约束的知识载体。",
        "于是用户不再只是软件的消费者。在获得同意并保留归因后，用户的真实情境、纠正和经过验证的工作流，可以成为软件继续进化的知识贡献。用户不需要成为 Maintainer，也不需要交出全部私有上下文，仍然可以成为软件的共建者。软件开发者也不再只是基座模型和 Agent 公司的消费者。通过让领域 Capability 对 Agent 可读，他们可以成为智能的分销者：把专业环境、规则、Eval 和可复用能力送到每一个需要它的 Agent 手中。",
        "组织形态也会随之改变。更小规模的人类团队可以协调大得多的 Agent 群体，每个人继续拥有目标和判断，Agent 则承担研究、实现、监控、文档和日常运营。它的价值不只是降低人力成本，更重要的是让决定、证据、实现和结果之间的关系可以被持续保留。组织记忆不再只是一些大家希望将来有人搜索的文档，而会成为整个 Human–Agent System 的一部分。当然，现在最大的缺口仍然是可靠性和可预期性：Agent 行动越来越透明，但看得见它做了什么，并不等于可以提前相信它一定做对。",
      ],
    },
    {
      heading: "协作结构：三种关系与受治理的知识循环",
      paragraphs: [
        "Prototype 1 想要连接三种协作关系。第一种是 Person with Agent：用户与 Agent 一起理解问题、调整软件并表达需求。第二种是 Agent with Agent：用户侧 Agent 把经验整理成结构化知识，供维护者侧 Agent 与 Project Agent 使用。第三种是 Person with Person through Agents：Agent 帮助一个人的真实经验，以更准确、可审查的方式到达另一个人，同时两边的人都继续保留自己的判断与责任。",
        "这三种关系最终汇入同一条循环：人的真实需要变成用户侧 Agent 的本地探索；探索先形成可逆 Overlay，让用户在自己的环境中验证；Agent 再把其中可能有公共价值的部分整理为知识提案；用户执行 Human Attestation，确认哪些内容确实代表自己的经验；Maintainer 决定项目应该接受什么知识以及适用范围；Project Agent 根据项目自己的 Contract 重新实现；Verifier 检查结果；最后仍然由人决定是否采纳。",
        "在这条链路中流动的不只是代码，还包括意图、范围、假设、证据、反例、受保护行为、不确定性、来源，以及决定哪些内容应该进入公共项目的判断。代码当然重要，但它位于一次明确知识决定的下游。一个在用户环境里工作正常的 Patch，只能说明“这种行为在这里可以实现”，并不能自动说明它应该成为所有人的公共默认。",
        "这也是 Agent-centered 必须始终 Human-governed 的原因。Agent-centered 是架构原则：软件知识、Capability、状态与 Proof 应该对 Agent 可读。Human-governed 是权力原则：目标、公共产品决定、高风险授权、价值判断与最终责任始终属于人。User-side Agent 不能修改公共项目，Maintainer-side Agent 不能代替 Maintainer 接受知识，Project Agent 不能自行改变产品目标、宣布自己的工作已经验证，或者合并实现。Agent 可以扩大人的能力，但不能静默吸收人的权力。",
        "可靠性在这里主要来自做减法。模型可以提出很多行动，但系统只暴露那些能够定义输入、权限、风险、影响与 Proof 的行动；改变发生在带有 Checkpoint 的隔离 Workspace 中；结构化 Schema 约束提案；预算限制 Run；任务是否完成由 Verifier 而不是 Agent 的自信决定；需要判断或者授权的地方，由 Human Gate 明确停止流程。我们不是假设 Agent 永远不会错，而是让错误能够被发现、隔离、拒绝和回滚。",
      ],
    },
    {
      heading: "知识集成：从 KPR 到项目实现",
      paragraphs: [
        "普通 Issue 通常告诉项目哪里出了问题，普通 Pull Request 则直接提交一种实现。两种表示都很难可靠地区分：用户究竟观察到了什么，Agent 推断了什么，哪些内容已经验证，哪些只是猜测，以及什么内容真的应该被泛化。特别是在 Agent 可以快速生成大量代码之后，先看 Patch 再猜意图，会让维护者承担越来越重的认知负担。",
        "所以 Prototype 1 把 Knowledge-based Pull Request，也就是 KPR，设为首要审查对象。KPR 不是一份更长的 PR 描述，而是一份受到治理的知识包：它包含用户情境、期望行为、验收标准、受保护不变量、结构化 Claim、证据、失败尝试、反例、不确定性、来源，以及作为支持材料的贡献者 Patch。Maintainer 先判断这份知识是否成立、适用于哪里、还缺少什么证据，然后才决定项目要不要改变。",
        "Human Attestation 是其中不可省略的边界。用户必须能够用自己的语言纠正 Agent 的提取结果，并单独签认最终 Claim。Agent-extracted、Human-corrected 与 Human-attested 是三种不同状态。Agent 可以帮助人表达经验，但不能把自己的解释静默转化为一条归属于用户的陈述。同样，隐私信息在离开本地之前必须被识别和阻断，来源与适用范围也必须跟着 Claim 一起移动。",
        "Maintainer 随后对每条 Claim 执行 Accept、Modify、Narrow、Defer、Reject 或 Request Evidence。这些决定形成 Knowledge Integration Contract：项目接受了什么行为、拒绝了什么泛化、保护哪些不变量、允许怎样实现、还存在哪些问题，以及最后必须通过哪些 Verifier。一个用户的“结论优先”偏好，可以被收窄为只适用于 Research Brief 的实验性可选能力，而不是静默变成所有人的新默认。",
        "Project Agent 在 Blind Reconstruction 模式下从 Contract 出发实现，不读取贡献者的私有轨迹，也不把贡献者 Patch 当作项目实现的权威。贡献者 Patch 证明一种行为可能成立，项目实现则必须继续服从自己的架构、Policy 和产品品味。实现完成之后，由独立 Verifier 检查 Contract 是否满足；不满足就继续修改或者回滚，满足之后也仍然需要人的最终采纳。这样做的目标不是让 Agent 写更多代码，而是让一次真实经验能够转化为项目自己的、可验证的改变。",
      ],
      link: {
        href: "https://arxiv.org/abs/2606.26721",
        label: "Knowledge-Based Pull Requests: A Trusted Workflow for Agent-Mediated Knowledge Collaboration",
      },
      figure: {
        src: "/images/kpr-process-overview.png",
        alt: "跨贡献者与项目信任边界，对比 Issue-based、传统 Pull Request 和 Knowledge-based Pull Request 三种流程的示意图。",
        width: 1809,
        height: 936,
        caption: "Knowledge-based Pull Request 的过程。",
        source: {
          href: "https://arxiv.org/abs/2606.26721",
          label: "来源：arXiv:2606.26721",
        },
      },
    },
    {
      heading: "原型验证：Prototype 1 的实现、边界与开源计划",
      paragraphs: [
        "上面描述的内容不再只是一项概念主张。我们已经把 AgenticXYZ Prototype 1 做成了一个可执行、可检查、可讨论的概念原型，让文章中的观点成为人们可以实际运行、质疑与验证的工作流，而不是停留在一张架构图或者一句“未来应该如此”的宣言中。说实话，当完整闭环第一次跑起来的时候，我还是非常开心的，因为这至少说明我们讨论的问题已经可以被做成一个真实系统。",
        "当前参考系统连接了一个真实运行的 Research Brief 应用、可逆本地修改、Human Attestation、Knowledge-based Pull Request、Maintainer 逐条塑造 Claim、Knowledge Integration Contract、Project Agent Blind Reconstruction、独立 Verifier、回滚、确定性的 Recorded Replay，以及可选的 Provider-backed Live Agent 路径。用户可以通过全局或应用内的 XYZ Agent 操作同一套受治理流程，同时每一个 Human Gate 仍然需要人明确执行。",
        "这个原型已经让很多原本抽象的问题变得具体：知识到底以什么对象存在，用户侧和项目侧的边界在哪里，Agent 可以做什么又不能做什么，隐私怎样被阻断，失败以后怎样回滚，Verifier 检查什么，以及最后哪一个决定必须留给人。Prototype 1 当前实现的是 X / Crossing：Agents with People，Human in the Loop。Y 与 Z 是更长期的方向，并且必须继承而不是绕过同样的证据与治理标准。",
        "当然，这并不能证明这套结构已经达到生产就绪，也不能证明它一定优于所有传统软件协作方式。当前可执行参考系统和经过人工审阅的 Recorded Replay，只支持一个有边界的 Prototype Reference。更大的假设——它能否改善知识传递、减少 Maintainer 的认知负担——仍然需要与普通 Issue 和 Pull Request 流程进行对照。第一次 Go / No-go 决定的时间、澄清轮次、实现偏差、Review Time、缺陷、回滚和总成本，都是下一步真正需要测量的东西。",
        "长期目标很大：Agent 进入各种软件环境，收集分散知识，在正确范围内提供知识，并帮助人与其他 Agent 复用它。第一步则有意保持狭窄：先建立一条可信路径，让一次真实经验变成一份受到治理、可以复用的项目知识。如果我们连这条小循环中的意图、来源、隐私、证据和权力边界都保留不好，更大的数字知识中心只会放大噪声与错误；如果这一步能够成立，同一种结构才有机会逐渐扩展到应用、团队和组织。AgenticXYZ Prototype 1 会以开源软件的形式发布，下面就是它的公开仓库地址。",
      ],
      link: {
        href: "https://github.com/zhangshea/AgenticXYZ-Prototype-1",
        label: "github.com/zhangshea/AgenticXYZ-Prototype-1",
      },
    },
  ],
  endNote:
    "Prototype 1 是一个可执行参考系统，也是一项有边界的设计主张。经过审阅的 Replay 仅支持选定路径用于 Prototype Reference，不构成生产就绪声明；更大的知识协作收益仍然需要通过对照实验验证。",
};
