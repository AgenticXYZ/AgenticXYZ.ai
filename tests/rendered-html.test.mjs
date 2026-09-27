import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("publishes the bilingual substrate essay with sources and archive integration", async () => {
  const slug = "agent-applications-next-substrate";
  for (const prefix of ["/writing/", "/zh/writing/"]) {
    const response = await render(prefix + slug);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.equal((html.match(/<section id="section-\d+" data-article-section/g) || []).length, 5);
    assert.match(html, /href="https:\/\/agenticxyz.ai\/writing\/prototype-1-knowledge-collaboration"/);
    assert.match(html, /Trusted Knowledge Aggregation/);
    assert.match(html, /<h3>/);
    assert.match(html, /<blockquote>/);
    assert.match(html, /href="https:\/\/arxiv.org\/abs\/2606.26721"/);
    assert.doesNotMatch(html, /本文也同时发布|发布后补充地址/);
    assert.match(html, new RegExp('href="/zh/writing/' + slug + '"'));
    assert.match(html, new RegExp('href="/writing/' + slug + '"'));
  }
  const archive = await (await render("/moments")).text();
  assert.match(archive, /id="writing-agent-applications-next-substrate"/);
  const writing = await (await render("/writing")).text();
  assert.match(writing, /Agent Applications as the Next Application Substrate/);
});

test("publishes the bilingual falling-cost-of-intelligence essay with figures, tables, and archive integration", async () => {
  const slug = "falling-cost-of-intelligence";
  for (const [prefix, lang] of [["/writing/", "en"], ["/zh/writing/", "zh"]]) {
    const response = await render(prefix + slug);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.equal((html.match(/<section id="section-\d+" data-article-section/g) || []).length, 11);
    assert.match(html, /src="\/images\/falling-cost-of-intelligence\/epoch-ai-price-decline\.png"/);
    assert.match(html, new RegExp('src="/images/falling-cost-of-intelligence/mimo-rl-pipeline-' + lang + '\\.png"'));
    assert.match(html, new RegExp('src="/images/falling-cost-of-intelligence/knowledge-loop-' + lang + '\\.png"'));
    assert.match(html, /href="https:\/\/github\.com\/XiaomiMiMo\/verl"/);
    assert.match(html, /href="https:\/\/epoch\.ai"/);
    assert.match(html, /<h3>/);
    assert.match(html, /\/advisor fable/);
    assert.match(html, new RegExp('href="/zh/writing/' + slug + '"'));
    assert.match(html, new RegExp('href="/writing/' + slug + '"'));
  }
  const en = await (await render("/writing/" + slug)).text();
  assert.match(en, /The Falling Cost of Intelligence and a New System for Knowledge Collaboration/);
  const zh = await (await render("/zh/writing/" + slug)).text();
  assert.match(zh, /智能的成本下降与全新的知识协作系统/);
  const archive = await (await render("/moments")).text();
  assert.equal((archive.match(/id="writing-falling-cost-of-intelligence"/g) || []).length, 1);
  assert.ok(archive.indexOf('id="writing-falling-cost-of-intelligence"') < archive.indexOf('id="mimo-v2-6"'));
  const writing = await (await render("/writing")).text();
  assert.match(writing, /The Falling Cost of Intelligence and a New System for Knowledge Collaboration/);
  const oldEssay = await render("/writing/agent-applications-next-substrate");
  assert.equal(oldEssay.status, 200);
});

async function render(pathname) {
  const relativePath = pathname === "/" ? "index.html" : `${pathname.slice(1)}.html`;
  let status = 200;
  let html;

  try {
    html = await readFile(new URL(`../dist/client/${relativePath}`, import.meta.url), "utf8");
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
    status = 404;
    html = await readFile(new URL("../dist/client/404.html", import.meta.url), "utf8");
  }

  return {
    status,
    async text() {
      return html;
    },
  };
}

test("renders the AgenticXYZ home page", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>AgenticXYZ — A Coordinate System for Agentic AI<\/title>/i);
  assert.match(html, /AgenticXYZ/);
  assert.match(html, /A coordinate system for Agentic AI/);
  assert.match(html, /PERSONAL RESEARCH NOTES/);
  assert.match(html, /Building agent-based knowledge collaboration and self-improving[\s\S]*?agent systems/);
  assert.doesNotMatch(html, /Hi, I am Xinyu Zhang/);
  assert.match(html, /href="\/writing\/falling-cost-of-intelligence" class="hero-update"/);
  assert.match(html, /Latest update[\s\S]*?The Falling Cost of Intelligence and a New System for Knowledge Collaboration[\s\S]*?September 27, 2026/);
  assert.match(html, /role="table" aria-label="The AgenticXYZ coordinate system"/);
  assert.match(html, /Agents with People/);
  assert.match(html, /Agents for People/);
  assert.match(html, /Agents by Agents/);
  assert.match(html, /Human on the Loop/);
  assert.match(html, /Towards self-improvement agentic AI/);
  assert.match(html, /Evolve[\s\S]*?\^/);
  assert.match(html, /Collaborate<!-- --> <!-- -->\+/);
  assert.doesNotMatch(html, /Collaborate<!-- --> ·/);
  assert.doesNotMatch(html, /People with Agents/);
  assert.match(html, /<span>Fast<\/span><h3>Memory<\/h3>/);
  assert.doesNotMatch(html, /Memory \/ RAG \/ Ledger/);
  assert.match(html, /Human <strong>in<\/strong> the Loop/);
  assert.match(html, /Human <strong>on<\/strong> the Loop/);
  assert.match(html, /Human <strong>beyond<\/strong> the Loop/);
  assert.doesNotMatch(html, /Human beyond the Execution Loop|Human <strong>beyond<\/strong> the Execution Loop/);
  assert.match(html, /Latest from AgenticXYZ/);
  assert.match(html, />About <span>↗<\/span><\/a>/);
  assert.match(html, /<a href="\/">Main<\/a>/);
  assert.match(html, /class="footer-signature">/);
  assert.match(html, /class="footer-wordmark" aria-label="AgenticXYZ\.ai"/);
  assert.match(html, /<span>Agentic<\/span><span class="wordmark-xyz">XYZ<\/span><span class="footer-domain-suffix">\.ai<\/span>/);
  assert.match(html, /<span>by Xinyu Zhang<\/span>/);
  assert.match(html, /<span>© 2026<\/span>/);
  assert.doesNotMatch(html, /Singapore \/ Internet|© 2026 XYZ/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("renders Writing, both new essays, Moments, and About Me", async () => {
  const [writingResponse, manifestoResponse, manifestoZhResponse, prototypeResponse, prototypeZhResponse, removedEssayResponse, removedFieldNoteResponse, removedResearchNoteResponse, momentsResponse, aboutResponse] = await Promise.all([
    render("/writing"),
    render("/writing/agentic-ai-industrial-revolution"),
    render("/zh/writing/agentic-ai-industrial-revolution"),
    render("/writing/prototype-1-knowledge-collaboration"),
    render("/zh/writing/prototype-1-knowledge-collaboration"),
    render("/writing/agentic-ai-is-not-a-chatbox"),
    render("/writing/where-agents-live"),
    render("/writing/knowledge-as-agent-infrastructure"),
    render("/moments"),
    render("/about"),
  ]);
  const [writingHtml, manifestoHtml, manifestoZhHtml, prototypeHtml, prototypeZhHtml, removedEssayHtml, removedFieldNoteHtml, removedResearchNoteHtml, momentsHtml, aboutHtml] = await Promise.all([
    writingResponse.text(),
    manifestoResponse.text(),
    manifestoZhResponse.text(),
    prototypeResponse.text(),
    prototypeZhResponse.text(),
    removedEssayResponse.text(),
    removedFieldNoteResponse.text(),
    removedResearchNoteResponse.text(),
    momentsResponse.text(),
    aboutResponse.text(),
  ]);

  assert.equal(writingResponse.status, 200);
  assert.match(writingHtml, /Ideas and systems for how agents act/);
  assert.match(
    writingHtml,
    /AgenticXYZ: Controlled Intelligence, Superintelligent Organizations, and the Fourth Industrial Revolution/,
  );
  assert.match(writingHtml, /AgenticXYZ Prototype 1: A Knowledge Collaboration Layer/);
  assert.ok(
    writingHtml.indexOf("AgenticXYZ Prototype 1: A Knowledge Collaboration Layer") <
      writingHtml.indexOf("AgenticXYZ: Controlled Intelligence, Superintelligent Organizations, and the Fourth Industrial Revolution"),
  );
  assert.match(writingHtml, /article-index">02<\/div>[\s\S]*?AgenticXYZ Prototype 1/);
  assert.match(writingHtml, /article-index">01<\/div>[\s\S]*?AgenticXYZ: Controlled Intelligence/);
  assert.match(writingHtml, /April 25, 2026/);
  assert.doesNotMatch(writingHtml, /Agentic AI Is Not a Chatbox/);
  assert.doesNotMatch(writingHtml, /From Model to Harness: Where Agents Actually Run/);
  assert.doesNotMatch(writingHtml, /Why Knowledge Becomes a Long-Term Asset for Agents/);
  assert.match(writingHtml, /href="\/zh\/writing\/agentic-ai-industrial-revolution"/);
  assert.match(writingHtml, /href="\/zh\/writing\/prototype-1-knowledge-collaboration"/);
  assert.match(writingHtml, />中文</);
  assert.equal(manifestoResponse.status, 200);
  assert.match(manifestoHtml, /Factor of Production: Controlled Intelligence and the Fourth Industrial Revolution/);
  assert.match(manifestoHtml, /Stages of Transformation: Adder, Multiplier, and Exponent/);
  assert.match(manifestoHtml, /Technical System: Foundation Models, Agent Frameworks, and AI Infra/);
  assert.match(manifestoHtml, /Organizational Redesign: Superintelligent Organizations and the Human Role/);
  assert.match(manifestoHtml, /Research Coordinates: From X Toward Y and Z/);
  assert.match(manifestoHtml, /The AgenticXYZ coordinate system/);
  assert.match(manifestoHtml, /Agents with People/);
  assert.match(manifestoHtml, /Human on the Loop/);
  assert.doesNotMatch(manifestoHtml, /Agents in Every Loop/);
  assert.match(manifestoHtml, /Human beyond the Loop/);
  assert.doesNotMatch(manifestoHtml, /Human beyond the Execution Loop/);
  assert.match(manifestoHtml, /Agentic AI enables controllable intelligence to help people/);
  assert.match(manifestoHtml, /Working on self-improvement agentic AI system/);
  assert.match(manifestoHtml, /<time dateTime="2026-04-25">April 25, 2026<\/time>/);
  assert.match(manifestoHtml, /property="article:published_time" content="2026-04-25"/);
  assert.match(manifestoHtml, /<table class="article-table">/);
  assert.match(manifestoHtml, /aria-label="Switch article language"/);
  assert.match(manifestoHtml, /aria-label="Article sections"/);
  assert.match(manifestoHtml, /href="#section-1"/);
  assert.match(manifestoHtml, /href="#section-5"/);
  assert.doesNotMatch(manifestoHtml, /href="#section-6"/);
  assert.match(manifestoHtml, /href="\/zh\/writing\/agentic-ai-industrial-revolution"/);
  assert.match(
    manifestoHtml,
    /property="og:title" content="AgenticXYZ: Controlled Intelligence, Superintelligent Organizations, and the Fourth Industrial Revolution"/,
  );
  assert.doesNotMatch(manifestoHtml, /property="og:image"/);
  assert.equal(manifestoZhResponse.status, 200);
  assert.match(manifestoZhHtml, /lang="zh-CN"/);
  assert.match(manifestoZhHtml, /AgenticXYZ：可控智力、超级智能组织与第四次智能工业革命/);
  assert.match(manifestoZhHtml, /生产要素：可控智力与第四次智能工业革命/);
  assert.match(manifestoZhHtml, /演进阶段：加法器、乘法器与指数器/);
  assert.match(manifestoZhHtml, /技术体系：基座模型、Agent Framework 与 AI Infra/);
  assert.match(manifestoZhHtml, /组织重构：超级智能组织与人的新位置/);
  assert.match(manifestoZhHtml, /AgenticXYZ 是一个研究人与智能体如何共同进入下一轮智能工业革命的坐标系/);
  assert.match(manifestoZhHtml, /AgenticXYZ 三轴坐标系/);
  assert.match(manifestoZhHtml, /Agents with People/);
  assert.match(manifestoZhHtml, /Human on the Loop/);
  assert.doesNotMatch(manifestoZhHtml, /Agents in Every Loop/);
  assert.match(manifestoZhHtml, /Human beyond the Loop/);
  assert.doesNotMatch(manifestoZhHtml, /Human beyond the Execution Loop/);
  assert.match(manifestoZhHtml, /研究坐标：从 X 走向 Y 与 Z/);
  assert.match(manifestoZhHtml, /Self-Improvement Agentic AI System/);
  assert.match(manifestoZhHtml, /<time dateTime="2026-04-25">2026 年 4 月 25 日<\/time>/);
  assert.match(manifestoZhHtml, /aria-label="切换文章语言"/);
  assert.match(manifestoZhHtml, /aria-label="文章目录"/);
  assert.match(
    manifestoZhHtml,
    /property="og:title" content="AgenticXYZ：可控智力、超级智能组织与第四次智能工业革命"/,
  );
  assert.doesNotMatch(manifestoZhHtml, /property="og:image"/);
  assert.equal(prototypeResponse.status, 200);
  assert.match(prototypeHtml, /Knowledge Collaboration: A Foundational Problem for the Agent Era/);
  assert.match(prototypeHtml, /Software Substrate: Capabilities, Policies, and Verification for Agents/);
  assert.match(prototypeHtml, /Collaboration Structure: Three Relationships and One Governed Knowledge Loop/);
  assert.match(prototypeHtml, /Knowledge Integration: From KPR to Project Implementation/);
  assert.match(prototypeHtml, /Prototype Validation: Implementation, Boundaries, and the Open-Source Plan/);
  assert.match(prototypeHtml, /built AgenticXYZ Prototype 1 as an executable, inspectable, discussable concept prototype/);
  assert.match(prototypeHtml, /will be released as open-source software/);
  assert.match(prototypeHtml, /href="#section-5"/);
  assert.doesNotMatch(prototypeHtml, /href="#section-6"/);
  assert.match(
    prototypeHtml,
    /href="https:\/\/github\.com\/AgenticXYZ\/AgenticXYZ-Prototype-1" target="_blank" rel="noreferrer"/,
  );
  assert.match(
    prototypeHtml,
    /href="https:\/\/arxiv\.org\/abs\/2606\.26721" target="_blank" rel="noreferrer"/,
  );
  assert.match(prototypeHtml, /src="\/images\/kpr-process-overview\.png"/);
  assert.match(prototypeHtml, /Source: arXiv:2606\.26721/);
  assert.match(prototypeHtml, /name="twitter:title" content="AgenticXYZ Prototype 1: A Knowledge Collaboration Layer for People and Agents"/);
  assert.doesNotMatch(prototypeHtml, /name="twitter:image"/);
  assert.equal(prototypeZhResponse.status, 200);
  assert.match(prototypeZhHtml, /AgenticXYZ Prototype 1：面向人与 Agent 的知识协作层/);
  assert.match(prototypeZhHtml, /知识协作：Agent 时代的基础命题/);
  assert.match(prototypeZhHtml, /软件载体：面向 Agent 的能力、策略与验证/);
  assert.match(prototypeZhHtml, /协作结构：三种关系与受治理的知识循环/);
  assert.match(prototypeZhHtml, /知识集成：从 KPR 到项目实现/);
  assert.match(prototypeZhHtml, /原型验证：Prototype 1 的实现、边界与开源计划/);
  assert.match(prototypeZhHtml, /做成了一个可执行、可检查、可讨论的概念原型/);
  assert.match(prototypeZhHtml, /会以开源软件的形式发布/);
  assert.match(prototypeZhHtml, /href="#section-5"/);
  assert.doesNotMatch(prototypeZhHtml, /href="#section-6"/);
  assert.match(
    prototypeZhHtml,
    /href="https:\/\/github\.com\/AgenticXYZ\/AgenticXYZ-Prototype-1" target="_blank" rel="noreferrer"/,
  );
  assert.match(
    prototypeZhHtml,
    /href="https:\/\/arxiv\.org\/abs\/2606\.26721" target="_blank" rel="noreferrer"/,
  );
  assert.match(prototypeZhHtml, /src="\/images\/kpr-process-overview\.png"/);
  assert.match(prototypeZhHtml, /来源：arXiv:2606\.26721/);
  assert.match(prototypeZhHtml, /name="twitter:title" content="AgenticXYZ Prototype 1：面向人与 Agent 的知识协作层"/);
  assert.doesNotMatch(prototypeZhHtml, /name="twitter:image"/);
  for (const [response, html] of [
    [removedEssayResponse, removedEssayHtml],
    [removedFieldNoteResponse, removedFieldNoteHtml],
    [removedResearchNoteResponse, removedResearchNoteHtml],
  ]) {
    assert.equal(response.status, 404);
    assert.match(html, /Coordinate not found/);
    assert.doesNotMatch(html, /Switch article language/);
  }
  assert.equal(momentsResponse.status, 200);
  for (const [id, title, href] of [
    ["mimo-v2-6", "MiMo-V2.6 Released", "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf"],
    ["gpt-6-sol", "GPT-6 Sol Released", "https://developers.openai.com/api/docs/changelog"],
    ["claude-opus-5-5", "Claude Opus 5.5 Released", "https://www.anthropic.com/claude-opus-5-5-system-card"],
  ]) {
    const entry = momentsHtml.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(entry, `${title} appears in Moments`);
    assert.match(entry, /<time dateTime="2026-09-22">September 22<\/time>/);
    assert.ok(entry.includes(`href="${href}" target="_blank" rel="noreferrer"`));
    assert.ok(entry.includes(title));
  }
  assert.ok(momentsHtml.indexOf('id="mimo-v2-6"') < momentsHtml.indexOf('id="gpt-6-sol"'));
  assert.ok(momentsHtml.indexOf('id="gpt-6-sol"') < momentsHtml.indexOf('id="claude-opus-5-5"'));
  assert.ok(momentsHtml.indexOf('id="claude-opus-5-5"') < momentsHtml.indexOf('id="deepseek-v4-1-flash"'));
  assert.match(momentsHtml, /DeepSeek-V4\.1-Flash Released/);
  assert.match(momentsHtml, /GPT-6 Astra Released/);
  assert.match(momentsHtml, /Claude Fable 5\.1 Released/);
  assert.match(momentsHtml, /Opus 5/);
  assert.match(momentsHtml, /GLM-5\.3 Released/);
  assert.match(momentsHtml, /Kimi K3 Released/);
  assert.match(momentsHtml, /GLM-5\.2 Released/);
  assert.doesNotMatch(momentsHtml, /The XYZ Agent framework takes shape/);
  assert.doesNotMatch(momentsHtml, /AgenticXYZ Takes Shape/);
  assert.doesNotMatch(momentsHtml, /Organizing My Agent Harness Notes/);
  assert.doesNotMatch(momentsHtml, /Plotting the First Knowledge Coordinate/);
  assert.match(momentsHtml, /What happened/);
  assert.match(
    momentsHtml,
    /id="deepseek-v4-1-flash"[\s\S]*?<time dateTime="2026-09-10">September 10<\/time>[\s\S]*?href="https:\/\/huggingface\.co\/deepseek-ai\/DeepSeek-V4\.1-Flash\/blob\/main\/DeepSeek_V41_Tech_Report\.pdf" target="_blank" rel="noreferrer"[\s\S]*?DeepSeek-V4\.1-Flash Released/,
  );
  assert.match(
    momentsHtml,
    /id="writing-prototype-1-knowledge-collaboration"[\s\S]*?August 14[\s\S]*?Writing · Design Note 02[\s\S]*?href="\/writing\/prototype-1-knowledge-collaboration"[\s\S]*?AgenticXYZ Prototype 1: A Knowledge Collaboration Layer for People and Agents/,
  );
  assert.match(
    momentsHtml,
    /id="writing-agentic-ai-industrial-revolution"[\s\S]*?April 25[\s\S]*?Writing · Manifesto 01[\s\S]*?href="\/writing\/agentic-ai-industrial-revolution"[\s\S]*?AgenticXYZ: Controlled Intelligence, Superintelligent Organizations, and the Fourth Industrial Revolution/,
  );
  assert.ok(
    momentsHtml.indexOf('id="deepseek-v4-1-flash"') <
      momentsHtml.indexOf('id="writing-agent-applications-next-substrate"'),
  );
  assert.ok(
    momentsHtml.indexOf('id="writing-agent-applications-next-substrate"') <
      momentsHtml.indexOf('id="gpt-6-astra"'),
  );
  assert.ok(
    momentsHtml.indexOf('id="gpt-6-astra"') <
      momentsHtml.indexOf('id="claude-fable-5-1"'),
  );
  assert.ok(
    momentsHtml.indexOf('id="claude-fable-5-1"') <
      momentsHtml.indexOf('id="glm-5-3"'),
  );
  assert.ok(
    momentsHtml.indexOf('id="glm-5-3"') <
      momentsHtml.indexOf('id="opus-5"'),
  );
  assert.ok(
    momentsHtml.indexOf('id="opus-5"') <
      momentsHtml.indexOf('id="kimi-k3"'),
  );
  assert.ok(
    momentsHtml.indexOf('id="kimi-k3"') <
      momentsHtml.indexOf('id="glm-5-2"'),
  );
  assert.ok(
    momentsHtml.indexOf('id="glm-5-2"') <
      momentsHtml.indexOf('id="writing-agentic-ai-industrial-revolution"'),
  );
  assert.match(momentsHtml, /id="gpt-6-astra"[\s\S]*?<time dateTime="2026-09-03">September 3<\/time>/);
  assert.match(momentsHtml, /id="claude-fable-5-1"[\s\S]*?<time dateTime="2026-09-01">September 1<\/time>/);
  assert.match(momentsHtml, /id="glm-5-3"[\s\S]*?<time dateTime="2026-08-14">August 14<\/time>/);
  assert.match(momentsHtml, /id="kimi-k3"[\s\S]*?<time dateTime="2026-07-16">July 16<\/time>/);
  assert.match(momentsHtml, /id="glm-5-2"[\s\S]*?<time dateTime="2026-06-16">June 16<\/time>/);
  assert.match(momentsHtml, /aria-label="Previous month"/);
  assert.match(momentsHtml, /aria-label="Next month"/);
  assert.match(momentsHtml, />Latest<\/button>/);
  assert.equal(aboutResponse.status, 200);
  assert.match(aboutHtml, /About <span>AgenticXYZ\.<\/span>/);
  assert.match(aboutHtml, /A research-notes website about Agentic AI/);
  assert.match(aboutHtml, /managed by Xinyu Zhang/);
  assert.match(aboutHtml, /maintained with OpenAI ChatGPT/);
  assert.match(aboutHtml, /hosted on Cloudflare/);
  assert.match(aboutHtml, /version-controlled in Git/);
  assert.match(aboutHtml, /href="https:\/\/github\.com\/AgenticXYZ\/AgenticXYZ\.ai" target="_blank" rel="noreferrer"/);
  assert.match(aboutHtml, /GitHub[\s\S]*?as the public source home/);
  assert.match(aboutHtml, /I am Xinyu Zhang—a researcher and engineer/);
  assert.match(aboutHtml, /agent-centered knowledge collaboration/);
  assert.match(aboutHtml, /self-improvement agentic AI systems/);
  assert.match(aboutHtml, /href="https:\/\/x\.com\/xinyusheazhang" target="_blank" rel="noreferrer"/);
  assert.match(aboutHtml, /welcome to contact me on/);
  assert.match(aboutHtml, /WeChat Official Account \(Chinese only\):/);
  assert.match(aboutHtml, /自主新生宇宙智能AgenticXYZ/);
  assert.match(aboutHtml, /ID: AgenticXYZAI/);
  assert.match(aboutHtml, /Agents by Agents · Human beyond the Loop/);
  assert.doesNotMatch(aboutHtml, /Human beyond the Execution Loop/);

  assert.doesNotMatch(momentsHtml, /[\u3400-\u9fff]/);
  assert.doesNotMatch(
    aboutHtml.replaceAll("自主新生宇宙智能", ""),
    /[\u3400-\u9fff]/,
  );

  for (const html of [writingHtml, manifestoHtml, manifestoZhHtml, prototypeHtml, prototypeZhHtml, momentsHtml, aboutHtml]) {
    assert.match(html, /class="footer-signature">/);
    assert.match(html, /class="footer-wordmark" aria-label="AgenticXYZ\.ai"/);
    assert.match(html, /<span>Agentic<\/span><span class="wordmark-xyz">XYZ<\/span><span class="footer-domain-suffix">\.ai<\/span>/);
    assert.match(html, /<span>by Xinyu Zhang<\/span>/);
    assert.match(html, /<span>© 2026<\/span>/);
    assert.doesNotMatch(html, /Singapore \/ Internet|© 2026 XYZ/);
  }
});

test("uses one article typeface and two reading sizes", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.framework-table-head,[\s\S]*?grid-template-columns: minmax\(190px, 1\.05fr\)/);
  assert.match(css, /\.framework-row > \.framework-axis \{[\s\S]*?padding-inline: 18px;/);
  assert.match(css, /\.framework-axis small \{[\s\S]*?white-space: nowrap;/);
  assert.match(css, /--article-font: Georgia, "Songti SC", "STSong", serif/);
  assert.match(css, /--article-body-size:/);
  assert.match(css, /--article-title-size:/);
  assert.match(css, /\.essay-header h1 \{[\s\S]*?width: 100%;[\s\S]*?font-size: var\(--article-title-size\);[\s\S]*?font-weight: 400;/);
  assert.match(css, /\.essay-body h2 \{[\s\S]*?font-size: var\(--article-title-size\);[\s\S]*?font-weight: 400;/);
  assert.match(css, /\.essay-body p,[\s\S]*?font-size: var\(--article-body-size\);/);
  assert.match(css, /\.article-table \{[\s\S]*?font-size: var\(--article-body-size\);[\s\S]*?font-weight: 400;/);
  assert.match(css, /\.article-table th,[\s\S]*?font-size: var\(--article-body-size\);[\s\S]*?font-weight: 400;/);
  assert.match(css, /\.article-table td::before \{[\s\S]*?content: attr\(data-label\);/);
});
