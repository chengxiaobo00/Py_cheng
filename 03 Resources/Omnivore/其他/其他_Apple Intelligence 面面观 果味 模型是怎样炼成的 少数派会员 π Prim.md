---
id: b826e7f5-4039-409e-90f4-3f687c83d56e
title: |
  Apple Intelligence 面面观：「果味」模型是怎样炼成的？ ｜ 少数派会员 π+Prime
author: |
  广陵止息
tags:
  - RSS
date_saved: 2024-06-28 17:57:58
date_published: 2024-06-28 17:57:58
---

# Apple Intelligence 面面观：「果味」模型是怎样炼成的？ ｜ 少数派会员 π+Prime
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/apple-intelligence-p-prime-1905ed698f7)
[Read Original](https://sspai.com/prime/story/apple-intelligence-the-making-of)

<DIV id="readability-content"><DIV data-omnivore-anchor-idx="1" class="page" id="readability-page-1"><div data-omnivore-anchor-idx="2" data-v-46e372cc=""><div data-omnivore-anchor-idx="3" data-v-46e372cc=""><!----> <p data-omnivore-anchor-idx="4" data-v-46e372cc="">挖掘 Apple Intelligence 公开文档中值得一聊的细节，帮你对这个 Apple 今年最重视的领域有更深入的认识。</p> <hr data-omnivore-anchor-idx="5" data-v-46e372cc="">  <article data-omnivore-anchor-idx="6" data-v-46e372cc=""><p data-omnivore-anchor-idx="7">在 WWDC24 的主题演讲（Keynote）上，Apple 用前半场的时间快速介绍了 iOS 18、iPadOS 18、watchOS 11 和 macOS Sequoia 等的新系统，而下半场都留给了 Apple Intelligence。</p>
<p data-omnivore-anchor-idx="8">虽然目前还不能在测试版系统中使用 Apple Intelligence，但已经公开的文档中已经有很多值得一聊的细节。将在这篇文章中，我们将为你挖掘这些信息，希望能让你对这个 Apple 今年最重视的领域有更深入的认识。</p>
<h2 data-omnivore-anchor-idx="9">功能回顾与观察</h2>
<p data-omnivore-anchor-idx="10">在深入细节之前，先用简短篇幅回顾一下 <a data-omnivore-anchor-idx="11" href="https://www.apple.com/apple-intelligence/" target="_blank">Apple Intelligence 的功能</a>：</p>
<ul data-omnivore-anchor-idx="12">
    <li data-omnivore-anchor-idx="13"><strong data-omnivore-anchor-idx="14">写作工具：</strong>根据上下文和用户选择的语气生成适应于不同情况的内容，校对内容、给出建议和一键改正，以及总结内容。</li>
    <li data-omnivore-anchor-idx="15"><strong data-omnivore-anchor-idx="16">邮件中的增强功能：</strong>识别并置顶重要邮件、邮件列表中默认显示关键总结、自动总结长对话串邮件，以及找出邮件中的问题并给出回复建议等。</li>
</ul>
<figure data-omnivore-anchor-idx="17" figcaption=""><p data-omnivore-anchor-idx="18"><img data-omnivore-anchor-idx="19" data-omnivore-original-src="https://cdnfile.sspai.com/2024/06/28/002fc21f16621b981f65cb708aeb7dc3.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sECAv3DH16L6IUYCwW-AdHAz1Vi38T6EcZI67cEtqdw8/https://cdnfile.sspai.com/2024/06/28/002fc21f16621b981f65cb708aeb7dc3.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" alt="" data-original="https://cdnfile.sspai.com/2024/06/28/002fc21f16621b981f65cb708aeb7dc3.jpg?imageView2/2/format/webp" data-index="0">
      </p><p data-omnivore-anchor-idx="20"><img data-omnivore-anchor-idx="21" data-omnivore-original-src="https://cdnfile.sspai.com/2024/06/28/a0fca9a1f16f2fe4dd1b4b153b5ff4f9.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s56fF-2nF0e2tIkg8kdKDZZYKpYlMpPTUjd5inwMAaIc/https://cdnfile.sspai.com/2024/06/28/a0fca9a1f16f2fe4dd1b4b153b5ff4f9.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" alt="" data-original="https://cdnfile.sspai.com/2024/06/28/a0fca9a1f16f2fe4dd1b4b153b5ff4f9.jpg?imageView2/2/format/webp" data-index="1">
      </p></figure>
<ul data-omnivore-anchor-idx="22">
    <li data-omnivore-anchor-idx="23"><strong data-omnivore-anchor-idx="24">智能通知功能：</strong>识别并置顶重要通知、总结同一应用的多条通知，以及「减少打扰」（Reduce Interruptions）模式，开启后仅显示可能需要立即关注的通知。</li>
    <li data-omnivore-anchor-idx="25"><strong data-omnivore-anchor-idx="26">备忘录和电话中的转写和总结功能：</strong>用户可录制音频并转写成文本，以及生成内容摘要。（语言转文字模型根据目前的消息来看是支持中文的。）</li>
    <li data-omnivore-anchor-idx="27"><strong data-omnivore-anchor-idx="28">图片生成功能：</strong>Image Playground 支持输入提示词生成图片，或者选择题材、配饰、地点、相册人物等素材为基础生成，生成图像时可以选择动画、插图或素描这三种风格。此外，Genmoji 功能可以从文字和照片生成类似 emoji 的表情符号，并在消息文本中使用。</li>
    <li data-omnivore-anchor-idx="29"><strong data-omnivore-anchor-idx="30">照片功能：</strong>可以用自然语言搜索特定的照片、视频片段，还用清理工具清理照片中的杂乱内容等等。</li>
</ul>
<figure data-omnivore-anchor-idx="31"><img data-omnivore-anchor-idx="32" data-omnivore-original-src="https://cdnfile.sspai.com/2024/06/28/39f0837c51a3157f5464039656f9673a.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sn-d8A6bo1kIx0cn587uO_Rr7olHszRafAmbJUDiwFjM/https://cdnfile.sspai.com/2024/06/28/39f0837c51a3157f5464039656f9673a.png?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/06/28/39f0837c51a3157f5464039656f9673a.png?imageView2/2/format/webp" data-index="2"></figure>
<ul data-omnivore-anchor-idx="33">
    <li data-omnivore-anchor-idx="34"><strong data-omnivore-anchor-idx="35">Siri 增强功能：</strong>（终于）改进了 Siri 的表现，能够学习屏幕中显示的内容，并根据上下文、用户背景信息、使用习惯等等，更自然地响应用户提出的需求。</li>
</ul>
<p data-omnivore-anchor-idx="36">总体看下来，Apple Intelligence 功能的主要思路是「增强现有功能」，和系统、上下文紧密结合，目的是给出符合用户偏好和需求的结果。</p>
<p data-omnivore-anchor-idx="37">从 Apple Intelligence 的呈现形式，也可以看得出 Apple 对于 AI 技术的态度：它应该落地为有实际场景的具体功能，而不是「聊天机器人」这样宽泛的「语言界面」。这也显著区别于目前另一种「AI 多功能代理」思路，那种思路希望支持多模态的通用模型能根据宏观任务描述，自行制定步骤，接管各种软件功能。至少从 Apple Intelligence 目前的设计来看，苹果仍然认为 AI 是一项技术，而不是产品。</p>
<p data-omnivore-anchor-idx="38">顺带一提，尽管发布会上给了 ChatGPT 一些镜头，官网页面也提到了 ChatGPT，但可以认为它并不严格属于 Apple Intelligence 的一部分，最多只是个「过客」。从功能上说，ChatGPT 在今秋发布的系统中只是增加了一个快捷入口，属于纯粹的可选功能。根据现有报道看，Apple 也在同步和其他模型厂商谈合作，OpenAI 只是先谈成的选项之一。从长远分析，Apple 引入 ChatGPT 应该也只是为了利用现成解决方案，让功能快速上线，未来肯定是不会甘于长期依赖外部服务的。</p>
<h2 data-omnivore-anchor-idx="39">果味模型的炼成</h2>
<p data-omnivore-anchor-idx="40">本质上，Apple Intelligence 是基于 Apple 训练的生成式模型封装而成的一系列用户向功能。目前，已经公布的 4 个模型包括一个 3B（30 亿）参数的设备端语言模型、一个参数量更大（未公布）的服务端模型、一个图像扩散生成模型，以及一个 Xcode 代码生成模型。</p>
<p data-omnivore-anchor-idx="41">从官方公布的<a data-omnivore-anchor-idx="42" href="https://machinelearning.apple.com/research/introducing-apple-foundation-models" target="_blank">技术信息</a>来看，Apple 的模型训练过程基于成熟的方法流程：收集数据、预处理、预训练、后训练、优化。但 Apple 在训练工具上则另起炉灶：机器学习时所用的硬件据传采用的是 M2 Ultra，而不是更常用的 Nvidia 显卡；机器学习框架采用的是 Apple 自己研发的 AXLearn 框架，而不是更常用的 TensorFlow 或者 PyTorch。</p>
<figure data-omnivore-anchor-idx="43"><img data-omnivore-anchor-idx="44" data-omnivore-original-src="https://cdnfile.sspai.com/2024/06/28/article/36bdc67294295f7234d002046bf63c13.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sMYIGNgYkktV_kLBq5VgoDLA8RkhvCBkyGvXTcjynhwc/https://cdnfile.sspai.com/2024/06/28/article/36bdc67294295f7234d002046bf63c13.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/06/28/article/36bdc67294295f7234d002046bf63c13.png?imageView2/2/format/webp" data-index="3"></figure>
<p data-omnivore-anchor-idx="45">下面，我们将在官方信息的基础上补充背景知识，梳理一遍 Apple Intelligence 模型的训练流程，希望能让你有一个相对完整的理解。</p>
<h3 data-omnivore-anchor-idx="46">模型训练</h3>
<h4 data-omnivore-anchor-idx="47">预训练</h4>
<p data-omnivore-anchor-idx="48">预训练阶段的训练任务很简单直接，就是根据前文预测下一个词。在模型预训练这一步，Apple 用了多种不同类型的并行处理技术，分别对数据、模型和序列长度训练。其中，序列长度主要反映了一个模型可以处理的、最大文本长度，也可以理解成一个模型的记忆力，序列长度越长模型的记忆力自然也就越好。</p>
<p data-omnivore-anchor-idx="49">训练任何模型都绕不开并行处理技术，这个技术本质上是为了大幅提高训练效率和处理大规模数据的能力，除了 Apple 自研的 AXLearn 框架，PyTorch、SageMaker 等业界通用框架也有各自实现并行处理的方式。</p>
<figure data-omnivore-anchor-idx="50"><img data-omnivore-anchor-idx="51" data-omnivore-original-src="https://cdnfile.sspai.com/2024/06/28/article/a8ea7662158e5105492e4fc1c3bb5aec.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sd9NvY6Jl-S9wZFhNRF-U9OCirB1xqqlyWpSdATQbXqU/https://cdnfile.sspai.com/2024/06/28/article/a8ea7662158e5105492e4fc1c3bb5aec.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/06/28/article/a8ea7662158e5105492e4fc1c3bb5aec.png?imageView2/2/format/webp" data-index="4"></figure>
<p data-omnivore-anchor-idx="52">GPT-3 的预训练过程</p>
<p data-omnivore-anchor-idx="53">同时 Apple 在预训练的时候也剔除掉了个人敏感信息、脏话和其他低质量的信息，同时用算法删除重复内容、并提高高质量内容的权重。这一步同样也是大多数模型在预训练时会做的操作，比如 Google 在关于 Gemma 的论文里也提到了类似步骤。</p>
<h4 data-omnivore-anchor-idx="54">后训练</h4>
<figure data-omnivore-anchor-idx="55"><img data-omnivore-anchor-idx="56" data-omnivore-original-src="https://cdnfile.sspai.com/2024/06/28/article/dd0bb44604f3c42caa81bbb29af092e9.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sGo7qUHix-wPbJc3Nzlh-Y0V2z-W9uakkU4R1AIWV3E0/https://cdnfile.sspai.com/2024/06/28/article/dd0bb44604f3c42caa81bbb29af092e9.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/06/28/article/dd0bb44604f3c42caa81bbb29af092e9.png?imageView2/2/format/webp" data-index="5"></figure>
<p data-omnivore-anchor-idx="57">GPT-3 的后训练过程</p>
<p data-omnivore-anchor-idx="58">在后训练中，主要工作就是微调模型来打磨模型输出时的质量，Apple 用了两种微调手段来提高模型质量：</p>
<p data-omnivore-anchor-idx="59">基于教师委员会的拒绝采样微调（RFT）算法；</p>
<p data-omnivore-anchor-idx="60">基于镜像下降策略优化和留一法优势估计的强化学习人类反馈（RLHF）算法。</p>
<p data-omnivore-anchor-idx="61">相信光看名字大家就已经有要关掉这个页面的冲动了，但先别急可以打个不太严谨但便于理解的比方。如果说训练模型就像厨师在做菜的话，预处理就像是把买到的菜切掉不好的地方、预训练就像是找适合的菜谱并把菜切好，而后训练才是真的在做菜。</p>
<figure data-omnivore-anchor-idx="62"><img data-omnivore-anchor-idx="63" data-omnivore-original-src="https://cdnfile.sspai.com/2024/06/28/article/159fbb4448baac7d573cf0452e841df3.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sb-dSXnJ4YbR-LYQeTYXH48sh7SVJ4uuidbh9jkyuHd8/https://cdnfile.sspai.com/2024/06/28/article/159fbb4448baac7d573cf0452e841df3.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/06/28/article/159fbb4448baac7d573cf0452e841df3.png?imageView2/2/format/webp" data-index="6"></figure>
<p data-omnivore-anchor-idx="64">打分机制</p>
<p data-omnivore-anchor-idx="65">基于教师委员会的拒绝采样微调（RFT）算法，就像是你请会做菜的爸妈（教师委员会）站在你旁边看着你做菜，并给你给你每一步打分数，做错了分数自然就低，做得好的就给你打高分（拒绝采样算法）。这样你就知道哪一步有问题马上可以针对性地去改，这样下次做出来的东西也会更好吃（模型输出的质量也就更高）。</p>
<figure data-omnivore-anchor-idx="66"><img data-omnivore-anchor-idx="67" data-omnivore-original-src="https://cdnfile.sspai.com/2024/06/28/article/fcdfc304a3d4c377ea6642102910d9d1.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sZaQv_NEL2ADtd0FKV-B3W13T-nHnXQ8fL8fEzgmNSBQ/https://cdnfile.sspai.com/2024/06/28/article/fcdfc304a3d4c377ea6642102910d9d1.png?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/06/28/article/fcdfc304a3d4c377ea6642102910d9d1.png?imageView2/2/format/webp" data-index="7"></figure>
<p data-omnivore-anchor-idx="68">拒绝采样微调（RFT）算法在很多模型的后训练阶段都有涉及，比如 LLaMA 模型就有采用。但具体算法上就有区别，比如 Apple 的叫教师委员会算法，不同算法的区别就在这里不详细展开了。</p>
<figure data-omnivore-anchor-idx="69"><img data-omnivore-anchor-idx="70" data-omnivore-original-src="https://cdnfile.sspai.com/2024/06/28/article/23a61ca0f52c5df55b073b567edccb20.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sJD_9dUmq20KjCTxR4HON28YceQ-GxzmvMbX1Ruum5LE/https://cdnfile.sspai.com/2024/06/28/article/23a61ca0f52c5df55b073b567edccb20.png?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/06/28/article/23a61ca0f52c5df55b073b567edccb20.png?imageView2/2/format/webp" data-index="8"></figure>
<p data-omnivore-anchor-idx="71">人类写反馈打磨模型</p>
<p data-omnivore-anchor-idx="72">基于镜像下降策略优化和留一法优势估计的强化学习人类反馈（RLHF）算法，和上面的类似，但会更加个性化。你做完了菜，爸妈（RLHF 算法）会根据你实际的情况（模型）给你反馈，比如这个可能是你第一两次做，口味有些偏差也无可厚非，但爸妈就会夸你做的还不错。</p>
<figure data-omnivore-anchor-idx="73"><img data-omnivore-anchor-idx="74" data-omnivore-original-src="https://cdnfile.sspai.com/2024/06/28/article/d58af8fc4c47c9c50984658a52451308.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,scGfTMlKlDeaSmSf4pEBouCJlMuk3XNpYXF6GpQm6qsM/https://cdnfile.sspai.com/2024/06/28/article/d58af8fc4c47c9c50984658a52451308.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/06/28/article/d58af8fc4c47c9c50984658a52451308.png?imageView2/2/format/webp" data-index="9"></figure>
<p data-omnivore-anchor-idx="75">找出问题，下次训练的时候额外把关</p>
<p data-omnivore-anchor-idx="76">进一步地，爸妈（RLHF 算法）还能找出为什么口味会出现问题的原因，并给出具体建议（数据点），还帮你在下次做菜过程里额外把把关（留一法优势估计）。</p>
<p data-omnivore-anchor-idx="77">最后，爸妈还会让你在下次做饭的时候撒一点调料就稍微尝尝味道（镜像下降策略优化），防止你一次性就把调料撒多了，让你做出来的饭菜口味更好。</p>
<figure data-omnivore-anchor-idx="78"><img data-omnivore-anchor-idx="79" data-omnivore-original-src="https://cdnfile.sspai.com/2024/06/28/article/f44dbf9a9d83dcbc0ab33c3ed65763cc.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,spNVSxogPu7jBJ9OdJmck9Hp7ECDK4IJWjfur5z3vesc/https://cdnfile.sspai.com/2024/06/28/article/f44dbf9a9d83dcbc0ab33c3ed65763cc.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/06/28/article/f44dbf9a9d83dcbc0ab33c3ed65763cc.png?imageView2/2/format/webp" data-index="10"></figure>
<p data-omnivore-anchor-idx="80">GPT-3 只用 RLHF 和拒绝采样微调就有了相当大的改善</p>
<p data-omnivore-anchor-idx="81">RLHF 算法同样是很多模型后训练阶段中重要的算法，OpenAI 就曾经<a data-omnivore-anchor-idx="82" href="https://sspai.com/link?target=https%3A%2F%2Fopenai.com%2Findex%2Finstruction-following%2F" target="_blank">表示</a>过 GPT-3 系列中用到了RLHF 算法。只不过和拒绝采样微调（RFT）算法一样，Apple 采用的两个具体算法和 GPT-3 所使用的也有区别，受限于篇幅这里也就不做展开了。</p>
<h4 data-omnivore-anchor-idx="83">优化</h4>
<p data-omnivore-anchor-idx="84">在优化阶段，主要是让模型更好、更快、更省电地运行在 Apple Silicon 的相关设备上，不仅是 iPhone、iPad 和 Mac，还包括了可能搭载 M2 Ultra 的私有云上。</p>
<p data-omnivore-anchor-idx="85">首先就是采用了「分组查询注意力机制」，这个机制可以继续打个比方，就像是做菜的时候，根据菜谱可以把不同的备菜分成一组一组的备菜，每组都是不同菜品的备菜。这样做某道菜的时候，只需要看那一组备菜就可以了，不用前后左右从一大桌备菜里找菜。模型这样做也可加快处理速度，还可以在保持高性能的同时减少所需计算资源的消耗。</p></article>    </div> <div data-omnivore-anchor-idx="86" data-v-791783f8="" data-v-46e372cc=""><p data-omnivore-anchor-idx="87">阅读信息</p> <div data-omnivore-anchor-idx="88" data-v-791783f8=""><p data-omnivore-anchor-idx="89"><span data-omnivore-anchor-idx="90" data-v-791783f8="">全文字数</span> <span data-omnivore-anchor-idx="91" data-v-791783f8="">4884字</span></p> <p data-omnivore-anchor-idx="92"><span data-omnivore-anchor-idx="93" data-v-791783f8="">阅读本文共需</span> <span data-omnivore-anchor-idx="94" data-v-791783f8="">8分钟</span></p> <p data-omnivore-anchor-idx="95"><span data-omnivore-anchor-idx="96" data-v-791783f8="">字号选择</span> <span data-omnivore-anchor-idx="97" data-v-791783f8=""><label data-omnivore-anchor-idx="98" data-v-791783f8=""><p data-omnivore-anchor-idx="99">小</p> </label> <label data-omnivore-anchor-idx="100" data-v-791783f8=""><p data-omnivore-anchor-idx="101">中</p> </label> <label data-omnivore-anchor-idx="102" data-v-791783f8=""><p data-omnivore-anchor-idx="103">大</p> </label></span></p></div></div></div></DIV></DIV>

