```button
name Input
type link
action obsidian://advanced-uri?filepath=Input
color blue
```
^button-Input

```button
name Output
type link
action obsidian://advanced-uri?filepath=Output
color blue
```
^button-Output

```button
name Tasks
type link
action obsidian://advanced-uri?filepath=Tasks
color blue
```
^button-Tasks

```button
name Outcome
type link
action obsidian://advanced-uri?filepath=Outcome
color blue
```
^button-Outcome

```button
name Inbox
type link
action obsidian://advanced-uri?filepath=Inbox
color yellow
```
^button-Inbox

[Here is an overview of the Button Maker options.](https://github.com/shabegom/buttons)

```button
name Open Previous Daily Note
type command
action Periodic Notes: Open previous daily note
color yellow 
```
^button-previous

```button
name To the Forum Batman!
type link
action https://forum.obsidian.md/
color blue
```
^button-forum

```button
name New Meeting
type note(Meeting, split) template
action Meeting Note Template
```
^button-meeting

```button
name Weread
type command
action Custom Frames: Open WeChat
customColor [[F0FFFF]]
customTextColor [[008B8B]]
```
^button-dte2

[在线调色](https://www.matools.com/color)

```button
name Make an Hourly Note
type note(<% tp.date.now("HH:MM") %>) template
action Template_00
templater true
```

```button
name PKMer
type command
action 在新面板中打开光标处链接
```
^button-pkmer

`button-pkmer`

```button
name MyCSS
type command
action 插入附件
color yellow
class my button
```
^button-kfg7

```button
name Make an Hourly Note
type note(<% tp.date.now("HH:MM") %>) template
action Log Template Note
templater true
```

```button
name Make an Hourly Note
type note(16:20) template
action Log Template Note
templater true
```

```button
name Add Current Time
type line(1) text
action <% tp.date.now("HH:mm:ss") %>
replace [1,1]
templater true
```

[Style settings 为你的主题添加更多自定义能力](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/obsidian-style-settings/)


```button  
name 新建文档  
type note(日记<% tp.date.now("YYYY-MM-DD") %>,split) text  
action <% tp.date.now("YYYY-MM-DD") %> 的日记  
templater true
```
^button-text

```button
name Open folder
type link
action file:C:/Users/momit/Documents
color blue
```
^button-folder
