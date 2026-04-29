/**
  select_file.js
  功能: open frequently-used files quickly
*/
let quickAddApi;
let openMode_ = "preview";  // preview, source or default
const today_ = window.moment().format("YYYY-MM-DD_ddd");

const isNewPanel_ = true;  // 是否開啟在新面板?
const BACK_ = "⬅️ 回上層";
const filesMenu_ = {
  "!!! StartHere !!!": {  // 沒有下層選單時檔名存於category
    category: "!!! StartHere !!!"
  },
  "📆 本日筆記": {
    category: today_
  },
  "🌐 >常用服務": {
    category: "service",
    openMode: "preview",
    filesMenu_Options: {
      "1. 首頁 !!! StartHere !!!": "!!! StartHere !!!",
      "2. 網路服務": "!WS網路服務",
    }
  },
  "💎 >Obsidian筆記": {
    category: "Obsidian",
    openMode: "source",
    filesMenu_Options: {
      "1. Obsidian Notes": "Obsidian Notes",
      "2. Obsidian Plugins Notes": "Obsidian Plugins Notes",
      "3. Obsidian Dataview Notes": "Obsidian Dataview Notes",
      "4. Obsidian Templater Notes": "Obsidian Templater Notes",
      "5. Obsidian QuickAdd Notes": "Obsidian QuickAdd Notes",
      "6. Obsidian CSS Notes": "Obsidian CSS Notes",
      "7. Obsidian FAQ": "Obsidian FAQ",
    }
  },
  "🔣 >AutoHotkey": {
    category: "AutoHotkey",
    openMode: "source",
    filesMenu_Options: {
      "1. AutoHotkey Notes": "AutoHotkey Notes",
      "2. AutoHotkey Tutorial": "AutoHotkey Tutorial",
    }
  },
  "🪟 >Windows": {
    category: "Windows",
    openMode: "source",
    filesMenu_Options: {
      "Windows Notes": "Windows Notes",
      "Windows 11 Notes": "Windows 11 Notes",
      "WSL2 Notes": "WSL2 Notes",
    }
  }
};

module.exports = async function select_file(params) {
  const {app, quickAddApi: {suggester}} = params;
  quickAddApi = params.quickAddApi;

  let sFile = await openMainMenu(filesMenu_);
  if (!sFile) return;

  const files = await app.vault.getMarkdownFiles();
  const selectedFile = files.filter(file => file.name === sFile + ".md")[0];
  if (selectedFile) {
    if (isNewPanel_) {
      const leaf = app.workspace.splitActiveLeaf();
      leaf.openFile(selectedFile, { state: {mode: openMode_} });
      app.workspace.setActiveLeaf(leaf);
    } else {
      app.workspace.activeLeaf.openFile(selectedFile);
    }
  } else {
    new Notice("找不到檔案: " + sFile+".md", 5000)
  }
}

async function openMainMenu(filesMenu_) {
  const {suggester} = quickAddApi;
  const options = Object.keys(filesMenu_);

  const choice = await suggester(options, options);
  if (!choice) return;
  
  if (filesMenu_[choice].filesMenu_Options == undefined) {
    return filesMenu_[choice].category;
  }
  const secondLevelMenu = filesMenu_[choice];
  console.log(secondLevelMenu);
  let file = await openSubMenu(secondLevelMenu);
  return file;
}

async function openSubMenu(topLevel) {
  const {suggester} = quickAddApi;
  const displayOptions = [...Object.keys(topLevel.filesMenu_Options), BACK_];
  const valueOptions = [...Object.values(topLevel.filesMenu_Options), BACK_];
  openMode_ = topLevel.openMode;  // 此類檔案的開啟模式

  const choice = await suggester(displayOptions, valueOptions);
  if (!choice) return;

  if (choice === BACK_) {
    return await openMainMenu(filesMenu_);
  }
  return choice;
}