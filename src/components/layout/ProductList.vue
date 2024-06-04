<template>
    <div class="total" v-if="item">
        <!-- {{ item.img }} -->
        <img v-if="item.img"
        :src="parseIcon(item.img)" alt=""
        >
        {{ item.name || ''}}
        ${{ item.price || 0}}
        {{ item.rating || 0}}<span v-for="star in item.rating" :key="star">✦</span>
        <button @click="$emit('add')" class="son">子+100</button>
    </div>
</template>

<script>
export default {
    props: ['item'],
    methods: { 
        payMoney(){
            this.pay += 100
        },
        parseIcon(file){ 
            // 指到src || ..的意思是"回到上一層""
            return new URL(`../../assets/images/${file}`, import.meta.url).href 
        } 
    }
}
</script>

<style>
    button {
        font-size: 1rem;
    }
    .son {
        background-color: #ff4422;
        padding: 10px 30px;
        border-radius: 18px;
    }
    .total {
        font-size: 32px;
    }
</style>