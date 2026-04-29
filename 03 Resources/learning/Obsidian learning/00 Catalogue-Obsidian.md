```dataview
table tags,description,type,url
from "learning"
where contains(tags,"Obsidian-learning")
sort type desc
```