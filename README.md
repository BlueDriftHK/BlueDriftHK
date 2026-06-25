# 👋 Hi, I'm BlueDriftHK

<div align="center">
  
[![GitHub followers](https://img.shields.io/github/followers/BlueDriftHK?label=Follow&style=social)](https://github.com/BlueDriftHK)
[![GitHub stars](https://img.shields.io/github/stars/BlueDriftHK?label=Total%20Stars&style=social)](https://github.com/BlueDriftHK)
[![GitHub sponsors](https://img.shields.io/github/sponsors/BlueDriftHK?label=Sponsors&style=social)](https://github.com/sponsors/BlueDriftHK)
[![Blog](https://img.shields.io/badge/Blog-blog.bjhr.space-00ff41?style=flat&logo=google-chrome)](https://blog.bjhr.space)

**Cloudflare Workers 生态开发者** · **边缘计算爱好者** · **开源贡献者** · **HLS 流媒体技术实践者**

</div>

---

## 📖 关于我

我专注于利用 **Cloudflare Workers** 边缘网络构建高性能、实用性强的工具和解决方案。我的项目理念是：**让复杂的技术变得简单易用，让强大的功能触手可及**。

- 🔭 目前主要深耕 **Cloudflare Workers** 生态开发
- 🌱 持续探索 **HLS 流媒体**、**网络诊断**、**边缘计算** 领域
- 👯 欢迎开源贡献，一起让项目变得更好
- ⚡ 追求代码简洁、功能完善、用户体验优秀
- 📊 三个项目累计 **~3700 行代码**，**20+ API 端点**
- 🌍 项目已被部署到 **全球 Cloudflare 边缘节点**，服务用户遍布各大洲

---

## 📊 GitHub 统计

<div align="center">
  
<!-- 主统计卡片 -->
![BlueDriftHK's GitHub Stats](https://github-readme-stats.vercel.app/api?username=BlueDriftHK&show_icons=true&theme=default&hide=contribs&count_private=true)

<!-- 编程语言占比 -->
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=BlueDriftHK&layout=compact&theme=default)

---

<!-- 贡献日历热力图 -->
![GitHub Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=BlueDriftHK&theme=default&area=true&hide_border=true)

---

<!-- 核心项目卡片 -->
<div align="center">
  
[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=BlueDriftHK&repo=CF-Worker-M3U8Player&theme=default)](https://github.com/BlueDriftHK/CF-Worker-M3U8Player)
[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=BlueDriftHK&repo=CF-workers-netdiag&theme=default)](https://github.com/BlueDriftHK/CF-workers-netdiag)
[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=BlueDriftHK&repo=CF-workers-homepage&theme=default)](https://github.com/BlueDriftHK/CF-workers-homepage)

</div>

</div>

---

## 🚀 核心项目

| 项目 | 描述 | 技术栈 | 最新版本 | 代码规模 | Stars |
|------|------|--------|----------|----------|-------|
| **[Master M3U8 Terminal Pro](https://github.com/BlueDriftHK/CF-Worker-M3U8Player)** | 专业级 HLS 视频流播放器，支持代理播放、多语言、实时监控、编码检测和 QoS 质量评估，部署在 Cloudflare Workers 边缘节点 | HLS.js, Chart.js, Workers, Web Crypto API | **v2.0.0** | ~1500 行 | ![Stars](https://img.shields.io/github/stars/BlueDriftHK/CF-Worker-M3U8Player?style=flat) |
| **[NetSight Pro](https://github.com/BlueDriftHK/CF-workers-netdiag)** | 强大的边缘网络诊断工具，提供实时延迟监控、带宽/CPU 测试、WebSocket 测试、安全协议检测和地理位置追踪 | WebSocket, Canvas API, Workers, Streams API | **v3.5** | ~1200 行 | ![Stars](https://img.shields.io/github/stars/BlueDriftHK/CF-workers-netdiag?style=flat) |
| **[极简导航 · Cloudflare Worker](https://github.com/BlueDriftHK/CF-workers-homepage)** | 部署在 Workers 上的个人导航页，集成实时时钟、天气、书签管理、待办事项、便签和番茄钟，开箱即用，数据本地存储 | Vanilla JS, Open-Meteo API, localStorage, 毛玻璃效果 | **v2.0** | ~1000 行 | ![Stars](https://img.shields.io/github/stars/BlueDriftHK/CF-workers-homepage?style=flat) |

---

## 🛠️ 技术栈总览

### 通用技术
- ☁️ **Cloudflare Workers** — 边缘计算部署平台
- ⚡ **JavaScript (ES6+)** — 核心开发语言
- 🎨 **HTML5 + CSS3** — 页面结构与样式
- ✨ **毛玻璃效果** — `backdrop-filter` 实现玻璃态质感

### 播放器专项
- 🎬 **HLS.js** — HLS 流媒体播放引擎
- 📊 **Chart.js** — 实时监控数据可视化
- 🔐 **Web Crypto API** — 加密与安全处理

### 诊断工具专项
- 🔗 **WebSocket** — 实时连接测试
- 📈 **Canvas API** — 性能数据可视化
- 🌊 **Streams API** — 流式数据处理

### 导航页专项
- 🌤️ **Open-Meteo API** — 免费天气数据
- 💾 **localStorage** — 数据持久化存储
- 🖼️ **Unsplash API** — 随机壁纸来源

---

## 📋 更新日志速览

### 极简导航 v2.0 — 2026-06-25 🎉
- 🎨 融合 NetSight Pro 设计语言，毛玻璃和极光渐变效果
- ✨ 全新壁纸系统：Bing 每日、Unsplash 随机、自定义上传
- ✨ 新增番茄钟进度条和音效提醒
- ✨ 快捷键支持：`/` 搜索、`Space` 番茄钟、`Ctrl+S` 保存
- 🐛 修复天气显示乱码和 IP 获取跨域问题

### NetSight Pro v3.5 — 2026-06-11
- 🔧 优化限流清理机制，提升运行时效率
- 🔒 增强 WebSocket 心跳稳定性
- 🛡️ 动态 CSP nonce 增强 XSS 防护

### Master M3U8 Terminal Pro v2.0.0 — 2026-05-27
- 🚀 新增 Base64 代理播放路由 `/proxy/`
- 🌍 新增三语支持（简中/繁中/英文）
- 🏆 新增 QoS 五星质量评分算法
- ⌨️ 新增键盘快捷键和编码格式智能识别

---

## 🤝 贡献指南

### 贡献流程

```bash
# 1. Fork 本项目
# 2. 克隆到本地
git clone https://github.com/YOUR_USERNAME/项目名.git

# 3. 创建特性分支
git checkout -b feature/AmazingFeature

# 4. 提交更改
git add .
git commit -m '✨ Add some AmazingFeature'

# 5. 推送并开启 Pull Request
git push origin feature/AmazingFeature
```

### 提交信息格式

| 类型 | 图标 | 说明 | 示例 |
|------|------|------|------|
| feat | ✨ | 新功能 | `feat: add health check endpoint` |
| fix | 🐛 | 修复问题 | `fix: websocket timeout issue` |
| docs | 📝 | 文档更新 | `docs: update API documentation` |
| style | 🎨 | 代码格式 | `style: update card hover effect` |
| refactor | ♻️ | 代码重构 | `refactor: extract common functions` |
| perf | ⚡ | 性能优化 | `perf: optimize concurrent test` |
| security | 🔒 | 安全相关 | `security: add rate limiting` |

---

## 💖 支持与赞助

如果我的项目对你有帮助，欢迎通过以下方式支持我：

- ⭐ 给项目点 Star
- 🐛 提交 Issue 反馈问题
- 🔧 提交 Pull Request 贡献代码
- 📝 分享项目给更多人

[![Sponsor](https://img.shields.io/badge/Sponsor-BlueDriftHK-pink?logo=github-sponsors)](https://github.com/sponsors/BlueDriftHK)

---

## 📄 许可证

所有项目均采用 **GNU General Public License v3.0** 许可证。

| 项目 | 说明 |
|------|------|
| 商业使用 | ✅ 允许 |
| 修改代码 | ✅ 允许 |
| 分发代码 | ✅ 允许 |
| 公开源代码 | ✅ 必须（修改后） |
| 保留版权声明 | ✅ 必须 |

---

## 📞 联系方式

| 渠道 | 链接 |
|------|------|
| **个人博客** | [blog.bjhr.space](https://blog.bjhr.space) |
| **GitHub** | [BlueDriftHK](https://github.com/BlueDriftHK) |
| **M3U8 Player Issues** | [提交问题](https://github.com/BlueDriftHK/CF-Worker-M3U8Player/issues) |
| **NetSight Pro Issues** | [提交问题](https://github.com/BlueDriftHK/CF-workers-netdiag/issues) |
| **极简导航 Issues** | [提交问题](https://github.com/BlueDriftHK/CF-workers-homepage/issues) |

---

## 🙏 致谢

- [Cloudflare Workers](https://workers.cloudflare.com/) — 边缘计算平台
- [HLS.js](https://github.com/video-dev/hls.js) — HLS 播放核心库
- [Chart.js](https://www.chartjs.org/) — 图表渲染
- [Font Awesome](https://fontawesome.com/) — 图标库
- [Open-Meteo](https://open-meteo.com/) — 免费天气 API
- [Unsplash](https://unsplash.com/) — 壁纸图片来源

---

<div align="center">

**⚡ 让边缘计算更强大，让网络工具更易用 ⚡**

*Made with ❤️ by BlueDriftHK*

[![GPL-3.0 License](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare)](https://workers.cloudflare.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

</div>
