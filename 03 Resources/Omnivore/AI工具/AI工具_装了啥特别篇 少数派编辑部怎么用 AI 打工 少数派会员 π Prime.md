---
id: 37d63de2-9a44-4bda-bcb6-f4d9ccabfa02
title: |
  装了啥特别篇：少数派编辑部怎么用 AI 打工？ ｜ 少数派会员 π+Prime
author: |
  少数派编辑部
tags:
  - RSS
date_saved: 2024-07-26 18:18:02
date_published: 2024-07-26 18:18:02
---

# 装了啥特别篇：少数派编辑部怎么用 AI 打工？ ｜ 少数派会员 π+Prime
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/ai-p-prime-190ef1c19f9)
[Read Original](https://sspai.com/prime/story/zhuanglesha-240726)

<DIV id="readability-content"><DIV data-omnivore-anchor-idx="1" class="page" id="readability-page-1"><div data-omnivore-anchor-idx="2" data-v-4785f258="" data-v-46e372cc=""><div data-omnivore-anchor-idx="3" data-v-46e372cc=""><!----> <p data-omnivore-anchor-idx="4" data-v-46e372cc="">编辑部的几位成员介绍了 AI 工具在日常工作中的实际应用。</p> <hr data-omnivore-anchor-idx="5" data-v-46e372cc="">  <article data-omnivore-anchor-idx="6" data-v-46e372cc=""><p data-omnivore-anchor-idx="7">按：AI 对媒体的影响一直众说纷纭。少数派编辑部（套用一个经典句式）可以说是「站在科技和媒体的十字路口」，AI 对我们的日常工作不是一个「用不用」的问题，而是「怎么用」的问题。本期《装了啥》中，我们就请编辑部的几位成员介绍一下 AI 工具在日常工作中的实际应用，或许也能对你有所启发。</p>
<h2 data-omnivore-anchor-idx="8">批量处理文字格式</h2>
<p data-omnivore-anchor-idx="9"><a data-omnivore-anchor-idx="10" data-mention="@张奕源Nick" user-id="bs2p1gdb34tch27964m0" href="https://sspai.com/u/nicholaszhang">@张奕源Nick</a>：在 ChatGPT 走红之后我就注意到了这款工具。在我看来，以 GPT 为代表的大语言模型最大的意义就是降低了人类与机器沟通的门槛，电脑终于可以相对准确地理解模糊的自然语言，并将其归纳成有条理的指令或结果。因此，当 ChatGPT 面向公众开放之后，我就开始尝试将其纳入工作流。</p>
<p data-omnivore-anchor-idx="11">我使用 ChatGPT 最高频场景之一就是处理文字格式。有一个冷门但非常实用的用法，还是我跟甜食老师学来的——</p>
<p data-omnivore-anchor-idx="12">在使用《Reaper》等工具剪辑播客时，我会在剪辑的时候同步标记时间戳，剪完之后就能直接导出，方便生成播客章节。但是，《Reaper》导出的时间戳格式是这样的：</p>
<figure data-omnivore-anchor-idx="13"><img data-omnivore-anchor-idx="14" data-omnivore-original-src="https://cdnfile.sspai.com/2024/07/26/article/49d7ad2b95d95abda9310b96182526ed.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s0RPCxkL_WN5jHUnWD3jl21UPZIIritY6NRQIbwtFRQE/https://cdnfile.sspai.com/2024/07/26/article/49d7ad2b95d95abda9310b96182526ed.png?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/07/26/article/49d7ad2b95d95abda9310b96182526ed.png?imageView2/2/format/webp" data-index="0"></figure>
<p data-omnivore-anchor-idx="15">理论上来说，使用文本编辑器配合正则表达式进行替换就能将之变成简洁、规范的格式，但对我这种代码苦手来说还是有点麻烦。而且写好的规则还得另行保存，以便每次用到的时候调取，需求本来不大，步骤却增加了不少。</p>
<p data-omnivore-anchor-idx="16">用 ChatGPT 就简单多了。只要先告诉 GPT 我想做什么：</p>
<blockquote data-omnivore-anchor-idx="17">
    <p data-omnivore-anchor-idx="18">Can you help me adjust the format of the text? Please remove the "M1,", "M2,", etc. at the beginning of each sentence, and remove the decimal part of the timestamp at the end of each sentence. Then, move the timestamp to the front of each sentence and format it as 00:00:00.</p>
</blockquote>
<p data-omnivore-anchor-idx="19">接下来，它就会自动处理：</p>
<figure data-omnivore-anchor-idx="20"><img data-omnivore-anchor-idx="21" data-omnivore-original-src="https://cdnfile.sspai.com/2024/07/26/article/8c0c483aed5ff69c29cd6ee1eb45af61.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,skOhbNpsi1-Y_R2TmB-OA5aiNZyVSV_01vrGSiXbcV2g/https://cdnfile.sspai.com/2024/07/26/article/8c0c483aed5ff69c29cd6ee1eb45af61.png?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/07/26/article/8c0c483aed5ff69c29cd6ee1eb45af61.png?imageView2/2/format/webp" data-index="1"></figure>
<p data-omnivore-anchor-idx="22">使用 ChatGPT 更方便的一点是可以让它记住以上操作，并且每次都做相同处理。一次写 prompts，终生自动化，省时省力。</p>
<p data-omnivore-anchor-idx="23">类似的操作在我的工作流中还有很多，尤其随着 GPT 模型的升级，除了其对话和理解力越来越强之外，每次对话支援的文本长度也越来越多，我目前已经可以把一整篇文章丢进去让它一次性清理格式、插入中西文空格、统一替换标点符号等，大幅降低了重复性工作的时间成本。</p>
<h2 data-omnivore-anchor-idx="24">边写边聊，核查事实、获取灵感</h2>
<p data-omnivore-anchor-idx="25"><a data-omnivore-anchor-idx="26" data-mention="@克莱德" user-id="bs2p00tb34tch278ngkg" href="https://sspai.com/u/clyde">@克莱德</a>：和编辑部的其他同事不同，我开始使用 AI 工具辅助工作的时间其实算晚的。生成式 AI 爆火的那段时间，少数派后台也有过不少直接由 ChatGPT 生成的投稿，那种「先说结论+有序列表拆解原因+『总的来说』式收尾」的结构是那么显眼，又是那么无趣——如果没有高超的提示语引导，AI 和「创作」二字在我看来完全没有半点关联——而我又没那么多兴趣和精力去钻研提示语工程。</p>
<p data-omnivore-anchor-idx="27">用王树义老师在《<a data-omnivore-anchor-idx="28" href="https://sspai.com/post/78289">如何高效使用 ChatGPT？</a>》一文中的话来说就是认识没摆正，再加上那段时间试用 ChatGPT 和 Bard（后来改名 Gemini）的体验确实也不算太好，「AI 解放生产力」这件事就因此搁置了。</p>
<p data-omnivore-anchor-idx="29">直到去年 9 月，早前集成在 Bard 当中的 Google 搜索功能从「话题探索」摇身一变成为了「事实核查」的辅助角色，我才正式开始了将 AI 工具融入到文章写作的流程当中。</p>
<figure data-omnivore-anchor-idx="30"><img data-omnivore-anchor-idx="31" data-omnivore-original-src="https://cdnfile.sspai.com/2024/07/26/article/6894fdcf3a81f71e450509259b10e13b.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,ssSoYIg1h3XpkA_kROqZyiKTbgspsKJ4INj5urF4B5HU/https://cdnfile.sspai.com/2024/07/26/article/6894fdcf3a81f71e450509259b10e13b.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/07/26/article/6894fdcf3a81f71e450509259b10e13b.png?imageView2/2/format/webp" data-index="2">
    <figcaption data-omnivore-anchor-idx="32">Gemini 的 Google 搜索核查功能</figcaption>
</figure>
<p data-omnivore-anchor-idx="33">我并不需要 AI 来帮我写作，但在稿件撰写过程中，我偶尔会先将写作话题抛出来让 AI「跑一跑」，看看大模型们会如何针对这个选题展开论述、它们用什么结构梳理这个问题，如果站在读者的视角，哪些地方又是可以简化处理的。</p>
<p data-omnivore-anchor-idx="34">当然了，虽然在少数派的内容创作一般而言还谈不上什么 writer’s block，因为某个特定细节不确定该如何展开、或某些关键概念自己都不算特别明白的时候，文章的写作往往也会因为这些障碍陷入停滞。最后回过头会发现遍地都是「想写但没能填完的坑」。所以写作过程中我也经常带着一些更为明确的问题去寻求 AI 的帮助，比如如何用尽可能通俗的方式解释某个专业名词、用比喻的方式说明两个概念之间的关系等。在一些带有科普性质的选题写作中，类似的问答自然也有被大模型那种「自以为是」的幻觉带偏的风险，因此在找到我认为可以采用的内容后，借助 Gemini 的 Google 搜索核查功能评估内容和数据的可靠程度也是必不可少的一环。</p>
<figure data-omnivore-anchor-idx="35"><img data-omnivore-anchor-idx="36" data-omnivore-original-src="https://cdnfile.sspai.com/2024/07/26/article/f1fc60d0086f63eba21ca7604af955e8.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,siYufTn9tTXxsc3Vhfs1mtN5QeZg9ulhCZfgbytqhbfE/https://cdnfile.sspai.com/2024/07/26/article/f1fc60d0086f63eba21ca7604af955e8.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/07/26/article/f1fc60d0086f63eba21ca7604af955e8.png?imageView2/2/format/webp" data-index="3">
    <figcaption data-omnivore-anchor-idx="37">能够随时捡起之前的话题继续聊，也是你可以靠大模型「切磋」内容创作的原因之一</figcaption>
</figure>
<p data-omnivore-anchor-idx="38">Gemini 针对中文搜索核查的效果其实非常有限，但聊胜于无。并且因为平时这种「你会怎么做」的用法和场景比较多，不久前我又开始从 Gemini 转向了和我使用场景更贴近、功能设计思路也更符合我对 AI 工具期望的 Perplexity，它的「发现」功能在我看来就是一个更有趣的「维基百科」，时不时打开扫一眼就能捕捉一些近期热门的资讯和话题，在关键资讯的图文和内容排版上 Perplexity 也做得清晰、直观，既是搜索引擎也是热点「懒人包」。</p>
<figure data-omnivore-anchor-idx="39"><img data-omnivore-anchor-idx="40" data-omnivore-original-src="https://cdnfile.sspai.com/2024/07/26/article/669e701ea33dbbdabb6bfb2ee7032b0b.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,szpP64ZqjtEsiUi_62DVIRf00r5M5KBmXWRjqlUUP9zQ/https://cdnfile.sspai.com/2024/07/26/article/669e701ea33dbbdabb6bfb2ee7032b0b.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/07/26/article/669e701ea33dbbdabb6bfb2ee7032b0b.png?imageView2/2/format/webp" data-index="4">
    <figcaption data-omnivore-anchor-idx="41">最近 Perplexity 用得比较多，尤其喜欢「每日一则 wiki」式的发现板块</figcaption>
</figure>
<p data-omnivore-anchor-idx="42">说到底在写作这件事情上，我觉得我需要的是一个能够时不时闲聊几句、期待在此过程中找到选题展开思路的「写作搭子」，在做好事实核查、保证信息可靠性的前提下，它能让你跳出自己积累多年的写作习惯和写作风格，提供一些截然不同的创作视角以供参考。</p>
<p data-omnivore-anchor-idx="43">就像王树义老师说的，摆正认识，在写作过程中拥有这样一位辅助也不会反过来给使用者带来太大的心理压力——你看我还是没有花时间去学习怎么写提示语。</p>
<h2 data-omnivore-anchor-idx="44">寻找技术概念的浅易解释</h2>
<p data-omnivore-anchor-idx="45"><a data-omnivore-anchor-idx="46" data-mention="@广陵止息" user-id="bs2p0slb34tch279012g" href="https://sspai.com/u/kgguxr0e">@广陵止息</a>：作为编辑部里的好奇星人，自从 ChatGPT 上线之初我就好奇 GPT 背后的技术原理，在通读了相当多的资料以后，我发现 GPT 本身就是个串词游戏——从上文中找到词和与之关联的词，然后根据训练的素材，找到其他和之前词有关的其他词，最终根据一些优先级将词组拼接成句。这种存在一定「想象力」的输出方式，让我迫不及待地用在了一些简单改稿工作中。</p></article>    </div> <div data-omnivore-anchor-idx="47" data-v-791783f8="" data-v-46e372cc=""><p data-omnivore-anchor-idx="48">阅读信息</p> <div data-omnivore-anchor-idx="49" data-v-791783f8=""><p data-omnivore-anchor-idx="50"><span data-omnivore-anchor-idx="51" data-v-791783f8="">全文字数</span> <span data-omnivore-anchor-idx="52" data-v-791783f8="">3844字</span></p> <p data-omnivore-anchor-idx="53"><span data-omnivore-anchor-idx="54" data-v-791783f8="">阅读本文共需</span> <span data-omnivore-anchor-idx="55" data-v-791783f8="">6分钟</span></p> <p data-omnivore-anchor-idx="56"><span data-omnivore-anchor-idx="57" data-v-791783f8="">字号选择</span> <span data-omnivore-anchor-idx="58" data-v-791783f8=""><label data-omnivore-anchor-idx="59" data-v-791783f8=""><p data-omnivore-anchor-idx="60">小</p> </label> <label data-omnivore-anchor-idx="61" data-v-791783f8=""><p data-omnivore-anchor-idx="62">中</p> </label> <label data-omnivore-anchor-idx="63" data-v-791783f8=""><p data-omnivore-anchor-idx="64">大</p> </label></span></p></div></div></div></DIV></DIV>

