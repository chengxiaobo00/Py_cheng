# Homebrew 使用详解

> 来源：知乎 - 越前君

## 什么是 Homebrew？

Homebrew 是 macOS 和 Linux 上非常流行的开源包管理器，可以理解为一个命令行版本的应用商店。它是相对安全的，如果你知道自己正在下载什么。

## Homebrew 术语

| 术语 | 说明 |
|------|------|
| Formula | 配方，表示安装包的描述文件 |
| Cask | 木桶装酒的器具，表示具有 GUI 界面的原生应用 |
| Keg | 小桶，表示某个包某个版本的安装目录 |
| Cellar | 地窖，存放酒的地方，表示包的安装目录 |
| Caskroom | 木桶间，表示类型为 Cask 的包的安装目录 |
| Tap | 水龙头，表示包的来源，也就是镜像源 |
| Bottle | 瓶子，表示预先编译好的包 |

## 安装 Homebrew

```bash
# 官方安装脚本
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 国内安装脚本（如果下载慢）
$ /bin/bash -c "$(curl -fsSL https://mirrors.ustc.edu.cn/misc/brew-install.sh)"
```

## 源切换

可以切换为国内镜像源（清华大学镜像源、中国科学技术大学镜像源）来加速下载。

## Homebrew Cask 的区别

- **Formulae**：命令行工具、开发库、字体、插件等不含 GUI 界面的软件
- **Casks**：含有 GUI 图形化界面的软件，如 Chrome、Firefox 等

## 常用命令

```bash
$ brew search <keyword>     # 搜索
$ brew install <package>    # 安装
$ brew uninstall <package>  # 卸载
$ brew upgrade             # 更新所有已安装的包
$ brew cleanup             # 清理旧版本包
$ brew info <package>      # 查看包信息
$ brew deps --installed    # 查看已安装包的依赖
```

---
*参考来源：https://zhuanlan.zhihu.com/p/30704752*
