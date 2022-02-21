# Lala Lee Hisiko FrontEnd Test

依照 [設計圖](https://www.figma.com/file/N7kbbBKWVP8PkfhReu8WGg/Untitled?nodeid=0%3A1) 及 [API 說明文件](https://app.swaggerhub.com/apis-docs/ethan0526/HiSKIO/1.0.0-oas3) 實作功能與樣式 

## 使用技術規格

1. Nuxt @ v2.15.8  
2. Tailwind v2.2.19

## 建置方式

```bash
# 安裝套件
$ npm install

# 啟動開發環境 localhost:3333
$ npm run dev

# 編譯&執行
$ npm run build
$ npm run start
```

![npm run dev](/static/readme/npm-run-dev.png)

## 操作說明及擷圖

Step 1. 開啟 http://localhost:3000/

無論否是登入，首頁都會顯示募資課程資料

![step-1](/static/readme/step-1.png)

Step 2. 按下登入按鈕，輸入 HiSKIO 帳密 

![step-2](/static/readme/step-2.png)

Step 3. 登入完成後，首頁會顯示已加入購物車資料及募資課程資料

![step-3](/static/readme/step-3.png)

Step 4. 在募資課程資料按下加入購物車，若加入成功會出現在上方購物車清單

![step-4](/static/readme/step-4.png)

Step 5. 使用 DevTools 切換小版顯示，檢示 購物車資料及課程資料的 RWD切版設計

![step-5](/static/readme/step-5.png)

Step 6. 按下漢堡選單，可列出手機版的Menu

![step-6](/static/readme/step-6.png)

Step 7. 手機版的Menu，有實作簡易登出功能

## 專案目錄結構

```bash
├─ api # 呼叫後端RESTful的API
├─ assets # 圖片、樣式、字形等要 build 的東西
│  └─ icons # 網站使用的 ICON SVG 圖片
├─ components # 元件放置位置 (Nuxt)
├─ layouts # 頁面版型 (Nuxt)
├─ mocks # Mock相關資料
├─ pages # 頁面 - 依據資料夾產生路由 (Nuxt)
├─ plugins # 全站JavaScript插件  (Nuxt)
├─ static # 靜態資源  (Nuxt)
├─ store # 狀態管理  (Nuxt)
├─ tests # 單元測試
├─ .editorconfig 專案編輯器寫作風格試定
├─ .env 設定專案的環境變數
├─ .eslintrc.js ESLint 配置設定
├─ .gitignore 不需要Git版本控制的忽略清單
├─ .prettierignore 不需要格式化的檔案/目錄的忽略清單
├─ .prettierrc Prettierrc 配置設定
├─ jsconfig.json文件 JavaScript語言服務提供的功能選項
├─ nightwatch_globals.js Nightwatch E2E 全域設定外部檔案
├─ nightwatch.conf.js Nightwatch E2E 配置設定
├─ nuxt.config.js Nuxt 配置設定
├─ package.json 專案 npm 套件 配置設定
└─ tailwind.config.js Tailwind 配置設定

```

* Nuxt 結構目錄配置

  請參考 [Nuxt.js 官方文件](https://nuxtjs.org)