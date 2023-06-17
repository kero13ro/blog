# 前端架構 demo
node version: 16 以上 
## 目標
- 綜合所有版型至單一專案，並可即時動態切換
- 抽離每個版型畫面邏輯、樣式變數，figma、zeplin 匯出後直接使用


## 架構初擬
src/template： 所有版型、膚色的邏輯
  - config.js: 與 tailwind 格式相同，可由 figma、zeplin 匯出。
  - custom.css 為覆蓋用的客製化樣式，微調時可由後台上傳，不需打版。
  - 圖片資料夾：依照同樣架構放置圖片，即可提換圖片。




## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## todo
- 變數檔案切換模板時，潛在衝突
- build tree shaking
- 手機版、電腦版使用不同版型、膚色
