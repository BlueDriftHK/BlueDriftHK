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

> 两个项目都**不自带公开演示实例**——上面的链接是项目介绍页；克隆仓库、部署到自己的 Cloudflare 账号即可用。
> Neither project ships a public demo instance — the links above are project homepages. Clone the repo and deploy to your own Cloudflare account.

### 🔭 [NetSight Pro](https://ipcheck.bjhr.space/) · 极光网络诊断

边缘部署的网络诊断工具箱：23 项工具分 6 组，单文件 7,464 行，零依赖、零构建、三语界面（简 / 繁 / EN）。

| 能力 | 说明 |
|---|---|
| 网络质量与延迟（7） | 一键体检、长时质量监控、丢包率、TTFB、WebSocket 延迟、代理/VPN 检测、WebRTC 泄漏 |
| 带宽与吞吐（6） | 带宽测速、多流并发、上传测速、缓冲膨胀、流式传输、并发测试 |
| DNS（3） | DNS 解析、DNS 工具箱、多解析器对比 |
| 安全与合规（2） | 站点体检（含证书到期）、域名安全体检 |
| 可达性与多节点（3） | 流媒体连通性、网络可达性、多节点对比 |
| 监控与系统（2） | 站点监控（可选 Cron 巡检）、CPU 性能 |
| 链路信息 | 边缘节点、ASN、出口 IP、HTTP 协议版本；JA3 / JA4 指纹字段（平台仅在 Enterprise + Bot Management 下提供，其余环境显示 N/A） |
| 数据流向 | 多数工具在浏览器侧完成，**默认零 Worker 出站**；KV 历史为可选绑定 |
| 成本 | $0 跑在全球边缘 |

边界：不做 traceroute / MTU 探测（Workers 与浏览器都不支持 ICMP / TTL），不带账号体系与云端历史。

An edge-deployed network diagnostics toolkit: 23 tools in 6 groups, single file (7,464 lines), zero dependencies, no build step, trilingual UI (Simplified / Traditional Chinese / English). Browser-side measurement by default with zero Worker egress; optional KV for speed history. Shows edge colo, ASN, egress IP and HTTP protocol version, plus JA3/JA4 fields (populated only on Enterprise + Bot Management — otherwise N/A). Not a traceroute or MTU tool; no accounts, no cloud history.

### ☁️ [iCloud · CF-KVR2-NetworkCloud](https://icloud.bjhr.space/) · 一个文件，一个 Worker，属于你自己的云

单文件跑在 Cloudflare 上的私人网盘（13,279 行，零依赖、无构建）：**R2** 存文件、**KV** 存元数据（唯一真相源）、可选的 **Durable Objects** 做目录索引加速——不绑也能跑，自动回退 KV。R2 出站流量免费。

| 能力 | 说明 |
|---|---|
| 存储 | R2 存文件本体；KV 存元数据；可选 DO 加速目录索引（不绑即回退 KV，功能一致） |
| 上传 | 拖拽上传、大文件自动分片（>5 MB 切片）、断点续传、秒传（内容哈希） |
| 分享 | 密码 / 有效期 / 次数上限 / 一次性下载 / 禁下载仅预览 / IP·国家·UA 限制 / 自定义短链 |
| 访问 | WebDAV 挂载本地盘（`/dav/`）；只读令牌供脚本调用（写操作 403） |
| 安全 | TOTP 二次验证 + 备用码、目录密码锁（含根目录）、审计日志可导出 CSV、限时签名直链 |
| 预览 | 音乐（ID3 封面 + LRC 歌词）/ 图片 / 视频（Range 拖动）/ PDF / Office / Markdown |
| 加密 | 客户端 AES-256-GCM（PBKDF2 100k 派生，密钥不出浏览器，服务端只存 `.enc` 密文） |
| 体验 | 中英双语、深浅色主题、PWA（分享即上传）、移动端手势、⌘K 命令面板 |
| 成本 | 按 Cloudflare 免费额度设计（KV 免费 1,000 写/天），无出站流量费 |

边界：单管理员模型（不支持多租户）；WebDAV 目录 MOVE/COPY 返回 501；备份快照只含元数据、不含文件本体，重要文件请另存离线副本。

A single-file personal cloud on Cloudflare (13,279 lines, zero dependencies, no build): **R2** for bytes, **KV** as the single source of truth for metadata, optional **Durable Objects** to accelerate the directory index (KV fallback if unbound — same features). Zero egress fees. Drag-drop & chunked uploads, resumable transfers, instant upload by content hash; share links with password / expiry / hit limit / one-time download / download-disabled / IP·country·UA restrictions / custom short links; WebDAV mount; TOTP 2FA, per-directory password locks, CSV audit log, signed time-limited links; media / PDF / Office / Markdown preview; client-side AES-256-GCM encryption (PBKDF2 100k, key never leaves the browser, server stores only `.enc` ciphertext); bilingual, themable, PWA. Single-admin model — no multi-tenancy; WebDAV directory MOVE/COPY returns 501; backup snapshots are metadata-only, so keep offline copies of what matters.

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
