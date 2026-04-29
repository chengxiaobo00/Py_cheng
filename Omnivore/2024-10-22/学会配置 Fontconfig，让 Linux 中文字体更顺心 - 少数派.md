---
id: c9ebaaa3-accd-4445-a774-9473c78251c4
title: |
  学会配置 Fontconfig，让 Linux 中文字体更顺心 - 少数派
author: |
  爱拼安小匠
tags:
  - RSS
date_saved: 2024-10-22 11:30:00
date_published: 2024-10-22 11:30:00
---

# 学会配置 Fontconfig，让 Linux 中文字体更顺心 - 少数派
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/fontconfig-linux-192c609de36)
[Read Original](https://sspai.com/post/92955)

学会配置 Fontconfig，让 Linux 中文字体更顺心

相较于我们熟悉的 Windows，用户在使用 Linux 发行版的过程中，或多或少会面对各种各样的字体显示问题，非常影响使用体验，相信也让包括我在内的不少用户苦不堪言。

下面的情况，或许你遇到过：

* 缺少熟悉的宋体、楷体、仿宋等字体，无法顺畅地在 Linux 下办公
* 当系统语言并非简体中文时，简体中文字形变成日文、韩文的风格，很影响观感
* Windows 下的「点阵字体」（字体的 hinting 优化）也出现在了 Linux 里
* 安装第三方字体后，系统显示的中文字体会变成刚刚安装的字体
* 还有其他潜伏着的问题……

**但是，不要被这些问题给吓住。**了解了 Linux 的字体配置机制，探究问题的本质，这些问题其实都是小意思，都可以用针对性的方案逐个击破。从此，Linux 也有了不输给 Windows 的使用体验，对于现在政企电脑国产化1

政企国产化广泛使用统信 UOS、麒麟 Linux 等国产 Linux 发行版，基于 Debian。

，以及一般用户日常使用 Linux 的场景，都有极大益处。

**在 Linux 当中，字体是由 fontconfig 来统一管理的**，它是由 Free Desktop 推出的字体管理工具，通用于各大发行版，甚至在 Windows 下也能使用。

Fontconfig 拥有开箱即用的便捷性，可以自动扫描特定目录下的所有字体。使用 Windows 的用户或许有这样的体验：直接把字体文件放进 `C:\Windows\Fonts `目录下，就能安装了。在Linux中，这同样可以做到——你只需把字体放在指定目录下即可，通常是系统字体目录（`/usr/share/fonts/`），或用户字体目录（如`~/.fonts/`）。2

注意不同发行版的字体目录有所不同，请参考对应发行版的文档。

然而另一方面，fontconfig 是由配置文件驱动的。配置文件的合理与否，直接关系到 Linux 字体显示的表现。Fontconfig 的配置文件采用 XML 格式，支持的功能特性极其强大；相应地，它的参数种类繁多，拥有一定的门槛。想要合理配置字体，还要一番功夫。

幸运的是，本教程只需使用 fontconfig 配置文件的极小一部分功能，包括后备字体的配置、禁用 hinting 功能。需要编写的 XML 代码量自然也少很多。

那么，接下来，笔者就将根据几个常见的问题场景，为大家提供各个击破的解决方案。且看下文分解。

> 注意：阅读本文，需要你了解 [XML 文件的基础知识](https://sspai.com/link?target=https%3A%2F%2Fwww.runoob.com%2Fxml%2Fxml-tutorial.html)。

## 安装基本字体，解决中文字体无法显示的问题

现在的 Linux 发行版，其默认字体以 Noto 系列为大宗，中文字体为对应的 Noto CJK 系列，3

早期的发行版（如2015年之前的Ubuntu）有可能使用其他字体，例如Droid Sans Fallback。

通常各大发行版都有自带。

但如果你用的是 Arch Linux、Alpine 这些需要「纯手工」配置的操作系统，这些字体包是不会默认安装的，需要你手动安装。一旦漏掉中文字体，那么在显示中文的地方，你就只能看到一片空白，或者是「豆腐块（囗）」。更麻烦的是，如果漏掉英文字体，且系统默认语言为英文，那么你就只能面对茫茫一片空白，只能对着界面「干瞪眼」。

要解决这个问题，只需安装对应发行版的 Noto 字体包，即可解决最基本的文字显示问题。以下列举部分发行版的安装命令：

```gauss
# Arch Linux。其中noto-fonts为西文字体，noto-fonts-cjk为中日韩文字体
sudo pacman -S noto-fonts noto-fonts-cjk

# Ubuntu
sudo apt install fonts-noto-core fonts-noto-cjk

# Alpine
sudo apk update
sudo apk add --upgrade font-noto font-noto-cjk

# Void Linux
sudo xbps-install -Su noto-fonts-ttf noto-fonts-cjk
```

另外，如果你希望使用第三方字体来作为界面显示字体，则 Noto 字体包就不是刚需。你只需把你喜欢的字体复制到发行版的字体目录下即可，例如 Arch Linux 的字体目录为`/usr/share/fonts/`。

> **注意：**为便于管理，请将字体文件放到字体文件夹的二级目录里，例如`/usr/share/fonts/TTF`（或`/usr/share/fonts/`下的其他子目录）。

## 正确设置区域，解决字体显示混乱的问题

Linux 系统的区域（locale）设置，直接决定了系统显示的语言、时间格式、数字格式等体验。如果区域设置不符合规范，那么系统会使用内置的默认区域「`C`」，它会导致字体显示异常，例如：

* 在终端应用（如 Konsole）里输入中文并按退格键时，文字还在，但只显示一半
* [Oh My Zsh](https://sspai.com/link?target=https%3A%2F%2Fohmyz.sh%2F) 等使用特殊字符的终端扩展，在使用时会出现乱码
* 部分软件在显示中文时可能出现乱码

要解决字体显示问题，你需要进入桌面环境的「区域设置」，将区域设置为正确的值。

### 0）确保已经激活了目标区域

Linux 发行版提供了世界各地各种语言的区域支持。一般像 Ubuntu、Deepin、Zorin OS、银河麒麟这些新手向发行版，默认已经帮你配置好。4

严格来说，是使用Calamares、YaST等安装程序框架所安装的发行版，都会在安装过程中为你自动配置，包括区域、时区等参数。

但对于 Arch Linux 这些需要「纯手工」安装的发行版，往往需要我们自行检查并激活区域支持。

通常，我们至少需要保证英语、简体中文的区域支持打开。

* **第一步：**用 root 权限的文本编辑器打开`/etc/locale.gen`，找到以下几行，将它们前面的井号（「`#`」）删掉，然后保存：

```angelscript
[[en_US]].UTF-8 UTF-8
...
[[zh_CN]].UTF-8 UTF-8
```

* **第二步：**在终端中运行以下命令，让系统重新激活区域支持：

```ebnf
sudo locale-gen
```

命令执行结果如下所示：

```jboss-cli
sudo locale-gen
Generating locales...
  en_US.UTF-8... done
  zh_CN.UTF-8... done
Generation complete.
```

* **提示：**如果你还需要其他区域的支持，就取消相应行前的注释。例如，想启用日文支持，就取消注释`ja_JP.UTF-8 UTF-8`这一行。

### 1）在桌面环境的设置里设置区域

常用的桌面环境，通常在各自的「系统设置」程序中提供语言设置的入口，不同桌面环境的入口也有所不同。具体可参考各个发行版和桌面环境的文档。

* **Gnome：**在「活动面板（Activities）」中，键入「Region & Language」
* **KDE：**打开「系统设置（System Settings）」→「区域和语言（Region & Language）」→「语言（Language）」
* **Cinnamon：**打开「系统设置（System Settings）」→「语言（Languages）」
* **Deepin、UOS：**打开「控制中心」→「键盘和语言」5

### 2）对于轻量级桌面环境

有些轻量级桌面环境没有配备区域设置，例如 MATE Desktop。这时，你可以借助第三方软件 [**mintlocale**](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2Flinuxmint%2Fmintlocale) 完成设置，它是 Linux Mint 的语言设置工具，通用于其他发行版。

Arch Linux 用户可以直接从 AUR 安装（假设你已经安装了 [Yay](https://sspai.com/link?target=https%3A%2F%2Faur.archlinux.org%2Fpackages%2Fyay) 这款 AUR 助手）：

```ebnf
yay -S mintlocale
```

在终端中运行 mintlocale，然后按你的需要，依次设置以下参数：

| 参数            | 作用                                     |
| ------------- | -------------------------------------- |
| Language      | **决定系统语言。这是非常重要的参数**                   |
| Region        | 决定系统所在的地区。区域设置决定了数字、货币、度量衡等格式，为应用程序所采用 |
| Time format   | 决定时间／日期的格式，不同区域有不同的时间日期表示方式            |
| System locale | 显示当前已设置的区域设置                           |

你需要将这些参数设置为正确的国家／地区、语言，例如中国大陆的简体中文对应「Chinese, China」。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sdTcn5IdR9XlC5qDXM3mLR33piCvtb0ENzKsYHv2TUxQ/https://cdnfile.sspai.com/2024/10/16/e293f4fa12ccc150eb9d5c976ad0c44a.png?imageView2/2/format/webp)

mintlocale的界面。

设置完成后，点击「Apply System-Wide」，全局应用区域设置。期间会要求你输入密码（该设置需要 root 权限）。

最后，重启电脑，即可生效。因区域设置导致的字体问题就得到解决。

## 安装 Windows 字体，解决办公缺少字体的问题

> 声明：
> 
> 由于潜在的授权许可条款，使用 Windows 内置字体可能存在一定的法律风险。
> 
> 这些字体应当用于个人及非商用场合；商用场合应当获得字体版权方的授权。

长期以来，在政府、企业办公领域主流的操作系统都是 Windows。在这一背景下，Windows 自带的中易宋体（SimSun）、仿宋（SimFang）、楷体（SimKai）、Times New Roman 等字体都成为了规范字体；微软雅黑等用于界面显示的字体也深入人心，是PPT制作的常备字体。

不过，上面这些字体由于涉及到授权许可问题，是不会随 Linux 发行版提供的。有些开发者也设计了这些字体的开源「平替」，例如 UKai、UMing，但它们的显示效果还是和 Windows 自带的字体有明显区别，不能完全替代。

因此，如果你需要使用 Linux 办公，尤其是在政企中使用，那么就有必要将 Windows 的这些字体安装到系统中。

### 1）通用的方式：直接从 Windows 中复制

最直接、最简单的方法，就是从一台 Windows 电脑中提取字体。

* **第一步，**你可以直接进入 Windows 的字体目录（如`C:\Windows\Fonts\`），选中你需要的字体，然后按 Ctrl+C 复制，粘贴到可移动磁盘中，或者是刻录成光盘，等。6  
很多政府机关不允许连接U盘，只能使用光盘。那么就用刻录机和刻录盘来传输文件吧。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sbNTEUAI9_IDvqqgtG4p7ApIa4_OfspE562PfXXOQsOU/https://cdnfile.sspai.com/2024/10/17/314157b540998c874934cdd0bbf27ce7.png?imageView2/2/format/webp)

在 Windows 的字体目录中，选择你要导出的字体。

* **第二步，**在你的 Linux 电脑上，插入你保存了字体的磁盘或光盘。打开文件管理器，浏览到磁盘或光盘的路径，右击空白处选择「打开终端」（或其他类似的选项）。
* **第三步，**在终端中运行以下命令，将字体复制到 Linux 发行版的字体目录中。**注意，你需要 root 权限。**

```jboss-cli
# 建立一个专门的子目录，存放来自Windows的字体
sudo mkdir /usr/share/fonts/Windows_TTF/

# 由于Linux下的文件区分大小写，因此我们要兼顾大小写，以便所有字体都能复制到目标位置
sudo cp *.TTF *.ttf *.OTF *.otf /usr/share/fonts/Windows_TTF/
```

* **第四步，**在终端中运行`fc-cache`，刷新字体缓存，使更改生效：

```bash
fc-cache -v
```

### 2）如果你是 Arch Linux 用户：可以安装 AUR 包

如果你是 Arch Linux 及其衍生版（如 Manjaro）的用户，AUR里提供了几组字体安装包，可以极其方便地为 Arch Linux 补充 Windows 必备字体。

**构建过程中，它们会实时从微软的官方镜像**7

包括 Windows 的安装 ISO、可选功能包。

**获取字体文件，因此安装过程需要全程保持网络畅通。**

这些包有以下几种类型：

| 包名                          | 说明                                                                                 |
| --------------------------- | ---------------------------------------------------------------------------------- |
| ttf-ms-win10-auto\-<区域>     | 从 Windows 10 安装镜像中获取指定区域的系统基础字体。<区域>为小写的区域代码，例如，中文对应的包名为ttf-ms-win10-auto\-zh\_cn。 |
| ttf-ms-win10-auto           | 从 Windows 10 安装镜像中获取系统基础字体，主要是英文字体（如 Segoe UI、Times New Roman）。                    |
| ttf-ms-win11-auto\-<区域>     | 类似于ttf-ms-win10-auto\-<区域>，区别在于它从 Windows 11 镜像中获取。                                |
| ttf-ms-win11-auto           | 类似于ttf-ms-win10-auto，区别在于它从 Windows 11 镜像中获取。                                      |
| ttf-ms-win11-fod-auto\-<语言> | 从 Windows 11 可选功能包中，获取指定语言的扩展字体。<语言>为目标语言的代码，例如简体中文对应hans，繁体中文对应hant，日语对应jpan。     |

**对于简体中文用户，笔者建议选择基于 Windows 11 的包，以保证字体的更新。你可以通过 Yay 来进行安装：**

```angelscript
yay -S --noconfirm ttf-ms-win11-auto ttf-ms-win11-auto-zh_cn ttf-ms-win11-fod-auto-hans
```

上述三个包，包含了以下字体：

| 包名                          | 包含的字体                                  |
| --------------------------- | -------------------------------------- |
| ttf-ms-win11-auto           | Segoe UI、Times New Roman、Courier New 等 |
| ttf-ms-win11-auto\-zh\_cn   | 中易宋体、微软雅黑                              |
| ttf-ms-win11-fod-auto\-hans | 中易楷体、中易仿宋、中易黑体、等线                      |

安装完成后，这些字体就可以使用了。8

安装过程中会自动运行fc-cache更新字体缓存。

> **注意：**
> 
> * 安装过程使用 [httpdirfs](https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2Ffangfufu%2Fhttpdirfs%2F) 来远程在线挂载微软官方 ISO 镜像，因此需要全程保持网络畅通。视网络环境不同，安装速度也有所不同，请保持耐心。
> * AUR还提供了不带`auto`字样的包（例如`ttf-ms-win11`），但是笔者不建议安装，因为它们需要你自己下载安装镜像，并自行提取镜像里的文件，很麻烦。

## 设置后备字体，解决字体显示「变色龙」的问题

在按照上一章的步骤安装 Windows 字体后，你或许会发现这样一种情况：**中文字体变了**。

原本统一使用 Noto Sans CJK 字体显示（与 Android 的默认字体一致），但现在竟然莫名其妙地变成了微软雅黑，甚至是仿宋和楷体。

而如果你的系统语言并不是简体中文，或者是软件的字体设置为英文字体（如，Hack Nerd Font），那么在显示简中汉字的时候也会出现问题：字形不是大陆规范字形，而是变成日文甚至韩文的汉字字形。

那么，这个问题又将如何解决？

![](https://proxy-prod.omnivore-image-cache.app/0x0,sbM_0xNV_x7aZ4CW9uV5gGKKd3n26kz8DHBzHhtiajNs/https://cdnfile.sspai.com/2024/10/18/55a858d0e2bc54fc6b181521f171c142.png?imageView2/2/format/webp)

日文系统环境下，Bing 的搜索结果，可见这里混杂了 MS Gothic 与微软雅黑这两种字体。

造成以上这两种情况的原因，就来自 fontconfig 的后备字体（fallback font）机制。它会在显示一个字形而当前字体没有该字形时，自动选择另一种字体来显示。

**如果后备字体没有配置好，fontconfig 就会按特定规则选择字体，例如你刚刚安装的字体，这样一来字体显示就会变得很「诡异」。**

接下来，不妨更进一步分析前文的两个问题。

* 看看第一个问题。现在的桌面环境，设置的默认字体都为英文字体，例如 Noto Sans。这些字体是不包含中文字符的，一旦显示中文字符，就会触发 fontconfig 的后备字体机制。在安装 Windows 字体前，电脑没有其他中文字体，因此自然会选中 Noto Sans CJK；然而，安装仿宋、楷体这样的中文字体后，fontconfig 有了「新选择」，原先的后备字体就被顶掉了。
* 再看看第二个问题。对于多语言的环境，fontconfig 会根据系统语言选择对应语言的字体，例如，日文环境下就选择 Noto Sans CJK JP、MS Gothic 等9  
MS Gothic是Windows自带的日文字体。你可以按前文的讲解，从Windows中获取，或者是安装ttf-ms-win11-fod-auto-jpan这个包。  
。但是，日文字体没有收录简体汉字，因此在显示简体汉字的场合，同样会触发 fontconfig 的后备字体机制，优先选择新安装的中文字体。于是，同样会导致字体显示效果变得诡异。

因此，只有正确配置 fontconfig 的后备字体，才能改善字体的显示表现。

### 2）如何配置后备字体？

接下来，我们就来编写一个 fontconfig 配置文件，为常见的字体配置一个后备字体序列。

* **第一步：**在用户主目录的`.config/fontconfig`子目录下，创建文件`fonts.conf`。如果没有该目录，就新建一个。
* **第二步：**打开`fonts.conf`，填入以下内容。务必结合你的实际情况，参考代码中的注释来修改。

> **注意：**如果`fonts.conf`已有内容，就把`<fontconfig>`节点里的所有 XML 节点都追加到现有的`<fontconfig>`节点里。

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "urn:fontconfig:fonts.dtd">

<fontconfig>
    <!--
        为你电脑上的字体配置后备字体序列。
        每个字体对应一个<alias> 小节。
    -->
    <alias>
        <!--
            <family> 字段，是你要设置后备字体的字体名称。
            【提示】字体名称可以是字体的中文名（在WPS等软件看到的名字），例如“宋体”
        -->
        <family>Cantarell</family> <!-- 这里的Cantarell是一个英文字体，我们需要为其配置后备中文字体。 -->
        <!--
            <prefer> 字段，是一个后备字体的列表，可以包含多个<family>字段。
            后备字体的显示顺序自上而下排列，优先显示排序靠前的字体，
            如果靠前的字体没有可以显示的字符，那么后面的字体就会顶上。
        -->
        <prefer>
            <family>DengXian</family>
            <family>Noto Sans CJK SC</family>            <!-- 建议使用 Noto Sans CJK SC 作为兜底 -->
        </prefer>
    </alias>

    <!--
        后面的设置项，格式都是一样的，这里不再赘述。
    -->
    <alias>
        <family>Hack Nerd Font</family>
        <prefer>
            <family>Noto Sans CJK SC</family>
        </prefer>
    </alias>

    <alias>
        <family>Noto Sans</family>
        <prefer>
            <family>Noto Sans CJK SC</family>
        </prefer>
    </alias>

    <alias>
        <family>Noto Sans Mono</family>
        <prefer>
            <family>Noto Sans Mono CJK SC</family>
            <family>Noto Sans CJK SC</family>
        </prefer>
    </alias>

    <alias>
        <family>Noto Serif</family>
        <prefer>
            <family>Noto Serif CJK SC</family>
        </prefer>
    </alias>

    <!--
        这里的MS Gothic是Windows自带的日文字体，相当于我们的黑体。
        该字体没有收录简体中文字符，所以我们要设置中易黑体（SimHei）作为后备。
    -->
    <alias>
        <family>MS Gothic</family>
        <prefer>
            <family>SimHei</family>
            <family>Noto Sans CJK SC</family>
        </prefer>
    </alias>

    <alias>
        <family>sans-serif</family>
        <prefer>
            <family>Noto Sans CJK SC</family>
        </prefer>
    </alias>

</fontconfig>

```

* **第三步：**写好`fonts.conf`之后，刷新字体缓存。注意这里的`fc-cache`需要带上`-f`参数，强制刷新，否则后备字体有可能不会生效。

```bash
fc-cache -f -v
```

完成字体缓存刷新后，重新打开应用程序，你就能看到更改生效。

![](https://proxy-prod.omnivore-image-cache.app/0x0,ssBvUwMAsfcpxbVURWIaXUNz0Wt8vu4bhGaLZKLPQpmU/https://cdnfile.sspai.com/2024/10/18/9d3b7b106bc2ffa0eb14ba4585da77a5.png?imageView2/2/format/webp)

设置了后备字体的效果。虽然是 Noto Sans CJK SC 与 JP 的混杂，但明显比设置前协调多了。

按照以上的方法设置后，你的电脑字体显示就会非常稳定，不会再出现字体显示不统一等问题。

> **注意：**后备字体设置只对`fonts.conf`当中的字体生效。如果你还使用其他字体，你需要为这些字体增加相应的配置。

## 禁用 Hinting，解决特定字体显示效果拉胯的问题

熟悉 Windows 的朋友都知道，在 Windows 当中，若屏幕分辨率和缩放比率较低，则一些字体显示出来的效果一言难尽，例如：

* 宋体、细明体（PMingLiU）、MS Gothic、MS Mincho 等东亚语言字体，统统显示为点阵
* 微软雅黑的显示效果与打印效果大相径庭

以上这些现象的产生，是因为这些字体自带了 hinting（字体微调）数据，会在特定的字号下，显示经过专门设计的位图字体。宋体的点阵就是这么来的。该技术的初衷是保证在低分辨率下，屏幕界面的文字依然能清晰显示，但随着高分屏的普及，这一技术如今反而拖了显示效果的后腿。

不幸的是，Linux 发行版的字体渲染也支持 hinting。因此，同样的 Windows 字体，如果安装到 Linux 中，你同样要面对让你一言难尽的显示效果，不知道该用什么语言来形容。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sMH8VJovP_GmLDQau8Mw7I0PUMkoCMjybjsenUfLlkg4/https://cdnfile.sspai.com/2024/10/20/b286b97d12491076f7e2afab56f9c92e.png?imageView2/2/format/webp)

以国考的报名系统为例。文本框中的提示文字为宋体，但因 hinting 而显示为我们熟悉的点阵。

幸运的是，同样通过配置 fontconfig，我们**可以轻松禁用这些字体的 hinting 功能。**

* **第一步：**打开用户主目录的`.config/fontconfig/fonts.conf`。如果没有，那就新建一个。
* **第二步：**在`<fontconfig>`节点中，补充与 hinting 设置相关的节点。同样是每个字体对应一个`<match>`节点。

```xml

  <!--
    禁用特定字体的Hinting功能。
    下面的代码就是让Fontconfig匹配特定的字体，然后修改参数以禁用它们的Hinting功能。
  -->
  <match target="font">
    <test name="family" compare="eq" ignore-blanks="true">
    <!-- <string>节点，在这里指定字体的名字。例如中易宋体就是SimSun -->
    <!-- 【提示】字体名称可以是字体的中文名（在WPS等软件看到的名字），例如“宋体” -->
      <string>宋体</string>  
    </test>
    <edit name="hinting" mode="assign">
      <bool>false</bool>
    </edit>
  </match>
```

* **第三步：**设置完成后，更新字体缓存：

```bash
fc-cache -fv
```

这样，重新打开相应的程序，你就会看到字体渲染有了明显改善：

![](https://proxy-prod.omnivore-image-cache.app/0x0,sfltTJ9FvOn0SVVP5GhnzXvqz2hopJorHixbb327mf7E/https://cdnfile.sspai.com/2024/10/20/aac428086c4c070c030e54757b740ab2.png?imageView2/2/format/webp)

禁用 hinting 后，没有了点阵，宋体的显示效果与打印效果一致。

## 写在最后

作为日常使用 Arch Linux 的作者，笔者一直致力于让自己的电脑用起来更加舒服，尤其是字体显示的表现。

以上的经验，就是我自己在「调教」Arch Linux 字体显示中积累而成的，一步步实践下来，现在屏幕上的字体显示格外舒适，无论是日常使用，还是作为重中之重的办公，都与 Windows 不相上下，扫清了顾虑，迎来了舒爽。

如果你也像我一样日常使用 Linux，或者是因工作需要而离不开 Linux──尤其是使用政企统一配备的国产电脑、国产 Linux 发行版，那么期待这篇教程能对你有所启发。

#### 关联阅读：

* [终于可以在 Linux 下愉快打印了：Linux 发行版配置打印机攻略](https://sspai.com/post/90194)
* [终于可以愉快地扫描了：Linux 扫描仪配置与使用攻略](https://sspai.com/post/91396)
* [没错，我日常就用 Linux：谈谈我的 Linux 发行版使用体会](https://sspai.com/post/89194)

\> 关注 [少数派小红书](https://sspai.com/link?target=https%3A%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F63f5d65d000000001001d8d4)，感受精彩数字生活 🍃

\> 实用、好用的 [正版软件](https://sspai.com/mall)，少数派为你呈现 🚀

* 1政企国产化广泛使用统信 UOS、麒麟 Linux 等国产 Linux 发行版，基于 Debian。
* 2注意不同发行版的字体目录有所不同，请参考对应发行版的文档。
* 3早期的发行版（如2015年之前的Ubuntu）有可能使用其他字体，例如Droid Sans Fallback。
* 4严格来说，是使用Calamares、YaST等安装程序框架所安装的发行版，都会在安装过程中为你自动配置，包括区域、时区等参数。
* 5国产操作系统通常已经配置好区域和语言，无需干预。
* 6很多政府机关不允许连接U盘，只能使用光盘。那么就用刻录机和刻录盘来传输文件吧。
* 7包括 Windows 的安装 ISO、可选功能包。
* 8安装过程中会自动运行fc-cache更新字体缓存。
* 9MS Gothic是Windows自带的日文字体。你可以按前文的讲解，从Windows中获取，或者是安装ttf-ms-win11-fod-auto-jpan这个包。

背景知识：Linux 字体，离不开 Fontconfig

安装 Windows 字体，解决办公缺少字体的问题

2）如果你是 Arch Linux 用户：可以安装 AUR 包

1）「罪魁祸首」：Fontconfig 的后备字体机制

禁用 Hinting，解决特定字体显示效果拉胯的问题

© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。

