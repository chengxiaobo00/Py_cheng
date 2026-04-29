---
id: 8ebbd4d4-56eb-4002-86a8-45fc10f0521c
title: |
  打造全直流 UPS 供电系统 - 少数派
author: |
  Soundtrack9407
tags:
  - RSS
date_saved: 2024-10-23 17:29:04
date_published: 2024-10-23 17:29:04
---

# 打造全直流 UPS 供电系统 - 少数派
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/ups-192ba043af2)
[Read Original](https://sspai.com/post/90258)

**Matrix 首页推荐** 

[Matrix](https://sspai.com/matrix) 是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选 Matrix 最优质的文章，展示来自用户的最真实的体验和观点。

文章代表作者个人观点，少数派仅对标题和排版略作修改。

---

在亲身经历某次意外断电导致的 docker 容器损毁后，给重要设备加装 UPS 不间断电源已是势在必行，在增强系统稳定性的同时，也让设备可以在停电后继续提供必要的服务，比如网络和安防部分。

目前市场上常见的 UPS 基本都是围绕逆变器来做文章，可选的品牌很多，技术也很成熟，咋一看好像也没其它方案可选，但实际还有一种市场上不太常见，但常见于安防、消防及应急照明等微型系统的 UPS 电源，本文以其中一款电源为基础，结合实际情况不断扩展后，形成了以直流为主的 UPS 不间断电源系统。

从实际使用上看，在低功率需求1下可以比常见的逆变器方案表现得更好，主要体现在：

* 造价低，经济节约
* 结构简单，可自行维护
* 自然冷却，无运行噪音

## 明纬 PSC 电源

![](https://proxy-prod.omnivore-image-cache.app/0x0,s4P6CciB8YyMO_QwCLWYNo3K8NZul_Kar_SMU0RkDamk/https://cdnfile.sspai.com/2024/10/23/article/42bda6823172d05f41ae14a0cc829afe.png?imageView2/2/format/webp)

明纬 PSC 系列电源「机壳型」

与逆变型 UPS 的区别在于，这款产品本质上只是一个开关电源， **但加入了 UPS 功能** ，全程使用直流电驱动负载运行，而不是交流电，不需要逆变器；停电时，备份电路会把负载切换到蓄电池供电，此时的工况和后备式 UPS 差不多，但不是交流电，而是直接由电池供电，电源本身几乎不产生热量，只要后备电池容量够，可以供负载连续运行很长一段时间「以小时计」。

_能找到这种电源也是非常巧合：2021 年给 5V 设备做集中供电改造，听了网友的建议用的是_ [_明纬的 5V 工业开关电源_ ](https://sspai.com/link?target=https%3A%2F%2Fwww.meanwell.com.cn%2Fupload%2Fpdf%2FLRS-35%2FLRS-35-SPEC-CN.PDF)_，三年多来运行良好，于是在他们官网上碰碰运气，结果还真有；电源属于安防监控产品线，主要用于安控、消防、应急照明等系统，最重要的是：附有较为完善的_ [_说明书_ ](https://sspai.com/link?target=https%3A%2F%2Fwww.meanwell.com.tw%2Fwebapp%2Fproduct%2Fsearch.aspx%3Fprod%3DPSC-60)_。_

### 确定规格

明纬 PSC 系列电源提供两个可供用户选择的输出电压及四种不同的输出功率，分别是 12V 或者 24V，最大功率从 30-160W，购买前需要考虑现有设备电力需求来决定使用哪一种电压，如果能将所有负载设备统一由一种电压来供应，即意味着使用单个 PSC 电源，搭配单组电池就能实现 UPS 功能。

以具体的设备情况为例：

| 设备                     | 工作电压  | 日常功率  |
| ---------------------- | ----- | ----- |
| 运营商的光猫                 | 12V   | 5W    |
| TP-Link SG2016K 交换机    | 12V   | 5W    |
| TP-Link IPC443MP 摄像头   | 53.5V | 5-7W  |
| DELL Inspiron 5437 笔记本 | 19.5V | 5-10W |

从上表情况看，光猫和交换机比较好处理，都是 12V，摄像头和笔记本需要电压转换。

### 电压转换

#### 摄像头供电

供电用的是 TP-Link PoE170S 适配器，PoE 标准也是个历史悠久的产物，历史悠久就意味着电气规范各有不同，需要仔细分别，尤其是被动式和主动式 PoE，供电方式和电压有很大不同；按说明书的说法，TP-Link 这款是标准 PoE 供电，支持 802.3 af/at，随附电源适配器输出电压 53.5V，根据 IEEE 802.3 af/at 标准的提示，48V 也可以，这种电压的变压器就比较好找，下单 EVEPS 的 12V/24V 转 48V 的 DC-DC 电压转换模块，经测试可以稳定运行。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sqi1BeTyTKwrUuuYp_Wh6pZT5mpRbhf5UC6ieT65MPBk/https://cdnfile.sspai.com/2024/10/23/article/386b004c845bf1bbe05505da49c09b37.png?imageView2/2/format/webp)

#### 笔记本供电

问题最后来到这台 DELL 笔记本，随附电源适配器输出电压 19.4V，一个在笔记本领域较为常见的电压，一些显示器也使用该电压工作，比如 SONY 电视，套用前文解决摄像头供电的方法，淘宝上可以找到不少类似的从 12V/24 转 19.4V 的 DC-DC 电压转换模块，然而并不能用，原因有二：

如果因为电源问题烧掉一个摄像头，还能接受，但万一因电源质量问题把最重要的笔记本平台烧了那是完全不能接受的「这台笔记本相当于半个 NAS：docker 宿主机、数据库，7x24 小时运行，全年不关机」，对电源的可靠性和稳定性有一定的要求。

另一个问题在于：DELL 不会给用户机会使用简单的电源适配器，给 DELL 产品供电必须通过 DELL 私有协议和笔记本主板进行通信，也就是你会看到 DELL 大圆口电源插头里为什么有一根小针，这根小针就是负责和 DELL 主板进行通信的，如果没有这针或者芯片有问题，笔记本可以启动，但 CPU 会被锁定在一个低的工作频率，因为主板默认此时供电是有问题的。

所以电压转换器只能从 DELL 和兼容厂商的产品中找，幸运的是，通过关键字检索，在淘宝和闲鱼上寻到了可用的适配器产品：一款由 DELL 出品的车载电源适配器。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s7phSqnpgbihW9Y5cccGoGffvC6Ae8RG1u4iFkQBrxQQ/https://cdnfile.sspai.com/2024/10/23/article/aa4f80fbd8839118c08f33c5dbaca987.png?imageView2/2/format/webp)

MODEL: DA65NS3-00 DELL P/N: DK138

DELL 第二代移动电源，全名：DELL 薄型汽车/飞机/交流适配器，主要供用户在移动交通工具中使用，支持 DC 电压输入 11-15V，额定输出功率 65W，满足绝大部分 DELL 笔记本产品的电源需求，从海鲜市场淘了一个「现在官网在卖的是 [三代口红型电源 ](https://sspai.com/link?target=https%3A%2F%2Fwww.dell.com%2Fzh-cn%2Fshop%2F%25E6%2588%25B4%25E5%25B0%2594%25E7%25AC%2594%25E8%25AE%25B0%25E6%259C%25AC%25E7%2594%25B5%25E8%2584%2591%25E6%25B1%25BD%25E8%25BD%25A6%25E5%2592%258C%25E9%25A3%259E%25E6%259C%25BA-90w-%25E7%259B%25B4%25E6%25B5%2581%25E7%2594%25B5%25E6%25BA%2590%25E9%2580%2582%25E9%2585%258D%25E5%2599%25A8-74mm-45mm%2Fapd%2F492-bcnc%2F%25E7%2594%25B5%25E8%2584%2591%25E5%25A4%2596%25E8%25AE%25BE%25E4%25BA%25A7%25E5%2593%2581)，颜值高，但据网友反映不如二代耐用，容易烧；为保险起见，入手二代电源」。

---

以此类推，其它笔记本大厂也有推自己的电源适配器产品线，涵盖我们几乎可以接触到的所有产品，比如 HP 的车载电源就可以支持到最高 24V 电压输入。

这里有的朋友可能会疑惑为什么不直接使用笔记本电池作为后备电源，最主要的原因是手头的这台笔记本电脑属于十年前的设计，不支持保护性充电「充电至 60%停止」，锂电池长期处于满电状态说实话不是很令人放心，尤其是在炎热的南方，虽然它确实可以实现我引入 UPS 的初衷。

给笔记本供电的部分经过两个适配器，每个适配器有其各自的转换效率，受到负载和输入电压因素的共同影响，转换效率并不是很好测量，笔记本日常功耗在 5W 左右，此时测得 DELL 电源适配器效率大概在 80%左右，只能算正常水平。

---

因为最后 DELL 笔记本 DC-DC 适配器输入电压落在 11-15V 之间，只能选明纬 12V 的 UPS 电源，同时考虑到开关机等瞬间高负载情况，60W 的版本 [PSC-60A ](https://sspai.com/link?target=https%3A%2F%2Fwww.meanwell.com.cn%2Fwebapp%2Fproduct%2Fsearch.aspx%3Fprod%3DPSC-60)比较合适「既有一定的功率余量，也避免出现大牛拉小车浪费电的情况」。

## 后备电池

前文提到，以明纬 PSC-60A 电源为核心，输出电压 12V，那么还需要一块同等电压的电池提供后备电力，PSC-60A 说明书中并未明确指定使用何种类型电池，根据充电电压和电池保护电压看，可以使用机房常见的免维护阀控式铅酸蓄电池2

此类电池有很多不同的称呼，但其实都指向同一类电池，主要关键词：免维护、密封、阀控；英文：VRLA、AGM、SLA、GFM、FM。

，特点是内部无游离态电解液，不需要定期补充电池液，工艺成熟，比较安全「过热或短路会发热冒烟」，价格也便宜，缺点是重量重，同体积下能量密度远不如锂电池。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sODiZvT_1tQXMA_NnFqhvYRf3oPMSxFS-FGAZbWh7cas/https://cdnfile.sspai.com/2024/10/23/article/763a900321d4641ddd5aa86c6ea9509e.png?imageView2/2/format/webp)

值得注意的是：PSC-60A 负责给电池充电的 CH2 电路并不是独立的， **而是与负载供电 CH1 共用，调节 CH1 电压，CH2 电压也会受到影响。**

![](https://proxy-prod.omnivore-image-cache.app/0x0,sCVOev6Kjt-94cg8kiiLglLrFqSHILmBzi0JSyzwY_ec/https://cdnfile.sspai.com/2024/10/23/article/7a3e4dc5024511946bb981bf1acdd6af.png?imageView2/2/format/webp)

铅酸蓄电池通常有两种充电模式可供选择，分为循环充电和浮充充电，循环充电起步 14.4V，浮充充电起步 13.6V，无特殊情况默认使用浮充电压给电池充电「不影响阀控式铅酸蓄电池寿命」，但是无论怎么选，此时负载电压最低也得 13.5V 起步，而不是标准的 12V 电压； **现实中也用电负载必须精准工作在 12V 电压的情况，但比较少，** [**这里还有一些其它规格** ](https://mp.weixin.qq.com/s/a%5FevnWi3WNzcC1buXHY3zA)的电源可供选择。

---

## 监测系统

有一部分市售 UPS 产品可以和动力环境监测系统进行对接，供管理员实时查看包括输入输出电压、功率、用电量、温湿度等情况，受此启发，不间断电源作为一个微环境也可以来一套传感器系统。

传感器系统分别由培正交流电能表「市电输入」、直流电能表「输出」、模拟量采集「电池电压」和温湿度采集器组成，四个器件在设计上偏向工业设备的范畴，能在宽电压、高低温条件下正常工作以应对可能出现的极端情况；数据交换使用工业上常见的 485 串口和 Modbus RTU 协议，主要收集并统计电力和温湿度情况。

在翻阅了 HA 和 iOS HomeKit 等相关材料后，要在 DIY 情况下顺利接入 iOS 家庭并稳定运行，似乎有些投入过大，Modbus 传感器接入平台的过程过于复杂，事情一旦复杂，正好因工作需要经常接触和机房相关的动环系统，有现成的思路可以复用，自己造一个监测系统。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sRyxi1hNfrCG8UngVwIEsp9Ve3Xp7cEV4KBHXK3wdtqE/https://cdnfile.sspai.com/2024/10/23/article/65c130c9e96d6f5f9831c44ab47b9d86.png?imageView2/2/format/webp)

整体架构

各组件所需的功能和具体需求：

* Modbus 采集与控制服务：  
   * 按预定周期轮询多个传感器获取数据  
   * 返回的传感器数据异步写入 InfluxDB 数据库  
   * 提供基于 HTTP 协议的实时数据接口  
   * 异常情况告警  
   * 控制 Modbus 继电器进行充放电测试  
   * 分析 InfluxDB 历史数据拟合电池充放电曲线
* uhttpd3  
OpenWrt 项目内置的 Web 服务器，特点：配置简单，资源占用极低。  
存储静态页面资源供移动端浏览器获取
* 前端 Web 页面调用采集程序的 API 接口进行实时展示
* InfluxDB 作为时序数据库存储历史数据
* Grafana 调用 InfluxDB 数据生成历史趋势图表

### Modbus 采集与控制服务

考虑到 DELL 笔记本上跑的是 Windows，为方便和稳定起见，试试看能不能使用 .Net 技术栈构建「第一次，之前都是在Linux平台」，构建程序本身没有花费很多时间，但将程序托管至 Windows 服务4的过程中花费了不少时间，网上现成案例不是很多，很多要依靠 ChatGPT 4o 及真机调试，体验没有 Systemd 好5

某些 Linux 发行版的进程管理器，托管后程序出现异常可以重新启动或执行其它操作。

，好在最后从测试下来稳定性和资源占用上的表现都还不错，就当是年轻多学点课外知识了。

### 实时查看当前状态

整体类似于 B/S 架构的单页应用6，好处在于服务端的负担小，对数据的整合和展示全部由客户端浏览器来处理；浏览器从 uhttpd 加载静态页面资源，JavaScript 配合 XHR 按预定周期从 Modbus 采集与控制程序提供的 API 接口取数，刷新对应区域的数值。

```x86asm
/var/snap/uhttpd/common/home
├── js
│   ├── generic.js
│   └── single.js
├── main.css
└── powerbox.html
```

界面整体设计灵感源自 [Apple System Status ](https://developer.apple.com/system-status/)，在此基础上重新进行排版，并增加了夜间模式。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sndQ3t5C6TAxxttybDSHZKwQ8Uyc92ZFNnqZsxsFDjic/https://cdnfile.sspai.com/2024/10/23/article/c9f1007b7885ab5de2b94eb8ccfed555.png?imageView2/2/format/webp)

### 数据存储

使用 **时序数据库** 存储所有传感器数据，而不是 MySQL ；除 InfluxDB 外，还有一些国产时序数据库可供选择，比如 [TDengine](https://sspai.com/link?target=https%3A%2F%2Fwww.taosdata.com%2F)。

#### 存储上的考虑

过去的笔记本因为有光驱位的关系，可以装两块 2.5 寸硬盘，出于成本和需求上的考量，装的是带缓存 SanDisk 固态硬盘和西数 PMR 机械盘，固态硬盘只存放系统文件，机械硬盘用来存储不重要但会经常刷新的数据，比如从大门摄像头采集的音视频和接下来要存放的 InfluxDB 时序数据库「存放传感器数据」，避免频繁读写消耗固态硬盘寿命。

**选择双平台的好处在于可以充分利用各自平台的优点，获得一个全局最优解。**

InfluxDB 没有提供原生 Windows 程序，那么就把它部署在 Linux 虚拟机上，另外单独在机械硬盘上创建一块 VM 虚拟磁盘挂载到 Linux 虚拟机，同时吸取 docker 意外断电容易挂的教训，通过 Ubuntu 软件包管理器进行安装而不使用 docker 进行部署，最后在配置文件指定数据库建在新挂上的磁盘。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s3h8n8-m3w8FoIvpMe7EX-_lTZllKpjwhoNXhpC1Imjc/https://cdnfile.sspai.com/2024/10/23/article/40da4581addc48a2c2f44d689a6d498d.png?imageView2/2/format/webp)

InfluxDB 查询器

### 历史数据回顾

Grafana 只是从 InfluxDB 引用传感器数据，直接在 docker 平台托管，查询历史记录的时候再单独启动。

![](https://proxy-prod.omnivore-image-cache.app/0x0,snyqrEOw3fF6GhW6o5GwXxFdnb43KuGTi63kdFw2uxdo/https://cdnfile.sspai.com/2024/10/23/article/a31c453f5bf858a01b05f5ee1fdf0487.png?imageView2/2/format/webp)

Grafana 仪表板

### 保护性关机

APC UPS 随附软件有一个不错的功能是在停电时，自动触发所在设备操作系统执行安全关机「多见于 NAS」，因关闭系统需要最高权限，思来想去，还是不由 Modbus 采集与控制程序去关机比较好，改为 Windows 自带的任务计划程序来执行。

Windows 任务计划程序除了可以定时执行各种任务之外，也支持侦听特定的事件并执行指定脚本，利用这一功能，让 Modbus 采集与控制服务在检测到蓄电池低于指定电压时，主动产生一个低电压告警事件，任务计划程序侦听到此事件后，执行预设脚本，完成安全关机。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sHZ0YjPPmZyDJJxUECOc3rhS1nCMdHEMyX4Wsb_eCdCs/https://cdnfile.sspai.com/2024/10/23/article/cc1ec403fd616a358e58baf32c8ef76d.png?imageView2/2/format/webp)

任务计划程序

预设系统关机脚本：

```mipsasm
; 关闭ModbusComm采集与控制服务
sc.exe stop ModbusComm
; 关闭VMware虚拟机
vmrun.exe stop D:\VM\Pro\Production.vmx soft
; 关闭操作系统「3秒后，仅关机，忽略更新」
shutdown -s -t 3
```

### 后备时间计算

一般来说，如果是较为简单的使用场景「比如设备不是连续地运行」，可以省去对后备时间的计算，在没有专用电池管理单元的情况下对电池电量进行估算是一件吃力不讨好的事，PSC-60A 开关电源在电池电压下降至 11.1V 附近时会停止对负载供电，属于尽力服务型设计，电量的多少不在其产品设计范围。

在没有电池管理单元「BMS」的情况下，可以采用闭路电压法「不断开负载」，参照电池容量与电压的关系粗略估算电池当前容量，此方法受负载的影响，精确度可能不如开路电压法，但已尽可能做了优化，仅供参考。

![](https://proxy-prod.omnivore-image-cache.app/0x0,s3IAPr1leA4SQ0-mzzDukEXS0QAN3lMZs2udiMvVwqoU/https://cdnfile.sspai.com/2024/10/23/article/f0f2cab704ad8211c72b6b817ce2e3a0.png?imageView2/2/format/webp)

InfluxDB 充/放电曲线

使用闭路电压法对电池电量进行估算的先决条件，是要有电池电压与电池容量间的映射关系作为参照，才能输入电压得电量；在电池厂家没有给出参考曲线的情况下，可以通过放电测试所产生的数据，生成这一映射关系；为确保最后得出的映射关系准确稳定，放电过程应尽可能控制放电深度、负载水平和环境温度：

* 通过直流电能表确保只放出电池容量的 50%「指定放电深度」
* 在负载功率较为稳定的时段进行测试「减少输出电流波动带来的影响」
* 如有条件每隔一段时间重新测试一次「温度影响化学电池放电能力」

为方便实际使用，上述过程由前述提到的 Modbus 采集与控制服务负责跟踪，达到预设的放电深度时控制 220V 继电器恢复市电供应，停止测试，并调取 InfluxDB 在放电、充电期间记录的电压数据，拟合充放电曲线，以多项式的形式保存下来，需要时直接调用，以电池电压为参数算出电池容量即可。

---

至此，全直流 UPS 不间断电源的硬件部分已基本确定下来，结构如下：

![](https://proxy-prod.omnivore-image-cache.app/0x0,suXqdybGhjLXbrTiH0ERTr5wrWPQpyui8_cCWeJG6eFA/https://cdnfile.sspai.com/2024/10/23/article/2337b780b071c9c8cb1073462d764455.png?imageView2/2/format/webp)

主要部件

| 明纬 PSC-60A-C 电源        | ￥112.5 | JD     |
| ---------------------- | ------ | ------ |
| Dell 65W 车载适配器         | ￥65    | 海鲜市场   |
| EVEPS 12V 转 48V 1A 适配器 | ￥38    | Taobao |
| 天能 TNE12-4.5 GEL 蓄电池   | ￥93    | JD     |
| 防火阻燃配电盒                | ￥33.46 | Taobao |
| 培正交流电能表 10A            | ￥38    | Taobao |
| 培正直流电能表 10A            | ￥35    | Taobao |
| 123 物联 Modbus 温湿度传感器   | ￥15.5  | Taobao |
| 微雪串口模块工业级 USB 转 485    | ￥26.94 | Taobao |
| 汇控 485 模拟量采集「电压」       | ￥12    | Taobao |
| 汇控 Modbus 继电器「单路」      | ￥11.40 | Taobao |

_电缆、插座、端子排、压线端子、电池插簧、导轨、自熄管等辅料不计。_

![](https://proxy-prod.omnivore-image-cache.app/0x0,sqZAz_RENoUNfoyyPxVjWtwscgd8J409FPJ2TNfL1Sno/https://cdnfile.sspai.com/2024/10/23/article/754abff15cb4af576b7b9c821a8b7c22.png?imageView2/2/format/webp)

总装「含集中供电」

## 回望与不足

十全十美的方案并不存在，没有最好，只有更好，优化方案的过程，也是一个不断取舍的过程。

### 保险管

根据官方披露的原理图及手上实物情况，接蓄电池负极的一路设计有一颗 5A、耐压 250V 的圆形快熔保险管。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sTXyjMtIIy9HOfjMZckWBJUsEfzac6mqs2zLjwWIgXe4/https://cdnfile.sspai.com/2024/10/23/article/e2f336be46fde7893be56dda2571b4c9.png?imageView2/2/format/webp)

更换前与更换后

在前期试验的过程中，出现因蓄电池引脚反接导致保险丝主动熔断，电池不能充放电的情况，为避免可能出现电池供电回路失效而不知的情况，额外补充两个措施：一是增加模拟量采集「电压」，实时监测给电池供电是否正常；二是保险管加焊专用插座，解决保险管不方便更换的问题。

### 电池

尽可能选购 UPS、机房、通信专用铅酸电池，针对上述场景设计生产的电池除了有特殊优化外，还附有较为详细的 [使用说明 ](https://sspai.com/link?target=http%3A%2F%2Fimg30.360buyimg.com%2Fsku%2Fjfs%2Ft1%2F200629%2F17%2F21282%2F168544%2F643a119aF514932c5%2Ffc088939fb0b4fc3.jpg)，有助于使用者更好地发挥电池性能。

#### 选购渠道

在 JD 上买的天能电池价格小贵，可靠的线上购买渠道似乎并不是很多，可能在线下反而有机会买到物美价廉的电池，如果能淘到 UPS 专用的长寿命型号，情况会更好。

#### 电池健康

虽然阀控铅酸电池是免维护的，但和其它电池一样，放电性能和容量会出现逐年下降的情况，尤其是电池内阻升高导致放电时间缩短的问题，在没有额外电池管理单元/电池巡检仪的情况下，只能靠定期放电测量可用时间，或是以年为单位更换新电池，确保不会因电池健康影响后备供电能力。

另外，铅酸蓄电池普遍怕饿，过放电、长期亏电易引发电池失效「无法充电」。

### 恒温恒湿

最开始设计时并没有太多考虑散热的情况，更多偏向于低湿、无尘和防虫，等到总装完成调试运行的时候就发现：低湿、无尘和防虫的问题是解决了，但舱内温度稍高，日常 30W 负载，全密闭状态下温度在 45℃ 左右，温度高虽然不会影响工业电源和仪表的正常运行，但刚好落在 PSC-60A 的减额曲线上，不能满负荷出力「用不到」；后续也尝试引入制冷片进行冷却「铝制散热器+风扇」，但测试后效果并不如意，降温没多少，耗电量倒是上去了不少，最后改为半开密封盖，让其自然散热，现在日常温湿度保持在 37℃ / 50% 附近。

### 消防安全

常见的插排收纳盒并不具备防火阻燃功能，有一定的火灾安全隐患，另外采购阻燃型的电气接线盒用于存放电源和传感器设备「蓄电池除外」，此类盒子有一定密封性，需要手动开口才能走线缆，因此，如果在电缆出入口加装防水套形成气密舱，内部充入惰性气体，有希望从根源上杜绝内部起火的可能性。

### 5V 不间断电源

令人遗憾的是，明纬并未推出针对 5V 的 UPS 电源产品，但仍有机会通过二次 DC 降压的方式来实现，以下列举几个可选项：

---

如果屏幕前的你也在给自己的本地设备找一套安全的低功率 UPS 不间断电源，不妨试试全直流的思路，或许会有更好的效果。

## 参考链接

* [明纬安防监控电源选型表](https://mp.weixin.qq.com/s/a%5FevnWi3WNzcC1buXHY3zA)
* [Intel ATX 电源切换时间 17ms](https://sspai.com/link?target=https%3A%2F%2Fedc.intel.com%2Fcontent%2Fwww%2Fus%2Fen%2Fdesign%2Fipla%2Fsoftware-development-platforms%2Fclient%2Fplatforms%2Falder-lake-desktop%2Fatx-version-3-0-multi-rail-desktop-platform-power-supply-design-guide%2F2.0%2F2.01%2Fvoltage-hold-up-time-required%2F)
* [在线互动式 UPS、在线式 UPS 、离线式 UPS 三种 UPS 原理与对比](https://sspai.com/link?target=https%3A%2F%2Fcloud.tencent.com%2Fdeveloper%2Farticle%2F2239093)

\> 关注 [少数派小红书](https://www.xiaohongshu.com/user/profile/63f5d65d000000001001d8d4)，感受精彩数字生活 🍃

\> 实用、好用的 [正版软件](https://sspai.com/mall)，少数派为你呈现 🚀

* 1总功率小于 500W。
* 2此类电池有很多不同的称呼，但其实都指向同一类电池，主要关键词：免维护、密封、阀控；英文：VRLA、AGM、SLA、GFM、FM。
* 3OpenWrt 项目内置的 Web 服务器，特点：配置简单，资源占用极低。
* 4如果只是在前台运行，经常会被操作系统挂起。
* 5某些 Linux 发行版的进程管理器，托管后程序出现异常可以重新启动或执行其它操作。
* 6SPA

© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。

