# AgenticXYZ.ai 成稿接入与上线操作手册

核对日期：2026 年 9 月 26 日。依据当前网站源码、仓库 README、已有发布记录及 Cloudflare 官方文档整理。

本文从「文章已经写好」开始，覆盖接入网站、预览、提交源码、部署、线上验收和回滚。文中的示例用于以后发布新文章，本次只编写文档，没有执行生产部署。

## 一、先认准正式工程和发布链路

| 项目 | 当前实际位置或配置 |
| --- | --- |
| 正式网站工程 | `/Users/xyzhang/Documents/AgenticXYZ.ai` |
| GitHub 仓库 | `git@github.com:AgenticXYZ/AgenticXYZ.ai.git` |
| 当前主分支 | `main` |
| 正式域名 | `https://agenticxyz.ai` |
| 文章数据 | `lib/articles/` 中的 TypeScript 文件 |
| 文章总目录 | `lib/content.ts` 的 `articleCatalog` |
| 构建工具 | Vinext，使用 Next 风格的 App Router |
| 静态发布产物 | `dist/client/` |
| 托管项目 | Cloudflare Pages 的 `agenticxyz` |
| 发布方式 | 本地构建后 Direct Upload，可用控制台或 Wrangler |

所有相对路径和命令均以正式网站工程为起点。

当前聊天工作区 `/Users/xyzhang/Documents/ChatGPT/AgenticXYZ` 是 Prototype 工程和稿件工作区。在其中添加 Markdown 不会让官网出现文章。另一个 `/Users/xyzhang/Documents/AgenticXYZ` 目录和历史 ChatGPT Sites 版本也不能替代这里的正式发布工程。

完整链路如下。

```text
已定稿的文章与图片
  → 转成 Article 数据并注册到 articleCatalog
  → 自动生成文章页、Writing 列表及 Moments 归档入口
  → 本地预览、测试与静态构建
  → 提交并推送正式仓库
  → 上传 dist/client 到现有 Cloudflare Pages 项目
  → 验证 agenticxyz.ai 上的实际页面
```

**Git push 和网站上线是两个步骤。** 当前仓库的 README 明确采用源码发布后单独上传静态产物的方式，不能把推送成功视为已上线。

## 二、开始前准备

为本篇文章准备好以下信息。

- 完整正文及使用的图片。
- 唯一的英文短标识 `slug`，例如 `agent-memory-in-practice`。同一文章的中英文使用相同 slug。
- 发布日期、标题、摘要、类别、导语和阅读时长。
- 是否提供中文翻译。当前网站以英文为基础版本，中文位于 `translations.zh`。

如果手上只有中文稿，先明确是否补齐英文。现有标准流程不能直接把中文稿放入基础对象并冒充英文，也没有中文独立文章的目录模式；仅中文发布需要另行调整语言、列表与路由。

检查工程和环境。

```bash
cd /Users/xyzhang/Documents/AgenticXYZ.ai
git status --short --branch
git remote -v
git fetch origin
git log -1 --oneline
node --version
```

Node.js 要求为 22.13.0 或更新版本。首次安装或锁文件变化时运行 `npm ci`。若工作区已有修改，先确认归属，避免把其他未完成内容一起发布。需要更新主分支时，在工作区干净且已位于 main 的前提下运行 `git pull --ff-only origin main`。

当前没有 `draft`、`published` 或定时发布过滤。**只要文章被注册进目录，下一次整站部署就会公开。** 将日期设为未来也不会自动隐藏文章。

## 三、把成稿接入网站

### 1. 新增文章数据文件

推荐参考现有的 `lib/articles/prototype-1-knowledge-collaboration.ts` 及对应 `.zh.ts`。类型定义在 `lib/article-types.ts`。

新建 `lib/articles/agent-memory-in-practice.ts`。下面是结构示例，发布前替换全部示例文字、日期和阅读时长。

```ts
import type { Article } from "../article-types";
import { agentMemoryArticleZh } from "./agent-memory-in-practice.zh";

export const agentMemoryArticle: Article = {
  slug: "agent-memory-in-practice",
  date: "2026-09-26",
  sequence: 4,
  displayDate: "September 26, 2026",
  category: "Research Note",
  title: "Article title",
  dek: "A short description for the article list and page metadata.",
  readTime: "10 min",
  lead: "The opening paragraph.",
  intro: ["Optional introductory paragraph."],
  sections: [
    {
      heading: "First section",
      paragraphs: [
        "First paragraph.",
        "Second paragraph with a [source](https://example.com).",
      ],
    },
  ],
  endNote: "Article notes and acknowledgements.",
  translations: { zh: agentMemoryArticleZh },
};
```

`sequence` 使用当前最大值加一。本次核对最大值为 3，示例因此填 4；以后发布时重新检查。列表先按 `date` 降序排列，同日再按 `sequence` 降序排列，数组插入位置不决定最终顺序。

中文文件 `lib/articles/agent-memory-in-practice.zh.ts` 的结构如下。

```ts
import type { ArticleTranslation } from "../article-types";

export const agentMemoryArticleZh: ArticleTranslation = {
  language: "zh-CN",
  displayDate: "2026 年 9 月 26 日",
  category: "研究笔记",
  title: "文章中文标题",
  dek: "文章中文摘要。",
  readTime: "约 10 分钟",
  lead: "文章导语。",
  sections: [
    {
      heading: "第一节标题",
      paragraphs: ["第一段。", "第二段，附有[来源](https://example.com)。"],
    },
  ],
  endNote: "文章说明。",
};
```

中文对象共享基础文章的 `slug`、`date`，不另设编号。英文单语文章删除中文 import 和 `translations` 字段即可。

### 2. 正文转换时保留实际排版能力

当前没有扫描 Markdown 文件的 CMS，也没有把整个 `.md` 自动导入文章的脚本。需要把成稿整理到上述字段。

| 稿件内容 | 当前接入方式 |
| --- | --- |
| 标题、摘要、导语 | `title`、`dek`、`lead`，按普通文本渲染 |
| 开篇补充段落 | `intro` 字符串数组，支持 Markdown |
| 正文大节 | `sections`，每节的 `heading` 自动进入目录 |
| 段落、列表、引用、代码块、行内链接 | 写入 `paragraphs` 字符串，由 `react-markdown` 渲染 |
| 独立来源或项目链接 | `section.link`，含 `href` 和 `label` |
| 图片 | `section.figure`，见下一步 |
| 表格 | `section.table`，含 `label`、`headers`、`rows` |
| 末尾说明 | `endNote`，按普通文本渲染 |

不要把整篇含 H1 的 Markdown 塞进一个字段。段落中的 `##` 会被页面组件转换为 H3，但侧边目录只取 `sections[].heading`。目录锚点自动生成为 `section-1` 等，调整节次后需要复查深链接。

当前未配置 GFM 表格插件、数学公式插件或 Mermaid 渲染器。Markdown 管道表格使用结构化 `table`；复杂公式和图表需要适配后检查，不能假设复制进来就会正常显示。

### 3. 加入图片

将图片放在 `public/images/`，建议用文章 slug 作为子目录。网页引用从 `/images/` 开始，不包含 `public`，也不能使用电脑上的绝对路径。

```ts
figure: {
  src: "/images/agent-memory-in-practice/workflow.png",
  alt: "描述图片主要信息的文字",
  width: 1600,
  height: 900,
  caption: "图片说明。",
  source: {
    href: "https://example.com/source",
    label: "图片来源",
  },
},
```

尺寸应填写实际像素尺寸，来源替换为真实链接。当前每节最多提供一个结构化 figure 和一个 table，顺序固定为段落、链接、图片、表格。需要多图穿插时，应调整章节组织或扩展组件。

当前文章类型没有 `cover` 字段，文章路由的社交图片配置为 `images: []`。新增图片不会自动成为分享封面；如需要独立分享图，必须单独接入元数据并检查输出。

### 4. 注册文章

在 `lib/content.ts` 增加 import，并把文章对象加入 `articleCatalog`。

```ts
import { agentMemoryArticle } from "./articles/agent-memory-in-practice";

const articleCatalog: Article[] = [
  agentMemoryArticle,
  agentApplicationsArticle,
  industrialRevolutionArticle,
  prototypeKnowledgeArticle,
];
```

不要重复声明现有变量，按当前文件内容增补。正常新增文章不需要创建新的 `page.tsx`。

注册后，现有代码会处理以下入口。

| 入口 | 自动行为 |
| --- | --- |
| `/writing/<slug>` | 构建英文文章页 |
| `/zh/writing/<slug>` | 有 `translations.zh` 时构建中文页 |
| `/writing` | 出现文章卡片和可用语言链接 |
| 首页最新文章 | 使用排序后的 `articles[0]` |
| 首页文章列表 | 显示排序后的前 3 篇 |
| `/moments` | 自动生成 `writing-<slug>` 归档条目 |
| 文章目录和继续阅读 | 从章节及文章列表生成 |
| 页面标题、描述、canonical、语言替代链接 | 由文章路由生成 |

**不要再为同一篇文章手动添加 Moment。** `writingMoments` 已自动生成记录。首页的 Latest moment 使用独立 `moments` 数组，因此不会随文章注册自动变成这篇文章。

### 5. 补充本篇的构建检查

`scripts/prepare-static-pages.mjs` 的 `requiredFiles` 目前逐项列出既有文章。加入本篇实际提供的语言路径。

```js
"writing/agent-memory-in-practice.html",
"zh/writing/agent-memory-in-practice.html",
```

在 `tests/rendered-html.test.mjs` 中补充本篇页面、Writing 入口、Moments 条目与语言切换的验证。现有首页测试把最新文章固定为 `agent-applications-next-substrate`，新文章成为最新后必须更新相关预期；保留旧文章仍然可访问的检查。

## 四、预览与构建

先运行 `npm run dev`，在终端显示的本地地址预览。检查桌面与手机宽度下的正文、目录、表格、图片、中英文切换、引用链接，以及旧文章是否正常。

之后依次运行，任何一步失败都应先修复。

```bash
git diff --check
npm run lint
npm test
npm run build:static
```

`npm test` 自带一次构建并检查生成的 HTML；`build:static` 还会校验静态文件并把 `index.rsc` 复制为隐藏文件 `.rsc`，供首页客户端导航使用。最终发布必须使用 `build:static` 完成后的产物。

需要贴近托管环境检查时，可运行 `npx wrangler pages dev dist/client`，使用它显示的地址检查直接打开文章 URL、刷新和站内跳转。这个命令只做本地预览。

以下文件必须存在且非空。

```text
dist/client/index.html
dist/client/.rsc
dist/client/writing.html
dist/client/writing/<slug>.html
dist/client/zh/writing/<slug>.html      # 有中文时
dist/client/assets/                    # 构建资源
dist/client/images/                    # 使用的图片
dist/client/_headers
dist/client/404.html
```

不要直接修改 `dist/client` 中的正文；下次构建会覆盖它。修正文案应回到文章源文件。

## 五、记录源码版本

检查本次 diff，只提交本篇文章、资源、注册和验证所需的文件。源码应先进入正式仓库，再记录部署对应的完整 commit。

若采用分支审查，在 `codex/` 前缀分支完成修改并合入 main；若本次任务已经授权直接更新 main，则沿用该流程。以下命令示意针对已准备好的 main 提交，文件清单按实际改动填写。

```bash
git diff --stat
git add lib/articles/agent-memory-in-practice.ts \
  lib/articles/agent-memory-in-practice.zh.ts \
  lib/content.ts scripts/prepare-static-pages.mjs \
  tests/rendered-html.test.mjs
# 使用了新图片时，另行 git add 对应的 public/images 子目录。
git commit -m "Publish agent memory article"
git push origin main
git rev-parse HEAD
git status --short --branch
```

如果合并或同步后源码发生变化，应重新验证和构建最终版本。保存旧的生产 deployment ID，作为可能的回滚目标。

## 六、发布到 Cloudflare Pages

两种方式上传的是同一份整站产物。每次选择一种即可；不能只上传新文章 HTML，否则可能遗漏其他页面和资源。[Direct Upload 官方说明](https://developers.cloudflare.com/pages/get-started/direct-upload/)

### 方式 A：控制台上传 ZIP

最近一次可查的生产发布记录采用这种方式。当时 Wrangler 未登录，控制台上传成功；本次未重新验证登录状态。

把 `dist/client` 的内容压缩到 ZIP 根目录，包括隐藏的 `.rsc`。

```bash
cd /Users/xyzhang/Documents/AgenticXYZ.ai
release_dir=$(mktemp -d /tmp/agenticxyz-release.XXXXXX)
release_commit=$(git rev-parse --short HEAD)
release_zip="$release_dir/agenticxyz-$release_commit.zip"
(cd dist/client && zip -qr "$release_zip" .)
unzip -l "$release_zip"
shasum -a 256 "$release_zip"
```

ZIP 内应直接看到 `index.html`、`assets/`、`writing/` 等，不能多包一层 `client/` 或 `dist/`。记录 ZIP 路径和校验值，将发布包留存到自己的归档位置，不能把 `/tmp` 当长期备份。

1. 打开 [Cloudflare 控制台](https://dash.cloudflare.com/)，进入 **Workers & Pages → agenticxyz**。
2. 检查该项目的自定义域名包含 `agenticxyz.ai`，记录当前生产部署。
3. 选择 **Create a new deployment**。可先选择 Preview 上传检查；正式上线时选择 Production。
4. 上传刚生成的 ZIP，等待全部文件上传完成，确认没有失败项。
5. 点击 **Save and Deploy**，等待部署成功，记录 deployment ID 和部署 URL。
6. 按下一节验证正式域名。

沿用现有项目即可，无需重新创建网站或改 DNS。控制台 ZIP 与命令行目录上传均为官方支持的方式。[上传格式与操作说明](https://developers.cloudflare.com/pages/get-started/direct-upload/)

### 方式 B：Wrangler 命令行

先检查登录和项目。未登录时使用 `npx wrangler login` 完成登录，或使用已安全配置的部署凭据。

```bash
npx wrangler whoami
npx wrangler pages project list
npx wrangler pages deployment list --project-name agenticxyz
```

确认账号、项目和生产分支。若生产分支为 `main`，已验证的静态产物可这样上传。

```bash
npx wrangler pages deploy dist/client \
  --project-name agenticxyz \
  --branch main
```

如需预览，在确认它不是生产分支后使用 `--branch article-preview`。Wrangler 上传目录，不接收 ZIP。[Pages 命令参考](https://developers.cloudflare.com/workers/wrangler/commands/pages/)

仓库还提供 `npm run deploy:pages`，它会重新构建再上传，但没有显式指定 `--branch`。使用该快捷命令前务必确认当前分支与生产配置，避免只发布了预览版本却以为正式域名已更新。

## 七、上线后验收

先检查本次 deployment URL，再检查 `agenticxyz.ai`。打开以下路径。

```text
https://agenticxyz.ai/
https://agenticxyz.ai/writing
https://agenticxyz.ai/writing/<slug>
https://agenticxyz.ai/zh/writing/<slug>     # 有中文时
https://agenticxyz.ai/moments#writing-<slug>
```

逐项确认。

- 正式 URL 返回正常页面，标题、日期和本篇独有的一段正文与定稿一致。
- Writing 能找到新文章，语言链接指向正确页面。
- 如果本篇日期最新，首页最新文章已更新；若为补发旧稿，确认日期排序正确即可。
- Moments 中只有一条对应文章记录，日期与文章一致。
- 桌面和手机排版正常；目录、图片、表格及中英文切换可用。
- 直接粘贴文章 URL 打开、刷新页面、从首页点击进入均正常。
- 旧文章仍可访问，返回首页和继续阅读没有断链。
- 网页源代码中的 title、description、canonical 和语言链接符合本篇内容。

**部署状态成功、HTTP 200 和正文更新需要分别确认。** 若部署 URL 是新内容、正式域名仍旧，检查是否误发到 Preview、域名绑定和缓存。若显示的是首页却返回 200，也不能视为文章页面通过。

完成后记录源码 commit、部署 ID、部署时间、正式文章链接和验收结果。网站发布本身不会发送邮件或社交消息，当前工程没有文章通知订阅流程；需要外部推送时，另按用户指定渠道处理。

## 八、发布失败、修正与回滚

| 现象 | 优先检查 |
| --- | --- |
| 本地稿件已保存，官网没有文章 | 是否写进正式工程并注册到 `articleCatalog` |
| 英文页存在，中文 404 | `translations.zh`、中文静态产物与本次上传包 |
| 构建成功但首页测试失败 | 是否仍把旧文章写死为最新文章 |
| GitHub 已更新，官网没更新 | Direct Upload 是否执行、是否为 Production |
| 文章内容像旧版本 | 上传包是否来自最终 commit 的完整构建 |
| 首页跳转异常 | ZIP 中是否包含 `.rsc` 及完整 assets |
| 图片失效 | `/images/` 路径、大小写、文件是否进入发布包 |
| 表格显示成竖线文本 | 改用 `section.table`，或实现所需 Markdown 支持 |

小范围文字错误在文章源文件修正，按同一流程重新构建、部署、验收，保持 slug 稳定。

整站异常时，在 Pages 的 Deployments 中找到之前成功的生产版本，使用菜单 **Rollback to this deployment**。Preview 不能作为生产回滚目标。回滚后重新检查正式域名，并记录已恢复的部署 ID。[Cloudflare 回滚说明](https://developers.cloudflare.com/pages/configuration/rollbacks/)

Cloudflare 回滚不会撤销 Git 提交。随后还应在源码中修复或撤销对应改动，再次验证后发布，避免下次部署重新带入错误。

## 九、执行者的完成清单

- [ ] 在正式网站工程操作，确认仓库、分支和工作区状态。
- [ ] 文章数据、语言版本、图片已接入，slug 唯一。
- [ ] `articleCatalog` 已注册，没有重复手工添加 Moment。
- [ ] 本篇静态文件检查和首页最新文章测试已更新。
- [ ] 本地预览、Lint、测试和 `build:static` 通过。
- [ ] 最终源码已提交并推送，commit 与构建产物对应。
- [ ] 整站产物已上传到现有 `agenticxyz` 的 Production。
- [ ] 正式域名的文章、列表、首页和语言切换已验收。
- [ ] 发布包、commit、deployment ID 和正式 URL 已记录。

## 十、以后可直接使用的发布指令

> 请把【稿件路径】接入并发布到 AgenticXYZ.ai。正式工程为 `/Users/xyzhang/Documents/AgenticXYZ.ai`，按 `docs/article-publishing.zh-CN.md` 执行。文章 slug 为【填写】，发布日期为【填写】，语言版本为【填写】。保留已定稿内容，把正文转换为 Article 数据，加入文章目录并接入图片，检查自动生成的 Writing、首页、Moments 和语言切换。完成测试与静态构建，提交源码，再上传到现有 Cloudflare Pages 的 agenticxyz 生产项目。最后验证正式域名并返回文章 URL、源码 commit 和部署结果；如因登录或权限无法部署，明确报告已完成的阶段。
