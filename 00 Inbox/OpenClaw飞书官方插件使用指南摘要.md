# OpenClaw飞书官方插件使用指南 摘要

> 来源：飞书文档

## 核心功能

飞书官方插件让 OpenClaw 可以直接以你的身份在飞书中完成：消息读写发送、文档创建读取、多维表格管理、日历日程管理、任务管理等。

## 安装步骤

1. **安装 OpenClaw**：执行 `curl -fsSL https://openclaw.ai/install.sh | bash`
2. **安装飞书插件**：执行 `px -y @larksuite/openclaw-lark-tools install`
3. **授权**：发送 `/feishu auth` 完成批量授权
4. **验证**：发送 `/feishu start` 确认安装成功

## 高级配置

- 切换流式输出：`openclaw config set channels.feishu.streaming true`
- 开启多任务并行：`openclaw config set channels.feishu.threadSession true`
- 群内回复模式：支持 @才回复、不用@全回复、指定群特殊规则三种模式

## 安全提示

⚠️ AI 存在幻觉风险，重要操作建议“先预览再确认”。建议先用个人账号测试，再接入工作环境。

---
*参考来源：飞书文档 - OpenClaw飞书官方插件使用指南（公开版）*
