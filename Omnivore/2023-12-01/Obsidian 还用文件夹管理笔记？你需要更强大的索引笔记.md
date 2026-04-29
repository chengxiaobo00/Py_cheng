---
id: 60ccc9fe-53ee-469c-ad54-27efbfb8b543
title: |
  Obsidian 还用文件夹管理笔记？你需要更强大的索引笔记
author: |
  江下虫
tags:
  - Obsidian
date_saved: 2023-12-01 13:29:22
date_published: 2023-11-29 14:22:00
---

# Obsidian 还用文件夹管理笔记？你需要更强大的索引笔记
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-trf-l-qfu-cc-tdtzn-zik-vkh-q-18c23da055b)
[Read Original](https://mp.weixin.qq.com/s/Trf_lQfuCcTdtznZikVkhQ)

原创  江下虫  知更鸟在屋顶 _2023-11-29 14:22_ _发表于浙江_ 

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sn_uzgXl_G9wXadRC4orlZ8JOZW_7Vvx9NOpgAxzJ3Xg/https://mmbiz.qpic.cn/sz_mmbiz_jpg/hp9XO4U4Gj8K0KwBmrwCoLEwMiamg2ARruOK9e8GJVBr4POr58XIicy3SuSxSz1tgicWiccGADHxuL0oeiakiaKjGNcg/640?wx_fmt=jpeg&from=appmsg)

主要内容：  

* Obsidian 通过 DataView 创建索引笔记
* 为笔记建立编码

**创建索引笔记**

怎么查看你的笔记？点击文件夹一层层查找，或者通过标签，再或者想起相关笔记后查看它的双链。

现在，面对上千条笔记，我需要在一个页面中查看特定主题但散落在不同文件夹的笔记，最好还能看到每个笔记的修改时间、字数和某些状态。文件夹、标签、双链等基础功能已不足以管理繁杂的笔记。

阁下该如何应对？

当我抓耳挠腮时，DataView 自告奋勇站了起来说：”让我来吧，像数据库一样管理你的笔记，展示你所需的一切。"

例如，我想罗列下列条件的笔记：

* 在 \`笔记方法论\` 文件夹下；
* 或打有 \`#笔记方法论\` 标签的；
* 或链接了笔记 \`\[\[笔记方法论\]\]\` 。

在 \`笔记方法论\` 下添加笔记 \`🧭IDX-Folder\`，插入DataView 查询代码，以表格罗列出 \`笔记方法论\` 相关的笔记，并给出修改时间、笔记字数。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,su30UdhUpiQLtBPGxXWHxCsM8ghn83uYtYipxgYJ8JZY/https://mmbiz.qpic.cn/sz_mmbiz_png/hp9XO4U4Gj8K0KwBmrwCoLEwMiamg2ARrkPjQxibQB6UZvzGjSIrWWjGvsU7dN6bfMu7VXDS8yBRK4DQSdnrkFdQ/640?wx_fmt=png&from=appmsg)

\`🧭IDX-Folder\` 会罗列其所在文件夹下所有笔记（包含子文件夹）、以文件夹为标签或链接文件夹同名笔记的所有笔记。可以通过 \`move current fle to another folder\` 命令移动到指定文件夹下，查看不同文件夹的索引文件。例如，移动到 Obsidian 文件夹下将显示 Obsidian 相关笔记索引。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sxEySqs4vSIwl2NfIik_hS-MNhBrcTI4e4qI_IU6SMM4/https://mmbiz.qpic.cn/sz_mmbiz_png/hp9XO4U4Gj8K0KwBmrwCoLEwMiamg2ARrJhdica7Uy80d6qkgUfkolCcIZ5uejSFnP5ogbkHibDh545ofeVDRdwmQ/640?wx_fmt=png&from=appmsg)

不用做任何更改，复制代码到你的笔记中，即可实现上述功能。下面是主要代码的介绍：

* \`round(file.size/3) as 字数\`：Obsidian 中以 utf-8 编码，1 个汉字占 3 byte；
* \`reverse( split(this.file.folder,"/") )\[0\]\`：当前笔记所在目录名称；
* \`link(name)\`：\`\[\[name\]\]\`对应的链接
* \`status as 状态\`：笔记定义的 YAML 元数据，\`status\` 用于标注当前笔记的状态；

`TABLE without ID` `  file.link as 标题, ` `  status as 状态,` `  dateformat(file.mtime,"MM-dd") as 修改,` `  round(file.size/3) as 字数` `WHERE (` `  (` `    contains(` `      file.folder, ` `      this.file.folder` `    )` `  ) or` `  (` `    contains(` `      file.tags,` `      reverse(` `        split(this.file.folder,"/")` `      )[0]` `    )` `  ) or` `  (` `    contains(` `      file.outlinks,` `      link(` `        reverse(` `          split(this.file.folder,"/")` `        )[0]` `      )` `    )` `  ) or` `  (` `    contains(` `      file.inlinks,` `      link(` `        reverse(` `          split(this.file.folder,"/")` `        )[0]` `      )` `    )` `  )` `) and ` `file.name!=this.file.name and  !contains(file.name,".excalidraw")` `SORT status,file.mtime desc` `LIMIT 100`

**为笔记建立编码**  

使用 DataView 索引笔记的另一个主要原因是为笔记建立编码。

卢曼卡片盒笔记法的一大核心是为笔记建立连续的编号，以组织和连接笔记。笔记的顺序包含了笔记间内在逻辑，让笔记发挥 1+1>2 的效果。

笔记编码需要是唯一且有顺序的。从第一条笔记开始，为每一条新笔记找到合适位置插入。其编码规则为：

* 初始笔记编码为 500；
* 新增笔记默认排在队尾；
* 如果笔记排在队尾，则其编码为旧队尾编码整数部分加一；
* 如果笔记排在队首，则其编码为旧队首编码整数部分减一；
* 如果笔记排在中间，则其编码为前后编码均值后取最短编码；
* 当编码顺序与笔记顺序一致时，不变更编码；

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sJgIlVcKtSebAeGYlrOnXkgFIpzWYPDHKWCtcORjXcpI/https://mmbiz.qpic.cn/sz_mmbiz_png/hp9XO4U4Gj8K0KwBmrwCoLEwMiamg2ARrCdjd1Bzw6JhExJ9uDasXactAia0h1NFDZprB5AuPUTVlycHNib69XnjQ/640?wx_fmt=png&from=appmsg)

