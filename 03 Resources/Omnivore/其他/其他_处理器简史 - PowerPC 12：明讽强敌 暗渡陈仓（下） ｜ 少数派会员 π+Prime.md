---
id: c95d55ae-06f8-455b-a224-4e4e879e5019
title: |
  处理器简史 | PowerPC 12：明讽强敌 暗渡陈仓（下） ｜ 少数派会员 π+Prime
author: |
  MIG
tags:
  - RSS
date_saved: 2024-07-16 18:23:00
date_published: 2024-07-16 18:23:00
---

# 处理器简史 | PowerPC 12：明讽强敌 暗渡陈仓（下） ｜ 少数派会员 π+Prime
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/power-pc-12-p-prime-190bc597285)
[Read Original](https://sspai.com/prime/story/ppc-history-12)

<DIV id="readability-content"><DIV data-omnivore-anchor-idx="1" class="page" id="readability-page-1"><div data-omnivore-anchor-idx="2" data-v-46e372cc=""><div data-omnivore-anchor-idx="3" data-v-46e372cc=""><!----> <p data-omnivore-anchor-idx="4" data-v-46e372cc="">2001 年新年之际，Motorola 终于带着新工艺和新芯片展现在世人的眼前。但在合作伙伴的持续颓势下，苹果也逐渐将目光转向英特尔。</p> <hr data-omnivore-anchor-idx="5" data-v-46e372cc="">  <article data-omnivore-anchor-idx="6" data-v-46e372cc=""><p data-omnivore-anchor-idx="7">本系列回顾： <a data-omnivore-anchor-idx="8" href="https://sspai.com/prime/story/ppc-history-1">1</a> | <a data-omnivore-anchor-idx="9" href="https://sspai.com/prime/story/ppc-history-2">2</a> | <a data-omnivore-anchor-idx="10" href="https://sspai.com/prime/story/ppc-history-3">3</a> | <a data-omnivore-anchor-idx="11" href="https://sspai.com/prime/story/ppc-history-4">4</a> | <a data-omnivore-anchor-idx="12" href="https://sspai.com/prime/story/ppc-history-5">5</a> | <a data-omnivore-anchor-idx="13" href="https://sspai.com/prime/story/ppc-history-6">6</a> | <a data-omnivore-anchor-idx="14" href="https://sspai.com/prime/story/ppc-history-7">7</a> | <a data-omnivore-anchor-idx="15" href="https://sspai.com/prime/story/ppc-history-8">8</a> | <a data-omnivore-anchor-idx="16" href="https://sspai.com/prime/story/ppc-history-9">9</a> | <a data-omnivore-anchor-idx="17" href="https://sspai.com/prime/story/ppc-history-10">10</a> | <a data-omnivore-anchor-idx="18" href="https://sspai.com/prime/story/ppc-history-12">11</a></p>
<hr data-omnivore-anchor-idx="19">
<h2 data-omnivore-anchor-idx="20">姗姗来迟</h2>
<p data-omnivore-anchor-idx="21">2001 年新年之际，Motorola 终于带着新工艺和新芯片展现在世人的眼前。乔布斯欣喜若狂，为此他已经苦苦等待了一年多，在苹果 2001 年第一财年报告中，其兴奋之情溢于言表。</p>
<blockquote data-omnivore-anchor-idx="22">
    <p data-omnivore-anchor-idx="23">「上个季度，我们咽下了苦药，」苹果 CEO 史蒂夫·乔布斯说道，「今年伊始，我们将一鸣惊人：1 月带来全新的 PowerBook G4；2 月迎来 733MHz Power Mac G4；3 月，Mac OS X 也将闪耀登场。」</p>
</blockquote>
<p data-omnivore-anchor-idx="24">事实也的确如他所言，随着 Motorola 180nm 新工艺的成熟，G4 也成功地迎来了一次升级：Die 面积从 83mm² 降至 52mm²，生产成本有所降低；功耗也下降 15% 到 20%，放进苹果笔记本中已不成问题。</p>
<figure data-omnivore-anchor-idx="25"><img data-omnivore-anchor-idx="26" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/f98a26982d952ec046b96c34a6ce279d.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,seEQtUUmCseuiaI598KB5oW4rlYsQIY2BltdnTQdDYZY/https://cdnfile.sspai.com/2024/03/29/f98a26982d952ec046b96c34a6ce279d.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/f98a26982d952ec046b96c34a6ce279d.jpg?imageView2/2/format/webp" data-index="0">
    <figcaption data-omnivore-anchor-idx="27">采用上代 220nm 工艺的 G4「左」和采用 180nm 工艺的 G4「右」，可见 Die 面积有明显的缩小</figcaption>
</figure>
<p data-omnivore-anchor-idx="28">随着新工艺下的 G4 顺利生产，全新钛合金 PowerBook G4 在乔布斯的「One more thing」光环下闪亮登场。新增的 Velocity Engine 外加其干净利落的外观，不仅符合了乔布斯的「Power + Sex」标准，也让世人为之惊叹。</p>
<figure data-omnivore-anchor-idx="29"><img data-omnivore-anchor-idx="30" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/8442b1b2d64e554e34baa4d917925ef5.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,seCqlz331bDUNEO-8HRvynlQaTuFW-N9ArmvH4j8kM-0/https://cdnfile.sspai.com/2024/03/29/8442b1b2d64e554e34baa4d917925ef5.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/8442b1b2d64e554e34baa4d917925ef5.jpg?imageView2/2/format/webp" data-index="1">
    <figcaption data-omnivore-anchor-idx="31">虽然深受铰链断裂、掉漆的影响，但钛合金 PowerBook G4 仍在苹果历史中留下了浓墨重彩的一笔</figcaption>
</figure>
<p data-omnivore-anchor-idx="32">对位处高端桌面市场的 PowerMac 而言，新芯片的到来可谓是久旱逢甘霖，使之重新有了向英特尔叫板的资本。而对面的英特尔，也在这一节骨眼上亮相了谣传已久的奔腾 IV。一场血战即将来临。</p>
<h3 data-omnivore-anchor-idx="33">旧瓶装新酒</h3>
<p data-omnivore-anchor-idx="34">先看新 G4，其采用了与奔腾 III、奔腾 IV 同代的 180nm 工艺，也顺应时代潮流将 256KB 的 L2 缓存集成进 Die 中，并可选配 L3 缓存。晶体管数量翻了三倍多：从 1050 万提升至 3300 万。最重要的是，其终于打破了 18 个月来束缚苹果的 500MHz 桎梏：能够达到 733MHz 的频率，后续可在最高 867MHz 频率下运行。</p>
<figure data-omnivore-anchor-idx="35"><img data-omnivore-anchor-idx="36" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/76a9249378034fefe87edce53067d3d1.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sbtoLk1lgvtVBy0v7er-_50abDBfBdOKjnIf2D7Y-aXA/https://cdnfile.sspai.com/2024/03/29/76a9249378034fefe87edce53067d3d1.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/76a9249378034fefe87edce53067d3d1.jpg?imageView2/2/format/webp" data-index="2">
    <figcaption data-omnivore-anchor-idx="37">新 G4 外观，其正式名称为 PowerPC 7450</figcaption>
</figure>
<p data-omnivore-anchor-idx="38">但这并非超频版的 G4，微架构的大幅精进才是其提升频率的关键。之所以上代频率裹足不前，原因之一就在于其较短的流水线设计：G4 的整数流水线仅为 4 级，这让一个时钟周期内工作量过多，周期时间难以缩短，频率自然无法提升。</p>
<p data-omnivore-anchor-idx="39">对此 Motorola 进行了深入研究，最终发现 L1 缓存访问、指令调度/发送和完成/回写这三大步骤的工作量过大，是难以缩短周期的主要因素。于是在新 G4 中，这些步骤均一分为二，整数流水线级数由 4 级加深至 7 级，外加工艺的升级，成功缓解了这一问题。</p>
<figure data-omnivore-anchor-idx="40"><img data-omnivore-anchor-idx="41" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/42ed6f6f3b0d5c457349f86ccd9d1eba.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,smmhzZgFCCmoVS__a1Ul0QAdhbaoSEdBmcW8HpCojnSE/https://cdnfile.sspai.com/2024/03/29/42ed6f6f3b0d5c457349f86ccd9d1eba.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/42ed6f6f3b0d5c457349f86ccd9d1eba.jpg?imageView2/2/format/webp" data-index="3">
    <figcaption data-omnivore-anchor-idx="42">上代「灰」与新 G4「紫」的流水线对比</figcaption>
</figure>
<p data-omnivore-anchor-idx="43">而在后端，执行单元数量也有了增长：整数单元数量从上代的两个提高到 4 个，新增了一个简单整数单元和一个复杂整数单元；Velocity Engine 各执行单元彼此更加独立。指令窗口也进一步提高，让指令能更高效的乱序执行。</p>
<figure data-omnivore-anchor-idx="44"><img data-omnivore-anchor-idx="45" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/fc567917ae0c4bfd896c573161ff118f.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sZxeNus_xYx0h8R9J9TAG4Y81uP55xvyHKm7-ofsF0OE/https://cdnfile.sspai.com/2024/03/29/fc567917ae0c4bfd896c573161ff118f.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/fc567917ae0c4bfd896c573161ff118f.jpg?imageView2/2/format/webp" data-index="4">
    <figcaption data-omnivore-anchor-idx="46">新 G4 的架构图，可见改动「紫框」非常之多</figcaption>
</figure>
<p data-omnivore-anchor-idx="47">不过，更宽的微架构、更高的频率也让新 G4 的功耗再度抬头：在 533MHz 基础频率运行时，其典型功耗为 11.6W，已然超过了上代的最大功耗；而在 733MHz 运行时甚至超过了 20W。「PowerPC 有较高能耗比」这一优势正在渐渐流失。</p>
<figure data-omnivore-anchor-idx="48"><img data-omnivore-anchor-idx="49" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/0f78b077e974a8671f8849c75cb6083d.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sFROmw0LuUj9Or7NZWAvrqERGJVD_ZdS0-KfGnVY07DY/https://cdnfile.sspai.com/2024/03/29/0f78b077e974a8671f8849c75cb6083d.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/0f78b077e974a8671f8849c75cb6083d.jpg?imageView2/2/format/webp" data-index="5">
    <figcaption data-omnivore-anchor-idx="50">PowerMac G4「左」与新 G4「右」散热鳍片对比，可见后者相对有所增大，且后面有风扇主动散热</figcaption>
</figure>
<p data-omnivore-anchor-idx="51">总体而言，新 G4 相比前代有了稳步提升，幅度远大于 G3 到 G4，面对英特尔的奔腾 III 也算是有了几分底气。但过早曝光使其丧失了直接得名 G5 的机会，乔布斯也只将之归为频率升级后的 G4，并未大肆吹嘘。</p>
<p data-omnivore-anchor-idx="52">可 Motorola 却偏偏又在这关键时刻掉了链子：临近发布会时，最高 733MHz 的新 G4 产量严重不足，无法像乔布斯曾许诺过的那样让双处理器成为标配。于是乔布斯只好再一次食言，在台上尴尬地表示目前只能提供高频版的单芯片 PowerMac G4， 几个月后才能订购双芯片版本。</p>
<p data-omnivore-anchor-idx="53">即便如此，当 <i data-omnivore-anchor-idx="54">The Register</i> 等媒体<a data-omnivore-anchor-idx="55" href="https://sspai.com/link?target=https%3A%2F%2Fwww.theregister.com%2F2001%2F03%2F23%2Fapples_special_os_x_marketing%2F" target="_blank">问及</a>苹果有没有考虑将 Mac 上的芯片换成英特尔时，乔布斯的回答却依旧是否定的。</p>
<blockquote data-omnivore-anchor-idx="56">
    <p data-omnivore-anchor-idx="57">面对业界传言苹果将制作 x86 版本的 Mac OS X 以吸引企业客户，乔布斯斩钉截铁地予以否认。据称，苹果甚至没有在某个遥远的实验室里温存一个 x86 版本的 Mac OS X，「这绝无可能！」他严肃地说道。</p>
    <p data-omnivore-anchor-idx="58">至于苹果是否太依赖 Motorola 和 IBM 这两家芯片供应商，以及他们是否有能力专注于为苹果的桌面需求进行 PowerPC 开发，乔布斯则略带不耐烦地驳斥道「你根本不知道你在说什么！」</p>
</blockquote>
<h3 data-omnivore-anchor-idx="59">欲速则不达</h3>
<p data-omnivore-anchor-idx="60">另一边，在被 AMD 捷足先登，输掉 1GHz 之战后，英特尔算是深刻意识到了「频率」二字对大众的重要性。研发新一代芯片奔腾 IV 时，在营销人员的压力下，工程师竭尽所能，应用大量前沿技术，尽最大程度提升其频率，誓要在这场速度之战中取胜。</p>
<p data-omnivore-anchor-idx="61">奔腾 IV 沿用了之前的 P858 工艺制造，但在各项参数上均力压新 G4：其一共集成了 4200 万晶体管，比新 G4 还多 27%；Die 面积为 217mm²，是新 G4 的两倍多。</p>
<figure data-omnivore-anchor-idx="62"><img data-omnivore-anchor-idx="63" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/db05998f716a10097816c226f0950eec.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s70I5V-6Yp5AGuCoZK_SqiMbqRVyknlY8vDC4whNXCfM/https://cdnfile.sspai.com/2024/03/29/db05998f716a10097816c226f0950eec.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/db05998f716a10097816c226f0950eec.jpg?imageView2/2/format/webp" data-index="6">
    <figcaption data-omnivore-anchor-idx="64">1.5GHz 的初代 Pentium IV，代号「Willamette」</figcaption>
</figure>
<p data-omnivore-anchor-idx="65">为了全力增加奔腾 IV 的频率以提升性能，正如新 G4 做的那样，英特尔也将流水线级数加深：从原来的 12 级一举增加到了 20 级，甚至某些级数没有功能，仅仅是在等待信号传导。这一改动让其频率能轻松突破 1GHz，首批奔腾 IV 的频率就达到了 1.5GHz，是新 G4 的两倍。</p>
<p data-omnivore-anchor-idx="66">同时为了匹配这一超深的流水线，英特尔也重新设计了奔腾 IV 的乱序执行结构<sup data-omnivore-anchor-idx="67" href="" title="在乱序执行方面，奔腾 IV 抛弃了之前采用的 ROB+RRF 方案，转而使用 PRF 方案，前者每次都会将计算完毕的指令从 ROB 移至 RRF，也就是退休「Retire」，而后者将两者合二为一，仅通过调整映射来进行此操作。此举让数据量庞大的 SIMD 指令不会经常移动以节省功耗；也避免了某些无需目的寄存器的指令占用 ROB 造成浪费；还能精简架构，让奔腾 IV 大幅增加 ROB 容量成为可能。" footnote-id="1">1</sup>，ROB 从 40 条目增加到 126 条目，反观较浅流水线的新 G4 仅为 16 条目。</p>
<figure data-omnivore-anchor-idx="68"><img data-omnivore-anchor-idx="69" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/8e280a696b10e77c02126d7a29d67f2a.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sYCcyMh_lnzVTNJ15xBiEQlUBG_bH7x9OOYd6czviofo/https://cdnfile.sspai.com/2024/03/29/8e280a696b10e77c02126d7a29d67f2a.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/8e280a696b10e77c02126d7a29d67f2a.jpg?imageView2/2/format/webp" data-index="7">
    <figcaption data-omnivore-anchor-idx="70">介绍 Pentium IV 时英特尔的幻灯片，可见其对流水线深度的狂热追求</figcaption>
</figure>
<p data-omnivore-anchor-idx="71">微架构的创新则更是令人惊叹：在奔腾 IV 中，L1 的指令缓存被当成了一个 µop 指令池，称为追踪缓存。奔腾 IV 先从 L2 缓存中获取 x86 指令并解码，经解码后的 µop 就存储在追踪缓存中，每当需要执行该指令时，只需将之从追踪缓存中获取即可。这一想法不可谓不前卫，类似于现今的 µop 缓存。其带来的好处显而易见：不仅能有效杜绝重复解码相同指令带来的损耗；还能在高频下保障吞吐量，稳定地为后端提供指令，防止执行单元因利用率过低而造成性能下降；甚至能避免分支预测时出现流水线空泡影响性能<sup data-omnivore-anchor-idx="72" href="" title="在传统的指令获取中，如果缓存行里有一条分支指令需要采用「Taken」并跳转至目标分支，那么在此次获取中，该分支指令后的指令均不被执行，只能丢弃，此举极大浪费了获取指令的带宽。而奔腾 IV 的追踪缓存中配有一个较小的 512 条目分支目标缓冲区「BTB」，在将分支指令从 L2 缓存中获取并解码时会进行预测，并将分支目标一并从 L2 缓存中获取并解码进追踪缓存里。这样在后端获取指令时，分支目标已经位于分支指令之后，不会造成带宽浪费，也无需现找分支目标以致延迟，杜绝了流水线气泡。" footnote-id="2">2</sup>。</p>
<figure data-omnivore-anchor-idx="73"><img data-omnivore-anchor-idx="74" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/af8ccc05d73bfbafaef1b45573e57c8c.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sJJprCyS9c0TXdNRaHHWY57B1gFG892GlDAnXJhFz2k8/https://cdnfile.sspai.com/2024/03/29/af8ccc05d73bfbafaef1b45573e57c8c.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/af8ccc05d73bfbafaef1b45573e57c8c.jpg?imageView2/2/format/webp" data-index="8">
    <figcaption data-omnivore-anchor-idx="75">前代 P6「左」与 Pentium IV 的 Netburst「右」微架构前端的大致对比，可见变化巨大</figcaption>
</figure>
<p data-omnivore-anchor-idx="76">在后端，奔腾 IV 虽然只有三个整数单元，似乎弱于新 G4 的四个，但其简单整数单元的运行速度更快：其半个周期就能执行一条指令，并不逊色于对手；而两大浮点单元也让其浮点性能强于新 G4，且增加了 SSE2 指令，终于也支持了 128bit 的矢量整数运算和双精度的矢量浮点运算，面对 Velocity Engine 也有了一战之力，在 1.5GHz 运行时峰值算力可达到 6Gflops。</p>
<figure data-omnivore-anchor-idx="77"><img data-omnivore-anchor-idx="78" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/b56db55bff7b367dee4bafbfa40f69f7.JPEG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sxkbvA9PODPqRyr7s_TYRX-jgfzpT21Omt4QnQBQNPCc/https://cdnfile.sspai.com/2024/03/29/b56db55bff7b367dee4bafbfa40f69f7.JPEG?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/b56db55bff7b367dee4bafbfa40f69f7.JPEG?imageView2/2/format/webp" data-index="9">
    <figcaption data-omnivore-anchor-idx="79">Pentium IV「左」与新 G4「右」的微架构对比，相较之下前者更「深且窄」而后者更「宽且浅」</figcaption>
</figure>
<p data-omnivore-anchor-idx="80">但有得必有失。超长流水线带来的损耗问题远超英特尔预期。最大的创新追踪缓存，其实际效率也喜忧参半。为了保证芯片面积不至过大，英特尔不得不在其他地方进行削减：L1 数据缓存从上代的 16KB 缩水至 8KB；前端解码器也从 3 个降至 1 个；MMX 单元从 2 个减至 1 个；地址生成单元直接被砍没。这成了奔腾 IV 性能大打折扣的主要原因。</p>
<figure data-omnivore-anchor-idx="81"><img data-omnivore-anchor-idx="82" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/d2ef936f8ecdd7b4bd78486b3a1cc112.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,siYuhY3ehvCVGZrViltTbvaIJqQVZP6H4aOwmFV8d0ik/https://cdnfile.sspai.com/2024/03/29/d2ef936f8ecdd7b4bd78486b3a1cc112.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/d2ef936f8ecdd7b4bd78486b3a1cc112.jpg?imageView2/2/format/webp" data-index="10">
    <figcaption data-omnivore-anchor-idx="83">Pentium IV 在运行含不同数量分支指令的循环时，其分支预测所需的平均周期</figcaption>
</figure>
<figure data-omnivore-anchor-idx="84"><img data-omnivore-anchor-idx="85" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/4933204d876046eafcdcd78d7ba8a0ec.jpeg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sZ_0L7unWXdwshEINehOffknP7DrnBqnkiJR3gOzaR5o/https://cdnfile.sspai.com/2024/03/29/4933204d876046eafcdcd78d7ba8a0ec.jpeg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/4933204d876046eafcdcd78d7ba8a0ec.jpeg?imageView2/2/format/webp" data-index="11">
    <figcaption data-omnivore-anchor-idx="86">Pentium IV 初代的 Die shot，可见追踪缓存及其辅助单元「紫」的面积相比 L1 数据缓存「黑」大得多</figcaption>
</figure>
<p data-omnivore-anchor-idx="87">但奔腾 IV 就没那么幸运了，受制于极高的分支预测失败惩罚以及追踪缓存带来的不良反应，初代奔腾 IV 尽管频率比奔腾 III 一举提高了 50%，但性能却并没有大幅飞跃，IPC 的折损可想而知。同时高频下的功耗表现更是惨不忍睹：在 1.4GHz 运行时，初代奔腾 IV 功耗能达到 50W，而在最高 2GHz 运行时则飚升至 75.3W。面对这一大火炉，已经逐渐式微的 PowerPC 倒还显得有几分清凉。</p>
<figure data-omnivore-anchor-idx="88"><img data-omnivore-anchor-idx="89" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/70a8ace15f4b968a4b2e4c8d10153c2a.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s5uwAdmK1IYYFyFtf0CylL3NSN1n1LSzNUe8-sAivBPs/https://cdnfile.sspai.com/2024/03/29/70a8ace15f4b968a4b2e4c8d10153c2a.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/70a8ace15f4b968a4b2e4c8d10153c2a.jpg?imageView2/2/format/webp" data-index="12">
    <figcaption data-omnivore-anchor-idx="90">各大芯片运行 Dhrystone 2.1 的分数与频率对比图，可见 Pentium IV 的 IPC 有了明显倒退</figcaption>
</figure>
<h2 data-omnivore-anchor-idx="91">The Megahertz Myth</h2>
<p data-omnivore-anchor-idx="92">尽管拥有无与伦比的频率优势，但奔腾 IV 上述的致命缺陷让拥有新 G4 的乔布斯松了口气。他在年初的 Mac world <a data-omnivore-anchor-idx="93" href="https://sspai.com/link?target=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAnrM4n6S3CU" target="_blank">大会</a>上提出了「The Megahertz Myth」这一说法，试图用他的「现实扭曲力场」来消除掉大众「频率就是一切」的错误观念。</p>
<figure data-omnivore-anchor-idx="94"><img data-omnivore-anchor-idx="95" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/7e7cb108fe274022cda7fb5459f31f48.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sejDlYICXL9niwjiOFaCXVE1cCt568B7Bzv1aWPj955k/https://cdnfile.sspai.com/2024/03/29/7e7cb108fe274022cda7fb5459f31f48.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/7e7cb108fe274022cda7fb5459f31f48.jpg?imageView2/2/format/webp" data-index="13"></figure>
<blockquote data-omnivore-anchor-idx="96">
    <p data-omnivore-anchor-idx="97">「MHz」的确是衡量性能的指标之一，但它绝不是唯一要素。影响系统整体性能的因素还有很多。单纯用「MHz」来比较的话，就好像在比较苹果和橙子。</p>
    <p data-omnivore-anchor-idx="98">如果我们想用「英特尔版的 MHz」来标注 G4 处理器，那么为了体现其性能提升，我们就得把它叫做「2 GHz 的 G4」，懂我意思了吧？</p></blockquote></article>    </div> <div data-omnivore-anchor-idx="99" data-v-791783f8="" data-v-46e372cc=""><p data-omnivore-anchor-idx="100">阅读信息</p> <div data-omnivore-anchor-idx="101" data-v-791783f8=""><p data-omnivore-anchor-idx="102"><span data-omnivore-anchor-idx="103" data-v-791783f8="">全文字数</span> <span data-omnivore-anchor-idx="104" data-v-791783f8="">6109字</span></p> <p data-omnivore-anchor-idx="105"><span data-omnivore-anchor-idx="106" data-v-791783f8="">阅读本文共需</span> <span data-omnivore-anchor-idx="107" data-v-791783f8="">10分钟</span></p> <p data-omnivore-anchor-idx="108"><span data-omnivore-anchor-idx="109" data-v-791783f8="">字号选择</span> <span data-omnivore-anchor-idx="110" data-v-791783f8=""><label data-omnivore-anchor-idx="111" data-v-791783f8=""><p data-omnivore-anchor-idx="112">小</p> </label> <label data-omnivore-anchor-idx="113" data-v-791783f8=""><p data-omnivore-anchor-idx="114">中</p> </label> <label data-omnivore-anchor-idx="115" data-v-791783f8=""><p data-omnivore-anchor-idx="116">大</p> </label></span></p></div></div></div></DIV></DIV>

