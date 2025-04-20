# 🏨 專案名稱：豪華酒店預訂系統

使用者可透過此系統查詢並預訂理想的酒店房型，並管理個人資料與歷史訂單，打造順暢完整的訂房體驗！

---

## 🔎 專案背景與動機

本專案模擬實際酒店訂房流程，從搜尋房型、預訂確認、到訂單紀錄與個人資料管理。  
開發過程中我希望練習 **前端資料處理邏輯、Context 狀態管理、form 驗證與條件查詢實作**，並結合 Tailwind CSS + SCSS 進行 UI 客製化，打造易用且具專業感的飯店預訂平台。

---

## 🧪 使用技術與堆疊

- **React 18 + Vite**  
  使用 Vite 提供快速熱更新與開發環境，React 建立 SPA 結構。

- **TypeScript**  
  靜態型別幫助控管資料與元件傳參，避免錯誤。

- **Tailwind CSS + SCSS**  
  結合 utility-first 的設計與自定義 SCSS 實現高彈性樣式設計。

- **React Hooks**  
  使用 `useState`、`useEffect`、`useContext` 管理狀態與觸發操作。

- **React Context**  
  建立全域狀態（如 BookingContext、UserContext）整合預訂流程。

- **axios**  
  串接 RESTful API，處理房型與訂單查詢、建立請求。

- **localStorage**  
  儲存簡易用戶資料，或暫存預約資訊。

- **react-hook-form**  
  控制輸入欄位、驗證資料格式與顯示錯誤提示。

---

## 🧩 功能亮點

- ✅ **房型查詢與篩選**：可瀏覽與過濾不同類型房間，查看價格、描述與設施
- ✅ **預訂與入住人數選擇**：填寫入住人數、日期與房型資訊後送出訂單
- ✅ **訂單紀錄管理**：可查詢過往訂房記錄與即將入住資訊
- ✅ **個人資料編輯**：支援編輯姓名、電話、地址等個人資訊，便於訂單確認
- ✅ **表單驗證與資料回填**：整合 `react-hook-form` 確保輸入正確且流程順暢

---

## 🧱 專案架構簡介

📁 /components
└─ UI 元件，如 BookingBox、RoomCard、UserInfo 等

📁 /contexts
└─ 全域狀態管理，如 BookingContext、UserContext

📁 /pages
└─ 各主頁面組件，如 Home.tsx、Rooms.tsx、UserProfile.tsx

📁 /utils
└─ API 請求與錯誤處理等工具函式

📁 /assets
└─ 靜態資源與圖示，例如房型圖片、icon

---

## ⚙️ 開發過程中的挑戰與解決

- 💡 **跨元件資料同步困難：**  
  使用 React Context 統一管理預訂與使用者資訊，避免 props 傳遞混亂並提升維護性。

- 💡 **表單驗證機制構建：**  
  利用 `react-hook-form` 設計訂房與編輯資料表單，加入必填限制與錯誤提示強化用戶體驗。

- 💡 **樣式整合與可維護性：**  
  Tailwind 建立元件基礎風格，自定義 SCSS 實現主題顏色與細部動畫，達到一致且美觀的介面呈現。

---

## 🎓 學習收穫

- 🔹 熟悉 Context 與 Hook 的結合，實作跨頁狀態同步機制
- 🔹 強化 axios 串接 API 與錯誤處理邏輯的實作經驗
- 🔹 熟練 react-hook-form 表單控制與驗證應用
- 🔹 提升 UI/UX 設計能力，學會用原子化與客製樣式達到一致的畫面設計
- 🔹 熟悉 Vite 建構工具，加速開發與部署流程

---

## 🔍 SEO 與效能優化

- 使用 `react-helmet-async` 管理每頁 `<title>`、`<meta name="description">`、`<link rel="canonical">` 等標籤。
- 首頁加入 **JSON-LD FAQ 結構化資料**，協助搜尋引擎理解內容。
- 建立 `sitemap.xml` 與 `robots.txt` 於 `public/`，利於搜尋引擎索引。
- 所有圖片皆加上 `loading="lazy"` 與 `alt` 描述屬性提升 UX 與無障礙。
- 圖片資源轉為 `.webp` 格式，降低檔案大小，加快網站載入。
- 後端同步批次更新資料庫中房型圖片路徑為 .webp。

---

## 🚀 線上展示與原始碼連結

- 🔗 [👉 線上 Try ](https://54hanyi.github.io/react-ts-roomorder/)
- 🧑‍💻 [GitHub 原始碼](https://github.com/54hanyi/react-ts-roomorder)
