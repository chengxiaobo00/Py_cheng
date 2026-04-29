---
id: 06d9fb68-8cb6-45a1-838b-80c49e21f2ed
title: |
  处理器简史 09 | 技术有道，Intel 效法 AMD；竞争无门，AMD 再诉 Intel ｜ 少数派会员 π+Prime
author: |
  Kiririn
tags:
  - RSS
date_saved: 2024-05-31 18:01:44
date_published: 2024-05-31 18:01:44
---

# 处理器简史 09 | 技术有道，Intel 效法 AMD；竞争无门，AMD 再诉 Intel ｜ 少数派会员 π+Prime
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/09-intel-amd-amd-intel-p-prime-18fcec7971d)
[Read Original](https://sspai.com/prime/story/sv-anecdotes-09)

<DIV id="readability-content"><DIV data-omnivore-anchor-idx="1" class="page" id="readability-page-1"><div data-omnivore-anchor-idx="2" data-v-4785f258="" data-v-46e372cc=""><div data-omnivore-anchor-idx="3" data-v-46e372cc=""><!----> <p data-omnivore-anchor-idx="4" data-v-46e372cc="">进入 64 位时代，尽管 AMD 产品性能领先，但 Intel 凭借垄断地位和手腕维持了市场主导权。双方的角力还将继续。</p> <hr data-omnivore-anchor-idx="5" data-v-46e372cc="">  <article data-omnivore-anchor-idx="6" data-v-46e372cc=""><p data-omnivore-anchor-idx="7">本系列前文回顾：<a data-omnivore-anchor-idx="8" href="https://sspai.com/prime/story/sv-anecdotes-01">01</a> | <a data-omnivore-anchor-idx="9" href="https://sspai.com/prime/story/sv-anecdotes-02">02</a> | <a data-omnivore-anchor-idx="10" href="https://sspai.com/prime/story/sv-anecdotes-03">03</a> | <a data-omnivore-anchor-idx="11" href="https://sspai.com/prime/story/sv-anecdotes-04">04</a> | <a data-omnivore-anchor-idx="12" href="https://sspai.com/prime/story/sv-anecdotes-05">05</a> | <a data-omnivore-anchor-idx="13" href="https://sspai.com/prime/story/sv-anecdotes-06">06</a> | <a data-omnivore-anchor-idx="14" href="https://sspai.com/prime/story/sv-anecdotes-07">07</a> | <a data-omnivore-anchor-idx="15" href="https://sspai.com/prime/story/sv-anecdotes-08">08</a></p>
<hr data-omnivore-anchor-idx="16">
<p data-omnivore-anchor-idx="17">上次说到，64 位体系的战争之初，Intel 抢先推出了基于 IA-64 架构的 Itanium 处理器。不过，Intel 并没有以此获得先发制人的优势，而是被 AMD 用理念不甚先进，但稳定性和兼容性更优的 AMD64 架构反将一军。基于 AMD64 架构的 Opteron 和 Athlon 64 处理器开始在服务器和 PC 上流行，Intel 想要利用 Itanium 处理器自上而下统一 B 端和 C 端市场的大梦也随之烟消云散。</p>
<p data-omnivore-anchor-idx="18">事实上，从 IA-64 正式立项开始，市场研究公司 IDC（International Data Corporation）就在年复一年的下调其销量预期。1997 年，IDC 预测 IA-64 产品的销售额将于 2001 年超过 380 亿美元；2001 年 Itanium 发布之后，IDC 对它的期望变成了至 2004 年达 150 亿美元；而到了 2002 年，这个数字已经下降到了 50 亿美元。</p>
<figure data-omnivore-anchor-idx="19"><img data-omnivore-anchor-idx="20" data-omnivore-original-src="https://cdnfile.sspai.com/2024/05/21/article/96532c6ea0310d7439670bb3e17442cc.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s_OWX57dJOcCl8UiaTOievtcy9DOjOzdZtYUrbWarqmQ/https://cdnfile.sspai.com/2024/05/21/article/96532c6ea0310d7439670bb3e17442cc.png?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/05/21/article/96532c6ea0310d7439670bb3e17442cc.png?imageView2/2/format/webp" data-index="0">
    <figcaption data-omnivore-anchor-idx="21">IDC 对 Itanium 的销量预期和 Itanium 的实际销量。图源 Wikiwand</figcaption>
</figure>
<p data-omnivore-anchor-idx="22">但是，Intel 面对着 Itanium 呈断崖式下跌的市场表现，依然不遗余力的宣扬 IA-64 架构之优越。Intel 不仅反复对外宣称不会开发任何其他 64 位体系的芯片，并且驳斥了正基于 X86 架构开发 64 位扩展指令集的猜测。在外人看来，Intel 的这一系列行为可能是在维持自己的体面，并且试图重振投资者的信心；而在 Intel 内部，这场与 AMD 的棋局才刚刚开始。</p>
<h2 data-omnivore-anchor-idx="23">64 位体系之争尘埃落定</h2>
<p data-omnivore-anchor-idx="24">AMD 主导的 AMD64 架构是基于已有 X86 架构的 64 位扩展而来，而这还要归功于 1976 年、1982 年及 1996 年与 Intel 签署的交叉授权协议。值得注意的是，AMD 与 Intel 从以上协议中获得的授权并不允许互相复刻芯片架构，这些交叉授权通常指向 AMD 与 Intel 各持专利的指令集，但在每个指令的实现上，双方所采用的硬件设计并不一致。因此，Intel 完全有理由和条件制造自己的 64 位 X86 芯片。</p>
<p data-omnivore-anchor-idx="25">2002 年，Intel 内部一项名为 Yamhill 的计划被披露，有知情人指出该项目旨在研发与 AMD64 架构相容的 X86 芯片，该芯片的代号可能为「*T」；2003 年底，金融研究媒体 Investor’s Business Daily 在一篇报道中指出 Intel 已经承认 Yamhill 项目真实存在，但这一消息也被 Intel 紧急「辟谣」。</p>
<p data-omnivore-anchor-idx="26">然而，仅仅两个月之后的 Intel Developer Forum 上，Intel 首席执行官 Barret 宣布：将推出 64 位 X86 架构的处理器产品，项目代号 CT（Clackamas Technology）。</p>
<p data-omnivore-anchor-idx="27">这几乎等于 Intel 官方宣判了 Itanium 的死缓，也意味着自 80 年代起 Intel 一骑绝尘、AMD 步步紧随的局面被打破。人们有理由相信：半导体行业将会经历一次空前的洗牌，或许 Intel 的时代已经过去，AMD 将会成为新的引路人。</p>
<p data-omnivore-anchor-idx="28">2004 年 2 月 1 日，Intel 正式推出了 Pentium 4 Prescott，旨在取代已经服役了 4 年的 NetBurst。Prescott 的 64 位 X86 架构最初被 Intel 称为 IA-32e，似乎表明这一架构并非全新设计，而是原本的 X86 架构，即 IA-32 的进一步扩展，以此与先进的 IA-64 区分。</p>
<p data-omnivore-anchor-idx="29">其实，在指令集的实现上，IA-32e 与 AMD64 没有什么本质上的不同。只是 Intel 已经习惯了在营销层面贬低 AMD 的产品为仿制品，即使 AMD 已经在 64 位处理器的竞争中处于上位，Intel 也不愿承认自家产品使用了对手的技术。</p>
<figure data-omnivore-anchor-idx="30"><img data-omnivore-anchor-idx="31" data-omnivore-original-src="https://cdnfile.sspai.com/2024/05/21/article/5cc750d8f5756d3ac0df4dfa4079de02.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s5kHzIXZ3hGJALaG8QflQCvMhnGCfGP_4tOuybrYyOzU/https://cdnfile.sspai.com/2024/05/21/article/5cc750d8f5756d3ac0df4dfa4079de02.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/05/21/article/5cc750d8f5756d3ac0df4dfa4079de02.png?imageView2/2/format/webp" data-index="1">
    <figcaption data-omnivore-anchor-idx="32">一颗 2.8GHz 时钟频率的 Pentium 4 Prescott。图源 iXBT Labs</figcaption>
</figure>
<p data-omnivore-anchor-idx="33">然而，Intel 在 IA-32e 的保密上做的一塌糊涂，除了发布之前两度被曝，其技术细节也很快被挖了出来。虽然行内人对 IA-32e 取材自 AMD64 的「秘密」已然心照不宣，但媒体依然给它取了个「iAMD32」的雅号，以讽刺 Intel 使用 AMD 的技术开发产品，对其重新包装销售却不愿承认的行为。很快，Intel 将 IA-32e 改名为 EM64T，后来又索性将其正式命名定为 Intel 64，以免媒体煽风点火，为公司带来更多的负面言论。</p>
<h2 data-omnivore-anchor-idx="34">即将到来的多核心时代</h2>
<p data-omnivore-anchor-idx="35">作为 Intel 首款面向消费者的 64 位 X86 处理器，Prescott 基本与 NetBurst 同源，但相对前代做出了一些重要改进，内部的升级主要包括拓宽的执行管道流水线、双倍 L2 缓存、90nm 制造工艺、7 层铜互连和 SSE3 指令支持。</p>
<p data-omnivore-anchor-idx="36">而在外部，Prescott 的诞生恰逢 LGA775（Sockte T）接口和 BTX 版型的推出，取代了之前的 Socket 478 插槽。LGA 即平面网格数组封装工艺（land grid array），这种封装工艺最大的特点在于将旧式插槽设计中位于 CPU 底部的针脚移至主板底座上，降低了 CPU 拔插时针脚受损的风险。除此之外，LGA775 接口首次加入了对 DDR2 内存的支持，更快的前端总线（FSB，Front Side Bus）也允许 CPU 与北桥进行高效的数据传输。这对 Prescott 在平台上的性能提升至关重要。</p>
<figure data-omnivore-anchor-idx="37"><img data-omnivore-anchor-idx="38" data-omnivore-original-src="https://cdnfile.sspai.com/2024/05/21/article/57c94dd245be2655432bffc051905179.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sr3LZh4QV9CkytCGhfQYu5Qp2en8DGJevGFnGsxcGxp8/https://cdnfile.sspai.com/2024/05/21/article/57c94dd245be2655432bffc051905179.png?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/05/21/article/57c94dd245be2655432bffc051905179.png?imageView2/2/format/webp" data-index="2">
    <figcaption data-omnivore-anchor-idx="39">Pentium 4 Prescott 的流程简图。图源 iXBT Labs</figcaption>
</figure>
<p data-omnivore-anchor-idx="40">Pentium 4 系列本就以超高的时钟频率见长，Intel 当然不想让 Prescott 输掉频率大战，更长的管线设计也需要更高的时钟频率做支撑。但 Intel 的产品部门似乎忽略了基本的物理定律，工程师们无法在现有的条件下解决提高时钟频率导致的电流热效应问题。最初，他们预计从 130nm 转向 90nm 制造工艺可以有效缓解高能耗带来的高热量，事实则是 90nm 制造工艺下更为密集的晶体管反而加剧了芯片的发热。</p></article>    </div> <div data-omnivore-anchor-idx="41" data-v-791783f8="" data-v-46e372cc=""><p data-omnivore-anchor-idx="42">阅读信息</p> <div data-omnivore-anchor-idx="43" data-v-791783f8=""><p data-omnivore-anchor-idx="44"><span data-omnivore-anchor-idx="45" data-v-791783f8="">全文字数</span> <span data-omnivore-anchor-idx="46" data-v-791783f8="">3832字</span></p> <p data-omnivore-anchor-idx="47"><span data-omnivore-anchor-idx="48" data-v-791783f8="">阅读本文共需</span> <span data-omnivore-anchor-idx="49" data-v-791783f8="">6分钟</span></p> <p data-omnivore-anchor-idx="50"><span data-omnivore-anchor-idx="51" data-v-791783f8="">字号选择</span> <span data-omnivore-anchor-idx="52" data-v-791783f8=""><label data-omnivore-anchor-idx="53" data-v-791783f8=""><p data-omnivore-anchor-idx="54">小</p> </label> <label data-omnivore-anchor-idx="55" data-v-791783f8=""><p data-omnivore-anchor-idx="56">中</p> </label> <label data-omnivore-anchor-idx="57" data-v-791783f8=""><p data-omnivore-anchor-idx="58">大</p> </label></span></p></div></div></div></DIV></DIV>

