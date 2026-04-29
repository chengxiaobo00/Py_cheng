---
id: 48d0b3f9-636c-46e2-936e-3f231575d37c
title: |
  处理器简史 | PowerPC 11：明讽强敌 暗渡陈仓（上） ｜ 少数派会员 π+Prime
author: |
  MIG
tags:
  - RSS
date_saved: 2024-06-26 17:38:05
date_published: 2024-06-26 17:38:05
---

# 处理器简史 | PowerPC 11：明讽强敌 暗渡陈仓（上） ｜ 少数派会员 π+Prime
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/power-pc-11-p-prime-19054b2aa80)
[Read Original](https://sspai.com/prime/story/ppc-history-11)

<DIV id="readability-content"><DIV data-omnivore-anchor-idx="1" class="page" id="readability-page-1"><div data-omnivore-anchor-idx="2" data-v-46e372cc=""><div data-omnivore-anchor-idx="3" data-v-46e372cc=""><!----> <p data-omnivore-anchor-idx="4" data-v-46e372cc="">随着 IBM 的淡出，PowerPC 的颓势已经开始显现，AIM 联盟内部的危机逐渐暴露。苹果是时候「未雨绸缪」了。</p> <hr data-omnivore-anchor-idx="5" data-v-46e372cc="">  <article data-omnivore-anchor-idx="6" data-v-46e372cc=""><p data-omnivore-anchor-idx="7">前文已经提到，PowerPC G4 的出现让苹果在与英特尔的多媒体战争中赢得了胜利，但随着 IBM 的淡出，PowerPC 的颓势已经开始显现，而「G4 Speed Dump」事件更是将 AIM 内部的危机暴露无遗。作为这款芯片最大客户的苹果，现在也是时候「未雨绸缪」了。</p>
<h2 data-omnivore-anchor-idx="8">新希望</h2>
<p data-omnivore-anchor-idx="9">当 Motorola 正与 IBM 在萨默塞特闹分家时，苹果那边，全新一代操作系统 Mac OS X 也在紧锣密鼓地开发中。之前从乔布斯手中买来的 NeXTSTEP 自然成了参考的对象，可 NeXTSTEP 本身也有问题亟待解决：能在 x86、68k 等芯片上完美运行，偏偏不支持 PowerPC 架构。</p>
<p data-omnivore-anchor-idx="10">为了支持 PowerPC 芯片，员工们夜以继日，而万幸的是，苹果在购买 NeXTSTEP 之前有过在其 Mach 内核上开发的经验。那是 1996 年 2 月，为了让 Linux 能在 PowerPC 上运行，以布雷特·哈雷为首的工程师们与开放软件基金会（OSF）合作，将 Mach 内核移植到 PowerPC，并将 Linux 作为服务运行在这个内核上。MkLinux 系统就此诞生。</p>
<figure data-omnivore-anchor-idx="11"><img data-omnivore-anchor-idx="12" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/561a86ad1dacedabaae3fcb690564d2d.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sTOardffVWYY9ijwvs9n8sQtVAQXGHjm1HDkRq6dgvHc/https://cdnfile.sspai.com/2024/03/29/561a86ad1dacedabaae3fcb690564d2d.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/561a86ad1dacedabaae3fcb690564d2d.jpg?imageView2/2/format/webp" data-index="0">
    <figcaption data-omnivore-anchor-idx="13">尽管往后的岁月里 MkLinux 并不成功，于 2002 年彻底结束了开发，但却让 Mac OS X 的出现成为可能</figcaption>
</figure>
<p data-omnivore-anchor-idx="14">这一操作系统的出现意义非凡，不仅为 Linux 支持 PowerPC 做出了巨大贡献，也为苹果在 PowerPC 上使用 NeXTSTEP 扫清了最大的障碍。事实上，未来的 Mac OS X 中，大量有关 Mach 内核的代码均来自于 MkLinux<sup data-omnivore-anchor-idx="15" href="" title="MkLinux 所使用的 PowerPC 版 Mach 被叫作 OSFMK 分支，即「Open Software Foundation Mach Kernel」的缩写，因此在查看 Mac OS X 中 XNU 内核代码时，Mach 的部分都被放在了 OSFMK 目录下。" footnote-id="1">1</sup>。</p>
<p data-omnivore-anchor-idx="16">除了 Mach 内核，其他组件的迁移工作也同步开展。好消息是，NeXTSTEP 源自 Unix，天生就有良好的可移植性<sup data-omnivore-anchor-idx="17" href="" title="早年 Unix 在被设计时，为了能移植在各类大型机上，Dennis Ritchie 发明了 C 语言并极力减少机器码的使用比重，后来 BSD 系列为了能在各大学使用，也延续了当初 Unix 的设计风格，尽可能地写与平台无关代码。比如在 FreeBSD 中，机器码在内核中的比重仅为 0.6%，与芯片架构相关代码在内核中也仅占 13.6%，这无疑为 NeXTSTEP 这种 BSD 分支移植到各架构提供了便利。" footnote-id="2">2</sup>；这也是当时 Solaris、AIX 等其他有 Unix 渊源的系统能那么迅速适配 PowerPC 的原因。</p>
<figure data-omnivore-anchor-idx="18"><img data-omnivore-anchor-idx="19" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/a4d210472e6ba2833387ff547d9a1047.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sDQGMpqDyrLKAuP8FTQDXt1xs_AeEihaYS7BHnrOPAug/https://cdnfile.sspai.com/2024/03/29/a4d210472e6ba2833387ff547d9a1047.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/a4d210472e6ba2833387ff547d9a1047.jpg?imageView2/2/format/webp" data-index="1">
    <figcaption data-omnivore-anchor-idx="20">类 Unix 系统的演进图，可见 Mac OS X、NeXTSTEP、Solaris、AIX 等系统均源自 Unix</figcaption>
</figure>
<p data-omnivore-anchor-idx="21">解决了 NeXTSTEP 在 PowerPC 上运行的问题后，此时的乔布斯还面临一个难题：是否需要再开发一个英特尔版本以备不时之需？</p>
<p data-omnivore-anchor-idx="22">早在 1997 年末乔布斯与 Motorola CEO 高尔文吵架时，这个担忧的种子就已埋下，之后董事会内部也就是否应转移至英特尔平台之事讨论许久，但短期内各成员意见并未达成一致。</p>
<p data-omnivore-anchor-idx="23">另一方面，乔布斯和英特尔创始人安迪·格鲁夫可谓是老相识。早在 1978 年苹果公司创立不久，安迪·格鲁夫就被邀请加入董事会。尽管后来这事并未促成，但乔布斯一直视安迪·格鲁夫为自己的导师，甚至在自己的各种重大决策中都会请他帮忙把把关——包括重返苹果的决定。</p>
<figure data-omnivore-anchor-idx="24"><img data-omnivore-anchor-idx="25" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/0a14ae63262a857a00d9a161158fd3af.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sRHNhzhLY-yVVZfx5Pxp5rwRRTZa3RCeVXg0nLD_WcDs/https://cdnfile.sspai.com/2024/03/29/0a14ae63262a857a00d9a161158fd3af.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/0a14ae63262a857a00d9a161158fd3af.jpg?imageView2/2/format/webp" data-index="2">
    <figcaption data-omnivore-anchor-idx="26">在 NeXT world 上的 Andy Grove「左」与 Steve Jobs「右」</figcaption>
</figure>
<p data-omnivore-anchor-idx="27">无论最终契机如何，乔布斯终于在这一关键时刻做出了选择，逐渐将开发英特尔版操作系统的计划提上日程。</p>
<h2 data-omnivore-anchor-idx="28">绝密的迁移计划</h2>
<p data-omnivore-anchor-idx="29">1999 年的夏天，正当 Motorola 尽全力生产 G4 芯片时，MkLinux 的开发者布雷特·哈雷及其团队被赋予了一项秘密任务：将大幅改进后的 Rhapsody（即 Mac OS X 的前身）移植到英特尔平台上。时隔 6 年，苹果再度试图靠近英特尔阵营。</p>
<figure data-omnivore-anchor-idx="30"><img data-omnivore-anchor-idx="31" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/7e1fde01f9cc248217be8f4d474b752b.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sM2crB5DiixgbYSruz2hUGkS0_wdNIVx7LqSe4NN5nIA/https://cdnfile.sspai.com/2024/03/29/7e1fde01f9cc248217be8f4d474b752b.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/7e1fde01f9cc248217be8f4d474b752b.jpg?imageView2/2/format/webp" data-index="3">
    <figcaption data-omnivore-anchor-idx="32">Brett Halle，曾任苹果软件部高级经理</figcaption>
</figure>
<p data-omnivore-anchor-idx="33">这个计划的保密程度有多高？除了六位核心成员知晓此事，其余参与的员工都认为只是在做普通的系统维护工作。甚至乔布斯都会四处放烟雾弹来打掩护。据一位员工回忆，在 Infinite Loop 自助餐厅排队结账时，凑巧乔布斯和他只相隔两人，正在前面与他人大声说着话。</p>
<blockquote data-omnivore-anchor-idx="34">
    <p data-omnivore-anchor-idx="35">那些人怎么就没明白我们压根就不会转投到英特尔阵营，他们应该放弃这个执念才对！</p>
</blockquote>
<p data-omnivore-anchor-idx="36">移植并非易事。尽管 NeXTSTEP 系统具有较好的可移植性，但 Mac OS X 则不然。许多源自 Mac OS 9 的代码，例如 Carbon、QuickTime、Quartz 等，均存在一定的 PowerPC 依赖性；而随着 Velocity Engine 的普及，大量能利用该单元的代码都要改写成英特尔平台的 SSE，移植仍颇具难度。</p>
<figure data-omnivore-anchor-idx="37"><img data-omnivore-anchor-idx="38" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/42027b4d71c716e0a56c0aee140f9011.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sPag5fdDF3jmoddeB8SxgH4pMFUJctBgiutJZCg56_8g/https://cdnfile.sspai.com/2024/03/29/42027b4d71c716e0a56c0aee140f9011.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/42027b4d71c716e0a56c0aee140f9011.jpg?imageView2/2/format/webp" data-index="4">
    <figcaption data-omnivore-anchor-idx="39">Mac OS X 架构图</figcaption>
</figure>
<p data-omnivore-anchor-idx="40">此外，整个苹果公司为了开发 PowerPC 版 Mac OS X 已经心力交瘁，公司上下都只把英特尔版本视为重大变故时的备用方案。因此布雷特·哈雷手上的资源少得可怜，加上被告知不能透露真正细节，他也难以向外界寻求太多帮助。</p>
<p data-omnivore-anchor-idx="41">团队只好自己出资，在 Fry’s 商店买了台含有四颗英特尔芯片的服务器，来执行这项艰巨任务。六个月后，项目艰难进展到了万里长征的第一步：能启动 shell、运行大多数不基于 UI 的服务、用鼠标打开窗口服务器。</p>
<h2 data-omnivore-anchor-idx="42">折戟沉沙</h2>
<p data-omnivore-anchor-idx="43">时间来到 1999 年末。千禧年之际，各大芯片厂商都卯足了劲，其中最为耀眼的当属 x86 阵营的 AMD 与英特尔：短短几个月内，这对红蓝冤家就将芯片频率一路提升到惊人的 1 GHz。而作为苹果电脑御用的最强处理器，PowerPC G4 却在这场频率之战中败下阵来，从此再难以与英特尔、AMD 正面对抗。</p>
<h3 data-omnivore-anchor-idx="44">工艺之争</h3>
<p data-omnivore-anchor-idx="45">在铜互联技术已成为当时行业潮流之际，相比 IBM 和 Motorola 激进采用，英特尔并没有立即跟风效仿，相反和东芝等厂商坚称，在 180nm 节点采用该技术「既不必须，也不可取」，并继续固守铝互联技术加以改进。</p>
<p data-omnivore-anchor-idx="46">P858 工艺的出现，证明了这些才华横溢的工程师们的选择不无道理。尽管没有采用铜互联技术，通过大幅增加厚度来维持横截面积，P858 工艺的铝互联层依旧设法遏制住了电阻骤升的趋势，甚至能与采用铜互联技术的 IBM 全新 CMOS-8S 工艺相媲美。</p>
<figure data-omnivore-anchor-idx="47"><img data-omnivore-anchor-idx="48" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/90805fdf069ef8d26bec4f9e6b839bd0.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,snYbmbxtzzyKiQ489KlMa0n32Mube3FnO6w2hbB0KwBs/https://cdnfile.sspai.com/2024/03/29/90805fdf069ef8d26bec4f9e6b839bd0.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/90805fdf069ef8d26bec4f9e6b839bd0.png?imageView2/2/format/webp" data-index="5">
    <figcaption data-omnivore-anchor-idx="49">英特尔 P856.5、P858 和 IBM CMOS-8S 工艺金属互联层的大小、相对电阻对比，可见 P856 最「瘦高」</figcaption>
</figure>
<p data-omnivore-anchor-idx="50">至于应对厚度提升所带来的电容效应，英特尔也有了新突破：首次在绝缘材料上加入了 SiOF，相比传统的纯 SiO2，掺有 5.5% 氟的 SiOF 介电常数更低<sup data-omnivore-anchor-idx="51" href="" title="纯 SiO2 的介电常数是 4.1，比 SiOF 的 3.55 高出 15%，另外 IBM 的 CMOS-8S 工艺也运用了这一技术，被称为掺氟硅玻璃「FSG」。" footnote-id="3">3</sup>，能有效降低金属层之间的电容效应。英特尔在实验中发现：光是这一技术就能让芯片频率提升 16%。于是，P858 依旧沿着摩尔定律稳步前进：不仅密度相比上代提升近一倍，还能在功耗不升反降的情况下速度快上 50%。</p>
<figure data-omnivore-anchor-idx="52"><img data-omnivore-anchor-idx="53" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/8e9160995a281e7ec5b92ac8742a78be.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sQhhPvme08bmU2TB2NOVinfkZpRC_OXzNhqAnUTLffpI/https://cdnfile.sspai.com/2024/03/29/8e9160995a281e7ec5b92ac8742a78be.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/8e9160995a281e7ec5b92ac8742a78be.jpg?imageView2/2/format/webp" data-index="6">
    <figcaption data-omnivore-anchor-idx="54">P858 六层铝互连层的横截面，可见其间由低介电常数物质所填充</figcaption>
</figure>
<p data-omnivore-anchor-idx="55">而在生产方面，不用引入新制造设备的 P858 工艺也颇具优势，良率节节攀升、再创新高：从 P854 的 60%、P856 的 63% 来到 65% 以上。这让英特尔在与 AMD、PowerPC 竞争中占据主动。</p>
<figure data-omnivore-anchor-idx="56"><img data-omnivore-anchor-idx="57" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/9381aff583bc7210674cf42aa375ac03.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s4Tdr6elMEQoUuzSYLau0nm0AGrGQI_zDXG0Dzkmr7BQ/https://cdnfile.sspai.com/2024/03/29/9381aff583bc7210674cf42aa375ac03.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/9381aff583bc7210674cf42aa375ac03.jpg?imageView2/2/format/webp" data-index="7">
    <figcaption data-omnivore-anchor-idx="58">英特尔 P858 与其前代以及 Motorola、IBM 的工艺参数对比</figcaption>
</figure>
<p data-omnivore-anchor-idx="59">在这一先进工艺的光辉下，首次将 L2 缓存集成进 Die 内部的新奔腾 III「Coppermine」于 1999 年 10 月横空出世，成为了名副其实的 G4 杀手。新奔腾 III 的晶体管比前代多了三倍，Die 面积却缩小 17%，生产成本也从 65 美元降至不到 40 美元。</p>
<figure data-omnivore-anchor-idx="60"><img data-omnivore-anchor-idx="61" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/6e93ca98ead2da238b975004d59e1eaf.JPEG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sUk46GDeWhEf21RFnw8afIKEPt7XInr8SrWXqKccBbVw/https://cdnfile.sspai.com/2024/03/29/6e93ca98ead2da238b975004d59e1eaf.JPEG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/6e93ca98ead2da238b975004d59e1eaf.JPEG?imageView2/2/format/webp" data-index="8">
    <figcaption data-omnivore-anchor-idx="62">新 Pentium III「左」及其 Dieshot「右」，可见近 1/3 的面积均由其 L2 缓存占据</figcaption>
</figure>
<p data-omnivore-anchor-idx="63">在性能层面新奔腾 III 则继续大幅跃进，核心频率涨至 733MHz（在 2000 年中一路飙到 1GHz 以上），加之片上 L2 缓存带来的增益，彻底超越了 G4，功耗却大幅下降：相比上代能在同频率下低 43%，甚至能放入笔记本中<sup data-omnivore-anchor-idx="64" href="" title="在 733MHz、1.65V 下运行的新奔腾 III 最大功耗为 24.1W，但若在 400MHz、1.35V 下运行时功耗仅为 7W；并且英特尔还推出了「SpeedStep」技术，即笔记本在插电时全速运行，而在使用电池供电时芯片会降频、降电压以省电。" footnote-id="4">4</sup>。</p>
<p data-omnivore-anchor-idx="65">面对频率高两倍的英特尔，就算乔布斯所谓「同频率快两倍」定律是真的，现在的 G4 恐怕也不是英特尔的对手了。</p>
<figure data-omnivore-anchor-idx="66"><img data-omnivore-anchor-idx="67" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/2866445ec400c094616efbb277cbf4c6.JPEG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sq58JqSOYATe-1Alc28l3sZRE5uXNUnjpDTLVWB1KcXc/https://cdnfile.sspai.com/2024/03/29/2866445ec400c094616efbb277cbf4c6.JPEG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/2866445ec400c094616efbb277cbf4c6.JPEG?imageView2/2/format/webp" data-index="9">
    <figcaption data-omnivore-anchor-idx="68">G4 与新 Pentium III 在 SPEC95 测试中的整数「左」与浮点「右」成绩对比</figcaption>
</figure>
<h2 data-omnivore-anchor-idx="69">停滞不前</h2>
<p data-omnivore-anchor-idx="70">而于此同期，PowerPC 干了什么？</p>
<p data-omnivore-anchor-idx="71">什么事都没发生，一片死寂：G4 依旧在 500MHz 徘徊，新芯片遥遥无期。</p>
<p data-omnivore-anchor-idx="72">由于 IBM 已经淡出 G4 及后续的研发，Motorola 成了新芯片的唯一推动者。但它们只是在 1999 年 10 月发了篇预告文章。此言一出，立即吸引了大众的目光，《微处理器报告》等杂志纷纷引用「消息人士」的话，宣称两个月前新 G4 就已经流片，将于 2000 年中开始大规模生产。</p>
<p data-omnivore-anchor-idx="73">但谣言终归是谣言。到了 2000 年，Motorola 提到的 180nm 新工艺、新 G4 双双搁浅。雪上加霜的是，在当年的 3 月，一场席卷硅谷的危机正悄然而至。</p>
<h3 data-omnivore-anchor-idx="74">再遭重创</h3>
<p data-omnivore-anchor-idx="75">从 90 年代末开始，「互联网」几乎成了所有科技公司追逐的热点，以至于像英特尔这类芯片厂商，在宣传奔腾 III 上的 SSE 时都会改成「Internet SSE」，奔腾 IV 的架构名称也成了「NetBurst」。</p>
<p data-omnivore-anchor-idx="76">在美国政府降息、减税的大背景下，2000 年初，大众对这一科技爆点的狂热来到了顶点：一时间大量资金涌入各大科技公司，纳斯达克指数也一路飙升，在 3 月 10 日达到了创纪录的 5048。但正所谓「爬得越高、摔得越惨」，那些初创的互联网公司在将钱挥霍一空后，崩溃开始了：一个月内纳斯达克指数跌幅就超过了 25%，几年间整个股市市值蒸发了近三分之二。</p>
<figure data-omnivore-anchor-idx="77"><img data-omnivore-anchor-idx="78" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/bc33f76005dbc2c830fe9928f1ae952e.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sbg4ijfJwTinZfTnUMvgClXhl2EqrVmAICOGu1KPCkJI/https://cdnfile.sspai.com/2024/03/29/bc33f76005dbc2c830fe9928f1ae952e.png?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/bc33f76005dbc2c830fe9928f1ae952e.png?imageView2/2/format/webp" data-index="10">
    <figcaption data-omnivore-anchor-idx="79">1994-2004 的纳斯达克综合指数趋势图，互联网崩溃的尖峰清晰可见</figcaption>
</figure>
<p data-omnivore-anchor-idx="80">「互联网崩溃」事件对正在重组的 Motorola 而言简直是飞来横祸。受互联网崩溃的影响，这家刚刚才重新盈利的公司股价也一路走低，到 2000 年末已经跌了近 70%。在这种大背景下，Motorola 新工艺和新芯片的推迟也就不足为奇了。纵观整个 2000 年，Motorola 没拿出哪怕一颗像样的新芯片给苹果。这无疑让乔布斯失望透顶，对英特尔是愈加地向往。</p>
<figure data-omnivore-anchor-idx="81"><img data-omnivore-anchor-idx="82" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/aa08279723a63d4f14f329371d5187a1.jpg?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sKL1jAgKIwqGPJKaQrDD1wAGfvtiNa3C2KZ23qBPXgmA/https://cdnfile.sspai.com/2024/03/29/aa08279723a63d4f14f329371d5187a1.jpg?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/aa08279723a63d4f14f329371d5187a1.jpg?imageView2/2/format/webp" data-index="11">
    <figcaption data-omnivore-anchor-idx="83">Motorola 2000、2001、2002 年的股价，可见从 4 月开始就一路走低，并持续低迷了 3 年之久</figcaption>
</figure>
<h3 data-omnivore-anchor-idx="84">雷声大雨点小</h3>
<p data-omnivore-anchor-idx="85">而另一边，IBM 在 1999 年末制造了一颗 64bit 且能运行在 1GHz 频率下的 PowerPC 芯片，但这也不是苹果需要的。</p>
<p data-omnivore-anchor-idx="86">似乎是为了回应那些认为短流水线 G4 难以提高频率的质疑，这颗芯片仅有六级流水线，且和当年的 X704 一样：为了冲击高频，其架构设计十分简陋，功耗也达到离谱的 112W，几乎不可能塞进 Mac 中。且在上代 CMOS-7S 工艺下，1900 万个晶体管所需的 Die 面积猛增至 150mm²，若要量产成本将居高不下。</p>
<figure data-omnivore-anchor-idx="87"><img data-omnivore-anchor-idx="88" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/d2f7d7ff00d80886d004e776c044c56c.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,szENyXzIAzPHEeB8RglCRXINUCxKV5FmcmgOcF4zkq5Q/https://cdnfile.sspai.com/2024/03/29/d2f7d7ff00d80886d004e776c044c56c.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/d2f7d7ff00d80886d004e776c044c56c.jpg?imageView2/2/format/webp" data-index="12">
    <figcaption data-omnivore-anchor-idx="89">尽管只具有实验性质，但严格来讲这仍是第一颗突破 1GHz 的 PowerPC 芯片</figcaption>
</figure>
<p data-omnivore-anchor-idx="90">随着时间推移，形势对苹果而言愈发严峻：在桌面市场，G4 已经被英特尔、AMD 等厂商全面超越；而在笔记本市场，由于 G4 较高的生产成本以及难以驾驭的十几瓦功耗，iBook、PowerBook 系列仍旧用着 G3，面临着产品线停滞的风险。</p>
<p data-omnivore-anchor-idx="91">在这关键时刻，IBM 挺身而出，填补了低端产品线的空缺：2000 年 9 月，在落后英特尔近一年后，将 L2 缓存集成进 Die 内的 PowerPC 750CXE 被放入了 iBook 中，成了 2000 年 PowerPC 阵营在个人电脑市场上的唯一突破<sup data-omnivore-anchor-idx="92" href="" title="准确而言，PowerPC 750CX 使用的是 CMOS-8S 工艺，而 PowerPC 750CXE 使用的是 CMOS-8SE 工艺，相比 CMOS-8S 其有效沟道长度有所调整，性能更好；而 750CXE 相比 750CX 除了提高频率没有添加任何功能，并且苹果似乎只采用了前者，后者主要用于嵌入式领域，为了不复杂各芯片、工艺的称号，本文进行了简化。" footnote-id="5">5</sup>。</p>
<figure data-omnivore-anchor-idx="93"><img data-omnivore-anchor-idx="94" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/5e8f0a09f28f91613176da4ae77285dd.JPEG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sR-Bjl_4C5TC-Emy70DA3P3xpZTxlX5RevnknDWdxgg4/https://cdnfile.sspai.com/2024/03/29/5e8f0a09f28f91613176da4ae77285dd.JPEG?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/5e8f0a09f28f91613176da4ae77285dd.JPEG?imageView2/2/format/webp" data-index="13">
    <figcaption data-omnivore-anchor-idx="95">750CXE「左」及其 Die shot「右」</figcaption>
</figure>
<p data-omnivore-anchor-idx="96">因为 IBM 只在 G3 基础上改进，所以该芯片在微架构层面相比上代改动十分有限。但 IBM 有着能与英特尔 P858 相媲美的 CMOS-8S 工艺，让 G3 的晶体管数量突破 2000 万大关，达 2150 万之巨，同时 42.7mm² 的 Die 面积与前代几乎相同。而在新工艺和片上 L2 缓存共同作用下，这枚 G3 的功耗再创新低：相比前代 400MHz 下 5.7W，其在 550MHz 运行时仅为 4.6W，而在后续频率提高至 700MHz 后功耗也只有个位数。</p>
<p data-omnivore-anchor-idx="97">但一心想降低制造成本的 IBM 仍不满足于此，抛弃了自身沿用多年、快成为行业主流的「倒装芯片」封装，转而使用「引线键合」这一奔腾芯片都快抛弃的老技术，最终如愿以偿，每颗芯片标价仅 77 美元。</p>
<figure data-omnivore-anchor-idx="98"><img data-omnivore-anchor-idx="99" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/be1da2d2e857e2c0ebcd552e067c4139.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sRseBlito5gD0WThh-Vbb4BD-CBvuTY4kDHyWxTWrmjc/https://cdnfile.sspai.com/2024/03/29/be1da2d2e857e2c0ebcd552e067c4139.png?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/be1da2d2e857e2c0ebcd552e067c4139.png?imageView2/2/format/webp" data-index="14">
    <figcaption data-omnivore-anchor-idx="100">PowerPC 750CXE 的封装示意图，号称采用了新型有机层压 BGA 封装技术，实则处处透着拮据</figcaption>
</figure>
<figure data-omnivore-anchor-idx="101"><img data-omnivore-anchor-idx="102" data-omnivore-original-src="https://cdnfile.sspai.com/2024/03/29/d0bd7778d09bf77e6b0936a365947e9f.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sLWbnjPnOP7vKsfYwv2AAJiCOf3cziibq5_Z5fLiJj_0/https://cdnfile.sspai.com/2024/03/29/d0bd7778d09bf77e6b0936a365947e9f.jpg?imageView2/2/w/1120/q/40/interlace/1/ignore-error/1/format/webp" data-original="https://cdnfile.sspai.com/2024/03/29/d0bd7778d09bf77e6b0936a365947e9f.jpg?imageView2/2/format/webp" data-index="15">
    <figcaption data-omnivore-anchor-idx="103">最后一代 iMac G3，似乎也象征着 PowerPC 全盛时代的终结</figcaption>
</figure>
<p data-omnivore-anchor-idx="104">尽管 750CXE 一经发布，就成了嵌入式领域的新宠，被称为当时性能最强的嵌入式芯片，显然 G3 微架构的性能潜力已被挖掘殆尽，更新工艺也只是权宜之计。现如今，只有等 Motorola 在新芯片上的研发取得突破，才能助苹果在桌面市场上击败英特尔。</p>
<h2 data-omnivore-anchor-idx="105">巧妇难为无米炊</h2>
<p data-omnivore-anchor-idx="106">面对如此不利形势，好强的乔布斯并未退缩。既然 G4 的传统性能已经难以匹敌新奔腾 III，唯一还占优势的就是 Velocity Engine，那就让能利用该单元进行硬件加速的 Photoshop、QuickTime 等软件多多出镜，在发布会上一次次击溃英特尔，以提振大众信心。</p></article>    </div> <div data-omnivore-anchor-idx="107" data-v-791783f8="" data-v-46e372cc=""><p data-omnivore-anchor-idx="108">阅读信息</p> <div data-omnivore-anchor-idx="109" data-v-791783f8=""><p data-omnivore-anchor-idx="110"><span data-omnivore-anchor-idx="111" data-v-791783f8="">全文字数</span> <span data-omnivore-anchor-idx="112" data-v-791783f8="">5983字</span></p> <p data-omnivore-anchor-idx="113"><span data-omnivore-anchor-idx="114" data-v-791783f8="">阅读本文共需</span> <span data-omnivore-anchor-idx="115" data-v-791783f8="">10分钟</span></p> <p data-omnivore-anchor-idx="116"><span data-omnivore-anchor-idx="117" data-v-791783f8="">字号选择</span> <span data-omnivore-anchor-idx="118" data-v-791783f8=""><label data-omnivore-anchor-idx="119" data-v-791783f8=""><p data-omnivore-anchor-idx="120">小</p> </label> <label data-omnivore-anchor-idx="121" data-v-791783f8=""><p data-omnivore-anchor-idx="122">中</p> </label> <label data-omnivore-anchor-idx="123" data-v-791783f8=""><p data-omnivore-anchor-idx="124">大</p> </label></span></p></div></div></div></DIV></DIV>

