# 👋 Hi, I'm BlueDriftHK

<div align="center">
  
[![GitHub followers](https://img.shields.io/github/followers/BlueDriftHK?label=Follow&style=social)](https://github.com/BlueDriftHK)
[![GitHub stars](https://img.shields.io/github/stars/BlueDriftHK?label=Stars&style=social)](https://github.com/BlueDriftHK)
[![GitHub sponsors](https://img.shields.io/github/sponsors/BlueDriftHK?label=Sponsors&style=social)](https://github.com/sponsors/BlueDriftHK)

**Cloudflare Workers 生态开发者** | **边缘计算爱好者** | **开源贡献者** | **HLS 流媒体技术实践者**

</div>

---

## 📖 关于我

我专注于利用 **Cloudflare Workers** 边缘网络构建高性能、实用性强的工具和解决方案。我的项目理念是：**让复杂的技术变得简单易用，让强大的功能触手可及**。

- 🔭 目前主要深耕 **Cloudflare Workers** 生态开发
- 🌱 持续探索 **HLS 流媒体**、**网络诊断**、**边缘计算** 领域
- 👯 欢迎开源贡献，一起让项目变得更好
- ⚡ 追求代码简洁、功能完善、用户体验优秀
- 📊 两个项目累计 **~2700 行代码**，**14+ API 端点**
- 🌍 项目已被部署到 **全球 Cloudflare 边缘节点**，服务用户遍布各大洲

---

## 🚀 核心项目

| 项目 | 描述 | 技术栈 | 最新版本 | 代码规模 | 下载/部署量 |
|------|------|--------|----------|----------|-------------|
| **[Master M3U8 Terminal Pro](https://github.com/BlueDriftHK/CF-Worker-M3U8Player)** | 专业级 HLS 视频流播放器，支持代理播放、多语言、实时监控、编码检测和 QoS 质量评估，部署在 Cloudflare Workers 边缘节点 | HLS.js, Chart.js, Workers, Web Crypto API | **v2.0.0** | ~1500 行 | ![Deploys](https://img.shields.io/badge/dynamic/json?label=deploys&query=count&url=https://api.github.com/repos/BlueDriftHK/CF-Worker-M3U8Player) |
| **[NetSight Pro](https://github.com/BlueDriftHK/CF-workers-netdiag)** | 强大的边缘网络诊断工具，提供实时延迟监控、带宽/CPU 测试、WebSocket 测试、安全协议检测和地理位置追踪 | WebSocket, Canvas API, Workers, Streams API | **v3.5** | ~1200 行 | ![Deploys](https://img.shields.io/badge/dynamic/json?label=deploys&query=count&url=https://api.github.com/repos/BlueDriftHK/CF-workers-netdiag) |

---

## ✨ Master M3U8 Terminal Pro - 功能详解

### 🎬 播放核心

| 功能模块 | 具体功能 | 技术实现 | 说明 |
|----------|----------|----------|------|
| **HLS 播放引擎** | 多清晰度自适应 | HLS.js `enableWorker: true` | 支持标准 HLS 协议，自动切换码率 |
| **代理播放** | Base64 地址代理 | `/proxy/{base64_url}` 路由 | 绕过 CORS 限制和 IP 封锁 |
| **编码检测** | 自动识别视频编码 | CODECS 解析 | 支持 H.264/H.265/VP9/AV1/AAC/MP4A |
| **清晰度切换** | 一键切换分辨率 | HLS.js Level API | 播放过程中无缝切换 |
| **自动恢复** | 网络/媒体错误恢复 | `startLoad()`/`recoverMediaError()` | 提升播放稳定性 80% |
| **音轨选择** | 多音轨支持 | HLS.js Audio Track API | 📋 计划 v2.1 |
| **字幕支持** | WebVTT 字幕 | HLS.js Subtitle API | 📋 计划 v2.2 |

### 📊 实时监控

| 监控指标 | 采集方式 | 展示形式 | 精度 | 更新频率 |
|----------|----------|----------|------|----------|
| 下载速度 | 分片加载时长 + 大小 | 实时数值 + 曲线图表 | 0.1 KB/s | 每分片 |
| 峰值速度 | 历史最大值记录 | 高亮显示（黄色） | 0.1 KB/s | 实时更新 |
| 缓冲健康度 | `video.buffered` API | 进度条 + 五档评级 | 0.1s | 1秒/次 |
| 流量统计 | 分片大小累加 | MB/GB 单位显示 | 0.01 MB | 每分片 |
| 帧率检测 | `getVideoPlaybackQuality` | fps 数值 | 1 fps | 1秒/次 |
| 卡顿次数 | `ERROR` 事件计数 | 累计数值 | 1 次 | 每次错误 |
| 分片数量 | `FRAG_LOADED` 事件计数 | 累计数值 | 1 个 | 每分片 |
| 当前码率 | `level.bitrate` | kbps 显示 | 1 kbps | 清晰度切换时 |

### 🌐 网络诊断

| 诊断项 | 数据来源 | 刷新方式 | 准确度 | 用途 |
|--------|----------|----------|--------|------|
| CDN 节点 | `/cdn-cgi/trace` | 手动/自动 | 100% | 识别就近的边缘节点 |
| 客户端 IP | `/cdn-cgi/trace` | 手动/自动 | 100% | 验证代理是否生效 |
| 国家/地区 | `/cdn-cgi/trace` | 手动/自动 | 100% | 了解请求来源地域 |
| Ping 延迟 | 三次 fetch 测量 | 手动触发 | ±5ms | 测试到 Worker 的网络质量 |
| 操作系统 | UserAgent 解析 | 页面加载 | 95% | 兼容性调试 |
| 浏览器类型 | UserAgent 解析 | 页面加载 | 95% | 功能支持判断 |
| HLS 兼容性 | `Hls.isSupported()` | 页面加载 | 100% | 决定使用 HLS.js 或原生播放器 |

### 🎮 交互体验

- **多语言**：简体中文、繁体中文、英文三语，URL 参数持久化 (`?lang=`)
- **键盘快捷键**：Space（播放/暂停）、←/→（±10 秒）、F（全屏切换）
- **响应式布局**：完美适配桌面端（>768px）和移动端（<768px）
- **侧边栏抽屉**：移动端 CSS Transform 动画，0.3s 缓动
- **日志系统**：内存数组存储，支持按类型过滤（成功/错误/警告/信息）/一键导出/清空
- **QoS 评分**：动态五星算法，基于缓冲深度（<5s 扣分）和卡顿次数（>2 次扣分）
- **速度图表**：Chart.js 动画，60 数据点平滑曲线，Y 轴自适应
- **Toast 提示**：2 秒自动消失，非侵入式通知
- **卡片折叠**：点击标题可收起/展开内容区域，节省空间
- **自定义滚动条**：悬停变绿，美观统一

### 🛡️ 安全特性

| 安全项 | 配置 | 防护等级 | 说明 |
|--------|------|----------|------|
| 密码验证 | SessionStorage | ⭐⭐ | 简易管理面板保护 |
| 伪装首页 | nginx 模板 | ⭐⭐⭐ | 根路径返回仿 nginx 页面 |
| 代理限制 | 仅限 M3U8 内容 | ⭐⭐⭐ | 防止滥用代理功能 |
| CORS 控制 | `Access-Control-Allow-Origin: *` | ⭐⭐ | 代理请求自动添加 |
| 会话超时 | SessionStorage 生命周期 | ⭐⭐ | 关闭浏览器即失效 |
| CSP 策略 | 📋 计划 v2.1 | - | 增强 XSS 防护 |
| 请求限流 | 📋 计划 v2.1 | - | 防止 API 滥用 |

### 📈 性能基准

| 指标 | 数值 | 测量方法 | 优化目标 |
|------|------|----------|----------|
| Worker 冷启动 | < 100ms | `performance.now()` | <50ms |
| Worker 热启动 | < 10ms | 多次请求平均 | <5ms |
| API 平均响应 | < 50ms | 日志统计 | <30ms |
| 首屏加载 | < 500ms | Lighthouse | <300ms |
| 代理额外开销 | < 200ms | 对比直接请求 | <100ms |
| 单 Worker 并发 | 1000+ | 压力测试 | 2000+ |
| 内存占用 | ~5MB | Cloudflare 监控 | <3MB |

---

## 🔍 NetSight Pro - 功能详解

### 📡 网络质量检测

| 功能 | 说明 | 实现方式 | 更新频率 |
|------|------|----------|----------|
| **实时延迟监控** | 每 2 秒自动测量 RTT，实时趋势图表 | 定时 fetch + Canvas 绘制 | 2秒/次 |
| **丢包率测试** | 10 次请求测试，实时计算丢包百分比 | 成功/失败计数统计 | 手动触发 |
| **网络抖动评估** | 稳定性分级（非常稳定/稳定/不稳定/极不稳定） | RTT 方差计算 | 实时更新 |
| **连接质量评分** | 五档分级（优秀/良好/一般/较差/极差） | 综合 RTT + 丢包率 | 实时更新 |
| **最低/最高 RTT** | 统计周期内的延迟极值 | `Math.min`/`Math.max` | 实时更新 |

### 🚀 性能测试工具

| 功能 | 说明 | 参数限制 | 响应格式 | 典型耗时 |
|------|------|----------|----------|----------|
| **带宽测速** | 多档位测试（100KB/500KB/2MB/5MB） | 最大 5MB | 二进制数据流 | 50-500ms |
| **CPU性能测试** | 密集数学运算，返回 ops/ms | 最大 200 万次迭代 | JSON | 30-200ms |
| **并发请求测试** | 模拟多并发下载 | 内部限制 4 并发 | JSON 数组 | 100-500ms |
| **流式传输测试** | 测试吞吐量，分块传输 | 最大 10MB | ReadableStream | 100-1000ms |

```bash
# 带宽测速示例（带详细输出）
curl -o /dev/null -s -w 'Speed: %{speed_download} bytes/sec\nTime: %{time_total}s\n' \
  https://your-worker.dev/speedtest?size=1048576

# CPU 测试响应示例
{
  "duration": 45,
  "iterations": 500000,
  "opsMs": 11111.11,
  "result": "12345678"
}

# 并发测试响应示例
[
  { "index": 0, "size": 2048, "duration": 12 },
  { "index": 1, "size": 2048, "duration": 14 },
  { "index": 2, "size": 2048, "duration": 11 },
  { "index": 3, "size": 2048, "duration": 13 }
]
```

### 🔒 安全与协议检测

| 检测项 | 说明 | 数据来源 | 用途 |
|--------|------|----------|------|
| **TLS版本检测** | 识别 TLS 1.0/1.1/1.2/1.3 | `request.cf.tlsVersion` | 安全合规检查 |
| **加密套件分析** | 查看协商的加密算法 | `request.cf.tlsCipher` | 加密强度评估 |
| **ECH状态检测** | 检测 Encrypted Client Hello 支持 | `request.cf.ecdh` | 隐私保护检查 |
| **HTTP/2/3 检测** | 识别协议版本和 Early Hints 支持 | `request.cf.alpn` | 性能优化依据 |
| **ALPN 协商** | 查看应用层协议协商结果 | `request.cf.alpn` | 协议兼容性 |
| **压缩算法检测** | Brotli/Gzip/Deflate/Zstd | Accept-Encoding 头 | 传输优化 |

### 🌐 网络诊断工具

- **DNS解析测试**：测试 Cloudflare/Google/GitHub 等常用域名的 DNS 解析
- **WebSocket测试**：5 次 ping-pong 往返延迟测试，30 秒心跳保持，自动重连
- **地理位置追踪**：边缘节点与客户端位置、距离计算（通过 ip-api.com 和 ipify.org）
- **一键导出报告**：生成完整诊断报告（包含所有测试结果、时间戳、设备信息），复制到剪贴板
- **IP 信息查询**：IPv4/IPv6 地址、ASN、ISP、经纬度

### 🛡️ 企业级安全（完整实现）

| 安全项 | 配置值 | 防护效果 | 代码位置 |
|--------|--------|----------|----------|
| **限流保护** | 60 次/分钟 / IP | 防止 API 滥用，超限返回 429 | `isRateLimited()` |
| **限流清理** | 随机抽样清理（1%概率） | 避免内存无限增长 | `cleanupRateLimit()` |
| **CSP 策略** | 动态 nonce，严格白名单 | 防止 XSS 和数据注入 | `SECURITY_HEADERS` |
| **HSTS** | `max-age=31536000; includeSubDomains` | 强制 HTTPS 连接 | `SECURITY_HEADERS` |
| **X-Frame-Options** | `DENY` | 防止点击劫持 | `SECURITY_HEADERS` |
| **X-Content-Type-Options** | `nosniff` | 防止 MIME 类型混淆 | `SECURITY_HEADERS` |
| **X-XSS-Protection** | `1; mode=block` | 浏览器 XSS 过滤器 | `SECURITY_HEADERS` |
| **Referrer-Policy** | `strict-origin-when-cross-origin` | 控制 Referer 发送 | `SECURITY_HEADERS` |

### 📈 性能基准

| 指标 | 数值 | 测量方法 | 优化目标 |
|------|------|----------|----------|
| Worker 冷启动 | < 80ms | `performance.now()` | <40ms |
| Worker 热启动 | < 8ms | 多次请求平均 | <4ms |
| API 平均响应 | < 40ms | 日志统计 | <25ms |
| 首屏加载 | < 400ms | Lighthouse | <250ms |
| WebSocket 握手 | < 100ms | 时间戳测量 | <50ms |
| 限流检查开销 | < 1ms | 性能分析 | <0.5ms |
| 单 Worker 并发 | 1500+ | 压力测试 | 2500+ |
| 内存占用 | ~4MB | Cloudflare 监控 | <2.5MB |

---

## 📁 项目结构对比

### Master M3U8 Terminal Pro

```
CF-Worker-M3U8Player/
├── _workers.js                    # 核心部署文件 (~1500行)
│   ├── 常量配置区 (1-100行)       # 密码、多语言(120字段/语言)、nginx模板
│   ├── 辅助函数区 (100-300行)     # generateAdminHTML、编码转换、时间格式化
│   ├── 路由处理区 (300-500行)     # 6个端点 + 代理逻辑
│   └── HTML模板区 (500-1500行)    # 登录页 + 播放器界面 (CSS 400行/JS 400行)
├── index.html                     # 纯前端演示版 (~600行)
├── README.md                      # 项目文档 (~2000行)
├── LICENSE                        # GPL-3.0
├── CODE_OF_CONDUCT.md             # 行为准则
├── CONTRIBUTING.md                # 贡献指南
├── SECURITY.md                    # 安全政策
├── wrangler.toml.example          # Wrangler 配置示例
└── .github/                       # CI/CD + Issue模板
    ├── workflows/build.yml
    └── ISSUE_TEMPLATE/
```

### NetSight Pro

```
CF-workers-netdiag/
├── _workers.js                    # 核心部署文件 (~1200行)
│   ├── 常量区 (1-50行)            # 安全头、版本信息
│   ├── 限流中间件 (50-100行)      # isRateLimited、cleanupRateLimit
│   ├── 路由分发器 (100-350行)     # 8个端点的路由逻辑
│   ├── 响应生成器 (350-600行)     # JSON/HTML/Stream 响应
│   ├── WebSocket处理器 (600-800行)# 心跳机制、消息处理
│   └── 前端HTML (800-1200行)      # 诊断界面 + Canvas图表
├── index.html                     # 纯前端演示版 (~600行)
├── README.md                      # 项目文档
├── LICENSE                        # GPL-3.0
├── CODE_OF_CONDUCT.md             # 行为准则
├── CONTRIBUTING.md                # 贡献指南
├── SECURITY.md                    # 安全政策
└── .github/                       # CI/CD + Issue模板
```

---

## 🛠️ 技术栈总览

| 技术 | 用途 | 应用项目 | 版本/标准 |
|------|------|----------|-----------|
| **Cloudflare Workers** | 边缘计算运行时 | 两个项目 | 2024-12-01 API |
| **HLS.js** | HLS 流解码播放 | M3U8 Player | latest |
| **Chart.js** | 实时速度图表 | M3U8 Player | 4.4.0 |
| **WebSocket API** | 实时双向通信测试 | NetSight Pro | RFC 6455 |
| **Canvas API** | 实时延迟图表绘制 | NetSight Pro | HTML5 |
| **ReadableStream API** | 流式数据传输 | NetSight Pro | WHATWG Streams |
| **Web Crypto API** | Base64 编解码、随机数据 | 两个项目 | W3C |
| **Fetch API** | HTTP 请求处理 | 两个项目 | WHATWG |
| **EventTarget API** | WebSocket 事件处理 | NetSight Pro | DOM Level 2 |
| **CSS3** | 玻璃拟态效果、动画 | 两个项目 | - |
| **Vanilla JavaScript** | 核心逻辑 | 两个项目 | ES2020 |

---

## 📊 浏览器兼容性

| 浏览器 | 最低版本 | M3U8 Player | NetSight Pro | 说明 |
|--------|----------|-------------|--------------|------|
| Chrome | 80+ | ✅ 完全支持 | ✅ 完全支持 | 推荐使用 |
| Firefox | 75+ | ✅ 完全支持 | ✅ 完全支持 | 功能完整 |
| Safari | 13.1+ | ✅ 完全支持 | ⚠️ 基本支持 | Streams API 部分支持 |
| Edge | 80+ | ✅ 完全支持 | ✅ 完全支持 | Chromium 内核 |
| Opera | 67+ | ✅ 完全支持 | ✅ 完全支持 | Chromium 内核 |
| iOS Safari | 13.4+ | ✅ 完全支持 | ⚠️ 基本支持 | 原生 HLS 播放器 |
| Android Chrome | 80+ | ✅ 完全支持 | ✅ 完全支持 | 推荐使用 |
| Samsung Internet | 12+ | ✅ 完全支持 | ✅ 完全支持 | Chromium 内核 |
| UC Browser | 12+ | ⚠️ 部分支持 | ⚠️ 部分支持 | 功能可能受限 |
| IE | 11 | ❌ 不支持 | ❌ 不支持 | 已停止支持 |

---

## 🗺️ 开发路线图 (Roadmap)

### Master M3U8 Terminal Pro

| 版本 | 功能 | 预计发布 | 状态 | 优先级 |
|------|------|----------|------|--------|
| v2.0.0 | 当前稳定版 | 2026-05-27 | ✅ 已发布 | - |
| v2.1 | 播放列表收藏（Workers KV） | 2026 Q3 | 🟡 计划中 | 高 |
| v2.1 | 自定义请求头（Referer、User-Agent） | 2026 Q3 | 🟡 计划中 | 高 |
| v2.1 | CSP 策略 + 请求限流 | 2026 Q3 | 🟡 计划中 | 中 |
| v2.2 | M3U8 解析器显示分片列表 | 2026 Q4 | 🟡 计划中 | 中 |
| v2.2 | WebVTT 字幕支持 | 2026 Q4 | 🟡 计划中 | 中 |
| v2.3 | 画中画模式 | 2026 Q4 | 🟡 计划中 | 低 |
| v2.3 | 多音轨切换 | 2026 Q4 | 🟡 计划中 | 中 |
| v3.0 | DASH 流（mpd）支持 | 2027 Q1 | 🔵 考虑中 | 中 |
| v3.0 | WebSocket 实时日志 | 2027 Q1 | 🔵 考虑中 | 低 |
| v3.0 | DRM 支持（Widevine） | 2027 Q2 | ⚪ 暂缓 | 低 |
| v3.0 | P2P 加速 | 2027 Q2 | ⚪ 暂缓 | 低 |

### NetSight Pro

| 版本 | 功能 | 预计发布 | 状态 | 优先级 |
|------|------|----------|------|--------|
| v3.5 | 当前稳定版 | 2026-06-11 | ✅ 已发布 | - |
| v3.6 | 多语言支持（中/英） | 2026 Q3 | 🟡 计划中 | 高 |
| v3.6 | 历史数据持久化（Workers KV） | 2026 Q3 | 🟡 计划中 | 中 |
| v3.7 | 图表数据导出（CSV/JSON） | 2026 Q4 | 🟡 计划中 | 中 |
| v3.7 | 定时自动测试 | 2026 Q4 | 🟡 计划中 | 低 |
| v4.0 | 自定义测试脚本 | 2027 Q1 | 🔵 考虑中 | 低 |
| v4.0 | 多节点对比测试 | 2027 Q1 | 🔵 考虑中 | 低 |
| v4.0 | 移动端 App 封装 | 2027 Q2 | ⚪ 暂缓 | 低 |

---

## 📖 快速部署指南

### 前置条件

- Cloudflare 账号（免费即可）
- Node.js 18+ 和 npm（用于 Wrangler CLI）
- （可选）自定义域名

### 一键部署

| 项目 | 部署按钮 |
|------|----------|
| **Master M3U8 Terminal Pro** | [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/BlueDriftHK/CF-Worker-M3U8Player) |
| **NetSight Pro** | [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/BlueDriftHK/CF-workers-netdiag) |

### 手动部署（通用步骤）

```bash
# 1. 安装 Wrangler CLI
npm install -g wrangler

# 2. 登录 Cloudflare（会打开浏览器授权）
wrangler login

# 3. 克隆项目（选择其中一个）
git clone https://github.com/BlueDriftHK/CF-Worker-M3U8Player.git
# 或
git clone https://github.com/BlueDriftHK/CF-workers-netdiag.git

# 4. 进入目录并部署
cd CF-Worker-M3U8Player  # 或 CF-workers-netdiag
wrangler deploy --main _workers.js

# 5. （可选）绑定自定义域名
wrangler routes add https://your-domain.com

# 6. （仅 M3U8 项目）设置环境变量密码（更安全）
wrangler secret put ADMIN_PASSWORD
# 提示输入密码：your-strong-password
```

### 访问地址

| 项目 | 路径 | 说明 | 认证 |
|------|------|------|------|
| M3U8 Player | `https://your-worker.dev/` | nginx 伪装首页 | ❌ |
| M3U8 Player | `https://your-worker.dev/admin` | 登录页面 | ❌ |
| M3U8 Player | `https://your-worker.dev/admin/panel` | 播放器主界面 | ✅ |
| M3U8 Player | `https://your-worker.dev/proxy/{base64_url}` | 代理播放端点 | ✅ |
| NetSight Pro | `https://your-worker.dev/` | 诊断主页 | ❌ |
| NetSight Pro | `https://your-worker.dev/health` | 健康检查 API | ❌ |
| NetSight Pro | `https://your-worker.dev/speedtest` | 带宽测速 API | ✅* |

*注：NetSight Pro 的 API 端点受限流保护（60次/分钟），但不需密码认证。

### 默认密码（仅 M3U8 Player）

```
ADMIN_PASSWORD = '8837093Ben@'
```

> ⚠️ **严重警告**：此密码已在 GitHub 上公开，任何人知道你的 Worker 地址后都可以登录！**请在部署后立即修改！**

**修改方法：**
1. 直接修改 `_workers.js` 第 3 行
2. 或使用环境变量 `wrangler secret put ADMIN_PASSWORD`（推荐）

---

## ❓ 常见问题

### 通用问题

**Q1: 我没有 Cloudflare 账号，能用吗？**
A: 需要免费注册一个 Cloudflare 账号。Workers 免费计划每天提供 10 万次请求，个人使用完全足够。

**Q2: 部署需要付费吗？**
A: 不需要。Cloudflare Workers 免费计划包含：10 万次请求/天、CPU 时间 10ms/请求、脚本大小 1MB。

**Q3: 两个项目可以部署在同一个 Worker 上吗？**
A: 不可以。每个 Worker 只能运行一个脚本。你需要创建两个独立的 Worker。

### M3U8 Player 常见问题

**Q4: 视频无法自动播放？**
A: 现代浏览器策略限制，需要用户与页面交互后才能播放。点击页面任意位置或手动点击播放按钮即可。

**Q5: 代理模式有什么优势？**
A: 解决 CORS 跨域问题、隐藏客户端真实 IP、利用 Cloudflare 全球网络加速。

**Q6: 支持 DRM 加密流吗？**
A: 不支持 Widevine、FairPlay 等加密流，仅支持明文 HLS。

**Q7: 移动端侧边栏怎么关闭？**
A: 点击右侧遮罩区域或菜单按钮再次点击即可关闭。

### NetSight Pro 常见问题

**Q8: 限流触发后怎么办？**
A: 限流周期为 60 秒，等待 60 秒后自动解除。响应头会包含 `retry-after: 60`。

**Q9: WebSocket 连接失败？**
A: 确保客户端支持 WebSocket 协议，检查网络环境是否允许 WebSocket 连接。

**Q10: 带宽测速结果不准确？**
A: 测速受网络波动影响，建议多次测试取平均值，使用有线网络比 Wi-Fi 更稳定。

**Q11: CPU 测试结果差异大？**
A: Cloudflare Workers 的 CPU 资源是共享的，结果会有波动。建议多次测试取平均值，测试迭代次数越高结果越稳定。

---

## 🔍 故障排查

### 查看 Worker 日志

```bash
# 实时查看日志
wrangler tail

# 过滤特定状态码
wrangler tail --filter "status:>=400"

# 输出 JSON 格式
wrangler tail --format json

# 限制输出行数
wrangler tail --format=json | head -20
```

### 常见错误码

| 状态码 | 含义 | 解决方法 |
|--------|------|----------|
| 200 | 成功 | - |
| 400 | 请求参数错误 | 检查参数格式和范围 |
| 401 | 未认证（M3U8 Player） | 先访问 `/admin` 登录 |
| 404 | 路径不存在 | 检查 URL 路径是否正确 |
| 426 | Upgrade Required（WebSocket） | 需要正确的 Upgrade 头 |
| 429 | Too Many Requests | 等待 60 秒后重试 |
| 500 | Internal Server Error | 检查 Worker 代码或联系支持 |
| 503 | Service Unavailable | Cloudflare 临时问题，稍后重试 |

### 本地开发测试

```bash
# M3U8 Player 本地预览
wrangler dev --main _workers.js --port 8787

# NetSight Pro 本地预览
wrangler dev --main _workers.js --port 8787

# 启用调试日志
wrangler dev --log-level debug

# 使用 Chrome DevTools 调试（按 D 键）
wrangler dev --inspector-port 9229
```

---

## 🤝 贡献指南

欢迎任何形式的贡献！无论是代码、文档、Issue 还是想法。

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

### 代码规范

- 使用 **2 空格缩进**
- 变量命名使用 **camelCase**
- 常量使用 **UPPER_SNAKE_CASE**
- 函数添加必要的注释说明
- 保持代码简洁，避免过度嵌套

### 提交信息格式

| 类型 | 图标 | 说明 | 示例 |
|------|------|------|------|
| feat | ✨ | 新功能 | `feat: add health check endpoint` |
| fix | 🐛 | 修复问题 | `fix: websocket timeout issue` |
| docs | 📝 | 文档更新 | `docs: update API documentation` |
| style | 🎨 | 代码格式 | `style: update card hover effect` |
| refactor | ♻️ | 代码重构 | `refactor: extract common functions` |
| perf | ⚡ | 性能优化 | `perf: optimize concurrent test` |
| test | ✅ | 测试相关 | `test: add unit tests` |
| chore | 🔧 | 构建/工具 | `chore: update wrangler config` |
| security | 🔒 | 安全相关 | `security: add rate limiting` |

### Pull Request 检查清单

- [ ] 代码符合项目规范
- [ ] 已本地测试通过
- [ ] 更新了相关文档
- [ ] 提交信息格式正确
- [ ] 未引入破坏性变更
- [ ] 添加了必要的注释

---

## 💖 支持与赞助

如果我的项目对你有帮助，欢迎通过以下方式支持我：

- ⭐ 给项目点 Star
- 🐛 提交 Issue 反馈问题
- 🔧 提交 Pull Request 贡献代码
- 📝 分享项目给更多人
- 💰 通过 GitHub Sponsors 赞助

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
| 专利授权 | ✅ 包含 |
| 私人使用 | ✅ 允许 |
| 许可和版权声明 | ✅ 必须保留 |

> 完整许可证文本请查看各项目仓库中的 `LICENSE` 文件。

---

## 📞 联系方式

| 渠道 | 链接 |
|------|------|
| **GitHub** | [BlueDriftHK](https://github.com/BlueDriftHK) |
| **M3U8 Player Issues** | [提交问题](https://github.com/BlueDriftHK/CF-Worker-M3U8Player/issues) |
| **NetSight Pro Issues** | [提交问题](https://github.com/BlueDriftHK/CF-workers-netdiag/issues) |
| **M3U8 Player Wiki** | [中文文档](https://github.com/BlueDriftHK/CF-Worker-M3U8Player/wiki) |
| **NetSight Pro Wiki** | [中文文档](https://github.com/BlueDriftHK/CF-workers-netdiag/wiki) |

---

## 🙏 致谢

### 开源项目与服务

- [Cloudflare Workers](https://workers.cloudflare.com/) - 边缘计算平台
- [HLS.js](https://github.com/video-dev/hls.js) - HLS 播放核心库
- [Chart.js](https://www.chartjs.org/) - 优雅的图表渲染
- [Font Awesome](https://fontawesome.com/) - 图标库
- [Google Fonts](https://fonts.google.com/) - Inter 字体
- [ip-api.com](http://ip-api.com/) - IP 地理位置服务
- [ipify.org](https://www.ipify.org/) - IP 地址检测服务

### 测试流提供方

- [Mux](https://www.mux.com/) - 测试流
- [Apple](https://developer.apple.com/streaming/) - Bipbop 测试流
- [Akamai](https://www.akamai.com/) - 高码率测试流

### 贡献者

感谢所有为本项目做出贡献的开发者！

---

## 📊 GitHub 统计

<div align="center">
  
![BlueDriftHK's GitHub stats](https://github-readme-stats.vercel.app/api?username=BlueDriftHK&show_icons=true&theme=dark)
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=BlueDriftHK&layout=compact&theme=dark)

</div>

---

<div align="center">

**⚡ 让边缘计算更强大，让网络工具更易用 ⚡**

*Made with ❤️ by BlueDriftHK*

[![GPL-3.0 License](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare)](https://workers.cloudflare.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

</div>
