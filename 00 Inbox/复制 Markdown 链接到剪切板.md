---
title: "[[复制 Markdown 链接到剪切板]]"
creat date: 2025-06-07 11:29
modification date: 2025-06-07 11:29
tags: 
---

```js /templater
let wv = app.workspace.getLeavesOfType("webviewer").sort(a=>-a.activeTime)[0];
if(wv){
	let url = `[${wv.view.title}](${wv.view.webview.src}) `;
	await navigator.clipboard.writeText(url);
	new Notice('已复制');
}
```
