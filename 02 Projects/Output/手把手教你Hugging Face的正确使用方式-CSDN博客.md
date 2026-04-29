![](https://csdnimg.cn/release/blogv2/dist/pc/img/original.png)

[Galactic Romance.](https://blog.csdn.net/qq_61829672 "Galactic Romance.") ![](https://csdnimg.cn/release/blogv2/dist/pc/img/newUpTime2.png) 已于 2024-10-23 23:07:52 修改

于 2024-10-23 23:07:25 首次发布

版权声明：本文为博主原创文章，遵循 [CC 4.0 BY-SA](http://creativecommons.org/licenses/by-sa/4.0/) 版权协议，转载请附上原文出处链接和本声明。

**本文约3k字，初学者全文阅读约花费15-20分钟。**

**本文适合：**

1. **自然语言处理（NLP）或AIGC初学者**：本文将提供逐步指导，适合那些对Hugging Face、transformer和diffusers模型库感兴趣但缺乏经验的读者。
2. **开发者和人工智能领域的研究人员**：对于那些希望了解如何使用Hugging Face库进行深度学习任务的读者，本文将提供关于模型使用与权重文件下载方面详细的指导和示例代码。

**免责声明**

**本博客旨在提供关于Hugging Face正确使用的指导，但不对由于读者使用Hugging Face平台和模型所产生的任何后果负责。在使用前，请务必仔细阅读官方文档，并根据自己的需求和环境进行适当的调整和评估。**

---

## ****一、 Hugging Face简介****

Hugging Face（抱脸网）是一个知名的开源库和平台，该平台以其强大的Transformer模型库和易用的API而闻名，为开发者和研究人员提供了丰富的预训练模型、工具和资源。****对于从事AI研究的同学来说，其重要性不亚于GitHub（与GitHub一样，访问Hugging Face平台也要科学上网哟~）****。以下是对 Hugging Face 平台的简要介绍：

1. ****预训练模型库：****Hugging Face提供了大量先进的预训练模型，起初涵盖了各种NLP任务，如文本分类、命名实体识别、情感分析、问答等。随着平台的壮大，如今各个领域的预训练模型几乎都可以在平台上找到，这让我们可以关注研究问题本身，而不是从论文复现开始“造轮子”。
2. ****t********ransformers 库********和diffusers库****：Hugging Face的transformers库和diffusers库提供了简洁易用的API，使得下载、加载和使用预训练模型变得非常简单。transformers库中提供的多种分词器和文本编码器为我们研究NLP任务提供了极大的遍历；diffusers库提供了包括文生图(stable diffusion)、文生视频(stable video diffusion)等模型，无论是模型的代码实现还是模型的预训练权重都为我们的学习和使用带来巨大便利。
3. ****模型架构的创新****：Hugging Face不断推出新的模型架构，以改进各种NLP任务的性能。例如，BERT、Llama、RoBERTa、SD、SVD等模型在各自领域取得了巨大成功，并为社区提供了许多基于这些模型的解决方案。
4. ****社区和开放性****：Hugging Face 是一个活跃的社区，拥有庞大的用户群体和开发者社区。平台鼓励用户贡献自己的模型、代码和工具，并提供了开放的 API 和数据集，以促进合作和创新。

****看懵了？不要紧，知道这个东西的重要性比肩GitHub就行了。****

![](https://i-blog.csdnimg.cn/direct/231914cb4f9c4b1a9eb83a05bbf7e1a3.png)

## ****二、 以Stable Diffusion v1.5为例的基本使用****

1. Hugging Face网址：****https://huggingface.co/****。为了访问资源，你需要创建一个账号，****推荐使用Google邮箱创建账号（都科学上网了，不会没有Google邮箱吧？Google邮箱用途挺多的，Google云端硬盘、Colab吧啦吧啦的都需要，没有的话赶紧注册！https://mail.google.com/）****。进来之后界面是这样的，左边是个人的一些东西，中间会展示你follow的一些作者，右边展示比较火热的东西，可以说除了上面的搜索框基本都没啥用****(相信你也不会有事没事刷这玩意吧，都在这火急火燎找模型了)：****
    
    ![](https://i-blog.csdnimg.cn/direct/5129ae790a2e4c579b4c9fb1a5ce3c5a.png)
    
2. 接下来，在输入框输入想要的模型就ok了，这里以Stable Diffusion v1.5为例，所以输入框输入stable-diffusion-v1-5/stable-diffusion-v1-5，按下“enter”，成功跳转。****（没成功的话，检查网络！）****
    
    ![](https://i-blog.csdnimg.cn/direct/4ae2ecad736a4f00851bedb4e42eec8c.png)
    
3. 可以看到，这个自带教程了。。。那下面的步骤就是：
    1. ctrl-c/v一下，到自己的PyCharm，注释版本如下。（没有PyCharm就用别的）
    2. 跑代码之前先要安装diffusers库（前面说过，不记得是啥了请回去看一眼）：****pip install diffusers****。
    3. 启动代码就完事了。会让你pip install accelerate，安装这个库进行模型加速。
    4. 安装后继续启动程序，成功开始~~运行模型~~模型下载。
        
        ![](https://i-blog.csdnimg.cn/direct/549b896664fd475db600818733d7e1ee.png)
        
4. 模型下载ing，首先你会发现模型下载速度很慢，如果网断了下载还会嘎掉。。。等你好不容易下载完毕，你会发现自己找不到下载的模型在哪里嘿嘿。![](https://i-blog.csdnimg.cn/direct/35ef8bc96bb8434993527b73a9c53fcf.png)
5. 到这里，有些教程会教你在from_pretrained里面添加cache_dir参数，来指定模型的下载路径，像下面这样。等你好不容易下载完毕，模型是能找到了，但是你会发现你看不懂刚刚下载的那些是什么东西，文件名乱七八糟的。![](https://i-blog.csdnimg.cn/direct/971d9f0eca324bccbbe33a4c2a01d48f.png)

## 三、 ****更优雅的Hugging Face模型下载方式****

****上面的下载方式很方便，但是存在下载速度慢、可读性差、受网络波动影响大等问题。因此本节讲授本推文最核心的内容：优雅地使用命令行下载Hugging Face模型。****

1. ****首先安装huggingface-hub库****：huggingface-hub，这个库能让我们调用Hugging Face提供的一些API来完成任务。我认为最大的意义就是将我们的精力从Hugging Face网站转移到目前处理的任务上面。可以通过命令huggingface-cli --help验证是否安装成功。
2. 在命令行输入huggingface-cli login，用来通过命令行接入Hugging Face。之后会要求我们输入一个Hugging Face的token，我们访问给出的网址，点击右上角的“Create new token”，只需要再token name输入框中填上你喜欢的名字就可以了，翻到页面最下面点击“Create token”按钮完成token创建。****(这个时候退出去你就会发现自己找不到密钥了哈哈哈哈，别担心，右边三个点的下拉菜单有“Invalidate and refresh”按钮，弹窗点击“确定”按钮就行，你就能再复制token了)****
    
    ![](https://i-blog.csdnimg.cn/direct/689ef364da3e4f70a0f26e34a853658c.png)
    
    ![](https://i-blog.csdnimg.cn/direct/b07d88c6666e48d59610e56ea7809326.png)
    
3. ctrl-c/v输入token，再输入Y，然后就能看到登录成功login successful（红字不重要）。
    
    ![](https://i-blog.csdnimg.cn/direct/d8a463989a424accacac6c5dc53d4ac1.png)
    
4. 执行下载命令：huggingface-cli download --resume-download stable-diffusion-v1-5/stable-diffusion-v1-5 --local-dir /dir_path/hugging-face-models/sd1.5，注意修改保存的地址哈。等你好不容易下载完毕，你会发现这就是你想要的！！
    
    ![](https://i-blog.csdnimg.cn/direct/8222350ae86a41d78b683ac07bf31a7a.png)
    
5. 最后，调用下载好的模型就可以了，把之前的model_id更换为你下载模型的本地路径。至于为什么能这样替换，如果你点进from_pretrained看看方法定义，你会发现第一个参数名字叫“pretrained_model_name_or_path”，是不是有种恍然大悟的感觉！
    
    ![](https://i-blog.csdnimg.cn/direct/158ed6d0122141af976cbe7ace91153f.png)
    

---

最后，希望本博客能为您提供关于Hugging Face的使用方式与模型下载的指导，无论您是初学者还是经验丰富的开发者，Hugging Face平台都为您提供了丰富的资源和工具来探索和应用这些相对成熟的模型。同时，期待够得到您的关注和支持！您可以关注我的博客以获取更多关于人工智能和最新技术趋势的信息和更新。

感谢您的阅读和支持！