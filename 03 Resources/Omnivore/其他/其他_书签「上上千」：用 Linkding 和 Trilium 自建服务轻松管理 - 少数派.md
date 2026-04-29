---
id: 354798d4-0bc0-4520-aeb9-701415f72fc3
title: |
  书签「上上千」：用 Linkding 和 Trilium 自建服务轻松管理 - 少数派
author: |
  炜智能
tags:
  - RSS
date_saved: 2024-10-11 11:32:58
date_published: 2024-10-11 11:32:58
---

# 书签「上上千」：用 Linkding 和 Trilium 自建服务轻松管理 - 少数派
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/linkding-trilium-1927b40a1af)
[Read Original](https://sspai.com/post/92796)

<DIV id="readability-content"><DIV data-omnivore-anchor-idx="1" class="page" id="readability-page-1"><div data-omnivore-anchor-idx="2" data-v-3191f18d="" data-v-16dd0c6c=""><p data-omnivore-anchor-idx="3"><span data-omnivore-anchor-idx="4"><img data-omnivore-anchor-idx="5" data-omnivore-original-src="https://cdnfile.sspai.com//2020/07/15/03489f13d747077eafb9f844d842ed53.png" data-v-3191f18d="" data-v-1e1ec6d5="" src="https://proxy-prod.omnivore-image-cache.app/0x0,s1-4DLEy2rxlnXRK4PlROciTebMiP41OP5fAXmaWld_s/https://cdnfile.sspai.com//2020/07/15/03489f13d747077eafb9f844d842ed53.png" alt="" data-src="https://cdnfile.sspai.com//2020/07/15/03489f13d747077eafb9f844d842ed53.png" lazy="loaded"></span></p><div data-omnivore-anchor-idx="6" data-v-3191f18d=""><!----><!----><p data-omnivore-anchor-idx="7">书签「上上千」：用 Linkding 和 Trilium 自建服务轻松管理</p></div></div><div data-omnivore-anchor-idx="8" data-v-16dd0c6c="" data-v-3ffff4aa=""><p data-omnivore-anchor-idx="9"><strong data-omnivore-anchor-idx="10">Matrix 首页推荐</strong>&nbsp;</p><p data-omnivore-anchor-idx="11"><a data-omnivore-anchor-idx="12" href="https://sspai.com/matrix">Matrix</a>&nbsp;是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选 Matrix 最优质的文章，展示来自用户的最真实的体验和观点。&nbsp;</p><p data-omnivore-anchor-idx="13">文章代表作者个人观点，少数派仅对标题和排版略作修改。</p><hr data-omnivore-anchor-idx="14"><h2 data-omnivore-anchor-idx="15" id="ss-hId-1" hid="ss-hId-1">前言</h2><p data-omnivore-anchor-idx="16">目前各大主流浏览器都会自带书签同步功能，无论是 PC 端还是移动端，只要登录一下账号就能轻松访问自己收藏的书签，可以说保存书签的成本越来越低。但是随着收藏内容的增多，使用书签的成本反而会直线上升。</p><p data-omnivore-anchor-idx="17">因为最近在少数派上看到了几篇网络书签的相关文章，就也想和大家分享一下目前我自己使用的一套书签方案。因为经常查各种资料，所以收藏的书签很多很杂，数量上应该有几千个，直接导致传统的浏览器收藏夹基本没法用，最后只能选了自建网络书签服务这条路，在用过许多开源方案后选择了 Linkding 和 Trilium 相结合的方案。如果你的书签数量较少，或是不具备自建服务的条件的话，本篇文章可能对你意义不大，大家可以酌情阅读。</p><p data-omnivore-anchor-idx="18">因为文章中用到的 Linkding 和 Trilium 都属于自建服务，每个人喜欢的安装方式可能都有差别，网上相关的安装教程多如牛毛，所以我在文中并不会介绍相关内容，而是专注于使用经验方面的分享。当然，安装的话我建议直接根据我下文中给出的官方文档中的步骤进行，以免网上中文教程版本滞后。</p><h2 data-omnivore-anchor-idx="19" id="ss-hId-2" hid="ss-hId-2">传统书签收藏的痛点</h2><h3 data-omnivore-anchor-idx="20">查找困难</h3><p data-omnivore-anchor-idx="21"><strong data-omnivore-anchor-idx="22">查找困难</strong>是传统浏览器书签收藏系统最大的痛点，究其本质我个人归纳为可用于查找的信息维度过少。少到什么程度呢，你可以试试导出自己浏览器的书签，一般会得到一个 html 文件，以 Edge 浏览器为例，通常一条书签记录会包含如下字段：</p><figure data-omnivore-anchor-idx="23"><table data-omnivore-anchor-idx="24"><tbody data-omnivore-anchor-idx="25"><tr data-omnivore-anchor-idx="26"><td data-omnivore-anchor-idx="27">名称</td><td data-omnivore-anchor-idx="28">含义</td></tr><tr data-omnivore-anchor-idx="29"><td data-omnivore-anchor-idx="30">folder</td><td data-omnivore-anchor-idx="31">所在文件夹名称（可多层）</td></tr><tr data-omnivore-anchor-idx="32"><td data-omnivore-anchor-idx="33">href</td><td data-omnivore-anchor-idx="34">书签记录的网址</td></tr><tr data-omnivore-anchor-idx="35"><td data-omnivore-anchor-idx="36">add_date</td><td data-omnivore-anchor-idx="37">保存书签的时间戳（部分浏览器并不支持书签按时间排序）</td></tr><tr data-omnivore-anchor-idx="38"><td data-omnivore-anchor-idx="39">icon</td><td data-omnivore-anchor-idx="40">书签图标（对搜索而言为无效信息）</td></tr><tr data-omnivore-anchor-idx="41"><td data-omnivore-anchor-idx="42">title</td><td data-omnivore-anchor-idx="43">书签名称</td></tr></tbody></table></figure><p data-omnivore-anchor-idx="44">看着有五个字段，但实际常被用于搜索的也就两条，文件夹名称和书签名称。从使用的角度来说，三层文件夹应该是普通人能接受的极限了（我自己只能接受一层文件夹）。单单靠少量的文件夹分类的话肯定是不现实的，因为当书签量级上来之后，单个文件夹中的书签数量不可避免地会增加，依旧会面临翻找困难的情况。这时候想要提高查找速度就必定要用到搜索，文件夹层级有限的情况下就只能在书签名称上做文章，较为可行的方法就是在书签名称的最后加关键词，加的越多越详细，后期搜索到的可能性就越高。理论上每次添加书签时都严格按照提前规划好的文件夹层级以及关键词命名规则的话，最后也能得到一份高度可用的收藏夹。</p><h3 data-omnivore-anchor-idx="45">整理困难</h3><p data-omnivore-anchor-idx="46">但这就引申出其另一个痛点，<strong data-omnivore-anchor-idx="47">整理困难</strong>。首先第一个困难就是文件夹的分类，事物的联系具有多样性，每一个书签指向的内容都不是非此即彼的，很难归纳出一个所有人通用的文件夹分层结构，最多在你长时间的使用中逐渐妥协为一个相对适合你自己使用的框架。但即便如此，你也总会遇到许多让你纠结其归属的书签，为了方便使用可能某一个书签需要同时在多个文件层级中保存。除了文件夹更需要费脑筋的是书签的命名，直接用默认的网页名称固然方便，但搜索的时候就难免力不从心。</p><p data-omnivore-anchor-idx="48">浏览网页的时候看到感兴趣的内容随手点一下地址栏旁的收藏按钮，这应该是很多人使用收藏夹的本能，每次加个书签都深思熟虑其文件夹归属和详尽的关键词命名未免过于严苛，流程繁琐不说，更重要的是可能会打断自己的思路，长时间下来定期整理总是逃不掉的。这时候就不得不品味浏览器收藏夹那简陋的多选和拖拽移动功能了，少量使用体验完美，量大就是折磨了。如果追求高可用性，可能还需要单独修改每个书签的名称，光是想想就够头疼的。</p><h3 data-omnivore-anchor-idx="49">快照</h3><p data-omnivore-anchor-idx="50">接下来的痛点严格来说算是我个人的痛点，和浏览器中的收藏夹系统本身无关，属于我希望它有但是它没有的功能。首当其冲的就是<strong data-omnivore-anchor-idx="51">快照</strong>功能，虽然这个功能可以通过安装浏览器插件的形式轻松实现，但是插件保存的快照终究是另外存放的，需要自己手动保存不说，后期想与书签对上还免不了一番折腾，便利性上终究差点意思。</p><h3 data-omnivore-anchor-idx="52">多端同步</h3><p data-omnivore-anchor-idx="53">最后一个痛点则是<strong data-omnivore-anchor-idx="54">多端同步</strong>，虽然开篇就说了目前的浏览器都支持多端同步，但是很尴尬的一点就是，我在各个平台上使用的浏览器并不相同，电脑上还好说，直接用 Edge 就行，但是手机、平板之类的移动设备就比较麻烦了，可能会存在多个浏览器混用的情况，这时候依托于浏览器账户的收藏夹同步功能就捉襟见肘了。</p><p data-omnivore-anchor-idx="55"><a data-omnivore-anchor-idx="56" href="https://sspai.com/link?target=https%3A%2F%2Flinkding.link%2F" target="_blank">Linkding</a> 是目前为止我用下来最好用的开源网络书签服务，基本解决了我上面提到的四个痛点。不过这个服务有几个比较明显的缺点，没法接受的话就不用看下去了。</p><ul data-omnivore-anchor-idx="57"><li data-omnivore-anchor-idx="58">操作界面只有英文。当然，中文书签是支持的，只是设置、按钮等只有英文。我不太清楚有没有大佬封装过中文的镜像，暂时没有查找过。不过其实对使用的影响几乎没有，总共也就那么几个单词，并没有什么太高的门槛。</li><li data-omnivore-anchor-idx="59">部分服务，类似书签图标等需要使用魔法或是自行配置相关参数。核心功能其实都是服务器本地运行的，不使用魔法体感下来影响不大。</li><li data-omnivore-anchor-idx="60">默认界面比较朴实，基本就是一堆网页元素的简单堆积。理论上如果你懂 css 的话可以在设置中自定义 css 语句来修改显示效果，想要花里胡哨也是可以实现的。</li></ul><figure data-omnivore-anchor-idx="61"><img data-omnivore-anchor-idx="62" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3moitb34t98cknnn90.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sUr3NGf45e3u-QOpwVGWf4PSAXHNg0WdZtNhSnOW9ol4/https://cdnfile.sspai.com/editor/u_/cs3moitb34t98cknnn90.png?imageView2/2/format/webp" alt="PCG7bNcaoox06qxRZvrcarl1nkg" data-original="https://cdnfile.sspai.com/editor/u_/cs3moitb34t98cknnn90.png?imageView2/2/format/webp" data-index="0"></figure><h3 data-omnivore-anchor-idx="63">标签系统</h3><h4 data-omnivore-anchor-idx="64">概念介绍</h4><p data-omnivore-anchor-idx="65">先说一下 Linkding 最核心的标签（Tag）系统，与传统的文件夹系统不同，标签系统更加自由和发散。文件夹系统是线性的，一个书签只能从属于一个文件夹，一个子文件夹只能从属于一个父文件夹；而标签系统则是多对多的关系，一个书签可以同时拥有无数个标签，各个标签之间都是同级的，互相之间没有从属关系。</p><figure data-omnivore-anchor-idx="66"><img data-omnivore-anchor-idx="67" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3moj5b34t98erkk5e0.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s7LLwk5DdCnY0JbOLMtOgf7bU6Sqee542RgVpgKNPGcc/https://cdnfile.sspai.com/editor/u_/cs3moj5b34t98erkk5e0.png?imageView2/2/format/webp" alt="AK4wb09yuodhE2xcXTBcMhiMnPh" data-original="https://cdnfile.sspai.com/editor/u_/cs3moj5b34t98erkk5e0.png?imageView2/2/format/webp" data-index="1"></figure><p data-omnivore-anchor-idx="68">乍一看好像区别不大，但实际使用时却是天壤之别。举一个简单的例子，假如我需要在书签收藏中找到 PyMongo 的官方文档，那在 Linkding 中只需要先点击「@文档」标签，再点击「mongodb」标签，就能轻松筛选出所有符合的结果。对于经常需要比对同一类型资料，或是「模糊搜索」的用户可谓是神器。</p><figure data-omnivore-anchor-idx="69"><img data-omnivore-anchor-idx="70" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3mojdb34t98idth770.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sPnz9fKVi1tJepV4lz4r2UbGA0s4t9QsshzMsv8U7c8A/https://cdnfile.sspai.com/editor/u_/cs3mojdb34t98idth770.png?imageView2/2/format/webp" alt="FFksbB57toHxSHxrUwicomHHnXc" data-original="https://cdnfile.sspai.com/editor/u_/cs3mojdb34t98idth770.png?imageView2/2/format/webp" data-index="2"></figure><h4 data-omnivore-anchor-idx="71">使用技巧</h4><p data-omnivore-anchor-idx="72">之前提到过 Linkding 界面只支持英文，这一点对其标签的排列顺序其实也存在着影响。观察 Tags 这一列就能发现，标签是按照其首字母分行排列的，对于英文标签这样排列非常合理，但是如果使用全中文标签的话就会遇到一个问题，那就是所有中文开头的标签都会被归类到同一行。</p><p data-omnivore-anchor-idx="73">这个特性对中文标签来说非常致命，毕竟所有标签挤在一行想要快速找出其中一个的难度就会大大提高。不过解决的方法非常简单，就是根据每个中文标签开头字符的拼音为其添加一个首字母，类似「x下载」这样的形式。进一步地，我们可以利用其排列特性来实现一些别的需求，比如说对于常用链接可以添加一个「!常用」的标签，这样该标签就会默认出现在标签区域的第一行。</p><figure data-omnivore-anchor-idx="74"><img data-omnivore-anchor-idx="75" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3mojlb34t98idth77g.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s_AvzSUqXYcqvX9aQ8L6QGdDPbcjjp7PFkgzMJqOlAhA/https://cdnfile.sspai.com/editor/u_/cs3mojlb34t98idth77g.png?imageView2/2/format/webp" alt="KYMZbRMD6o8cj3xdCXncHgs5n0c" data-original="https://cdnfile.sspai.com/editor/u_/cs3mojlb34t98idth77g.png?imageView2/2/format/webp" data-index="3"></figure><p data-omnivore-anchor-idx="76">标签机制因为其灵活性，刚开始使用的时候可能会有点无所适从，不知从何处入手，收藏的时候可能还会产生一些不必要的纠结，比如这个词要不要设置成标签等。这些其实都是正常情况，我刚开始用的时候也是这样，主要是怕用的久了之后杂乱的标签和之前的文件夹一样难以整理。作为一个长期使用过的用户，我给出两条参考建议：</p><ul data-omnivore-anchor-idx="77"><li data-omnivore-anchor-idx="78">每个链接都要分配一个大类，比如可以根据其功能分成「@工具」「@论坛」「@娱乐」等，这些大类不必一次整理清楚，可以想到什么就写什么，不过为了和其他标签形成区分，推荐以「@」开头。当某一天你觉得无论是什么链接都能划分到这些大类之后，就可以开始尝试将它们合并精简，最终将大类个数控制在个位数即可。这些大类标签其实充当着传统书签系统中的一级文件夹的角色，如果你平常就有整理书签文件夹的习惯，可以直接把这些文件夹的名称套用过来。</li><li data-omnivore-anchor-idx="79">除了大类标签外，每一个链接都尽可能地将所有其涉及的特征点作为标签加上去。加标签的时候不需要有任何的顾虑，所有你脑海中当时跳出来的词汇都可以作为标签加上去，多多益善。你加的标签越多，后续使用的时候找起来就越简单，唯一要注意的是同义词不要重复出现，能复用标签时就尽量不要再创建一个新的类似标签。</li></ul><h3 data-omnivore-anchor-idx="80">书签结构</h3><h4 data-omnivore-anchor-idx="81">概念介绍</h4><p data-omnivore-anchor-idx="82">默认安装参数下，Linkding 的数据库使用的是 SQLite，所以书签数据是以「.sqlite3」后缀的文件格式保存的。只要用 SQLiteStudio 之类的软件打开就能查看和修改其中的数据。</p><p data-omnivore-anchor-idx="83">我们可以先看一下 Linkding 中书签的所有字段：</p><figure data-omnivore-anchor-idx="84"><img data-omnivore-anchor-idx="85" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3mojtb34t98erkk5eg.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,svM7gv-UWESePOlncVjV1UnxJW5iY81A2sLWTDA44DxA/https://cdnfile.sspai.com/editor/u_/cs3mojtb34t98erkk5eg.png?imageView2/2/format/webp" alt="E4ulbSWIho9lpPxqYyXcBFTInOb" data-original="https://cdnfile.sspai.com/editor/u_/cs3mojtb34t98erkk5eg.png?imageView2/2/format/webp" data-index="4"></figure><figure data-omnivore-anchor-idx="86"><table data-omnivore-anchor-idx="87"><tbody data-omnivore-anchor-idx="88"><tr data-omnivore-anchor-idx="89"><td data-omnivore-anchor-idx="90">名称</td><td data-omnivore-anchor-idx="91">含义</td></tr><tr data-omnivore-anchor-idx="92"><td data-omnivore-anchor-idx="93">id</td><td data-omnivore-anchor-idx="94">书签主键</td></tr><tr data-omnivore-anchor-idx="95"><td data-omnivore-anchor-idx="96">url</td><td data-omnivore-anchor-idx="97">书签记录的网址</td></tr><tr data-omnivore-anchor-idx="98"><td data-omnivore-anchor-idx="99">title</td><td data-omnivore-anchor-idx="100">书签名称</td></tr><tr data-omnivore-anchor-idx="101"><td data-omnivore-anchor-idx="102">description</td><td data-omnivore-anchor-idx="103">书签介绍</td></tr><tr data-omnivore-anchor-idx="104"><td data-omnivore-anchor-idx="105">website_title</td><td data-omnivore-anchor-idx="106">网页默认名称</td></tr><tr data-omnivore-anchor-idx="107"><td data-omnivore-anchor-idx="108">website_description</td><td data-omnivore-anchor-idx="109">网页默认介绍</td></tr><tr data-omnivore-anchor-idx="110"><td data-omnivore-anchor-idx="111">unread</td><td data-omnivore-anchor-idx="112">是否标为待阅读</td></tr><tr data-omnivore-anchor-idx="113"><td data-omnivore-anchor-idx="114">is_archived</td><td data-omnivore-anchor-idx="115">是否标为已归档（即不常用书签或失效书签）</td></tr><tr data-omnivore-anchor-idx="116"><td data-omnivore-anchor-idx="117">web_archive_snapshot_url</td><td data-omnivore-anchor-idx="118">Internet Archive 中该网页的快照地址</td></tr><tr data-omnivore-anchor-idx="119"><td data-omnivore-anchor-idx="120">favicon_file</td><td data-omnivore-anchor-idx="121">图标文件保存地址</td></tr><tr data-omnivore-anchor-idx="122"><td data-omnivore-anchor-idx="123">notes</td><td data-omnivore-anchor-idx="124">关于该书签的笔记（支持 Markdown 语法）</td></tr><tr data-omnivore-anchor-idx="125"><td data-omnivore-anchor-idx="126">preview_image_file</td><td data-omnivore-anchor-idx="127">预览图片保存地址</td></tr><tr data-omnivore-anchor-idx="128"><td data-omnivore-anchor-idx="129">tags</td><td data-omnivore-anchor-idx="130">标签与书签的对应关系在一张单独的关系表中，上图中并没有体现</td></tr></tbody></table></figure><p data-omnivore-anchor-idx="131">与标签相关的字段比较简单，就一张标签信息表和标签-书签多对多关系表。</p><figure data-omnivore-anchor-idx="132"><img data-omnivore-anchor-idx="133" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3mok5b34t98cknnn9g.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s81FSEJqL8uNhKPfNn422OtYcMW9YDcdKrtF-n35tff0/https://cdnfile.sspai.com/editor/u_/cs3mok5b34t98cknnn9g.png?imageView2/2/format/webp" alt="FpgSbA5NFoigKOxXjJjcl0I9nqh" data-original="https://cdnfile.sspai.com/editor/u_/cs3mok5b34t98cknnn9g.png?imageView2/2/format/webp" data-index="5"></figure><figure data-omnivore-anchor-idx="134"><img data-omnivore-anchor-idx="135" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3mokdb34t98cknnna0.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s_AnZNSbYTRyjrTrNWyke08gUUTuu3IO26Qq2ItJAu5Q/https://cdnfile.sspai.com/editor/u_/cs3mokdb34t98cknnna0.png?imageView2/2/format/webp" alt="XBkIbGT9Do9126xXLq7cGsJhnJc" data-original="https://cdnfile.sspai.com/editor/u_/cs3mokdb34t98cknnna0.png?imageView2/2/format/webp" data-index="6"></figure><p data-omnivore-anchor-idx="136">常用的几个书签属性在使用浏览器插件收藏网页的时候就可以直接编辑。</p><figure data-omnivore-anchor-idx="137"><img data-omnivore-anchor-idx="138" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3moklb34t98idth780.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,swQYpUT0gRTLujzel_LzPGWMnnEaelMnx2nOkF_c3vPk/https://cdnfile.sspai.com/editor/u_/cs3moklb34t98idth780.png?imageView2/2/format/webp" alt="M5e5bCM0po1mDexcXTfciFNOnmh" data-original="https://cdnfile.sspai.com/editor/u_/cs3moklb34t98idth780.png?imageView2/2/format/webp" data-index="7"></figure><p data-omnivore-anchor-idx="139">与传统书签系统中可怜的两三个搜索维度相比，Linkding 明显领先太多了，表格中出现的字段内容基本都可以作为搜索元素来进行查找。也就是说，无论是标题、介绍，还是笔记中出现的文本都可以作为关键词来检索，在保持标题简单明了的前提下依旧可以获得远超传统书签的搜索维度。</p><h4 data-omnivore-anchor-idx="140">使用技巧</h4><p data-omnivore-anchor-idx="141">因为书签的特征不再只有标题这一个维度，所以保存书签时一般不需要修改网页默认的名称，就算要修改也建议将其修改得更加简洁明了。为了便于后续搜索或再阅读，description 以及 notes 需要作为修改的重点。大部分情况下 description 可以使用网页默认描述，要手动编辑的话也尽量用客观的语句描述其实际内容。而 notes 则可以自由一点，并且其本身支持 Markdown 语法，显示效果也会好很多。以我自己为例给大家一些参考，某些知识类的文章可能要点就那么几句话或是几行代码，没什么单独开篇笔记收藏的必要，就可以直接写在 notes 中；找到合适的素材时可以在 notes 中记录下该素材的用法或当时的灵感思路等。总结一下就是三点：</p><ul data-omnivore-anchor-idx="142"><li data-omnivore-anchor-idx="143">title：简洁明了，一般保持默认即可。</li><li data-omnivore-anchor-idx="144">description：客观描述网页内容，一般保持默认即可。</li><li data-omnivore-anchor-idx="145">notes：记录网页中的核心知识点、收藏的理由、灵感思路等，一般留空即可。</li></ul><p data-omnivore-anchor-idx="146">unread 和 is_archived 这两个字段很好理解，前者就是很多浏览器自带的待阅读功能，后者则是归档功能，就是把已经失效或是长时间不会再用到的书签隐藏到一个单独的分类中。两者都可以通过首页的 Bookmarks 按钮快速切换，各自都有其独立的分区。</p><figure data-omnivore-anchor-idx="147"><img data-omnivore-anchor-idx="148" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3moklb34t98cknnnag.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,scNjFsbx1awtlnu5awNvzHhccQWnt_HaQG0rkR4TCafQ/https://cdnfile.sspai.com/editor/u_/cs3moklb34t98cknnnag.png?imageView2/2/format/webp" alt="XB9EbFELfoUTNGxXwgQcV9pzn5K" data-original="https://cdnfile.sspai.com/editor/u_/cs3moklb34t98cknnnag.png?imageView2/2/format/webp" data-index="8"></figure><p data-omnivore-anchor-idx="149">归档这个功能我很喜欢，相较于直接把失效书签删除，把它们关小黑屋总有一种一朝一日它们还能重见天日的错觉。反正也不占什么空间，留着当个念想总是好的。</p><p data-omnivore-anchor-idx="150">相较于归档，待阅读的花样就多一点。我一般不把它作为待阅读列表使用，而是更接近近期常用的概念，或者说是素材库，把搜索出来也许会用的书签统一标为待阅读。Linkding 的批处理功能是相当优秀的，如下图所示，归档、删除、增加标签、移除标签、标记为已读、标记为未读，这六个核心功能都支持批处理操作，效率远超浏览器收藏夹。</p><figure data-omnivore-anchor-idx="151"><img data-omnivore-anchor-idx="152" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3moktb34t98erkk5f0.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sLV0RQbk9FhdARNYnB3RzX8IXFvxZDVT1DH54bDzsgZk/https://cdnfile.sspai.com/editor/u_/cs3moktb34t98erkk5f0.png?imageView2/2/format/webp" alt="LpuwbUmwso84jixbZhOcoQAJnPf" data-original="https://cdnfile.sspai.com/editor/u_/cs3moktb34t98erkk5f0.png?imageView2/2/format/webp" data-index="9"></figure><h4 data-omnivore-anchor-idx="153">拓展</h4><p data-omnivore-anchor-idx="154">上面提到过的三张表 bookmarks_bookmark、bookmarks_tag、bookmarks_bookmark_tags 是 Linkding 中最核心的数据表，它们都在 Linkding 数据文件夹的 db.sqlite3 这一数据库文件中。因为该文件中数据都是公开的，没有加密一说，操作空间就很大了。</p><figure data-omnivore-anchor-idx="155"><img data-omnivore-anchor-idx="156" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3mol5b34t98erkk5fg.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sEZ_4f7N1GfhqSqiq4tS2qHajzPKMtIHzhB8JabBpcL8/https://cdnfile.sspai.com/editor/u_/cs3mol5b34t98erkk5fg.png?imageView2/2/format/webp" alt="M2aFbzwSkoqFeKxd2zScWUnqnbg" data-original="https://cdnfile.sspai.com/editor/u_/cs3mol5b34t98erkk5fg.png?imageView2/2/format/webp" data-index="10"></figure><p data-omnivore-anchor-idx="157">Linkding 虽然自带导出书签为 html 文件的功能，但是因为其本身并没有文件夹的概念，所以使用其导出的文件导入到 Edge 浏览器就会存在水土不服的情况。我的服务器有一次宕机之后系统出了点问题，但书签每天都要用，就写了个 python 脚本将其按照特定的要求导出为 Edge 可识别的 html 文件应急。具体的导出要求是以「@」开头的标签为文件夹，将所有书签分类放置在其中，同时将每个书签的标签汇总后添加到书签名称的最后。脚本用起来非常简单，与 db.sqlite3 文件放置在同一目录下运行即可。</p><p data-omnivore-anchor-idx="158">这里给出这个案例有多方面的考虑，一是向大家展示一下 Linkding 这种用单个数据库文件存储数据对于个人用户的便利性，因为需要备份的数据就那么几个，甚至以后 Linkding 不再维护，用户依旧可以很轻松地转移到任何其他平台；二是给大家提供另一种 Linkding 的使用思路，可以将其作为单纯的整理工具，使用其强大的批处理界面以及优秀的数据库结构来整理汇总自己的书签，最后导出到更常使用的平台。</p><pre data-omnivore-anchor-idx="159"><code data-omnivore-anchor-idx="160" class="hljs language-python language-ruby"><span data-omnivore-anchor-idx="161" class="hljs-keyword">import</span> datetime
<span data-omnivore-anchor-idx="162" class="hljs-keyword">import</span> sqlite3
<span data-omnivore-anchor-idx="163" class="hljs-keyword">from</span> typing <span data-omnivore-anchor-idx="164" class="hljs-keyword">import</span> Optional

<span data-omnivore-anchor-idx="165" class="hljs-keyword">from</span> dateutil.parser <span data-omnivore-anchor-idx="166" class="hljs-keyword">import</span> parse
<span data-omnivore-anchor-idx="167" class="hljs-keyword">from</span> lxml <span data-omnivore-anchor-idx="168" class="hljs-keyword">import</span> etree


<span data-omnivore-anchor-idx="169" class="hljs-class"><span data-omnivore-anchor-idx="170" class="hljs-keyword">class</span> <span data-omnivore-anchor-idx="171" class="hljs-title">DatabaseManager</span>:</span>

    
<span data-omnivore-anchor-idx="172" class="hljs-string">"""


    用于读取书签数据库文件


    """</span>



    
<span data-omnivore-anchor-idx="173" class="hljs-function"><span data-omnivore-anchor-idx="174" class="hljs-keyword">def</span> <span data-omnivore-anchor-idx="175" class="hljs-title">__init__</span><span data-omnivore-anchor-idx="176" class="hljs-params">(self, db_file: str)</span>:</span>
        self.conn = sqlite3.connect(db_file)
        self.cursor = self.conn.cursor()

    <span data-omnivore-anchor-idx="177" class="hljs-function"><span data-omnivore-anchor-idx="178" class="hljs-keyword">def</span> <span data-omnivore-anchor-idx="179" class="hljs-title">__enter__</span><span data-omnivore-anchor-idx="180" class="hljs-params">(self)</span>:</span>
        <span data-omnivore-anchor-idx="181" class="hljs-keyword">return</span> self

    <span data-omnivore-anchor-idx="182" class="hljs-function"><span data-omnivore-anchor-idx="183" class="hljs-keyword">def</span> <span data-omnivore-anchor-idx="184" class="hljs-title">__exit__</span><span data-omnivore-anchor-idx="185" class="hljs-params">(self, exc_type, exc_val, exc_tb)</span>:</span>
        self.cursor.close()
        self.conn.close()

    <span data-omnivore-anchor-idx="186" class="hljs-function"><span data-omnivore-anchor-idx="187" class="hljs-keyword">def</span> <span data-omnivore-anchor-idx="188" class="hljs-title">__iter__</span><span data-omnivore-anchor-idx="189" class="hljs-params">(self)</span>:</span>
        self.cursor.execute(<span data-omnivore-anchor-idx="190" class="hljs-string">"select * from bookmarks_bookmark"</span>)
        <span data-omnivore-anchor-idx="191" class="hljs-keyword">return</span> self

    <span data-omnivore-anchor-idx="192" class="hljs-function"><span data-omnivore-anchor-idx="193" class="hljs-keyword">def</span> <span data-omnivore-anchor-idx="194" class="hljs-title">__next__</span><span data-omnivore-anchor-idx="195" class="hljs-params">(self)</span>:</span>
        <span data-omnivore-anchor-idx="196" class="hljs-comment"># 获取单条书签数据</span>
        tem = self.cursor.fetchone()
        <span data-omnivore-anchor-idx="197" class="hljs-keyword">if</span> tem <span data-omnivore-anchor-idx="198" class="hljs-keyword">is</span> <span data-omnivore-anchor-idx="199" class="hljs-literal">None</span>:
            <span data-omnivore-anchor-idx="200" class="hljs-keyword">raise</span> StopIteration
        <span data-omnivore-anchor-idx="201" class="hljs-comment"># 根据书签 id 查找对应的标签</span>
        c = self.conn.cursor()
        cmd = <span data-omnivore-anchor-idx="202" class="hljs-string">"select bookmarks_tag.name from bookmarks_bookmark_tags "</span> \
              <span data-omnivore-anchor-idx="203" class="hljs-string">"join bookmarks_tag on bookmarks_bookmark_tags.tag_id = bookmarks_tag.id "</span> \
              <span data-omnivore-anchor-idx="204" class="hljs-string">"where bookmarks_bookmark_tags.bookmark_id = {}"</span>
        tags = c.execute(cmd.format(tem[<span data-omnivore-anchor-idx="205" class="hljs-number">0</span>])).fetchall()
        tags = [tag[<span data-omnivore-anchor-idx="206" class="hljs-number">0</span>] <span data-omnivore-anchor-idx="207" class="hljs-keyword">for</span> tag <span data-omnivore-anchor-idx="208" class="hljs-keyword">in</span> tags]
        res = list(tem)
        <span data-omnivore-anchor-idx="209" class="hljs-comment"># 将标签数据以 list 的形式添加到原本书签数据的最后</span>
        res.append(tags)
        c.close()
        <span data-omnivore-anchor-idx="210" class="hljs-keyword">return</span> res


<span data-omnivore-anchor-idx="211" class="hljs-function"><span data-omnivore-anchor-idx="212" class="hljs-keyword">def</span> <span data-omnivore-anchor-idx="213" class="hljs-title">timestr_to_timestamp</span><span data-omnivore-anchor-idx="214" class="hljs-params">(timestr: str)</span> -&gt; int:</span>

    
<span data-omnivore-anchor-idx="215" class="hljs-string">"""


    将字符串形式的时间转为时间戳


    
:param
 timestr:


    
:return
:


    """</span>


    
<span data-omnivore-anchor-idx="216" class="hljs-keyword">return</span> int(parse(timestr + <span data-omnivore-anchor-idx="217" class="hljs-string">"+0000"</span>).timestamp())


<span data-omnivore-anchor-idx="218" class="hljs-class"><span data-omnivore-anchor-idx="219" class="hljs-keyword">class</span> <span data-omnivore-anchor-idx="220" class="hljs-title">HtmlGenerator</span>:</span>

    
<span data-omnivore-anchor-idx="221" class="hljs-string">"""


    用于构造 Edge 浏览器支持导入的书签文件


    主要参考 Edge 浏览器导出的 html 文件格式


    """</span>



    
<span data-omnivore-anchor-idx="222" class="hljs-function"><span data-omnivore-anchor-idx="223" class="hljs-keyword">def</span> <span data-omnivore-anchor-idx="224" class="hljs-title">__init__</span><span data-omnivore-anchor-idx="225" class="hljs-params">(self)</span>:</span>
        self.root = etree.Element(<span data-omnivore-anchor-idx="226" class="hljs-string">"DT"</span>)
        <span data-omnivore-anchor-idx="227" class="hljs-comment"># 当前时间戳，用于后续一些需要时间戳的场景</span>
        <span data-omnivore-anchor-idx="228" class="hljs-comment"># self.t = str(int(datetime.datetime.now(datetime.UTC).timestamp()))  # 高版本python</span>
        self.t = str(int(datetime.datetime.utcnow().timestamp()))
        h3 = etree.SubElement(self.root, <span data-omnivore-anchor-idx="229" class="hljs-string">"H3"</span>,
                              {
                                  <span data-omnivore-anchor-idx="230" class="hljs-string">"ADD_DATE"</span>: self.t,
                                  <span data-omnivore-anchor-idx="231" class="hljs-string">"LAST_MODIFIED"</span>: self.t,
                                  <span data-omnivore-anchor-idx="232" class="hljs-string">"PERSONAL_TOOLBAR_FOLDER"</span>: <span data-omnivore-anchor-idx="233" class="hljs-string">"true"</span>,
                              })
        h3.text = <span data-omnivore-anchor-idx="234" class="hljs-string">"收藏夹栏"</span>
        <span data-omnivore-anchor-idx="235" class="hljs-comment"># 后续用于存放各文件夹和书签的元素</span>
        self.dl = etree.SubElement(self.root, <span data-omnivore-anchor-idx="236" class="hljs-string">"DL"</span>)
        <span data-omnivore-anchor-idx="237" class="hljs-comment"># 存放各书签文件夹对应的元素</span>
        self.folder = {}

    <span data-omnivore-anchor-idx="238" class="hljs-function"><span data-omnivore-anchor-idx="239" class="hljs-keyword">def</span> <span data-omnivore-anchor-idx="240" class="hljs-title">generate_folder</span><span data-omnivore-anchor-idx="241" class="hljs-params">(self, name: str)</span>:</span>

        
<span data-omnivore-anchor-idx="242" class="hljs-string">"""


        创建一个书签文件夹对应的元素


        
:param
 name:


        
:return
:


        """</span>


        
dt = etree.SubElement(self.dl, <span data-omnivore-anchor-idx="243" class="hljs-string">"dt"</span>)
        h3 = etree.SubElement(dt, <span data-omnivore-anchor-idx="244" class="hljs-string">"H3"</span>,
                              {
                                  <span data-omnivore-anchor-idx="245" class="hljs-string">"ADD_DATE"</span>: self.t,
                                  <span data-omnivore-anchor-idx="246" class="hljs-string">"LAST_MODIFIED"</span>: self.t,
                              })
        h3.text = name
        dl = etree.SubElement(dt, <span data-omnivore-anchor-idx="247" class="hljs-string">"DL"</span>)
        self.folder[name] = dl

    <span data-omnivore-anchor-idx="248" class="hljs-function"><span data-omnivore-anchor-idx="249" class="hljs-keyword">def</span> <span data-omnivore-anchor-idx="250" class="hljs-title">add_bookmark</span><span data-omnivore-anchor-idx="251" class="hljs-params">(self, url: str, add_date: str, title: str, folder: Optional[str] = None)</span>:</span>

        
<span data-omnivore-anchor-idx="252" class="hljs-string">"""


        添加书签到指定父元素中


        
:param
 url:


        
:param
 add_date:


        
:param
 title:


        
:param
 folder:


        
:return
:


        """</span>


        
<span data-omnivore-anchor-idx="253" class="hljs-keyword">if</span> folder <span data-omnivore-anchor-idx="254" class="hljs-keyword">is</span> <span data-omnivore-anchor-idx="255" class="hljs-literal">None</span>:
            dt = etree.SubElement(self.dl, <span data-omnivore-anchor-idx="256" class="hljs-string">"dt"</span>)
        <span data-omnivore-anchor-idx="257" class="hljs-keyword">else</span>:
            dt = etree.SubElement(self.folder[folder], <span data-omnivore-anchor-idx="258" class="hljs-string">"dt"</span>)
        a = etree.SubElement(dt, <span data-omnivore-anchor-idx="259" class="hljs-string">"A"</span>, {
            <span data-omnivore-anchor-idx="260" class="hljs-string">"HREF"</span>: url,
            <span data-omnivore-anchor-idx="261" class="hljs-string">"ADD_DATE"</span>: add_date,
        })
        a.text = title

    <span data-omnivore-anchor-idx="262" class="hljs-function"><span data-omnivore-anchor-idx="263" class="hljs-keyword">def</span> <span data-omnivore-anchor-idx="264" class="hljs-title">tostring</span><span data-omnivore-anchor-idx="265" class="hljs-params">(self)</span>:</span>

        
<span data-omnivore-anchor-idx="266" class="hljs-string">"""


        将根元素转化为字符串


        
:return
:


        """</span>


        
<span data-omnivore-anchor-idx="267" class="hljs-keyword">return</span> etree.tostring(self.root, encoding=<span data-omnivore-anchor-idx="268" class="hljs-string">"utf-8"</span>, pretty_print=<span data-omnivore-anchor-idx="269" class="hljs-literal">True</span>).decode(<span data-omnivore-anchor-idx="270" class="hljs-string">"utf-8"</span>)

    <span data-omnivore-anchor-idx="271" class="hljs-function"><span data-omnivore-anchor-idx="272" class="hljs-keyword">def</span> <span data-omnivore-anchor-idx="273" class="hljs-title">handle_one</span><span data-omnivore-anchor-idx="274" class="hljs-params">(self, data: list)</span>:</span>

        
<span data-omnivore-anchor-idx="275" class="hljs-string">"""


        将数据库中导出的单条书签数据转为 html 元素


        
:param
 data:


        
:return
:


        """</span>


        
<span data-omnivore-anchor-idx="276" class="hljs-comment"># 从原始数据中提取出部分需要的数据</span>
        url = data[<span data-omnivore-anchor-idx="277" class="hljs-number">1</span>]
        title = data[<span data-omnivore-anchor-idx="278" class="hljs-number">2</span>]
        add_date = str(timestr_to_timestamp(data[<span data-omnivore-anchor-idx="279" class="hljs-number">7</span>]))
        tags = data[<span data-omnivore-anchor-idx="280" class="hljs-number">17</span>]
        <span data-omnivore-anchor-idx="281" class="hljs-comment"># 将所有标签合并为一个整体，添加到书签名的最后，方便后续在浏览器中查找</span>
        tag = <span data-omnivore-anchor-idx="282" class="hljs-string">" "</span>.join(tags)
        <span data-omnivore-anchor-idx="283" class="hljs-keyword">if</span> tag != <span data-omnivore-anchor-idx="284" class="hljs-string">""</span>:
            tag = <span data-omnivore-anchor-idx="285" class="hljs-string">"【{}】"</span>.format(tag)
        title += tag
        <span data-omnivore-anchor-idx="286" class="hljs-comment"># 对于没有标签的书签直接将其置于收藏夹根目录下</span>
        <span data-omnivore-anchor-idx="287" class="hljs-keyword">if</span> len(tags) == <span data-omnivore-anchor-idx="288" class="hljs-number">0</span>:
            self.add_bookmark(url, add_date, title)
            <span data-omnivore-anchor-idx="289" class="hljs-keyword">return</span>
        <span data-omnivore-anchor-idx="290" class="hljs-comment"># 根据标签中带“@"的标签名来对书签进行分类，归于不同的文件夹中</span>
        <span data-omnivore-anchor-idx="291" class="hljs-keyword">for</span> tag <span data-omnivore-anchor-idx="292" class="hljs-keyword">in</span> tags:
            <span data-omnivore-anchor-idx="293" class="hljs-keyword">if</span> <span data-omnivore-anchor-idx="294" class="hljs-string">"@"</span> <span data-omnivore-anchor-idx="295" class="hljs-keyword">in</span> tag <span data-omnivore-anchor-idx="296" class="hljs-keyword">and</span> tag[<span data-omnivore-anchor-idx="297" class="hljs-number">0</span>] == <span data-omnivore-anchor-idx="298" class="hljs-string">"@"</span>:
                <span data-omnivore-anchor-idx="299" class="hljs-keyword">if</span> self.folder.get(tag) <span data-omnivore-anchor-idx="300" class="hljs-keyword">is</span> <span data-omnivore-anchor-idx="301" class="hljs-literal">None</span>:
                    self.generate_folder(tag)
                self.add_bookmark(url, add_date, title, tag)

    <span data-omnivore-anchor-idx="302" class="hljs-function"><span data-omnivore-anchor-idx="303" class="hljs-keyword">def</span> <span data-omnivore-anchor-idx="304" class="hljs-title">export_to_edge</span><span data-omnivore-anchor-idx="305" class="hljs-params">(self, db: str, path: str)</span>:</span>

        
<span data-omnivore-anchor-idx="306" class="hljs-string">"""


        导出为 Edge 浏览器支持的 html 文件


        
:param
 db:


        
:param
 path:


        
:return
:


        """</span>


        
<span data-omnivore-anchor-idx="307" class="hljs-keyword">with</span> DatabaseManager(db) <span data-omnivore-anchor-idx="308" class="hljs-keyword">as</span> d:
            <span data-omnivore-anchor-idx="309" class="hljs-keyword">for</span> data <span data-omnivore-anchor-idx="310" class="hljs-keyword">in</span> d:
                self.handle_one(data)
        html_template = <span data-omnivore-anchor-idx="311" class="hljs-string">"""&lt;!DOCTYPE NETSCAPE-Bookmark-file-1&gt;
&lt;!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! --&gt;
&lt;META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"&gt;
&lt;TITLE&gt;Bookmarks&lt;/TITLE&gt;
&lt;H1&gt;Bookmarks&lt;/H1&gt;
&lt;DL&gt;{}&lt;/DL&gt;"""</span>
        <span data-omnivore-anchor-idx="312" class="hljs-keyword">with</span> open(path, <span data-omnivore-anchor-idx="313" class="hljs-string">"w"</span>, encoding=<span data-omnivore-anchor-idx="314" class="hljs-string">"utf-8"</span>) <span data-omnivore-anchor-idx="315" class="hljs-keyword">as</span> f:
            f.write(html_template.format(self.tostring()))


<span data-omnivore-anchor-idx="316" class="hljs-keyword">if</span> __name__ == <span data-omnivore-anchor-idx="317" class="hljs-string">'__main__'</span>:
    h = HtmlGenerator()
    h.export_to_edge(<span data-omnivore-anchor-idx="318" class="hljs-string">"db.sqlite3"</span>, <span data-omnivore-anchor-idx="319" class="hljs-string">"bookmarks.html"</span>)

    
</code></pre><h3 data-omnivore-anchor-idx="320">快照</h3><p data-omnivore-anchor-idx="321">以书签系统为核心的网络书签服务其实有很多，有不少甚至在颜值上吊打 Linkding，但最后还是 Linkding 获得了我的青睐，很关键的一点就是它提供的双重快照系统。</p><figure data-omnivore-anchor-idx="322"><img data-omnivore-anchor-idx="323" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3moldb34t98cknnnb0.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,snlzob-vQMKzrwPC7D969OqFFai5xffdWkZeNkgbi5RU/https://cdnfile.sspai.com/editor/u_/cs3moldb34t98cknnnb0.png?imageView2/2/format/webp" alt="Qtp6b6w54oeTPGxeBX4cUXPOneh" data-original="https://cdnfile.sspai.com/editor/u_/cs3moldb34t98cknnnb0.png?imageView2/2/format/webp" data-index="11"></figure><p data-omnivore-anchor-idx="324">上面那个 Internet Archive 是一个在线服务，开启后服务器会调用该网站的 API 接口将你收藏的网址链接提交上去，然后该网站就会抓取该时刻书签网址上的内容进行保存。Internet Archive 是一个很有名的非营利性数字图书馆，保存着互联网上不计其数的网页内容，有兴趣的可以去了解捐赠一波。</p><p data-omnivore-anchor-idx="325">当然，这个快照的局限性非常大，我一般不作为主力使用。首先，想要正常访问 Internet Archive 的话需要使用一点魔法；其次它的抓取对于一些需要登录才能访问相关数据的网站基本没用，就国内互联网这个环境，很多抓取都没有意义。</p><p data-omnivore-anchor-idx="326">下面这个快照则是纯正的本地快照，不过该功能只有特定版本的 Docker 镜像才会开启，安装时最好选择 <a data-omnivore-anchor-idx="327" href="https://sspai.com/link?target=https%3A%2F%2Flinkding.link%2Finstallation%2F" target="_blank">latest-plus</a> 版本。该功能开启后服务器会自动抓取书签的网页内容，和 Internet Archive 类似，需要登录验证的网页同样会抓取失败。</p><figure data-omnivore-anchor-idx="328"><img data-omnivore-anchor-idx="329" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3mollb34t98f1iaep0.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sQa4SFCh5DTLmDfaTzV0HG2y-EtF5dZm3oJbFVVSheY0/https://cdnfile.sspai.com/editor/u_/cs3mollb34t98f1iaep0.png?imageView2/2/format/webp" alt="Siypbs27IonROexyokAc9P8Jnae" data-original="https://cdnfile.sspai.com/editor/u_/cs3mollb34t98f1iaep0.png?imageView2/2/format/webp" data-index="12"></figure><p data-omnivore-anchor-idx="330">不过这个是有解决办法的，因为 Linkding 同时提供了手动上传文件作为快照的备选方案。点开书签的详情页，会有一个「Upload file」的按钮，点击即可上传本地文件。这里对于文件的格式没有任何要求，但还是推荐上传可以用浏览器直接打开的 pdf、txt、html 等格式，不然点击浏览按钮后会直接对该文件进行下载。对于文章类的网页推荐直接 Ctrl+P 打印为 pdf 上传，其他网页则推荐使用浏览器插件打包为单个 html 文件后上传。</p><figure data-omnivore-anchor-idx="331"><img data-omnivore-anchor-idx="332" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3mollb34t98erkk5g0.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sniC9x7AzJ6MYbNCjuXKdV6NP87iPBrcklV0jyB8gL8U/https://cdnfile.sspai.com/editor/u_/cs3mollb34t98erkk5g0.png?imageView2/2/format/webp" alt="EXBTb1EyEoQDC3xAohRce1cingd" data-original="https://cdnfile.sspai.com/editor/u_/cs3mollb34t98erkk5g0.png?imageView2/2/format/webp" data-index="13"></figure><p data-omnivore-anchor-idx="333">对于一些比较重要的文章其实我个人会更加倾向于直接全文收藏到 Trilium 笔记中，算是对网页快照的一个补强，具体内容会在 Trilium 章节中详细介绍。</p><h3 data-omnivore-anchor-idx="334">其他</h3><p data-omnivore-anchor-idx="335">Linkding 设置里面还有两个可能会用到的功能，这里给大家介绍一下。首先是 Auto Tagging，顾名思义，就是可以根据你预设的规则在收藏书签时自动为其加上某些标签，这里以哔哩哔哩的专栏为例。</p><figure data-omnivore-anchor-idx="336"><img data-omnivore-anchor-idx="337" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3moltb34t98erkk5gg.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sMLEQJQN71EQGXV716ijDuO9TVyTgIok_DUfxaIO7JGc/https://cdnfile.sspai.com/editor/u_/cs3moltb34t98erkk5gg.png?imageView2/2/format/webp" alt="FapXbcY7LoA5sgxlAqFcZrs3n8c" data-original="https://cdnfile.sspai.com/editor/u_/cs3moltb34t98erkk5gg.png?imageView2/2/format/webp" data-index="14"></figure><figure data-omnivore-anchor-idx="338"><img data-omnivore-anchor-idx="339" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3mom5b34t98f1iaepg.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,s7mjxKLS0scP6W2JNBMjyHuDvppdWPeoT6vNG159aIXc/https://cdnfile.sspai.com/editor/u_/cs3mom5b34t98f1iaepg.png?imageView2/2/format/webp" alt="AYGkbPWeooCwarxtwpPcPCtjnof" data-original="https://cdnfile.sspai.com/editor/u_/cs3mom5b34t98f1iaepg.png?imageView2/2/format/webp" data-index="15"></figure><p data-omnivore-anchor-idx="340">另一个是 Custom CSS，自定义页面的 CSS，也就是可以更改页面布局。这个需要一点专业知识才能玩转，普通用户可以试着改改字体大小颜色等，比如说把书签颜色改成猛男粉。</p><figure data-omnivore-anchor-idx="341"><img data-omnivore-anchor-idx="342" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3momdb34t98erkk5h0.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sffsI5yNZZwRt5DXKbjjVl5NEg0zHhRHHQHZxhh_GTj0/https://cdnfile.sspai.com/editor/u_/cs3momdb34t98erkk5h0.png?imageView2/2/format/webp" alt="LbyWb8dxIo3CzyxIdjmciP9yn9e" data-original="https://cdnfile.sspai.com/editor/u_/cs3momdb34t98erkk5h0.png?imageView2/2/format/webp" data-index="16"></figure><figure data-omnivore-anchor-idx="343"><img data-omnivore-anchor-idx="344" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3momdb34t98f1iaeq0.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sO5m1-ueuUP4ZBJHGAdP9vUxbI1T0h3DdkALz0KEeiSk/https://cdnfile.sspai.com/editor/u_/cs3momdb34t98f1iaeq0.png?imageView2/2/format/webp" alt="O6PvbpVquosffzxyoVIcOMKqnlh" data-original="https://cdnfile.sspai.com/editor/u_/cs3momdb34t98f1iaeq0.png?imageView2/2/format/webp" data-index="17"></figure><p data-omnivore-anchor-idx="345">最后提一下手机端如何收藏书签的问题，无论是安卓还是 iOS 都有类似 PC 端浏览器插件的实现方式，具体参考<a data-omnivore-anchor-idx="346" href="https://sspai.com/link?target=https%3A%2F%2Flinkding.link%2Fhow-to%2F" target="_blank">官方指南</a>。</p><p data-omnivore-anchor-idx="347"><a data-omnivore-anchor-idx="348" href="https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2Fbaddate%2Ftrilium%2Fwiki" target="_blank">Trilium</a> 是一个可以多端同步的笔记软件。市面上开源的笔记软件其实很多，Trilium 应该算是比较小众的，主要是功能太多，没有耐心很难体会到它的妙处。我其实只能算是它的初级用户，只会一些比较简单的操作，许多高级特性都没有尝试过。Trilium 的功能完全可以单独胜任个人数据库构建的重任，但下文中我只会简单介绍一个与书签相关的特性。</p><p data-omnivore-anchor-idx="349">之前介绍过 Linkding 的快照功能，里面说了一些特殊情况下的网页备份方法，但对于图文类的文章我其实很少使用其手动上传功能。主要原因是我个人更加喜欢用 Markdown 的格式来记录图文数据，于知识记录而言，pdf 和 html 终究是不够纯粹和方便。</p><p data-omnivore-anchor-idx="350">将网页转化为纯粹的图文数据这一需求曾经困扰过我很久，我尝试过很多不同的开源项目或浏览器插件，结果都不尽如人意，总是会存在一些小问题，直到偶然尝试了一下 Trilium 的浏览器插件这一问题才算是落下帷幕。</p><figure data-omnivore-anchor-idx="351"><img data-omnivore-anchor-idx="352" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3momlb34t98idth78g.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sIyFtna45s-TJmVyDYy5xTaIwcWEaoW8PwZku2RGFS-M/https://cdnfile.sspai.com/editor/u_/cs3momlb34t98idth78g.png?imageView2/2/format/webp" alt="HbaobDc5LosCkjxO7sbcSYXWnSe" data-original="https://cdnfile.sspai.com/editor/u_/cs3momlb34t98idth78g.png?imageView2/2/format/webp" data-index="18"></figure><p data-omnivore-anchor-idx="353">插件上有一个选项是「Save whole page」，可以直接把当前网页上的图文保存为一篇本地笔记，识别率相当高，基本不需要修改就可以得到一篇排版正确的笔记，不过它只会保存文章的主体或是帖子的主楼，也就是说评论和跟帖并不会被保存下来。绝大部分博客类的网站都能完美适配，部分站点可能会存在图片无法显示的问题，不想一张张图片手动复制粘贴的话可以参照 Linkding 快照部分讲解的方法。</p><p data-omnivore-anchor-idx="354">这项功能完美补全了 Linkding 在待阅读方面的短板。我目前对于一篇有价值的网页文章的基本操作流程就是先用 Linkding 的浏览器插件保存书签，然后使用 Trilium 的浏览器插件保存图文到笔记系统。保存书签是为了方便后续深入阅读时可以随时查看有价值的评论或跟帖，保存图文则是将其作为待阅读的素材，后续阅读时可以很方便的删改整理为自己的笔记。</p><p data-omnivore-anchor-idx="355">插件上另一个常用的选项是「Save windows' tabs as a list」，可以将当前浏览器窗口中所有 Tab 页的网页链接以列表的形式保存到笔记中，设计这个功能的人绝对是懂工作的，后续想要回到同样的工作场景只需要打开对应笔记点击列表中的链接就能完美复原浏览器状态。</p><figure data-omnivore-anchor-idx="356"><img data-omnivore-anchor-idx="357" data-omnivore-original-src="https://cdnfile.sspai.com/editor/u_/cs3momtb34t98cknnnbg.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,srXvjK-PQpA3KG6V1_wp5FzHD7XyySjfrU-0rvIu_uT0/https://cdnfile.sspai.com/editor/u_/cs3momtb34t98cknnnbg.png?imageView2/2/format/webp" alt="B3vhb2yzso3aQOxEG2dcQA9Nncb" data-original="https://cdnfile.sspai.com/editor/u_/cs3momtb34t98cknnnbg.png?imageView2/2/format/webp" data-index="19"></figure><p data-omnivore-anchor-idx="358">这可以算是一个额外的专项任务收藏夹，可以将一些日常工作场景下会打开的链接提前收藏好，需要用到时就能快速开始该场景下的工作，结合上文中我提到过的使用 Linkding 的 unread 列表来作为近期任务工作区，可以极大的提高工作效率。</p><h2 data-omnivore-anchor-idx="359" id="ss-hId-5" hid="ss-hId-5">后记</h2><p data-omnivore-anchor-idx="360">Linkding 和 Trilium 这种本地服务最重要的就是保证数据安全，如果想要使用我的这套方案请务必设置好服务器数据的<strong data-omnivore-anchor-idx="361">定期备份</strong>，数据一旦丢失，想要再次补全的代价实在过于高昂，请务必慎重。</p></div><div data-omnivore-anchor-idx="362" data-v-fd30d0be="" data-v-16dd0c6c=""><p data-omnivore-anchor-idx="363">© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。</p></div></DIV></DIV>

