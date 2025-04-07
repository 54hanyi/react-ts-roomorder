# 🏨 專案名稱：豪華酒店預訂系統

使用者可透過此系統查詢並預訂理想的酒店房型，並管理個人資料與歷史訂單，打造順暢完整的訂房體驗！

---

## 🔎 專案背景與動機

本專案模擬實際酒店訂房流程，從搜尋房型、預訂確認、到訂單紀錄與個人資料管理。  
開發過程中我希望練習 **前端資料處理邏輯、Context 狀態管理、form 驗證與條件查詢實作**，並結合 Tailwind CSS + SCSS 進行 UI 客製化，打造易用且具專業感的飯店預訂平台。

---

## 🧪 使用技術與堆疊

| 技術                    | 說明                                                      |
| ----------------------- | --------------------------------------------------------- |
| **React 18 + Vite**     | 使用 Vite 作為快速開發環境，React 建立 SPA 架構           |
| **TypeScript**          | 靜態型別檢查，提升程式穩定性與開發效率                    |
| **Tailwind CSS + SCSS** | 結合原子化與自定義樣式，實現精緻 UI 設計                  |
| **React Hooks**         | 使用 `useState`、`useEffect`、`useContext` 處理邏輯與狀態 |
| **React Context**       | 建立 `BookingContext`、`UserContext` 管理全域狀態         |
| **axios**               | 串接 RESTful API，處理房型與訂單資料請求                  |
| **localStorage**        | 簡易資料持久化，例如暫存使用者資訊                        |
| **react-hook-form**     | 驗證表單輸入資料，提升輸入流程的安全性與體驗              |

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

## 🚀 線上展示與原始碼連結

- 🔗 [👉 線上 Try ](https://54hanyi.github.io/react-ts-roomorder/)
- 🧑‍💻 [GitHub 原始碼](https://github.com/54hanyi/react-ts-roomorder)
