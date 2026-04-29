---
id: 513b8943-57ae-4f68-acd8-2bb3a78fb22f
title: |
  iPhone 16 系列发布会上没说的那些事 - 少数派
author: |
  少数派编辑部
tags:
  - RSS
date_saved: 2024-09-13 15:00:00
date_published: 2024-09-13 15:00:00
---

# iPhone 16 系列发布会上没说的那些事 - 少数派
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/i-phone-16-191eb428ee6)
[Read Original](https://sspai.com/post/92265)

2024 年 9 月 10 日凌晨，Apple 秋季新品发布会举行，和往年一样每次发布会 Apple 也会留下一些悬念，等待各家科技媒体或者消费者们去发掘。虽然新品尚未开始发货，我们也整理了一些发布会中未提及的细节，不妨一起来看看有没有你感兴趣的。

## 无线快速充电

这次在发布会上未详细说明的，但备受大家关注的 Apple Watch 和 iPhone 的无线快速充电问题。

![R6nubLBato0dapxBMpCcjYpXnaf](https://proxy-prod.omnivore-image-cache.app/0x0,skBhcIwM3ijNgHJPkzex4lYHPD3pc3-0RAZgIc3A1smw/https://cdnfile.sspai.com/editor/u_/crhr3gdb34te24sqvdug.png?imageView2/2/format/webp)

首先，在中国卖的 Apple Watch Series 10、Apple Watch Ultra 2 和 Apple Watch SE (第 2 代)部分型号均**不支持**无线快速充电。你哪怕是用老款手表附赠的 [Apple Watch 磁力快速充电器](https://www.apple.com.cn/shop/product/MT0H3CH/A)，也是没办法给这些手表**充电**的。

只能用随附的、或[购买 Apple Watch 磁力充电器](https://www.apple.com.cn/shop/product/MXD93CH/A)，才能给这些手表充电。这里不清楚屏蔽的具体实现方式，但考虑到 Apple 喜欢共用相同硬件的作风，软件限制的可能性更大，

![DpRvbdG9bogVGvxuk1wcwhKRnre](https://proxy-prod.omnivore-image-cache.app/0x0,sd0pBWcjFOrhXYBRK7e8i2iwyLAtPORAHoYtutDy6v_s/https://cdnfile.sspai.com/editor/u_/crhr3glb34te28i8kvk0.png?imageView2/2/format/webp)

根据今年 9 月 1 日生效的《[无线充电（电力传输）设备无线电管理暂行规定](https://www.gov.cn/zhengce/zhengceku/202305/P020230531426398947234.pdf)》：

> 第四条 移动、便携式无线充电设备的工作频率范围为 100 -148.5kHz、6765-6795kHz、13553-13567kHz 频段，且额定传输功率不超过 80W。

从[相关文档](https://sspai.com/link?target=https%3A%2F%2Fwww.graniteriverlabs.com%2Fen-us%2Ftechnical-blog%2Fqi2-wireless-charging-standards-evolution)中不难发现，MagSafe 和 Qi2 的主要工作频率则是 360kHz，这意味着它们根据国内新规不能用于无线充电。

为什么法规要限制这个频段呢？从无线电管理的角度，各个频段往往都有指定用途，这一般是根据国际电联（ITU）协商制定的。中国也采用了 ITU 的划分方式，反映在工信部文件《[无线电频率划分规定](https://www.gov.cn/zhengce/zhengceku/2018-12/31/content%5F5439640.htm)》中。根据该规定，325-405KHz 是用于航空无线电导航业务的。因此，新规定避开了这一频段，可能是出于避免干扰的考虑。

Apple 将这类法规统称为[无线电力传输 (WPT) 法规](https://support.apple.com/zh-cn/120920)，并表示：

> ……符合 WPT 标准的 Apple Watch 磁力充电器转 USB‑C 连接线（1 米）。这款充电器不支持其他 Apple Watch 机型，也无法为其他机型充电。

类似地，iPhone 的快速充电也会收到无线电力传输 (WPT) 法规的限制，所以今年中国内地售卖的 iPhone 16 系列也没有高达 25W 的 MagSafe 无线充电的支持。

在 Apple 的老家美国，主管部门联邦通信委员会（FCC）同样采用了 ITU 的频率规划表，将 360kHz 分配给航空无线电，那为什么美版设备没有这个限制呢？这是因为根据 FCC 法规，消费级低功率设备在不干扰分配用途，并且经过指定的检测申报流程的前提下，可以使用没有分配给它的频段。此外，FCC 走得也相对靠前，出台[指南](https://sspai.com/link?target=https%3A%2F%2Fapps.fcc.gov%2Foetcf%2Fkdb%2Fforms%2FFTSSearchResultPage.cfm%3Fid%3D41701%26switch%3DP)明确允许了 MagSafe 类型的无线充电设备的频段使用，并且简化了一些认证流程。

但 Apple Watch 这次在国内用不上快充，Apple 自己也不是没有责任。首先，此次无线充电规范的意见征求稿早在 2021 年就有了，2023 年 6 月就有额外的公示，Apple 理论上有一整年的时间处理这个问题，但从结果看显然没有及时处理。例如，MagSafe 无线充电器（和相关模块）是[支持 OTA](https://sspai.com/link?target=https%3A%2F%2Fwww.macrumors.com%2F2023%2F05%2F02%2Fmagsafe-charger-firmware-update-may-2023%2F) 的，也就是说理论上是可以通过 OTA 改变频率实现在特定地区允许频段内快速充电，但 Apple 似乎也没有积极探索这一做法。

![DgNrbODRaoh099xZE12c3ArJnrd](https://proxy-prod.omnivore-image-cache.app/0x0,sjJYlvzoe5BPNeLjP5691UlkQ4vrdtZfZfHGS91aJMnk/https://cdnfile.sspai.com/editor/u_/crhr3gtb34te26k7fkag.png?imageView2/2/format/webp)

目前，我们也只能期望未来 Apple 可以通过 OTA 升级的方式实现更高功率的无线充电功率了。

虽然 Apple 从 iPhone 15 系列开始就将 Lighting 改为使用更广泛的 USB-C 接口，但 iPhone 15 系列使用的是传输速率为 480 Mbps 的 USB 2.0，与之前的闪电接口相同；而 iPhone 15 Pro 系列使用的是传输速率为 10Gb/s 的 USB 3.0。

![JYaNbSs0IoymxGxs0swcgLXmnOc](https://proxy-prod.omnivore-image-cache.app/0x0,siyiR2wL678hicJclqu8WU8eIgTIoeGjp4aWgPitzNR4/https://cdnfile.sspai.com/editor/u_/crhr3h5b34te2aubs4jg.png?imageView2/2/format/webp)

![TH91bruW5olIttxnkPkcfkSWnnf](https://proxy-prod.omnivore-image-cache.app/0x0,sH70_3givxK4P1BUPyPNAateJfEvbHE9ZiT8_yuvQyP4/https://cdnfile.sspai.com/editor/u_/crhr3hdb34te2aubs4k0.png?imageView2/2/format/webp)

今年的 iPhone 16 和 16 Plus 仍保持 USB 2.0 速率；而发布会上被标注为支持更快速率 USB 3 的 A18 Pro 芯片，实际上 iPhone 16 Pro 和 Pro Max 的 USB-C 速率仍为 10Gb/s。

在 5G 网络方面，iPhone 16 全系列和前代参数一致，只有美版 iPhone 毫米波技术，其他地区均支持 Sub-6GHz，但在频段上仍有些许[差异](https://www.apple.com.cn/iphone/cellular/)。至于无线网络方面，iPhone 16 全系列都支持 Wi-Fi 7。不过 Apple 强调「Wi-Fi 6E 和 Wi-Fi 7 仅适用于支持此功能的国家或地区」，所以具体情况还取决于各地的网络规划和安排。

![TRmDbQVnKo9wYCxQ0PUcy4hwn6f](https://proxy-prod.omnivore-image-cache.app/0x0,sNKYroZfYrq-vwkhEQklW5RaRBu8ycBo9hnvpvMnJiGM/https://cdnfile.sspai.com/editor/u_/crhr3hlb34te26k7fkb0.png?imageView2/2/format/webp)

今年 iPhone 16 系列的后置相机均支持拍摄空间照片，看起来 Apple 开始大力推行空间视频拍摄了，不过分辨率仍然为 1080P (30 fps)。

![UaBWbx2gYo9KPIxdqlRcFFFnnVh](https://proxy-prod.omnivore-image-cache.app/0x0,sZfxJkZU1Zr7-zAz4D6O8pPG9e0mibMZ72TA6BlKHmf8/https://cdnfile.sspai.com/editor/u_/crhr3htb34te26k7fkbg.png?imageView2/2/format/webp)

不过，这次摄像头更新重点还是配备了**抗反射镜头涂层**，其中 iPhone 16 Pro 系列所有的摄像头均配备了抗反射镜头涂层，而 iPhone 16 普通系列则只有融合式摄像头（主摄）采用了的抗反射涂层。有了抗反射镜头涂层的效果怎么样，目前还不好说，但至少「鬼影」应该是有救了。

![FImjb22KYo8oQhxPxnlcRwvan4c](https://proxy-prod.omnivore-image-cache.app/0x0,sH8Vnr10oROmjuApTas4HEyJM2x8exxEsExbEAM9Cgac/https://cdnfile.sspai.com/editor/u_/crhr3i5b34te24sqvdv0.png?imageView2/2/format/webp)

在文件格式方面，据 MacRumors [表示](https://sspai.com/link?target=https%3A%2F%2Fwww.macrumors.com%2F2024%2F09%2F09%2Fiphone-16-pro-supports-jpeg-xl-format%2F) iPhone 16 Pro 系列新增支持 JPEG-XL 格式，该格式具有更高的压缩率，同时支持有损与无损压缩，但 iOS 默认仍为 HEIC 格式，但用户可手动切换至 JPEG-XL 格式。

内存方面，据 MacRumors [表示](https://sspai.com/link?target=https%3A%2F%2Fwww.macrumors.com%2F2024%2F09%2F09%2Fall-iphone-16-models-have-8gb-ram%2F)相比去年 iPhone 15 系列只有 6G 内存，今年 iPhone 16 以及 iPhone 16 Pro 全系列（四款机型）都配备了 8GB 运存，旨在能更好地运行 Apple 智能。虽然 Apple 表示明年 Apple 智能就能支持中文，但遗憾的是Apple 智能在中国仍「需在稍后经过监管部门批准后才能使用该功能」。

![AnFkbw6PyosLhDxYOsPcZAT6nnb](https://proxy-prod.omnivore-image-cache.app/0x0,s4sCrkTrXONnzBCQXert2YNKxRE_3mIe5nE6LvXgqW-E/https://cdnfile.sspai.com/editor/u_/crhr3idb34te24sqvdvg.png?imageView2/2/format/webp)

电池方面，得益于 iPhone 16 全系列更大的电池，让续航有了显著提升；不过也因为更大的电池让 20W 充电器无法在 30 分钟内将 iPhone 16 Pro Max 系列充至 50%，需要 35 分钟。另外，根据目前中国质量质量认证中心关于新手机的充电细节的曝光，iPhone 16 系列可能全系支持最大 15V 3A 也就是最高 45W 的充电速度。不过，有博主测试后 iPhone 16 系列最大充电速度为 35W。

![UJrgbUZRIooiySx4nnmcLVd6nxb](https://proxy-prod.omnivore-image-cache.app/0x0,sJ1G4C0smExwOf7u-1wSpBVPTaguzC2YygKDq2rGlQNQ/https://cdnfile.sspai.com/editor/u_/crhr3ilb34te28i8kvkg.png?imageView2/2/format/webp)

iPhone 16 系列标注为 5-15VDC,3A 最大

![LNa9bmaerogefcxFN35cGI5vnjd](https://proxy-prod.omnivore-image-cache.app/0x0,sPi3-uR5ftEiwQ5WYFAXuVQ9Cr_IveOnPhAS0Hjp-FHE/https://cdnfile.sspai.com/editor/u_/crhr3itb34te28i8kvl0.png?imageView2/2/format/webp)

iPhone 15 系列标注为 5VDC, 1A 或5.2VDC, 2.4A 或 9VDC, 3A 或 14.5VDC, 2A

## AirPod 篇

AirPod 4 相较于 AirPod 3 有了较大幅度的更新，更新了 H2 芯片、采用 USB-C 接口、支持防尘且抗汗抗水 (IP54)，但分为了两个版本：AirPods 4 和 AirPods 4（支持主动降噪）。

![S92Mbb05cor6I1xELtfczsB6nrh](https://proxy-prod.omnivore-image-cache.app/0x0,s3K5MPolj2OAw0MDOSsnCzNmK4s66eg_f3dRm-Einkno/https://cdnfile.sspai.com/editor/u_/crhr3jdb34te2aubs4kg.png?imageView2/2/format/webp)

AirPods 4 系列耳机连同充电盒的续航时间均可达 30 小时。其中，AirPods 4（支持主动降噪）启用主动降噪后可以续航可达 20 小时，还支持通透模式、自适应音频和对话感知等功能，且佩戴传感器从皮肤传感器再次换为了光学传感器。

![SzycbMWZZo3po4x6ZTVcRbuTnbg](https://proxy-prod.omnivore-image-cache.app/0x0,sD7PZ_yyl3MrFTxxmZsY9RPW1Fi2lmmdFYzEjaeEY82I/https://cdnfile.sspai.com/editor/u_/crhr3jlb34te24sqve00.png?imageView2/2/format/webp)

但今年 AirPod 4 的包装盒里会少一个配件—— USB-C 数据线，库克也是越发抠门了。

![K7NEbGATaozcn3xx8U7cD7nvnog](https://proxy-prod.omnivore-image-cache.app/0x0,s35HiKXya0ubzN3TXqZcd4NCajWhx2k0f_INTR-7s8HE/https://cdnfile.sspai.com/editor/u_/crhr3jtb34te24sqve0g.png?imageView2/2/format/webp)

而且如果是高校师生，那么现在通过教育优惠买 iPad 或 Mac 也是值得考虑的，因为现在教育优惠中送的耳机边变成 AirPods 4（支持主动降噪）款。

![TSqab0BT9oC3Qxxg9gTcqAkkneh](https://proxy-prod.omnivore-image-cache.app/0x0,sJPQkLp6dshEkR1LOIje31H7D75RovhzJwrOBQZo-XWk/https://cdnfile.sspai.com/editor/u_/crhr3jtb34te26k7fkc0.png?imageView2/2/format/webp)

## 配件篇

在今年的发布会上，随新品一同更新的还有相关配件，尤其是备受关注的手机保护壳。

去年 iPhone 15 发布时推出的精织斜纹保护壳虽然受欢迎，但由于该材质容易磨损和沾染污渍，因此在今年 iPhone 16 的发布时，Apple 没有再推出精织斜纹保护壳。目前，只提供 MagSafe 透明保护壳和硅胶保护壳两种选项，两款保护壳的售价均为 399 元。

![U1MfbyH0Jo2jljxO4RNciSW8nQh](https://proxy-prod.omnivore-image-cache.app/0x0,sr8Uc8zNIvxO1bjbUUpY8AFy0O61bRpdSMqjMducuVEk/https://cdnfile.sspai.com/editor/u_/crhr3k5b34te2aubs4l0.png?imageView2/2/format/webp)

如果你还发现了其它 Apple 发布会上没有提到的有意思的事情，欢迎在评论区一起分享。

\> 下载少数派 [客户端](https://sspai.com/page/client)、关注 [少数派公众号](https://sspai.com/s/J71e)，了解更多的新玩意 🆒

\> 特惠、好用的硬件产品，尽在 [少数派 sspai 官方店铺 ](https://shop549593764.taobao.com/?spm=a230r.7195193.1997079397.2.2ddc7e0bPqKQHc)🛒

© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。

