# BlueDriftHK

> **学生开发者** · 泡在 Cloudflare 边缘世界里，把延迟一点点抠到物理极限。
>
> A student tinkerer living in the Cloudflare edge, shaving latency down toward the physical limit.

---

## 你好，我是 BlueDriftHK / Hey, I'm BlueDriftHK

我是一名学生开发者，痴迷于「网络的另一端到底有多快」。白天上课，晚上把想法一个接一个部署到 Cloudflare Workers——博客、网盘、网络诊断工具。我偏爱单文件、零成本、跑在全球边缘的小东西：不需要服务器，fork 一下就能用自己的那种。

The best way to describe yourself is to say what you're obsessed with. I'm a student developer hooked on one question: *how fast can the other side of the network be?* Between classes I ship ideas onto Cloudflare Workers — a blog, a personal cloud drive, network diagnostics. I love small things: single-file, $0 to run, alive at the edge, usable the moment you fork them.

---

## 🧰 工具箱 / Toolbox

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Cloudflare_Workers-F6821F?style=for-the-badge&logo=cloudflare&logoColor=white)
![](https://img.shields.io/badge/Wrangler-CFD830?style=for-the-badge&logo=cloudflare&logoColor=black)
![](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)
![](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

正在啃：Rust → Wasm · 也在学怎么把架构设计得不那么丑陋。
Currently chewing on: Rust → Wasm, and how to design architectures that don't look ugly.

---

## ✨ 我做的两个东西 / Two things I built

### 🔭 [NetSight Pro](https://ipcheck.bjhr.space/) · 极光网络诊断

边缘部署的 Aurora 级网络诊断工具——把复杂指标做得干净好看。

| 能力 | 说明 |
|---|---|
| 网络质量 | RTT / 丢包 / 抖动、带宽测速 |
| 协议与指纹 | TLS & HTTP/3 检测、JA3/JA4 指纹 |
| 网络情报 | 双栈 IP 情报、中英繁三语 |
| 成本 | $0 跑在全球边缘 |

An Aurora-grade, edge-deployed network diagnostics tool — complex metrics made beautifully simple: RTT / loss / jitter, speed tests, TLS & HTTP/3, JA3/JA4 fingerprints, dual-stack IP intel, trilingual, $0 at the edge.

### ☁️ [iCloud · CF-KVR2-NetworkCloud](https://icloud.bjhr.space/) · 一个文件，一个 Worker，属于你自己的云

单文件跑在 Cloudflare 上的私人网盘：**R2** 存文件、**KV** 存元数据、**Durable Objects** 做缓存，无出口流量费。

| 能力 | 说明 |
|---|---|
| 上传 | 拖拽上传 / 大文件分片 |
| 分享 | 分享链接（密码 / 过期 / 次数） |
| 访问 | WebDAV 挂载本地盘 |
| 预览 | 音乐 / 图片 / 视频 / PDF / Markdown 在线播放预览 |
| 加密 | AES-256-GCM 客户端零知识加密 |
| 体验 | Apple 风格 UI + 中英双语 + PWA |

A single-file personal cloud on Cloudflare — R2 for bytes, KV for metadata, Durable Objects for caching, zero egress fees: drag-drop & chunked uploads · shareable links · WebDAV mount · media/PDF/Markdown preview · client-side AES-256-GCM zero-knowledge encryption · Apple-style UI, bilingual, PWA.

两个都是 AGPL-3.0 开源，欢迎 fork 完一键部署到你的边缘。
Both are AGPL-3.0 open source — fork and deploy to your own edge in minutes.

---

## 📖 博客 / Blog

技术笔记不定期更新：边缘计算、Serverless 与网络优化。
[https://blog.bjhr.space/](https://blog.bjhr.space/)

Occasional notes on edge computing, serverless networking & network optimization.

---

## 📬 来找我玩 / Say hi

Issues & Discussions 都开着，欢迎来聊网络、聊边缘、或者只是打个招呼。

Issues & Discussions are open — come talk networking, the edge, or just say hello.

---

> 在边缘，用代码丈量世界。
> *Measuring the world, from the edge.*
