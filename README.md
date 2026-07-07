<!-- ========== 动态横幅与身份标识 ========== -->
<p align="center">
  <img src="https://github.com/BlueDriftHK.png" width="120" height="120" style="border-radius: 50%; border: 3px solid #F38020; box-shadow: 0 0 15px rgba(243, 128, 32, 0.4);" alt="BlueDriftHK Avatar" />
</p>

<h1 align="center">👋 Hi, I'm <a href="https://github.com/BlueDriftHK" style="color: #F38020; text-decoration: none;">BlueDriftHK</a></h1>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&duration=2800&pause=800&color=F38020&center=true&vCenter=true&width=600&lines=Edge+Computing+Architect;Cloudflare+Workers+Expert;Network+Diagnostics+Builder;Open+Source+Enthusiast;Based+in+HK%2C+Building+Globally" alt="Typing SVG" />
</p>

<!-- 核心数据指标（暗色模式友好） -->
<p align="center">
  <img src="https://komarev.com/ghpvc/?username=BlueDriftHK&label=Profile+Views&color=F38020&style=flat-square" alt="Views" />
  <img src="https://img.shields.io/github/followers/BlueDriftHK?label=Followers&color=5865F2&style=flat-square&logo=github" alt="Followers" />
  <img src="https://img.shields.io/github/stars/BlueDriftHK?label=Total+Stars&color=e3b341&style=flat-square&logo=starship" alt="Stars" />
  <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Fusers%2FBlueDriftHK&query=%24.created_at&label=Since&color=2ea44f&style=flat-square&prefix=🚀+" alt="Member Since" />
</p>

---

## 🧑‍💻 About Me

我是一名专注于 **边缘计算 (Edge Computing)** 的架构师与全栈开发者。我的使命是将复杂的网络诊断能力封装为轻量、开箱即用的 Serverless 工具。

- 🔭 **Current Focus**: 打造 **[CF-workers-netdiag](https://github.com/BlueDriftHK/CF-workers-netdiag)** —— 基于 WebSocket + HLS.js 的全球毫秒级延迟透视仪
- 🌱 **Exploring**: WebAssembly on Edge, QUIC Protocol, WinterCG Standards
- 🎯 **Vision**: 让每位开发者 5 分钟内拥有企业级全球网络监控面板
- ⚡ **Philosophy**: Code as Art, Latency as Justice
- 💬 **Ask me about**: Cloudflare Workers, Real-time Systems, Network Diagnostics

---

## 📐 Design Philosophy

<div align="center">
<table>
<tr>
<td width="33%" align="center" valign="top">
<h3>⚡ Edge-First</h3>
<p><sub>计算贴近数据源<br/>延迟优先于吞吐</sub></p>
</td>
<td width="33%" align="center" valign="top">
<h3>🔒 Zero Trust</h3>
<p><sub>不信任任何网络层<br/>最小权限原则</sub></p>
</td>
<td width="33%" align="center" valign="top">
<h3>🧩 Composable</h3>
<p><sub>小工具优于大平台<br/>模块独立可替换</sub></p>
</td>
</tr>
</table>
</div>

---

## 🎯 Tech Radar

| Domain | ✅ Adopt | 🧪 Trial | 🔍 Assess | ⏸️ Hold |
|:---|:---|:---|:---|:---|
| **Runtime** | CF Workers, Node.js | Bun, Deno | WinterCG | Traditional VMs |
| **Protocol** | WebSocket, HTTP/3 | QUIC, WebTransport | gRPC-Web | Long Polling |
| **Storage** | KV, D1, R2 | Vectorize, Hyperdrive | Turso | Self-hosted DB |
| **Frontend** | Chart.js, HLS.js | D3.js, Observable | WebGL Viz | Heavy Frameworks |
| **Tooling** | Wrangler, Vitest | Biome, Oxc | Terraform CF | Webpack |

---

## 🏗️ Architecture Overview

> `CF-workers-netdiag` 全球边缘节点工作流

<div align="center">

```mermaid
graph LR
    User((🌐 User)) -->|WSS| Worker[⚡ CF Worker]
    
    subgraph Edge Network
        Worker --> N1[🗼 NA]
        Worker --> N2[🗼 EU]
        Worker --> N3[🗼 APAC]
        Worker --> N4[🗼 SA]
    end

    N1 & N2 & N3 & N4 -->|Latency Data| Agg[📊 Aggregator]
    Agg -->|Push| FE[🖥️ Frontend]
    Agg -->|Persist| DB
    
    FE --> Chart[📈 Live Charts]
    FE --> Status[📋 Health Board]
    
    style Worker fill:#F38020,stroke:#fff,color:#000
    style FE fill:#4CAF50,stroke:#fff,color:#000
    style DB fill:#9C27B0,stroke:#fff,color:#fff
```

*💡 Tip: Rotate device for better architecture view on mobile*

</div>

---

## ✨ Feature Matrix

| Module | Capability | Implementation |
|:---|:---|:---|
| 🚀 **Speed Test** | Parallel probe 10+ nodes, <200ms response | CF Workers + Edge Functions |
| 📈 **Live Charts** | ms-level curves, drag-zoom, multi-node compare | Chart.js + WebSocket |
| 🔔 **Smart Alerts** | Custom thresholds, auto-highlight anomalies | Rule Engine (v2.5) |
| 🌍 **Global Reach** | Auto nearest-node, real user path simulation | CF Anycast |
| 🔌 **Open API** | RESTful + GraphQL dual protocol | Hono Router |
| 🧩 **Zero Cost** | No server, pay-per-request, deploy in seconds | Wrangler + Free Tier |

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/BlueDriftHK/CF-workers-netdiag.git && cd CF-workers-netdiag

# Install & Dev
npm install && npx wrangler dev

# Deploy (requires CF account)
npx wrangler login && npx wrangler publish
```

> 💡 After deploy, you get a `*.workers.dev` domain instantly!

### 🔧 Environment Variables

| Variable | Description | Example |
|:---|:---|:---|
| `NODE_LIST` | Speed test nodes (JSON array) | `["node1.example.com"]` |
| `REFRESH_INTERVAL` | Refresh interval (ms) | `1000` |

> ⚠️ **Security**: Never hardcode secrets in `wrangler.toml`! Use `wrangler secret put <KEY>` instead.

See [`.env.example`](https://github.com/BlueDriftHK/CF-workers-netdiag/blob/main/.env.example) for full config.

---

## 🗺️ Roadmap 2026 H2

<div align="center">

```mermaid
gantt
    title CF-workers-netdiag Development Plan
    dateFormat YYYY-MM-DD
    axisFormat %m/%d
    
    section Core
    v2.5 Alert Engine      :active, 2026-07-01, 30d
    v2.6 Multi-tenant      :2026-08-01, 45d
    v3.0 Plugin System     :milestone, 2026-10-01, 0d
    
    section Ecosystem
    CLI Tool               :2026-07-15, 20d
    Grafana Plugin         :2026-08-20, 30d
    CN Docs Site           :2026-09-01, 20d
    
    section Performance
    Wasm Speed Core        :crit, 2026-09-15, 40d
```

</div>

---

## 📊 GitHub Analytics

<p align="center">
  <img height="160em" src="https://github-readme-stats.vercel.app/api?username=BlueDriftHK&show_icons=true&theme=radical&include_all_commits=true&count_private=true&hide_border=true&bg_color=0d1117" alt="Stats" />
  <img height="160em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=BlueDriftHK&layout=compact&theme=radical&langs_count=6&hide_border=true&bg_color=0d1117" alt="Languages" />
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=BlueDriftHK&theme=radical&hide_border=true&background=0d1117&fire=F38020&ring=F38020" alt="Streak" />
</p>

<p align="center">
  <img src="https://ghchart.rshah.org/BlueDriftHK?theme=gruvbox&border_radius=8" alt="Contributions" />
</p>

---

## 📝 Featured Writing

- [WebSocket Retry Strategies at the Edge](https://github.com/BlueDriftHK/CF-workers-netdiag/blob/main/docs/websocket-retry.md) — Jun 2026
- [CF Workers Cold Start: 80ms → 12ms](https://github.com/BlueDriftHK/CF-workers-netdiag/blob/main/docs/cold-start.md) — May 2026
- [HLS.js Adaptive Bitrate for Low Bandwidth](https://github.com/BlueDriftHK/CF-workers-netdiag/blob/main/docs/hls-adaptive.md) — May 2026

> 🔗 More in [Project Wiki](https://github.com/BlueDriftHK/CF-workers-netdiag/wiki)

---

## 💬 Community Pulse

> _"Deployed in 5 mins, faster than our internal tools."_ — @devops-chen, SRE  
> _"Elegant WebSocket retry logic, adopted in our push service."_ — @net-fanatic  
> _"Finally, an out-of-box edge speed tester!"_ — HN Comment

📢 **Using it?** Share your story in [Show & Tell](https://github.com/BlueDriftHK/CF-workers-netdiag/discussions/categories/show-and-tell)!

---

## 🤝 Contributing

1. Fork → Create feature branch (`git checkout -b feature/Amazing`)
2. Commit with convention (`git commit -m '✨ feat: add amazing feature'`)
3. Push & Open PR with description + test results

### Commit Convention

| Type | Icon | Description |
|:---|:---|:---|
| `feat` | ✨ | New feature |
| `fix` | 🐛 | Bug fix |
| `docs` | 📚 | Documentation |
| `perf` | 🚀 | Performance |
| `refactor` | ♻️ | Refactor |
| `test` | ✅ | Tests |

---

## 📫 Connect

<p align="left">
  <a href="mailto:asiacomk@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://x.com/BlueDriftHK"><img src="https://img.shields.io/badge/X-000000?style=flat-square&logo=x&logoColor=white" alt="X" /></a>
  <a href="https://t.me/BlueDriftHK"><img src="https://img.shields.io/badge/Telegram-26A5E4?style=flat-square&logo=telegram&logoColor=white" alt="Telegram" /></a>
  <a href="https://github.com/BlueDriftHK/CF-workers-netdiag/discussions"><img src="https://img.shields.io/badge/Discussions-181717?style=flat-square&logo=github&logoColor=white" alt="Discussions" /></a>
</p>

---

## 💖 Support

- ⭐ Star this repo
- 🐛 Report issues or suggest features
- ☕ [Sponsor on GitHub](https://github.com/sponsors/BlueDriftHK)

Licensed under **GNU GPL v3.0**. Build freely, grow together.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=F38020&height=80&section=footer" alt="Footer" />
</p>

<p align="center">
  <sub>⭐️ If this helps, please star! 😊<br/>🔮 Stay curious, stay innovative.</sub>
</p>
