---
id: fa166039-7ba7-4385-8351-6d70f5269896
title: |
  Obsidian 宝藏插件之 Contribution Graph，生成可交互的贡献热力图
author: |
  vran
tags:
  - Obsidian
date_saved: 2023-12-28 15:26:58
date_published: 2023-12-19 09:55:00
---

# Obsidian 宝藏插件之 Contribution Graph，生成可交互的贡献热力图
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-li-b-mpzwn-on-2-w-xb-zm-4-t-r-2-a-18caf5199b3)
[Read Original](https://mp.weixin.qq.com/s/liBMpzwnON2w-xbZM4tR2A)

原创 vran  vran _2023-12-19 09:55_ _发表于上海_ 

如果你正在 Obsidian 中使用 Heatmap Calendar 或者 Activity History 这两个插件的话，现在是时候将目光投向新一代的 **Contribution Graph** 了，它不仅实现了这两个插件已有的功能，还增加了更多创意的特性。

> 在此仍要感谢 Heatmap Calendar 和 Activity History 插件作者的探索和无私分享，鞠躬

## 介绍

Contribution Graph 插件可以帮你生成类似于 Github 一样的**可交互的贡献图**，你可以通过图表来追踪项目进度、习惯、目标等任何你想追踪的东西，一切取决于你的想象。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sOCXFdObNbUXEGdlpd8JZAvRHLmzbiO_WSW54qDx3_v4/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOLFmU3JY0sNoaZuibia22HBlcLicS06xTAMHOxRH6QuOVJy1RWKOmhjAFbw/640?wx_fmt=png&from=appmsg)

关于它的特性

* 免费、开源
* 除了默认的 Github 风格的周贡献图外，还额外提供了月贡献图和日历视图
* 不仅可以生成固定时间区间的数据，还可以生成最近一段时间的数据
* 不光是能看，还能进行交互，鼠标悬停单元格可以查看统计信息，也能自定义单元格的点击行为
* 发挥你的想象，单元格的样式除了默认的色块外，还可以定义任意文案，比如 emoji 🌲.
* 支持与 dataviewjs 集成，可以直接使用 dataview 强大的数据检索能力
* 更多，等你探索

实际效果图  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sEJD80hYiEt5ltgBQ5YPTbPnU7Z8CJND1-ekr6EKygpk/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOLvfQNAx4ic2YHVThAUiaiarL1uVvVBhXSrylIBHFYQZdB2EiafEsThMCicbw/640?wx_fmt=png&from=appmsg)

## 安装

根据需要，你可以通过以下两种方式来安装 Contribution Graph 插件

### 插件市场安装

1. 在 obsidian 的插件市场搜索 contribution graph 进行安装

> 我已经在 2023/12/16 向 Obsidian 官方提交了上架申请，如果你在阅读本文时在插件市场仍无法搜到该插件，你可以私信我，我会给你最新版本的插件包。
> 
> 当然，你也可以继续跟随本文的手动下载安装一节进行自主安装

### 手动下载安装

1. 在 Github Release 下载最新版的 `main.js`，`styles.css`，`manifest.json` 这个三个文件

> https://github.com/vran-dev/obsidian-contribution-graph/releases

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sOOKLHTJ8B2-MljlG0Gyt-mhXOX0KgC10BeJ_Lb9fQ8w/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOL75nKFvtJRFjZUBREjqpZdlK1O1NMiczTmGWfziaAvwoKM6a3hL1q1LCg/640?wx_fmt=png&from=appmsg)

1. 进入你的 obsidian 的 vault 目录下，再进入 `.obsidian/plugins` 子目录，在里面新建一个 `contribution-graph` 的目录

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s9kuSgTtomwk0PsxVoaiVAMEXdh8rH7VM_ZvH-nDTMaU/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOLXmGLpEibx2xQsczMDicQu2gXuogTCUBjDjysIng5nSfibpEJyoETFSvBg/640?wx_fmt=png&from=appmsg)

1. 将前面下载的 3 个文件（`main.js`、`styles.css`、`manifest.json`）粘贴到刚新建的 `contribution-graph` 目录下

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,siecUzwIdbUQF09-E_SV1-PmvYP1XVsfyAYQM3G5cuXg/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOLYhHvicCy1NXhmespcc9Z7XlEYX2p28wFjHicPzaLglicUZU5Q8sO3IovA/640?wx_fmt=png&from=appmsg)

1. 最后在 obsidian 的插件设置页面，刷新一下已安装插件列表，找到 `Contribution Graph` 进行启用即可

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sAVMttozcTv-OyvR3uqSvHgRfCceUfmv2DQIx70Ap69w/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOLsG7NXgdRbZqx0AuJibEUg7Rv5UOL18q4OOohJytX9xibXlFG8aCFNmwg/640?wx_fmt=png&from=appmsg)

## 使用

**注意：在当前版本，Contribution Graph 插件必须结合 Dataview 一起使用**，所以在使用前请确保你已经安装了 dataview 插件，并且对 dataview 有一定的认识。

以下是本文所涉及到的软件版本

* Dataview 版本：0.5.64
* Contribution Graph 插件版本：0.3.0
* Obsidian 版本：v1.4.16

接下来我直接通过 10 个实际的使用案例来展示该插件的使用方式和效果，所有的示例代码放入 `dataviewjs` 代码块内即可运行。

\`\`\`dataviewjs

// 代码放在这里

\`\`\`

废话少说，直接挑你感兴趣的功能案例进行查看

* 展示去年一整年的贡献数据
* 展示当月的贡献数据
* 展示最近 365 天的贡献数据
* 从周一开始展示数据
* 自定义单元格色彩规则
* 自定义单元格文案
* 自定义单元格提示文案
* 自定义单元格点击行为
* 切换为月跟踪视图
* 切换为日历视图

### 展示去年一整年的贡献数据

这是 Contribution Graph 最基本的能力：根据某个时间范围的数据来生成图表。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sCFAbarac5RAGAvX66G0Wn9sNwnHAjM421oOUCzOhU6g/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOLcdHZoiaicfVfChEkZOAyoWRTic1WmdT9Cdaib45NyXOCMiafnD5cEibjNFrw/640?wx_fmt=png&from=appmsg)

这是源码

![](https://proxy-prod.omnivore-image-cache.app/0x0,slKBYwbYcRBNrMrq8yIg5UIieN7Mm1T7yxNuobDXu6WA/https://mmbiz.qpic.cn/mmbiz_svg/fFgUJknhibCwEIazWjJibMneevntha54xDF1wayQWZTJMjCgJGmpFTqqNtMWvBLIHzSJu591DpCGeTHYQKL9oQicawWnjSb6F2z/640?wx_fmt=svg&from=appmsg)`` const from = const to = const data = [ {  date: ,  value: 1  }, {  date: ,  value: 2  }, {  date: ,  value: 3 }, {  date: ,  value: 4  }, {  date: ,  value: 5  }]const options = {    title:  `${from} to ${to}`, // 图表标题    data: data, // 用于显示单元格颜色的数据    fromDate: from, // 图表的开始日期    toDate: to // 图表的结束日期}// 使用 renderContributionGraph 函数渲染出图表renderContributionGraph(this.container, options) ``

### 展示当月的贡献数据

通过结合 dataview，你可以动态的生成当年、当月的图表

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sIKbGFUm3UA_5nKrF4thlqtou2Zlr7gyYJ2_OC49F0c4/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOLWic0bYAAviaMhqT96HdulSwAF6tSicOsC5kJvtxbRia3GCYTXvDic4CCicaQ/640?wx_fmt=png&from=appmsg)

![](https://proxy-prod.omnivore-image-cache.app/0x0,slKBYwbYcRBNrMrq8yIg5UIieN7Mm1T7yxNuobDXu6WA/https://mmbiz.qpic.cn/mmbiz_svg/fFgUJknhibCwEIazWjJibMneevntha54xDF1wayQWZTJMjCgJGmpFTqqNtMWvBLIHzSJu591DpCGeTHYQKL9oQicawWnjSb6F2z/640?wx_fmt=svg&from=appmsg)`` const currentYear = new Date().getFullYear() // 获取当前年份const month = new Date().getMonth() // 获取当前月份 ，返回值为 0~11const nextMonth = month + 1 const lastDayOfCurrentMonth = new Date(currentYear, nextMonth, 0).getDate() // 计算当前月的最后一天// 将日期格式化为 yyyy-MM-ddconst formattedLastDayOfCurrentMonth = lastDayOfCurrentMonth < 10 ? '0'+lastDayOfCurrentMonth:lastDayOfCurrentMonthconst formattedMonth = month < 9 ? '0' + (month+1): '' + (month+1)const from = `${currentYear}-${formattedMonth}-01`const to = `${currentYear}-${formattedMonth}-${formattedLastDayOfCurrentMonth}`// 图表数据const data = []const options = {    title:  `${from} to ${to}`,    data: data,    fromDate: from,    toDate: to}renderContributionGraph(this.container, options) ``

### 展示最近 365 天的贡献数据

除了固定开始和结束日期外，还可以通过配置 `days` 属性来生成最近 days 天的图表数据，下面就是一个最近 365 天的图表

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sYLw2AYB303Ok0Jv5N9940fYGvPtthZ7HYSMrEwoOtcE/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOLt6EkXDicYb9OATKteZZicxSYRZ1NKwau7bf5XapNd6aov1CLcDc7rk0Q/640?wx_fmt=png&from=appmsg)

![](https://proxy-prod.omnivore-image-cache.app/0x0,slKBYwbYcRBNrMrq8yIg5UIieN7Mm1T7yxNuobDXu6WA/https://mmbiz.qpic.cn/mmbiz_svg/fFgUJknhibCwEIazWjJibMneevntha54xDF1wayQWZTJMjCgJGmpFTqqNtMWvBLIHzSJu591DpCGeTHYQKL9oQicawWnjSb6F2z/640?wx_fmt=svg&from=appmsg)`` // 图表数据const data = []const options = {    title:  `最近 365 天的贡献数据`,    data: data,    days: 365 // days 表示最近多少天}renderContributionGraph(this.container, options) ``

### 从周一开始展示数据

你应该发现了，生成的图表本质上就是一个表格，每一行代表一周中的周几，默认第一行是周日，依此类推，最后一行是周六。

如果你不习惯周日作为第一行的话，可以通过修改配置 startOfWeek 来改成周一或其他你希望的任意值

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sXfRKfzFiatKY96xXBMEdT_NYTJD2PiYS6yGp3lVTrw4/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOLT6niabjyb8Op8DEROFERAiadYcTqXOpwu3JqHtOEoh8ibib8LYiaicRP6WoQ/640?wx_fmt=png&from=appmsg)

![](https://proxy-prod.omnivore-image-cache.app/0x0,slKBYwbYcRBNrMrq8yIg5UIieN7Mm1T7yxNuobDXu6WA/https://mmbiz.qpic.cn/mmbiz_svg/fFgUJknhibCwEIazWjJibMneevntha54xDF1wayQWZTJMjCgJGmpFTqqNtMWvBLIHzSJu591DpCGeTHYQKL9oQicawWnjSb6F2z/640?wx_fmt=svg&from=appmsg)`` // 图表数据const data = []const options = {    title:  `${from} to ${to}`,    data: data,    days: 365,    startOfWeek: 1 // 0 表示从周日，1~6 分别表示周一到周六}renderContributionGraph(this.container, options) ``

### 自定义单元格色彩规则

Contribution Graph 会根据在某一天的贡献次数来决定单元格的色彩，默认规则如下

| 贡献次数        | 色彩      | 是否可配置 |
| ----------- | ------- | ----- |
| 0           | [[ebedf0]] | 否     |
| 1 <= x < 2  | [[9be9a8]] | 是     |
| 2 <= x < 5  | [[40c463]] | 是     |
| 5 <= x < 10 | [[30a14e]] | 是     |
| 10 <= x     | [[216e39]] | 是     |

如果你不喜欢默认的配色，你可以通过设置 `cellStyleRules` 来自定义你希望的色彩，比如今年流行的美拉德色系。

> 这里推荐一个可以生成配色的在线网站：https://leonardocolor.io/#

直接看案例

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s4gf-x6ohmegj_unSCdVDGIWMsYK53veBA0qj5066-Y0/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOLmps3RcPUEJWyLK0hruDJBIUSZY7E4N0icoYDwVEFR8Aj0fX5lOe0hhw/640?wx_fmt=png&from=appmsg)

![](https://proxy-prod.omnivore-image-cache.app/0x0,slKBYwbYcRBNrMrq8yIg5UIieN7Mm1T7yxNuobDXu6WA/https://mmbiz.qpic.cn/mmbiz_svg/fFgUJknhibCwEIazWjJibMneevntha54xDF1wayQWZTJMjCgJGmpFTqqNtMWvBLIHzSJu591DpCGeTHYQKL9oQicawWnjSb6F2z/640?wx_fmt=svg&from=appmsg)`const data = []const date = new Date()// 生成随机数据for (let i = 0; i <= 366; i++) { const month = date.getMonth()+1 const day = date.getDate() const monthStr = month < 10 ? '0'+month:month+'' const dayStr = day < 10 ? '0' + day:day+"" data.push({  date: date.getFullYear() + '-'+monthStr+'-'+dayStr,  value: (i % 20) // 0~19 的贡献值 }) date.setDate(date.getDate() - 1)}const options = {    days: 365,    title: 'Contributions in the last 365 days ',    data: data,    cellStyleRules: [ // 自定义喜欢的色彩  {   color: "#FFF8DC", // 配置你想要的色彩   min: 1, // 如果贡献次数大于等于 min，小于 max，则该规则会被匹配上   max: 5,  },  {   color: "#FFECB3",   min: 5,   max: 10,  },  {   color: "#FFD700",   min: 10,   max: 15,  },  {   color: "#FFC200",   min: 15,   max: 999,  }, ]}renderContributionGraph(this.container, options)`

### 自定义单元格文案

除了通过背景色来区分贡献数以外，还可以定义 emoji 或其他文案来进行区分。和上一个例子一样，只需要修改一下 `cellStyleRules` 即可

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sNodlV5K3Ej6pgl97zsEpimKBeK9QoQapsfD3MHlnyCI/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOL9DQRmtZXCYWrz10vGGgBCicPHvIRPHHgzhSOm4r6iaT5Qx3eaiaTqw58g/640?wx_fmt=png&from=appmsg)

![](https://proxy-prod.omnivore-image-cache.app/0x0,slKBYwbYcRBNrMrq8yIg5UIieN7Mm1T7yxNuobDXu6WA/https://mmbiz.qpic.cn/mmbiz_svg/fFgUJknhibCwEIazWjJibMneevntha54xDF1wayQWZTJMjCgJGmpFTqqNtMWvBLIHzSJu591DpCGeTHYQKL9oQicawWnjSb6F2z/640?wx_fmt=svg&from=appmsg)`const data = []const date = new Date()// 生成随机数据for (let i = 0; i <= 366; i++) { const month = date.getMonth()+1 const day = date.getDate() const monthStr = month < 10 ? '0'+month:month+'' const dayStr = day < 10 ? '0' + day:day+"" data.push({  date: date.getFullYear() + '-'+monthStr+'-'+dayStr,  value: (i % 20) // 0~19 的贡献值 }) date.setDate(date.getDate() - 1)}const options = {    days: 365,    title: 'Contributions in the last 365 days ',    data: data,    cellStyleRules: [   {   text: "😄", //使用 emoji   min: 1,   max: 5,  },  {   text: "🚀",   min: 5,   max: 10,  },  {   text: "🌲",   min: 10,   max: 15,  },  {   color: "#EEE", // 也可以同时指定文案和背景色   text: "😼",   min: 15,   max: 999,  }, ]}renderContributionGraph(this.container, options)`

### 自定义单元格提示文案

当鼠标移动到单元格上时会显示一个带类似文案的气泡：“2 contributions on 2023-01-01”。

这个文案实际上是可以修改的，在 data 数据项中自定义 `summary` 属性即可

> 注意：当前版本只有贡献数大于 0 的单元格才会有文案显示

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sJQcQIEA1LhtL3Hact-yg8kmsKHxDveU7i9JyzqFK-mo/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOLibqk9EFMRCvXoQ6IRo6FJJSXJkEcibccia3XwDo0LwiaGEHBn5xdEpAGjQ/640?wx_fmt=png&from=appmsg)

```pgsql
const data = []const date = new Date()// 生成随机数据，在下面添加 summaryfor (let i = 0; i <= 366; i++) { const month = date.getMonth()+1 const day = date.getDate() const monthStr = month < 10 ? '0'+month:month+'' const dayStr = day < 10 ? '0' + day:day+"" const fullDate = date.getFullYear() + '-'+monthStr+'-'+dayStr data.push({  date: fullDate,  value: (i % 20), // 0~19 的贡献值  summary: "Wow太卷了，在"+fullDate+"贡献数达到了 " +(i%20)  // 自定义提示文案 }) date.setDate(date.getDate() - 1)}const options = {    days: 365,    title: 'Contributions in the last 365 days ',    data: data}renderContributionGraph(this.container, options)
```

### 自定义单元格点击行为

Contribution Graph 插件还支持配置每个单元格的点击事件，通过这个能力你可以实现很多交互功能，比如

* 点击单元格自动创建文件
* 点击单元格自动根据关键词搜索文件
* ...

具体可以做什么，取决于你的想法，我这里就展示一个**点击单元格搜索匹配指定关键词文件**的案例

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s1Fp9dFxoToojGHicnYtXJGq3jE5iLBI9wSs8pfsXd_w/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOLyWzvJELChibyJdxib1icpTe8bvf4IzfGtXgKsia3aUWMNiaIhtMKZeSoW4g/640?wx_fmt=png&from=appmsg)

![](https://proxy-prod.omnivore-image-cache.app/0x0,slKBYwbYcRBNrMrq8yIg5UIieN7Mm1T7yxNuobDXu6WA/https://mmbiz.qpic.cn/mmbiz_svg/fFgUJknhibCwEIazWjJibMneevntha54xDF1wayQWZTJMjCgJGmpFTqqNtMWvBLIHzSJu591DpCGeTHYQKL9oQicawWnjSb6F2z/640?wx_fmt=svg&from=appmsg)`` // 搜索所有带 project 标签的文件数据const data = dv.pages('#project') .map(p => {  return {   date: p.createTime.toFormat('yyyy-MM-dd'),   value: p  } }) .groupBy(p => p.date) // 按日期分组 .map(entry =>{   // 转换为 Contribution Graph 插件需要的数据格式  return {   date: entry.key,   value: entry.rows.length  } })const calendarData = {    days: 365,    title: 'Contributions in the last 365 days ',    data: data,    onCellClick: (item) => {     // 搜索关键词：标签 = project，并且创建时间等于单元格所映射的日期     const key = `["tags":project] ["createTime":${item.date}]`     // 调用 obsidian 内置的搜索功能，关键词为上一步生成的  app.internalPlugins.plugins['global-search'].instance.openGlobalSearch(key)    },}renderContributionGraph(this.container, calendarData) ``

### 切换为月跟踪视图

默认的视图类型我称之为周追踪视图，但除了周追踪视图外，Contribution Graph 还支持**月追踪视图**。

只需要将配置项中的 `graphType` 属性值设置为 `month-track` 就能无缝切换到月追踪视图了

在月追踪视图中

* 每一行代表一个完整的月份
* 每一列代表所属月的某一天

该视图类型特别适合用来做月度的回顾和追踪

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,snpBEsvKZoiLb48-s-grCxxAbPEDffvbcWDszXO5Vf3M/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOLAG0Ar8xZEoUjxAOIBA6lsnfACrOFCRHekxePhCOBWl5nWqiaXQSLCibA/640?wx_fmt=png&from=appmsg)

![](https://proxy-prod.omnivore-image-cache.app/0x0,slKBYwbYcRBNrMrq8yIg5UIieN7Mm1T7yxNuobDXu6WA/https://mmbiz.qpic.cn/mmbiz_svg/fFgUJknhibCwEIazWjJibMneevntha54xDF1wayQWZTJMjCgJGmpFTqqNtMWvBLIHzSJu591DpCGeTHYQKL9oQicawWnjSb6F2z/640?wx_fmt=svg&from=appmsg)`const data = []const date = new Date()// 生成随机数据，在下面添加 summaryfor (let i = 0; i <= 366; i++) { const month = date.getMonth()+1 const day = date.getDate() const monthStr = month < 10 ? '0'+month:month+'' const dayStr = day < 10 ? '0' + day:day+"" const fullDate = date.getFullYear() + '-'+monthStr+'-'+dayStr data.push({  date: fullDate,  value: day,  summary: "Wow太卷了，在"+fullDate+"贡献数达到了 " + day  // 自定义提示文案 }) date.setDate(date.getDate() - 1)}const options = {    days: 365,    title: 'Contributions in the last 365 days ',    data: data,    graphType: 'month-track' // 切换为 month-tack}renderContributionGraph(this.container, options)`

### 切换为日历视图

日历视图是在 0.3.0 版本加入的新的视图类型，你可以将其当做是月追踪视图的一个变种，只不过它在第一行标注出了周几的信息

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s32g6qmboMzv_kh_HBk4CrJ4ewxxGzOVtCtEzHuo0pDg/https://mmbiz.qpic.cn/sz_mmbiz_png/amNzwarODHiayAaBv8Az5ciagSgVuibAjOL7f5Ucn9BXt3Mz8J30PK26g1dJpffURK0maVViaUic4ATOuP51u4kb94Q/640?wx_fmt=png&from=appmsg)

![](https://proxy-prod.omnivore-image-cache.app/0x0,slKBYwbYcRBNrMrq8yIg5UIieN7Mm1T7yxNuobDXu6WA/https://mmbiz.qpic.cn/mmbiz_svg/fFgUJknhibCwEIazWjJibMneevntha54xDF1wayQWZTJMjCgJGmpFTqqNtMWvBLIHzSJu591DpCGeTHYQKL9oQicawWnjSb6F2z/640?wx_fmt=svg&from=appmsg)`const data = []const date = new Date()// 生成随机数据，在下面添加 summaryfor (let i = 0; i <= 366; i++) { const month = date.getMonth()+1 const day = date.getDate() const monthStr = month < 10 ? '0'+month:month+'' const dayStr = day < 10 ? '0' + day:day+"" const fullDate = date.getFullYear() + '-'+monthStr+'-'+dayStr data.push({  date: fullDate,  value: day,  summary: "Wow太卷了，在"+fullDate+"贡献数达到了 " + day  // 自定义提示文案 }) date.setDate(date.getDate() - 1)}const options = {    days: 365,    title: 'Contributions in the last 365 days ',    data: data,    graphType: 'calendar' // 切换为 month-tack}renderContributionGraph(this.container, options)`

## 未来

当然，目前的集成方式对不懂代码的用户来说有一定的门槛，但是由于刚刚起步，我在插件的底层设计上（API 层面）会投入更多的时间，从而保证它具有足够优秀的扩展能力去支撑未来的需求。

当设计趋于稳定后，我会再去简化用户体验，从而降低该插件的使用门槛，普渡大众......

## 后记

重要的事情说三遍：免费！免费！免费！

该插件是我用业余时间，出于爱好开发并分享的，如果你觉得不错，可以点个赞，也可以请我喝杯咖啡。

项目开源地址

* https://github.com/vran-dev/obsidian-contribution-graph

  
​

![](https://proxy-prod.omnivore-image-cache.app/0x0,sztHen2zKglbooc8jnRanh8F2QK9kejIH_eS7fuz0zAU/data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"%3E%0A%3Cpath d=\"M12.8974 15.5585L14.9719 13.484L16.2447 14.7568L12.3519 18.6497C12.1566 18.8449 11.84 18.8449 11.6448 18.6497L7.75195 14.7568L9.02475 13.484L11.0974 15.5567L11.1 4.99976L12.9 5.0002L12.8974 15.5585Z\" fill=\"black\" opacity=\"0.3\"/%3E%0A%3C/svg%3E) 继续滑动看下一个 

