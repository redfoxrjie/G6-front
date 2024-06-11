# 內頁測試分支 不合併到dev，之後會移除
針對6/11課程內容 的測試 路由參數

## 代碼說明

在 router/index.js , views/blogView.vue,  views/testInnerView.vue,  
內頁和一覽頁 都是共同用 data.json裡blog的部分。


-  router/index.js : 加入路由路徑跟路由參數 
-  views/blogView.vue  : 從一覽頁的項目卡片→前往→具有對應資料的內頁 
-  views/testInnerView.vue  : 內頁顯示和路由參數，對應資料改變內容


😅blogView因為還有寫了分頁功能，所以有點複雜。實際上只看@click 如何進入路由部分就好

😅是用composition api寫法哦

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTdvcWdpbGEzdWsxczd4cHliMzZkcWZyeWcwMGJ5YWd5bnEyNmF1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/B4dt6rXq6nABilHTYM/giphy.webp" width="100" height="100">


## 編輯md檔(markdown)的參考資料
[基本撰写和格式语法](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)

[Markdown 文件](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#paragraphs)

