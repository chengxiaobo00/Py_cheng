---
id: DC35B0A0-B7D1-45C5-83FE-4A9ACA819872
title: |
  这5条超牛公式，帮你搞定87%数据查询难题
author: |
  李锐
tags:
  - Excel
date_saved: 2023-09-28 11:39:34
date_published: 2023-09-27 14:42:00
aliases:
  - 这5条超牛公式，帮你搞定87%数据查询难题
---

# 这5条超牛公式，帮你搞定87%数据查询难题
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-gfe-yh-qu-rb-jlh-ur-7-k-v-22-q-18ad9deb643)
[Read Original](https://mp.weixin.qq.com/s/gfeYHQuRB-jlhUR-7kV22Q)

 跟李锐学Excel _2023-09-27 14:42_ _发表于河北_ 

点击 ↓ 跟李锐学Excel 关注后获取更多福利

**置顶公众号**或**设为星标**，才能第一时间收到推送

个人微信号 | （ID：LiRuiExcel520）

微信服务号 | 跟李锐学Excel（ID：LiRuiExcel）

微信公众号 | 李锐Excel函数公式（ID：ExcelLiRui）

[**全面提升Excel实战技术>>点此进入知识店铺**](https://appxhk7ydzo7065.h5.xiaoeknow.com/)

查找引用在工作中的需求太常见了，如果你还在Excel中手动查找，就太OUT啦，那样不但效率低下，还极易出错......  

这篇教程中给大家科普一下工作中适用场景最多的查找引用方法，便于大家直接套用，提高工作效率，远离加班！

看完教程还想进一步系统学习的同学，点击链接[**\>>进入知识店铺查看**](https://appxhk7ydzo7065.h5.xiaoeknow.com/)

各期特训营内容不同，点击下方链接查看详情↓

| [函数初级](https://appxhk7ydzo7065.h5.xeknow.com/st/2wqZPU6hv)      | [财务会计](https://appxhk7ydzo7065.h5.xeknow.com/st/6J9wbCxX2)  | [动态图表](https://appxhk7ydzo7065.h5.xeknow.com/st/8EOuuWq2w) | [图表初级](https://appxhk7ydzo7065.h5.xeknow.com/st/2W9ybiZ3R) |
| --------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| [函数进阶](https://appxhk7ydzo7065.h5.xeknow.com/st/0r6i3ACfT)      | [HR人资](https://appxhk7ydzo7065.h5.xeknow.com/st/19JCPOj6G)  | [PQ初级](https://appxhk7ydzo7065.h5.xeknow.com/st/8SdrTGuCn) | [商务图表](https://appxhk7ydzo7065.h5.xeknow.com/st/8kZyoHhHS) |
| [函数中级](https://appxhk7ydzo7065.h5.xeknow.com/st/7rXINnaJO)      | [财务图表](https://utj.h5.xeknow.com/s/32HLkt)                  | [多表合并](https://appxhk7ydzo7065.h5.xeknow.com/st/7C0INKVNv) | [个税模板](https://appxhk7ydzo7065.h5.xeknow.com/st/2Vz9yREEV) |
| [函数应用](https://appxhk7ydzo7065.h5.xeknow.com/st/8CYu2z8z3)      | [透视初级](https://appxhk7ydzo7065.h5.xeknow.com/st/1r3TPPHE2)  | [数据分析](https://utj.h5.xeknow.com/s/3h1yqd)                 | [爆款课](https://appxhk7ydzo7065.h5.xeknow.com/st/9dBjOdOde)  |
| [Dashboard](https://appxhk7ydzo7065.h5.xeknow.com/st/2TtH0FG7H) | [透视进阶](https://appxhk7ydzo7065.h5.xeknow.com/st/8y5zWcoYl)  | [数据管理](https://appxhk7ydzo7065.h5.xeknow.com/st/1MCAEgCWd) | [电子书](https://appxhk7ydzo7065.h5.xeknow.com/st/8HF0cPsIq)  |
| [实用技巧](https://appxhk7ydzo7065.h5.xeknow.com/st/2rNxsb8qR)      | [10倍效率](https://appxhk7ydzo7065.h5.xeknow.com/st/4qmneOlmZ) | [**1年年卡**](https://utj.h5.xeknow.com/s/458Ra2)             | [快捷键](https://utj.h5.xeknow.com/s/J9xvu)                   |
| [**5年年卡**](https://utj.h5.xeknow.com/s/fJFyC)                   | [**3年年卡**](https://utj.h5.xeknow.com/s/3CuspH)              | [**2年年卡**](https://utj.h5.xeknow.com/s/1wz0W0)             | [**全部课程**](https://utj.h5.xeknow.com/s/13cPkC)             |

更多**不同内容、不同方向**的Excel视频课程  

搜索微信公众号**“跟李锐学Excel”**获取  

![[Attachment/2f91dc90f2d97ea9016d0693c5e87f3f_MD5.jpg]]

（手机微信扫码▲识别图中二维码）

**一、单条件查询公式**

遇到从一个表格里按条件查找数据，把这些提取到另一个表里，你还在手动一个一个弄吗？

场景演示见下图（黄色区域为公式生成）

\=VLOOKUP(D2,$A$2:$B$12,2,0)

![[Attachment/01fe7d1d3de9507c479839908f67405e_MD5.jpg]]

**二、多条件查询公式**

除了单条件查找，多条件查找也不在话下，一个公式照样搞定！

场景演示见下图（黄色区域为公式生成）

![[Attachment/c71ec07a34e460fb5a54ca06fa0fe215_MD5.jpg]]

\=VLOOKUP(E2&F2,IF({1,0},$A$2:$A$12&$B$2:$B$12,$C$2:$C$12),2,0)

注意这里要使用数组公式，按<Ctrl+Shift+Enter>组合键输入。

**三、从下向上逆向查** **找**

有时候遇上要查找符合条件的最后一个数据时，这个公式会帮到你很多！

场景演示见下图（黄色区域为公式生成）

![[Attachment/39c97668e76382642b7c99324cb2f358_MD5.jpg]]

\=LOOKUP(1,0/($B$2:$B$13=F2),$D$2:$D$13)

**四、双条件十字交叉查询公式**

双条件在报表行列中交叉查询的需求，80%的同学都会用得上！

场景演示见下图（点击gif观看动态演示）

![[Attachment/a2ac3cdf622646f1594a61570ef34188_MD5.gif]]

\=INDEX(B2:E9,MATCH(H3,A2:A9,0),MATCH(H4,B1:E1,0))

**五、一对多查询公式**

除了单条件查找、多条件查找、逆向查找和十字交叉查找，再来讲个一对多查找！

如果报表中存在多个符合条件的数据，你想把他们统统找出来，用这招！

场景演示见下图（点击gif观看动态演示）

![[Attachment/0e46dddb25f68333f6eb238a5b021450_MD5.gif]]

\=INDEX(B:B,SMALL(IF(A$2:A$11=D$2,ROW($2:$11),4^8),ROW(A1)))&""

注意这也是数组公式，按<Ctrl+Shift+Enter>组合键输入。

**希望这篇文章能帮到你！怕记不住可以发到朋友圈自己标记。**

职场必备的**67种Excel函数**，我专门整理成**32节课**超清视频精讲↓

![[Attachment/fa1af42536f51d3250c248cf334e9704_MD5.jpg]]

**下方扫码，永久拥有超值课程**

![[Attachment/ad1cfddf363bc895f312e5bfe7877277_MD5.png]]

（长按识别二维码）

更多的函数公式体系化全面技能，点击下方链接↓

[**点此进入>>Excel函数公式** **初级班**](https://st.h5.xiaoe-tech.com/st/9fZi3bL4y)；

[**点此进入>>Excel函数公式** **进阶班**](https://st.h5.xiaoe-tech.com/st/0jcydFMlF)；

[**点此进入>>Excel函数公式** **中级班**](https://st.h5.xiaoe-tech.com/st/2ntkGIIyg)；

[**点此进入>>Excel函数公式** **应用班**](https://appxhk7ydzo7065.h5.xeknow.com/st/8CYu2z8z3)

****学完这几套系统课程之后，你将所向披靡！**

祝你早日顺畅发挥Excel函数公式的强大威力，希望这篇文章能帮到你！

**这么多内容担心记不全的话，可以分享到朋友圈给自己备份一份。**

****更多领域和方向的超清视频课程↓点击链接** [**\>>进入知识店铺查看**](https://appxhk7ydzo7065.h5.xiaoeknow.com/)

![[Attachment/a898ccac67fbd0407f84499acf9c0ef4_MD5.jpg]]

**▼**  

[**点此>>查看全部课程**](https://st.h5.xiaoe-tech.com/st/2Emx14kA7)

各期特训营内容不同，点击下方链接查看详情↓

| [函数初级](https://appxhk7ydzo7065.h5.xeknow.com/st/2wqZPU6hv)      | [财务会计](https://appxhk7ydzo7065.h5.xeknow.com/st/6J9wbCxX2)  | [动态图表](https://appxhk7ydzo7065.h5.xeknow.com/st/8EOuuWq2w) | [图表初级](https://appxhk7ydzo7065.h5.xeknow.com/st/2W9ybiZ3R) |
| --------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| [函数进阶](https://appxhk7ydzo7065.h5.xeknow.com/st/0r6i3ACfT)      | [HR人资](https://appxhk7ydzo7065.h5.xeknow.com/st/19JCPOj6G)  | [PQ初级](https://appxhk7ydzo7065.h5.xeknow.com/st/8SdrTGuCn) | [商务图表](https://appxhk7ydzo7065.h5.xeknow.com/st/8kZyoHhHS) |
| [函数中级](https://appxhk7ydzo7065.h5.xeknow.com/st/7rXINnaJO)      | [财务图表](https://utj.h5.xeknow.com/s/32HLkt)                  | [多表合并](https://appxhk7ydzo7065.h5.xeknow.com/st/7C0INKVNv) | [个税模板](https://appxhk7ydzo7065.h5.xeknow.com/st/2Vz9yREEV) |
| [函数应用](https://appxhk7ydzo7065.h5.xeknow.com/st/8CYu2z8z3)      | [透视初级](https://appxhk7ydzo7065.h5.xeknow.com/st/1r3TPPHE2)  | [数据分析](https://utj.h5.xeknow.com/s/3h1yqd)                 | [爆款课](https://appxhk7ydzo7065.h5.xeknow.com/st/9dBjOdOde)  |
| [Dashboard](https://appxhk7ydzo7065.h5.xeknow.com/st/2TtH0FG7H) | [透视进阶](https://appxhk7ydzo7065.h5.xeknow.com/st/8y5zWcoYl)  | [数据管理](https://appxhk7ydzo7065.h5.xeknow.com/st/1MCAEgCWd) | [电子书](https://appxhk7ydzo7065.h5.xeknow.com/st/8HF0cPsIq)  |
| [实用技巧](https://appxhk7ydzo7065.h5.xeknow.com/st/2rNxsb8qR)      | [10倍效率](https://appxhk7ydzo7065.h5.xeknow.com/st/4qmneOlmZ) | [**1年年卡**](https://utj.h5.xeknow.com/s/458Ra2)             | [快捷键](https://utj.h5.xeknow.com/s/J9xvu)                   |
| [**5年年卡**](https://utj.h5.xeknow.com/s/fJFyC)                   | [**3年年卡**](https://utj.h5.xeknow.com/s/3CuspH)              | [**2年年卡**](https://utj.h5.xeknow.com/s/1wz0W0)             | [**全部课程**](https://utj.h5.xeknow.com/s/13cPkC)             |

  
**▎以后从哪里随时回来听课？**

关注微信服务号“**跟李锐学Excel**”（长按识别二维码↓）**置顶公众号或设为星标**，从底部菜单-**知识店铺**方便随时听课。

![[Attachment/2f91dc90f2d97ea9016d0693c5e87f3f_MD5.jpg]]

（长按识别二维码）

老学员随时复学小贴士

由于有的老学员是4年前购买的课程，因买过的课程较多或因时间久忘记从哪里听课，所以专门将各平台的已购课程入口统一整理至下图。

1、搜索微信公众号“****跟李锐学Excel**”点击底部菜单“****已购课程**”，即可查看到你在各平台的已购课程，方便大家找到并随时复学课程。

2、课程分销推广的奖金也是由此公众号转账至大家的微信钱包（**关注后可自动收钱，进入你的微信零钱，在微信支付有转账记录**），老学员可以进“****知识店铺**”点击底部按钮“****推广赚钱**”或者“****我的**”-“****推广中心**”查询到推广奖励明细记录，支持主动****提现**。  

此外，里面还有小助手的联系方式，有问题或学习需求可以留言反馈，助手在24小时内回给到回复。

关注后▲已购课程随时听，开课提醒不错过

请把这个公众号推荐给你的朋友：）

今天就先到这里吧，希望这篇文章能帮到你！更多干货文章加下方小助手查看。

如果你喜欢这篇文章

欢迎点个**在看**，分享转发到朋友圈

![[Attachment/29cebbac87fd2a06b380f29319b5bb93_MD5.png]]

**干货教程 · 信息分享**  

**欢迎扫码↓添加小助手进朋友圈查看**

![[Attachment/2a19822a33c52dff526d183f68ac1823_MD5.jpg]]

（长按识别二维码）

**请把这个公众号推荐给你的朋友：）**

关注后**置顶公众号**或**设为星标**

再也不用担心收不到干货文章和开课提醒了

▼

![[Attachment/d9e7bbaebc985d46d975269e2f5741c2_MD5.jpg]]

关注后从底部菜单获取更多资料  

请把这个公众号推荐给你的朋友

↓↓↓点击**“阅读原文”进知识店铺**

 **系统、专业、全面系统提升Excel实战技能**

