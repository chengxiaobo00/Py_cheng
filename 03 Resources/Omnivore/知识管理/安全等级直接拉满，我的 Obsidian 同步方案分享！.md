---
id: 810b9334-dbe0-42b8-b969-8c9613f797bc
title: |
  安全等级直接拉满，我的 Obsidian 同步方案分享！
author: |
  赫点茶
date_saved: 2024-07-07 22:09:12
---

# 安全等级直接拉满，我的 Obsidian 同步方案分享！
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-qfs-f-s-dx-ti-bw-nmz-h-whi-ha-1908d86eb45)
[Read Original](https://mp.weixin.qq.com/s/Qfs_fSDx-TiBWNmzHWhiHA)

<DIV id="readability-content"><DIV data-omnivore-anchor-idx="1" class="page" id="readability-page-1"><div data-omnivore-anchor-idx="2" id="js_base_container">
    
    
    
<div data-omnivore-anchor-idx="3" id="js_row_immersive_stream_wrap">
  
    <p data-omnivore-anchor-idx="4"><img data-omnivore-anchor-idx="5" data-omnivore-original-src="https://mmbiz.qpic.cn/mmbiz_jpg/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCy8opZ1jXEiaDRWxBtRltJEDCnPrhRkYpibiaLBBfQUBXUpDADyyjLd1D2A/0?wx_fmt=jpeg" src="https://proxy-prod.omnivore-image-cache.app/0x0,sFgx88zHbLPbz1gv9EiQBOSnISDaB7WvvdtPHnPR_b0s/https://mmbiz.qpic.cn/mmbiz_jpg/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCy8opZ1jXEiaDRWxBtRltJEDCnPrhRkYpibiaLBBfQUBXUpDADyyjLd1D2A/0?wx_fmt=jpeg" alt="cover_image">
  </p>
    
</div>

    
    <div data-omnivore-anchor-idx="6" id="page-content">
          
          
          <div data-omnivore-anchor-idx="7" id="meta_content" class="_omnivore_rich_media_meta_list">
                                      <span data-omnivore-anchor-idx="8" id="copyright_logo" class="wx_tap_link js_wx_tap_highlight rich_media_meta icon_appmsg_tag appmsg_title_tag weui-wa-hotarea">Original</span>
                                                      <span data-omnivore-anchor-idx="9" class="rich_media_meta rich_media_meta_text">
                                                                                    <span data-omnivore-anchor-idx="10" role="link" tabindex="0" id="js_author_name" class="wx_tap_link js_wx_tap_highlight weui-wa-hotarea" datarewardsn="" datatimestamp="" datacanreward="0">赫点茶</span>
                                                                            </span>
                                      
                                                                <span data-omnivore-anchor-idx="11" class="rich_media_meta rich_media_meta_nickname" id="profileBt">
              
                赫点茶              
              
              
              
            </span>
            <span data-omnivore-anchor-idx="12" id="meta_content_hide_info">
              <em data-omnivore-anchor-idx="13" id="publish_time" class="rich_media_meta rich_media_meta_text">2024年07月05日 15:27</em>
              <em data-omnivore-anchor-idx="14" id="js_ip_wording_wrp" class="rich_media_meta rich_media_meta_text" role="option" aria-labelledby="js_a11y_op_ip_wording js_ip_wording"><span data-omnivore-anchor-idx="15" id="js_a11y_op_ip_wording" aria-hidden="true"></span><span data-omnivore-anchor-idx="16" aria-hidden="true" id="js_ip_wording">浙江</span></em>
              <em data-omnivore-anchor-idx="17" id="js_title_modify_wrp" class="rich_media_meta rich_media_meta_text" role="option" aria-labelledby="js_a11y_op_title_modify js_title_modify"><span data-omnivore-anchor-idx="18" aria-hidden="true" id="js_title_modify"></span></em>
                          </span>
                      </div>

          
          
          
            
              
              
            
              
              
                
              
            
          

          
          

          
                                        

          
                    

          
                              
                                        
                    
                    
          
          
          
          
          
                                                  <section data-omnivore-anchor-idx="19" id="js_content" data-tool="mdnice编辑器" data-website="https://www.mdnice.com"><p data-omnivore-anchor-idx="20" data-tool="mdnice编辑器">虽然 Obsidian 的本地存储方案相较于其他云笔记是相对安全的，但是我也无法 100% 相信我的物理硬盘没有损坏的风险。</p><p data-omnivore-anchor-idx="21" data-tool="mdnice编辑器">所以，我决定把 Obsidian 笔记文件加密上传云端。</p><h3 data-omnivore-anchor-idx="22" data-tool="mdnice编辑器"><span data-omnivore-anchor-idx="23">本文涉及到的工具</span></h3><p data-omnivore-anchor-idx="24" data-tool="mdnice编辑器">以下是我用来同步 Obsidian 经常用到的几款软件，Cryptomator 和 KeePass 2 的使用教程我会放在文章最后。</p><ol data-omnivore-anchor-idx="25" data-tool="mdnice编辑器"><li data-omnivore-anchor-idx="26"><section data-omnivore-anchor-idx="27">Obsidian：笔记软件</section></li><li data-omnivore-anchor-idx="28"><section data-omnivore-anchor-idx="29">坚果云：云盘</section></li><li data-omnivore-anchor-idx="30"><section data-omnivore-anchor-idx="31"><span data-omnivore-anchor-idx="32">GitHub</span><sup data-omnivore-anchor-idx="33">[1]</sup>：代码托管平台</section></li><li data-omnivore-anchor-idx="34"><section data-omnivore-anchor-idx="35">Cryptomator：文件加密工具</section></li><li data-omnivore-anchor-idx="36"><section data-omnivore-anchor-idx="37">KeePass 2：密码管理工具</section></li></ol><h3 data-omnivore-anchor-idx="38" data-tool="mdnice编辑器"><span data-omnivore-anchor-idx="39">本地存储就一定安全吗？</span></h3><p data-omnivore-anchor-idx="40" data-tool="mdnice编辑器">其实不然，本地存储只能说隐私性更好一些，但是谈不上物理上的绝对安全，因为谁都无法保障你的硬盘不会坏，设备不会丢。</p><p data-omnivore-anchor-idx="41" data-tool="mdnice编辑器">以上黑天鹅事件一旦发生，几乎永久性丢失，这就是本地存储的局限性。</p><h3 data-omnivore-anchor-idx="42" data-tool="mdnice编辑器"><span data-omnivore-anchor-idx="43">本地+云端，而不选择云笔记</span></h3><p data-omnivore-anchor-idx="44" data-tool="mdnice编辑器">肯定会有同学说，搞这么麻烦，又是同步又是加密的，为什么不直接选择云笔记软件？不用折腾，直接使用，简单省事，还免费。</p><p data-omnivore-anchor-idx="45" data-tool="mdnice编辑器"><strong data-omnivore-anchor-idx="46">因为不想被封心锁爱！</strong></p><figure data-omnivore-anchor-idx="47" data-tool="mdnice编辑器"><img data-omnivore-anchor-idx="48" data-omnivore-original-src="https://mmbiz.qpic.cn/mmbiz_png/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCy63syLDI3fhPxibjFZ40VeZ7jpZjwKC9Z2JjElibyYafzSga1REia8VEVA/640?wx_fmt=png&from=appmsg" data-imgfileid="100002600" data-ratio="1.4981481481481482" data-src="https://mmbiz.qpic.cn/mmbiz_png/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCy63syLDI3fhPxibjFZ40VeZ7jpZjwKC9Z2JjElibyYafzSga1REia8VEVA/640?wx_fmt=png&from=appmsg" data-type="png" data-w="1080" data-original-style="display: block;margin-right: auto;margin-left: auto;border-style: none;border-width: 3px;border-color: rgba(0, 0, 0, 0.4);border-radius: 0px;object-fit: fill;box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;" data-index="2" src="https://proxy-prod.omnivore-image-cache.app/0x0,sH8R4Jt-j2RJFauIUWXZsKSmvaiDgJCzdXnb6P6cCHZo/https://mmbiz.qpic.cn/mmbiz_png/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCy63syLDI3fhPxibjFZ40VeZ7jpZjwKC9Z2JjElibyYafzSga1REia8VEVA/640?wx_fmt=png&from=appmsg" _width="677px" alt="Image" data-fail="0"></figure><h3 data-omnivore-anchor-idx="49" data-tool="mdnice编辑器"><span data-omnivore-anchor-idx="50">方案一</span></h3><p data-omnivore-anchor-idx="51" data-tool="mdnice编辑器"><strong data-omnivore-anchor-idx="52">Obsidian + 坚果云 + Github 私有仓库</strong></p><p data-omnivore-anchor-idx="53" data-tool="mdnice编辑器">在从 Notion 换到 Obsidian 的最初阶段，我选择了「坚果云+ Github 私有仓库」的方案，Obsidian 本地存储一份，坚果云实时进行云端备份，然后定期备份到 Github 私有仓库。</p><p data-omnivore-anchor-idx="54" data-tool="mdnice编辑器">多份副本，多种介质最大程度上保证数据安全性与隐私性。</p><p data-omnivore-anchor-idx="55" data-tool="mdnice编辑器">换用到 Obsidian 最大的感受就是，对移动端不太友好，因为是 markdown 语法手机端不太容易进行笔记的写入操作。</p><p data-omnivore-anchor-idx="56" data-tool="mdnice编辑器">此时我会使用手机端的 Github 软件，直接在仓库中进行文本编辑后提交更新记录，桌面端只需要重新 pull 拉取最新的仓库提交记录即可，这样就保证了手机端既可以写入又可以与桌面端同步。</p><figure data-omnivore-anchor-idx="57" data-tool="mdnice编辑器"><img data-omnivore-anchor-idx="58" data-omnivore-original-src="https://mmbiz.qpic.cn/mmbiz_png/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCyiaZqwqsMuEoY5MMHRMzc615Siaw47LRQOJzaTiczCJjcqWEKaHTxjASEw/640?wx_fmt=png&from=appmsg" data-imgfileid="100002599" data-ratio="1.0814814814814815" data-src="https://mmbiz.qpic.cn/mmbiz_png/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCyiaZqwqsMuEoY5MMHRMzc615Siaw47LRQOJzaTiczCJjcqWEKaHTxjASEw/640?wx_fmt=png&from=appmsg" data-type="png" data-w="1080" data-original-style="display: block;margin-right: auto;margin-left: auto;border-style: none;border-width: 3px;border-color: rgba(0, 0, 0, 0.4);border-radius: 0px;object-fit: fill;box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;" data-index="3" src="https://proxy-prod.omnivore-image-cache.app/0x0,s_75_4QFjzqwKpziyaiQEA-Vh-o1z3eunPjte0Qgrr5Q/https://mmbiz.qpic.cn/mmbiz_png/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCyiaZqwqsMuEoY5MMHRMzc615Siaw47LRQOJzaTiczCJjcqWEKaHTxjASEw/640?wx_fmt=png&from=appmsg" _width="677px" alt="Image"></figure><h3 data-omnivore-anchor-idx="59" data-tool="mdnice编辑器"><span data-omnivore-anchor-idx="60">方案二：最终方案</span></h3><p data-omnivore-anchor-idx="61" data-tool="mdnice编辑器"><strong data-omnivore-anchor-idx="62">Obsidian + Cryptomator + &nbsp;坚果云</strong></p><p data-omnivore-anchor-idx="63" data-tool="mdnice编辑器">为了考虑到云端数据的隐私性，最终还是选择了加密的这套方案，通过 Cryptomator 软件对本地的 Obsidian 文件进行加密，然后由坚果云自动同步实时更新到云端。</p><p data-omnivore-anchor-idx="64" data-tool="mdnice编辑器">使用 Cryptomator 软件在坚果云中创建一个保险库，我使用 KeePass 2 这款密码管理软件管理的 Cryptomator 保险库密码，只有输入正确的密钥之后才可以使用 Obsidian 软件打开笔记文件。</p><figure data-omnivore-anchor-idx="65" data-tool="mdnice编辑器"><img data-omnivore-anchor-idx="66" data-omnivore-original-src="https://mmbiz.qpic.cn/mmbiz_png/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCyP5QRkm3EPTj5cZ0XLRC3jLHPTDhzXvGxq2EBt3jYnibDMsIXauVQLGQ/640?wx_fmt=png&from=appmsg" data-imgfileid="100002598" data-ratio="0.7055555555555556" data-src="https://mmbiz.qpic.cn/mmbiz_png/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCyP5QRkm3EPTj5cZ0XLRC3jLHPTDhzXvGxq2EBt3jYnibDMsIXauVQLGQ/640?wx_fmt=png&from=appmsg" data-type="png" data-w="1080" data-original-style="display: block;margin-right: auto;margin-left: auto;border-style: none;border-width: 3px;border-color: rgba(0, 0, 0, 0.4);border-radius: 0px;object-fit: fill;box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;" data-index="4" src="https://proxy-prod.omnivore-image-cache.app/0x0,skILNwJFTenlMILoSh88pVe3TP0dMizLmrNcqfsM_uIM/https://mmbiz.qpic.cn/mmbiz_png/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCyP5QRkm3EPTj5cZ0XLRC3jLHPTDhzXvGxq2EBt3jYnibDMsIXauVQLGQ/640?wx_fmt=png&from=appmsg" _width="677px" alt="Image"></figure><p data-omnivore-anchor-idx="67" data-tool="mdnice编辑器">加密后存储在坚果云上的笔记文件只要第三方获取不到你的保险库密码，他们就无法查看你存储在他们云服务中的任何文件，你的数据更加的安全。</p><p data-omnivore-anchor-idx="68" data-tool="mdnice编辑器"><img data-omnivore-anchor-idx="69" data-omnivore-original-src="https://mmbiz.qpic.cn/mmbiz_png/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCyNqHaQia6OA9oR4erPWbzAibgRoiaTfoPzpBXDy0leaw7UcMMEOFCtJIrg/640?wx_fmt=png&from=appmsg" data-imgfileid="100002597" data-ratio="1.8359133126934986" data-src="https://mmbiz.qpic.cn/mmbiz_png/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCyNqHaQia6OA9oR4erPWbzAibgRoiaTfoPzpBXDy0leaw7UcMMEOFCtJIrg/640?wx_fmt=png&from=appmsg" data-type="png" data-w="646" data-original-style="display: block;margin-right: auto;margin-left: auto;" data-index="5" src="https://proxy-prod.omnivore-image-cache.app/0x0,syU76tjun7NnnuW9u9Vh2VkWQL3GwSmSq-8MtFhReJ-8/https://mmbiz.qpic.cn/mmbiz_png/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCyNqHaQia6OA9oR4erPWbzAibgRoiaTfoPzpBXDy0leaw7UcMMEOFCtJIrg/640?wx_fmt=png&from=appmsg" _width="646px" alt="Image">从隐私和安全的角度来说，绝对比直接使用国产云笔记软件更加的有保障，但是确实会失去一部分的便携性。</p><p data-omnivore-anchor-idx="70" data-tool="mdnice编辑器">Cryptomator 也有移动端的应用，直接打开现有的保险库即可，但是移动端的 Cryptomator 的免费版只有读取的权限，只有会员用户才提供保险库写入权限。</p><figure data-omnivore-anchor-idx="71" data-tool="mdnice编辑器"><img data-omnivore-anchor-idx="72" data-omnivore-original-src="https://mmbiz.qpic.cn/mmbiz_jpg/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCyTgQO1vVOfy7oCwic98X8MLypOyZdiaCG6uc15XickibXFXAlHz2ggGKxCA/640?wx_fmt=jpeg&from=appmsg" data-imgfileid="100002601" data-ratio="2.1638888888888888" data-src="https://mmbiz.qpic.cn/mmbiz_jpg/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCyTgQO1vVOfy7oCwic98X8MLypOyZdiaCG6uc15XickibXFXAlHz2ggGKxCA/640?wx_fmt=jpeg&from=appmsg" data-type="jpeg" data-w="1080" data-original-style="display: block;margin-right: auto;margin-left: auto;border-style: none;border-width: 3px;border-color: rgba(0, 0, 0, 0.4);border-radius: 0px;object-fit: fill;box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;" data-index="6" src="https://proxy-prod.omnivore-image-cache.app/0x0,shYD0YE6qAomLfk8L3Si2y3BOf1V1XOGr9QkY3SlCsVw/https://mmbiz.qpic.cn/mmbiz_jpg/98WuqUtT9HoxdYOE3wMLauYLjLcJyfCyTgQO1vVOfy7oCwic98X8MLypOyZdiaCG6uc15XickibXFXAlHz2ggGKxCA/640?wx_fmt=jpeg&from=appmsg" _width="677px" alt="Image"></figure><h3 data-omnivore-anchor-idx="73" data-tool="mdnice编辑器"><span data-omnivore-anchor-idx="74">个人总结</span></h3><p data-omnivore-anchor-idx="75" data-tool="mdnice编辑器">以上，就是我个人 Obsidian 的同步方案，因为我个人比较注重隐私性，所以就采用了加密的方案，虽说，牺牲掉的一定的便携性，但是<strong data-omnivore-anchor-idx="76">隐私性和安全等级直接拉满</strong>。</p><p data-omnivore-anchor-idx="77" data-tool="mdnice编辑器">当然，除了坚果云之外还有比较不错的云盘，比如，微软的 OneDrive 或是 iCloud 都是不错的选择。</p><p data-omnivore-anchor-idx="78" data-tool="mdnice编辑器">相比于坚果云，手机端的 Cryptomator 反而对 OneDrive 和 iCloud 更加有好些。</p><p data-omnivore-anchor-idx="79" data-tool="mdnice编辑器">如果你有更优秀的 Obsidian 同步方案或是有别的笔记软件分享，欢迎在评论区多多留言分享！</p><p data-omnivore-anchor-idx="80" data-tool="mdnice编辑器"><strong data-omnivore-anchor-idx="81">更多推荐：</strong></p><ul data-omnivore-anchor-idx="82" data-tool="mdnice编辑器"><li data-omnivore-anchor-idx="83"><section data-omnivore-anchor-idx="84"><a data-omnivore-anchor-idx="85" target="_blank" href="http://mp.weixin.qq.com/s?__biz=MzI3NzcwOTY4MQ==&mid=2247486240&idx=1&sn=ceebedd3c4ccdae757bddbfd4f3ac898&chksm=eb635d3edc14d42870238f5094c04377ee07b8aaf06e559f5890f678c82b9a82ccfec6909910&scene=21#wechat_redirect" textvalue="从 Notion 到 Obsidian 我的笔记软件心路历程" linktype="text" imgurl="" imgdata="null" data-itemshowtype="0" tab="innerlink" data-linktype="2">从 Notion 到 Obsidian 我的笔记软件心路历程</a><br data-omnivore-anchor-idx="86"></section></li><li data-omnivore-anchor-idx="87"><section data-omnivore-anchor-idx="88"><a data-omnivore-anchor-idx="89" target="_blank" href="http://mp.weixin.qq.com/s?__biz=MzI3NzcwOTY4MQ==&mid=2247486244&idx=1&sn=d4c38b3c08ae7778d59924cf23dd7d4a&chksm=eb635d3adc14d42c372554b69e84169514ba1f73e27b4eed0c169fa4eb024a2b0ffd8bc895b2&scene=21#wechat_redirect" textvalue="放弃 Notion 选择 Obsidian，我的几点思考与建议！" linktype="text" imgurl="" imgdata="null" data-itemshowtype="0" tab="innerlink" data-linktype="2" hasload="1">放弃 Notion 选择 Obsidian，我的几点思考与建议！</a><br data-omnivore-anchor-idx="90"></section></li><li data-omnivore-anchor-idx="91"><section data-omnivore-anchor-idx="92"><a data-omnivore-anchor-idx="93" target="_blank" href="http://mp.weixin.qq.com/s?__biz=MzI3NzcwOTY4MQ==&mid=2247484864&idx=1&sn=24e60acc620e5fdaa0084a3612fc0002&chksm=eb6353dedc14dac84507e3a4bb1b15f87bfa916a0ed009cc30f972e6a319c2fff968a7bbb05e&scene=21#wechat_redirect" textvalue="强烈建议立刻安装Cryptomator加密软件" linktype="text" imgurl="" imgdata="null" data-itemshowtype="0" tab="innerlink" data-linktype="2" hasload="1">强烈建议立刻安装Cryptomator加密软件</a><br data-omnivore-anchor-idx="94"></section></li><li data-omnivore-anchor-idx="95"><section data-omnivore-anchor-idx="96"><a data-omnivore-anchor-idx="97" target="_blank" href="http://mp.weixin.qq.com/s?__biz=MzI3NzcwOTY4MQ==&mid=2247485459&idx=1&sn=7abc7ee7189349ff1812afb0a55d520c&chksm=eb635e0ddc14d71be339519b21a5df495934a9a698f09c541561dab7aac925cdc66a9351c462&scene=21#wechat_redirect" textvalue="隐私保护进阶之路：使用 Cryptomator 加密云盘文件数据" linktype="text" imgurl="" imgdata="null" data-itemshowtype="0" tab="innerlink" data-linktype="2" hasload="1">隐私保护进阶之路：使用 Cryptomator 加密云盘文件数据</a><br data-omnivore-anchor-idx="98"></section></li><li data-omnivore-anchor-idx="99"><section data-omnivore-anchor-idx="100"><a data-omnivore-anchor-idx="101" target="_blank" href="http://mp.weixin.qq.com/s?__biz=MzI3NzcwOTY4MQ==&mid=2247485374&idx=1&sn=80c4782fc5c7b8689d25d7a41113074c&chksm=eb6351a0dc14d8b6e057e470b8852766c45ab055a0372982dc72d23e1679be5e654d16fc5c67&scene=21#wechat_redirect" textvalue="当下，我没有隐私，还能怎样挣扎？" linktype="text" imgurl="" imgdata="null" data-itemshowtype="0" tab="innerlink" data-linktype="2" hasload="1">当下，我没有隐私，还能怎样挣扎？</a><br data-omnivore-anchor-idx="102"></section></li><li data-omnivore-anchor-idx="103"><section data-omnivore-anchor-idx="104"><a data-omnivore-anchor-idx="105" target="_blank" href="http://mp.weixin.qq.com/s?__biz=MzI3NzcwOTY4MQ==&mid=2247485077&idx=1&sn=6b65749d6bf38b02da4e7c08b9a30a30&chksm=eb63508bdc14d99da6e92b9e92cf6430968c378c42a8274e002025fc47110b335bc70a19e12c&scene=21#wechat_redirect" textvalue="2023 个人隐私保护就是一笑话？浅谈破解之道！" linktype="text" imgurl="" imgdata="null" data-itemshowtype="0" tab="innerlink" data-linktype="2" hasload="1">2023 个人隐私保护就是一笑话？浅谈破解之道！</a><br data-omnivore-anchor-idx="106"></section></li></ul><section data-omnivore-anchor-idx="107">关注@赫点茶「ID：MrHobby007」</section><section data-omnivore-anchor-idx="108">第一时间收看更多好文</section><section data-omnivore-anchor-idx="109">👇👇👇</section><section data-omnivore-anchor-idx="110"><mp-common-profile data-omnivore-anchor-idx="111" data-pluginname="mpprofile" data-id="MzI3NzcwOTY4MQ==" data-headimg="http://mmbiz.qpic.cn/mmbiz_png/98WuqUtT9Hp7PlWiaO5UbwcVsxWXUicDhDjiaGVvE8wClwgxK9ul5RHdh2TYrDmgOEJLRGhhPejLXm5CIicoO4Zz3g/300?wx_fmt=png&wxfrom=19" data-nickname="赫点茶" data-alias="MrHobby007" data-signature="运用数字产品，挖掘成长性思维，提升工作效率和生活品质。" data-from="0" data-is_biz_ban="0" data-origin_num="121" data-isban="0" data-biz_account_status="0" data-index="1"></mp-common-profile></section><section data-omnivore-anchor-idx="112" data-tool="mdnice编辑器"><span data-omnivore-anchor-idx="113">参考资料</span></section><section data-omnivore-anchor-idx="114" data-tool="mdnice编辑器"><span data-omnivore-anchor-idx="115"><span data-omnivore-anchor-idx="116">[1]</span><p data-omnivore-anchor-idx="117">GitHub: <em data-omnivore-anchor-idx="118">是一个面向开源及私有软件项目的托管平台，因为只支持Git作为唯一的版本库格式进行托管，故名GitHub。GitHub拥有1亿以上的开发人员，400万以上组织机构和3.3亿以上资料库</em></p></span></section></section>

          
        </div>

    

    
    

    
    
  </div></DIV></DIV>

