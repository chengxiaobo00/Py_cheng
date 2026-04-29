---
id: 1b343ad4-61c5-4091-9c77-6006984ae9ef
title: |
  还不知道Omnivore可以全文同步到Obsidian吗？
author: |
  致九
tags:
  - Omnivore
date_saved: 2023-11-04 11:07:38
date_published: 2023-11-03 12:09:00
---

# 还不知道Omnivore可以全文同步到Obsidian吗？
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-2-uw-ll-9-y-7-xmtkh-tjs-jh-ytw-18b984ccff1)
[Read Original](https://mp.weixin.qq.com/s/2uw-ll9Y7xmtkhTJSJhYtw)

原创 致九  致九THINKS _2023-11-03 12:09_ _发表于广东_ 

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s_-1GWW-AcvGtucJLM4MNyteUE1EEO0tzz5jlQ45Lh-o/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX3RohKskS5gBt48EYrDCzibmAiaSUsS0ddsmkibia3UHHiaJgfS8VEW6plxRxsfLBUsPAz1Dic6Unv6Krfg/640?wx_fmt=png)

作者 | 致九

日期 | 2023.11.03

小提示：全文约 1300 字

在以往的文章中提到了 Omnivore 来收藏网页文章、在其中阅读批注。

* [Obsidian搭配sioyek，技术大佬的阅读工作流](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzMDAwMTA4MA==&mid=2247484436&idx=1&sn=ce156d35f564659e6b12dcaeb033549e&chksm=c201bdc3f57634d5e4b8c73f572f3d74d08ac9c7b14f4f79dee60feeef27fbfe1b5cbce75eb9&scene=21#wechat%5Fredirect)
* [多种方法，帮你剪藏网页文章到obsidian中](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzMDAwMTA4MA==&mid=2247484401&idx=1&sn=df5e301d94ac8c7341a390f18bcbb478&chksm=c201ba26f576333085ce9ecf80728d15b15db356c9f627b684b6ba967d20b97ac112d2bee994&scene=21#wechat%5Fredirect)

值得称道的是，Omnivore 提供了专属的插件支持，方便一键将收藏的内容和批注同步到 Obsidian 的笔记仓库中。  

但是，很多朋友在使用的时候，会发现同步的时候只同步了网页的链接，而没有将收藏的网页内容同步过来。  

今天的更新将仔细讲讲如何设置 Omnivore，让它在同步的时候可以将全文同步到本地的 Obsdian 仓库。

1 申请 API Key

通过在 Ominvore 申请账号并登陆后，在右上角的头像处，点击头像，并选择「API Keys」选项。  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,snxIizpxDGPRBEyvVfOWxAVntJi8lxRE_tpT_r7tO9uU/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX3RohKskS5gBt48EYrDCzibmNshkLIk8J5x0xzzHKYsrlwgic4hnxyibN4iaiauV4adLhiaLOLN0Ag55veA/640?wx_fmt=png)

API key 是用来验证我们身份的，来使其他程序能够通过 API Key 与 Omnivore 交互，并获取到私人的数据，请保存好个人的 API Key。  

最开始你这里是干净的，一个 API key 都没有，需要通过小猴子旁边的「Create an API Key」按钮生成一个 API key，输入一个便于分辨的名字后，点击 Generate，然后点击 Copy，复制生成的 API key。  

注意⚠️：这里 API key 只会出现一次，不复制的话只能再重新生成一个了。  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sSmY7G1RJ6-pb7PeqYklZcy3zMw10PGwygieFlcp806A/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX3RohKskS5gBt48EYrDCzibmQmHXqaBPr2UWPBzUGW87tsX9fgQCQcYaibiaVa2g1C6ibtrlQIscUhx6g/640?wx_fmt=png)

2 设置Obsidian Omnivore 插件选项

接下来，你需要在 Obsidian 的第三方插件市场中安装 Omnivore 官方开发的 Omnivore->Obsidian 的同步插件。   

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sLFWqdiHfeN93Mh0TCFqHCOfIWy0hXGA15anThvUf10E/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX3RohKskS5gBt48EYrDCzibmjNeOFHJvlad4NlSibwDo7pBGHSM5Z6Xa9JeJEdnohPYU6ONL5eEJofg/640?wx_fmt=png)

在 Omnivore 插件设置中，首先需要在「API Key」处粘贴上我们之前生成的 API Key。   

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s1jT6yjHxL54nTGKAEzZ0yKoVHQmY8IUY0kfjaiCIJGg/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX3RohKskS5gBt48EYrDCzibm3Ju92H60bg5dRjjiawJP6mXSMnhUQKKW7ZsdticB5Ogv0ufuEciaUMiayQ/640?wx_fmt=png)

先不急着同步，我们再看下另外一个设置项目：「Article Template」文章模板。这个选项可以控制被同步的文章以什么样的格式存储在本地文件中。  

默认的模版其实并没有包含文章的全部内容，只是包含了标题、高亮、批注等内容。   

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sqp7c0T43taBOwvQeEnhFp-IlVP_zNYsdHkd-wllBLS0/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX3RohKskS5gBt48EYrDCzibmyFLv3LoprAkxnjZyDnTX4Hz8oGLo9G4ucMuN3LAoZ0bVyFH8qCFSSg/640?wx_fmt=png)

想要包含内容，我们只需要在模板中加上官方给出的模板字符串就行 ，通过点击该设置项目下方蓝色的链接，可以跳转到官方文档，文档右上方有切换语言的选项。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sUdS9OUVbZ6Pwog0O5RWIzGeyPIO65ARmk24xGTo9H6c/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX3RohKskS5gBt48EYrDCzibmkezxStjjmewkpRneJFKn4Eib1AdOqQmDibqWeib2XVUIthMGrHNCrkxow/640?wx_fmt=png)

可以看到，这里的模板功能非常灵活和强大，支持非常多的元数据，变量多到我一张图截不完，多阅读官方文档，按照自己的习惯，大家也能写出适合自己的内容模板 。   

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,swSUjZpH393oH19DbcQM5mQOAYnr_LHykjdcCzL4Fpvg/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX3RohKskS5gBt48EYrDCzibmCAOWQadagZnibjeIrGZhP7tPJQUnljpyZGHic78K4rRXdibRl1xnX631w/640?wx_fmt=png)

在其中，有专门教授如何导入完整文章内容的小节。   

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sksPpDQ-I6C3xByeIjf0WtQDtziueqW2esO1VLN4QNbQ/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX3RohKskS5gBt48EYrDCzibmoa2ic9jrVicZj9MVpiawN4PbNFfmBJVXwjGuHf6JyWMruP0NpSYrug8RA/640?wx_fmt=png)

当然，也可以直接复制我这里的模板：  

`#Omnivore` `OmnivoreURL: {{{omnivoreUrl}}}` `OriginURL: {{{originalUrl}}}` `  
` `{{{ content }}}` `  
` `{{#highlights.length}}` `## 高亮` `  
` `{{#highlights}}` `> {{{text}}} [⤴️]({{{highlightUrl}}}) {{#labels}} #{{name}} {{/labels}} ^{{{highlightID}}}` `{{#note}}` `  
` `{{{note}}}` `{{/note}}` `  
` `{{/highlights}}` `{{/highlights.length}}`

搞定了同步什么内容后，值得关注的还有存储到哪里。下面两个设置可以让你自定义文件、附件被存储到的位置。   

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sQlkhLZFHO38oL5MHMQy_KzMbYopXz4vGQB6V1Plmp8g/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX3RohKskS5gBt48EYrDCzibm9icSOyJhwgvgJicTAoktLIJG7xWJricJhtQHKXECncQdwgGxoLwf3IH4Q/640?wx_fmt=png)

基础的设置选项都完成后，点击左侧边栏的小图标或者命令面板中的 「Omnivore:sync」，就能一键同步所有 Omnivore 中剪藏、批注的内容了。  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sTWgnsOpdFgikhYzpjxF0hoQ8QrLQLcJDsshgSaWxVYs/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX3RohKskS5gBt48EYrDCzibmquc91QojNr7Og7m5A2FlC3CUHcSvKdr9kJULcThTwJctOJ7KOU3N7w/640?wx_fmt=png)

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s50Cts4EElbnBnkik5Hc7D1eOPUo8XzvxfMOre4W-v0s/https://mmbiz.qpic.cn/sz_mmbiz_png/7EZ0IQOFRX3RohKskS5gBt48EYrDCzibmgvSpxIQuEMBMUJ8NjHibXRzRnEOgfvzyibiaxNn50RMO9xf3tL9jzK3cQ/640?wx_fmt=png)

Omnivore 配合它的浏览器插件，以及高颜值的阅读、批注界面，还有 RSS、Newsletter 的订阅功能，再搭配 Obsidian 同步插件，这过程非常丝滑。  

稍后读、批注、存储……，在 Omnivore 中阅读的体验感觉非常好，推荐大家试用下这个清新、小众、免费、开源的好工具。  

OK，就这样，其他的相关知识大家可以通过 Omnivore 的官方文档中进行学习与实践。👉 \[欢迎来到 Omnivore | Omnivore 使用文档\](https://docs.omnivore.app/zh/)   

另外为了方便大家，Obsidian 的 Omnivore 插件可在「阅读原文」处获取。

其他：Obsidian学习互助群

我一直运营的Obsdian学习互助群，大家交流的气氛非常好，互相有什么问题都能很快得到群友的回复。

[Obsidian 学习互助群入群方式！](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzMDAwMTA4MA==&mid=2247484363&idx=2&sn=c8d75af32e1ce37a0bf1356441d1a352&chksm=c201ba1cf576330a2f7cd7cc95561c6ed566f563b8f68d99de86a11900aaff08d3f57c4555b1&scene=21#wechat%5Fredirect)  

其他：定制化服务

我的付费咨询服务，提供Dataview定制化查询案例、QuickAdd定制化脚本、定制化插件、或任意其他咨询问题。

费用、服务内容、渠道可以参考：[定制化服务，为你的Obsidian之旅助力](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzMDAwMTA4MA==&mid=2247484774&idx=1&sn=4de4ab117bb922f0eb13265708f65165&chksm=c201bcb1f57635a74765a506962afbdc01b61ba024433f113660f7a2e5666c40a022852a9045&scene=21#wechat%5Fredirect)

