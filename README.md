# AgenticXYZ.ai

[AgenticXYZ.ai](https://agenticxyz.ai) is Xinyu Zhang's personal research-notes website about Agentic AI: controlled intelligence, agent-centered knowledge collaboration, and self-improving agent systems.

The site contains three bilingual long-form essays, a dated Moments archive, and the X / Y / Z research coordinate system:

- **X — Crossing:** Agents with People
- **Y — Yours:** Agents for People
- **Z — Zero:** Agents by Agents

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm test
npm run build:static
```

The static website is written to `dist/client`.

## Publishing

For the complete article-to-production workflow, see [成稿接入与上线操作手册](docs/article-publishing.zh-CN.md).

The production website is hosted on Cloudflare Pages. Releases use a deliberate two-step process:

1. review and publish the source in this repository;
2. build locally and upload the verified contents of `dist/client` to the `agenticxyz` Pages project.

```bash
npm run deploy:pages
```

Cloudflare credentials are supplied by the local or CI environment and are never stored in this repository.

## Links

- Website: [agenticxyz.ai](https://agenticxyz.ai)
- X: [@xinyusheazhang](https://x.com/xinyusheazhang)
- Prototype 1: [AgenticXYZ/AgenticXYZ-Prototype-1](https://github.com/AgenticXYZ/AgenticXYZ-Prototype-1)
- KPR paper: [arXiv:2606.26721](https://arxiv.org/abs/2606.26721)
