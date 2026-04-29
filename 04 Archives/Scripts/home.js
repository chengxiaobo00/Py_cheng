/**
  home.js
  功能: 開啟首頁
*/
const homePage = "!!! StartHere !!!";
const openMode_ = "preview";  // preview, source or default
const isNewPanel_ = true;  // 是否用新面板開啟

module.exports = async function home(params) {
  const app = params.app;

  const files = await app.vault.getMarkdownFiles();
  const selectedFile = files.filter(file => file.name === homePage + ".md")[0];
  if (selectedFile) {
    if (isNewPanel_) {
      const leaf = app.workspace.splitActiveLeaf();
      leaf.openFile(selectedFile, { state: {mode: openMode_} });
      app.workspace.setActiveLeaf(leaf);
    } else {
      app.workspace.activeLeaf.openFile(selectedFile)
    }
  } else {
    new Notice("找不到檔案: " + homePage + ".md", 5000)
  }
}