<!-- ========== 顶部炫酷横幅 ========== -->
<p align="center">
  <img src="https://github.com/BlueDriftHK.png" width="120" height="120" style="border-radius: 50%; border: 3px solid #F38020;" alt="Avatar" />
</p>

<h1 align="center">👋 你好，我是 <a href="https://github.com/BlueDriftHK" style="color: #F38020;">BlueDriftHK</a></h1>

<!-- 炫酷动态打字 -->
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&duration=2800&pause=800&color=F38020&center=true&vCenter=true&width=600&lines=%E2%9A%A1+Edge+Computing+Builder;%F0%9F%9B%B8%EF%B8%8F+Cloudflare+Workers+Expert;%F0%9F%93%8A+Network+Diagnostics+Developer;%F0%9F%94%A5+Open+Source+Enthusiast;%F0%9F%9A%80+Building+the+Future+of+Web" alt="Typing SVG" />
</p>

<!-- 访客计数器 + 粉丝 + 总星标（修复为 badgen.net 稳定版） -->
<p align="center">
  <img src="https://komarev.com/ghpvc/?username=BlueDriftHK&label=🌟+Profile+Views&color=F38020&style=for-the-badge" alt="访客计数器" />
  <img src="https://badgen.net/github/followers/BlueDriftHK?label=👥%20Followers&color=5865F2&icon=github" alt="粉丝数" height="28" />
  <img src="https://badgen.net/github/stars/BlueDriftHK?label=⭐%20Total%20Stars&color=yellow&icon=github" alt="总星标" height="28" />
</p>

<!-- ========== 项目实时状态徽章 ========== -->
<p align="center">
  <a href="https://github.com/BlueDriftHK/CF-workers-netdiag">
    <img src="https://img.shields.io/github/stars/BlueDriftHK/CF-workers-netdiag?style=for-the-badge&logo=github&color=F38020" alt="Stars" />
    <img src="https://img.shields.io/github/forks/BlueDriftHK/CF-workers-netdiag?style=for-the-badge&logo=github&color=orange" alt="Forks" />
    <img src="https://img.shields.io/github/issues/BlueDriftHK/CF-workers-netdiag?style=for-the-badge&logo=github&color=green" alt="Issues" />
    <img src="https://img.shields.io/github/last-commit/BlueDriftHK/CF-workers-netdiag?style=for-the-badge&logo=git&color=purple" alt="Last Commit" />
    <img src="https://img.shields.io/github/license/BlueDriftHK/CF-workers-netdiag?style=for-the-badge&logo=gnu&color=blue" alt="License" />
  </a>
</p>

---

<!-- ========== 关于我 ========== -->
## 🧑‍💻 关于我 · About Me

我是一名 **边缘计算架构师** 与 **全栈工具开发者**，热衷于利用 Cloudflare Workers 将复杂的网络诊断能力封装成开箱即用的轻量级工具。

- 🔭 **当前专注**：全力打磨主力项目 **[CF-workers-netdiag](https://github.com/BlueDriftHK/CF-workers-netdiag)** —— 基于 **WebSocket + HLS.js** 的毫秒级全球网络延迟透视仪。
- 🌱 **技术探索**：深入 HLS 流媒体协议、边缘节点智能路由、实时数据可视化。
- 🎯 **项目愿景**：让每一位开发者都能在 5 分钟内拥有自己的全球网络质量监控面板。
- ⚡ **极客信条**：代码即艺术，性能即正义。
- 💬 **技术话题**：边缘计算、Serverless、实时通信、开源生态。

---

<!-- ========== 我的日常开发环境 ========== -->
## 🛠️ 日常开发环境 · Daily Toolchain

<p align="left">
  <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" />
  <img src="https://img.shields.io/badge/WebStorm-000000?style=for-the-badge&logo=webstorm&logoColor=white" />
  <img src="https://img.shields.io/badge/iTerm2-000000?style=for-the-badge&logo=iterm2&logoColor=white" />
  <img src="https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white" />
  <img src="https://img.shields.io/badge/Wrangler-FF6C37?style=for-the-badge&logo=cloudflare&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
</p>

---

<!-- ========== 项目核心架构图（Mermaid） ========== -->
## 🏗️ 项目核心架构 · Architecture

> 下图展示了 `CF-workers-netdiag` 在全球边缘节点中的工作流。

```mermaid
graph TD
    User((🌐 用户访问)) -->|HTTP/WebSocket| Worker[⚡ Cloudflare Worker 边缘节点]
    
    subgraph Cloudflare 全球边缘网络
        Worker -->|测速指令| Node1[🗼 北美节点]
        Worker -->|测速指令| Node2[🗼 欧洲节点]
        Worker -->|测速指令| Node3[🗼 亚太节点]
        Worker -->|测速指令| Node4[🗼 南美节点]
    end

    Node1 -->|实时延迟数据| Agg[📊 数据聚合层]
    Node2 -->|实时延迟数据| Agg
    Node3 -->|实时延迟数据| Agg
    Node4 -->|实时延迟数据| Agg
    
    Agg -->|WebSocket 推送| Frontend[🖥️ 前端 HLS.js / Chart.js]
    Frontend -->|动态渲染| Chart[📈 多维度延迟折线图]
    Frontend -->|状态展示| Status[📋 节点健康状态看板]
    
    style Worker fill:#F38020,stroke:#333,stroke-width:2px,color:#fff
    style Frontend fill:#4CAF50,stroke:#333,stroke-width:2px,color:#fff
    style Chart fill:#2196F3,stroke:#333,stroke-width:2px,color:#fff
```

---

<!-- ========== 核心功能亮点 ========== -->
## ✨ 功能矩阵 · Features

| 模块 | 核心能力 | 技术实现 |
| :--- | :--- | :--- |
| 🚀 **极速测速** | 并行探测全球 10+ 边缘节点，延迟数据 < 200ms 返回 | Cloudflare Workers + 边缘函数 |
| 📈 **实时图表** | 毫秒级动态曲线，支持拖拽缩放与多节点对比 | Chart.js + WebSocket 全双工 |
| 🔔 **智能告警** | 延迟阈值自定义，异常节点自动高亮提醒 | 内置规则引擎（v2.5 规划中） |
| 🌍 **全球覆盖** | 自动就近选择节点，真实模拟用户访问链路 | Cloudflare Anycast 网络 |
| 🧩 **零成本部署** | 无需购买服务器，部署即用，按调用计费 | Wrangler + Free Tier |

---

<!-- ========== 技术栈 ========== -->
## 🛠️ 技术栈 · Tech Stack

### ☁️ 基础设施与运行时
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

### 🎨 前端与可视化
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![HLS.js](https://img.shields.io/badge/HLS.js-000000?style=for-the-badge&logo=hls&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### 🔧 开发者工具
![Wrangler](https://img.shields.io/badge/Wrangler-FF6C37?style=for-the-badge&logo=cloudflare&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)

---

<!-- ========== 快速开始 ========== -->
## 🚀 一键部署 & 本地运行

想自己搭建一个？只需几步：

```bash
# 1. 克隆项目
git clone https://github.com/BlueDriftHK/CF-workers-netdiag.git
cd CF-workers-netdiag

# 2. 安装依赖
npm install

# 3. 本地开发（热更新）
npx wrangler dev

# 4. 部署到全球边缘（需 Cloudflare 账号）
npx wrangler login
npx wrangler publish
```

> 💡 **提示**：部署后你会获得一个 `*.workers.dev` 域名，即刻拥有自己的全球延迟监控面板！

---

<!-- ========== 环境变量配置 ========== -->
## 🔧 环境变量配置 · Environment Variables

为了正常运行，你需要在 Cloudflare Workers 中设置以下环境变量：

| 变量名 | 说明 | 示例值 |
| :--- | :--- | :--- |
| `NODE_LIST` | 测速节点列表（JSON 数组） | `["node1.example.com", "node2.example.com"]` |
| `REFRESH_INTERVAL` | 数据刷新间隔（毫秒） | `1000` |

详细配置请参考项目中的 [`.env.example`](https://github.com/BlueDriftHK/CF-workers-netdiag/blob/main/.env.example) 文件。

---

<!-- ========== GitHub 数据墙 ========== -->
## 📊 GitHub 数据墙

<p align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=BlueDriftHK&show_icons=true&theme=radical&include_all_commits=true&count_private=true&hide_border=true" />
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=BlueDriftHK&layout=compact&theme=radical&langs_count=6&hide_border=true" />
</p>

<!-- 稳定贡献图（ghchart.rshah.org 在国内访问更好） -->
<p align="center">
  <img src="https://ghchart.rshah.org/BlueDriftHK?theme=gruvbox&border_radius=8" alt="GitHub Contributions Chart" />
</p>

<!-- 3D 贡献图（如果访问慢可以注释掉，保留上面那张） -->
<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=BlueDriftHK&theme=react-dark&area=true&hide_border=true&bg_color=0d1117&color=F38020&line=F38020&point=FFFFFF" alt="GitHub Activity Graph" />
</p>

<!-- GitHub 成就奖杯 -->
<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=BlueDriftHK&theme=radical&no-frame=true&row=2&column=4&margin-w=10&margin-h=10" alt="GitHub Trophies" />
</p>

---

<!-- ========== 我的开源贡献 ========== -->
## 🏆 我的开源贡献 · Open Source Contributions

虽然目前我的主要精力集中在 **[CF-workers-netdiag](https://github.com/BlueDriftHK/CF-workers-netdiag)**，但我也会为其他感兴趣的项目贡献代码和想法。以下是我参与或发起的项目：

| 项目 | 角色 | 状态 |
| :--- | :--- | :--- |
| [CF-workers-netdiag](https://github.com/BlueDriftHK/CF-workers-netdiag) | 作者 / 维护者 | 🔥 活跃开发中 |

未来我计划参与更多边缘计算和网络工具的开源项目，敬请期待！

---

<!-- ========== 最近在学/读 ========== -->
## 📚 最近在学 · Currently Learning

- 📖 **《HTTP/2 in Action》** —— 深入理解下一代网络协议
- 🎥 **Cloudflare Workers 官方教程** —— 边缘计算最佳实践
- 📝 **WebSocket 协议 RFC 6455** —— 夯实实时通信基础

---

<!-- ========== 更新日志速览 ========== -->
## 📰 近期更新 · Changelog

| 日期 | 版本 | 更新亮点 |
| :--- | :--- | :--- |
| 2026-06-01 | **v2.4.1** | 🐛 修复极端弱网下 WebSocket 死循环重连 |
| 2026-05-29 | **v2.4.0** | 🚀 优化断线重连机制，图表内存泄漏全面修复 |
| 2026-05-20 | **v2.3.0** | 🌍 新增欧洲中部节点测速支持，界面毛玻璃效果 |
| 2026-05-10 | **v2.2.0** | 💾 增加测速历史记录（IndexedDB 本地持久化） |
| 2026-04-28 | **v2.1.0** | 🎉 首个公开版本发布，基础测速与双端适配 |

> 📌 完整变更记录请查阅：[CHANGELOG.md](https://github.com/BlueDriftHK/CF-workers-netdiag/blob/main/CHANGELOG.md)

---

<!-- ========== 贡献指南 ========== -->
## 🤝 共建生态 · Contribution

> **“独行快，众行远。”** 欢迎所有形式的贡献！

1. **Fork** 本仓库并创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
2. **提交** 你的改动 (`git commit -m '✨ feat: 增加某炫酷功能'`)
3. **推送** 到远程 (`git push origin feature/AmazingFeature`)
4. 开启一个 **Pull Request**，描述你的改动与测试情况。

### 📝 Commit 规范
为了保持日志清晰，请遵循以下前缀：

| 类型 | 图标 | 说明 |
| :--- | :--- | :--- |
| `feat` | ✨ | 新增功能 |
| `fix` | 🐛 | 修复 Bug |
| `docs` | 📚 | 文档更新 |
| `style` | 💄 | 代码格式调整 |
| `refactor` | ♻️ | 重构（不改变功能） |
| `perf` | 🚀 | 性能优化 |
| `test` | ✅ | 增加测试 |
| `chore` | 🔧 | 构建/工具配置变动 |

---

<!-- ========== 联系与支持 ========== -->
## 📫 连接我 · Connect

<p align="left">
  <a href="mailto:asiacomk@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
  <a href="https://twitter.com/BlueDriftHK"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" /></a>
  <a href="https://t.me/BlueDriftHK"><img src="https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" /></a>
  <a href="https://github.com/BlueDriftHK"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
</p>

> 或者直接在 GitHub Issues 中 @我，秒回！

---

## 💖 支持项目

- ⭐ **Star** 这个仓库 —— 让更多开发者发现它。
- 🐛 提交 **Issue** —— 反馈问题或提出脑洞需求。
- ☕ **赞助** —— 点击 [GitHub Sponsors](https://github.com/sponsors/BlueDriftHK) 支持持续迭代。

所有代码遵循 **GNU GPL v3.0** 开源协议，自由使用，共同进步。

---

<!-- ========== 炫酷页脚 ========== -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=F38020&height=100&section=footer" />
</p>

<p align="center">
  <i>⭐️ 如果我的项目对你有帮助，请给个 Star 吧！😊</i>
  <br />
  <i>🔮 保持好奇，保持创新。</i>
</p>
