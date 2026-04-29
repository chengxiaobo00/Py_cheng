---
id: 35d9a9ff-c997-45c4-8f8d-f77e21903781
title: |
  Obsidian 插件：Obsidian Leaflet 用法之管理自己的旅行照片
author: |
  StarAire
tags:
  - Obsidian
date_saved: 2023-12-22 17:42:46
date_published: 2023-12-18 10:00:00
---

# Obsidian 插件：Obsidian Leaflet 用法之管理自己的旅行照片
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-bom-big-4-wf-m-7-wtm-ozu-eq-dz-a-18c90e7cb9d)
[Read Original](https://mp.weixin.qq.com/s/BomBIG4WfM7wtmOzuEQDzA)

原创  StarAire  PKMer 知识社区 _2023-12-18 10:00_ _发表于陕西_ 

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sWB7bCVTTIWKrlZdnX7Jyil7Y5MZ6CVdjWLzq622Tx3U/https://mmbiz.qpic.cn/mmbiz_svg/ic3ibEjvYaKJxBj47ccnYYvUhaurdlVFwyiaqtVTZfcMvSA3wazqu093HttUeEoHOdlTAcHLujiclcUE3UiaTeWCX4JfmzZBF0Df4/640?wx_fmt=svg)

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sMu_2pSXPShKJlMnmhOnpftjlhAYhckY0UesTTgV0xGI/https://mmbiz.qpic.cn/mmbiz_svg/ic3ibEjvYaKJxBj47ccnYYvUhaurdlVFwy3FKEjddSVsrqY1PdQWF8JN7VYt9dXUI9Wxo3vboL5h0vlgsq3u6DzUBqZUb1hvhI/640?wx_fmt=svg)

点击上方蓝字，关注星标不迷路

本文首发于PKMer网站，信息可能已经过时，点击文末左下角 **阅读原文** 获取最新信息

## 概述

通过照片的 GPS 定位信息标记在地图上，鼠标放在标记点上可预览图片，标记点可绑定文件和图片，可以在里面写随想和照片，让相册里的照片跃然地图之上。

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s0LWrXN_fFd5ESlFVsf1cmGVO2E3sduJvGDZCgmrIkoQ/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPkQkWjw6U5hcXBGAwtF8t1Mq1CwpX8U0K3UKx637kmo15WicbTQeDia0VXsiaO1vSBxia8iaeicFiagBYJw/640?wx_fmt=png&from=appmsg)

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s1SpZbDojcWtq-p0fg_cNg7YhOt6PSGHc4wLDMY-PsW4/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPkQkWjw6U5hcXBGAwtF8t1awicQvafNmuF8sicutiaqTjs6hI9yWAPWJJibsEIFSXt4zwibnootO2CFuQ/640?wx_fmt=png&from=appmsg)

> 插件名片
> 
> * 插件名称：Obsidian Leaflet
> * 插件作者：Jeremy Valentine
> * 插件说明：在笔记中插入交互式地图，此地图基于 Leaflet.js。添加需要通过使用特定语法。
> * 插件分类：\[' 第三方工具集成 ', ' 图片 ', 'obsidian 插件 ', 'readme'\]
> * 项目地址：https://github.com/javalent/obsidian-leaflet
> * 国内下载地址：https://pkmer.cn/products/plugin/pluginMarket/?obsidian-leaflet-plugin

## 1 前言

自从使用 nas 备份自己的照片之后，成批的照片管理就成了问题，照片收集起来，一堆乱糟糟，不知从何看起，所以尝试了很多照片管理工具，有把一堆照片按时间分类整理的小软件，还有一些管理照片的软件例如 digikam 或 PhotoPrism，他们功能都很强大，可以快速的管理图片。

这些照片管理软件有一个地图的功能让我感觉特别有意思，但使用起来都有点不尽如人意，例如 PhotoPrism 的地图功能需要收费，digikam 的地图很模糊，观感不太好。

于是突然有一天我看到 obsidian 有个 Obsidian Leaflet 插件，了解一番之后觉得简直完美，下面我就简述一下这个插件的使用方法。

## 2 基本使用方法

### 2.1 安装插件

首先可以去 github 上看下这个插件的仓库：https://github.com/javalent/obsidian-leaflet

它给了一个案例和一个表

![](https://proxy-prod.omnivore-image-cache.app/0x0,smfz8NQkYzy5b7ZErgwgZEce0NJjRLzXR7hbsScweo70/https://mmbiz.qpic.cn/mmbiz_svg/ic3ibEjvYaKJxBj47ccnYYvVhUampdIAibQFTKxApWKGck4fGGlJ9qgRB4lvstgkVWKFUYKibShnmcrVEE0sZWoYpZsWlHoLTPng/640?wx_fmt=svg&from=appmsg)```` ```leafletid: leaflet-mapimage: [[Image.jpg]]height: 500pxlat: 50long: 50minZoom: 1maxZoom: 10defaultZoom: 5unit: metersscale: 1marker: default, 39.983334, -82.983330, [[Note]]darkMode: true``` ````

我们改为

![](https://proxy-prod.omnivore-image-cache.app/0x0,smfz8NQkYzy5b7ZErgwgZEce0NJjRLzXR7hbsScweo70/https://mmbiz.qpic.cn/mmbiz_svg/ic3ibEjvYaKJxBj47ccnYYvVhUampdIAibQFTKxApWKGck4fGGlJ9qgRB4lvstgkVWKFUYKibShnmcrVEE0sZWoYpZsWlHoLTPng/640?wx_fmt=svg&from=appmsg)```` ```leafletid: TT20220521osmLayer: falsetileServer: http://{s}.tile.osm.org/{z}/{x}/{y}.pngtileSubdomains: ['a', 'b', 'c']lat: 30.2574long: 120.1429height: 800pxwidth: 100%defaultZoom: 16maxzoom: 18minzoom: 1unit: metersscale: 1markerFolder: 100_Schedule/130_计划清单/133_旅游计划/旅游记录/2022/2022年5月西湖一日游/标记点``` ````

解释一下

* `id`：用来识别这个块的 id，写一个独一无二的就行，插件用这个 id 和标记点绑定
* `osmLayer: false`：我们这里使用真实地图，所以这里写 `false`
* `tileServer`：地图瓦片服务器地址，这里选择 `openstreetmap` 的源 `http://{s}.tile.osm.org/{z}/{x}/{y}.png`，也可以选择高德的源，下面会说到
* `tileSubdomains`：这是申请数据要附带的，这里填 `['a', 'b', 'c']`，不同的服务器不一样
* `lat`：地图打开时中心点的纬度
* `long`：地图打开时中心点的经度
* `height`：地图在 obsidian 页面高度，可以填像素值或者百分比，这里可以自由调整
* `width`: 地图在 obsidian 页面宽度，和上面一样
* `defaultZoom`：默认的一个缩放，这里插件原来的一个范围是 `1-10`，导致地图不能放的很小，后面讲一下怎么把范围改大，这里默认填 `16`，可以自己调整
* `maxzoom`：缩放最大限制
* `minzoom`：缩放最小限制
* `unit`：地图单位，这里填 `meters`
* `scale`：我也不知道是什么，照着填 1 就行了
* `markerFolder`: 标记点文件夹，可以暂时不填

### 2.2 添加想要的地图

#### 修改中心点经纬度

打开https://www.openstreetmap.org/#map

找到自己想要定位的点

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,stSe4DX024NlyPIWzETYA6EhIU1GBDwLdUhM5HVj0LcM/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPkQkWjw6U5hcXBGAwtF8t1iaY0rU3XMZpzVfAz1xGhqfWgoBJ58t0Xic1AzU2CMyh7E1W79wxLibfUg/640?wx_fmt=png&from=appmsg)

将上面的经纬度复制下来，前面是纬度，后面是经度，复制到上面的 lat 和 long 后面

#### 修改缩放限制

打开笔记文件夹目录底下的 `.obsidian` 文件夹，然后打开 `Plugins`\-`obsidian-leaflet-plugin`，打开里面的 `main.js`，全局搜索 `maxzoom:10`，全部修改为 `maxzoom:18`

然后保存，软件重启

最后我们输入

![](https://proxy-prod.omnivore-image-cache.app/0x0,smfz8NQkYzy5b7ZErgwgZEce0NJjRLzXR7hbsScweo70/https://mmbiz.qpic.cn/mmbiz_svg/ic3ibEjvYaKJxBj47ccnYYvVhUampdIAibQFTKxApWKGck4fGGlJ9qgRB4lvstgkVWKFUYKibShnmcrVEE0sZWoYpZsWlHoLTPng/640?wx_fmt=svg&from=appmsg)```` ```leafletid: TT20220430osmLayer: falsetileServer: http://{s}.tile.osm.org/{z}/{x}/{y}.pngtileSubdomains: ['a', 'b', 'c']lat: 30.2495long: 120.1436height: 800pxwidth: 100%defaultZoom: 14maxzoom: 18minzoom: 1unit: metersscale: 1``` ````

显示效果如下

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sw7ygdWW83W1vWuZuZG-KIJhdh9Gl76Mlm2Z2RQvBTfA/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPkQkWjw6U5hcXBGAwtF8t1MyFl9AwRopzUibic6ibd26qCNBzNAPibFT38v8zVMVliayhzpIXeEzuWIeA/640?wx_fmt=png&from=appmsg)

### 2.3 添加标记点

#### 最快捷的方式

找到要标记的点，鼠标右键，就打上了一个标记点，

然后右键标记点，编辑标记，Description 可以添加这个点的描述信息

右键标记点 -`转换为代码块`，此时切回编辑模式，可以看见自动添加了这个

![](https://proxy-prod.omnivore-image-cache.app/0x0,smfz8NQkYzy5b7ZErgwgZEce0NJjRLzXR7hbsScweo70/https://mmbiz.qpic.cn/mmbiz_svg/ic3ibEjvYaKJxBj47ccnYYvVhUampdIAibQFTKxApWKGck4fGGlJ9qgRB4lvstgkVWKFUYKibShnmcrVEE0sZWoYpZsWlHoLTPng/640?wx_fmt=svg&from=appmsg)`marker: default,30.258943640372824,120.13927459716798,,,,`

此时再切回预览，发现标记点是不是不见了，别急，把上面的后面几个逗号去掉

![](https://proxy-prod.omnivore-image-cache.app/0x0,smfz8NQkYzy5b7ZErgwgZEce0NJjRLzXR7hbsScweo70/https://mmbiz.qpic.cn/mmbiz_svg/ic3ibEjvYaKJxBj47ccnYYvVhUampdIAibQFTKxApWKGck4fGGlJ9qgRB4lvstgkVWKFUYKibShnmcrVEE0sZWoYpZsWlHoLTPng/640?wx_fmt=svg&from=appmsg)`marker: default,30.258943640372824,120.13927459716798`

再切回预览模式，点又回来了

我们可以看下 github 仓库里给我们的说明

![](https://proxy-prod.omnivore-image-cache.app/0x0,smfz8NQkYzy5b7ZErgwgZEce0NJjRLzXR7hbsScweo70/https://mmbiz.qpic.cn/mmbiz_svg/ic3ibEjvYaKJxBj47ccnYYvVhUampdIAibQFTKxApWKGck4fGGlJ9qgRB4lvstgkVWKFUYKibShnmcrVEE0sZWoYpZsWlHoLTPng/640?wx_fmt=svg&from=appmsg)`marker: <type*>,<latitude>,<longitude>,<link*>,<description*>,<minZoom*>,<maxZoom*>`

第一个 type 是点的类型，这里 default 即可

第二个第三个是经纬度

第四个是文件链接，这里我们可以链接照片也可以链接文件，

第五个是 description，是描述

第六第七个是是可以看见标记点的一个缩放大小区间

没有需求，后面可以不填

这里我们可以简单的绑定一个图片和添加描述信息

![](https://proxy-prod.omnivore-image-cache.app/0x0,smfz8NQkYzy5b7ZErgwgZEce0NJjRLzXR7hbsScweo70/https://mmbiz.qpic.cn/mmbiz_svg/ic3ibEjvYaKJxBj47ccnYYvVhUampdIAibQFTKxApWKGck4fGGlJ9qgRB4lvstgkVWKFUYKibShnmcrVEE0sZWoYpZsWlHoLTPng/640?wx_fmt=svg&from=appmsg)`marker: default,30.258943640372824,120.13927459716798,[[index.jpg]],123`

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,swdjQi_VazDomx-udtISkswWPMccuv62ttlw-ZETZML4/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPkQkWjw6U5hcXBGAwtF8t1z0wN5qAzJ6wZNxwKvBTEOibmprbSwsCmEr6DMkNEQ3Ipv2nUygFjk1Q/640?wx_fmt=png&from=appmsg)

#### 文件 +yaml 创建标记点

我们可以创建一个文件夹，然后在地图的 `markerFolder` 把这个路径添加进去，例如

![](https://proxy-prod.omnivore-image-cache.app/0x0,smfz8NQkYzy5b7ZErgwgZEce0NJjRLzXR7hbsScweo70/https://mmbiz.qpic.cn/mmbiz_svg/ic3ibEjvYaKJxBj47ccnYYvVhUampdIAibQFTKxApWKGck4fGGlJ9qgRB4lvstgkVWKFUYKibShnmcrVEE0sZWoYpZsWlHoLTPng/640?wx_fmt=svg&from=appmsg)```` ```leafletid: TT20220521osmLayer: falsetileServer: http://{s}.tile.osm.org/{z}/{x}/{y}.pngtileSubdomains: ['a', 'b', 'c']lat: 30.2574long: 120.1429height: 800pxwidth: 100%defaultZoom: 16maxzoom: 18minzoom: 1unit: metersscale: 1markerFolder: 100_Schedule/130_计划清单/133_旅游计划/旅游记录/2022/2022年5月西湖一日游/标记点``` ````

然后在该文件夹里添加标记点文件

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sQK9fGWgHq1C1bDYHJsPn5FwlQ0or3oHHHP0-jviV4PU/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPkQkWjw6U5hcXBGAwtF8t1alT3MichMOPjlNib3BfkbewIx2UJ2DYqeM8icicC5q75pBllP26fsVTtZQ/640?wx_fmt=png&from=appmsg)

我是通过经度 + 纬度的方式命名的，你也可以有其他命名方式

里面的 yaml 格式可以按照这样

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,ssawYjVgT2z1DPnwXmbMvptMYTpXF_s0l40ughO5F7uI/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfPkQkWjw6U5hcXBGAwtF8t1nW1gic2URtlEic7kOC5S0XSRic8ibEx3ZKlhR9VJSprGWqdFO767NicXxNA/640?wx_fmt=png&from=appmsg)

最关键的就是 `mapmarker` 和 `location` 字段，其他字段可以自己定义

* `mapmarker`：标记点类型，默认为 default
* `location`：经纬度信息

因为这些信息都可以从照片中获取，所以我们可以写一个脚本来获取信息 (这里形式不一，各位可以自行设计)

![](https://proxy-prod.omnivore-image-cache.app/0x0,smfz8NQkYzy5b7ZErgwgZEce0NJjRLzXR7hbsScweo70/https://mmbiz.qpic.cn/mmbiz_svg/ic3ibEjvYaKJxBj47ccnYYvVhUampdIAibQFTKxApWKGck4fGGlJ9qgRB4lvstgkVWKFUYKibShnmcrVEE0sZWoYpZsWlHoLTPng/640?wx_fmt=svg&from=appmsg)`import exifreadimport jsonimport urllib.requestimageurl = '![](自己的照片路径/'f = open(r'照片路径\\'+image, 'rb')tags = exifread.process_file(f)#打印照片其中一些信息# print('拍摄时间：', tags['EXIF DateTimeOriginal'])# print('照相机制造商：', tags['Image Make'])# print('照相机型号：', tags['Image Model'])# print('照片尺寸：', tags['EXIF ExifImageWidth'], tags['EXIF ExifImageLength'])print("---") print("mapmarker: default") print("date: ",tags['EXIF DateTimeOriginal']) print("device: "+ str(tags['Image Make'])+" "+str(tags['Image Model']))print("place: ")#获取经度或纬度def getLatOrLng(refKey, tudeKey):    if refKey not in tags:        return None    ref=tags[refKey].printable    LatOrLng=tags[tudeKey].printable[1:-1].replace(" ","").replace("/",",").split(",")    LatOrLng=float(LatOrLng[0])+float(LatOrLng[1])/60+float(LatOrLng[2])/float(LatOrLng[3])/3600    if refKey == 'GPS GPSLatitudeRef' and tags[refKey].printable != "N":        LatOrLng=LatOrLng*(-1)    if refKey == 'GPS GPSLongitudeRef' and tags[refKey].printable != "E":        LatOrLng=LatOrLng*(-1)    return LatOrLng lat = getLatOrLng('GPS GPSLatitudeRef','GPS GPSLatitude') [[纬度lng]] = getLatOrLng('GPS GPSLongitudeRef','GPS GPSLongitude') [[经度print]]('gps: [{},{}]'.format(lat, lng))if lat==None or lng==None:    print("no gps")    exit()print("location: [{},{}]".format(lat, lng))print("---")print(imageurl+image+')')`

最终将打印出来的信息，填到文件里

### 2.4 使用国内地图

有些景点，openstreetmap 的信息不是很多，所以我们被迫不得不用国内的地图

首先，将国外的服务器改为国内的高德

![](https://proxy-prod.omnivore-image-cache.app/0x0,smfz8NQkYzy5b7ZErgwgZEce0NJjRLzXR7hbsScweo70/https://mmbiz.qpic.cn/mmbiz_svg/ic3ibEjvYaKJxBj47ccnYYvVhUampdIAibQFTKxApWKGck4fGGlJ9qgRB4lvstgkVWKFUYKibShnmcrVEE0sZWoYpZsWlHoLTPng/640?wx_fmt=svg&from=appmsg)```` ```leafletid: TT20220430osmLayer: falsetileServer: http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}tileSubdomains: ["1", "2", "3", "4"]lat: 32.101long: 120.825height: 800pxwidth: 100%defaultZoom: 16maxzoom: 18minzoom: 1unit: metersscale: 1``` ````

修改 `tileServer` 为 `http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}`

`tileSubdomains` 修改为 `["1", "2", "3", "4"]`

但是国内的地图的坐标信息是采用的和国际不一样的坐标体系，所以国外的 GPS 坐标，用在国内的地图上就会发生偏移，下面我们就来解决这个问题

具体原因见：https://zhuanlan.zhihu.com/p/258883313

这是如果尝试添加之前的坐标点，就会发现地图上地点对不上，而之前的 openstreetmap 则没有偏移，为了解决这个问题，我们调用高德的坐标转换 API

https://developer.amap.com/api/webservice/guide/api/convert

申请一个 KEY

然后修改之前的脚本

![](https://proxy-prod.omnivore-image-cache.app/0x0,smfz8NQkYzy5b7ZErgwgZEce0NJjRLzXR7hbsScweo70/https://mmbiz.qpic.cn/mmbiz_svg/ic3ibEjvYaKJxBj47ccnYYvVhUampdIAibQFTKxApWKGck4fGGlJ9qgRB4lvstgkVWKFUYKibShnmcrVEE0sZWoYpZsWlHoLTPng/640?wx_fmt=svg&from=appmsg)`import exifreadimport jsonimport urllib.requestimport requests # 高德地图坐标转换gaodeconvert_enable = 1# 高德API的keygaodeapi_key = "自己的key"# 高德api的网址gaodeapi_sitehead = "https://restapi.amap.com/v3/assistant/coordinate/convert?locations="imageurl = '![](自己的图片路径/'f = open(r'图片路径\\'+image, 'rb')tags = exifread.process_file(f)#打印照片其中一些信息# print('拍摄时间：', tags['EXIF DateTimeOriginal'])# print('照相机制造商：', tags['Image Make'])# print('照相机型号：', tags['Image Model'])# print('照片尺寸：', tags['EXIF ExifImageWidth'], tags['EXIF ExifImageLength'])print("---") print("mapmarker: default") print("date: ",tags['EXIF DateTimeOriginal']) print("device: "+ str(tags['Image Make'])+" "+str(tags['Image Model']))print("place: ")#获取经度或纬度def getLatOrLng(refKey, tudeKey):    if refKey not in tags:        return None    ref=tags[refKey].printable    LatOrLng=tags[tudeKey].printable[1:-1].replace(" ","").replace("/",",").split(",")    LatOrLng=float(LatOrLng[0])+float(LatOrLng[1])/60+float(LatOrLng[2])/float(LatOrLng[3])/3600    if refKey == 'GPS GPSLatitudeRef' and tags[refKey].printable != "N":        LatOrLng=LatOrLng*(-1)    if refKey == 'GPS GPSLongitudeRef' and tags[refKey].printable != "E":        LatOrLng=LatOrLng*(-1)    return LatOrLng lat = getLatOrLng('GPS GPSLatitudeRef','GPS GPSLatitude') [[纬度lng]] = getLatOrLng('GPS GPSLongitudeRef','GPS GPSLongitude') [[经度print]]('gps: [{},{}]'.format(lat, lng))if lat==None or lng==None:    print("no gps")    exit()gaodeapi_site = gaodeapi_sitehead + str(lng)+","+str(lat)+"&coordsys=gps&output=json&key="+gaodeapi_keyresponse = requests.get(gaodeapi_site)locations = response.json()['locations']locations_list = locations.split(',')gn=locations_list[1]+','+locations_list[0]print("gn: [{}]".format(gn))if gaodeconvert_enable == 1:    print("location: [{}]".format(gn))     [[response]] = requests.get(gaodeapi_site+"locations="+lng+","+lat+"&coordsys=gps&output=json&key="+gaodeapi_key)else:    print("location: [{},{}]".format(lat, lng))print("---")print(imageurl+image+')')if gaodeconvert_enable == 1:    print(gn) else:    print("{},{}".format(lat, lng))`

最终生成出转换后的坐标

### 2.5 路径

配合右下角的一些编辑工具，可以实现整个旅行路径的绘制，还是蛮有意思的。

## 3 最后

因为这个插件在网上资料不是很多，故想写一个推文去普及一下这个插件的使用，文中还有不详细的地方以及不是很完美的地方还请见谅，后面我会继续完善这个文章。

### 参考链接

* 插件 github：https://github.com/javalent/obsidian-leaflet
* openstreetmap 官网：https://www.openstreetmap.org/#map
* leaflet 中如何优雅的解决百度、高德地图的偏移问题<https://zhuanlan.zhihu.com/p/258883313
* 照片位置信息提取（获取经纬度）：https://blog.csdn.net/weixin\_47325163/article/details/119037394
* 告别十年印象笔记，用 Obsidian 一年最喜欢的 7 个功能：https://sspai.com/post/77852
* leaflet 之添加各种地图的服务：https://blog.csdn.net/gexin0517/article/details/103769193

## 往期推荐

* [PKMer插件安卓端手把手安装教程](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzNTUyMTgwMA==&mid=2247485108&idx=1&sn=03d2f4dee78356ad40a03707d1a34c2b&chksm=c2adfdd3f5da74c584d8ab8bc6f3a0cc78401c21a3d40b28c2bb47f3b2e19b8e49273040697b&scene=21#wechat%5Fredirect)
* [仪式感拉满，obsidian插件在你完成任务的时候来些喝彩](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzNTUyMTgwMA==&mid=2247484772&idx=1&sn=f7c8e80089e77a9326a97533842e262b&chksm=c2adfe03f5da7715acdbf9b55896ceb3a1ba77879702739363c607a9b4f69e28b395ec480f81&scene=21#wechat%5Fredirect)
* [🤩 新版Ob表格编辑功能！1.5超前预览](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzNTUyMTgwMA==&mid=2247484535&idx=1&sn=7d993b5f804c304ff2d76924b8fbbd63&chksm=c2adff10f5da76060ed7b5508cf474df09e02190d64fc3804d460c02b07d81b86ee285eff130&scene=21#wechat%5Fredirect)
* [PKMer挂件集市上新啦！一键拥有好看又好用的笔记挂件](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkzNTUyMTgwMA==&mid=2247484433&idx=1&sn=69bf9895de85d34d9d90b6983a74cce5&chksm=c2adff76f5da76603e7a3b503ed46c792f124d7a0c1781a622df1233f1722069c847caaed3a1&scene=21#wechat%5Fredirect)

**期待你的分享、点赞、在看**

![](https://proxy-prod.omnivore-image-cache.app/0x0,sLbz75PZ9iO89IgrYUcxjRR57vnRYCyVesJkAtig4PT8/https://mmbiz.qpic.cn/sz_mmbiz_png/epTcXdtRjfMCdkpoKibpmxFSwd5e7qfBwJRXdchVFTPcA0wbQVSycj3fLWrSuHpX5vYVgkndLU0dJ1wzHtDguwQ/640?wx_fmt=png)

**QQ群｜**825255377

**PKMer官网｜**https://pkmer.cn/

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,s4ISSK1PuJR3nlbJjZ7NJQ5gDohDy9R4E2tEmSJlYfpM/https://mmbiz.qpic.cn/sz_mmbiz_gif/epTcXdtRjfPUicgQMTTfcxt7dFrntibCvHbC9iaamiboo70mRfCJaN0MmAUOkUqP3JEqZ4x94JN5ibB4xSzfFoI62TA/640?wx_fmt=gif&from=appmsg)

戳“阅读原文”一起来充电吧!

![](https://proxy-prod.omnivore-image-cache.app/0x0,sztHen2zKglbooc8jnRanh8F2QK9kejIH_eS7fuz0zAU/data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"%3E%0A%3Cpath d=\"M12.8974 15.5585L14.9719 13.484L16.2447 14.7568L12.3519 18.6497C12.1566 18.8449 11.84 18.8449 11.6448 18.6497L7.75195 14.7568L9.02475 13.484L11.0974 15.5567L11.1 4.99976L12.9 5.0002L12.8974 15.5585Z\" fill=\"black\" opacity=\"0.3\"/%3E%0A%3C/svg%3E) 继续滑动看下一个 

