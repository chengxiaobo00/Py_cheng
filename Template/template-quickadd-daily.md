---
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified:
aliases:
  - <% tp.file.title %>
mood:
  "{ VALUE:😃, 😡, 😭, 😁 }":
weather: <% tp.user.天氣_台北市() %>
tags:
  - daily
---
# <% tp.file.title %> 

<!--% tp.web.random_picture("1600x900", tp.file.title) %-->

## 未完成任務
```tasks
not done
due before today
```

## 未完成之無期限任務
```tasks
path includes 020-Daily
path does not include todo
path does not include <% tp.file.title %>
not done
no due date
```

## 明天到期任務
```tasks
due on tomorrow
```
## 昨天完成任務
```tasks
done on yesterday
```

----

<%*
function getWeek() {
  var d = new Date();
  var n = d.getDay();
  return n;
}
let week = getWeek();
if (week == 1 || week == 4) {
%>
## 會議

<%* } %>
<% tp.file.cursor(1) %>
## 任務

## 每日檢核清單
### 一日之計在於晨
- [ ] 檢查Email
- [ ] 檢查即時通訊 (QQ)
- [ ] 檢查即時通訊 (Discord)
- [ ] 每日閱讀（開源中國，Obsidian論壇，YouTube）
- [ ] 檢查公告
- [ ] 檢查待辦事項

### 今日事今日畢
- [ ] 檢查Email (@<% tp.date.now("YYYY-MM-DD") %> 18:10)
- [ ] 更新待辦事項狀態 (@<% tp.date.now("YYYY-MM-DD") %> 18:12)
- [ ] 檢查明天待辦事項 (@<% tp.date.now("YYYY-MM-DD") %> 18:14)

### 明天到期任務
```tasks
due on tomorrow
```

## 其他事項


＃＃