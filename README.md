👋 Hi, I'm <a href="https://github.com/BlueDriftHK">BlueDriftHK</a></h1>

<!-- 动态打字标语 -->
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=500&color=F38020&center=true&vCenter=true&width=500&lines=Cloudflare+Workers+%E5%BC%80%E5%8F%91%E8%80%85;%E8%BE%B9%E7%BC%98%E8%AE%A1%E7%AE%97%E5%AE%9E%E8%B7%B5%E8%80%85;%E5%BC%80%E6%BA%90%E7%88%B1%E5%A5%BD%E8%80%85;%E7%BD%91%E7%BB%9C%E5%B7%A5%E5%85%B7%E5%88%9B%E5%BB%BA%E8%80%85" alt="Typing SVG" />
</p>

<!-- 访客计数器 -->
<p align="center">
  <img src="https://komarev.com/ghpvc/?username=BlueDriftHK&label=Profile%20Views&color=F38020&style=flat" alt="访客计数器" />
</p>

<!-- 技术标签快速概览 -->
<p align="center">
  <img src="https://img.shields.io/badge/Cloudflare_Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/WebSocket-010101?style=flat-square&logo=socketdotio&logoColor=white" />
  <img src="https://img.shields.io/badge/Wrangler-FF6C37?style=flat-square&logo=cloudflare&logoColor=white" />
</p>

---

## 🧑‍💻 关于我

我是一名专注于**边缘计算**与**网络诊断**技术的开发者，热爱用 Cloudflare Workers 构建轻量、高效、实用的工具。

- 🔭 目前主力项目 —— **[CF-workers-netdiag](https://github.com/BlueDriftHK/CF-workers-netdiag)**：基于 Cloudflare Workers + HLS.js 的实时网络延迟诊断平台。
- 🌱 深入探索 **HLS 流媒体协议**、**WebSocket 实时通信**、**边缘节点测速**。
- 🎯 项目目标：帮助开发者和运维人员快速定位全球网络延迟问题，提供可视化数据和多维度分析。
- 👯 欢迎任何形式的贡献 —— 一起让网络诊断更简单。
- ⚡ 工作之余喜欢研究分布式系统、性能优化，以及尝试各种新奇的边缘服务。

---

## 🚀 项目核心亮点：CF-workers-netdiag

一个轻量级但功能强大的网络延迟诊断工具，部署在 Cloudflare 边缘，无需服务器即可运行。

### ✨ 功能特性
- **实时延迟图表**：使用 Chart.js 绘制动态曲线，直观显示延迟变化。
- **多节点测速**：支持同时向多个 Cloudflare 边缘节点发起测速，对比全球延迟。
- **WebSocket 双向通信**：服务端主动推送最新数据，延迟低于传统轮询。
- **一键部署**：通过 Wrangler CLI 快速部署到自己的 Cloudflare 账户。
- **响应式界面**：适配桌面与移动端，随时随地诊断网络质量。
- **历史数据记录**（即将支持）：保存历史测速结果，分析网络波动趋势。

### 📊 项目数据
- 代码行数：~800 行（持续增长）
- API 端点：8 个核心接口
- 测速节点：覆盖全球 10+ Cloudflare 数据中心
- 响应速度：平均 < 200ms 返回测速结果

---

## 🛠️ 技术栈详解

| 类别 | 技术 | 用途 |
|------|------|------|
| **边缘运行时** | Cloudflare Workers | 无服务器函数，全球部署 |
| **开发语言** | JavaScript (ES6+) | 核心逻辑与前端交互 |
| **可视化** | Chart.js | 渲染实时延迟曲线 |
| **通信协议** | WebSocket | 服务端推送、低延迟双向通信 |
| **构建工具** | Wrangler | 发布与管理 Worker |
| **版本控制** | Git + GitHub | 代码托管与协作 |

---

## 📦 快速开始（本地运行 & 部署）

如果你想在本地运行或自行部署，只需几步：

```bash
# 1. 克隆仓库
git clone https://github.com/BlueDriftHK/CF-workers-netdiag.git
cd CF-workers-netdiag

# 2. 安装依赖（如果需要）
npm install

# 3. 本地开发（使用 Wrangler）
npx wrangler dev

# 4. 部署到 Cloudflare（需先登录）
npx wrangler login
npx wrangler publish
```

> 详细配置请参考项目中的 `wrangler.toml` 和环境变量说明。

---

## 🖼️ 项目预览（示意图）

> 由于 README 无法直接嵌入动态图表，以下为截图占位，你可以在项目仓库中查看实际效果。

```
[ 实时延迟图表区域 ]
- X轴：时间（秒）
- Y轴：延迟（ms）
- 多条曲线表示不同节点
[ 测速控制按钮 ]
[ 节点列表与状态 ]
```

你可以访问在线 Demo：[https://cf-workers-netdiag.example.com](https://cf-workers-netdiag.example.com)（请替换为你的实际部署地址）

---

## 📊 GitHub 统计

<p align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=BlueDriftHK&show_icons=true&theme=radical&include_all_commits=true&count_private=true" />
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=BlueDriftHK&layout=compact&theme=radical&langs_count=6" />
</p>

<!-- 贡献图 -->
<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=BlueDriftHK&theme=github-light&area=true&hide_border=true" />
</p>

---

## 📰 更新日志（近期）

| 日期 | 版本 | 更新内容 |
|------|------|----------|
| 2026-06-01 | v2.4.1 | 修复极端网络下 WebSocket 重连死循环问题 |
| 2026-05-29 | v2.4.0 | 优化断线重连机制，图表内存泄漏修复 |
| 2026-05-20 | v2.3.0 | 新增欧洲节点测速支持，界面微调 |
| 2026-05-10 | v2.2.0 | 增加测速历史记录（本地存储） |
| 2026-04-28 | v2.1.0 | 首个公开版本，基础测速与图表功能 |

完整更新日志请查看 [CHANGELOG.md](https://github.com/BlueDriftHK/CF-workers-netdiag/blob/main/CHANGELOG.md)

---

## 🤝 贡献指南

欢迎任何形式的贡献！无论是报告 Bug、提交功能建议，还是直接发 Pull Request，都非常感谢。

### 流程
1. Fork 本仓库并创建你的分支 (`git checkout -b feature/AmazingFeature`)
2. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
3. 推送到分支 (`git push origin feature/AmazingFeature`)
4. 开启一个 Pull Request，并描述改动内容

### Commit 信息规范

| 类型 | 说明 | 示例 |
|------|------|------|
| `feat` ✨ | 新功能 | `feat: add multi-node latency comparison` |
| `fix` 🐛 | 修复 Bug | `fix: correct chart initial render issue` |
| `docs` 📚 | 文档更新 | `docs: update README with new screenshots` |
| `style` 💄 | 代码格式（不影响逻辑） | `style: indent with 2 spaces` |
| `refactor` ♻️ | 代码重构 | `refactor: extract WebSocket handler` |
| `perf` 🚀 | 性能优化 | `perf: reduce worker cold start time` |
| `test` ✅ | 增加测试 | `test: add unit test for latency calculation` |
| `chore` 🔧 | 构建/工具变动 | `chore: update wrangler.toml` |

### 代码风格
- 使用 ESLint 和 Prettier（项目已配置）
- 保持函数短小，单一职责
- 新功能请附带必要的注释说明

---

## 📫 联系我

如果你有问题、建议，或只是想聊聊技术，欢迎通过以下方式找到我：

<p align="left">
  <a href="mailto:your-email@example.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
  <a href="https://twitter.com/your-twitter"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" /></a>
  <a href="https://t.me/your-telegram"><img src="https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" /></a>
  <a href="https://github.com/BlueDriftHK"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
</p>

> 你也可以直接在项目仓库提交 Issue，我会尽快回复。

---

## 💖 支持与赞助

如果这个项目对你有帮助，欢迎给予支持：

- ⭐ **Star** 仓库 —— 这是对我最大的鼓励
- 🐛 提交 **Issue** 反馈问题或建议
- 💰 通过 [GitHub Sponsors](https://github.com/sponsors/BlueDriftHK) 赞助（可选）

所有代码均采用 **GNU GPL v3.0** 许可证，开源免费。

---

<p align="center">
  <i>⭐️ 如果我的项目对你有帮助，请给个 Star 吧！😊</i>
</p>
