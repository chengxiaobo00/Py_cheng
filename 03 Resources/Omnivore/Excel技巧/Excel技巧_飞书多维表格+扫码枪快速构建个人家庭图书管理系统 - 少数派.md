---
id: 4595e616-5d67-485b-a3f1-8e29b7c35d00
title: |
  飞书多维表格+扫码枪快速构建个人家庭图书管理系统 - 少数派
author: |
  段小草
tags:
  - RSS
date_saved: 2024-10-24 11:17:41
date_published: 2024-10-24 11:17:41
---

# 飞书多维表格+扫码枪快速构建个人家庭图书管理系统 - 少数派
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/-192bd8518c0)
[Read Original](https://sspai.com/post/93065)

**Matrix 首页推荐** 

[Matrix](https://sspai.com/matrix) 是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选 Matrix 最优质的文章，展示来自用户的最真实的体验和观点。

文章代表作者个人观点，少数派仅对标题和排版略作修改。

---

> 一句话介绍：飞书多维表格 + 扫码枪读取纸质书 ISBN 号 + 爬取豆瓣数据 + 飞书应用开发能力 = 快速构建个人家庭图书管理系统。

先看一下最后的成果吧。虽然我还没完全把书全录进去，但模板和代码已经搞定了。大家可以直接使用[我的模板](https://sspai.com/link?target=https%3A%2F%2Fbsua27acdo.feishu.cn%2Fbase%2FSd4Vb07Sva4h6jsEWKGcHEEtnih)。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sKkQANBK5KHEcu_w5z5vw7prFdDL7reMZ49w5DkBfuM0/https://cdnfile.sspai.com/2024/10/21/article/ce029ea3e62cc3d826228899f5fa9b4b.png?imageView2/2/format/webp)

数据表

![](https://proxy-prod.omnivore-image-cache.app/0x0,sRLib4cpGYkTofIa62MD_zp9Sd9CPWXNQc_xUwU82WKo/https://cdnfile.sspai.com/2024/10/21/article/f3ac0214555375072ddaeda1fbad0acf.png?imageView2/2/format/webp)

封面图

![](https://proxy-prod.omnivore-image-cache.app/0x0,s1DMbVbJ-OmPjuk1u_oBUsIyChkRl7JBR0bdv8xX0ee8/https://cdnfile.sspai.com/2024/10/21/article/9365f709aae10b882842d7a9041b45fe.png?imageView2/2/format/webp)

查询页（支持以书名、作者或分类查询图书）

![](https://proxy-prod.omnivore-image-cache.app/0x0,sN2vVswiK0keoQZaqIMY0vLjs2dHlnscINea5jNZ3Ssc/https://cdnfile.sspai.com/2024/10/21/article/4a15b0e1283c22d5a374386c98756b37.png?imageView2/2/format/webp)

统计图仪表盘

接下来详细记录一下我创建模板和录入数据的过程。

契机是这样的，最近家里新买了一个书柜，我想着反正要把书都倒腾出来摆放一次，不妨顺便把家里的纸质书登记为一个表格；而且我最近翻出了一个以前买的扫码枪，可以发挥一下作用（实践下来发现确实挺好玩的）。

在工具的选择上，我没犹豫太多就选了飞书的多维表格。多维表格的扩展和开发能力很强，也能够快速把一个基础的数据表呈现为多种看板、画廊效果。而且多维表格最近还新增了 AI 捷径，可以直接调用 AI 能力填充表格。

整体设计思路大概分为以下几部分：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sEOIa5v3XA7bq39PJpjV_I4lLkhKhcNguuR5LxJggmVQ/https://cdnfile.sspai.com/2024/10/21/article/71e9dd8368cb51efce3104d96b35afc0.png?imageView2/2/format/webp)

## 创建表格模板

在飞书云文档新建多维表格。如果不想逐个手动配置字段的话，可以点击右上角的 AI 助手飞飞，告诉它希望增加哪些字段，AI 就会帮助我们生成表头并设置出最为合适的字段属性：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sBJPRzVXygpbcwxwy0EKVcMGZWY4FaRnj8O7hmFbLffE/https://cdnfile.sspai.com/2024/10/21/article/8f2255de21206bee0581a5025f654d06.png?imageView2/2/format/webp)

我这次的思路是：先通过 ISBN 获取豆瓣图书数据，然后使用飞书的 AI 能力补充生成需要的字段，最后再手动录入少量数据。基于此，要录入的信息分为三类：

* 基础信息：豆瓣中能够获取到的基本信息，比如书名、作者、出版社、简介、评分等；
* AI 生成信息：基于基础信息，生成豆瓣中无法获取的信息，比如基于把图书简介概括为一句话总结，生成合适的图书分类等；
* 手动录入信息：当前阅读状态（读完、在读、待读），读书笔记等。

通过自动抓取导入 + AI 补全生成，尽可能减少手工录入的工作量。同时在多维表格中，数据表是最基础的数据库，后续可以基于数据表格创建不同的视图、表单或仪表盘，不过现在还是空表，所以我们把其他视图放到最后再介绍。

## 爬取豆瓣接口获取书籍信息

如果可以的话，用 API 是最好的，不过豆瓣的接口很早就关闭了，我在网上搜了一下，也没有其他太好用的图书 API（或者都不免费）。鉴于个人使用一共也没多少本书，所以可以还是做一下豆瓣的爬虫吧，仅供学习使用，不会对豆瓣服务器造成太大压力。

使用豆瓣的搜索接口提交 ISBN 号1

国际标准书号，用于唯一标识图书等出版物的编号系统，便于全球范围内对出版物进行分类和识别。

，从第一条搜索结果中获取图书链接并爬取更详细的信息。

如图，豆瓣的搜索接口是：`https://book.douban.com/j/subject_suggest?q=`

![](https://proxy-prod.omnivore-image-cache.app/0x0,siA-JtDbae5KJ_MRRiDkar7j2CRb9xNNQqT2EoSTEnIM/https://cdnfile.sspai.com/2024/10/21/article/cbdf9d3ad559c0bdae85341f447d4468.png?imageView2/2/format/webp)

```routeros
    params = {'q': isbn}
    response_suggest = requests.get('https://book.douban.com/j/subject_suggest', params=params, headers=headers_suggest)
    if response_suggest.status_code != 200 or not response_suggest.json():
        return "未找到相关书籍信息"
    book_suggest = response_suggest.json()[0]
    book_url = book_suggest['url'].replace('\\', '')
```

获取图书详情页`https://book.douban.com/subject/35335514/`后，请求该页面数据，并从页面中提取相应信息：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sSE_JO2A7agXikdP1M67kYBk3DpBl5RQhcv8vyKRuwtc/https://cdnfile.sspai.com/2024/10/21/article/cea5f9a3671f6c10d13bc54705999172.png?imageView2/2/format/webp)

不过由于豆瓣的图书简介内容并没有统一数据格式，这里还需要做很多错误处理，举个例子，比如定价这里，有时会写 59.00 元，有时会写￥59 或 CNY 59，有时会写 59，有时信息缺失干脆没有这个字段，所以为了避免程序处理时报错，就需要做一些处理，比如使用正则：

```python
    try:
        price = float(re.search(r"(?:CNY\s*)?(\d+(?:\.\d+)?)(?:\s*元)?", soup.find('span', text='定价:').next_sibling.strip().replace('元', '')).group(1))
    except AttributeError:
        price = ''
```

其他字段的处理类似，这里就不再赘述了。

还有一个稍微特殊一点的就是封面图片，多维表格中支持上传图片附件，可以将封面图生成画廊，所以我们也需要顺便记录一下封面图片的 URL 地址，后续可以下载图片并上传到飞书中。

豆瓣的信息里，其实没有图书的分类信息，我本来想参考中图法2

即《中国图书馆分类法》，是中国的一种大型综合性分类体系，用于系统地对图书馆馆藏进行分类和组织，是国内图书馆最广泛采用的分类法。

去做图书分类，后来发现太复杂了，家里这么点书确实没必要那么精细的分类。

然后我试了一下飞书的 AI 功能，其实可以用 AI 自动补充图书分类：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s7qPG-GAdmu0kfXYk8YPK-7xXaIYJSslgAf4RFUZHQnM/https://cdnfile.sspai.com/2024/10/21/article/a574a8eab273d68af033c88eb9fc49ea.png?imageView2/2/format/webp)

再比如，豆瓣简介写的比较长，我们可以让 AI 进行总结，生成一句话简介：

![](https://proxy-prod.omnivore-image-cache.app/0x0,syfGGelHWWmdJxpNeDMr_-zXBZvsdjxJxxoRv_BH2dT0/https://cdnfile.sspai.com/2024/10/21/article/31a56600fd679fad2ad3024129cf0627.png?imageView2/2/format/webp)

这样设置好了之后，只要我们填入前几列的字段，飞书 AI 就会帮助我们自动补全这两列数据，非常好用。

## 通过接口向飞书云文档推送数据

多维表格其实自带一个 Webhook 接口用于提交数据，具体做法是点击文档右上角的「自动化」：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sTMH7acv0jlhijwv0N-R1wG9MGfxxeg-y-BY_4PO6fto/https://cdnfile.sspai.com/2024/10/21/article/054fbdebade8f67be1cbe66b67ef1423.png?imageView2/2/format/webp)

「创建自定义流程」：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sHTJt_zLdxAMS87tX-1YYRWd3gwrSUyL0XO_qGD-ko3E/https://cdnfile.sspai.com/2024/10/21/article/e96f388985b1f713b6f60abc0dd51453.png?imageView2/2/format/webp)

左边选择「接收到 Webhook 时」，会得到一个 Webhook 地址，向这个地址发送 JSON 格式的数据，服务器就会收到并自动解析为字段；然后右侧选择「新增记录」，选择插入数据的位置为数据表，然后设置记录内容即可：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s1BZclGxsbF9YqiBdhrWkRPeRi0HcoSxdZmkc2YSZESc/https://cdnfile.sspai.com/2024/10/21/article/8f5e4c82406b807f4327fa4947b46a35.png?imageView2/2/format/webp)

不过……我感觉这样做还是不是太方便，因为需要手动逐个去设置字段匹配，字段一多或者需要修改时也比较麻烦。所以我还是用开发应用的方式来实现，登录飞书开放平台，选择创建企业自建应用：

![](https://proxy-prod.omnivore-image-cache.app/0x0,s23RTPRC1CNlB1AGOtAYOqnjHu8aZlovfsRGQP-6N6mE/https://cdnfile.sspai.com/2024/10/21/article/db276811efdbd14f270f5b8a840b7075.png?imageView2/2/format/webp)

填写基本信息：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sLLgicBKiLpFtwiDd76Kn9O31SkeD3MpAI_hgvBWai9U/https://cdnfile.sspai.com/2024/10/21/article/d0cb8b49b9b73ec4abcd9f5f38694a8d.png?imageView2/2/format/webp)

创建完成后有很多可以设置的选项，不过我们这次主要会用到「应用凭证」、「权限管理」和「版本发布」这几项功能，其余的大家可以自行阅读飞书的[开发文档](https://sspai.com/link?target=https%3A%2F%2Fopen.feishu.cn%2Fdocument%2Fhome%2Findex)（在这里要保存好 `App ID` 和 `App Secret` 供后面使用）。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sH_QrDD9bUExY3HmfGd4GZzTKzPlxtPp_kv6FAeJiQdA/https://cdnfile.sspai.com/2024/10/21/article/d8b1801a5a53781bd1c1c25c0f1229c9.png?imageView2/2/format/webp)

想要通过应用向多维表格中提交数据，主要需要几个过程，我会把文档附在这里供大家参考：

* [获取鉴权](https://sspai.com/link?target=https%3A%2F%2Fopen.feishu.cn%2Fdocument%2Fserver-docs%2Fauthentication-management%2Faccess-token%2Ftenant%5Faccess%5Ftoken%5Finternal)
* 上传图片附件[获取 file\_token ](https://sspai.com/link?target=https%3A%2F%2Fopen.feishu.cn%2Fdocument%2Fserver-docs%2Fdocs%2Fdrive-v1%2Fupload%2Fupload%5Fall)
* 向多维表格中[提交数据](https://sspai.com/link?target=https%3A%2F%2Fopen.feishu.cn%2Fdocument%2Fserver-docs%2Fdocs%2Fbitable-v1%2Fapp-table-record%2Fcreate)

这个过程中，还需要向应用开放相应的操作权限，我建议是在「开发文档」中调试接口时，开通相应的权限。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sfeLVAqnCuQpdWIi_F7u7ibtn8ewWyu-ushoftNxbeXo/https://cdnfile.sspai.com/2024/10/21/article/6f910379d257441e9f549a5c3c98d4ee.png?imageView2/2/format/webp)

具体来说，我们需要提前准备好 4 个参数，分别是：

* `appid`：飞书应用的唯一标识，在应用设置页面获取
* `app_secret`：在应用设置页面获取，和 `appid` 一起使用，用于获取`tenant_access_token`
* `table_apptoken`：多维表格 App 的唯一标识，从多维表格链接中获取。
* `table_id`：多维表格数据表的唯一标识，从多维表格链接中获取。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s2mirmZDZDUuldCBjUbG_4hAM_vy2e-4KBG-Zrt4ohbU/https://cdnfile.sspai.com/2024/10/21/article/5183b3ee63fce60ea8b839ebbb71a9bd.png?imageView2/2/format/webp)

### 获取鉴权

提交`appid`和 `app_secret` ，获得`tenant_access_token`。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sObyXu3-bSV5JC1Flotq1S5i1-jPYLf20wBEpIn0PB0c/https://cdnfile.sspai.com/2024/10/21/article/c69cdb1b3c98a2073ae71f8d6e2a58a7.png?imageView2/2/format/webp)

```ruby
def access_token():
    url = "https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal"
    payload = json.dumps({
        "app_id": feishu_appid,
        "app_secret": feishu_app_secret
    })
    headers = {
        'Content-Type': 'application/json'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    return response.json()['tenant_access_token']
```

### 上传图片

对于附件类内容，需要先完成上传获取`file_token` ，后续提交表格记录时需要用到。这一步直接用飞书文档里的示例代码就行：

```python
import os
import requests
from requests_toolbelt import MultipartEncoder
def upload_media(file_path, access_token):
    file_size = os.path.getsize(file_path)
    url = "https://open.feishu.cn/open-apis/drive/v1/medias/upload_all"

    form = {
        'file_name': os.path.basename(file_path),
        'parent_type': 'bitable_image',
        'parent_node': table_apptoken,
        'size': str(file_size),
        'file': (open(file_path, 'rb'))
    }
    print(form)
    multi_form = MultipartEncoder(form)
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': multi_form.content_type
    }

    response = requests.request("POST", url, headers=headers, data=multi_form)
    print(response.json())
    if response.status_code == 200:
        return response.json().get('data', {}).get('file_token')
    else:
        return None
```

### 上传记录

这一步主要是结合数据表的结构，构造好需要提交的 JSON。主要是需要结合[文档](https://sspai.com/link?target=https%3A%2F%2Fopen.feishu.cn%2Fdocument%2Fserver-docs%2Fdocs%2Fbitable-v1%2Fbitable-structure)，注意不同类型的字段必须匹配相应的格式。比如，在表格中设置「豆瓣链接」的类型为超链接，这里就必须提供`text`和`link` ；「出版时间」设置为日期，就需要提交时间戳而非字符串；「封面图」设置为附件，就需要提交`file_token`；还有一些数字格式，也要匹配具体的设置。

如果提交的数据和设置的字段类型不匹配就会报错，所以需要仔细 debug 一下。代码比较简单，大家应该能看明白：

```prolog
def insert_book_info_to_feishu(book_info, file_token, access_token):
    url = f"https://open.feishu.cn/open-apis/bitable/v1/apps/{table_apptoken}/tables/{table_id}/records"

    payload = json.dumps({
        "fields": {
            "书名": book_info["书名"],
            "作者": book_info["作者"],
            "出版社": book_info["出版社"],
            "出版时间": book_info["出版时间"],
            "页数": book_info["页数"],
            "定价": book_info["定价"],
            "ISBN": book_info["ISBN"],
            "豆瓣评分": book_info["豆瓣评分"],
            "评分人数": book_info["评分人数"],
            "豆瓣链接": {
                "text": book_info["书名"],
                "link": book_info["豆瓣链接"]
            },
            "豆瓣简介": book_info["豆瓣简介"],
            "封面图": [
                {
                    "file_token": file_token
                }
            ]
        }
    })
    payload = construct_payload(book_info, file_token)
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {access_token}'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.json())
    print(f'飞书接口状态：{response.status_code}')
    return response.status_code
```

哦对顺便说一句，如果是专业搞飞书应用开发的，可以直接用 Python SDK，我手搓代码是这次因为一共也就两三个接口的事。

## 使用扫码枪录入 ISBN

完成以上准备工作之后，我们就可以开始录入数据了。这时就要祭出「扫码枪」了。具体来说，我用到的这种扫码枪叫做「红光一维码扫码枪」3

红光扫码枪：一种利用红色激光扫描条形码以快速读取其数据的设备。 一维码：由不同宽度的平行线条及其间隔组成的条形码，通常用于表示数字或字母信息。

：

大家现在用的更多的是手机扫描二维码。其实扫码枪这玩意儿一点都不神秘，超市收银台标配。而且一维码条形发明都几十年了，被广泛应用于商品标识。

扫码枪的原理其实很简单，就是通过光学扫描系统读取条形码中的数据，将其转换为电信号，再经过处理器处理后，模拟键盘输入的形式将数据传递给计算机等设备。

不过我用的并不是那种「有线枪式」的扫码枪，而是一个便携的蓝牙扫描枪（不带货哈）。所以对于电脑来说，扫码枪类似于一个无线键盘：

![](https://proxy-prod.omnivore-image-cache.app/0x0,spXR-DIML4YhyLEdIIhaauRST4QM7KQeV3RvkBgp20S8/https://cdnfile.sspai.com/2024/10/21/article/e2130f5366d42620008d63d708347f7d.png?imageView2/2/format/webp)

对于用户来说，只需要知道，连接扫码枪之后，你把键入的光标放在哪里，它就会把扫码结果直接输入到哪里（我录了个短视频，不知道能不能看清楚）。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sFnrIaiJf2-yyuZ4G2iLGhz_gomWnFTVeWV83ZERHV-w/https://cdnfile.sspai.com/2024/10/21/article/8e649a842a1fd730c7054773ee149427.gif)

扫码枪也有许多设置项，其中一项便是扫码结尾的字符，如果不做设置，扫码枪在连续扫描时就会录入一长串字符，所以一般来说会在结尾设置`\n`换行符。

到此我们就可以把以上所有工作流程串在一起了，运行起来的效果大概是这样：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sEdOL3bl4Oksm6H0JCQSFqZMCzHcjiReT4fYlhjIc_x4/https://cdnfile.sspai.com/2024/10/21/article/5df9f5566fac6140ee6bc7a7c975b3ef.gif)

比较费时间的其实是下载和上传图片。大家注意看最后几秒，在自动上传一条新纪录后，多维表格的快捷 AI 会根据我们的设置，自动填充好「一句话总结」和「AI 分类」两个字段。

这样基本上就能 10s 内录完一本书的数据，而且全程只需要做一个动作，就是扫码，很快就能整理出家里的图书数据库。

有了基础的数据表之后，就可以根据自己的需要创建更多视图。所谓视图，就是展现数据的不同方式。大家可以根据自己的数据类型和情况探索一下展示效果，这里不再详细介绍了\~

![](https://proxy-prod.omnivore-image-cache.app/0x0,shWW8pNZgMUbc4cygyBTEiVhcHLYvTa_UFXWLOfFQsa4/https://cdnfile.sspai.com/2024/10/21/article/de25193e115c5147763da0626ff810fd.png?imageView2/2/format/webp)

而且你别说，做完这个图书数据表之后，我觉得其他家庭数据库也挺有搞头的，用类似的思路，可以很快搭建出「**家庭药箱**」「**家庭食品保质期**」「**老婆的化妆品**」等等数据表，无非就是替换一下条形码查询数据的接口，而且类似这种需要注意保质期的数据表，还能利用多维表格中的到期提醒功能自动发送提醒。下周有空就做。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sBEGd1nMzXZUiCi50yGJ1Gbuqc3YkoZc4aLxqaGeDOiA/https://cdnfile.sspai.com/2024/10/21/article/3446778d13de2700d754211509d885bb.png?imageView2/2/format/webp)

最后我把全部代码分享一下，由于是自己用的，所以并没有刻意做什么整理，大家随便看看，仅供参考。

以上。

---

附录（本文用到的全部代码）：

```routeros
import requests
from bs4 import BeautifulSoup
import json
import os
from requests_toolbelt import MultipartEncoder
import time
from datetime import datetime
import re
[[设置飞书应用id]]
feishu_appid = ''
feishu_app_secret = ''
[[设置飞书表格的id]]
table_apptoken = ''
table_id = ''
def access_token():
    url = "https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal"
    payload = json.dumps({
        "app_id": feishu_appid,
        "app_secret": feishu_app_secret
    })
    headers = {
        'Content-Type': 'application/json'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    # print(response.json())
    return response.json()['tenant_access_token']
def upload_media(file_path, access_token):
    file_size = os.path.getsize(file_path)
    url = "https://open.feishu.cn/open-apis/drive/v1/medias/upload_all"

    form = {
        'file_name': os.path.basename(file_path),
        'parent_type': 'bitable_image',
        'parent_node': table_apptoken,
        'size': str(file_size),
        'file': (open(file_path, 'rb'))
    }
    print(form)
    multi_form = MultipartEncoder(form)
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': multi_form.content_type
    }

    response = requests.request("POST", url, headers=headers, data=multi_form)
    print(response.json())
    if response.status_code == 200:
        return response.json().get('data', {}).get('file_token')
    else:
        return None
def get_book_info_by_isbn(isbn):
    # 请求书籍搜索建议接口，获取书籍的URL和封面图片链接
    # 如请求失败，修改headers或增加cookies
    headers_suggest = {
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
        'x-requested-with': 'XMLHttpRequest',
    }
    params = {'q': isbn}
    response_suggest = requests.get('https://book.douban.com/j/subject_suggest', params=params, headers=headers_suggest)
    if response_suggest.status_code != 200 or not response_suggest.json():
        return "未找到相关书籍信息"
    book_suggest = response_suggest.json()[0]
    book_url = book_suggest['url'].replace('\\', '')
    pic_url = book_suggest['pic'].replace('\\', '').replace('subject/s','subject/l')
    # 请求书籍详情页，提取书籍的详细信息
    # 如请求失败，修改headers或增加cookies
    headers_detail = {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,
*/*
;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
    }
    response_detail = requests.get(book_url, headers=headers_detail)
    soup = BeautifulSoup(response_detail.text, 'html.parser')
    # 提取信息
    try:
        author = soup.find('span', text=' 作者').find_next_sibling('a').text.strip()
    except AttributeError:
        author = ''
    try:
        publisher = soup.find('span', text='出版社:').find_next_sibling('a').text.strip()
    except AttributeError:
        publisher = ''
    try:
        pub_year = soup.find('span', text='出版年:').next_sibling.strip()
        pub_year = convert_to_timestamp(pub_year)
    except AttributeError:
        pub_year = ''
    try:
        pages = int(soup.find('span', text='页数:').next_sibling.strip())
    except AttributeError:
        pages = ''
    try:
        price = float(re.search(r"(?:CNY\s*)?(\d+(?:\.\d+)?)(?:\s*元)?", soup.find('span', text='定价:').next_sibling.strip().replace('元', '')).group(1))
    except AttributeError:
        price = ''
    try:
        rating = float(soup.find('strong', class_='rating_num').text.strip())
    except:
        rating = ''
    try:
        votes = int(soup.find('span', property='v:votes').text.strip())
    except AttributeError:
        votes = ''
    try:
        intro_div = soup.find('div', class_='intro')
        paragraphs = intro_div.find_all('p')
        intro = "\n".join([p.get_text() for p in paragraphs])
    except AttributeError:
        intro = ''
    # 整合提取的书籍信息
    book_info = {
        "书名": book_suggest['title'],
        "作者": author,
        "出版社": publisher,
        "出版时间": pub_year,
        "页数": pages,
        "定价": price,
        "ISBN": isbn,
        "豆瓣评分": rating,
        "评分人数": votes,
        "豆瓣链接": book_url,
        "封面图链接": pic_url,
        "豆瓣简介": intro
    }
    return book_info
def download_cover_image(cover_url, save_path):
    response = requests.get(cover_url)
    if response.status_code == 200:
        with open(save_path, 'wb') as file:
            file.write(response.content)
        return save_path
    else:
        return None
def convert_to_timestamp(date_str):
    # 使用正则表达式匹配不同的日期格式
    date_formats = [
        r'^(\d{4})-(\d{1,2})-(\d{1,2})
$',  
        r'^(\d{4})-(\d{1,2})$
',            # 2023-02 或 2023-2
        r'^(\d{4})$',                      # 仅有年份 2023
    ]
    for date_format in date_formats:
        match = re.match(date_format, date_str)
        if match:
            groups = match.groups()
            if len(groups) == 3:  # 解析到年-月-日
                year, month, day = int(groups[0]), int(groups[1]), int(groups[2])
            elif len(groups) == 2:  # 解析到年-月
                year, month, day = int(groups[0]), int(groups[1]), 1  # 默认设置为1日
            elif len(groups) == 1:  # 仅解析到年份
                year, month, day = int(groups[0]), 1, 1  # 默认设置为1月1日
            # 构造日期对象并转化为时间戳
            date_obj = datetime(year, month, day)
            timestamp = int(date_obj.timestamp() * 1000)  # 转为毫秒级时间戳
            return timestamp
    raise ValueError("无法解析日期格式")
def construct_payload(book_info, file_token):
    # 初始化空的字段字典
    fields = {}
    # 动态构造需要提交的字段，跳过空值的字段
    if book_info.get("书名"):
        fields["书名"] = book_info["书名"]
    if book_info.get("作者"):
        fields["作者"] = book_info["作者"]
    if book_info.get("出版社"):
        fields["出版社"] = book_info["出版社"]
    if book_info.get("出版时间"):
        fields["出版时间"] = book_info["出版时间"]
    if book_info.get("页数"):
        fields["页数"] = book_info["页数"]
    if book_info.get("定价"):
        fields["定价"] = book_info["定价"]
    if book_info.get("ISBN"):
        fields["ISBN"] = book_info["ISBN"]
    if book_info.get("豆瓣评分"):
        fields["豆瓣评分"] = book_info["豆瓣评分"]
    if book_info.get("评分人数"):
        fields["评分人数"] = book_info["评分人数"]
    if book_info.get("豆瓣链接") and book_info.get("书名"):
        fields["豆瓣链接"] = {
            "text": book_info["书名"],
            "link": book_info["豆瓣链接"]
        }
    if book_info.get("豆瓣简介"):
        fields["豆瓣简介"] = book_info["豆瓣简介"]
    if file_token:
        fields["封面图"] = [{"file_token": file_token}]
    # 构造最终的 payload
    payload = json.dumps({"fields": fields})
    return payload
def insert_book_info_to_feishu(book_info, file_token, access_token):
    url = f"https://open.feishu.cn/open-apis/bitable/v1/apps/{table_apptoken}/tables/{table_id}/records"

    payload = json.dumps({
        "fields": {
            "书名": book_info["书名"],
            "作者": book_info["作者"],
            "出版社": book_info["出版社"],
            "出版时间": book_info["出版时间"],
            "页数": book_info["页数"],
            "定价": book_info["定价"],
            "ISBN": book_info["ISBN"],
            "豆瓣评分": book_info["豆瓣评分"],
            "评分人数": book_info["评分人数"],
            "豆瓣链接": {
                "text": book_info["书名"],
                "link": book_info["豆瓣链接"]
            },
            "豆瓣简介": book_info["豆瓣简介"],
            "封面图": [
                {
                    "file_token": file_token
                }
            ]
        }
    })
    payload = construct_payload(book_info, file_token)
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {access_token}'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.json())
    print(f'飞书接口状态：{response.status_code}')
    return response.status_code
def upload_book_to_feishu(isbn):
    # 获取飞书的 access_token
    token = access_token()

    # 获取书籍信息
    book_info = get_book_info_by_isbn(isbn)
    print(book_info)

    # 下载封面图片
    cover_url = book_info['封面图链接']
    save_path = f"./{isbn}.jpg"
    cover_file_path = download_cover_image(cover_url, save_path)

    if cover_file_path:
        # 上传封面图片至飞书并获取file_token
        file_token = upload_media(cover_file_path, token)

        if file_token:
            # 插入书籍信息到飞书表格
            status_code = insert_book_info_to_feishu(book_info, file_token, token)
            return status_code
        else:
            print("封面图片上传失败")
    else:
        print("封面图片下载失败")
[[使用示例]]
def scan_isbn_and_upload():
    print("请使用扫码枪输入ISBN，按 Ctrl+C 结束程序。")
    while True:
        try:
            # 等待用户通过扫码枪输入ISBN
            isbn = input("扫描ISBN: ").strip()  # .strip() 用于去除前后多余的空白和换行符

            if isbn:
                print(f"正在处理ISBN: {isbn}")
                upload_book_to_feishu(isbn)  # 调用函数上传书籍信息
                print(f"ISBN: {isbn} 处理完成\n")
            else:
                print("未检测到有效的ISBN，请重试。")

        except KeyboardInterrupt:
            # 用户按下 Ctrl+C 后，退出循环
            print("\n程序已终止。")
            break
[[调用函数，开始监听扫码输入]]
scan_isbn_and_upload()
```

题图来自 [Hermann Kollinger](https://sspai.com/link?target=https%3A%2F%2Fpixabay.com%2Fusers%2Fkollinger-15617407%2F%3Futm%5Fsource%3Dlink-attribution%26utm%5Fmedium%3Dreferral%26utm%5Fcampaign%3Dimage%26utm%5Fcontent%3D5211309), [Pixabay](https://sspai.com/link?target=https%3A%2F%2Fpixabay.com%2F%2F%3Futm%5Fsource%3Dlink-attribution%26utm%5Fmedium%3Dreferral%26utm%5Fcampaign%3Dimage%26utm%5Fcontent%3D5211309)

\> 关注 [少数派小红书](https://www.xiaohongshu.com/user/profile/63f5d65d000000001001d8d4)，感受精彩数字生活 🍃

\> 实用、好用的 [正版软件](https://sspai.com/mall)，少数派为你呈现 🚀

* 1国际标准书号，用于唯一标识图书等出版物的编号系统，便于全球范围内对出版物进行分类和识别。
* 2即《中国图书馆分类法》，是中国的一种大型综合性分类体系，用于系统地对图书馆馆藏进行分类和组织，是国内图书馆最广泛采用的分类法。
* 3红光扫码枪：一种利用红色激光扫描条形码以快速读取其数据的设备。 一维码：由不同宽度的平行线条及其间隔组成的条形码，通常用于表示数字或字母信息。

