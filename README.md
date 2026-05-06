# 老派 EDM 沒有神器
*Design for EDM OG, the Oldschool Edition*

這是一個專為 B2B 商業拓銷、展覽、研討會等情境設計的「純前端」輕量級 EDM（電子報）模板編輯器。所有的編輯、排版、圖片處理與打包匯出都在使用者的瀏覽器端完成，無需依賴任何後端伺服器或資料庫。

## ✨ 核心特色

1. **零伺服器依賴 (Pure Frontend)**
   - 採用 HTML / CSS / JS 撰寫，直接雙擊 `edm-oldschool.html` 即可在瀏覽器中運行。
   - 完美支援部署於任何靜態網頁伺服器（GitHub Pages, AWS S3, Cloudflare Pages 等）。

2. **Vogue 極簡排版美學**
   - 移除花俏的圓角與 Icon，回歸純文字與俐落框線的設計。
   - 引入 `Noto Serif TC` 等 Google Webfonts，打造具備重量感與雜誌質感的中文閱讀體驗。

3. **積木般的區塊編輯系統 (Block System)**
   - 內建多種實用元件：大標題、滿版主視覺、純文字段落、雙欄圖文、行動呼籲按鈕等。
   - 支援自由新增、刪除，並能透過控制列輕鬆「上移/下移」調整版面結構。

4. **強大的圖片處理與直覺操作**
   - **一鍵替換**：點擊畫布上的圖片即可上傳替換。
   - **剪貼簿支援**：選取圖片後，直接按下 `Ctrl+V` (或 `Cmd+V`) 即可將截圖貼上並自動取代。
   - 支援直接在純文字段落中插入 Inline 圖片。

5. **瀏覽器本地儲存 (Local Drafts)**
   - 透過 IndexedDB (`localforage`) 技術，使用者的每一次「儲存」都會安全地保存在當前的瀏覽器中。
   - 側邊欄會動態列出所有草稿，隨點即載入，不怕進度遺失。

6. **ZIP 封包一鍵匯出**
   - 點擊匯出時，系統會自動將所有 Base64 圖片抽離，統一命名並存放至 `images/` 資料夾。
   - 同步生成乾淨、相容各大 Email 客戶端的 `edm.html`。
   - 最終打包成一個 `.zip` 檔案，方便直接上傳至企業內部的行銷發信系統。

## 🛠 技術堆疊

- **核心**：Vanilla JavaScript, HTML5, CSS3
- **所見即所得編輯器**：[TinyMCE 6](https://www.tiny.cloud/) (透過 CDN 載入)
- **本地儲存**：[localForage](https://localforage.github.io/localForage/) (IndexedDB Wrapper)
- **檔案打包**：[JSZip](https://stuk.github.io/jszip/) & [FileSaver.js](https://github.com/eligrey/FileSaver.js)
- **字體**：Google Fonts (Noto Serif TC, Helvetica Neue)
- **分析追蹤**：Google Analytics 4

## 🚀 如何使用

1. **開啟工具**：使用電腦版瀏覽器（強烈建議使用 Chrome 或 Edge）打開 `edm-oldschool.html`。
2. **選擇範本**：從左側欄選擇適合的活動範本（研討會/論壇、拓銷團、展覽、訓練課程）。
3. **設定主旨**：在畫面上方輸入「信件主旨」，這將成為網頁 Title 以及信件的預覽摘要 (Preheader)。
4. **編輯內容**：
   - 點擊文字即可叫出工具列進行修改。
   - 點擊圖片後可選擇新檔案，或直接 `Ctrl+V` 貼上圖片。
   - 點擊區塊右側的選單可排序或刪除。
   - 點擊最下方的「新增區塊」來擴充內容。
5. **儲存草稿**：點擊上方的「儲存」，進度會保留在您的瀏覽器側邊欄中。
6. **匯出封包**：點擊左下方的「匯出EDM封包」，將下載一個包含 HTML 與所有圖檔的 `.zip` 壓縮檔。解壓縮後即可匯入您的發信系統。

## 📞 聯繫與支援

本工具作為 EDM 系統的補強方案，若有任何相關問題或功能建議，請透過 Microsoft Teams 聯繫作者：[cslin@taitra.org.tw](msteams://teams.microsoft.com/l/chat/0/0?users=cslin@taitra.org.tw)