# 「50 Gb+」免费空间助力Obsidian多端同步

> 来源：微信公众号 - 维客笔记

## 引言

中国科技云推出了数据胶囊存储服务，支持 S3 协议，可用于 Obsidian 同步。

## 数据胶囊配置

1. 访问[数据胶囊官网](https://data.cstcloud.cn/)，登录后前往"我的数据"
2. 目前提供 **50 GB** 免费空间
3. 创建数据空间，选择 S3 客户端
4. 配置存储桶名称（需与 Obsidian 库名一致）
5. 新增 AccessKey，复制相关参数

## Remotely Save 插件配置

1. 安装 Remotely save 插件
2. 配置 S3 参数：
   - 区域：us-east-1
   - 存储桶：与 Obsidian 库名一致
   - S3 URL style：Path-Style
3. 点击同步即可

## 小结

- 使用 Remotely save + S3 同步方案简单有效
- 注意：删除的文件可能在同步时恢复，需留意

---
*参考来源：https://mp.weixin.qq.com/s/udhnFYis28H6SKemPCwZ1w*
