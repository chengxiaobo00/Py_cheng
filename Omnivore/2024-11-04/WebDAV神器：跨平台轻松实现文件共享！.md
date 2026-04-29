---
id: ec573e51-12a4-437b-8930-46ee5be45eef
title: |
  WebDAV神器：跨平台轻松实现文件共享！
author: |
  acchen
date_saved: 2024-11-04 17:05:53
date_published: 2024-10-31 22:58:00
---

# WebDAV神器：跨平台轻松实现文件共享！
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-tf-vb-jq-1-ie-vi-o-2-vu-gc-80-vq-192f66c4c64)
[Read Original](https://mp.weixin.qq.com/s/TFVbJQ1IEViO-2vuGC80VQ)

![Image](https://proxy-prod.omnivore-image-cache.app/0x0,sSI2YXTYK2-F_GijwPm09d84MicuVRDWQaRFKxBota2w/https://mmbiz.qpic.cn/mmbiz_png/2PDQe1C8W3dkVjlf6vETibByVYqm8ZXknicuEbRtNKKeVr57ZRs8PNy8znMaRoYPdxRKOelQd5FocrPia74AsIiaFg/640?wx_fmt=png&from=appmsg)

> 在当今这个数字化时代，文件的存储与访问是日常生活中不可或缺的一部分。无论是家庭还是企业，文件共享、存取和管理都是极为重要的需求。在这样的背景下，来自开发者@**hacdias**的开源项目则显得尤为吸引人。本文将详细介绍这款用Go语言开发的单文件WebDAV服务器，该服务器不仅功能强大，而且设置简单，使用便捷，完美地满足了不同平台用户的需求。

我们在日常使用计算机的过程中，时常需要进行跨设备的文件访问，而传统的USB数据线传输已经显得不够智能。WebDAV (Web-based Distributed Authoring and Versioning) 是一种可让用户通过Web协议实现读取、写入、修改文件的技术。它被广泛支持于各种操作系统中，支持通过简单的Web接口来远程访问文件。

该项目是一个无需多余依赖的软件包，仅需下载一个单文件即可启动WebDAV服务器，在Windows、macOS、Linux等主流操作系统上均能顺利运行。同时，WebDAV服务器也支持通过Docker进行快速部署，非常适合开发和运维人员。

![Image](https://proxy-prod.omnivore-image-cache.app/0x0,sq-V79GdPe4xwlbZGccWsP_n7KHwrcT1bbEQBzrWHV58/https://mmbiz.qpic.cn/mmbiz_jpg/2PDQe1C8W3dkVjlf6vETibByVYqm8ZXknuicVsecpcbgjo5JiaiaFGUrxlyv9Rl8YLy4c2Trt3sZU0qZlviarlGSqng/640?wx_fmt=jpeg&from=appmsg "一个 Go 语言写的，单文件 WebDAV 服务器[跨平台] 20")

### 快速使用指南

以Windows操作系统为例，下面是启动WebDAV服务器的简单步骤：

1. 在资源管理器中打开想要分享的文件夹。
2. 在资源管理器的地址栏输入`cmd`并回车，打开命令提示符窗口。
3. 将`webdav.exe`文件拖拽到命令提示符窗口上并按回车键。
4. 在客户端中访问`ip:6065`即可开始共享文件。

这样，无需任何复杂的配置即可实现文件共享。如果你需要设置访问控制，不妨加入用户名和密码。只需在项目根目录下创建一个`config.yaml`配置文件，内容如下：

```yaml
auth: true
users:
  - username: admin
    password: admin

```

然后在运行WebDAV时，使用命令`webdav.exe -c c:\config.yaml`。通过该配置文件，用户还可以自定义服务器端口、路径、用户权限（如读写权限）、TLS证书、日志、跨域资源共享（CORS）等。

### 为什么选择它？

与其他WebDAV解决方案相比，@**hacdias**的这一项目优势明显：

* **轻量易部署**：单一可执行文件即可运行，无需安装繁琐的软件套件。
* **跨平台支持**：原生支持Windows、macOS和Linux，用户可轻松在不同的平台间无缝切换。
* **高可配置性**：可通过配置文件简单调整参数，适应多种使用场景。
* **安全性强**：支持用户认证和权限设置，确保数据安全性。
* **适合所有用户**：不论是入门新手还是专业人士，均能轻松上手并高效使用。

### 相关资源

如果您对该项目感兴趣，可以通过以下链接获取该开源项目的源码和可执行文件：

* GitHub
* 在网盘上获取仅4MB大小的可执行文件：百度盘、夸克

### 同类项目推荐

* **WebDAV小秘**：一键开启PC上的WebDAV服务器，操作更为简便。
* **WebDAV CLI**：无需配置，只需一行命令即可开启服务。
* **QNAP 威联通的阿里云盘 WebDAV 插件**：适用于特定NAS设备的插件，支持阿里云盘。
* **parkomat WebDAV服务**：为用户提供组建常规WebDAV服务的便捷解决方案，支持多平台。

不同的工具有不同的特长，各位读者可以根据自身需求选择合适的WebDAV解决方案。无论你是为了共享家庭照片，还是企业内部的资料共享，这里介绍的@**hacdias**的WebDAV项目都是一个不错的选择。

## 

📣 记得点赞、分享，Thx🌐

## 

记得按时休息

---

**参考地址：**

* • **webdav的官网：** http://www.webdav.org/

[启动盘-Rufus助您无忧格式化USB](http://mp.weixin.qq.com/s?%5F%5Fbiz=Mzg4MDg2OTE0MQ==&mid=2247485481&idx=1&sn=af07292ab25bba979bcfe75cebaf8e67&chksm=cf6fe253f8186b456ef87b8dfebf436d051a31db246e4ef7c422bec2b4b7c0c317fb276d7b9b&scene=21#wechat%5Fredirect)  

**📚 欢迎关注我的公众号“AC技术与生活”，原创技术文章第一时间推送。**

![Image](https://proxy-prod.omnivore-image-cache.app/0x0,sOA5COgZT2OLAnD8nJMuR4ZbxL1W4mfC1jhVN08qlnmU/https://mmbiz.qpic.cn/mmbiz_jpg/2PDQe1C8W3dkVjlf6vETibByVYqm8ZXknmtTAgUcCWIZwa6ur0COU8lvQ3R7DdweVuDNQ6UJdmrZjdgM9uicXs9g/640?wx_fmt=jpeg&from=appmsg)

