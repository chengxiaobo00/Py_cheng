---
id: 8d51ed6a-fa5a-4b32-8c70-c38d554143da
title: |
  TOCOL函数顶呱呱，年薪至少两万八
author: |
  祝洪忠
tags:
  - Excel
date_saved: 2024-02-13 10:29:56
date_published: 2024-02-13 01:01:00
---

# TOCOL函数顶呱呱，年薪至少两万八
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-fl-mp-mg-hk-p-eoo-z-8-q-g-07-c-9-n-a-18da04c995d)
[Read Original](https://mp.weixin.qq.com/s/FlMPMgHkPEooZ8qG07c9nA)

 数据分析就用Excel _2024-02-13 01:01_ _上海_ 

小伙伴们好啊，今天咱们分享TOCOL函数的几个典型应用。  

这个函数目前可以在Excel 365和最新的WPS表格中使用，作用是将多列的区域或数组转换为单列。函数用法为：

\=TOCOL(要转换的数组或引用, \[是否忽略指定类型的值\], \[按行/列扫描\])

其中第二参数为0或者省略该参数时，表示保留所有值。为1表示忽略空白，为2表示忽略错误，为3表示忽略空白和错误。

第三参数指定扫描数组的方式，如果省略该参数或者参数值为FALSE，表示按行扫描，如果参数值为TRUE，则表示按列扫描。通常情况下不需要特别设置该参数。

**1、在多行多列中提取员工名单**  

如下图所示，希望在多行多列的值班表中，提取出不重复的人员名单。  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sZLfUx1Mu8vhPHxfKbrAyOqOPZ2Qg2iHkh35lTDfPEqE/https://mmbiz.qpic.cn/mmbiz_png/BAbVqibwwtmwcuWTUZjneEAWjibiaKjBcmkRB0R3GiaWeRJZryDczrHXknUWLHpenj2yuvZP0sJS8RN4lYCRpjQWeA/640?wx_fmt=png&from=appmsg)  

G2单元格输入以下公式，按回车即可：  

\=UNIQUE(TOCOL(B2:E8,1))

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s_NjOZgcWHXapOG8QTb26YbprX_bGGP45cbClm9mg62I/https://mmbiz.qpic.cn/mmbiz_png/BAbVqibwwtmwcuWTUZjneEAWjibiaKjBcmk5jia7Skd5HhuWqNIvpcQ0Hs7mgZwwYsntOjlLBqHICzbCEiap0vvAK2A/640?wx_fmt=png&from=appmsg)

TOCOL(B2:E8,1)部分，在忽略空单元格的前提下，将B2:E8单元格区域中的姓名转换为一列，再使用UNIQUE获取唯一值。

**2、按指定次数重复内容**  

如下图，希望根据B列的重复次数，将A列标签名称按次数重复显示，最终效果如D列所示。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,shNL1-usNWhgQ1INoy5Ti5hC_MCUwbQAmzCvpSAxPw8E/https://mmbiz.qpic.cn/mmbiz_png/BAbVqibwwtmwcuWTUZjneEAWjibiaKjBcmk1iazyIdbBarELQhJM3DR3DOPjxw7PhxlDibXvqCiahjgTY0rJjmg5a20w/640?wx_fmt=png&from=appmsg)

D2单元格输入以下公式，按回车。  

\=TOCOL(IF(B2:B5>=COLUMN(A:Z),A2:A5,0/0),2)

公式中的这部分IF(B2:B5>=COLUMN(A:Z),A2:A5,0/0)，分别将B2:B5中的数值与COLUMN(A:Z)得到的列号1\~26进行对比，如果大于等于列号，则返回A2:A5中的标签名称，否则返回0/0，也就是错误值#DIV/0!。

这部分的计算结果如下图所示：  

图中左侧白色数字为B列重复次数，顶端黄色数字为1\~26的列号。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sAkK5RIb6MTOYuTDK2XS1RrMgOtnFBDVlObUkAwpDYf8/https://mmbiz.qpic.cn/mmbiz_png/BAbVqibwwtmwcuWTUZjneEAWjibiaKjBcmkfTU9C2q9qYF9ib2pO5eYazjT5tUNJ35sFTfNq3k913tLricwFmO4rBKw/640?wx_fmt=png&from=appmsg)

接下来使用TOCOL函数，忽略错误值，将以上数组转换为一列。

**3、二维表转换为数据列表**  

如下图所示，希望将A\~E的二维表，转换为右侧所示的数据列表，部门和姓名分两列显示。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s3yyWl-fLa_58ewvAKcwUuR7ecsKZJb2p7wQqRFh24oo/https://mmbiz.qpic.cn/mmbiz_png/BAbVqibwwtmwcuWTUZjneEAWjibiaKjBcmkfXjIYicsUGsKibpOFXsaRdCwfq4mriaFTmSeibsTKDzJ4icUfiaxhXkKmY5A/640?wx_fmt=png&from=appmsg)

G2单元格输入以下公式，按回车。  

\=HSTACK(TOCOL(IF(B2:E5<>"",A2:A5,0/0),2),TOCOL(B2:E5,1))

公式由两个TOCOL函数组成。

先看第一部分TOCOL(IF(B2:E5<>"",A2:A5,0/0),2)。

使用IF函数进行判断，如果B2:E5不等于空白，就返回A2:A5中对应的部门名称，否则返回由0/0得到的错误值#DIV/0!：

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sKhuD0Rrx-8R0E18-cn99ylaZK84vZiNwqKO8huiy7EI/https://mmbiz.qpic.cn/mmbiz_png/BAbVqibwwtmwcuWTUZjneEAWjibiaKjBcmkicK5KckxtpKFicQJawQicll4TDM7OYc9kM6YDIHibnte3MIfMAic1LBeBFg/640?wx_fmt=png&from=appmsg)

接下来再使用TOCOL函数，忽略以上数组中的错误值将数组转换为一列。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sRPb__4gyGrdBSqp-UNLCwXfvKlozpijMGxHZeUvWt6c/https://mmbiz.qpic.cn/mmbiz_png/BAbVqibwwtmwcuWTUZjneEAWjibiaKjBcmkTalWvQFiaQ5q0XRkianE228lxcaZqvTmOSyO9dibnIGdmKmLW3vUD3v3A/640?wx_fmt=png&from=appmsg)

再看公式中的TOCOL(B2:E5,1)部分，这部分的作用是将B2:E5中的姓名，在忽略空白单元格的前提下转换为一列。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sJYP05bvmzU5VX_x0t5ksHlmEyHqEICRPbdJC-GTgUsc/https://mmbiz.qpic.cn/mmbiz_png/BAbVqibwwtmwcuWTUZjneEAWjibiaKjBcmkkTd9FAgrsNBiahwRpiaIhtOtE8ePnpica2UszoibJu8vKVBEHIkkVJDZog/640?wx_fmt=png&from=appmsg)

最后用HSTACK函数将以上两个TOCOL的数组结果，按左右方向合并为一个数组。

好了，今天咱们的分享就是这些吧，祝各位一天好心情\~\~  

图文制作：祝洪忠

![](https://proxy-prod.omnivore-image-cache.app/0x0,sztHen2zKglbooc8jnRanh8F2QK9kejIH_eS7fuz0zAU/data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"%3E%0A%3Cpath d=\"M12.8974 15.5585L14.9719 13.484L16.2447 14.7568L12.3519 18.6497C12.1566 18.8449 11.84 18.8449 11.6448 18.6497L7.75195 14.7568L9.02475 13.484L11.0974 15.5567L11.1 4.99976L12.9 5.0002L12.8974 15.5585Z\" fill=\"black\" opacity=\"0.3\"/%3E%0A%3C/svg%3E) 继续滑动看下一个 

