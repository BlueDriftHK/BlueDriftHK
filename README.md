# BlueDriftHK · Edge Runtime Engineer

> Cloudflare Workers 生态深耕者。专注于将网络延迟压缩到物理极限。

---

## 🧩 能力栈

**Runtime**  
Cloudflare Workers / Pages · Node.js · Bun

**Language**  
JavaScript (ES2020+) · TypeScript · Rust (Wasm 目标)

**Protocol**  
HTTP/2 · HTTP/3 · QUIC · WebSocket · WSS · gRPC-Web

**Storage & Services**  
KV · D1 · R2 · Workers AI · Cloudflare Zero Trust

**Tooling**  
Wrangler · Vitest · GitHub Actions · Grafana · Prometheus · Docker

**Design**  
Glass‑morphism · Responsive SPA · Canvas 2D · CSS Variables (Dark/Light)

---

## 📦 代表项目

**[NetSight Pro](https://github.com/BlueDriftHK/CF-workers-netdiag)**  
边缘部署的专业级网络诊断工具。15 分钟完成从克隆到生产使用。

**诊断能力**  
实时 RTT 监控（每 2s 采样） · 丢包率 & 抖动分级 · 带宽测速（下载/上传） · CPU 基准测试 · 并发压力测试 · WebSocket 延迟 · 流式吞吐量 · TTFB 分阶段解析

**安全与协议**  
TLS 版本 / 加密套件 / ECH 状态 · HTTP/2 / HTTP/3 检测 · JA3 / JA4 指纹 · Cloudflare Bot 评分

**IP 智能**  
双栈 IP 探测 (IPv4/IPv6) · 地理位置 & 距离计算 · 欺诈评分 (Scamalytics) · 托管/代理/VPN/Tor 识别

**前端交互**  
三语言切换 (EN/简中/繁中) · 深色/浅色主题 · 实时 Canvas 图表 · 一键复制诊断报告 · 多节点对比

**API 端点 (13个)**  
`/health` · `/speedtest` · `/upload-test` · `/cpu-test` · `/dns-proxy` · `/ws-test` · `/http2-test` · `/concurrent-test` · `/stream-test` · `/api/log-speed` · `/api/speed-history` · `/api/usage-stats` · `/api/ip-fraud`

**部署方式**  
Wrangler CLI (~5 min) · Cloudflare Dashboard (~3 min) · 一键 Fork & Deploy (~2 min)

---

## 📊 项目数据

| 指标 | 数值 |
|------|------|
| 版本 | v4.1-security (2026-08) |
| Commits | 180+ |
| API 端点 | 13 (全部支持 CORS) |
| 平均 RTT (边缘→边缘) | ~12 ms |
| 部署成本 | $0 (Cloudflare Free Tier) |
| 月均独立部署实例 | ~1.2k |
| 代码语言占比 | JS/TS 94% · Rust 4% · Shell 2% |

---

## 🗺️ 2026 H2 技术路线

- **v2.5 Alert Engine** – 阈值告警 + Webhook / Telegram 推送（进行中）
- **v2.6 Multi‑tenant** – 多租户隔离（计划）
- **v3.0 Plugin System** – 插件化架构（设计中）
- **Wasm Speed Core** – Rust → Wasm 编译测速核心，预期性能 ×3（研究阶段）
- **AI Anomaly Detection** – 基于 Workers AI 的异常模式识别（研究阶段）

---

## 📬 联系与社区

- **GitHub**：[BlueDriftHK](https://github.com/BlueDriftHK)
- **项目仓库**：[CF-workers-netdiag](https://github.com/BlueDriftHK/CF-workers-netdiag)
- **技术分享**：不定期输出边缘计算、Serverless 网络优化相关内容
- **反馈通道**：GitHub Issues / Discussions 全部开放

> 在边缘，用代码丈量世界。
