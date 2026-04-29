---
id: 284f6244-113f-11ef-81b4-a33a8abc0d7d
title: |
  科技爱好者周刊（第 299 期）：AI 的关键是语料 - 阮一峰的网络日志
author: |
  作者： 阮一峰
tags:
  - RSS
date_saved: 2024-05-10 08:15:11
date_published: 2024-05-10 08:15:11
---

# 科技爱好者周刊（第 299 期）：AI 的关键是语料 - 阮一峰的网络日志
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/299-ai-18f729cff41)
[Read Original](http://www.ruanyifeng.com/blog/2024/05/weekly-issue-299.html)

<DIV id="readability-content"><DIV data-omnivore-anchor-idx="1" class="page" id="readability-page-1"><div data-omnivore-anchor-idx="2" id="alpha-inner">
                                

                          
<article data-omnivore-anchor-idx="3">
                                    














                                
                                <div data-omnivore-anchor-idx="4" id="main-content">

                                    <!-- div class="asset-body" -->
                                        <p data-omnivore-anchor-idx="5">这里记录每周值得分享的科技内容，周五发布。</p>

                                    <!-- /div -->


                                    <!-- div id="more" class="asset-more" -->
                                        <p data-omnivore-anchor-idx="6">本杂志<a data-omnivore-anchor-idx="7" href="https://github.com/ruanyf/weekly" target="_blank">开源</a>，欢迎<a data-omnivore-anchor-idx="8" href="https://github.com/ruanyf/weekly/issues" target="_blank">投稿</a>。另有<a data-omnivore-anchor-idx="9" href="https://github.com/ruanyf/weekly/issues/4390" target="_blank">《谁在招人》</a>服务，发布程序员招聘信息。合作请<a data-omnivore-anchor-idx="10" href="mailto:yifeng.ruan@gmail.com" target="_blank">邮件联系</a>（yifeng.ruan@gmail.com）。</p>

<h2 data-omnivore-anchor-idx="11">封面图</h2>

<p data-omnivore-anchor-idx="12"><img data-omnivore-anchor-idx="13" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024042401.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sE_5bZoe2n_rquNKzK8rW9cFkpG0qRnT-_Ut9Doc-mXg/https://cdn.beekka.com/blogimg/asset/202404/bg2024042401.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="14">上图是河南新乡的中原融创文旅城"冰立方"，模仿冰块堆叠的效果，10个玻璃冰块组成三个建筑单元。（<a data-omnivore-anchor-idx="15" href="https://www.archiposition.com/items/20211223113906" target="_blank">via</a>）</p>

<h2 data-omnivore-anchor-idx="16">AI 的关键是语料</h2>

<p data-omnivore-anchor-idx="17">大家有没有发现，现在打开新闻，都是 AI 模型的消息。</p>

<p data-omnivore-anchor-idx="18">今天甲发布一个模型，明天乙发布一个模型，个个（听上去）都具备了不得的能力。</p>

<p data-omnivore-anchor-idx="19"><img data-omnivore-anchor-idx="20" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050805.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sX9zgXIMLTf-vqigamH__Z7D7uyK8ckWDUB83WiqukZA/https://cdn.beekka.com/blogimg/asset/202405/bg2024050805.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="21">2023年5月有<a data-omnivore-anchor-idx="22" href="https://www.chinanews.com.cn/cj/2023/05-29/10016032.shtml" target="_blank">一个统计</a>，那个时候，10亿参数以上的模型，中国已经发布了79个。一年过去了，现在恐怕上千了。</p>

<p data-omnivore-anchor-idx="23"><img data-omnivore-anchor-idx="24" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050806.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sm_k5vSYJJxT7yRRh-tjQX5wDoONcy_qfQzIb0ydVVrw/https://cdn.beekka.com/blogimg/asset/202405/bg2024050806.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="25">说实话，我现在看到新模型，已经麻木了，压根不觉得这种消息有什么重要。</p>

<p data-omnivore-anchor-idx="26">我的观点是，不管怎么调整模型的架构、功能、参数，作用是有限的，<strong data-omnivore-anchor-idx="27">真正决定性的因素是训练模型的语料。</strong></p>

<p data-omnivore-anchor-idx="28">不需要说，你的模型多新颖、多强大，只需要告诉我，你用什么语料训练模型。</p>

<p data-omnivore-anchor-idx="29">模型完美，但是语料垃圾，一样不行；反之，模型很平常，但是语料足够，那就 OK。<strong data-omnivore-anchor-idx="30">模型不是关键，语料才是关键。</strong></p>

<p data-omnivore-anchor-idx="31"><img data-omnivore-anchor-idx="32" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050807.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sGwnvLFo1_0Xey0GAoc5kol7VkMgOf1h9Wa86_4GukKs/https://cdn.beekka.com/blogimg/asset/202405/bg2024050807.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="33">这其实不是我的观点，而是 OpenAI 的工程师 James Betker 的观点。他是 AI 专家，著名"文生图"模型 DALL-E 的第一作者。</p>

<p data-omnivore-anchor-idx="34"><img data-omnivore-anchor-idx="35" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050808.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sl5XIlWnDDtPOv3j-sco9K8TUb0IeS9F08F_loWz3HX0/https://cdn.beekka.com/blogimg/asset/202405/bg2024050808.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="36">去年，他写过<a data-omnivore-anchor-idx="37" href="https://nonint.com/2023/06/10/the-it-in-ai-models-is-the-dataset/" target="_blank">一篇文章</a>，只有几段话，在国外的影响很大。国内似乎没人提到这件事。但是我认为，这篇文章很重要。</p>

<p data-omnivore-anchor-idx="38">他说，自己的日常工作就是开发 AI 模型，但是不管怎么增加参数、调整方程，模型效果都不如语料集的大小来得显著。</p>

<p data-omnivore-anchor-idx="39">更多的训练材料，会显著提升模型效果，影响远大于其他因素。更神奇的是，<strong data-omnivore-anchor-idx="40">不同的模型拿同样的语料训练，最后的表现居然很接近。</strong></p>

<p data-omnivore-anchor-idx="41">他的结论是，模型的差异其实不是关键，决定性的是你的训练材料。只要有更多更好的语料，不管用什么模型，都会得到差不多的结果。</p>

<p data-omnivore-anchor-idx="42">初次听到，你可能觉得，这个结论难以置信，但是仔细想想，你会发现它很可能是对的。</p>

<p data-omnivore-anchor-idx="43">因为不管什么 AI 模型，最终目标只有一个，就是模仿人类的思维。语料体现的正是人类思维，同一份语料，不管你拿什么规则去分析，最后得到的结果应该是一样的，因为它包含的人类思维是不变的。</p>

<p data-omnivore-anchor-idx="44">这就好像，<u data-omnivore-anchor-idx="45">不同的画家去临摹同一个模特，如果目标都是复现原貌，那么只要画家达到一定水准，不管谁来画，结果将非常接近，因为模特的长相是不变的。</u></p>

<p data-omnivore-anchor-idx="46">这告诉我们两点启示。</p>

<p data-omnivore-anchor-idx="47">（1）哪一家公司的语料的数量多、质量好，它的模型就会强于其他公司。</p>

<p data-omnivore-anchor-idx="48">（2）开源模型完全可以替代闭源模型，前提是训练语料要足够。</p>

<p data-omnivore-anchor-idx="49">下面是 James Betker 的原文，大家仔细读读，看看是否认同他的观点。</p>

<blockquote data-omnivore-anchor-idx="50">
  <p data-omnivore-anchor-idx="51">我在 OpenAI 工作已经快一年了。这段时间里，我训练了很多生成式 AI 模型，比任何人能想到的还要多。</p>

<p data-omnivore-anchor-idx="52">每当我花了几个小时，观察和调整各种模型配置和参数时，有一件事让我印象深刻，那就是所有训练结果之间的相似性。</p>

<p data-omnivore-anchor-idx="53">我越来越发现，<strong data-omnivore-anchor-idx="54">这些模型以令人难以置信的程度，向它们的语料集靠近。</strong></p>

<p data-omnivore-anchor-idx="55">这表明在相同的语料集上训练足够长的时间，几乎每个具有足够权重和训练时间的模型都会收敛到同一点。足够大的扩散卷积网络会产生相同的结果。</p>

<p data-omnivore-anchor-idx="56">这是一个令人惊讶的观察！</p>

<p data-omnivore-anchor-idx="57">这意味着模型行为不是由架构、参数或优化器决定的。它由你的语料集决定，没有其他决定因素。其他一切因素都不过是为了有效计算以近似该语料集的手段。</p>

<p data-omnivore-anchor-idx="58">当你谈论 Lambda、ChatGPT、Bard 或Claude 时，指的并不是它们的模型，而是它们的语料集。</p>
</blockquote>

<h2 data-omnivore-anchor-idx="59">稀土开发者大会：征集议题和早鸟票</h2>

<p data-omnivore-anchor-idx="60">国内开发者的线下大聚会要来了，今年的"稀土开发者大会"已经定下了时间，就在六月底。</p>

<p data-omnivore-anchor-idx="61">这次大会的议题非常广泛：前端、AI、云计算、架构、DevOps......</p>

<p data-omnivore-anchor-idx="62"><strong data-omnivore-anchor-idx="63">最重要的一点是，它向所有开发者开放演讲台</strong>。<u data-omnivore-anchor-idx="64">如果你有工具要推出，有开发的经验要分享，大会都会提供演讲台，让你展示在全国开发者面前。</u></p>

<p data-omnivore-anchor-idx="65">只要能引起听众兴趣的干货内容，就可以申请成为演讲嘉宾，在该主题的分论坛上台发言。一旦组委会确定，即可免费参加本次大会。</p>

<p data-omnivore-anchor-idx="66">其他朋友参加大会，可以现在购买早鸟票。<strong data-omnivore-anchor-idx="67">两天的所有活动，学生票只要99元</strong>，基本上就是电影票的价格。正常票的拼团价是139元，如果两天包午餐，价格是799元。</p>

<p data-omnivore-anchor-idx="68"><img data-omnivore-anchor-idx="69" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050906.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sAgBWaA4YYbHKTcfuUvdRGQQMoq8aJ3o02VJRjIb_hpE/https://cdn.beekka.com/blogimg/asset/202405/bg2024050906.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="70">提交议题和购票，都请点击<a data-omnivore-anchor-idx="71" href="https://conf.juejin.cn/xdc2024/?utm_source=ryf" target="_blank">这个链接</a>，或者扫描上方海报的二维码。早鸟票的时间和名额有限，如果你想结交朋友、感受业内动向，不妨抓紧时间购票。</p>

<h2 data-omnivore-anchor-idx="72">科技动态</h2>

<p data-omnivore-anchor-idx="73">1、<a data-omnivore-anchor-idx="74" href="https://www.travelandleisure.com/airbnb-icons-category-orsay-up-prince-8641957" target="_blank">气球屋</a></p>

<p data-omnivore-anchor-idx="75">住宿平台 airbnb 推出了一个<a data-omnivore-anchor-idx="76" href="https://zh.airbnb.com/rooms/1126185893236246260" target="_blank">气球屋</a>，完美地再现了迪斯尼电影《飞屋环游记》，住客现在就可以申请入住。</p>

<p data-omnivore-anchor-idx="77"><img data-omnivore-anchor-idx="78" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050402.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sH6VO5pKVW0dCQTEzXL9OZr0R7606xEV9LWMfLHLueTk/https://cdn.beekka.com/blogimg/asset/202405/bg2024050402.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="79">这个屋子的所有家具和布局，跟电影里面一模一样。</p>

<p data-omnivore-anchor-idx="80"><img data-omnivore-anchor-idx="81" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050403.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sCeZutZzlJXQQofNqbmRInV7lx_oe00rUl0D_ldTJBK8/https://cdn.beekka.com/blogimg/asset/202405/bg2024050403.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="82">它的屋顶上了装了8000个氦气球。</p>

<p data-omnivore-anchor-idx="83"><img data-omnivore-anchor-idx="84" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050404.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sGSpWwtbFteLmAGem_F4Z8a-JY42nTVe45IUyStI-qKY/https://cdn.beekka.com/blogimg/asset/202405/bg2024050404.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="85">这个屋子可以"飞"起来，当然不是气球拉动的，而是用吊车把它吊在半空，然后游客住在里面。</p>

<p data-omnivore-anchor-idx="86"><img data-omnivore-anchor-idx="87" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050405.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sB-_aX2oVepfEYAm3ilMetqsgbnpQqhaSKhhspBakt6E/https://cdn.beekka.com/blogimg/asset/202405/bg2024050405.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="88"><img data-omnivore-anchor-idx="89" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050406.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sP4kcw5C3HKmRxumgHc_e4v0hAzCzhG4mDDCntUqoQ-k/https://cdn.beekka.com/blogimg/asset/202405/bg2024050406.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="90">我在想，如果吊在半空，水电怎么供应呢？看来这栋屋子一定配备了水箱、水泵、发电机和电池。</p>

<p data-omnivore-anchor-idx="91">2、<a data-omnivore-anchor-idx="92" href="https://www.euronews.com/culture/2024/04/25/miss-ai-worlds-first-beauty-contest-with-computer-generated-women" target="_blank">AI 小姐</a></p>

<p data-omnivore-anchor-idx="93">一家英国互联网公司宣布，举办第一届世界 AI 小姐选美比赛。</p>

<p data-omnivore-anchor-idx="94"><img data-omnivore-anchor-idx="95" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050109.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,slv847LCzAyLQ56zVpvged-9LmrJdA343FbEb_Se0GSo/https://cdn.beekka.com/blogimg/asset/202405/bg2024050109.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="96">今年5月10日之前，全世界的创作者都可以向<a data-omnivore-anchor-idx="97" href="https://www.waicas.com/" target="_blank">它的官网</a>提交作品。</p>

<p data-omnivore-anchor-idx="98">作品不仅仅包括 AI 生成的虚拟美女照片，还必须在社交平台上与粉丝互动，涨粉数量也是评选指标之一。</p>

<p data-omnivore-anchor-idx="99"><img data-omnivore-anchor-idx="100" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050110.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sMm9Ehtue5zH4cudDe4OBI_uJz7RJPPoMg74DJu1r7_M/https://cdn.beekka.com/blogimg/asset/202405/bg2024050110.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="101">评审团将评出前三名，获得"AI 小姐"的称号，还有总额2万美元的奖金。</p>

<p data-omnivore-anchor-idx="102">主办单位称，该比赛是为了扩大 AI 的影响，帮助创作者将内容货币化。这件事表明，娱乐业将是 AI 最早、最大的应用领域之一。</p>

<p data-omnivore-anchor-idx="103">3、<a data-omnivore-anchor-idx="104" href="https://boehs.org/node/everything-i-know-about-the-xz-backdoor" target="_blank">摩托车的呼啸声</a></p>

<p data-omnivore-anchor-idx="105">一些摩托车骑士喜欢非常响亮的引擎呼啸声，甚至去改动引擎。他们辩解，大音量的噪声能够让别人尽早注意到，从而减少交通事故。</p>

<p data-omnivore-anchor-idx="106">为了验证这种说法是否正确，一个罗马尼亚团队进行了现场实验。</p>

<p data-omnivore-anchor-idx="107"><img data-omnivore-anchor-idx="108" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024040704.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sT7_lnYQF_4Uu0hscETuzo9X85l85bfT8931zo4JvfLc/https://cdn.beekka.com/blogimg/asset/202404/bg2024040704.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="109">他们一共实验了6辆摩托车，噪音都在80分贝到110分贝之间。这是很大的噪音，飞机起飞时的噪音为100分贝到120分贝，摩托车的噪音就是这么响。</p>

<p data-omnivore-anchor-idx="110"><img data-omnivore-anchor-idx="111" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024040705.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sU99D8usctg9ztjqsJvAZUPwD4GTsei9xjV-vFdIDuaM/https://cdn.beekka.com/blogimg/asset/202404/bg2024040705.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="112">研究人员发现，如果轿车司机关闭车窗，那么只有摩托车距离汽车10米之内时，司机才会听到声音。这意味着，高速行驶时，司机根本来不及做出反应。</p>

<p data-omnivore-anchor-idx="113">这个实验说明，保证交通安全的不是响亮的引擎声，而是要降低车速。</p>

<h2 data-omnivore-anchor-idx="114">文章</h2>

<p data-omnivore-anchor-idx="115">1、<a data-omnivore-anchor-idx="116" href="https://www.163.com/dy/article/J1IE4PAD0511BLFD.html" target="_blank">CPU 超频的天花板</a>（中文）</p>

<p data-omnivore-anchor-idx="117"><img data-omnivore-anchor-idx="118" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050701.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sLj1xqLCU5EDMS1UdGtpYzcc6mSEK0q-_3xtJcbAXDQE/https://cdn.beekka.com/blogimg/asset/202405/bg2024050701.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="119">很多玩家喜欢超频 CPU，越快越好。但是，到达物理极限后，就很难突破。用了整整15年，世界纪录才从 8G Hz 提高到 9G Hz。</p>

<p data-omnivore-anchor-idx="120">2、<a data-omnivore-anchor-idx="121" href="https://medium.com/@maciej.pocwierz/how-an-empty-s3-bucket-can-make-your-aws-bill-explode-934a383cb8b1" target="_blank">空的 S3 存储桶也能产生费用</a>（英文）</p>

<p data-omnivore-anchor-idx="122"><img data-omnivore-anchor-idx="123" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024043008.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sMXOUwPnOhcyeit1a_cMyqtnh5PrAjXfaKypOGRB62s4/https://cdn.beekka.com/blogimg/asset/202404/bg2024043008.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="124">亚马逊 S3 是最流行的存储云服务，作者建了一个空存储桶，万万没想到，没有写入任何数据，两天居然产生了1300美元的费用。</p>

<p data-omnivore-anchor-idx="125">3、<a data-omnivore-anchor-idx="126" href="https://www.longluo.me/blog/2024/04/16/2024-alibaba-global-mathematics-competition-qualifying-round/" target="_blank">2024阿里巴巴全球数学竞赛预选赛</a>（中文）</p>

<p data-omnivore-anchor-idx="127"><img data-omnivore-anchor-idx="128" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050201.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sJSuApd4nbkm5cbi2j2ga2VNTze2vR0ySTtzORAxeoaE/https://cdn.beekka.com/blogimg/asset/202405/bg2024050201.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="129">作者参加2024阿里巴巴全球数学竞赛预选赛，全部七道题只会做第1、2、6题，他分享了自己的解答。（<a data-omnivore-anchor-idx="130" href="https://github.com/ruanyf/weekly/issues/4394" target="_blank">@longluo</a> 投稿）</p>

<p data-omnivore-anchor-idx="131">4、<a data-omnivore-anchor-idx="132" href="https://www.gibbard.me/using_git_offline/" target="_blank">Git 的离线使用</a>（英文）</p>

<p data-omnivore-anchor-idx="133"><img data-omnivore-anchor-idx="134" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202401/bg2024010913.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sz2hmqvsSo7im83jmeMTZM14ClDEhJdepDgcFfdDn7Do/https://cdn.beekka.com/blogimg/asset/202401/bg2024010913.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="135">作者介绍没有网络怎样备份 Git 仓库，比如把本地仓库推送到 U 盘。</p>

<p data-omnivore-anchor-idx="136">5、<a data-omnivore-anchor-idx="137" href="https://kyleshevlin.com/make-checkpoint/" target="_blank">如何为项目设置打卡点</a>（英文）</p>

<p data-omnivore-anchor-idx="138"><img data-omnivore-anchor-idx="139" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202403/bg2024033101.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,syV0V2eorvOuMIsBfOKgb_WmilKXdlbu89WSnw-EjUQI/https://cdn.beekka.com/blogimg/asset/202403/bg2024033101.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="140">本文介绍一种便捷方法，使用 Makefile 在代码仓库里面设置打卡点（checkpoint）。</p>

<p data-omnivore-anchor-idx="141">6、<a data-omnivore-anchor-idx="142" href="https://rxdb.info/articles/websockets-sse-polling-webrtc-webtransport.html" target="_blank">服务器实时消息获取的技术方案</a>（英文）</p>

<p data-omnivore-anchor-idx="143"><img data-omnivore-anchor-idx="144" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202403/bg2024031902.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sgoDhq2kLdg5KhNrBFJU7nGutlKqU9rpr5_Plcq31sz0/https://cdn.beekka.com/blogimg/asset/202403/bg2024031902.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="145">本文比较了浏览器获得服务器实时消息的五种技术方案：WebSockets、服务器发送事件、长轮询、WebRTC、WebTransport。</p>

<h2 data-omnivore-anchor-idx="146">AI 相关</h2>

<p data-omnivore-anchor-idx="147">1、<a data-omnivore-anchor-idx="148" href="https://styleof.com/s/remix-yourself" target="_blank">Remix Yourself</a></p>

<p data-omnivore-anchor-idx="149">这个网站要求上传三张照片，第一张是布局，第二张是样式，第三张是人像。</p>

<p data-omnivore-anchor-idx="150"><img data-omnivore-anchor-idx="151" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024042702.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sO0DkcmL7Sm0B1niX_YZIa2e6ci-9gau4pNJTcG4Q3IQ/https://cdn.beekka.com/blogimg/asset/202404/bg2024042702.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="152">它会将它们合成一张。</p>

<p data-omnivore-anchor-idx="153"><img data-omnivore-anchor-idx="154" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024042703.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,slSs_h-IvfMyq_lcZxXL784evZ6hhw9R7B9gvTIE5cUM/https://cdn.beekka.com/blogimg/asset/202404/bg2024042703.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="155">2、<a data-omnivore-anchor-idx="156" href="https://twogether.ai/" target="_blank">twogethe.ai</a></p>

<p data-omnivore-anchor-idx="157"><img data-omnivore-anchor-idx="158" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202311/bg2023111502.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sSDyiYZV8GYNnKGeu4cZlIituPpEurkg_nQqAdrM8cQk/https://cdn.beekka.com/blogimg/asset/202311/bg2023111502.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="159">这个网站使用 AI，生成你与名人（或者任意两个人）的合照。</p>

<p data-omnivore-anchor-idx="160">3、<a data-omnivore-anchor-idx="161" href="https://imagedescriptiongenerator.xyz/zh" target="_blank">AI 说图解图</a></p>

<p data-omnivore-anchor-idx="162"><img data-omnivore-anchor-idx="163" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024042901.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sWLNFSqGm7xqIqYZdxRd_5ozB1lm60t7hErpVVMSf0Yg/https://cdn.beekka.com/blogimg/asset/202404/bg2024042901.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="164">一个<a data-omnivore-anchor-idx="165" href="https://github.com/ShurshanX/AI-Image-Description" target="_blank">开源</a>软件，生成上传图片的文字描述，基于 ERNIE 3.5 和 GEMINI-PRO-1.5 API。（<a data-omnivore-anchor-idx="166" href="https://github.com/ruanyf/weekly/issues/4370" target="_blank">@ShurshanX</a> 投稿）</p>

<p data-omnivore-anchor-idx="167">4、<a data-omnivore-anchor-idx="168" href="https://mashable.com/article/ai-music-videos" target="_blank">AI 生成的音乐视频</a>（英文）</p>

<p data-omnivore-anchor-idx="169"><img data-omnivore-anchor-idx="170" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050706.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sv8lDDqvgMhfuJvzB3bK7ZrVu920hPkfILqQj8BjjKAM/https://cdn.beekka.com/blogimg/asset/202405/bg2024050706.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="171">OpenAI 发布了一段4分钟的音乐视频，画面和音乐都是 AI 生成的。这是迄今 AI 生成的最长视频。</p>

<p data-omnivore-anchor-idx="172">5、<a data-omnivore-anchor-idx="173" href="https://www.supertechfans.com/cn" target="_blank">HackerNews 每日 AI 摘要</a></p>

<p data-omnivore-anchor-idx="174"><img data-omnivore-anchor-idx="175" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024042903.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s7R1hMo72WXmpyiIWgxktJQZZltrRqF17UyW9CT43vjo/https://cdn.beekka.com/blogimg/asset/202404/bg2024042903.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="176">这个项目对 Hacker News 每天的热点文章，生成中文的 AI 摘要，除了官网，还会发到<a data-omnivore-anchor-idx="177" href="https://lw9eez9cc6.feishu.cn/wiki/Z408wHLlRi8MdCk6QfacpW6bnB0" target="_blank">飞书</a>上面。（<a data-omnivore-anchor-idx="178" href="https://github.com/ruanyf/weekly/issues/3634" target="_blank">@rmrf</a> 投稿）</p>

<p data-omnivore-anchor-idx="179">6、<a data-omnivore-anchor-idx="180" href="https://github.com/1Panel-dev/MaxKB" target="_blank">MaxKB</a></p>

<p data-omnivore-anchor-idx="181"><img data-omnivore-anchor-idx="182" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024043001.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sd9DpQ7Lf-UM753Di5r4jArBPnd-MBcanzflZ2-JEG8I/https://cdn.beekka.com/blogimg/asset/202404/bg2024043001.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="183">一款基于 LLM 大语言模型的知识库问答系统，可以无缝嵌入第三方网站，实现智能问答。（<a data-omnivore-anchor-idx="184" href="https://github.com/ruanyf/weekly/issues/4386" target="_blank">@maninhill</a> 投稿）</p>

<p data-omnivore-anchor-idx="185">7、<a data-omnivore-anchor-idx="186" href="https://geospy.ai/" target="_blank">GeoSpy AI</a></p>

<p data-omnivore-anchor-idx="187">这个网站使用 AI 识别上传照片的拍摄地点。</p>

<p data-omnivore-anchor-idx="188">8、<a data-omnivore-anchor-idx="189" href="https://www.bilibili.com/read/cv34309921/" target="_blank">七个免费 LLM Playground</a></p>

<p data-omnivore-anchor-idx="190">本文列出七个可以在线试用各种 LLM 的网站。（<a data-omnivore-anchor-idx="191" href="https://github.com/ruanyf/weekly/issues/4408" target="_blank">@webup</a> 投稿）</p>

<h2 data-omnivore-anchor-idx="192">工具</h2>

<p data-omnivore-anchor-idx="193">1、<a data-omnivore-anchor-idx="194" href="https://elysiajs.com/" target="_blank">ElysiaJS</a></p>

<p data-omnivore-anchor-idx="195"><img data-omnivore-anchor-idx="196" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202401/bg2024011107.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sZYUlYCoW-JsDQJXg0Q3L1SFeJzahs362aO2d6lO_Cvk/https://cdn.beekka.com/blogimg/asset/202401/bg2024011107.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="197">JS 语言的 Web 框架，专门为 Bun 运行环境开发。</p>

<p data-omnivore-anchor-idx="198">2、<a data-omnivore-anchor-idx="199" href="https://github.com/cantino/mcfly" target="_blank">mcfly</a></p>

<p data-omnivore-anchor-idx="200"><img data-omnivore-anchor-idx="201" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202401/bg2024011302.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sA1F7_q70jkrwxrfIp8t4uy4iBXV9qkZQ6YmMWCfGY78/https://cdn.beekka.com/blogimg/asset/202401/bg2024011302.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="202">Shell 操作历史的搜索工具，提供神经网络搜索功能，可以替代 ctrl-r 快捷键。</p>

<p data-omnivore-anchor-idx="203">3、<a data-omnivore-anchor-idx="204" href="https://github.com/geek-fun/dockit" target="_blank">DocKit</a></p>

<p data-omnivore-anchor-idx="205"><img data-omnivore-anchor-idx="206" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024042902.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sRq33VksEb8-QwtfgqJoG9mK7pmnz56chQDLUCZrZtMg/https://cdn.beekka.com/blogimg/asset/202404/bg2024042902.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="207">Elasticsearch/OpenSearch 的跨平台桌面客户端，集成了 OpenAI，可以用自然语言与数据库交互。（<a data-omnivore-anchor-idx="208" href="https://github.com/ruanyf/weekly/issues/4374" target="_blank">@Blankll</a> 投稿）</p>

<p data-omnivore-anchor-idx="209">4、<a data-omnivore-anchor-idx="210" href="https://github.com/slince-zero/IMaker" target="_blank">IMaker 创客</a></p>

<p data-omnivore-anchor-idx="211"><img data-omnivore-anchor-idx="212" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024042906.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sTJF14MHz8yVj9-4zkAPKLa4noceH07bzpuFI37QaJLo/https://cdn.beekka.com/blogimg/asset/202404/bg2024042906.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="213">一款开源的封面设计工具，基于 JS 的 Web 应用，有<a data-omnivore-anchor-idx="214" href="https://img-maker.vercel.app/" target="_blank">试用 Demo</a>。（<a data-omnivore-anchor-idx="215" href="https://github.com/ruanyf/weekly/issues/4385" target="_blank">@slince-zero</a> 投稿）</p>

<p data-omnivore-anchor-idx="216">5、<a data-omnivore-anchor-idx="217" href="https://github.com/buxuku/VideoSubtitleGenerator" target="_blank">VideoSubtitleGenerator</a></p>

<p data-omnivore-anchor-idx="218">一个命令行工具，通过语音识别，批量为本地的视频文件生成字幕，并支持翻译。（<a data-omnivore-anchor-idx="219" href="https://github.com/ruanyf/weekly/issues/4393" target="_blank">@buxuku</a> 投稿）</p>

<p data-omnivore-anchor-idx="220">6、<a data-omnivore-anchor-idx="221" href="https://github.com/gvcgo/version-manager" target="_blank">vmr</a></p>

<p data-omnivore-anchor-idx="222"><img data-omnivore-anchor-idx="223" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050401.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s5_zJ-uSawRdGsuKRlc9DT6-CoOMa-4toYNIaaBL1-YI/https://cdn.beekka.com/blogimg/asset/202405/bg2024050401.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="224">一个跨平台的通用版本管理器，目前支持40多种编程语言和工具。（<a data-omnivore-anchor-idx="225" href="https://github.com/ruanyf/weekly/issues/4398" target="_blank">@moqsien</a> 投稿）</p>

<p data-omnivore-anchor-idx="226">另有一个类似工具 <a data-omnivore-anchor-idx="227" href="https://github.com/version-fox/vfox" target="_blank">vfox</a>。（<a data-omnivore-anchor-idx="228" href="https://github.com/ruanyf/weekly/issues/4233" target="_blank">@aooohan</a> 投稿）</p>

<p data-omnivore-anchor-idx="229">7、<a data-omnivore-anchor-idx="230" href="https://github.com/zyx0814/Pichome" target="_blank">Pichome</a></p>

<p data-omnivore-anchor-idx="231"><img data-omnivore-anchor-idx="232" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050707.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sfOxp-KHgjgFsEPPiU81TOYIjpPw4v23-U8KADa0UKsM/https://cdn.beekka.com/blogimg/asset/202405/bg2024050707.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="233">一款开源网盘程序，使用 PHP 开发。（<a data-omnivore-anchor-idx="234" href="https://github.com/ruanyf/weekly/issues/4405" target="_blank">@fhxsnabi</a> 投稿）</p>

<p data-omnivore-anchor-idx="235">8、<a data-omnivore-anchor-idx="236" href="https://bi.cool/bi" target="_blank">笔.COOL</a></p>

<p data-omnivore-anchor-idx="237"><img data-omnivore-anchor-idx="238" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050708.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sPTTaADuHa4AqbOh54LgZYvWZgkZ4Ve6wdPGD1-0Rlig/https://cdn.beekka.com/blogimg/asset/202405/bg2024050708.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="239">CodePen 的国产替代品，实时预览 HTML、CSS 和 JavaScript 代码的渲染结果。（<a data-omnivore-anchor-idx="240" href="https://github.com/ruanyf/weekly/issues/4407" target="_blank">@uovol</a> 投稿）</p>

<p data-omnivore-anchor-idx="241">9、<a data-omnivore-anchor-idx="242" href="https://github.com/v-vibe/vue-styled-components" target="_blank">vue-styled-components</a></p>

<p data-omnivore-anchor-idx="243"><img data-omnivore-anchor-idx="244" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050709.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s9lLM5uKCwFz4JNbM6XoWy2Qhg1K9VgACDmbJk2y9W20/https://cdn.beekka.com/blogimg/asset/202405/bg2024050709.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="245">一款类似 styled-components 的 CSS 工具，支持 vue 3。（<a data-omnivore-anchor-idx="246" href="https://github.com/ruanyf/weekly/issues/4409" target="_blank">@akinocccc</a> 投稿）</p>

<p data-omnivore-anchor-idx="247">10、<a data-omnivore-anchor-idx="248" href="https://github.com/ZTFtrue/MonsterMusic" target="_blank">MonsterMusic</a></p>

<p data-omnivore-anchor-idx="249"><img data-omnivore-anchor-idx="250" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050710.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sJLlCPeqigDEQgRzoJHS89QRElw_fRUJznWplk3rIdpY/https://cdn.beekka.com/blogimg/asset/202405/bg2024050710.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="251">一款开源的安卓音乐播放器。（<a data-omnivore-anchor-idx="252" href="https://github.com/ruanyf/weekly/issues/4411" target="_blank">@ZTFtrue</a> 投稿）</p>

<p data-omnivore-anchor-idx="253">11、<a data-omnivore-anchor-idx="254" href="https://github.com/wyj0605/douban_library" target="_blank">豆瓣图书馆查询助手</a></p>

<p data-omnivore-anchor-idx="255"><img data-omnivore-anchor-idx="256" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050905.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,shFbDMXyCJp9KgtdwT5vK_JEgvN_nWUew1_Cg6gp4x0k/https://cdn.beekka.com/blogimg/asset/202405/bg2024050905.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="257">一款浏览器插件，在豆瓣读书页面上，查看该书在指定图书馆的藏书情况。（<a data-omnivore-anchor-idx="258" href="https://github.com/ruanyf/weekly/issues/4424" target="_blank">@wyj0605</a> 投稿）</p>

<h2 data-omnivore-anchor-idx="259">资源</h2>

<p data-omnivore-anchor-idx="260">1、<a data-omnivore-anchor-idx="261" href="https://github.com/ByteByteGoHq/system-design-101#rest-api-vs-graphql" target="_blank">技术概念示意图</a></p>

<p data-omnivore-anchor-idx="262"><img data-omnivore-anchor-idx="263" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202310/bg2023102601.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sz5jmqWIACjyxifTcUnKm85Ust461ZkNNuryXNiuRY5g/https://cdn.beekka.com/blogimg/asset/202310/bg2023102601.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="264">这个仓库收集各种技术概念的示意图。</p>

<p data-omnivore-anchor-idx="265">2、<a data-omnivore-anchor-idx="266" href="https://haitang.app/" target="_blank">海棠诗社</a></p>

<p data-omnivore-anchor-idx="267"><img data-omnivore-anchor-idx="268" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024042905.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,spvNNiIi8yVI4cwBMby5ztTlU9mY8cyGdkvnJjYJeRF4/https://cdn.beekka.com/blogimg/asset/202404/bg2024042905.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="269">网友开发的诗词网站。（<a data-omnivore-anchor-idx="270" href="https://github.com/ruanyf/weekly/issues/4384" target="_blank">@javayhu</a> 投稿）</p>

<p data-omnivore-anchor-idx="271">3、<a data-omnivore-anchor-idx="272" href="https://svgl.vercel.app/" target="_blank">svgl</a></p>

<p data-omnivore-anchor-idx="273"><img data-omnivore-anchor-idx="274" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202312/bg2023121702.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,skMcLFSTR1B2_CPIIyzadyxIuSG1FSbD7PiIQOiTw0No/https://cdn.beekka.com/blogimg/asset/202312/bg2023121702.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="275">一个常用徽标 Logo 的搜索引擎，提供 SVG 文件下载。</p>

<p data-omnivore-anchor-idx="276">4、<a data-omnivore-anchor-idx="277" href="https://www.brickcenter.net/" target="_blank">Brick Center</a></p>

<p data-omnivore-anchor-idx="278"><img data-omnivore-anchor-idx="279" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050904.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sHixhJ3yJRKZqvwq7dyxw1BEBwOr3MMkFEH4Eu7bsSv8/https://cdn.beekka.com/blogimg/asset/202405/bg2024050904.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="280">你输入一个关键词，这个网站自动生成它的乐高拼装。（<a data-omnivore-anchor-idx="281" href="https://github.com/ruanyf/weekly/issues/4421" target="_blank">@husu</a> 投稿）</p>

<h2 data-omnivore-anchor-idx="282">图片</h2>

<p data-omnivore-anchor-idx="283">1、<a data-omnivore-anchor-idx="284" href="https://www.macrumors.com/2024/04/26/apple-mac-base-ram-boosts-ended-tim-cook/" target="_blank">MacBook 的内存</a></p>

<p data-omnivore-anchor-idx="285">苹果的 MacBook 笔记本，内存是 8GB。如果要更多的内存，就要花钱买，价格非常贵。</p>

<p data-omnivore-anchor-idx="286"><img data-omnivore-anchor-idx="287" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024042602.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,scUtr3mObx-68NP9DSHtW1c72bP8Fykgsd2_GO2kXTX8/https://cdn.beekka.com/blogimg/asset/202404/bg2024042602.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="288">大家都在质疑，为什么内存这么少？相比之下，Windows 笔记本的最小内存，现在一般都是 16GB。</p>

<p data-omnivore-anchor-idx="289">苹果解释，macOS 系统效率高，自家的 8GB 内存等于别家的 16GB。</p>

<p data-omnivore-anchor-idx="290">有人画了一张 MacBook 内存演变图。</p>

<p data-omnivore-anchor-idx="291"><img data-omnivore-anchor-idx="292" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202404/bg2024042601.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,szWNTvHmrHoDdO1h-VAezvUiTaQk8v7ctfinqoWZUkKg/https://cdn.beekka.com/blogimg/asset/202404/bg2024042601.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="293">从上图可以看到，苹果以前是经常升级内存的，每过几年就升级一次。</p>

<p data-omnivore-anchor-idx="294">但是，2011年以后只升级过一次内存，从 6GB 变成 8GB，以后就一直没升级。</p>

<p data-omnivore-anchor-idx="295">有意思的是，2011年是蒂姆·库克成为苹果 CEO 的时间。他以前是主管供应链的，以成本控制而闻名。</p>

<p data-omnivore-anchor-idx="296">2、<a data-omnivore-anchor-idx="297" href="https://www.nkorth.com/palm/apps/#totp-authenticator" target="_blank">PalmOS</a></p>

<p data-omnivore-anchor-idx="298">还有人记得 iPhone 之前的智能手机吗？</p>

<p data-omnivore-anchor-idx="299">当时主要系统是诺基亚的塞班、微软的 Windows CE 和 PalmOS。下面就是 Palm 手机。</p>

<p data-omnivore-anchor-idx="300"><img data-omnivore-anchor-idx="301" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050702.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sUsVmjsgFGWWCIkqWLPP61Bkfhbd6qgKyaE4EXPT0N6o/https://cdn.beekka.com/blogimg/asset/202405/bg2024050702.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="302">它的用户界面如下。</p>

<p data-omnivore-anchor-idx="303"><img data-omnivore-anchor-idx="304" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050703.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s5UCozBhtcmpbHJ56ZtjhZg5SEQrCCSfznhuf_TDb0N4/https://cdn.beekka.com/blogimg/asset/202405/bg2024050703.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="305"><img data-omnivore-anchor-idx="306" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050704.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sN_pC9zkQeMyxFPEboBLeABsWUXbJ927G0Z5er23ieEE/https://cdn.beekka.com/blogimg/asset/202405/bg2024050704.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="307"><img data-omnivore-anchor-idx="308" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050705.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s5zv2sMgRcqIL3uoxjIVyww6dBX0blH8sze_DZ--RNEQ/https://cdn.beekka.com/blogimg/asset/202405/bg2024050705.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="309">不要觉得简陋，那是当时最先进的系统，售价几千元人民币一部。</p>

<h2 data-omnivore-anchor-idx="310">文摘</h2>

<p data-omnivore-anchor-idx="311">1、<a data-omnivore-anchor-idx="312" href="http://www.mendosa.com/satiety.htm" target="_blank">饱腹感指数</a></p>

<p data-omnivore-anchor-idx="313">什么食物最能够消除饥饿感？</p>

<p data-omnivore-anchor-idx="314">一个澳大利亚科学家发明了"饱腹感指数"。他选出38种食物，每一种的热量都是240卡路里。</p>

<p data-omnivore-anchor-idx="315">实验者依次食用每一种食物，每吃一种，就要在随后的两小时中，每隔15分钟为自己的饱腹程度打分。</p>

<p data-omnivore-anchor-idx="316"><img data-omnivore-anchor-idx="317" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050809.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sLFOoLlHZ82GDo0uIVUkZrul9d8rNWMklTQUWOgEtjMA/https://cdn.beekka.com/blogimg/asset/202405/bg2024050809.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="318">最后发现，碳水化合物（面包、炸薯条、煮土豆）的效果最好。其中，煮土豆的饱腹感指数最高。</p>

<p data-omnivore-anchor-idx="319">这是因为食物中含有的纤维、蛋白质和水越多，消化时间就越长，从而产生更久的饱腹感。而且，碳水化合物会立即升高血糖，从而使得身体马上知道已经饱了。</p>

<p data-omnivore-anchor-idx="320">煮土豆含有大量的纤维和水，同样热量的情况下，体积又很大，还会升高血糖，所以产生了长时间的饱腹感。</p>

<p data-omnivore-anchor-idx="321"><img data-omnivore-anchor-idx="322" data-omnivore-original-src="https://cdn.beekka.com/blogimg/asset/202405/bg2024050810.webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sP56TPJumUmfeGVYuL9M07D9tjkOho1WaovNwDLNvgFM/https://cdn.beekka.com/blogimg/asset/202405/bg2024050810.webp" alt="" title=""></p>

<p data-omnivore-anchor-idx="323">水果的饱腹感指数也很高，因为水份和纤维含量大，但是水果的热量低，同样热量的情况下，水果的份量最多，不容易全吃下去。而且，水果的胃排空速度很快，第二个小时饱腹感就会消失。</p>

<p data-omnivore-anchor-idx="324">高脂肪食物的饱腹感很差，因为它们的胃排空速度也很快。所以，吃肥肉容易饿。</p>

<p data-omnivore-anchor-idx="325">因此，水果搭配高碳水、高蛋白的食物一起吃（比如全麦面包 + 瘦肉 + 橙子），是一个比较好的饮食方案。</p>

<h2 data-omnivore-anchor-idx="326">言论</h2>

<p data-omnivore-anchor-idx="327">1、</p>

<p data-omnivore-anchor-idx="328">软件公司应该提倡"无罪文化"。</p>

<p data-omnivore-anchor-idx="329">发生产品事故或者服务中断时，不要认定罪人并惩罚他们，而要假设相关个人出于良好意图，只是没有得到正确的信息来做出更好的决策，或者没有工具及时制止他们犯错。</p>

<p data-omnivore-anchor-idx="330">-- <a data-omnivore-anchor-idx="331" href="https://www.gybe.ca/a-few-words-about-blameless-culture/" target="_blank">《关于无罪文化》</a></p>

<p data-omnivore-anchor-idx="332">2、</p>

<p data-omnivore-anchor-idx="333">我们做的许多不想做的事情，实际上很容易开始做，比如很容易开始喝酒，或者很容易打开抖音。</p>

<p data-omnivore-anchor-idx="334">如果你想停止做这些事，首先就是要设法增加障碍，让自己很难开始做它们。</p>

<p data-omnivore-anchor-idx="335">-- <a data-omnivore-anchor-idx="336" href="https://joshwolff.me/2023/01/19/blockchain-events-extra-documentation.html" target="_blank">《出现就是成功的75%》</a></p>

<p data-omnivore-anchor-idx="337">3、</p>

<p data-omnivore-anchor-idx="338">科技行业的一切，核心都是利润，而不是其他任何事情。因此，你需要尽快推出新产品或新服务，这样才可能产生利润。这意味着尽量使用更多的抽象层、更多的自动化、更少的人员，结果就是开发者越来越缺乏对技术的深入理解。</p>

<p data-omnivore-anchor-idx="339">-- <a data-omnivore-anchor-idx="340" href="https://unixsheikh.com/articles/we-have-used-too-many-levels-of-abstractions-and-now-the-future-looks-bleak.html" target="_blank">《我们使用了太多的抽象层次》</a></p>

<p data-omnivore-anchor-idx="341">4、</p>

<p data-omnivore-anchor-idx="342">岛屿巨人症指的是一种生物现象，生存在岛屿上的动物，小型物种往往会身体变大，因为缺乏天敌。相应地，大型物种往往会身体变小（又称"岛屿侏儒症"），因为不容易有稳定的食物供给。</p>

<p data-omnivore-anchor-idx="343">-- <a data-omnivore-anchor-idx="344" href="https://en.wikipedia.org/wiki/Island_gigantism" target="_blank">维基百科</a></p>

<p data-omnivore-anchor-idx="345">5、</p>

<p data-omnivore-anchor-idx="346">风险投资家没有理由破坏与你的关系，他们拒绝你的时候不会说"不"，而会用其他400种说法，比如"等你的用户再多一点的时候，再和我们谈谈"、"当你下一轮融资时，请来找我们"。</p>

<p data-omnivore-anchor-idx="347">-- <a data-omnivore-anchor-idx="348" href="https://jacobbartlett.substack.com/p/yes-actually-means-no-the-curious" target="_blank">《投资家的"是"实际上意味着"否"》</a></p>

<h2 data-omnivore-anchor-idx="349">往年回顾</h2>

<p data-omnivore-anchor-idx="350"><a data-omnivore-anchor-idx="351" href="https://www.ruanyifeng.com/blog/2023/04/weekly-issue-252.html" target="_blank">互联网创业变难了</a>（2023 [[252）]]</p>

<p data-omnivore-anchor-idx="352"><a data-omnivore-anchor-idx="353" href="https://www.ruanyifeng.com/blog/2022/04/weekly-issue-202.html" target="_blank">三个有启发的学习方法</a>（2022 [[202）]]</p>

<p data-omnivore-anchor-idx="354"><a data-omnivore-anchor-idx="355" href="https://www.ruanyifeng.com/blog/2021/04/weekly-issue-152.html" target="_blank">从北大到技校</a>（2021 [[152）]]</p>

<p data-omnivore-anchor-idx="356"><a data-omnivore-anchor-idx="357" href="https://www.ruanyifeng.com/blog/2020/04/weekly-issue-102.html" target="_blank">工作热情从何而来？</a>（2020 [[102）]]</p>

<p data-omnivore-anchor-idx="358">（完）</p>

                                    <!-- /div -->

                                </div>
    
                                
</article>
                            </div></DIV></DIV>

