# 內頁測試區 不會合併之後會刪除
6/11課程內容 的測試
## 代碼說明 (code寫在哪? )


在 router/index.js , views/blogView.vue,  views/testInnerView.vue,  
內頁和一覽頁 都是共同用 data.json裡blog的部分。
😅blogView因為還有寫了分頁功能，所以有點複雜。實際上只看@click 如何進入路由部分就好
!幾乎都是用composition api
### >>router/index.js :加入路由路徑跟路由參數
### >>views/blogView.vue  :從一覽頁的項目卡片→前往→具有對應資料的內頁
### >>views/testInnerView.vue  :顯示和路由參數，對應資料