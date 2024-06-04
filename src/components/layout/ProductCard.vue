<template>
    <div>
        <div
            class="card" 
        >
            <div>
                <img :src="parseIcon(product.img)" alt="">
            </div>
            <div>
                {{ product.name }}
                <span v-for="star in product.rating" :key="star">✦</span>
                ${{ product.price }}
            </div>
            <div>
                <button>+</button>
            </div>
        </div>
        <ProductList: item="product[0]"/>
        <ProductList: item="product[1]"/>
    </div>
</template>
<!---------------------------------->

<script>
import sakuraImg from '@/assets/images/japan_asakusa_street.jpg'
    export default {
        props: ['money', 'name'],
        data() {
            return {
                // 如果key跟value完全相同，可以省略key
                product: [{
                    id: 1,
                    name: '淺草櫻花',
                    img: 'japan_asakusa_street.jpg',
                    price: 20000,
                    rating: 5
                },
                {
                    id: 2,
                    name: 'XXXX',
                    img: 'japan_asakusa_street.jpg',
                    price: 20000,
                    rating: 3
                },
                {
                    id: 3,
                    name: 'OOOO',
                    img: 'japan_asakusa_street.jpg',
                    price: 20000,
                    rating: 4
                }],
                
            }
        },
        methods: { 
            parseIcon(file){ 
                // 指到src || ..的意思是"回到上一層""
                return new URL(`../../assets/images/${file}`, import.meta.url).href 
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
</style>