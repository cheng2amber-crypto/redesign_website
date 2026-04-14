# Link Map

这个文件用于统一管理网站中“所有可点击按钮 / 卡片 / 导航”的跳转关系。

目的：
- 方便我批量修改链接
- 方便后续技术人员快速接手
- 减少“这个按钮应该跳哪里”的反复确认成本

使用规则：
- `页面`：按钮所在页面
- `位置`：顶部导航 / Hero / 卡片区 / Footer / 弹窗 等
- `元素名称`：页面上用户看到的文字
- `选择器/备注`：如果技术人员需要快速定位元素，可写 class、id，或简单备注
- `跳转地址`：完整 URL 或站内相对路径
- `打开方式`：
  - `当前页`
  - `新标签`
- `状态`：
  - `已确认`
  - `待确认`
  - `待修改`

建议维护方式：
- 新增按钮时，先补这张表
- 改链接时，优先改这张表，再改页面代码
- 每次上线前，按这张表快速复查一遍

---

## Template

| 页面 | 位置 | 元素名称 | 选择器/备注 | 跳转地址 | 打开方式 | 状态 |
|---|---|---|---|---|---|---|
| 首页 | 顶部导航 | 开始对话 | nav link | https://web.chatboxai.app | 新标签 | 已确认 |
| 首页 | 顶部导航 | 下载 | nav button | ./download.html | 当前页 | 已确认 |
| 首页 | 顶部导航 | 价格 | nav link | ./pricing.html | 当前页 | 已确认 |
| 首页 | 顶部导航 | 帮助中心 | nav link | ./help-center-redesign.html | 当前页 | 已确认 |
| 帮助中心 | 热门话题 | 如何使用您的许可证 | 第 1 个卡片 | https://chatboxai.app/zh/help-center/how-to-use-license | 新标签 | 已确认 |
| 帮助中心 | 热门话题 | 常见服务问题 | 第 2 个卡片 | https://chatboxai.app/zh/help-center/chatbox-ai-service-faqs | 新标签 | 已确认 |
| 帮助中心 | 热门话题 | 键盘快捷键 | 第 3 个卡片 | https://chatboxai.app/zh/help-center/chatbox-keyboard-shortcuts | 新标签 | 已确认 |
| 帮助中心 | 热门话题 | 开始使用 | 第 4 个卡片 | https://chatboxai.app/zh/guide | 新标签 | 已确认 |
| 帮助中心 | 热门话题 | 核心概念 | 第 5 个卡片 | https://chatboxai.app/zh/guide | 新标签 | 已确认 |
| 帮助中心 | 热门话题 | 套餐与价格 | 第 6 个卡片 | https://chatboxai.app/zh/guide | 新标签 | 已确认 |
| 帮助中心 | 热门话题 | 自带 API Key | 第 7 个卡片 | https://chatboxai.app/zh/guide | 新标签 | 已确认 |
| 帮助中心 | 热门话题 | 常见错误及解决 | 第 8 个卡片 | https://chatboxai.app/zh/guide | 新标签 | 已确认 |
| 帮助中心 | 热门话题 | 许可证管理 | 第 9 个卡片 | https://chatboxai.app/zh/guide | 新标签 | 已确认 |
| 帮助中心 | 热门话题 | Token计算方法 | 第 10 个卡片 | https://chatboxai.app/zh/guide | 新标签 | 已确认 |
| 帮助中心 | 底部反馈 | 联系我们 | contact-btn | https://chatboxai.canny.io/ | 新标签 | 已确认 |

---

## Blank Copy

后续新增内容时，直接复制下面几行继续填：

| 页面 | 位置 | 元素名称 | 选择器/备注 | 跳转地址 | 打开方式 | 状态 |
|---|---|---|---|---|---|---|
|  |  |  |  |  | 当前页 / 新标签 | 待确认 |
|  |  |  |  |  | 当前页 / 新标签 | 待确认 |
|  |  |  |  |  | 当前页 / 新标签 | 待确认 |

