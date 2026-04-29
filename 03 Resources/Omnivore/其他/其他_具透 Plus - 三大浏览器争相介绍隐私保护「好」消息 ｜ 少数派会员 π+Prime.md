---
id: 1aeb5c5e-cdd5-4a19-9486-ad5b77398134
title: |
  具透 Plus | 三大浏览器争相介绍隐私保护「好」消息 ｜ 少数派会员 π+Prime
author: |
  少数派编辑部
tags:
  - RSS
date_saved: 2024-08-06 16:47:51
date_published: 2024-08-06 16:47:51
---

# 具透 Plus | 三大浏览器争相介绍隐私保护「好」消息 ｜ 少数派会员 π+Prime
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/plus-p-prime-19127f11ec1)
[Read Original](https://sspai.com/prime/story/inside-release-notes-240806)

<DIV id="readability-content"><DIV data-omnivore-anchor-idx="1" class="page" id="readability-page-1"><div data-omnivore-anchor-idx="2" data-v-46e372cc=""><div data-omnivore-anchor-idx="3" data-v-46e372cc=""><!----> <p data-omnivore-anchor-idx="4" data-v-46e372cc="">如果说三家浏览器在七月的动态共同说明了什么，那就是保护隐私这种事情不能也不应该指望厂商的效率和良心。</p> <hr data-omnivore-anchor-idx="5" data-v-46e372cc="">  <article data-omnivore-anchor-idx="6" data-v-46e372cc=""><p data-omnivore-anchor-idx="7">欢迎阅读「具透 Plus」，这是我们为会员中的软件爱好者准备的栏目。</p>
<p data-omnivore-anchor-idx="8">如名称所表明，本栏目延续了首页人气栏目「<a data-omnivore-anchor-idx="9" href="https://sspai.com/tag/%E5%85%B7%E9%80%8F">具透</a>」的关注方向，但更加深入，关注那些隐藏在更新日志字里行间、并未被广泛报道的功能和安全更新，并解释相关背景和用法。此外，本栏目将特别重视来源考证的严谨，只引述最接近官方的第一手依据，避免道听途说和以讹传讹，也方便读者按图索骥、自行探索。</p>
<p data-omnivore-anchor-idx="10">总之，如果你曾经对着系统密密麻麻的更新日志感到一头雾水，或者听说了一些似是而非的新功能却不知如何找到，本栏目或许能为你解决一些困惑。</p>
<p data-omnivore-anchor-idx="11">收录范围方面，本栏目主要关注 Windows、macOS 等桌面系统，Android、iOS 等移动系统，Chromium、Firefox 和 Safari 等主流浏览器，以及一些重要应用软件。我们将根据反馈情况来动态调整这个范围，也欢迎就此提供反馈。</p>
<hr data-omnivore-anchor-idx="12">
<h2 data-omnivore-anchor-idx="13">三大浏览器争相介绍隐私保护「好」消息</h2>
<p data-omnivore-anchor-idx="14"><a data-omnivore-anchor-idx="15" data-mention="@PlatyHsu" user-id="bs2p0qtb34tch278vgn0" href="https://sspai.com/u/platyhsu">@PlatyHsu</a>: 众所周知，张麻子到鹅城只办三件事：公平，公平，还是***公平。</p>
<p data-omnivore-anchor-idx="16">同样众所周知，广告商到你设备里也只办三件事：追踪，追踪，还是***追踪。</p>
<p data-omnivore-anchor-idx="17">因为，如果你是个打广告的，让你晤寐思服辗转反侧的永恒问题就是：谁更愿意看我的广告？投的广告都有谁点了？这个需求本身并不必然邪恶，但传统的实现手段——以第三方 cookie 为代表——对隐私的损害与其功能往往是不成比例的。</p>
<p data-omnivore-anchor-idx="18">在过去的七月，三大主流浏览器恰好都做出了一些和广告追踪相关的变更。让我们一起来听听都有哪些好消息。</p>
<p data-omnivore-anchor-idx="19">首先出来挨骂的是 Firefox，它在 7 月 9 号发布了月度更新 128.0 的正式版。从<a data-omnivore-anchor-idx="20" href="https://sspai.com/link?target=https%3A%2F%2Fwww.mozilla.org%2Fen-US%2Ffirefox%2F128.0%2Freleasenotes%2F" target="_blank">更新日志</a>中，群众很快就发现有点不对劲：</p>
<blockquote data-omnivore-anchor-idx="21">
    <p data-omnivore-anchor-idx="22">Firefox 现在实验性支持隐私保护归因（Privacy Preserving Attribution, PPA）API，它提供了一种无需跟踪用户即可实现广告归因的替代方案。此实验功能仅在参与了源站试用（origin trial）的站点才会启用，且可在「隐私和安全」设置中新增的「网站广告偏好设置」部分中禁用。</p>
</blockquote>
<p data-omnivore-anchor-idx="23">Mozilla 在另一篇支持文章中<a data-omnivore-anchor-idx="24" href="https://sspai.com/link?target=https%3A%2F%2Fsupport.mozilla.org%2Fen-US%2Fkb%2Fprivacy-preserving-attribution" target="_blank">解释</a>了 PPA 的原理：展示广告的网站可以要求 Firefox 记住关于广告的「印象」，如果用户访问了广告指定的目标网站，并且进行了足以被认定为一次成功「转化」的操作（例如加购、下单等，取决于广告主设定），Firefox 就会为转化事件创建一个报告。但这个报告并不会提交给广告主，而是通过匿名且加密的方式提交给一个中立的第三方服务。后者会将收到的各类报告分类聚合，并通过向数据添加「噪音」来进一步提高匿名程度，最后才发送给广告主。这就是更新日志中声称「无需跟踪用户即可实现广告归因」的原因。</p>
<p data-omnivore-anchor-idx="25">但用户并不买账。在很多人看来，无论你怎么吹 PPA 的好处，这毕竟是一个打广告的功能。Firefox 没有事先通知和测试就直接在正式版中加入这个功能，并且默认启用，和 Mozilla 一贯试图营造的捍卫隐私、尊重用户立场可谓格格不入。另外，PPA 还是跟广告头子 Meta 合作开发的，很多人也不相信这个运动员能当好裁判员。</p>
<p data-omnivore-anchor-idx="26">出现公关危机后，Firefox 的 CTO 前往 Reddit <a data-omnivore-anchor-idx="27" href="https://sspai.com/link?target=https%3A%2F%2Fold.reddit.com%2Fr%2Ffirefox%2Fcomments%2F1e43w7v%2Fa_word_about_private_attribution_in_firefox%2F" target="_blank">发帖</a>救火。他主要提出了两点解释。其一，治广告如治水，宜疏不宜堵。「如果没有其他选择，广告商有巨大的经济动机绕过反追踪措施，引发一场可能赢不下来的永恒军备竞赛。」第二，大多数用户都只会接受默认选项，例如无脑点击 cookie 选项中的同意。因此，与其提供一堆用户不会多看一眼的设置，不如将默认项做好。</p>
<p data-omnivore-anchor-idx="28">公平地说，跟一些只会发外交辞令的大厂比，Firefox 这番沟通还算是诚恳和有条理的。但从评论看，他们理由也没有赢得认同。最大的担忧在于，没有理由相信贪婪成性的广告商会因为获得了 PPA 就心满意足，从此和用户和谐相处。相反，他们很可能会继续「深耕」各种追踪措施，同时通过 PPA 来扩大打击面。于是，这个看似好心的功能把一个问题变成了两个问题。此外，「做好默认项」可谓是「用户愚蠢论」的某种变体，不管你动机如何高尚，未经通知的 opt-out 就是不尊重用户。</p>
<p data-omnivore-anchor-idx="29">当然，无论你对 PPA 持什么立场，暂时倒也不用因为这一个原因弃用 Firefox。PPA 目前还处于小规模测试阶段，也很容易手动关闭。而且按照目前舆论情况，估计这个功能之后要么推迟、要么回炉，一两年内是很难正式上马了——浏览器世界常见的磨叽。</p>
<p data-omnivore-anchor-idx="30">而说到磨叽……Chrome 就有话说了。作为另一个广告头子谷歌旗下项目，Chrome 多年以来也一直试图「创新」广告技术，例如已经被口水淹死的 FLoC 和继任者 Topics，少数派此前有<a data-omnivore-anchor-idx="31" href="https://sspai.com/post/71372">文章</a>专门介绍过。简单来说，这两种技术都宣称提供隐私性更好的用户画像功能，其中 FLoC 将用户划入若干兴趣群组，按组推送广告，但被批评为分类过细、透明度不足；Topic 则只露出与最近浏览历史相关的三个主题，以供网站显示个性化广告，用户也可以自行查看和删除主题。</p>
<p data-omnivore-anchor-idx="32">但与这些努力看似矛盾的是，Chrome 是目前三大浏览器中唯一不默认禁止第三方 cookie 的。那谷歌到底是想保护还是不想保护用户隐私呢？答案是……它其实没那么在乎？有没有第三方 cookie，谷歌在广告市场上都有绝对优势；事实上，如果取消 cookie，广告商转用谷歌提议的那些「隐私保护方案」，很难说是不是对谷歌更有好处。</p>
<p data-omnivore-anchor-idx="33">这就是为什么谷歌原定在 2022 年底禁用第三方 cookie 的时间表受到了政府机构的特别关注。在英国，竞争与市场管理局于 2021 年宣布<a data-omnivore-anchor-idx="34" href="https://sspai.com/link?target=https%3A%2F%2Fwww.gov.uk%2Fcma-cases%2Finvestigation-into-suspected-anti-competitive-conduct-by-google-in-ad-tech" target="_blank">调查</a>谷歌的计划是否「损人利己」；在美国，得克萨斯等十个州也于 2020 年起诉谷歌的计划是一种遏制数字广告竞争的垄断行为。这两个案件目前都还未完结，但在监管压力下，谷歌已经多次推迟了原定禁用时间。而在 7 月 22 日，谷歌通过博客文章<a data-omnivore-anchor-idx="35" href="https://sspai.com/link?target=https%3A%2F%2Fprivacysandbox.com%2Fnews%2Fprivacy-sandbox-update%2F" target="_blank">宣布</a>：</p>
<blockquote data-omnivore-anchor-idx="36">
    <p data-omnivore-anchor-idx="37">我们不会弃用第三方 cookie，而是会在 Chrome 中引入一种新体验，让用户做出适用于全网浏览、可以随时调整的知情选择。我们正在与监管机构讨论这条新路径，并将在推出时与业界沟通。</p>
</blockquote>
<p data-omnivore-anchor-idx="38">翻译成人话：Chrome 以后大概会有一个第三方 cookie 的全局开关，默认允许，但用户可以自行关闭。</p>
<p data-omnivore-anchor-idx="39">消息一出，EFF 等用户权利倡导组织立刻跳出来批评，曾对谷歌的 cookie 替代方案持批评态度的英国政府机构也表示不满：让你改进方案，结果你直接撂挑子是几个意思？</p>
<p data-omnivore-anchor-idx="40">无论如何，这场延续四年的隐私小剧场就以维持现状收场了。</p>
<p data-omnivore-anchor-idx="41">最后提一下 Safari。7 月 16 号，Safari 浏览器内核 WebKit 的开发网站发了一篇题为《<a data-omnivore-anchor-idx="42" href="https://sspai.com/link?target=https%3A%2F%2Fwebkit.org%2Fblog%2F15697%2Fprivate-browsing-2-0%2F" target="_blank">Private Browsing 2.0</a>》的文章。这篇文章其实没有发布什么新功能，更多是把 Safari 17.0（随去年的 macOS Sonoma 一起发布）以来的一系列隐私浏览功能汇总重述，冠之以「2.0 版」的名号。</p></article>    </div> <div data-omnivore-anchor-idx="43" data-v-791783f8="" data-v-46e372cc=""><p data-omnivore-anchor-idx="44">阅读信息</p> <div data-omnivore-anchor-idx="45" data-v-791783f8=""><p data-omnivore-anchor-idx="46"><span data-omnivore-anchor-idx="47" data-v-791783f8="">全文字数</span> <span data-omnivore-anchor-idx="48" data-v-791783f8="">4956字</span></p> <p data-omnivore-anchor-idx="49"><span data-omnivore-anchor-idx="50" data-v-791783f8="">阅读本文共需</span> <span data-omnivore-anchor-idx="51" data-v-791783f8="">8分钟</span></p> <p data-omnivore-anchor-idx="52"><span data-omnivore-anchor-idx="53" data-v-791783f8="">字号选择</span> <span data-omnivore-anchor-idx="54" data-v-791783f8=""><label data-omnivore-anchor-idx="55" data-v-791783f8=""><p data-omnivore-anchor-idx="56">小</p> </label> <label data-omnivore-anchor-idx="57" data-v-791783f8=""><p data-omnivore-anchor-idx="58">中</p> </label> <label data-omnivore-anchor-idx="59" data-v-791783f8=""><p data-omnivore-anchor-idx="60">大</p> </label></span></p></div></div></div></DIV></DIV>

