<template>
    <div>
        
        <PageHeader />
        <!-- <button @click="payMoney" class="dad">父+100</button> -->
        <button @click="filter(1)">✦</button>
        <button @click="filter(2)">✦✦</button>
        <button @click="filter(3)">✦✦✦</button>
        <button @click="filter(4)">✦✦✦✦</button>
        <button @click="filter(5)">✦✦✦✦✦</button>
        <button @click="clear()">X</button>
        <div v-if="displayList.length === 0">
            Loading...
        </div>
        <div v-else>
            <ProductList
                v-for="prod in displayList"
                :key="prod.id"
                :item="prod"
            />
        </div>
        
        
        <!--src不要加分號--->
        <!-- <img src="@/assets/images/japan_asakusa_street.jpg" alt=""> -->
        <!--v-bind:src資源，所以不要加分號--->
        <!-- <img :src="parseIcon('japan_asakusa_street.jpg')" alt="">
        <img :src="parseIcon('japan_fukuoka-airport.jpg')" alt="">
        <img :src="parseIcon('japan_hakata-station.jpg')" alt="">
        <img :src="parseIcon('japan_kyoto-street.jpg')" alt=""> -->
        <!-- <div v-for="num in 3" :key="num">
            <img :src="parseIcon(imgs)" alt="">
        </div> -->

        <!-- <div class="card" 
        v-for="num in imgs"
        :key="num"
        :style="{'background-image': 'url(`${parseIcon(imgs)}`)'}"
        >
        桜が咲いた!
        </div> -->

        <!-- :style="{'background-image': `url(${parseIcon(imgs)})`}" -->
        <!-- <div class="card" 
        v-for="item in menu"
        :key="item.id"
        >
            <div>
                <img :src="parseIcon(item.img)" alt="">
            </div>
            <div>
                {{ item.name }}
                <span v-for="star in item.rating" :key="star">✦</span>
                ${{ item.price }}
            </div>
            <div>
                <button>+</button>
            </div> -->
        <!-- 桜が咲いた2! -->
        <!-- </div> -->
    </div>
</template>
<!---------------------------------->

<script>
import PageHeader from '@/components/home/PageHeader.vue'
import ProductCard from '@/components/layout/ProductCard.vue'
import ProductList from '@/components/layout/ProductList.vue'
import sakuraImg from '@/assets/images/japan_asakusa_street.jpg'
    export default {
        components: {
            PageHeader,
            ProductCard,
            ProductList
        },
        data() {
            return {
                product: [],
                displayList: [],
            }
        },
        mounted(){
            fetch("/product.json")
            .then(data => data.json())
            .then(res => {
                // 備份用
                this.product = res
                // 顯示用
                this.displayList = res
            })
        },
        methods: { 
            clear(){
                this.displayList = this.product
            },
            filter(star){
                console.log(star);
                // this.displayList.filter(item=>{
                //     return item.rating === star
                //     // console.log(item);
                // })
                this.displayList = this.product.filter(item=>{
                    return item.rating === star
                    // console.log(item);
                })
            },
            payMoney(){
                this.pay += 100
            },
            parseIcon(file){ 
                // 指到src || ..的意思是"回到上一層""
                return new URL(`../assets/images/${file}`, import.meta.url).href 
            } 
        }
    }
</script>

<!---------------------------------->
<style lang="scss">
    img {
        width: 200px;
        height: auto;
    }
    .card {
        width: 300px;
        height: 200px;
        // background-image: url('@/assets/images/japan_asakusa_street.jpg');
        background-size: cover;
        border-radius: 50px;
        text-align: center;
        padding: 20px 0 0;
    }
    .dad {
        background-color: #ffdd00;
        padding: 10px 30px;
        border-radius: 18px;
    }
</style>