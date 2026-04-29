---
id: c132be4c-b735-4e2b-ab30-8885e222b8f3
title: |
  VBA Excel快速返回首页
author: |
  VBAHOME
tags:
  - VBA
date_saved: 2023-12-31 08:13:12
date_published: 2023-12-30 23:00:00
---

# VBA Excel快速返回首页
[[Omnivore]]

[Read on Omnivore](https://omnivore.app/me/https-mp-weixin-qq-com-s-s-ys-y-03-ro-c-23-hv-53-fw-5-pu-nq-18cbd37996f)
[Read Original](https://mp.weixin.qq.com/s/sYsY03roC23hv53Fw5puNQ)

原创 VBAHOME  VBA编程与Excel技巧 _2023-12-30 23:00_ _发表于广东_ 

**需求背景：**

 2023年马上结束了，需要制作2024带日期的月份表格，有首页和1到12月份的分表。为了操作和管理方便，在首页生成了表的目录，带超级链接。在各月份中增加了一键返回首页的超链接。

具体操作步骤如下：

【1】第一个工作表修改名字为首页。  

【2】添加1月到12月的表格。  

【3】将月份的天数据写入每个月的表格。  

【4】生成带链接的月份表格目录。  

【5】在所有月份表增加返回首页快捷方式。  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sqpJb2AnzGH8agj-QOCaIazjXkYtihZYxGV3z6SR3PQ8/https://mmbiz.qpic.cn/mmbiz_png/nzlxZ7zBHMb39JSf96E5OTTnt5A72lTk3mj236j9n2O8icJka99IoZxm6dvj0dtf6TjVSQ4tfFjOOvLFKH9MUgw/640?wx_fmt=png&from=appmsg)

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,sY9pihWS-3dJULgGcHKU2q_NUjfbiZxGJJJomH6Qs1yU/https://mmbiz.qpic.cn/mmbiz_png/nzlxZ7zBHMb39JSf96E5OTTnt5A72lTk0qKYeDfnM4w0ib2TJMzHW9bFhb4nBaIgRqOlcpPYNrFjd4kXnS0EK5Q/640?wx_fmt=png&from=appmsg)

**操作步骤：**  

在VBE界面插入》模块，然后将以下函数和过程代码放在窗体模块内。

1、新建1月份到12月份的表

`'------------------------------------------------------------------------------------------------------------` `'来源：www.vbahome.top           ` `'功能：新建1月份到12月份的表` `'------------------------------------------------------------------------------------------------------------` `Sub WorksheetAdd()` `    Dim i As Integer` `    Dim wb As Workbook, sht As Worksheet` `    Set wb = ActiveWorkbook` `    For i = 1 To 12` `      Set sht = wb.Worksheets.Add(, wb.Worksheets(wb.Worksheets。count))` `      sht.Name = i & "月"` `    Next i` `End Sub`

2、生成每月的天数据

`'------------------------------------------------------------------------------------------------------------` `'来源：www.vbahome.top           ` `'功能：生成每月的天数据` `'------------------------------------------------------------------------------------------------------------` `Sub WriteDateDay()` `    Dim i As Integer, j As Integer` `    Dim wb As Workbook, sht As Worksheet` `    Dim d As Date` `    Set wb = ActiveWorkbook` `    On Error Resume Next` `    For i = 1 To 12` `       Set sht = wb.Worksheets(i & "月")` `       sht.Cells(2, 1) = "序号"` `       For j = 1 To 31` `            d = "2024/" & i & "/" & j` `            If Err.Number = 0 Then` `                sht.Cells(2, 1 + j) = d` `                sht.Cells(2, 1 + j).NumberFormatLocal = "d"` `            Else` `                Exit For` `            End If` `            Err.Clear` `       Next` `    Next i` `End Sub`

3、生成表目录及返回首页链接

`'------------------------------------------------------------------------------------------------------------` `'来源：www.vbahome.top           ` `'功能：生成表目录及返回首页链接` `'------------------------------------------------------------------------------------------------------------` `Sub CreateHyperlinks()` `    Dim i As Integer` `    Dim wb As Workbook, sht As Worksheet` `    Set wb = ActiveWorkbook` `    For i = 1 To 12` `       Set sht = wb.Worksheets(i & "月")` `       '在首页生成带超链接的表目录` `       With wb.Worksheets(1)` `        .Cells(i + 1, 2).Hyperlinks.Add Anchor:=.Cells(i + 1, 2), Address:="", SubAddress:="'" & sht.Name & "'!A1", TextToDisplay:=sht.Name` `       End With` `        '在每月表设置快速返回首页超链接` `         sht.Cells(1, 1).Hyperlinks.Add Anchor:=sht.Cells(1, 1), Address:="", SubAddress:="'首页'!A1", TextToDisplay:="返回首页"` `    Next i` `End Sub`

**总结重点：**

1、.NumberFormatLocal = "d"，单元格自定格式d表示日期的天。

2、 使用 On Error Resume Next 来判断日期赋值语句是否报错，来判断月份的天数。

3、.Hyperlinks.Add , SubAddress:的参数是关键链接表格式：'表名称！A1'。

本示例运行环境为Windows10，office2019，示例经过Excel 2019 测试运行OK。 您觉得本文对您有帮助，请分享给你的朋友。  

![图片](https://proxy-prod.omnivore-image-cache.app/0x0,snZeMdIw8_2MjrVPl_LBa-Qi-VKQXUumdEbVFvlSzSmo/https://mmbiz.qpic.cn/mmbiz_gif/nzlxZ7zBHMYCLq6W58y5H9KOxVM83IOP2U9DAVctTbCzYLgB16FA6QtpvctaHfWQPlLzJkbIP5XFsWIF9epylA/640?wx_fmt=gif)

**感谢您的阅读，如果对VBA、VSTO及office技巧感兴趣，请搜索微信公众号** **VBAHOME** **或扫描以下二维码关注**。**网址：** **www.vbahome.top**

![](https://proxy-prod.omnivore-image-cache.app/0x0,sztHen2zKglbooc8jnRanh8F2QK9kejIH_eS7fuz0zAU/data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"%3E%0A%3Cpath d=\"M12.8974 15.5585L14.9719 13.484L16.2447 14.7568L12.3519 18.6497C12.1566 18.8449 11.84 18.8449 11.6448 18.6497L7.75195 14.7568L9.02475 13.484L11.0974 15.5567L11.1 4.99976L12.9 5.0002L12.8974 15.5585Z\" fill=\"black\" opacity=\"0.3\"/%3E%0A%3C/svg%3E) 继续滑动看下一个 

