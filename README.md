# 👋 Hi, I'm BlueDriftHK

<div align="center">
  
[![GitHub followers](https://img.shields.io/github/followers/BlueDriftHK?label=Follow&style=social)](https://github.com/BlueDriftHK)
[![GitHub stars](https://img.shields.io/github/stars/BlueDriftHK?label=Total%20Stars&style=social)](https://github.com/BlueDriftHK)
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

## 📊 GitHub 统计

<div align="center">
  
| 指标 | 数据 |
|------|------|
| ⭐ **Total Stars Earned** | **22** |
| 📝 **Total Commits (last year)** | **351** |
| 🔀 **Total PRs** | **0** |
| 🐛 **Total Issues** | **1** |
| 🤝 **Contributed to (last year)** | **1** |

</div>

### 主要编程语言

<div align="center">
  
| 语言 | 占比 |
|------|------|
| **JavaScript** | 54.26% |
| **HTML** | 45.74% |

</div>

<div align="center">
  
![JavaScript](https://img.shields.io/badge/JavaScript-54.26%25-F7DF1E?logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML-45.74%25-E34F26?logo=html5&logoColor=white)

</div>

---

## 🚀 核心项目

| 项目 | 描述 | 技术栈 | 最新版本 | 代码规模 | Stars |
|------|------|--------|----------|----------|-------|
| **[Master M3U8 Terminal Pro](https://github.com/BlueDriftHK/CF-Worker-M3U8Player)** | 专业级 HLS 视频流播放器，支持代理播放、多语言、实时监控、编码检测和 QoS 质量评估，部署在 Cloudflare Workers 边缘节点 | HLS.js, Chart.js, Workers, Web Crypto API | **v2.0.0** | ~1500 行 | ![Stars](https://img.shields.io/github/stars/BlueDriftHK/CF-Worker-M3U8Player?style=flat) |
| **[NetSight Pro](https://github.com/BlueDriftHK/CF-workers-netdiag)** | 强大的边缘网络诊断工具，提供实时延迟监控、带宽/CPU 测试、WebSocket 测试、安全协议检测和地理位置追踪 | WebSocket, Canvas API, Workers, Streams API | **v3.5** | ~1200 行 | ![Stars](https://img.shields.io/github/stars/BlueDriftHK/CF-workers-netdiag?style=flat) |

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

### 📊 实时监控

| 监控指标 | 采集方式 | 展示形式 | 精度 |
|----------|----------|----------|------|
| 下载速度 | 分片加载时长 + 大小 | 实时数值 + 曲线图表 | 0.1 KB/s |
| 峰值速度 | 历史最大值记录 | 高亮显示（黄色） | 0.1 KB/s |
| 缓冲健康度 | `video.buffered` API | 进度条 + 五档评级 | 0.1s |
| 流量统计 | 分片大小累加 | MB/GB 单位显示 | 0.01 MB |
| 帧率检测 | `getVideoPlaybackQuality` | fps 数值 | 1 fps |
| 卡顿次数 | `ERROR` 事件计数 | 累计数值 | 1 次 |

### 🌐 网络诊断

| 诊断项 | 数据来源 | 刷新方式 | 准确度 |
|--------|----------|----------|--------|
| CDN 节点 | `/cdn-cgi/trace` | 手动/自动 | 100% |
| 客户端 IP | `/cdn-cgi/trace` | 手动/自动 | 100% |
| 国家/地区 | `/cdn-cgi/trace` | 手动/自动 | 100% |
| Ping 延迟 | 三次 fetch 测量 | 手动触发 | ±5ms |
| 操作系统 | UserAgent 解析 | 页面加载 | 95% |
| HLS 兼容性 | `Hls.isSupported()` | 页面加载 | 100% |

### 🎮 交互体验

- **多语言**：简体中文、繁体中文、英文三语，URL 参数持久化 (`?lang=`)
- **键盘快捷键**：Space（播放/暂停）、←/→（±10 秒）、F（全屏切换）
- **响应式布局**：完美适配桌面端（>768px）和移动端（<768px）
- **侧边栏抽屉**：移动端 CSS Transform 动画，0.3s 缓动
- **日志系统**：内存数组存储，支持过滤/导出/清空
- **QoS 评分**：动态五星算法，基于缓冲深度和卡顿次数
- **速度图表**：Chart.js 动画，60 数据点平滑曲线

### 🛡️ 安全特性

| 安全项 | 配置 | 防护等级 | 说明 |
|--------|------|----------|------|
| 密码验证 | SessionStorage | ⭐⭐ | 简易管理面板保护 |
| 伪装首页 | nginx 模板 | ⭐⭐⭐ | 根路径返回仿 nginx 页面 |
| 代理限制 | 仅限 M3U8 内容 | ⭐⭐⭐ | 防止滥用代理功能 |
| CORS 控制 | `Access-Control-Allow-Origin: *` | ⭐⭐ | 代理请求自动添加 |

---

## 🔍 NetSight Pro - 功能详解

### 📡 网络质量检测

| 功能 | 说明 | 实现方式 |
|------|------|----------|
| **实时延迟监控** | 每 2 秒自动测量 RTT，实时趋势图表 | 定时 fetch + Canvas 绘制 |
| **丢包率测试** | 10 次请求测试，实时计算丢包百分比 | 成功/失败计数统计 |
| **网络抖动评估** | 稳定性分级（非常稳定/稳定/不稳定/极不稳定） | RTT 方差计算 |
| **连接质量评分** | 五档分级（优秀/良好/一般/较差/极差） | 综合 RTT + 丢包率 |

### 🚀 性能测试工具

| 功能 | 说明 | 参数限制 | 响应格式 |
|------|------|----------|----------|
| **带宽测速** | 多档位测试（100KB/500KB/2MB/5MB） | 最大 5MB | 二进制数据流 |
| **CPU性能测试** | 密集数学运算，返回 ops/ms | 最大 200 万次迭代 | JSON |
| **并发请求测试** | 模拟多并发下载 | 内部限制 4 并发 | JSON 数组 |
| **流式传输测试** | 测试吞吐量，分块传输 | 最大 10MB | ReadableStream |

```bash
# 带宽测速示例
curl -o /dev/null -s -w 'Speed: %{speed_download} bytes/sec\n' \
  https://your-worker.dev/speedtest?size=1048576

# CPU 测试响应示例
{
  "duration": 45,
  "iterations": 500000,
  "opsMs": 11111.11,
  "result": "12345678"
}
```

### 🔒 安全与协议检测

| 检测项 | 说明 | 数据来源 |
|--------|------|----------|
| **TLS版本检测** | 识别 TLS 1.0/1.1/1.2/1.3 | `request.cf.tlsVersion` |
| **加密套件分析** | 查看协商的加密算法 | `request.cf.tlsCipher` |
| **ECH状态检测** | 检测 Encrypted Client Hello 支持 | `request.cf.ecdh` |
| **HTTP/2/3 检测** | 识别协议版本和 Early Hints 支持 | `request.cf.alpn` |

### 🛡️ 企业级安全

| 安全项 | 配置值 | 防护效果 |
|--------|--------|----------|
| **限流保护** | 60 次/分钟 / IP | 防止 API 滥用，超限返回 429 |
| **CSP 策略** | 动态 nonce | 防止 XSS 和数据注入 |
| **HSTS** | `max-age=31536000` | 强制 HTTPS 连接 |
| **X-Frame-Options** | `DENY` | 防止点击劫持 |
| **X-Content-Type-Options** | `nosniff` | 防止 MIME 类型混淆 |

---

## 📁 项目结构对比

### Master M3U8 Terminal Pro

```
CF-Worker-M3U8Player/
├── _workers.js              # 核心部署文件 (~1500行)
│   ├── 常量配置区           # 密码、多语言、nginx模板
│   ├── 辅助函数区           # HTML生成、编码转换、时间格式化
│   ├── 路由处理区           # 6个端点 + 代理逻辑
│   └── HTML模板区           # 登录页 + 播放器界面
├── index.html               # 纯前端演示版
├── README.md                # 项目文档
├── LICENSE                  # GPL-3.0
└── .github/                 # CI/CD 配置
```

### NetSight Pro

```
CF-workers-netdiag/
├── _workers.js              # 核心部署文件 (~1200行)
│   ├── 限流中间件           # IP级别请求限制
│   ├── 路由分发器           # 8个API端点
│   ├── 响应生成器           # JSON/HTML/Stream
│   └── WebSocket处理器      # 心跳机制
├── index.html               # 纯前端演示版
├── README.md                # 项目文档
├── LICENSE                  # GPL-3.0
├── CODE_OF_CONDUCT.md       # 行为准则
├── CONTRIBUTING.md          # 贡献指南
├── SECURITY.md              # 安全政策
└── .github/                 # CI/CD + Issue模板
```

---

## 🛠️ 技术栈总览

| 技术 | 用途 | 应用项目 |
|------|------|----------|
| **Cloudflare Workers** | 边缘计算运行时 | 两个项目 |
| **HLS.js** | HLS 流解码播放 | M3U8 Player |
| **Chart.js** | 实时速度图表 | M3U8 Player |
| **WebSocket API** | 实时双向通信测试 | NetSight Pro |
| **Canvas API** | 实时延迟图表绘制 | NetSight Pro |
| **ReadableStream API** | 流式数据传输 | NetSight Pro |
| **Web Crypto API** | Base64 编解码、随机数据 | 两个项目 |
| **Fetch API** | HTTP 请求处理 | 两个项目 |

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

### 手动部署

```bash
# 1. 安装 Wrangler CLI
npm install -g wrangler

# 2. 登录 Cloudflare
wrangler login

# 3. 克隆项目
git clone https://github.com/BlueDriftHK/CF-Worker-M3U8Player.git
# 或
git clone https://github.com/BlueDriftHK/CF-workers-netdiag.git

# 4. 部署
cd CF-Worker-M3U8Player
wrangler deploy --main _workers.js

# 5. （可选）设置环境变量密码（仅 M3U8 项目）
wrangler secret put ADMIN_PASSWORD
```

### 访问地址

| 项目 | 路径 | 说明 |
|------|------|------|
| M3U8 Player | `https://your-worker.dev/admin` | 登录页面 |
| M3U8 Player | `https://your-worker.dev/admin/panel` | 播放器主界面 |
| M3U8 Player | `https://your-worker.dev/proxy/{base64_url}` | 代理播放端点 |
| NetSight Pro | `https://your-worker.dev/` | 诊断主页 |
| NetSight Pro | `https://your-worker.dev/health` | 健康检查 API |

### 默认密码（仅 M3U8 Player）

```
ADMIN_PASSWORD = '8837093Ben@'
```

> ⚠️ **严重警告**：此密码已在 GitHub 上公开！**请在部署后立即修改！**

---

## 📋 更新日志

### Master M3U8 Terminal Pro - v2.0.0 (2026-05-27)

**新增功能：**
- ✅ 代理播放路由 `/proxy/`
- ✅ CDN 节点探测（数据中心、IP、国家）
- ✅ Ping 延迟测试端点
- ✅ 三语支持（简中/繁中/英文）
- ✅ QoS 五星质量评分
- ✅ 键盘快捷键（Space/←/→/F）
- ✅ 编码格式智能识别（H.264/H.265/VP9/AV1）

### NetSight Pro - v3.5 (2026-06-11)

**新增功能：**
- ✅ 限流清理机制优化（随机抽样）
- ✅ 全局作用域异步问题修复
- ✅ WebSocket 心跳稳定性增强
- ✅ 动态 CSP nonce 防护

---

## ❓ 常见问题

### 通用问题

**Q: 部署需要付费吗？**
A: 不需要。Cloudflare Workers 免费计划每天提供 10 万次请求，个人使用完全足够。

**Q: 两个项目可以部署在同一个 Worker 上吗？**
A: 不可以。每个 Worker 只能运行一个脚本，需要创建两个独立的 Worker。

### M3U8 Player 常见问题

**Q: 视频无法自动播放？**
A: 现代浏览器策略限制，需要手动点击播放按钮或页面任意位置。

**Q: 代理模式有什么优势？**
A: 解决 CORS 跨域问题、隐藏客户端真实 IP、利用 Cloudflare 全球网络加速。

**Q: 支持 DRM 加密流吗？**
A: 不支持 Widevine、FairPlay 等加密流，仅支持明文 HLS。

### NetSight Pro 常见问题

**Q: 限流触发后怎么办？**
A: 等待 60 秒后自动解除，响应头会包含 `retry-after: 60`。

**Q: 带宽测速结果不准确？**
A: 建议多次测试取平均值，使用有线网络比 Wi-Fi 更稳定。

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
| **GitHub** | [BlueDriftHK](https://github.com/BlueDriftHK) |
| **M3U8 Player Issues** | [提交问题](https://github.com/BlueDriftHK/CF-Worker-M3U8Player/issues) |
| **NetSight Pro Issues** | [提交问题](https://github.com/BlueDriftHK/CF-workers-netdiag/issues) |

---

## 🙏 致谢

- [Cloudflare Workers](https://workers.cloudflare.com/) - 边缘计算平台
- [HLS.js](https://github.com/video-dev/hls.js) - HLS 播放核心库
- [Chart.js](https://www.chartjs.org/) - 图表渲染
- [Font Awesome](https://fontawesome.com/) - 图标库
- [ip-api.com](http://ip-api.com/) - IP 地理位置服务

---

<div align="center">

**⚡ 让边缘计算更强大，让网络工具更易用 ⚡**

*Made with ❤️ by BlueDriftHK*

[![GPL-3.0 License](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare)](https://workers.cloudflare.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

</div>
