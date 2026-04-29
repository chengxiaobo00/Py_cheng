---
id: 6774c924-7a1b-44f7-83cd-69c6a6cf6c14
title: |
  家庭自组服务的Traefik反代——大体思路和一些共性问题 - 少数派
author: |
  艾佛利山的杨博士
tags:
  - RSS
date_saved: 2024-06-29 11:43:12
date_published: 2024-06-29 11:43:12
---

# 家庭自组服务的Traefik反代——大体思路和一些共性问题 - 少数派
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/traefik-1906342cc25)
[Read Original](https://sspai.com/post/89784)

<DIV id="readability-content"><DIV data-omnivore-anchor-idx="1" class="page" id="readability-page-1"><div data-omnivore-anchor-idx="2" data-v-39bff104="" data-v-7252d060=""><!----><!----><p data-omnivore-anchor-idx="3">家庭自组服务的Traefik反代——大体思路和一些共性问题</p></div><div data-omnivore-anchor-idx="4" data-v-39bff104="" data-v-4c610104=""><p data-omnivore-anchor-idx="5">本文参加「自力更生」征文活动</p><p data-omnivore-anchor-idx="6">相信很多NAS玩家都在自家nas里搭建了一些需要在外网访问的服务。如媒体管理软件radarr/sonarr/nastools，媒体播放emby/plex，下载软件qb等等。这些服务如果自己有公网IP或可以通过v6网络访问，则要比搭建vpn穿透回来方便得多。家庭网络搭建反代有一些问题比较棘手，常见的比如80/443一般都是封禁的，就为了下个电影去备案似乎也得不偿失，所以一般都会采用高位端口进行反代。</p><p data-omnivore-anchor-idx="7">之前我一直采用<a data-omnivore-anchor-idx="8" href="https://sspai.com/link?target=https%3A%2F%2Fdocs.linuxserver.io%2Fgeneral%2Fswag%2F" target="_blank">SWAG - LinuxServer.io</a>来做反代，这实际上是一个nginx反代服务器+cerbot证书注册打包服务，包含了一些常用selfhosted服务的配置模板。但是，如刚才所说，由于家庭网络的特殊性，某些服务在访问带端口号的地址时会有些莫名其妙的问题，且每次新添服务都要重新配置一番。相比之下traefik功能则更为强大，且可以通过docker label配置选项，docker启动自动反代，索性花了点时间研究下traefik配置，一劳永逸的解决这个问题。</p><p data-omnivore-anchor-idx="9">这里不得不吐槽<a data-omnivore-anchor-idx="10" href="https://sspai.com/link?target=https%3A%2F%2Fdoc.traefik.io%2Ftraefik%2F" target="_blank">Traefik Proxy Documentation</a>真是写的又臭又长又迷惑，且中文资料不多。所以配置过程中可能少不了Google解决一些问题，另外<a data-omnivore-anchor-idx="11" href="https://sspai.com/link?target=https%3A%2F%2Fwww.reddit.com%2Fr%2FTraefik%2F" target="_blank">reddit Traefik板块</a>还比较活跃，一些共性问题都可以直接找到，实在不行还可以发帖询问。</p><p data-omnivore-anchor-idx="12">Traefik 是一个为了让部署微服务更加便捷而诞生的现代HTTP反向代理、负载均衡工具。 它支持多种后台来自动化、动态配置文件设置，它是一个边缘路由器，它会拦截外部的请求并根据逻辑规则选择不同的操作方式，规则决定着这些请求到底该如何处理。Traefik 提供自动发现能力，会实时检测服务，并自动更新路由规则。</p><figure data-omnivore-anchor-idx="13"><img data-omnivore-anchor-idx="14" data-omnivore-original-src="https://cdnfile.sspai.com/2024/06/21/fad88fdea39b299b3a4a6be83bc5efa4.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sgQB3vuWqajhZdiytvZaFxyjNuUvJFVgu7THC13D_WnU/https://cdnfile.sspai.com/2024/06/21/fad88fdea39b299b3a4a6be83bc5efa4.png?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/06/21/fad88fdea39b299b3a4a6be83bc5efa4.png?imageView2/2/format/webp" data-index="0"></figure><p data-omnivore-anchor-idx="15">上图为traefik核心组件结构。请求首先由到<code data-omnivore-anchor-idx="16" class="hljs language-ebnf"><span data-omnivore-anchor-idx="17" class="hljs-attribute">Entrypoints</span></code>到达，然后分析传入的请求，查看他们是否与定义的 <code data-omnivore-anchor-idx="18" class="hljs language-ebnf"><span data-omnivore-anchor-idx="19" class="hljs-attribute">Routers</span></code> 匹配。如果匹配，则会通过一系列 <code data-omnivore-anchor-idx="20" class="hljs language-ebnf"><span data-omnivore-anchor-idx="21" class="hljs-attribute">middlewares</span></code> 处理，再到 <code data-omnivore-anchor-idx="22" class="hljs language-ebnf"><span data-omnivore-anchor-idx="23" class="hljs-attribute">Services</span></code> 上做流量转发。实际上就是很简单的流入-处理-流出的过程。</p><p data-omnivore-anchor-idx="24">所以，必不可少的三个核心组件为：</p><ul data-omnivore-anchor-idx="25"><li data-omnivore-anchor-idx="26"><a data-omnivore-anchor-idx="27" href="https://sspai.com/link?target=https%3A%2F%2Fdoc.traefik.io%2Ftraefik%2Frouting%2Fentrypoints%2F" target="_blank"><strong data-omnivore-anchor-idx="28">Entrypoints</strong></a> 是 <code data-omnivore-anchor-idx="29" class="hljs language-ebnf"><span data-omnivore-anchor-idx="30" class="hljs-attribute">Traefik</span></code> 的网络入口，它定义接收请求的接口，包括请求地址、端口、是否监听TCP或者UDP等。</li><li data-omnivore-anchor-idx="31"><a data-omnivore-anchor-idx="32" href="https://sspai.com/link?target=https%3A%2F%2Fdoc.traefik.io%2Ftraefik%2Frouting%2Frouters%2F" target="_blank"><strong data-omnivore-anchor-idx="33">Routers</strong></a> 顾名思义，就是转发，主要用于分析请求，并负责将这些请求连接到对应的服务上去，在这个过程中，Routers还可以使用Middlewares来更新请求，比如在把请求发到服务之前添加一些Headers、添加验证、修改路径等等。</li><li data-omnivore-anchor-idx="34"><a data-omnivore-anchor-idx="35" href="https://sspai.com/link?target=https%3A%2F%2Fdoc.traefik.io%2Ftraefik%2Frouting%2Fservices%2F" target="_blank"><strong data-omnivore-anchor-idx="36">Services</strong></a> 负责配置如何到达最终将处理传入请求的实际服务。</li></ul><p data-omnivore-anchor-idx="37">另外，需要额外关注的两个可选组件：</p><ul data-omnivore-anchor-idx="38"><li data-omnivore-anchor-idx="39"><a data-omnivore-anchor-idx="40" href="https://sspai.com/link?target=https%3A%2F%2Fdoc.traefik.io%2Ftraefik%2Fproviders%2Foverview%2F" target="_blank"><strong data-omnivore-anchor-idx="41">Providers</strong></a> 是基础组件，Traefik 的配置发现是通过它来实现的，它可以是协调器，容器引擎，云提供商或者键值存储文件(yaml或toml)。Traefik 通过查询 <code data-omnivore-anchor-idx="42" class="hljs language-ebnf"><span data-omnivore-anchor-idx="43" class="hljs-attribute">Providers</span></code> 的 <code data-omnivore-anchor-idx="44" class="hljs language-ebnf"><span data-omnivore-anchor-idx="45" class="hljs-attribute">API</span></code> 来查询路由的相关信息，一旦检测到变化，就会动态的更新路由。比如你用docker就可以配置好跟traefik相关的label，docker启动时就可以自动转发。</li><li data-omnivore-anchor-idx="46"><a data-omnivore-anchor-idx="47" href="https://sspai.com/link?target=https%3A%2F%2Fdoc.traefik.io%2Ftraefik%2Fmiddlewares%2Foverview%2F" target="_blank"><strong data-omnivore-anchor-idx="48">Middlewares</strong></a> 用来修改请求或者根据请求来做出一些判断（authentication, rate limiting, headers, …），中间件要附加到路由上，是一种在请求发送到你的<strong data-omnivore-anchor-idx="49">service</strong>之前（或者在服务的响应发送到客户端之前）调整请求的一种方法。</li></ul><p data-omnivore-anchor-idx="50">还有一点需要说明白的是，针对docker作为后端的traefik的配置可以通过两种渠道（实际上还可以通过命令行，但没必要），一是编写配置文件(可以yaml或toml格式)，二是通过配置docker label。区别在于有一些配置可以通过docker自动更新，不必重新改配置文件，但有些如静态配置或非docker的后端服务则只能通过配置文件完成。具体可参考<a data-omnivore-anchor-idx="51" href="https://sspai.com/link?target=https%3A%2F%2Fdoc.traefik.io%2Ftraefik%2Fgetting-started%2Fconfiguration-overview%2F" target="_blank">Traefik Configuration Documentation - Traefik</a>.</p><h2 data-omnivore-anchor-idx="52" id="ss-hId-2" hid="ss-hId-2">配置分享</h2><p data-omnivore-anchor-idx="53">由于每个人的网络和服务器状况都不一样，个人觉得手把手的那种教程没什么意义，这里就结合我的配置实例说明下大致该怎么配置。</p><p data-omnivore-anchor-idx="54">首先我是用docker-compose维护我所有容器，这里提供我的traefik配置供参考：</p><pre data-omnivore-anchor-idx="55"><code data-omnivore-anchor-idx="56" class="hljs language-dts language-less"><span data-omnivore-anchor-idx="57" class="hljs-symbol">services:</span>
<span data-omnivore-anchor-idx="58" class="hljs-symbol">&nbsp; traefik:</span>
<span data-omnivore-anchor-idx="59" class="hljs-symbol">&nbsp; &nbsp; image:</span> traefik:latest
<span data-omnivore-anchor-idx="60" class="hljs-symbol">&nbsp; &nbsp; restart:</span> always
<span data-omnivore-anchor-idx="61" class="hljs-symbol">&nbsp; &nbsp; ports:</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="62" class="hljs-meta"># 可以通过路由器映射到外网的高位端口如23333，8080端口是web界面</span>
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="63" class="hljs-string">"443:443"</span>
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="64" class="hljs-string">"7080:8080"</span>
<span data-omnivore-anchor-idx="65" class="hljs-symbol">&nbsp; &nbsp; volumes:</span>&nbsp; &nbsp; &nbsp; 
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="66" class="hljs-meta-keyword">/var/</span>run/docker.sock:<span data-omnivore-anchor-idx="67" class="hljs-meta-keyword">/var/</span>run/docker.sock <span data-omnivore-anchor-idx="68" class="hljs-meta"># 访问docker</span>
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="69" class="hljs-meta-keyword">/path/</span>to/traefik:<span data-omnivore-anchor-idx="70" class="hljs-meta-keyword">/etc/</span>traefik <span data-omnivore-anchor-idx="71" class="hljs-meta">#配置文件所在目录</span>
<span data-omnivore-anchor-idx="72" class="hljs-symbol">&nbsp; &nbsp; environment:</span>
&nbsp; &nbsp;   <span data-omnivore-anchor-idx="73" class="hljs-meta"># 这里我用的阿里云域名解析，注册证书用，这里通过环境变量设置，不考虑安全问题的话可以直接写在里面</span>
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="74" class="hljs-string">"ALICLOUD_ACCESS_KEY=${ALICLOUD_ACCESS_KEY}"</span>
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="75" class="hljs-string">"ALICLOUD_SECRET_KEY=${ALICLOUD_SECRET_KEY}"</span>
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="76" class="hljs-string">"ALICLOUD_REGION_ID=cn-beijing"</span>
<span data-omnivore-anchor-idx="77" class="hljs-symbol">&nbsp; &nbsp; extra_hosts:</span>
&nbsp; &nbsp; <span data-omnivore-anchor-idx="78" class="hljs-meta"># /etc/hosts里会添加 172.17.0.1 host.docker.internal，可以发现host网络下的docker</span>
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="79" class="hljs-string">"host.docker.internal:host-gateway"</span></code></pre><p data-omnivore-anchor-idx="80">然后是traefik的配置文件，我用的是yaml格式：</p><pre data-omnivore-anchor-idx="81"><code data-omnivore-anchor-idx="82" class="hljs language-yaml language-less"><span data-omnivore-anchor-idx="83" class="hljs-attr">global:</span>
&nbsp; <span data-omnivore-anchor-idx="84" class="hljs-attr">checkNewVersion:</span> <span data-omnivore-anchor-idx="85" class="hljs-literal">true</span>
&nbsp; <span data-omnivore-anchor-idx="86" class="hljs-attr">sendAnonymousUsage:</span> <span data-omnivore-anchor-idx="87" class="hljs-literal">true</span>

<span data-omnivore-anchor-idx="88" class="hljs-attr">entryPoints:</span>
&nbsp; <span data-omnivore-anchor-idx="89" class="hljs-attr">websecure:</span>
&nbsp; &nbsp; <span data-omnivore-anchor-idx="90" class="hljs-attr">address:</span> <span data-omnivore-anchor-idx="91" class="hljs-string">:443</span>
&nbsp; &nbsp; <span data-omnivore-anchor-idx="92" class="hljs-attr">asDefault:</span> <span data-omnivore-anchor-idx="93" class="hljs-literal">true</span> <span data-omnivore-anchor-idx="94" class="hljs-comment">#这默认为false，即所有router如不指定则同时接收所有entrypoints，true则只默认接收该entrypoint</span>

<span data-omnivore-anchor-idx="95" class="hljs-comment"># 自动注册和更新证书</span>
<span data-omnivore-anchor-idx="96" class="hljs-attr">certificatesResolvers:</span>
&nbsp; <span data-omnivore-anchor-idx="97" class="hljs-attr">lets:</span>
&nbsp; &nbsp; <span data-omnivore-anchor-idx="98" class="hljs-attr">acme:</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="99" class="hljs-attr">email:</span> <span data-omnivore-anchor-idx="100" class="hljs-string">xxx@outlook.com</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="101" class="hljs-attr">storage:</span> <span data-omnivore-anchor-idx="102" class="hljs-string">/etc/traefik/acme/acme.json</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="103" class="hljs-attr">dnsChallenge:</span>
&nbsp; &nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="104" class="hljs-attr">provider:</span> <span data-omnivore-anchor-idx="105" class="hljs-string">alidns</span>
&nbsp; &nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="106" class="hljs-attr">delayBeforeCheck:</span> <span data-omnivore-anchor-idx="107" class="hljs-number">0</span>
&nbsp; &nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="108" class="hljs-attr">resolvers:</span>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="109" class="hljs-bullet">-</span> <span data-omnivore-anchor-idx="110" class="hljs-string">"dns13.hichina.com"</span>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="111" class="hljs-bullet">-</span> <span data-omnivore-anchor-idx="112" class="hljs-string">"dns14.hichina.com"</span>

<span data-omnivore-anchor-idx="113" class="hljs-comment"># traefik日志</span>
<span data-omnivore-anchor-idx="114" class="hljs-attr">log:</span>
&nbsp; <span data-omnivore-anchor-idx="115" class="hljs-attr">level:</span> <span data-omnivore-anchor-idx="116" class="hljs-string">INFO</span>
&nbsp; <span data-omnivore-anchor-idx="117" class="hljs-attr">filePath:</span> <span data-omnivore-anchor-idx="118" class="hljs-string">/etc/traefik/log.json</span>
&nbsp; <span data-omnivore-anchor-idx="119" class="hljs-attr">format:</span> <span data-omnivore-anchor-idx="120" class="hljs-string">common</span>
&nbsp; <span data-omnivore-anchor-idx="121" class="hljs-attr">maxAge:</span> <span data-omnivore-anchor-idx="122" class="hljs-number">3</span>

<span data-omnivore-anchor-idx="123" class="hljs-comment"># 访问日志，会越来越大，可通过logrotate控制，</span>
<span data-omnivore-anchor-idx="124" class="hljs-attr">accessLog:</span>
&nbsp; <span data-omnivore-anchor-idx="125" class="hljs-attr">filePath:</span> <span data-omnivore-anchor-idx="126" class="hljs-string">/etc/traefik/access.json</span>
&nbsp; <span data-omnivore-anchor-idx="127" class="hljs-attr">format:</span> <span data-omnivore-anchor-idx="128" class="hljs-string">json</span>
&nbsp; <span data-omnivore-anchor-idx="129" class="hljs-attr">bufferingSize:</span> <span data-omnivore-anchor-idx="130" class="hljs-number">100</span>

<span data-omnivore-anchor-idx="131" class="hljs-comment"># 启用traefik面板</span>
<span data-omnivore-anchor-idx="132" class="hljs-attr">api:</span>
&nbsp; <span data-omnivore-anchor-idx="133" class="hljs-attr">insecure:</span> <span data-omnivore-anchor-idx="134" class="hljs-literal">true</span>
&nbsp; <span data-omnivore-anchor-idx="135" class="hljs-attr">dashboard:</span> <span data-omnivore-anchor-idx="136" class="hljs-literal">true</span>  

<span data-omnivore-anchor-idx="137" class="hljs-comment"># 发现服务配置，这里主要是docker，redis作用见后文</span>
<span data-omnivore-anchor-idx="138" class="hljs-attr">providers:</span>
&nbsp; <span data-omnivore-anchor-idx="139" class="hljs-attr">docker:</span>
&nbsp; &nbsp; <span data-omnivore-anchor-idx="140" class="hljs-attr">endpoint:</span> <span data-omnivore-anchor-idx="141" class="hljs-string">"unix:///var/run/docker.sock"</span>
&nbsp; &nbsp; <span data-omnivore-anchor-idx="142" class="hljs-attr">defaultRule:</span> <span data-omnivore-anchor-idx="143" class="hljs-string">'Host(`<span data-omnivore-anchor-idx="144" class="hljs-template-variable">{{ (split "-" .Name)._0 }}</span>.xxx.xxx`)'</span> &nbsp; 

&nbsp; <span data-omnivore-anchor-idx="145" class="hljs-attr">redis:</span>
&nbsp; &nbsp; <span data-omnivore-anchor-idx="146" class="hljs-attr">endpoints:</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="147" class="hljs-bullet">-</span> <span data-omnivore-anchor-idx="148" class="hljs-number">192.168</span><span data-omnivore-anchor-idx="149" class="hljs-number">.1</span><span data-omnivore-anchor-idx="150" class="hljs-number">.4</span><span data-omnivore-anchor-idx="151" class="hljs-string">:6379</span> <span data-omnivore-anchor-idx="152" class="hljs-comment"># 如果redis和traefik在一台服务器上，只需要指定redis的容器名称:端口即可</span>

  <span data-omnivore-anchor-idx="153" class="hljs-comment"># 动态配置文件，一些其他服务通过文件写在里面</span>
&nbsp; <span data-omnivore-anchor-idx="154" class="hljs-attr">file:</span>
&nbsp; &nbsp; <span data-omnivore-anchor-idx="155" class="hljs-attr">directory:</span> <span data-omnivore-anchor-idx="156" class="hljs-string">"/etc/traefik/dynamic"</span></code></pre><h3 data-omnivore-anchor-idx="157">服务实例</h3><p data-omnivore-anchor-idx="158">通过docker label配置示例：</p><pre data-omnivore-anchor-idx="159"><code data-omnivore-anchor-idx="160" class="hljs language-dts language-ruby"><span data-omnivore-anchor-idx="161" class="hljs-symbol">services:</span>
<span data-omnivore-anchor-idx="162" class="hljs-symbol">&nbsp; portainer:</span>
<span data-omnivore-anchor-idx="163" class="hljs-symbol">&nbsp; &nbsp; image:</span> portainer/portainer-ce:latest
<span data-omnivore-anchor-idx="164" class="hljs-symbol">&nbsp; &nbsp; command:</span> -H unix:<span data-omnivore-anchor-idx="165" class="hljs-comment">///var/run/docker.sock</span>
<span data-omnivore-anchor-idx="166" class="hljs-symbol">&nbsp; &nbsp; restart:</span> unless-stopped
<span data-omnivore-anchor-idx="167" class="hljs-symbol">&nbsp; &nbsp; ports:</span>
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="168" class="hljs-number">9000</span>:<span data-omnivore-anchor-idx="169" class="hljs-number">9000</span>
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="170" class="hljs-number">8000</span>:<span data-omnivore-anchor-idx="171" class="hljs-number">8000</span>
<span data-omnivore-anchor-idx="172" class="hljs-symbol">&nbsp; &nbsp; volumes:</span>
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="173" class="hljs-meta-keyword">/etc/</span>localtime:<span data-omnivore-anchor-idx="174" class="hljs-meta-keyword">/etc/</span>localtime:ro
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="175" class="hljs-meta-keyword">/var/</span>run/docker.sock:<span data-omnivore-anchor-idx="176" class="hljs-meta-keyword">/var/</span>run/docker.sock
<span data-omnivore-anchor-idx="177" class="hljs-symbol">&nbsp; &nbsp; labels:</span>
    &nbsp;   - <span data-omnivore-anchor-idx="178" class="hljs-string">"traefik.enable=true"</span> <span data-omnivore-anchor-idx="179" class="hljs-meta"># 默认true，如果不需要反代设置为false</span>
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="180" class="hljs-string">"traefik.http.services.portainer.loadbalancer.server.port=9000"</span> <span data-omnivore-anchor-idx="181" class="hljs-meta"># 如果映射了多个端口，需要指定反代到后端的端口</span>
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="182" class="hljs-string">"traefik.http.routers.portainer.tls=true"</span> <span data-omnivore-anchor-idx="183" class="hljs-meta"># 指定tls，则只接收https流量忽略http流量</span>
&nbsp; &nbsp; &nbsp; - <span data-omnivore-anchor-idx="184" class="hljs-string">"traefik.http.routers.portainer-http.middlewares=http2https@file"</span> <span data-omnivore-anchor-idx="185" class="hljs-meta"># http转https中间件</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="186" class="hljs-meta"># - <span data-omnivore-anchor-idx="187" class="hljs-string">"traefik.http.routers.portainer-http.service=portainer@docker"</span></span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="188" class="hljs-meta"># 如果不希望跳转，则将router的service设置到对应项即可</span></code></pre><p data-omnivore-anchor-idx="189">通过动态文件配置：</p><pre data-omnivore-anchor-idx="190"><code data-omnivore-anchor-idx="191" class="hljs language-yaml language-dts"><span data-omnivore-anchor-idx="192" class="hljs-attr">http:</span>
&nbsp; <span data-omnivore-anchor-idx="193" class="hljs-comment"># 两个router，分别接收http和https</span>
&nbsp; <span data-omnivore-anchor-idx="194" class="hljs-attr">routers:</span>
&nbsp; &nbsp; <span data-omnivore-anchor-idx="195" class="hljs-attr">qb:</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="196" class="hljs-attr">service:</span> <span data-omnivore-anchor-idx="197" class="hljs-string">qb</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="198" class="hljs-attr">rule:</span> <span data-omnivore-anchor-idx="199" class="hljs-string">Host(`qb.xxx.xxx`)</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="200" class="hljs-comment"># 通过中间件跳转到https</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="201" class="hljs-attr">middlewares:</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="202" class="hljs-bullet">-</span> <span data-omnivore-anchor-idx="203" class="hljs-string">http2https</span>
&nbsp; &nbsp; <span data-omnivore-anchor-idx="204" class="hljs-attr">qbhttps:</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="205" class="hljs-attr">service:</span> <span data-omnivore-anchor-idx="206" class="hljs-string">qb</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="207" class="hljs-attr">rule:</span> <span data-omnivore-anchor-idx="208" class="hljs-string">Host(`qb.xxx.xxx`)</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="209" class="hljs-comment"># 指定tls，则只接收https流量忽略http流量</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="210" class="hljs-attr">tls:</span> <span data-omnivore-anchor-idx="211" class="hljs-literal">true</span>
&nbsp; <span data-omnivore-anchor-idx="212" class="hljs-attr">middlewares:</span>
&nbsp; &nbsp; <span data-omnivore-anchor-idx="213" class="hljs-attr">http2https:</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="214" class="hljs-attr">redirectscheme:</span>
&nbsp; &nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="215" class="hljs-attr">scheme:</span> <span data-omnivore-anchor-idx="216" class="hljs-string">https</span>
&nbsp; &nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="217" class="hljs-attr">permanent:</span> <span data-omnivore-anchor-idx="218" class="hljs-literal">true</span>
&nbsp; &nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="219" class="hljs-comment"># 这里设置为映射到路由器wan的端口</span>
&nbsp; &nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="220" class="hljs-attr">port:</span> <span data-omnivore-anchor-idx="221" class="hljs-number">23333</span>
&nbsp; <span data-omnivore-anchor-idx="222" class="hljs-attr">services:</span>
&nbsp; &nbsp; <span data-omnivore-anchor-idx="223" class="hljs-attr">qb:</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="224" class="hljs-attr">loadBalancer:</span>
&nbsp; &nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="225" class="hljs-attr">servers:</span>
&nbsp; &nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="226" class="hljs-bullet">-</span> <span data-omnivore-anchor-idx="227" class="hljs-attr">url:</span> <span data-omnivore-anchor-idx="228" class="hljs-string">http://192.168.1.3:8080</span></code></pre><h2 data-omnivore-anchor-idx="229" id="ss-hId-3" hid="ss-hId-3">需要说明的问题</h2><h3 data-omnivore-anchor-idx="230">关于https跳转</h3><p data-omnivore-anchor-idx="231">跟一般网站配置方式不同的是， 由于ISP封禁443/80端口，这里通过路由器将23333端口同时接收http和https流量，这样所有访问都要显式指定端口号，则无法通过<a data-omnivore-anchor-idx="232" href="https://sspai.com/link?target=https%3A%2F%2Fdoc.traefik.io%2Ftraefik%2Frouting%2Fentrypoints%2F%23redirection" target="_blank">Traefik EntryPoints Documentation - Traefik</a>中的方式在入口处即实现http跳转https：</p><pre data-omnivore-anchor-idx="233"><code data-omnivore-anchor-idx="234" class="hljs language-dts language-properties"><span data-omnivore-anchor-idx="235" class="hljs-meta"># 封禁443和80端口后此配置不可用</span>
<span data-omnivore-anchor-idx="236" class="hljs-symbol">entryPoints:</span> 
<span data-omnivore-anchor-idx="237" class="hljs-symbol">    web:</span> 
<span data-omnivore-anchor-idx="238" class="hljs-symbol">        address:</span> :<span data-omnivore-anchor-idx="239" class="hljs-number">80</span> 
<span data-omnivore-anchor-idx="240" class="hljs-symbol">        http:</span> redirections: 
<span data-omnivore-anchor-idx="241" class="hljs-symbol">            entryPoint:</span> 
<span data-omnivore-anchor-idx="242" class="hljs-symbol">                to:</span> websecure
<span data-omnivore-anchor-idx="243" class="hljs-symbol">                scheme:</span> https
<span data-omnivore-anchor-idx="244" class="hljs-symbol">    websecure:</span> 
<span data-omnivore-anchor-idx="245" class="hljs-symbol">        address:</span> :<span data-omnivore-anchor-idx="246" class="hljs-number">443</span>
<span data-omnivore-anchor-idx="247" class="hljs-symbol">        http:</span> 
<span data-omnivore-anchor-idx="248" class="hljs-symbol">            tls:</span> 
<span data-omnivore-anchor-idx="249" class="hljs-symbol">            certResolver:</span> leresolver</code></pre><p data-omnivore-anchor-idx="250">因此，需要给每个service指定两个router，分别接收http和https流量，并在http流量后设置middleware实现跳转，需要注意跳转端口设置为路由器转发到WAN的端口。如果不希望跳转，则将router的service设置到对应项即可。</p><h3 data-omnivore-anchor-idx="251">非集群的多服务器反代</h3><p data-omnivore-anchor-idx="252">家庭网络一般很少人会用到集群，且比如emby/plex这样用到显卡加速的容器也无法配置集群。但有可能会有多个主机的情况，比如我就把homeassistant和traefik跑在树莓派里，跟多媒体相关的内容则跑在NAS里。这里如果一个个手写反代配置则比较麻烦了，可以使用<a data-omnivore-anchor-idx="253" href="https://sspai.com/link?target=https%3A%2F%2Fgithub.com%2Fjittering%2Ftraefik-kop" target="_blank">traefik-kop</a>实现自动反代到其他服务器。</p><p data-omnivore-anchor-idx="254">traefik-kop是实现docker-redis-traefik自动发现的代理程序，解决了不需要集群的多主机traefik反代问题。实现了跟traefik相同的配置逻辑，即通过label方式实现动态反代。该程序将label内容发布到redis，因此traefik端只要在provider处提供redis地址即可得到需要反代的程序配置。</p><figure data-omnivore-anchor-idx="255"><img data-omnivore-anchor-idx="256" data-omnivore-original-src="https://cdnfile.sspai.com/2024/06/21/d51714f4182263fa169f6903c265f04d.png?imageView2/2/format/webp" src="https://proxy-prod.omnivore-image-cache.app/0x0,sWUnrHENsa3HaCxqwQZdQIxds_XCJ976BQ4BQ44TKYCk/https://cdnfile.sspai.com/2024/06/21/d51714f4182263fa169f6903c265f04d.png?imageView2/2/format/webp" data-original="https://cdnfile.sspai.com/2024/06/21/d51714f4182263fa169f6903c265f04d.png?imageView2/2/format/webp" data-index="1"></figure><p data-omnivore-anchor-idx="257">有一个需要注意的点是，文档中的例子是redis和traefik在一台服务器上，因此只需要指定redis容器名称则完成反代，如果你像我一样将其布置在另一台服务器，则需要指定ip地址。</p><pre data-omnivore-anchor-idx="258"><code data-omnivore-anchor-idx="259" class="hljs language-yaml language-angelscript">&nbsp; <span data-omnivore-anchor-idx="260" class="hljs-attr">redis:</span>
&nbsp; &nbsp; <span data-omnivore-anchor-idx="261" class="hljs-attr">endpoints:</span>
&nbsp; &nbsp; &nbsp; <span data-omnivore-anchor-idx="262" class="hljs-bullet">-</span> <span data-omnivore-anchor-idx="263" class="hljs-number">192.168</span><span data-omnivore-anchor-idx="264" class="hljs-number">.1</span><span data-omnivore-anchor-idx="265" class="hljs-number">.4</span><span data-omnivore-anchor-idx="266" class="hljs-string">:6379</span> <span data-omnivore-anchor-idx="267" class="hljs-comment"># 如果redis和traefik在一台服务器上，只需要指定redis的容器名称:端口即可</span>
</code></pre><h3 data-omnivore-anchor-idx="268">其他需要说明一下的问题</h3><ul data-omnivore-anchor-idx="269"><li data-omnivore-anchor-idx="270">如果有用到host网络的容器，则需要给traefik容器添加<code data-omnivore-anchor-idx="271" class="hljs language-autohotkey">extr<span data-omnivore-anchor-idx="272" class="hljs-built_in">a_hosts</span></code>配置，在容器运行后，会在容器的<code data-omnivore-anchor-idx="273" class="hljs language-awk language-dts"><span data-omnivore-anchor-idx="274" class="hljs-regexp">/etc/</span>hosts</code>里会添加 <code data-omnivore-anchor-idx="275" class="hljs language-accesslog language-css"><span data-omnivore-anchor-idx="276" class="hljs-number">172.17.0.1</span> host.docker.internal</code>，这样traefik就可以发现host网络下的docker。</li><li data-omnivore-anchor-idx="277">traefik的访问日志，会越来越大，可通过logrotate控制，参考<a data-omnivore-anchor-idx="278" href="https://sspai.com/link?target=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F49450422%2Fhow-to-enable-logrotation-for-traefik" target="_blank">How to enable logrotation for traefik? - Stack Overflow</a>。</li><li data-omnivore-anchor-idx="279">如果容器只映射一个端口到宿主机，可以不指定转发端口，如果映射了多个端口，则需要显式指定要转发的端口。</li><li data-omnivore-anchor-idx="280">采用dnsChallenge的证书可以注册wildcard，如采用其他方式可能需要给每个子域名指定一些参数，这里由于我没用到，没详细研究。</li></ul><h2 data-omnivore-anchor-idx="281" id="ss-hId-4" hid="ss-hId-4">总结</h2><p data-omnivore-anchor-idx="282">总体来说，作为一款轻量化的边缘路由程序，Traefik给家庭自组服务器做反代还是挺合适的，之前一直对繁复的配置方式望而却步，仔细研究一番发现其实也没有很复杂，善用网络搜索，大部分问题都可以迎刃而解，希望我的文章可以对你有所帮助！</p></div></DIV></DIV>

