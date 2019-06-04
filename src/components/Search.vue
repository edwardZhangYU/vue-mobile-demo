<template>
    <div>
        <header class="hd">
            <Icon type="ios-arrow-back" size="40" v-tap="{methods:goBack}" class="back-btn" ></Icon>
            <div class="search-wrap">
                <Icon type="ios-search" size="40"></Icon>
                <input type="text" placeholder="目的地/酒店/景点/航班号" ref="input">
                <Icon type="ios-close-empty" size="70"></Icon>
            </div>
            <span class="search-btn" v-tap="{methods:searchFromBtn}">搜索</span>
        </header>
        <p class="tag-top">热门搜索</p>
        <div v-for="item in hotTags" :key="item" class="tag-sec" v-tap="{methods:search,item:item}">
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    data(){
        return{
            
        }
    },
    computed: {
        hotTags(){
            return this.$store.state.hotTags
        }
    },
    created() {
        this.setHotTags()
        console.log(this.$router)
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        search(e){
            console.log(e.item)
        },
        searchFromBtn(){
            console.log(this.$refs.input.value)
        },
        ...mapActions([
            'setHotTags'
        ])
    }
}
</script>
<style lang="scss" scoped>
    .hd{
        display: flex;
        align-items: center;
        height: 88px;
        border-bottom: 1px solid #ddd;
        background-color: #e6f0f7;
        .back-btn{
            width: 88px;
            height: 88px;
            font-size: 72px;
            line-height: 88px;
            text-align: center;
        }
        .search-wrap{
            height: 80%;
            flex:1;
            display: flex;
            align-items: center;
            background-color: #fff;
            border-radius: 10px;
            padding: 0 10px;
            input{
                height: 100%;
                flex: 1;
                border: none;
                background-color: transparent;
                font-size: 30px;
                text-indent: 1ex;
            }
            input::-webkit-input-placeholder{
                color: #333;
                font-size: 30px;
            }
        }
        .search-btn{
            padding: 0 20px;
            color: #099fde;
            font-size: 30px;
            line-height: 88px;
        }
    }
    .tag-top{
        padding: 20px 0 10px 20px;
        font-size: 26px;
        color: #666;
        background-color: #fafafc;
        border-bottom: 1px solid #ddd;
    }
    .tag-sec{
        border-bottom: 1px solid #ddd;
        padding: 20px 0 20px 40px;
        font-size: 30px; 
        background-color: #fff;
        &:hover{
            background-color: #fafafc;
        }
    }
</style>
