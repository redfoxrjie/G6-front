<template>
    <div class="data">
        <div class="container">
            <p>這裡的路由id是{{ itemIndex }}</p>
            <hr>
            <p>資料id是{{ itemsData[itemIndex].id }}</p>
            <h3>{{ itemsData[itemIndex].name }}</h3>
            <h3>{{ itemsData[itemIndex].date }}</h3>
            <h3>喜愛人數{{ itemsData[itemIndex].likes }}</h3>
            <h3>觀看人數{{ itemsData[itemIndex].viewers }}</h3>
        <hr>


            <!-- <p>全部資料有{{ itemsData.length }}筆,路由超過{{ itemsData.length }}就沒有那些資料喔</p> -->
            <p>資料內容id是從1開始</p>

            <p>(下面資料編號從1開始 id= 路由編號+1)</p>
            <!-- <h3>{{ itemsData[itemIndex] }}</h3> -->
             <p>放置按鈕是為了偵測當頁面沒有整個刷新 透過按鈕切換路由資料也會跟著更新 (團專不一定會用到)</p>
            <div class="btnsHome">
            <button v-for="(item,n) in 30" @click="goToSubpage(n)" >去路由{{n}}</button>                
            </div>
            <button class="backto" @click="goToPage('blog')">回到文章一覽</button>

        </div>
    </div>
</template>
<style scoped>
.data {
    padding-top: 200px;
}
</style>
<script setup>
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';


const router = useRouter()
const route = useRoute()
// 我幾乎都用ref(雙向綁定) 我覺得比較不會出現當在別處改變資料，使用資料的地方卻沒有同步更新的情形
const itemIndex = ref(route.params.id);  //紀錄目前頁面路由'參數' (route.paramas.id)
const itemsData = ref([]);  //紀錄目前頁面fetch後資料的陣列 
const fetchData = async () => { //函式 fetch
    const response = await fetch('/json/data.json');
    const data = await response.json();
    itemsData.value = data.blog
    console.log(itemsData.value)
}

// 函式fetch在什麼階段執行?

// 1.  執行在beforeMount(因為是用composition 寫法，所以是onBeforeMount)
// 指定在哪個生命階段lifecycle 執行fetch 
fetchData();
onBeforeMount(()=>{
    // fetchData();
    itemIndex.value = route.params.id
    console.log('hellow from onM')

})
// fetchData()
// 2. 這是錯誤嘗試 1跟2 選1個試看看錯誤訊息長怎樣，用onMounted進入其他路由參數有時會報錯(找不到fetch來的資料)
// 我改成onBeforeMount就沒有遇到問題
onMounted(() => {
    fetchData();
    itemIndex.value = route.params.id
    console.log('hellow from onM')
})


// 3.多餘的小功能： watch會隨時關注頁面的某個變數，當變數變化時會觸發執行
// 這裡我在測試，當透過點擊畫面按鈕改變路由(而不是從輸入網址處改變整個重整)，也透過監聽改成新內容
watch(()=>route.params.id, 
()=>{
    itemIndex.value = route.params.id
    console.log('hellow from watcher') //可以從console看一些什麼時候出現這個watcher的訊息
})

// 4 路由切換方法
function goToPage(i){
    router.push(`/${i}`)
}
function goToSubpage(i){
    router.push(`/testInner/${i}`)
}

</script>
<style scoped>
button{
    background: #cf9292;
    padding:4px;
    margin: 5px;
    font-size: 12px;
}
button.backto{
    display: inline-block;
    margin: auto;
    width: 100px;
    font-size: 15px;
}
</style>