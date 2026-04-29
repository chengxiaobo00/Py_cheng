---
id: adcaf08d-f7f8-48b6-9424-c75cbbedd6c6
title: |
  Kimi的高阶玩法，偷偷超越90%的人
author: |
  渡码
date_saved: 2024-04-14 23:46:44
date_published: 2024-04-12 00:20:00
---

# Kimi的高阶玩法，偷偷超越90%的人
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-oln-kh-4-o-5-o-tg-tpen-y-1-ydy-aa-18edd4a01aa)
[Read Original](https://mp.weixin.qq.com/s/OLNKh4o5oTGTpenY1YdyAA)

![cover_image](https://proxy-prod.omnivore-image-cache.app/0x0,sdes-dFOTgZRtEKgGkctA8snEkyb-vwaw6foc4c1Umbc/https://mmbiz.qpic.cn/sz_mmbiz_jpg/PojicEpVKKn8wV8s4tUNFpe4o3HdbQqsfkanhOkSoFMzKbLNtmB9Vvu53xxVkuKCU5Pd8VMLK9ic6wibLCaOQd7tw/0?wx_fmt=jpeg) 

原创  渡码  渡码 _2024-04-12 00:20_ _北京_ 

> 讲AI，靠得住，蓝色字体求关注

大模型 Kimi 火了，可以算是国产大模型的骄傲了。

今天给大家分享Kimi的高阶玩法，充分发挥大模型的能力。

Kimi输入框最右边，第一个图表就是**快捷常用语**，点开之后可以添加常用语。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s_a8HRAq-feB16s7CQZ0KiFCBDNV2M5UgKNXrfozVqHk/https://mmbiz.qpic.cn/sz_mmbiz_png/PojicEpVKKnibJTsH0Z4I3L0OHP7RC8ibskGlGhVQ5PzjGR9PJ4N6CMKRPn37sLXnetcsOpciaib2wyaWtwqRjNjvhQ/640?wx_fmt=png&from=appmsg)

这个常用语其实就是一个 prompt。

比如，我每次让大模型翻译Markdown格式的英文资料时，都会强调返回的内容保持原来的格式。  

这时候，我就可以把这个 prompt 做一个**快捷提示语**，免得每次翻译都要输出相同的内容。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sb3SM928W3NXKQriBnD4CVLC14N8tzRGB8MgG1m2QMKY/https://mmbiz.qpic.cn/sz_mmbiz_png/PojicEpVKKnibJTsH0Z4I3L0OHP7RC8ibskHuQvTdf1gWOtU939EIicqZ3Uk83KfW7HHh9jC94GciaCpOcpIBzeNXnQ/640?wx_fmt=png&from=appmsg)

这样，我下次再有翻译需求，直接点这个**快捷提示语**就可以了。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s_HOpYeR6AJy-h4eaSSPvLxPM4jA-EKwTF5aGLOrP79g/https://mmbiz.qpic.cn/sz_mmbiz_png/PojicEpVKKnibJTsH0Z4I3L0OHP7RC8ibskQGtrr33szOA5WPYAAIFUibCiaqqOAmbXNibbfKBUInYU8GU9Z8a6MWdCg/640?wx_fmt=png&from=appmsg)

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sh0zSj8_bRhj5gfqFSB8TRAI3sEV0g6eG_-vqyAIMsrs/https://mmbiz.qpic.cn/sz_mmbiz_png/PojicEpVKKnibJTsH0Z4I3L0OHP7RC8ibskUO9CPuRbo3XkPMRdNB1K5wTDHibIRc1sE0lfBUicNf7kCxO4gsLJHGqg/640?wx_fmt=png&from=appmsg)

这时候你心里肯定会想，你管这叫高阶？  

下面咱们就上点强度！

其实现在大部分人使用大模型，都是上面这种用法，一句简短的 Prompt ，描述一个单一的任务。  

然而，我们需要的是把大模型强大的能力发挥出来，为我们完成一个复杂的任务。

比如：你想让大模型帮你写论文，如果你的 Prompt 是“写一篇xxx论文，字数5000字。” 这就相当不合理。  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sX155pabx2W-oVXMZ4a_NnSTVgckaJhDtTyG8tTEGc6U/https://mmbiz.qpic.cn/sz_mmbiz_png/PojicEpVKKn8wV8s4tUNFpe4o3HdbQqsfd8I39HPicnCeZZmE7zpFV7nuFnibWhBwJVibtvMB2ia4yDhAhIgAPSo9bg/640?wx_fmt=png&from=appmsg)

而正确的方式是，让大模型变成一个论文写作的智能体，你给大模型定义一系列任务，让它来完成，但为了避免它一条道走到黑，在它执行每项任务时候需要跟你确认详细信息，得到你的点播。

这么说可能有点抽象，来个实际例子

`## Role : 本科论文写作导师` `## Profile :` `- author: 渡码` `- version: 0.1` `- language: 中文` `- description: 你是一名经验丰富的本科生导师，能够指导学生写出优秀的毕业论文。` `## Goals :` `1. 严格按照写作要求，写出一篇符合本科要求的论文` `## Constrains :` `1. 使用 Markdown 格式` `2. 体现学术创新性` `## Skills :` `1. 拥有丰富的本科论文指导经验` `2. 能够强大的需求理解能力` `## Workflow:` `1. 引导用户输入需要写作的论文方向` `2. 根据用户提供的[论文方向]，为用户提供几个选题` `2. 根据用户确认的[选题]生成论文大纲，并向用户确认是否合理，如果用户觉得不合理，需要重新生成，如何合理，执行下一步` `3. 按照生成的[论文大纲]，生成每一小节的内容，没生成一节，需要与用户确认是否合理` `## Initialization :` `向用户简单介绍你自己, 严格按照 [Workflow] 开始工作`

输入到 Kimi 中看下效果

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sFX26PRA_im2FP1zryBB-offjbzXOYI0fFhUel__N5ss/https://mmbiz.qpic.cn/sz_mmbiz_png/PojicEpVKKn8wV8s4tUNFpe4o3HdbQqsfk9DicuhP9lNDriaSyaf43r78AKjn5FackzosIICrfRRopCiaMJGjMM60g/640?wx_fmt=png&from=appmsg)

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sEnchzuGLuCIS8vV_GJEPJUBpJF2ffY8ojS59cd58eQE/https://mmbiz.qpic.cn/sz_mmbiz_png/PojicEpVKKn8wV8s4tUNFpe4o3HdbQqsfqTI9K3ZibzgxL66iaeJIcA0NqzF3sesbSM03NRGvzLEk8WjTff1UiaPRQ/640?wx_fmt=png&from=appmsg)

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sZv3_iPhKiX9AIbexfvTtgY7IGDIdfBZMCqjcse5n1Jg/https://mmbiz.qpic.cn/sz_mmbiz_png/PojicEpVKKn8wV8s4tUNFpe4o3HdbQqsfrH9X0EFIetGCVicX09443DD9ub1rRd2iareMDOLlciaVWphibOpS9tTbBA/640?wx_fmt=png&from=appmsg)

可以看到 Kimi 已经按照我们的设定，一步一步工作了。  

这种结构化的提示词，其实现在大家比较常用的，下面简单提炼下基本结构

* \## Role: <name> : 角色设定，让大模型干什么
* \## Profile author/version/description : 这个提示词的作者信息和描述
* \## Goals: 一句话描述 Prompt 目标
* \## Constrains: 描述限制条件
* \## Skills: 描述Prompt拥有的技能项, 强化对应领域的信息权重
* \## Workflow: Prompt需要完成的任务工作流
* \## Initialization: 初始化

这里的英文不是一定要用这些单词，你也可以用中文，也可以任意增减项，只要能清晰描述给大模型就可以。

我上面给出的案例是非常简单的，一个优秀的 Prompt 需要你不断地迭代，打磨，所以 Profile 中有个版本号。每次迭代的版本都可以放到**快捷提示语**，方便随时使用。  

最复杂的 Prompt 当属 Mr. Ranedeer，在 GitHub上开源，目前已经迭代了十多个版本，最新版本的Prompt有2600个单词。

里面的任务不是简单的串行任务，有逻辑判断的分支任务，甚至还有自己定义的函数，非常复杂，感兴趣的朋友可以研究。  

其实这种结构化Prompt在最早是用在 ChatGPT 上的。然而为什么说是 Kimi 的高阶用法，因为Kimi是国产的，大家都能轻松用上，并且这种复杂的 Prompt，在国产大模型中，Kimi 的表现是接近的 ChatGPT 的。

GPT，我这里有共享的，需要的朋友关注我。 

**渡码**公众号持续分享AI方面的应用、技术、资讯，欢迎关注。

