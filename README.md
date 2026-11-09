<div align="center">

# 蓝漂 · BlueDrift

**学生开发者 · 在 Cloudflare 边缘，把想法做成单文件产品**
*Student developer · Building single-file products on the Cloudflare edge*

[![GitHub](https://img.shields.io/badge/GitHub-BlueDriftHK-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/BlueDriftHK)
[![Email](https://img.shields.io/badge/Email-asiacomk%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:asiacomk@gmail.com)
[![Blog](https://img.shields.io/badge/blog.bjhr.online-0A84FF?style=flat-square&logo=safari&logoColor=white)](https://blog.bjhr.online/)

</div>

---

## 👋 关于我 / About

我是一名学生开发者，痴迷「网络的另一端到底有多快」。白天上课，晚上把想法一个接一个部署到 Cloudflare Workers——一个私人网盘、一套网络诊断工具、一个工程日志博客。偏爱单文件、零成本、跑在全球边缘的小东西：不需要服务器，fork 一下就能用自己的那种。

I'm a student developer hooked on one question: *how fast can the other side of the network be?* Between classes I ship ideas onto Cloudflare Workers — a private cloud drive, a network diagnostics toolkit, an engineering blog. I only build small things: single-file, $0 to run, alive at the edge, usable the moment you fork them.

## 🧭 设计偏好 / Principles

- **单文件 / Single file** — 没有 `package.json`、没有构建产物、没有依赖升级；粘贴进 Cloudflare 就能跑。
- **浏览器优先 / Browser-first** — 能在浏览器里算的都留在浏览器，默认零 Worker 出站。
- **免费额度是架构约束 / Free tier as a constraint** — 先算配额，再定功能边界，不把「免费」当宣传语。
- **fail-closed** — 配置缺失、解析失败、拿不准的边界，一律拒绝而不是放行。

## 🚧 现在 / Now

- **NetSight Pro `v5.1.0`** — 26 项网络诊断工具（6 组）、6 种界面语言、60+ 可观测指标；默认零 Worker 出站。
- **PersonalDrive `v5.2.0`** — R2 + KV（+ 可选 Durable Object）的私人网盘，客户端 AES-256-GCM 加密。
- **个人站** — 单文件 HTML、中英双语、可打印简历，5 篇工程日志。
- 正在学 **Rust → Wasm**，以及怎么把架构设计得不那么丑。

- **NetSight Pro `v5.1.0`** — 26 diagnostic tools in 6 groups, 6 UI languages, 60+ metrics; zero Worker egress by default.
- **PersonalDrive `v5.2.0`** — a private cloud drive on R2 + KV (optional Durable Object), client-side AES-256-GCM.
- **Personal site** — one HTML file, bilingual, printable résumé, 5 engineering posts.
- Learning **Rust → Wasm** and how to design architectures that don't look ugly.

## ✨ 做过的两个东西 / Two things I built

> 两个项目都**不自带公开演示实例**——下面的介绍页是静态展示页。克隆仓库、部署到你自己的 Cloudflare 账号即可使用。
> Neither ships a public demo instance — the intro pages are static. Clone the repos and deploy to your own Cloudflare account.

### 🔭 NetSight Pro — 把网络看透

`v5.1.0` · 单文件 Worker · 26 项工具 / 6 组 · 零运行时依赖 · AGPL-3.0

一个文件，26 项网络诊断工具，全部跑在 Cloudflare 边缘。多数测量在浏览器侧完成，Worker 只做轻量数据源与代理，**默认零出站**。

- **实时监控** — RTT / 抖动 / 丢包 / 连接质量，固定采样、分位值、稳定性评分
- **带宽测速** — 快速 / 标准 / 精准三档、多流并发、上传、Bufferbloat
- **DNS 放大镜** — 6 个 DoH 解析器并行对比，校验 DNSSEC `AD` 标记
- **域名体检** — SPF / DMARC / DKIM / DNSSEC / CAA / MTA-STS / BIMI，A–F 评分
- **诊断向导 + 站点监控** — 五步引导；Cron 巡检、证书到期、多渠道 webhook 告警
- **链路信息** — 边缘节点、ASN、出口 IP、HTTP 协议版本；JA3 / JA4 指纹（仅 Enterprise + Bot Management 环境提供）

边界：不做 traceroute / MTU 探测（Workers 与浏览器都不支持 ICMP / TTL），不带账号体系与云端历史。

An edge-deployed network diagnostics toolkit: 26 tools in one Worker file, zero runtime dependencies and zero Worker egress by default. Six UI languages, 60+ observable metrics, 164 regression assertions.

[源码](https://github.com/BlueDriftHK/CF-workers-netdiag) · [项目介绍页](https://netdiag.bjhr.online/)

### ☁️ PersonalDrive — 把整个网盘装进一个文件

`v5.2.0` · 单文件 Worker · 12,719 行 / 769 KB · 零运行时依赖 · AGPL-3.0

R2 存文件、KV 存元数据（唯一真相源）、可选的 Durable Object 加速目录索引——不绑 DO 也能跑，自动回退 KV，功能一致。

- **上传** — 拖拽、>5 MB 自动分片、断点续传、内容哈希秒传
- **分享** — 密码 / 有效期 / 次数上限 / 一次性下载 / 禁下载仅预览 / IP·国家·UA 限制 / 自定义短链
- **安全** — TOTP 二次验证 + 备用码、目录密码锁、审计日志导出 CSV、限时签名直链
- **加密** — 客户端 AES-256-GCM（PBKDF2 100k 派生），密钥不出浏览器，服务端只存 `.enc` 密文
- **访问** — WebDAV 挂载本地盘；只读令牌供脚本调用
- **体验** — 音乐 / 图片 / 视频 / PDF / Office / Markdown 预览，PWA，中英双语，⌘K 命令面板

边界：单管理员模型（不支持多租户）；WebDAV 目录 MOVE / COPY 返回 501；备份快照只含元数据、不含文件本体，重要文件请另存离线副本。

A single-file personal cloud on Cloudflare: R2 for bytes, KV for metadata, optional Durable Objects. Client-side AES-256-GCM encryption, TOTP, WebDAV, chunked uploads, granular share links, PWA.

[源码](https://github.com/BlueDriftHK/CF-KVR2-NetworkCloud) · [项目介绍页](https://icloud.bjhr.online/)

两个都是 **AGPL-3.0** 开源，欢迎 fork 完一键部署到你的边缘。
Both are **AGPL-3.0** open source — fork and deploy to your own edge in minutes.

## 📖 写作 / Writing

工程日志：边缘计算、单文件架构、安全修复与网络诊断的踩坑记录。每篇都有中英双语。

Five posts, each available in Chinese and English — edge computing, single-file architecture, security fixes and network diagnostics.

- PersonalDrive v5.1.2 安全修复复盘：33 处替换背后的 fail-closed
- 自托管网盘 PersonalDrive：把一整套网盘塞进单个 Worker
- NetSight Pro 架构拆解：单 Worker 如何撑起整站网络诊断
- 在 Cloudflare Worker 上做 SSRF 防护：协议白名单与 DNS 解析后校验
- 单文件 Worker 工程的取舍：为什么我坚持把一切塞进一个文件

**→ [blog.bjhr.online](https://blog.bjhr.online/)** · 站点本身也是单文件 HTML，源码就在本仓库。

## 🧰 工具箱 / Toolbox

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F6821F?style=flat-square&logo=cloudflare&logoColor=white)
![Wrangler](https://img.shields.io/badge/Wrangler-CFD830?style=flat-square&logo=cloudflare&logoColor=black)
![Rust](https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white)
![HTML / CSS](https://img.shields.io/badge/HTML_%7C_CSS-E34F26?style=flat-square&logo=html5&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

正在啃：Rust → Wasm，也在学怎么把架构设计得不那么丑陋。
Currently chewing on: Rust → Wasm, and how to design architectures that don't look ugly.

## 📬 来找我玩 / Say hi

- ✉️ **Email** — [asiacomk@gmail.com](mailto:asiacomk@gmail.com)
- 🐙 **GitHub** — [@BlueDriftHK](https://github.com/BlueDriftHK)
- 📝 **Blog** — [blog.bjhr.online](https://blog.bjhr.online/)

Issues 和 Discussions 都开着，欢迎来聊网络、聊边缘，或者只是打个招呼。
Issues and discussions are open — talk networking, the edge, or just say hello.

---

> 在边缘，用代码丈量世界。
> *Measuring the world, from the edge.*
