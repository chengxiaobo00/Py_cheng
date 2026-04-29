在[个人电脑](https://so.csdn.net/so/search?q=%E4%B8%AA%E4%BA%BA%E7%94%B5%E8%84%91&spm=1001.2101.3001.7020)上安装DeepSeek-R1-Distill-Qwen-1.5B-GGUF（0.5.7版本），需要满足一定的条件并做好相应的准备工作。以下是详细的安装流程、所需条件及准备工作：

## 一、所需条件

### 1.硬件要求：

处理器：较新的[CPU](https://so.csdn.net/so/search?q=CPU&spm=1001.2101.3001.7020)，性能越好越能支持大型模型的运行。  
内存：至少16GB，推荐24GB或更高以支持大型模型。  
存储：足够的硬盘空间，通常要求至少5GB的空余空间用于安装和存储模型。  
显卡：虽然不是必需，但有独立显卡可以加速部分计算任务。

### 2.软件要求：

[操作系统](https://so.csdn.net/so/search?q=%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F&spm=1001.2101.3001.7020)：Windows或Mac OS，需要支持64位应用。  
网络连接：稳定的网络连接用于下载模型和更新。

## 二、准备工作

备份数据：在安装之前，建议备份重要数据以防意外丢失。  
检查系统兼容性：确保操作系统与DeepSeek-R1-Distill-Qwen-1.5B-GGUF兼容。  
更新软件：将操作系统和常用软件更新到最新版本，以确保兼容性和稳定性。  
具体可以查我的文章：https://lzm07.blog.csdn.net/article/details/145472256

## 三、详细安装流程（Windows系统）

### 1.下载Ollama安装包：

打开浏览器，访问Ollama官网，地址是：https://ollama.com/。  
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/5858ad12bff044058787c1ddc36b932c.png#pic_center)

点击页面右上角的“Download”按钮。  
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/7a64f7233dfa4482abfd830b6d6b1545.png#pic_center)

根据Windows系统版本，如果是win10及以上版本，直接点击“Download for Windows”，之后会进入gitHub（最新版的下载网址是：github.com，gitHub是国外网站，访问会很慢），选择合适的安装包进行下载。建议复制网址，直接使用迅雷下载。也可以使用GitHub文件加速网站：https://github.moeyy.xyz/。  
如果是针对当前教程的版本DeepSeek-R1-Distill-Qwen-1.5B-GGUF（0.5.7版本）的安装包OllamaSetup.exe，可以直接在我的CSDN上下载，网址如下：https://download.csdn.net/download/lzm12278828/90347211

### 2.安装Ollama：

下载完成后，双击安装包并按照提示完成安装。  
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/8efe2e3aae2940a8b0848a91b9737672.png#pic_center)

注意：安装程序可能会直接将Ollama安装在C盘，且不支持更改路径，因此需要确保C盘有足够的空间。  
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/89df8fd8b8b34b6fa6881fed43214435.png#pic_center)

### 3.验证安装：

打开命令提示符（可以通过按Win + R键，输入cmd后回车打开）。  
输入命令ollama -v，如果安装正确，命令提示符将显示Ollama的版本号。  
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/6c05d4d2ccac46d6bcf317e93d686cd8.png#pic_center)

### 4.下载并运行DeepSeek模型：

#### （1）线上安装

以管理员身份运行命令提示符（可以通过右键点击命令提示符图标，选择“以管理员身份运行”）。  
输入命令ollama run deepseek-r1-distill-qwen:1.5b-gguf，以下载并运行DeepSeek-R1-Distill-Qwen-1.5B-GGUF版本。如果是老版本是可以的，但如果是新版本，则可能无法下载。  
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/ee1149d6b64948e493312cada651756e.png#pic_center)

等待模型下载并运行。下载时间取决于网络速度和模型大小。

#### （2）本地安装

##### 1）GGUF文件下载

打开魔塔社区，网址是：https://www.modelscope.cn/models/unsloth/DeepSeek-R1-Distill-Qwen-1.5B-GGUF/files。我们看到有很多版本。先下载自己想要的版本。  
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/f2f5579102b043cd999f7db88dad24a8.png#pic_center)

当前我们下载了DeepSeek-R1-Distill-Qwen-1.5B-Q8_0.gguf，1.89GB大小的。将文件放在D盘根目录下。

##### 2）创建Modelfile文件

在D盘根目录下创建一个名为Modelfile的文本文件（扩展名可以省略，可以先创建一个记事本文档，之后编辑好后将文件后缀删掉）。  
在文件中写入以下内容，指定GGUF模型文件的路径：  
FROM D:/DeepSeek-R1-Distill-Qwen-1.5B-Q8_0.gguf  
如果文件不在同一目录下，需要使用绝对路径（当前也使用了绝对路径）。  
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/b515f14c074f4335a4573b07b3192902.png#pic_center)

##### 3）创建Ollama模型

打开终端或命令行界面，由于Modelfile文件在D盘根目录下，所以要先进入D盘，运行以下命令来创建Ollama模型：  
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/e981c2de42014e748c323cf1edca92ff.png#pic_center)

ollama create my_model_name -f Modelfile  
其中my_model_name是你为模型指定的名称（可以自定义），-f选项后面跟的是Modelfile文件的路径。  
看到success就表示模型创建成功了。

##### 4）检查模型是否创建成功

运行以下命令来检查Ollama中是否已包含你创建的模型：ollama list。你应该能在列表中看到你的模型名称my_model_name。  
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/735cb9e66797472f820c7e25eb3cb41c.png#pic_center)

##### 5）运行模型

执行运行命令：一旦模型创建成功，你就可以使用以下命令来运行它：ollama run my_model_name。此时，Ollama将加载你指定的GGUF模型文件，并运行该模型。  
验证模型运行：如果看到对话的输入提示>>>，说明GGUF格式的大模型在Ollama中安装成功并正在运行。你可以开始与模型进行交互，输入问题或指令，并查看模型的回答或输出结果。  
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/cb0f3c83e6384e0caa109bfd2e4a9b5c.png#pic_center)

### 5.开始与DeepSeek进行对话：

模型下载并运行后，命令提示符将显示>>>符号，表示可以开始与DeepSeek进行对话。  
输入问题或指令，DeepSeek将给出相应的回答或执行相应的任务。  
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/d9125788ed7a42608e30071e2ddadb63.png#pic_center)

同时要注意以下问题：  
（1）文件路径：确保Modelfile中指定的GGUF文件路径正确，否则模型无法正确加载。  
（2）模型目录空间：确保Ollama的模型目录（默认为/usr/share/ollama/.ollama/models）有足够的空间。  
（3）硬件限制：根据你的硬件配置选择合适的模型版本，例如显存较小的显卡可以选择低量化版本

## 四、详细安装流程（Mac系统）

### 1.下载Ollama安装包：

打开浏览器，访问Ollama官网。  
点击页面右上角的“Download”按钮。  
根据Mac系统版本，选择合适的安装包进行下载。

### 2.安装Ollama：

下载完成后，双击安装包并按照提示完成安装。

### 3.验证安装：

打开终端（可以通过按Command + 空格键，输入“终端”后回车打开）。  
输入命令ollama -v，如果安装正确，终端将显示Ollama的版本号。

### 4.下载并运行DeepSeek模型：

输入命令ollama run deepseek-r1-distill-qwen:1.5b-gguf，以下载并运行DeepSeek-R1-Distill-Qwen-1.5B-GGUF版本。  
等待模型下载并运行。

### 5.开始与DeepSeek进行对话：

模型下载并运行后，终端将显示>>>符号，表示可以开始与DeepSeek进行对话。

## 五、注意事项

（1）模型参数选择：DeepSeek支持多种模型参数，包括1.5B、7B等。参数越大，性能通常越好，但对硬件配置的要求也越高。请根据自己的硬件配置选择合适的参数。  
（2）保存路径设置：DeepSeek模型下载后，默认会保存在系统盘（如C盘）。如果需要更改保存路径，可以在Ollama的配置文件中进行设置。  
（3）第三方客户端软件：如果希望在图形界面下与DeepSeek进行交互，可以安装支持Ollama的第三方客户端软件，如ChatWise等。  
通过以上步骤，您应该能够在个人电脑上成功安装并运行DeepSeek-R1-Distill-Qwen-1.5B-GGUF。如果遇到任何问题，请参考Ollama的官方文档或寻求社区的帮助。