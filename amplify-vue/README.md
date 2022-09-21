cd amplify-vue/

// 連結後端服務
// in studio / backend
amplify pull --appId [appId] --envName staging

// npm i aws-amplify @aws-amplify/ui-vue // 舊版本、有問題
npm i aws-amplify @aws-amplify/ui-components
// 設定套件

amplify add auth
amplify push -y

npm run serve


blog-amplify-vue，部署時抓不到後端服務: 可能因素
- vue 文檔未更新部署
- 架構為 monorepo