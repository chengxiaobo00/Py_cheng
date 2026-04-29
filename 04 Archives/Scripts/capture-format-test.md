```js quickadd
selection = window.getSelection();
selText = selection.toString()
console.log("selection", selText);
const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) {
        new Notice("No active file", 5000);
        return;
    }
console.log("active file=", activeFile);
new Notice("active file" + activeFile.name, 5000);
```
