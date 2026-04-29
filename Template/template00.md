---
标题：<% tp.file.title %>
创建时间：<% tp.file.creation_date() %>
Tags：
---
<% await tp.file.move("/09 Feeling Notes/F1/N1/" + ((tp.file.title.includes("未命名") || tp.file.title.toLowerCase().includes("untitled")) ? (await tp.system.prompt("请输入要创建的文件名")) : tp.file.title)) %>
# 标题一

## 标题二

### 标题三
