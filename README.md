<div align="center">

<img src="https://cdn.jsdelivr.net/gh/BlueDriftHK/assets@main/banner/hello.svg" width="100%" alt="BlueDriftHK" />

<!-- 若无上面的 banner 图，可用下面这行渐变文字标题（GitHub 支持 SVG） -->
<a href="https://github.com/BlueDriftHK">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=2600&pause=1000&center=true&vCenter=true&width=520&lines=%E5%AD%A6%E7%94%9F%E5%BC%80%E5%8F%91%E8%80%85+%C2%B7+BlueDriftHK;Edge+%2F+Serverless+%2F+Cloudflare+Workers;%E7%94%A8%E4%BB%A3%E7%A0%81%E4%BB%B2%E8%A3%81%E8%BF%99%E4%B8%AA%E4%B8%96%E7%95%8C%E7%9A%84%E8%BF%9E%E6%8E%A5" />
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=2600&pause=1000&center=true&vCenter=true&width=520&lines=Student+Developer+%C2%B7+BlueDriftHK;Edge+%2F+Serverless+%2F+Cloudflare+Workers;Measuring+the+world+through+connections" alt="Typing" />
  </picture>
</a>

`学生开发者` · 泡在 Cloudflare 边缘世界里，把延迟一点点抠到物理极限。
> A student tinkerer living in the Cloudflare edge, shaving latency down toward the physical limit.

</div>

---

## 你好，我是 BlueDriftHK 👋 / Hey, I'm BlueDriftHK

一个人描述自己的最好方式，是说他正在为什么着迷。

我是一名学生开发者，痴迷于「网络的另一端到底有多快」这件事。白天上课，晚上把想法一个接一个部署到 Cloudflare Workers 上——从博客、网盘，到网络诊断工具。我偏爱单文件、零成本、跑在全球边缘的小东西：不需要服务器，fork 一下就能用自己的那种。

> The best way to describe yourself is to say what you're obsessed with. I'm a student developer hooked on one question: *how fast can the other side of the network be?* Between classes I ship ideas onto Cloudflare Workers — a blog, a personal cloud drive, network diagnostics. I love small things: single-file, $0 to run, alive at the edge, usable the moment you fork them.

---

## 🌱 我现在在做的事 / What I'm up to

- 深耕 **Cloudflare Workers** 生态：KV · R2 · Durable Objects · Zero Trust
- 用 **NetSight Pro** 认真地「测量」网络，也顺便学习怎么把工程做扎实
- 把每个项目都写成**别人克隆下来 15 分钟就能跑起来**的样子
- 在不定期的技术笔记里，聊边缘计算、Serverless 和网络优化

- Deep in the **Cloudflare Workers** stack (KV · R2 · Durable Objects · Zero Trust)
- Building **NetSight Pro** — measuring networks, and learning to engineer properly along the way
- Obsessed with docs good enough that anyone can *clone → run in 15 min*
- Writing occasional notes on edge computing & serverless networking

---

## 🧰 我常用的工具 / My toolbox

<div align="center">

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Cloudflare_FWorkers-F6821F?style=for-the-badge&logo=cloudflare&logoColor=white)
![](https://img.shields.io/badge/Wrangler-CFD830?style=for-the-badge&logo=cloudflare&logoColor=black)
![](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)
![](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

</div>

<sub>正在啃：Rust → Wasm · 也在学怎么把架构设计得不那么丑陋。
<br/>Currently chewing on: Rust → Wasm, and how to design architectures that don't look ugly.</sub>

---

## ✨ 我做的两个东西 / Two things I built

### 🔭 [NetSight Pro](https://ipcheck.bjhr.space/) · 极光网络诊断

边缘部署的 Aurora 级网络诊断工具——把复杂指标做得干净好看。
RTT / 丢包 / 抖动 · 带宽测速 · TLS & HTTP/3 检测 · JA3/JA4 指纹 · 双栈 IP 情报 · 中英繁三语，$0 跑在全球边缘。

An Aurora-grade, edge-deployed network diagnostics tool — complex metrics made beautifully simple. RTT / loss / jitter, speed tests, TLS & HTTP/3, JA3/JA4 fingerprints, dual-stack IP intel, trilingual, $0 at the edge.

<a href="https://ipcheck.bjhr.space/"><img src="https://img.shields.io/badge/Live_Demo-ipcheck.bjhr.space-22D3EE?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Live demo"/></a>
<a href="https://github.com/BlueDriftHK/CF-workers-netdiag"><img src="https://img.shields.io/badge/Source-NetSight_Pro-6366F1?style=for-the-badge&logo=github&logoColor=white" alt="Source"/></a>

---

### ☁️ [iCloud · CF-KVR2-NetworkCloud](https://icloud.bjhr.space/) · 一个文件，一个 Worker，属于你自己的云

单文件跑在 Cloudflare 上的私人网盘：**R2** 存文件、**KV** 存元数据、**Durable Objects** 做缓存，无出口流量费。
拖拽上传 / 大文件分片 · 分享链接（密码/过期/次数）· WebDAV 挂载本地盘 · 音乐/图片/视频/PDF/Markdown 在线播放预览 · AES-256-GCM 客户端零知识加密 · Apple 风格 UI + 中英双语 + PWA。

A single-file personal cloud on Cloudflare — R2 for bytes, KV for metadata, Durable Objects for caching, zero egress fees. Drag-drop & chunked uploads · shareable links · WebDAV mount · media/PDF/Markdown preview · client-side AES-256-GCM zero-knowledge encryption · Apple-style UI, bilingual, PWA.

<a href="https://icloud.bjhr.space/"><img src="https://img.shields.io/badge/Live_Demo-icloud.bjhr.space-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Live demo"/></a>
<a href="https://github.com/BlueDriftHK/CF-KVR2-NetworkCloud"><img src="https://img.shields.io/badge/Source-NetworkCloud-6366F1?style=for-the-badge&logo=github&logoColor=white" alt="Source"/></a>

<sub>两个都是 AGPL-3.0 开源，欢迎 fork 完一键部署到你的边缘。<br/>Both are AGPL-3.0 open source — fork and deploy to your own edge in minutes.</sub>

---

## 📬 来找我玩 / Say hi

<table align="center">
<tr>
<td align="center" width="25%">
<a href="mailto:asiacomk@gmail.com"><img src="https://img.shields.io/badge/Email-asiacomk%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/></a>
</td>
<td align="center" width="25%">
<a href="https://twitter.com/BlueDriftHK"><img src="https://img.shields.io/badge/X-@BlueDriftHK-000000?style=for-the-badge&logo=x&logoColor=white"/></a>
</td>
<td align="center" width="25%">
<a href="https://t.me/BlueDriftHK"><img src="https://img.shields.io/badge/Telegram-@BlueDriftHK-26A5E4?style=for-the-badge&logo=telegram&logoColor=white"/></a>
</td>
<td align="center" width="25%">
<a href="https://blog.bjhr.space"><img src="https://img.shields.io/badge/Blog-bjhr.space-F38020?style=for-the-badge&logo=ghost&logoColor=white"/></a>
</td>
</tr>
</table>

<div align="center">

<sub>Issues & Discussions 都开着，欢迎来聊网络、聊边缘、或者只是打个招呼。<br/>
Issues & Discussions are open — come talk networking, the edge, or just say hello.</sub>

<br/>

> 在边缘，用代码丈量世界。
> <br/>
> *Measuring the world, from the edge.*

</div>
