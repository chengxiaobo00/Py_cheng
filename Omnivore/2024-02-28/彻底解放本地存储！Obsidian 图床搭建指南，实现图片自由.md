---
id: 6facf2ee-3876-4d09-a30f-10e3ec2632ff
title: |
  彻底解放本地存储！Obsidian 图床搭建指南，实现图片自由
author: |
  致九
tags:
  - Obsidian
date_saved: 2024-02-28 17:59:14
date_published: 2024-02-28 09:41:00
---

# 彻底解放本地存储！Obsidian 图床搭建指南，实现图片自由
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-t-7-hc-vw-auy-iszhp-xt-ljdi-4-a-18def26a00a)
[Read Original](https://mp.weixin.qq.com/s/t7HcVWAuyIszhpXtLjdi4A)

原创 致九  致九THINKS _2024-02-28 09:41_ _广东_ 

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sQCAB9QgAhZdBicJp-cNdwVmCA-ptLjKBBiYlc79wyJY/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX242vuQDQmEChMM5Ryo8Hib6zNU0n7CjvibFRgLeF8td34gQaVbuwAsicmwj3LbXpvTqiaB1pDRUvAPlQ/640?wx_fmt=png&from=appmsg)

作者 | 致九

发布 | 微信公众号：致九 THINKS

日期 | 2024.02.28  
提示 | 全文约 2000 字

## 速览

Markdown 中的图片  
使用图床  
创建一个专属图床  
使用 Picgo 上传图床图片  
在 Obsidian 中自动上传图片

## Markdown 中的图片

Obsidian 用户往往有一个问题：图片该怎么管理？

印象笔记、OneNote 使用的是富文本编辑器，图片与文档结合在一起，导出的文档是一个特殊的格式，这个格式本质上是一个压缩包，压缩包内包含了文档和图片的原始文件。

但是 Obsidian 中的 Markdown 文档可不是这样处理图片的。

因为 Markdown 文档是纯文本，所以文档和图片是**分离**的。

在 Obsidian 中，使用图片有两种方式：  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sszjyL1ypHXD8CeFCAxu8rjHWZColGcl3l6MrcjZ0GZA/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX242vuQDQmEChMM5Ryo8Hib6qCn65mfWDLgYia4fr69eDAexZV6R6PD6fQMdN4c2unwS7PdBJGCicMQg/640?wx_fmt=png&from=appmsg "image.png")

1. 使用本地图片，用的是 `![[图片名.jpg]]` 这个语法。
2. 使用在线图片，用的是 `![图片描述](图片地址)`。

将图片展示在文档中是 Obsidian 软件的事情，它会负责渲染图像，最终将图片展现在界面中。

自始至终，在 Markdown 文档中，使用图片的地方就是**一串有特殊格式的文本**。

## 使用图床

如果你常用 Obsidian 来完成一些需要发布、分享的内容，我推荐你用「图床」这种图片的管理方式。

图床是一个专门用来存储和管理图片的服务器。

将一张图片上传服务器上，将获得一个专属的图片链接，通过这个链接可以在 Obsidian 中引用显示该图片。

有了图床后：

1. **图片不用管理**。图床中的图片是不管理的，随时用图、随时传图。
2. **迁移方便**。万一以后你不想用 Ob 了。直接带走 md 文件就行了，图片显示完全不受影响。
3. **加快笔记同步速度**。因为原来占空间的图片不用在本地保存，整个 Obsidian 笔记仓库的大小急剧缩小，自然同步速度就加快了。

以下部分我们来一步一步的创建一个自己的图床，并且配合一些软件和插件，来大大提高使用图床图片的效率。

## 创建一个专属图床

可以选择用腾讯云对象存储（简称 COS）来创建一个图床。

注意：这是一项收费服务，但是一年花费极低，预计一年只需要花费 10-20 元，一杯咖啡、几瓶可乐的钱就能用一年，还是挺划算的。

在腾讯云的官网注册账号：https://cloud.tencent.com

登陆后，进入控制台，搜索「对象存储」，进入到对应的产品菜单中。

接下来按照步骤开始创建一个存储桶，存储桶可以理解就是一个存储图片的远程硬盘

step 1：点击「创建存储桶」

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sIaX7uvwpXNS-gP-QhekL1GKugFAB1sJugmXD8_DC2OE/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX242vuQDQmEChMM5Ryo8Hib6MSgnrLCiaZgKhOK54774ZFwcwibxEKU7prib42D6zFbS21a4683ibgjImQ/640?wx_fmt=png&from=appmsg "image.png")

step 2: 填入存储桶的各项信息，访问权限选择「公有读私有写」、「公有读写」之一，建议选「公有读私有写」。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sPQADWbqOuwh_S4oaS9x0iiiz_U0BOtOh6m0LQFHSioY/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX242vuQDQmEChMM5Ryo8Hib6Kkmqjt45iaIPdpiaGFwKXEHWWaFnSPvpLRq04mbm9x2U7TDyya1w6yPA/640?wx_fmt=png&from=appmsg "image.png")

step 3: 使用存储桶。往存储桶中上传图片可以在腾讯云的控制台后台中手动上传：

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sjVcSKAq-oTdGCCajPaYDwucWT_aiQCfV68nLNfsnDH0/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX242vuQDQmEChMM5Ryo8Hib6vASaRibIico1yndVaU263Jz4JDnMaQtIM07XLDBuEWWRtsFwZnpNaLbQ/640?wx_fmt=png&from=appmsg "image.png")

腾讯云 COS 目前默认是按日计费，一天花费几分钱，往账户充 10 块能用很久。

或者可以加购资源包，我买的是**存储资源包**，很久都没有扣过费用了。

## 使用 Picgo 上传图床图片

在网站后台上传也太不讲究效率了，让我们更进一步，实现自动上传图片到图床。

这需要借助一款开源的图床上传工具，名为**Picgo**。

Picgo 官方地址：https://picgo.github.io/PicGo-Doc/zh/

如果无法访问，可以在公众号中回复「图床」获取安装包链接。（mac、windows）。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s3Q0i255Mca3iuDwApSmEPDZZLP6XCn_XN-KuuVHQuT4/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX242vuQDQmEChMM5Ryo8Hib6WjLhiaNt7Hr8ODhLW8iavJcnxTamKoBsowy2bNxQ693w79PCCGlc6ehg/640?wx_fmt=png&from=appmsg "image.png")

安装后，还需要配置自己的图床服务器，可以按照下面的步骤来配置：

1. 选择腾讯云 COS ，版本默认 V5。
2. SecretID 、SecretKey、AppID，在 “密钥管理” 页面中**新建**并获取填入。页面链接地址：访问密钥 - 控制台 https://console.cloud.tencent.cn/cam/capi
3. 存储空间名、存储区域，在 “存储桶列表” 页面中获取并填入。页面链接地址：存储桶列表 - 对象存储 - 控制台 https://console.cloud.tencent.cn/cos/bucket
4. 将该图床设置为「**默认图床**」

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s2AE2Yg4G0EBotY81yd9qNYVEBzjvuEAyFhefdf-4fMY/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX242vuQDQmEChMM5Ryo8Hib67NuZxhiaOJQTm9RGz3E4iayTfhMG1QCCt1IRfg75beI2GLNJSjblQ3Sg/640?wx_fmt=png&from=appmsg "image.png")

配置完成后，在 picgo 的主窗口的上传区域就能通过拖拽、选择来上传图片。

对于复制到剪贴板的图片，macos 在顶部可以点击一下托盘等待上传的图片，就会自动上传（不确定 windows 有没有对应的小技巧，windows 的朋友可以摸索一下）。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s2e8wvDk1h_zVRZEuYc5JUlyWDU33j1YW-mDmY4iQgSQ/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX242vuQDQmEChMM5Ryo8Hib6uialPALIgNF7Fzb9WrKLhvW43SicSSQUD5GPlI6spX5tXcN9J5AqncOQ/640?wx_fmt=png&from=appmsg "image.png")

最后，回到 Obsidian，提高图片上传图床效率的插件也早就有了：Image Auto Upload 插件。

Image Auto Upload 插件的功能就是当你将剪贴板的图片粘贴在 obsidian 编辑器中时：

1. 自动调用 Picgo 上传图片到图床，
2. 在编辑器中自动粘贴到图片的图床链接。

使用 Image Auto Upload 也很简单，安装并且启用 Image Auto Upload 插件，设置使用默认的就行。

如果无法访问插件市场，可以在公众号中回复「图床」获取安装包链接。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s3Q0i255Mca3iuDwApSmEPDZZLP6XCn_XN-KuuVHQuT4/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX242vuQDQmEChMM5Ryo8Hib6WjLhiaNt7Hr8ODhLW8iavJcnxTamKoBsowy2bNxQ693w79PCCGlc6ehg/640?wx_fmt=png&from=appmsg "image.png")

注意：需要保证 Picgo **在后台运行**，picgo 可以设置为开机自动启动

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s0e8P0L0JJIlyUn2VeGfhlediiRGSi3pWzp_Ake_g59s/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX242vuQDQmEChMM5Ryo8Hib6dSUeQpsfrazhJ5EwZ726TOIRiaAI1T8NB95Cbz9RB3z2QnLoHSa0rew/640?wx_fmt=png&from=appmsg "image.png")

只要 Image Auto Upload 开启着，未来在 obsidian 中粘贴的图片都会上传到图床。

对于以前的存量图片，可以使用命令面板中的 「upload all images」上传当前笔记的所有图片，大家可以用这种方法慢慢缩减本地仓库中的图片。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sjNZ_AzUzSOdHtghKvimEBgo2oWGY32V0JyjmpX0JGrg/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX242vuQDQmEChMM5Ryo8Hib6FYWicb0WS0vtaLkOme42PvF2kUgndYzSmmia3AI47dVn4NfvzxAq7icFg/640?wx_fmt=png&from=appmsg "image.png")

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sMI_9ERA8it2-LQ0HoJuH9wmar-yUEdRmgXmS0zI2zpM/https://mmbiz.qpic.cn/sz_mmbiz_jpg/7EZ0IQOFRX3l9RXCEZLewhHR4FkgHFKFficFkgnLh69xnE06Dp29XFF76NJEb0DPxIDsjMzL9rQzOhXY4GKyyzg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

## 相关阅读

* [2023年已过，请查收一份Obsidian专栏总结](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzMDAwMTA4MA==&mid=2247485268&idx=1&sn=80f5ce25803faf3300cc08299452712c&chksm=c201be83f5763795608cbee436a0bba82bbcb0d73b7cb8e060bf3c50a4ff9ffcbc14cf6109c3&scene=21#wechat%5Fredirect)

学习群 1 群已经满 500 人了，新创了个 2 群，欢迎入群交流，已经进了 1 群的无需重复入群

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s_nfMEaVCsJ8ZLUHJ_OHRshs6s0TYCK3JOyTjdgSlB00/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX242vuQDQmEChMM5Ryo8Hib6Iiaa1icHia7fMfzNjYxncWswAjJFFEaeQBxwCGCxzRSVWkxj24lGZCDMg/640?wx_fmt=png&from=appmsg)

## 其他：咨询

我的付费咨询服务，提供 Dataview 定制化查询案例、QuickAdd 定制化脚本、定制化插件、或任意其他咨询问题。

费用、服务内容、渠道可以参考：[👉 定制化服务，为你的Obsidian之旅助力](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzMDAwMTA4MA==&mid=2247484774&idx=1&sn=4de4ab117bb922f0eb13265708f65165&chksm=c201bcb1f57635a74765a506962afbdc01b61ba024433f113660f7a2e5666c40a022852a9045&scene=21#wechat%5Fredirect)

## 其他：Dataview 教程

不妨看看我的 Dataview 教程专栏，目前已更新：

* [👉 初识 Dataview](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzMDAwMTA4MA==&mid=2247484989&idx=1&sn=d0832440d10881a86de9858d673d5e88&chksm=c201bfeaf57636fc58c7202ceb3d4a23ababedb8c18a066feaaa6c29117dddc79d4af6fdbf6b&scene=21#wechat%5Fredirect)
* [👉 YAML 元数据字段 与 LIST 查询](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzMDAwMTA4MA==&mid=2247485034&idx=1&sn=45c93411ab42fa827e84a756f1fc2ed9&chksm=c201bfbdf57636abc656cb40057884bc81f7107a0b29d0f5cd2c9045ca59e139fdbe651f0839&scene=21#wechat%5Fredirect)
* [👉 Table 查询与更多的数据命令](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzMDAwMTA4MA==&mid=2247485103&idx=1&sn=8d713be070f887467cee11b515934ff4&chksm=c201bf78f576366e06f2f4f2c6ee36f34d09d12859b90cb02304d01e6bf85adef9b75611e2be&scene=21#wechat%5Fredirect)
* [👉 在obsidian中掌握dataview的task查询，时间管理很简单](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzMDAwMTA4MA==&mid=2247485152&idx=1&sn=c0025b610c4681029e580e673eb9e623&chksm=c201bf37f5763621fdaa760acfb99196a7001c3946ea04dd7895557b52fb27e8a64e27ccc29d&scene=21#wechat%5Fredirect)
* [👉 掌握Obsidian dataview的Calendar查询与函数](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzMDAwMTA4MA==&mid=2247485167&idx=1&sn=6f6baf4f8217dcc33d2a0c621c6c059a&chksm=c201bf38f576362e3c2509b41bda2c1548639626e42a4440fd3d32520157771a8bd1abb2b176&scene=21#wechat%5Fredirect)
* [👉 Dataview 实战：聚合同一标签的列表项、待办任务](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzMDAwMTA4MA==&mid=2247485184&idx=1&sn=3aeb14d2fad173004027404b40856e02&chksm=c201bed7f57637c1c097e927c5af5dfaac500bee72cb18790469eca5452cb8d2f986e03e5447&scene=21#wechat%5Fredirect)
* [👉 学会 Dataview 内嵌DQL查询，Obsdian的笔记内容动起来](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzMDAwMTA4MA==&mid=2247485213&idx=1&sn=ce5d608775e23e9b3be612c0d5b71620&chksm=c201becaf57637dcd1dced1738897693b4dfb8284343cd8fcee2e06dff7d8cee9e17f86c00da&scene=21#wechat%5Fredirect)

![](https://proxy-prod.omnivore-image-cache.app/0x0,sztHen2zKglbooc8jnRanh8F2QK9kejIH_eS7fuz0zAU/data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"%3E%0A%3Cpath d=\"M12.8974 15.5585L14.9719 13.484L16.2447 14.7568L12.3519 18.6497C12.1566 18.8449 11.84 18.8449 11.6448 18.6497L7.75195 14.7568L9.02475 13.484L11.0974 15.5567L11.1 4.99976L12.9 5.0002L12.8974 15.5585Z\" fill=\"black\" opacity=\"0.3\"/%3E%0A%3C/svg%3E) 继续滑动看下一个 

