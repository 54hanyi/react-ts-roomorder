# 🧭 專案網站企劃書：豪華酒店預訂系統

## 一、專案目標

設計並實作一個功能完整的酒店預訂平台，提供旅客房型查詢、預訂下單、訂單紀錄與個人資料管理等功能。此專案不僅展示 RWD 響應式切版、API 串接與狀態管理，也強調前端實務邏輯與使用者體驗設計能力。

---

## 二、目標對象

- 尋找高品質住宿的旅客
- 習慣使用手機或平板查詢酒店的行動族群
- 需要快速預約並管理訂房紀錄的用戶

---

## 三、網站功能規劃

| 功能模組          | 說明                                            |
| ----------------- | ----------------------------------------------- |
| 🔎 房型查詢與篩選 | 支援依日期、房型、價格、入住人數進行查詢        |
| 🏨 房型詳情       | 提供房型圖片、價格、設備與評價等資訊            |
| 📋 預訂流程       | 預填入住人數與資料表單並送出預約                |
| 🧾 訂單管理       | 顯示用戶歷史與未來訂單資訊                      |
| 👤 個人資料       | 支援用戶資料查詢與編輯                          |
| ✅ 表單驗證       | 使用 `react-hook-form` 驗證格式與錯誤提示       |
| 📱 響應式切版     | CSS Grid / Flexbox + Media Query 完成跨裝置設計 |

---

## 四、技術架構與堆疊

- React 18 + Vite
- TypeScript + React Hooks
- Tailwind CSS + SCSS 結合風格與可維護性
- React Context API 管理使用者與訂單狀態
- axios 串接 REST API
- localStorage 管理用戶登入資料
- react-hook-form 表單驗證

---

## 五、SEO 優化與可擴充性

- 每頁設置 `<title>`、`<meta name="description">`、`<link rel="canonical">`
- 首頁加入結構化資料 JSON-LD（FAQ 格式）提升搜尋結果豐富度
- 建立 sitemap.xml 與 robots.txt 提升被搜尋引擎收錄的完整性
- 所有圖片皆設置 `alt` 描述與 `loading="lazy"`，並壓縮為 `.webp` 格式
- 後端批次處理資料庫圖片路徑，統一為 `.webp` 降低載入延遲
- 可擴充 Google Maps API、收藏功能、多語系切換

---

## 六、展示與原始碼

- 🔗 線上網站：[https://54hanyi.github.io/react-ts-roomorder/](https://54hanyi.github.io/react-ts-roomorder/)
- 🧑‍💻 GitHub 原始碼：[https://github.com/54hanyi/react-ts-roomorder](https://github.com/54hanyi/react-ts-roomorder)
