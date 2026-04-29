---
id: 02b605be-46cd-4827-afdf-3abf600ca817
title: |
  个性化知识管理 | 使用 Obsidian 打造独特的个人图书馆
author: |
  余月鱼鸽
tags:
  - Obsidian
date_saved: 2023-12-02 17:40:08
date_published: 2023-12-02 04:00:00
---

# 个性化知识管理 | 使用 Obsidian 打造独特的个人图书馆
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-lqy-g-eb-xek-fzp-m-ge-lk-6-gf-9-q-18c29e62c83)
[Read Original](https://mp.weixin.qq.com/s/LqyGEbXEKFzpMGeLk6gf9Q)

 余月鱼鸽  PKMer 知识社区 _2023-12-02 04:00_ _发表于陕西_ 

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sz8mnntouFxVx1eI-FQsErcRg1knPLJhk-BYqzYSOu9o/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfMgAA4zSBvibMChFC6dt45G4od4Zbe7GZY3WQacUvzgrR3ZTbIIFmNmehE3Cux0m1XAo3iaLpxkEWvA/640?wx_fmt=png)

**点击上方蓝字 关注星标不迷路**

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sz8mnntouFxVx1eI-FQsErcRg1knPLJhk-BYqzYSOu9o/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfMgAA4zSBvibMChFC6dt45G4od4Zbe7GZY3WQacUvzgrR3ZTbIIFmNmehE3Cux0m1XAo3iaLpxkEWvA/640?wx_fmt=png)

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sK003OSwGLRpYRLTC15Cdi-LtKt17rrGgF-ROTFagYvQ/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfMgAA4zSBvibMChFC6dt45G4cDyRiahrW6hm0jC722Q7tDXF8aNgjDQ8Qicg1I50zLu2GQMTGR7rqr0w/640?wx_fmt=png)

本文首发于PKMer网站，信息可能已经过时，点击文末左下角 **阅读原文** 获取最新信息

## 个人图书馆简介

在梳理读书笔记时，发现自己有将【微信读书】的笔记整理入库的需求。优秀的 obsidian 的插件市场上已经有：obsidian-weread-plugin 插件可以解决手动导入笔记的问题，但懒癌入骨的我萌生了一个想法：如果我可以直接在文库内阅读、做笔记的话，那我将可以直接省略掉：从外部导入笔记的过程。

简单的实验后，我折腾出了一个简易版的个人图书馆，大致效果如下：

1. 可以通过主页的快捷按钮打开【个人图书馆】
2. 在个人图书馆中可以通过对 yaml 数据的筛选或排序快速定位书籍

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,saNe1dxzGn0sEnxg5BpmLmrK3r-WZ-2t6msU95irunNY/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTfqyJZelGOWdBAjZ3OzQ3dIZOjiaZF1qeGtAsn6cia8qIdicvMS37Er6jw/640?wx_fmt=png&from=appmsg)

1. 点击书籍后，可以直接查看书籍的基础信息并进行阅读![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s6lpIDkgf8mv2HnJraTD5PFRyQ851pAUkrNGqDF4tJ6s/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTHTLC9Te7sMdVkBAvPVjpIT0ohD0ZhjJWRMT6Bf1fICZAdNcmNicCRwQ/640?wx_fmt=png&from=appmsg)

## 构建方式

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sJQS986mwJJKOjXWbSrmgi9EYIiOJQpiPmpft8rKqJxw/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTGBMozzDWZb5n20sfMxBnicJDAKyKSxmoAVwgblIJymF4kmJ7aQjqgFA/640?wx_fmt=png&from=appmsg)

个人图书馆的构建方式比较简单，大致为以下 4 个步骤：

1. 创建书籍卡片
2. 构建图书馆雏形
3. 导入书籍（或构建库外链接）
4. 设置库内快捷打开方式

值得注意的是，不追求 All in one 以及美观的话，前 2 个插件即可满足需求。

### 1.创建书籍卡片

这个步骤，我使用的是 douban 插件。该插件可以导入豆瓣中的 电影/书籍/音乐/电视剧/日记/游戏等内容的信息，并支持自己 diy 数据模板。

这个软件的使用方式很友好，具体为：

#### 1.1 设置数据模版

obsidian-douban-plugin 插件的作者内置了一套模板，按照说明复制、黏贴即可正常使用。为了美观考虑，我自己 DIY 了一套模板，具体可参考：\[附件：豆瓣读书导入模板\]( https://pkmer.cn/show/20231120182924 )

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sJQS986mwJJKOjXWbSrmgi9EYIiOJQpiPmpft8rKqJxw/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTGBMozzDWZb5n20sfMxBnicJDAKyKSxmoAVwgblIJymF4kmJ7aQjqgFA/640?wx_fmt=png&from=appmsg)

#### 1.2 过一遍设置即可导入书籍

douban 插件的设置默认为中文，这里就不展开了。

1.2.1 设置完成后即可按【ctrl + p】在命令面板中输入【douban】即可开始信息导入。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,ssTdGTVnpPopeIrQX6wXiRuwd8afkXYQSRtwTKioZ5tA/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WT4DW1NFQiaEiatEIvBMmmOibgIoTIvicO1k8JTAE0kBYSw0ryW0WtuEjqtQ/640?wx_fmt=png&from=appmsg)

1.2.2 在搜索框输入书籍名称开始查询：

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sMui39hv-N4zplCPTgAYWG3QXJhV2pVmF_7GuuohtmCM/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTxIfciadjIcflAHMKfFk0ad1cSTvm4aFIgnWJPiaYlmZ5UuNDard3jdMg/640?wx_fmt=png&from=appmsg)

1.2.3 选择自己想要的书籍版本即可录入书籍信息。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sgRKZrMkWy-VYjyqP0Py4ugo__Xdsw7Z5wDCapktRIQs/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTwdJqhwCLDESUFbQ4vGC2BgnciavArLETDxOE7be97jOYwhciblnRd5CQ/640?wx_fmt=png&from=appmsg)

1.2.4 录入效果：

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s6lpIDkgf8mv2HnJraTD5PFRyQ851pAUkrNGqDF4tJ6s/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTHTLC9Te7sMdVkBAvPVjpIT0ohD0ZhjJWRMT6Bf1fICZAdNcmNicCRwQ/640?wx_fmt=png&from=appmsg)

### 2.构建图书馆雏形

这个步骤，我使用的是 projects 插件，插件支持了：包括 表格、看板、日历、画册等多种视图样式，我的个人图书库使用到的是表格、画册两种视图。

这个软件的使用方式也很友好，具体为：

#### 2.1 安装完插件后，直接创建项目（不需要进行设置）

2.1.1 按【ctrl + p】在命令面板中输入【projects】，选中【新建项目】即可

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,saDf6gzUs5-Ah46PmiQu4lBc2n6kjwJJWIvxJWRgR740/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTILExUJa2JlhmbpYAicF4xbUJ3zTUibnRnncE3Q4eNcuFtMTwMt8AWubw/640?wx_fmt=png&from=appmsg)

2.1.2 projects 支持的信息源主要有 3 种，个人更推荐使用标签（上方提到的 \[\[附件-豆瓣读书导入模板\]\] 默认设置好标签）

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,svf2U9nF2o4Y22jjwHveUxkY4u4YJh0hzL977wk8WCjM/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WT1odHicVy98hsM6ea4ibFbMymiaFgpkNBic5w1H7FRTcsqMuTibCQvTGhC9w/640?wx_fmt=png&from=appmsg)

2.1.3 设置完毕后，可以获得一个类似这样只有表格的界面。这个时候在右侧的【 + 】点击创建【画册】即可。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sO64UtPsMKVIxetUY_GitIBFNZi-jw7MZbGPRMXxLnmQ/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTkwHBKYicmZb4WNcGqOOwBQiba2F7824TcuUDBrS4PS0ZsaQDY5sBIplA/640?wx_fmt=png&from=appmsg)

值得注意的是，书籍的图片需要有个数据源，如果没有设置的话，默认会为空（如下图所示）。上方提到的 \[\[附件-豆瓣读书导入模板\]\] 默认设置好了【封面】数据源，在画册界面进行勾选即可。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s9kUJMmYOl4-zbLwB3xDCAR8tp57ETgXdRXaA-HHYHBY/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTgVSeK4zKibdspIOD2mGSGXzPwPrVjR9XlatJQrUNIWt6BDxzOCy1tBg/640?wx_fmt=png&from=appmsg)

### 3.导入书籍（或构建库外链接）

书籍导入方面不做太详细的展开，目前我了解到的方式大致有以下几种：

1.将 epub 电子书转成 md 文件，录入到库中。插件以及使用方式可以在中文论坛中查到：https://forum-zh.obsidian.md/t/topic/23920 ；

2.直接使用 `[[ ]]` 引用 pdf 等附件 ；

3.使用库外引用的方式，引用电脑内的文件。可以使用 File path to URI 插件：将文件路径转换为 uri 以便更容易地使用链接到 Obsidian 之外的本地文件来实现。

### 4.设置库内快捷打开方式

简单来说就是用 button 将【创建书籍卡片】和【打开图书馆】的步骤简化。这个步骤，我使用的是 button 插件。

#### 4.1 安装完插件后，直接找个空文件创建按钮（不需要进行设置）

4.1.1 按【ctrl + p】在命令面板中输入【button】，选中【button maker】即可

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sYrFDP4_vE3MMN8pzAMP0kzHfUBUCsPZ6ETJo4Gwpcu8/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTP06fB8Kp192oIT4JHh2zBoO36Z9hHHKWPUibetF882l9vZzsMMUiardQ/640?wx_fmt=png&from=appmsg)

4.1.2 按【button maker】面板中进行参数设置：选中【command】选项后，即可把我们命令库的操作变成按钮。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s1Ty9pUyYf4qSFrjWFpjHp2Z6J85U1jg-lAYAGbMtGNQ/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTHUe8W5sIIAm8NYSGWpWSdApvjYztSd5QdtJbASkDelKOoiaGbE40KFA/640?wx_fmt=png&from=appmsg)

4.1.3 内嵌按钮，按【ctrl + p】在命令面板中输入【button】，选中【insert inline button】选中按钮的 id（上一个步骤设置按钮时设置的 id），即可复制这个按钮。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s1HhO5WPTSal2C7xA0djoUv8tsPim4hg5g81VRwvcJKc/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTYQ0mkwibqb690kLR0cfND7CPBGSl4hFoCFClicrNCYKS4nNjOqTSxkDg/640?wx_fmt=png&from=appmsg)

这个按钮可以嵌入到任何你想嵌入的文件内。我的侧边栏就使用了这样的按钮：

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sDV5q6EIc1vEP1NBnBkXNitLO539eBFZ0zeqZADbUEyU/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPnXZnFrD8v9q5Td2H7ib8WTYNDrx0kCvXtpib2iakEsKk1RM8Lwwiap9EgCJDM3I0rhibvCmTbanibra8Q/640?wx_fmt=png&from=appmsg)

  
**往期精彩**

* [软件联动的硬核工作流！自定义 Excalidraw 脚本，在建立库外 Eagle 素材库的连接](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzNTUyMTgwMA==&mid=2247484870&idx=1&sn=8a3834aed35e3987ae59885cebfb0cfe&chksm=c2adfea1f5da77b7ce69ae97b76082b9af7c3652d25b606972de17a5a0a0d54686a8ffd1191d&scene=21#wechat%5Fredirect)
* [PKMer挂件集市上新啦！一键拥有好看又好用的笔记挂件](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzNTUyMTgwMA==&mid=2247484870&idx=2&sn=913c5c27acb0eacd864c6c6d300c48a7&chksm=c2adfea1f5da77b7f59da45f752a88a79c7f05fe0d269705a1f5b3dfb6d965dcb3744b326dc8&scene=21#wechat%5Fredirect)
* [仪式感拉满，obsidian插件在你完成任务的时候来些喝彩](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzNTUyMTgwMA==&mid=2247484772&idx=1&sn=f7c8e80089e77a9326a97533842e262b&chksm=c2adfe03f5da7715acdbf9b55896ceb3a1ba77879702739363c607a9b4f69e28b395ec480f81&scene=21#wechat%5Fredirect)
* [Obsidian 巧妙应用：开启英语学习新思路](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzNTUyMTgwMA==&mid=2247484391&idx=1&sn=fc286d3299ddf5a65584f58fe887b51a&chksm=c2adf880f5da7196ca6ef4927b4f1761412382ac6740ce29f7b94c2df1e0a1ccb273a747c65b&scene=21#wechat%5Fredirect)

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sguOUFLamLG6AckIuOlqibizq3_dLAX1E6ZcDAx30HHc/https://mmbiz.qpic.cn/sz_mmbiz_gif/epTcXdtRjfMgAA4zSBvibMChFC6dt45G4FahVknzZOtyialibXqJ7HCvy2hmB305FQK9o5TOmCuVSywLzE16zOjibQ/640?wx_fmt=gif)

**求分享**

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sguOUFLamLG6AckIuOlqibizq3_dLAX1E6ZcDAx30HHc/https://mmbiz.qpic.cn/sz_mmbiz_gif/epTcXdtRjfMgAA4zSBvibMChFC6dt45G4FahVknzZOtyialibXqJ7HCvy2hmB305FQK9o5TOmCuVSywLzE16zOjibQ/640?wx_fmt=gif)

**求点赞**

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sguOUFLamLG6AckIuOlqibizq3_dLAX1E6ZcDAx30HHc/https://mmbiz.qpic.cn/sz_mmbiz_gif/epTcXdtRjfMgAA4zSBvibMChFC6dt45G4FahVknzZOtyialibXqJ7HCvy2hmB305FQK9o5TOmCuVSywLzE16zOjibQ/640?wx_fmt=gif)

**求在看**

end  

如有任何问题，加入PKMer群聊联系交流：  

![](https://proxy-prod.omnivore-image-cache.app/0x0,sjt01iZ_gv1vFdz3VEZNy4_qs0XjL1Bx5s81DW6JexOI/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfMgAA4zSBvibMChFC6dt45G4dynCwEv94dWatxcPGTAqHhlvPDuPWa5eud7nPmASaoUZALW2TIkmgg/640?wx_fmt=png)

**QQ群｜825255377**

**PKMer官网：https://pkmer.cn/**

