---
id: b7a6ee15-b2fc-4470-a54e-b87245f4d86f
title: |
  iOS 如何按地区限制功能：浅析 MobileGestalt 与 Eligibility ｜ 少数派会员 π+Prime
author: |
  PlatyHsu
tags:
  - RSS
date_saved: 2024-09-26 18:03:14
date_published: 2024-09-26 18:03:14
---

# iOS 如何按地区限制功能：浅析 MobileGestalt 与 Eligibility ｜ 少数派会员 π+Prime
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/i-os-mobile-gestalt-eligibility-p-prime-1922f133165)
[Read Original](https://sspai.com/prime/story/ios-feature-region-lock)

 各地版本 iPhone 的功能集差异已经越发明显到快要不像是同一台手机，苹果是如何部署这些越发复杂的地区功能差异的？

---

如一些评论指出，今年的 iPhone 16 系列在上市时是一种奇怪的「空壳」状态：大力鼓吹的 Apple Intelligence 至少要等到十月的 iOS 18.1 中才能启用；与国内用户在短期内无缘，长远看也必然最多是「特供版」。不过，这只是 iPhone 功能按地区割裂的一个新增案例。一段时间以来，随着世界各地监管环境的复杂化，各地版本 iPhone 的功能集差异已经越发明显到快要不像是同一台手机。

本文无意对此作出评论。苹果是一家商业公司，它可以自行评估风险和收益，选择是否以及如何合规；另一方面，用户也可以用脚投票。相比之下，更令人感兴趣的问题是：苹果是如何部署这些越发复杂的地区功能差异的？以下就是我检索现有资料后所做浅显汇总，供同样关注这个问题的朋友参考。水平所限，难免错漏，欢迎指正。

概括而言，目前版本的 iOS 与地区功能限制相关的组件主要有两个：MobileGestalt 与 Eligibility，其中——

* MobileGestalt（`/usr/lib/libMobileGestalt.dylib`）扮演一个数据库的角色，记录一系列设备型号、硬件机能信息，以及某些功能的开关状态，供其他组件查询；
* Eligibility（`/usr/lib/system/libsystem_eligibility.dylib` 和 `/usr/libexec/eligibilityd`）结合设备型号、物理位置、区域设置和帐号区域等因素，基于规则文件判定设备是否有「资格」使用一系列功能。

以下分别简要介绍。

（注：其实还有一个系统库 Feature Flags，位于 `/usr/lib/system/libsystem_featureflags.dylib`。它通过读取 `/var/preferences/FeatureFlags` 下的 plist 文件来控制测试功能的开关。例如，一个开关可以将今年 iOS 18 中令人困惑的新相册布局恢复到旧版样式。但 Feature Flags 与本文关注的地区限制关系不大，暂不讨论。）

MobileGestalt 是在 iOS 7 启用的系统库，位于 `/usr/lib/libMobileGestalt.dylib`，接替了更早版本通过 GSCapability 承担的功能。_gestalt_ 是一个德语词，字面意思是「形式」，指一个因为有组织而超越了部分之和的整体。目前，对 MobileGestalt 最完整（但稍微过时）的研究是 Jonathan Levin 的文章《[Guess-Talt](https://sspai.com/link?target=https%3A%2F%2Fnewosxbook.com%2Farticles%2Fguesstalt.html)》以及其书 _\*OS Internals, Volume I: User Mode_ (pp. 111—114)。

简单来说，你可以将 MobileGestalt 看作一个数据库。如果其他系统组件想了解设备的型号、功能、状态等一系列信息，就可以通过 API 向 MobileGestalt 提问。例如，iTunes 和各类「助手」就是通过 MobileGestalt 显示所连接 iPhone 的颜色的。

MobileGestalt 记录的信息中，有的是在运行时动态获取的，有的则是静态的，缓存在以下文件中：

```awk
/private/var/containers/Shared/SystemGroup/systemgroup.com.apple.mobilegestaltcache/Library/Caches/com.apple.MobileGestalt.plist
```

注意到这个路径属于系统应用的共享沙箱，同属系统应用的快捷指令 app 是有权访问的。因此，只要制作一个包含 Get Contents of URL 步骤的快捷指令，将 URL 填写为：

```awk
file://private/var/containers/Shared/SystemGroup/systemgroup.com.apple.mobilegestaltcache/Library/Caches/com.apple.MobileGestalt.plist
```

即可获取当前系统的静态 MobileGestalt 属性。

在一台国行 iPhone 16 Pro 上，这个文件的结构和内容类似于（有节选）：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CacheData</key>
    <data>
    ...
    </data>
    <key>CacheExtra</key>
    <dict>
        <key>+3Uf0Pm5F8Xy7Onyvko0vA</key>
        <string>iPhone</string>
        <key>/YYygAofPDbhrwToVsXdeA</key>
        <string>D93AP</string>
        <key>0+nc/Udy4WNG8S+Q7a/s1A</key>
        <string>iPhone17,1</string>
        ...
        <key>zHeENZu+wbg7PUprwNwBWg</key>
        <string>CH/A</string>
    </dict>
    ...
</dict>
</plist>
```

可以看到，主要信息记录在字典 `CacheExtra` 中，属性名称（按苹果习性来说并不意外地）都做了混淆。根据暴力破解，这是在实际属性名称前串接字符串 `MGCopyAnswer`，然后依次计算 MD5、编码为 Base64，最后去掉结尾填空的 `==`（因为 MD5 转为 Base64 必然多出两个字节）所得。这个过程用伪代码可表示为：

```reasonml
obfs_key = base64Encode(md5Hash("MGCopyAnswer" + orig_key))[:-2]
```

MobileGestalt 的属性已有[上千种](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2FPoomSmart%2FMGKeys%2Fblob%2Fmaster%2Fdeobfuscated.py)，随着软件更新、硬件升级，还在不断增加，这其中与功能开关密切相关的包括：

| 属性名称（明文）                                        | 属性名称（混淆）               | 含义                            |
| ----------------------------------------------- | ---------------------- | ----------------------------- |
| ArtworkTraits                                   | oPeik/9e8lQWMszEjbPzng | 屏幕参数（与灵动岛、广色域等相关）             |
| device-name                                     | JUWcn+5Ss0nvr5w/jk4WEg | 设备类别（例如 iPhone）               |
| DeviceSupportsAlwaysOnTime                      | j8/Omm6s1lsmTDFsXjsBfA | 常亮显示                          |
| DeviceSupportsBreathingDisturbancesMeasurements | e0HV2blYUDBk/MsMEQACNA | 睡眠暂停检测                        |
| DeviceSupportsCollisionSOS                      | HCzWusHQwZDea6nNhaKndw | 撞击检测                          |
| DeviceSupportsEnhancedMultitasking              | qeaj75wk3HF4DwQ8qbIi7g | 台前调度                          |
| DeviceSupportsGenerativeModelSystems            | A62OafQ85EJAiiqKn4agtg | 端测生成模型                        |
| DeviceSupportsTapToWake                         | yZf3GTRMGTuwSV/lD7Cagw | 抬起亮屏                          |
| green-tea                                       | iyfxmLogGVIaH7aEgqwcIA | 是否为中国销售的设备                    |
| RegionCode                                      | h63QSdBCiT/z0WU6rdQv6Q | 地区代码（例如 US、CH）                |
| RegionInfo                                      | zHeENZu+wbg7PUprwNwBWg | 型号中的地区尾缀（例如 LL/A、CH/A）        |
| SupportedDeviceFamilies                         | 9MZ5AdH43csAUajl/dU+IQ | 支持应用类型，1、2 分别为 iPhone、iPad 应用 |
| ProductType                                     | h9jDsbgj7xIVeIQ8S3/X3Q | 设备识别符（例如 iPhone17,1）          |

实际上，现有的为国行（或欧洲）设备强制启用 Apple Intelligence 方法中，一般都会修改 `RegionCode`、`RegionInfo` 等属性修改为美版设备的相应值，从而绕过系统对 AI 功能区域限制（但只是所需步骤之一）。

还有的[方法](https://sspai.com/link?target=https%3A%2F%2Fgist.github.com%2Ff1shy-dev%2F23b4a78dc283edd30ae2b2e6429129b5)通过修改老设备上的 `DeviceSupportsGenerativeModelSystems`、`ProductType` 等属性，使苹果服务器以为设备硬件支持 Apple Intelligence，从而能够启用 AI 加持的新版 Siri（但无法启用其他 AI 功能）。

### 插曲：修改工具如何不越狱修改系统文件

iOS 18 测试版推出以来，网上出现了以 [MisakaX](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2Fstraight-tamago%2FmisakaX)、[Nugget](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2Fleminlimez%2FNugget%2F) 为代表的修改工具，能够帮助用户修改本文中提到的各处系统文件，从而强制启用非美区的 Apple Intelligence、欧盟区的 iPhone 镜像等功能。在没有越狱的情况下，这是怎么做到的呢？

实际上，这些工具都使用了一个长期存在于 iOS 中（最初发现于 iOS 15.2）的漏洞，社区中一般称为 sparserestore，最初提出是为了安装 TrollStore——一个允许安装任意未签名应用的知名工具。虽然 TrollStore 本身利用的漏洞已经被堵上了，但 sparserestore 作为一种通用方法继续流传下来。

sparserestore 是一个针对 iOS 备份恢复功能的目录遍历（directory traversal）漏洞，其工作原理是构造具有特殊路径和属性的备份文件，诱使系统在恢复备份时，将指定的内容写入本不属于备份范围的受保护位置。

（目录遍历漏洞是 iOS 玩家的老朋友了。iOS 3 时代的 Spirit、iOS 8 时代的 TaiG 等越狱工具都使用了类似原理的漏洞。）

具体而言，正常情况下，iOS 备份机制允许恢复的文件范围是有限的，按照类型和功能分为一系列「域」（domain）。每个备份域可以看作一个路径别名加上一个白名单规则。在恢复备份时，系统将备份域（存储在备份的自述文件中）解析为实际路径，并且只有路径符合该域的白名单时，才能继续恢复。

由于苹果的疏忽，对于备份域 `SysContainerDomain`，系统在恢复时并不会检查其下文件路径的安全性，包括典型的不安全路径 `../`（当前目录的上一级目录）。又因为 `SysContainerDomain` 在恢复过程中会被解析为

```routeros
/var/.backup.i/var/mobile/Library/Backup/System Containers/Data/
```

因此，如果备份文件要求恢复到的路径包含

```routeros
SysContainerDomain-../../../../../../../..
```

就会被解析到 `/`，也就是文件系统根目录。在这个「拧巴」的路径之后串接要修改文件的实际路径，就可以修改各种受保护的系统文件了。

除了目录遍历之外，sparserestore 还使用了一些其他技巧来绕过 iOS 对系统文件的保护。例如，它没有直接覆盖写入系统文件（可能因为这会被检测和阻止），而是先将待替换的内容临时恢复到一个看似「正常」的备份路径下。然后，将要修改的系统文件[硬链接](https://sspai.com/link?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHard%5Flink)到这个临时文件——不知为何系统允许这么做，应该也是漏洞的一部分。

最后，再次用空白文件覆盖上述临时文件。由于硬链接的原理，系统文件现在将指向临时文件原来所占据的磁盘数据；「偷梁换柱」就完成了。

遗憾的是，随着 iOS 18.1 beta 5 的推出，这个在野外存在了几年的漏洞再次被堵住了。

## Eligibility

如果说 MobileGestalt 代表了 iOS 锁区的「传统」方法，那么近年新增的 Eligibility 组件就标志着锁区方式的「全新升级」。这套机制最初是为了响应韩国 2021 年《电信商业法》，其中要求 App Store 必须允许第三方支付；没过多久，欧盟的《数字市场法》在一个更大规模的市场推行了类似规定，完整版的 Eligibility 也就应运而生了。

Eligibility 的核心是守护进程 `/usr/libexec/eligibilityd`。对其运行机制，苹果自然是守口如瓶的。但得益于国内网友 Kyle Ye 的有效研究，我们得以看到 Eligibility 组件的[开源实现](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2FKyle-Ye%2Feligibility%2F)，以下的分析也是基于他贡献的代码。

### 判定方式

Eligibility 的「特别之处」在于它的考虑之「周到」。从代码可以知道，对于受它管理的每一个功能（称为一个「域」\[domain\]），`eligibilityd` 都会考虑与之关联的一系列「[信息来源](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2FKyle-Ye%2Feligibility%2Ftree%2Fmain%2Feligibilityd%2FInput%2FInputs)」\[input\]，也就是判定因素，目前已知的包括：

* 是否中国设备（`ChinaCellular`）
* 账单地区（`CountryBilling`）
* 设备类型（`DeviceClass`）
* 设备显示语言（`DeviceLanguage`）
* 设备地区设置（`DeviceLocale`）
* 设备地区代码（`DeviceRegionCode`）
* 设备定位（`LocatedCountry`）
* Siri 语言（`SiriLanguage`）
* 是否支持生成式模型（`GenerativeModelSystem`）
* Apple Intelligence 排队状态（`GreyMatterOnQueue`）

等等。

在这些因素中，有的是通过向上面介绍的 MobileGestalt 提问来确定的，例如 `ChinaCellular` 和 `GenerativeModelSystem`，有的则是通过读取系统设置来确定的，例如 `DeviceLanguage` 和 `SiriLanguage`。

但最值得一提的是莫过于 `LocatedCountry`。尽管代码中没有直接提到，但现有研究发现这并不只是简单的 GPS 定位，而是通过另一个专门守护进程 `/usr/libexec/countryd` 开展的复杂判定。

你可以在终端运行 `man countryd` 看到苹果对 `countryd` 语焉不详（但足以令你惊讶）的描述：

> Receives country code updates from user location, mobile country code (when available) and nearby 802.11d wifi access points. This information is then stored in a cache and used to compute a country code estimate which combines both the on-device code computed from local sensors, and answers about which country nearby devices believe they are in.

也就是说，它不仅会根据你的定位、手机号所属国家代码、附近 Wi-Fi 热点广播的地区信息来综合判断你最可能在哪，甚至还会试图参考附近设备的判断结果。

听我说，_c’est moi._

### 受控功能范围

那么，目前都有哪些功能受到 `eligibilityd` 的管辖呢？苹果自然也不想让你知道。事实上，它颇有诗意地采用元素周期表来作为（大多数）受限功能的「花名」，目前已经从氢（`Hydrogen`）一路用到了钴（`Cobalt`），之后显然还会再增加。例如：

* `Hydrogen`：可安装非 App Store 渠道应用，适用于欧盟；
* `Lithium`：可安装第三方引擎浏览器，适用于欧盟；
* `Sodium`：NFC 可用于第三方支付，适用于欧洲经济区；
* `Phosphorus`：允许应用跳转到外部支付页，不同程度适用于欧盟、俄罗斯、美国；
* `Sulfur`：允许应用内购使用第三方支付，不同程度适用于韩国、美国；
* `Calcium`：为中国销售设备调整地区菜单中的部分名称，适用于中国；
* `Iron`：允许使用 iPhone 镜像，适用于欧盟以外。

少数例外包括：

* 播客字幕（`PodcastsTranscripts`），适用于白俄罗斯、俄罗斯、中国以外；
* Xcode LLM（`XcodeLLM`），主要适用于美国设备；
* Apple Intelligence（`Greymatter`，即该功能的内部开发代号），主要适用于美国设备；

[等等](https://sspai.com/link?target=https%3A%2F%2Ftheapplewiki.com%2Fwiki%2FEligibility%23Domains)。

### 受控功能的判定规则

至于每个受控功能具体如何判定是否可用，目前有两种方式：有的规则是通过代码反映的，有的则是通过外部配置文件读取的（可能是为了方便热更新）。

Apple Intelligence 功能的规则目前主要通过代码直接控制。通过在 [os\_eligibility.c](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2FKyle-Ye%2Feligibility%2Fblob%2Fmain%2Fsystem%5Feligibility%2Fos%5Feligibility.c) 和 [GreymatterDomain.m](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2FKyle-Ye%2Feligibility%2Fblob%2Fmain%2Feligibilityd%2FDomain%2FDomains%2FGreymatterDomain.m) 中检索关键词 `greymatter` 可以看出如下条件：

1. 设备不是中国销售型号，即从 MobileGestalt 查询到的区域代码不能是 `CH`；
2. Siri 语言必须是美国英语（`en-US`）；
3. 界面语言必须是英语，并且不能是印度或新加坡（`en-IN` 和 `en-SG`）。

至于外置规则文件，目前位于下列路径：

```reasonml
/private/var/MobileAsset/AssetsV2/com_apple_MobileAsset_OSEligibility/purpose_auto/$HASH.asset/AssetData/Config.plist
```

其中 `HASH` 似乎是一些随机生成、用于混淆的 SHA-1 值，已知[可能有两个值](https://sspai.com/link?target=https%3A%2F%2Fold.reddit.com%2Fr%2Fjailbreak%2Fcomments%2F1fazxsy%2Fjailbroken%5Fipad%5Fusers%5F174%5Fand%5Fhigher%5Fwe%5Fneed%5Fyour%2F)。

截至本文写作时，Kyle Ye 的开源实现还没有完成读取这些配置文件的代码，但其含义可以从文件内容本身大致猜到。`Config.plist` 采用二进制 plist 格式，使用 `plutil -convert xml1` 转为明文后，内容形如（有节选）：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    ...
    <key>Sulfur</key>
    <dict>
        <key>Grace Period</key>
        <integer>2592000</integer>
        <key>Policies</key>
        <array>
            <dict>
                <key>OS_ELIGIBILITY_INPUT_COUNTRY_BILLING</key>
                <array>
                    <string>AT</string>
                    <string>AX</string>
                    ...
                </array>
                <key>OS_ELIGIBILITY_INPUT_COUNTRY_LOCATION</key>
                <array>
                    <string>AT</string>
                    <string>AX</string>
                    ...
                </array>
            </dict>
            <dict>
                <key>OS_ELIGIBILITY_INPUT_COUNTRY_BILLING</key>
                <array>
                    <string>KR</string>
                </array>
                <key>OS_ELIGIBILITY_INPUT_DEVICE_CLASS</key>
                <array>
                    <string>iPhone</string>
                    <string>iPad</string>
                </array>
            </dict>
        </array>
    </dict>
    ...
</dict>
</plist>
```

以上代码片段截取了一个名为硫（`Sulfur`）的功能配置，上面已经提到是指允许通过第三方支付购买内购。它的规则定义（`Policies`）允许——

1. 物理定位（`OS_ELIGIBILITY_INPUT_COUNTRY_BILLING`）和账单地址（`OS_ELIGIBILITY_INPUT_COUNTRY_BILLING`）都在所列举欧盟国家的 iPhone；或者
2. 物理定位在韩国的（账单地址不限）的 iPhone 或 iPad 使用第三方支付。

一旦上述条件不再满足，有 30 天（2592000 秒）的宽限期（`Grace Period`），超出之后，这个功能就会被禁用。

熟悉 App Store 政策变化的读者可以看出，这就是苹果 App Store 相关公告的代码翻译。

### 判定结果的缓存

最后，eligibilityd 设计了一个缓存机制：对于已经确定启用与否的功能，不会反复判断，而是将结果存放在如下文件中：

```actionscript
/private/var/db/os_eligibility/eligibility.plist
```

以便后续直接调用。

`eligibility.plist` 的格式类似于（有节选）：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    ...
    <key>OS_ELIGIBILITY_DOMAIN_GREYMATTER</key>
    <dict>
        <key>context</key>
        <dict>
            <key>OS_ELIGIBILITY_CONTEXT_ELIGIBLE_DEVICE_LANGUAGES</key>
            <array>
                <string>en</string>
            </array>
        </dict>
        <key>os_eligibility_answer_source_t</key>
        <integer>1</integer>
        <key>os_eligibility_answer_t</key>
        <integer>4</integer>
        <key>status</key>
        <dict>
            <key>OS_ELIGIBILITY_INPUT_DEVICE_LANGUAGE</key>
            <integer>3</integer>
            <key>OS_ELIGIBILITY_INPUT_DEVICE_REGION_CODE</key>
            <integer>3</integer>
            <key>OS_ELIGIBILITY_INPUT_EXTERNAL_BOOT_DRIVE</key>
            <integer>3</integer>
            <key>OS_ELIGIBILITY_INPUT_GENERATIVE_MODEL_SYSTEM</key>
            <integer>3</integer>
            <key>OS_ELIGIBILITY_INPUT_SHARED_IPAD</key>
            <integer>3</integer>
            <key>OS_ELIGIBILITY_INPUT_SIRI_LANGUAGE</key>
            <integer>3</integer>
        </dict>
    </dict>
    ...
</dict>
</plist>
```

以上截取的片段是在 Apple Intelligence 成功启用后的缓存记录，其中：

* `os_eligibility_answer_source_t` 记录了判定结果的来源，可能是 `0`、`1` 或 `2`，[分别指](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2FKyle-Ye%2Feligibility%2Fblob%2Fmain%2FEligibilityCore%2Finclude%2FEligibilityAnswerSource.h)结果是无效、正常流程所得，或通过调试功能强制做出的。
* `os_eligibility_answer_t` 记录了具体的判定结果，其值 `2` 和 `4` [分别指](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2FKyle-Ye%2Feligibility%2Fblob%2Fmain%2FEligibilityCore%2Finclude%2FEligibilityAnswer.h)该功能被判定为无资格或有资格使用。
* `status` 记录了判断过程中所援引各的判定因素，对于每个因素，其值 `2` 或 `3` 分别指判定不通过或通过。

如果观察目前各类启用 Apple Intelligence、欧盟「特供」功能的脚本，它们正是通过向 `Config.plist` 中加入当前设备的区域代码，并向 `eligibility.plist` 文件中写入代表成功启用的记录，来欺骗 iOS 相信设备符合资格的。

 © 本文内容为少数派独家版权，仅限少数派会员在本平台阅读体验，不得转载或复制，否则即为侵权。

---

 阅读信息

全文字数 5061字

阅读本文共需 8分钟

字号选择 

小

中

大

 作者

[PlatyHsu](https://sspai.com/u/platyhsu) (putative) librarian, archivist, & typist

* MobileGestalt  
   * 插曲：修改工具如何不越狱修改系统文件
* Eligibility  
   * 判定方式  
   * 受控功能范围  
   * 受控功能的判定规则  
   * 判定结果的缓存

