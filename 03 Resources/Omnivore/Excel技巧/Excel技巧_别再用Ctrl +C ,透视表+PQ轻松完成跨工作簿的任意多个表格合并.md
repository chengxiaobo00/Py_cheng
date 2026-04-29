---
id: 9a14f2fb-6c67-4608-bbcc-144915c6aa5c
title: |
  别再用Ctrl +C ,透视表+PQ轻松完成跨工作簿的任意多个表格合并
author: |
  兰色幻想-赵志东
date_saved: 2024-01-06 09:01:53
date_published: 2024-01-06 00:50:00
---

# 别再用Ctrl +C ,透视表+PQ轻松完成跨工作簿的任意多个表格合并
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-a-ppe-9-n-out-0-yb-yn-k-hhjq-ra-18cdc4a3704)
[Read Original](https://mp.weixin.qq.com/s/APpe_9NOut0ybYnKHhjqRA)

原创  兰色幻想-赵志东  Excel精英培训 _2024-01-06 00:50_ _发表于河南_ 

如果从事财务、数据分析、客户管理等岗位，或许让你加班最多的是多表合并，特别是跨多个Excel文件的合并。很多用户都是逐个按Ctrl + C,CTRL+V把表格复制粘贴到一个表中再汇总，但这样做实在是太慢了。  

兰色上次在视频号直播间分享利用透视表+Powery进行跨工作簿合并表格时，有同学提问：如果每一个Excel文件都有多个工作簿，那怎么合并呢？这，就是今天兰色要分享的内容。  

【例】如下图所示在3月文件夹中有N个公司  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sCdfeWy6sxZI6MbzOOb831quPC6Jils7lzAs7SzoO5Lo/https://mmbiz.qpic.cn/mmbiz_jpg/4jUToJBtQvQBx8b6GDydticY2gSNBUEk6Ravial8Xcqo4ewgUiaJpKN3K1wMNB6A0glXa3k36aTFhtSgu0fRSNJbw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

每个公司文件中有N个日期的报表

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sGkAGfKwQpmhuXCSvrQcfJX3saRrE9MKnf_tTDgCENo0/https://mmbiz.qpic.cn/mmbiz_jpg/4jUToJBtQvQBx8b6GDydticY2gSNBUEk6pZfex2amuN9WXtuL3yyXUhBibWMnAw0D10VYE8VPibWLjXJ2JhCZMo8g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

现需要做一个汇总模板，可以动态汇总所有公司所有日期的销售情况。效果如下图所示。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sK5aJvp5-178xUpmSWgPGcnJKIg4xF2nNsRXpi6m0HNA/https://mmbiz.qpic.cn/mmbiz_jpg/4jUToJBtQvQBx8b6GDydticY2gSNBUEk6atVELiaDtPx0ibFW60YtMN72mPrB1BqrdUibaibGKticYwlicibdEfD10mRug/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**制作步骤：**  

**1、导入数据到power query编辑器中**

新建一个空白文件（或在已有Excel文件）中，执行数据 - 获取数据 - 来自文件 - 从文件夹 - 找到要汇总的文件夹打开 - 在弹出的向导中点击转换数据。导入工作完成。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,slCRJnpj-_PDTYM-uRNNpEYsbRwpY9__1upcUh20rsqA/https://mmbiz.qpic.cn/mmbiz_gif/4jUToJBtQvQBx8b6GDydticY2gSNBUEk6MJHP74HV9Ulylhr6mFklialZsIt4z3hzUNVFpD2nM1Pav4DibFC30h2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

**2、添加自定义列**  

选取前两列 - 删除其他列，然后添加自定义列，通过选取方式输入代码

\=Excel.Workbook(\[Content\])

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s8UWzEH_cfmDbeuvIbuZ01OWYWNwt6Ry-faa6MdT2F28/https://mmbiz.qpic.cn/mmbiz_gif/4jUToJBtQvQBx8b6GDydticY2gSNBUEk6t6xKQmbjuIwBzAA0gwrwsxLryF4ehHx4PwAFVJgicQSIoOXn6NO5UVg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

**3、展开所有文件数据**

点击自定义右侧展开按钮，选择Name和Data两项然后点击确定铵钮。  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sMR658LQgbgCcWCH0u-RZxspWIQf6WDxdknUHHOJU5sA/https://mmbiz.qpic.cn/mmbiz_gif/4jUToJBtQvQBx8b6GDydticY2gSNBUEk6tDzhchnsrsq69JibT7qNUfSeLibqL7VwebDA3Jz00gavvzy4fDAahPZA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

如果需要汇总指定的工作表，可以通过筛选完成，如只汇总3月2日的数据。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sxNLkfsI7grrz5G9boK2Lb4kFQG5i-Vii6klgiapBPno/https://mmbiz.qpic.cn/mmbiz_gif/4jUToJBtQvQBx8b6GDydticY2gSNBUEk6ls3NXDdjkJHezFkjb6Xve2Pj3Oib3zOfTsMthUWKSeRIxM3pprYX0cQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

**4、展开所有工作表数据**  

删除第一列，然后通过点击data右侧展开按钮展开所有工作表数据  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,srihYqkjZqDqaKmVlC3fwELg4RME5c7uyDefMte74nFU/https://mmbiz.qpic.cn/mmbiz_gif/4jUToJBtQvQBx8b6GDydticY2gSNBUEk6wLB0FMVpPyyoTQuLAOkztJczmdus3G7p3LYfopkRATa1Kh7z06mwwA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

**4、整理表格**

把第一行提升为标题（由于第二列日期会自动更改格式，所以需要通过删除右侧的自动自生的步骤取消），然后修改标题行，通过筛选把下面数据中的标题行删除。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s8XlBcP6l3BUqzaV5N_fATGxto7grbGw5KRrk9FgbzGU/https://mmbiz.qpic.cn/mmbiz_gif/4jUToJBtQvQBx8b6GDydticY2gSNBUEk6Cp6rc7hSqgJIE1yzOoicxtFYsE9NARwHKPNWCrHUtYw9IWS7BoFXPCA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

再把第一列的.xlsx替换掉

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,skcWd_3G9W_xz0I73wR4n-quqeQBPjbWWZVtD9_kARmc/https://mmbiz.qpic.cn/mmbiz_gif/4jUToJBtQvQBx8b6GDydticY2gSNBUEk61L0R4X7EanULYk72MFU1GUMWibSoFFj30LHLplHjq9veHJ1Cr5xLGBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

**5、合并的数据加载到excel表格中** 

主页 - 关闭并上截至 - 选取数据透视表项和加载位置。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sYX2jggAQ-wgt8zjdHf7utFwHkFi-2LFwb7uonNVRPbM/https://mmbiz.qpic.cn/mmbiz_gif/4jUToJBtQvQBx8b6GDydticY2gSNBUEk6okjdibmSHUWQclmH8IyJVuplgDcUpevhYYmQENVQCy8VHS5nzfgsnuA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

根据需要制作透视表  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sGle5KroYTR9Y_BJKSLm2jCL0AuiWR69lx_a9WhqH5Ns/https://mmbiz.qpic.cn/mmbiz_gif/4jUToJBtQvQBx8b6GDydticY2gSNBUEk6UfjNKj7EeQMiaoR4ZCG1XWes4LYIqU5yWyqCiaDR9frS8lQ9VXSjO0Kg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

最后再美化一下，完工！

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sK5aJvp5-178xUpmSWgPGcnJKIg4xF2nNsRXpi6m0HNA/https://mmbiz.qpic.cn/mmbiz_jpg/4jUToJBtQvQBx8b6GDydticY2gSNBUEk6atVELiaDtPx0ibFW60YtMN72mPrB1BqrdUibaibGKticYwlicibdEfD10mRug/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

兰色说：在本例中，真正的主角其实是power query，而透视表只是辅助的汇总而已，所以想要精通excel数据分析，pq是你必须要学习的内容。

兰色的图表教程最近更新很多新图表，如

**175集 年季度月同比分析图**  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sob4okCLo0t8uW9ccX8kgjG8fq-fuDdIYroEGXxOxQ7Y/https://mmbiz.qpic.cn/mmbiz_png/4jUToJBtQvS8HzRUElS0Kd6ZmJNu4p1zkqVvOuCCxmPQfDsI0t22vpyx7kibXdpVicOOwVjrODjv5MLkFia4tnmqA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

**174集 季度、月份达成率综合分析科**

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sAgM06O5cgFBfOnemrIswQvvPLjUjD_P30tGCjNipzUI/https://mmbiz.qpic.cn/mmbiz_jpg/4jUToJBtQvSKxQHZ137bRFV81pfy1Ele8pIox8WJMUPBkmceJCrMibvPJfeqv5MibXNB8D8NQVJgcNz1fyLMUG6w/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

173集 同比+目标完成分析图  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,satgib4PO8yy1iT2a6b7qDKwS6Z9hbzwkDXT5NTivg8U/https://mmbiz.qpic.cn/mmbiz_jpg/4jUToJBtQvTrehlYibYMFMrPeoOjicMAFrPmlMODW87yWote2Rfxp9zhk6QmTbUq6PNra5T4G0t6IqjQib1Mvm8qg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

截止今天，图表系列已更新176集（后续还会一直更新下去），导航目录也做好了，大家可以去QQ群下载:

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,slpDyxO-WbYSx2JC5VvBXbkKau0NtaGCY0kBFxOIiqDk/https://mmbiz.qpic.cn/mmbiz_jpg/4jUToJBtQvQxBvaplKBTm4j6TeeeUM6dKCclMUP3cKPMyZtos4luHN3Z5SKW1n3eibH2JxIDu6ccc38l38icibObA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

如果需要的同学可以点下方链接购买，记得联系客服加QQ交流群。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sztHen2zKglbooc8jnRanh8F2QK9kejIH_eS7fuz0zAU/data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"%3E%0A%3Cpath d=\"M12.8974 15.5585L14.9719 13.484L16.2447 14.7568L12.3519 18.6497C12.1566 18.8449 11.84 18.8449 11.6448 18.6497L7.75195 14.7568L9.02475 13.484L11.0974 15.5567L11.1 4.99976L12.9 5.0002L12.8974 15.5585Z\" fill=\"black\" opacity=\"0.3\"/%3E%0A%3C/svg%3E) 继续滑动看下一个 

