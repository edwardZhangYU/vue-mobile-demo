<template>
    <div>
        <div class="hd-top">
            <div class="search-wrap">
                <router-link to="/search">
                    <Icon type="ios-search" size="40"></Icon>
                    <input type="text" placeholder="搜索：目的地/酒店/经典/航班号">
                </router-link>
            </div>
            <div class="my-wrap">
                <Icon type="ios-person-outline" size="50"></Icon>
                <span>我 的</span>
            </div>
        </div>
        <div class="swiper">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide><img src="https://dimg04.c-ctrip.com/images/zg0v12000000tg0ld06E0.png"></swiper-slide>
                <swiper-slide><img src="http://pic40.nipic.com/20140412/18428321_144447597175_2.jpg"></swiper-slide>
                <swiper-slide><img src="http://pic37.nipic.com/20140113/8800276_184927469000_2.png"></swiper-slide>
            </swiper>
        </div>
        <ul class="classify">
            <li>
                <router-link to="/hotService">
                    <div></div>
                    <span>攻略·景点</span>
                </router-link>
            </li>
            <li>
                <div class="img2"></div>
                <span>门票·玩乐</span>
            </li>
            <li>
                <div class="img3"></div>
                <span>美食林</span>
            </li>
            <li>
                <div class="img4"></div>
                <span>周边游</span>
            </li>
            <li>
                <div class="img5"></div>
                <span>一日游</span>
            </li>
        </ul>
        
        <ul class="kuaijie">
            <li class="row-1">
                <div class="bg-1-1"><span>酒店</span></div>
                <div class="bg-1-2"><span>民宿客栈</span></div>
                <div class="bg-1-3"><span>机票·火车票·酒店</span></div>
            </li>
            <li class="row-2">
                <div class="bg-2-1"><span>机票</span></div>
                <div class="bg-2-2"><span>火车票</span></div>
                <div class="bg-2-3"><span>汽车·船票</span></div>
                <div class="bg-2-4"><span>专车·租车</span></div>
            </li>
            <li class="row-3">
                <div class="bg-3-1"><span>旅游</span></div>
                <div class="bg-3-2"><span>高铁游</span></div>
                <div class="bg-3-3"><span>邮轮游</span></div>
                <div class="bg-3-4"><span>定制游</span></div>
            </li>
        </ul>
        
        <ul class="subnav-entry">
            <li>
                <div class="bg-1"></div>
                <span>自由行</span>
            </li>
            <li>
                <div class="bg-2"></div>
                <span>WIFI电话卡</span>
            </li>
            <li>
                <div class="bg-3"></div>
                <span>保险·签证</span>
            </li>
            <li>
                <div class="bg-4"></div>
                <span>换钞·购物</span>
            </li>
            <li>
                <div class="bg-5"></div>
                <span>当地向导</span>
            </li>
            <li>
                <div class="bg-6"></div>
                <span>特价机票</span>
            </li>
            <li>
                <div class="bg-7"></div>
                <span>礼品卡</span>
            </li>
            <li>
                <div class="bg-8"></div>
                <span>申卡·借钱</span>
            </li>
            <li>
                <div class="bg-9"></div>
                <span>旅拍</span>
            </li>
            <li>
                <div class="bg-10"></div>
                <span>更多</span>
            </li>
        </ul>

        <div class="sales-box">
            <header class="sale-hd">
                <div>更多</div>
            </header>
            <section>
                <div >
                    <img src="https://dimg04.c-ctrip.com/images/300e0q000000g7qjl6A46_C_360_202.jpg" alt="" srcset="">
                    <p class="dec">三亚5日自由行(5钻)·超5W人爆单款【热门度假型酒店合辑·4晚连住】5-6月出发享酒店全年冰点价·端午热卖ing | 趁暑期尚未调价·清凉一夏早计划！</p>
                    <p class="p-dec">
                        <span class="unit">¥</span>
                        <span class="price">1200</span>
                        <span class="price-d">起</span>
                    </p>
                </div>
                <div class="right-sec">
                    <div class="top-sec">
                        <ul>
                            <li>千款特价</li>
                            <li>走过路过不错过</li>
                        </ul>
                        <img src="http://pic.c-ctrip.com/platform/h5/home/pic-tmh-02.png" alt="" srcset="">
                    </div>
                    <div class="bottom-sec">
                        <div class="">
                        <ul>
                            <li>境外精选</li>
                            <li>限时抢购</li>
                        </ul>
                        <img src="http://pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png" alt="" srcset="">
                        </div>
                        <div>
                            <ul>
                                <li>周边玩乐</li>
                                <li>欢乐度周末</li>
                            </ul>
                            <img src="http://pic.c-ctrip.com/platform/h5/home/pic-tmh-04.png" alt="" srcset="">
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
        <ul class="tool-sec">
            <li>
                <Icon type="ios-telephone-outline" size="45"></Icon>
                <span>电话预订</span>
            </li>
            <li>
                <Icon type="ios-download-outline" size="45"></Icon>
                <span>下载客户端</span>
            </li>
            <li>
                <Icon type="ios-person-outline" size="45"></Icon>
                <span>我的</span>
            </li>
        </ul>
        <footer>
            <p>©<label id="copyno">2019</label>携程旅行｜<a href="http://www.miibeian.gov.cn/" class="link-icp">沪ICP备08023580号</a></p>
        </footer>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    components: {
        swiper,
        swiperSlide
    },
     data() {
      return {
        swiperOption: {
          
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.swiper.slideTo(0, 1000, true)
    }
}
</script>
<style lang="scss" scoped>
@import '../sassFuncs/px2rem.scss';
@mixin line(){
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
}
    .hd-top{
        position: fixed;
        top: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        width: 100%;
        height: 88px;
        background-color: #fff;
        padding-left: 12px;
        .search-wrap{
            position: relative;
            flex:1;
            height: 56px;
            line-height: 56px;
            border-radius: 30px;
            margin: 0 15px;
            background: #fff;
            a{
                display: flex;
                align-items: center;
            }
            i{
                margin:0 20px;
            }
            input{
                flex: 1;
                font-size: 30px;
                border: none;
                background-color: transparent;
            }
            input::-webkit-input-placeholder{
                font-weight: bold;
                background-color: #fff;
            }
        }
        .my-wrap{
            width: 50px;
            margin: 0 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            span{
                font-size: 20px;
            }
        }
    }
    .swiper{
        height: 360px;
        img{
            width: 100%;
            max-width: 800px;
            max-height: 360px;
        }
    }
    .classify{
        position: relative;
        top: -65px;
        z-index: 1;
        height: 128px;
        border-radius: 16px;
        display: flex;
        justify-content: space-around;
        margin: 0 20px;
        background-color: #fff;
        box-shadow: 0 2px 6px rgba(0,0,0,.08);
        div{
            width: 80px;
            height: 80px;
            background: url(//pic.c-ctrip.com/platform/h5/home/home-fivemain-sprite2x@v7.15.png) no-repeat;
        }
        .img2{
            background-position: 0 -76px;
        }
        .img3{
            background-position: 0 -159px;
        }
        .img4{
            background-position: 0 -235px;
        }
        .img5{
            background-position: 0 -319px;
        }
        li >a{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        span{
            font-size: px2rem(25);
            color: #222;
        }
    }
    .kuaijie{
        padding: 0 20px;
        margin-top: -45px;
        div{
            height: 130px;
            line-height: 130px;
            background-position: right bottom;
            background-repeat: no-repeat;
            border-left: 2px solid #fff;
            text-align: center;
        }
        span{
            color: #fff;
            font-size: 28px;
            font-weight: bold;
        }
        li{
            display: flex;
        }
        .row-1{
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            background: linear-gradient(to right,#fa5956,#fb8650 54%);
        }
        .bg-1-1{
            width: 31%;
            background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-hotel@v7.15.png);
            background-size: 73px auto;
            border-top-left-radius: 16px;
            text-align: left;
            span{
                margin-left: 20px;
            }
        }
        .bg-1-2{
            width: 23%;
            background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-minsu@v7.15.png);
            background-size: 37px auto;
        }
        .bg-1-3{
            flex: 1;
            background-image: url(http://pic.c-ctrip.com/platform/h5/home/grid-nav-items-jhj@v7.15.png);
        }
        .row-2{
            background: linear-gradient(to right,#4b8fed,#53bced);
        }
        .bg-2-1{
            width: 31%;
            background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-flight@v7.15.png);
            background-size: 79px auto;
            text-align: left;
            span{
                margin-left: 20px;
            }
        }
        .bg-2-2,.bg-2-3,.bg-2-4{
            flex: 1;
        }
        .row-3{
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            background: linear-gradient(to right,#34c2aa,#6cd557);
        }
        .bg-3-1{
            width: 31%;
            text-align: left;
            span{
                margin-left: 20px;
            }
            background-image: url(//pic.c-ctrip.com/platform/h5/home/grid-nav-items-travel@v7.15.png);
            background-size: 94px auto;
        }
        .bg-3-2,.bg-3-3,.bg-3-4{
            flex:1
        }
    }
    .subnav-entry{
        display: flex;
        flex-wrap: wrap;
        padding: 0 20px;
        margin-bottom: 20px;
        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 20%; 
            height: 110px;   
        }
        div{
            width: 56px;
            height: 56px;
            background: url(http://pic.c-ctrip.com/platform/h5/home/un_ico_subnav2x@v7.152.png) no-repeat;
        }
        span{
            font-size: px2rem(25);
            color: #222;
        }
        .bg-2{
            background-position: 0 -56px;
        }
        .bg-3{
            background-position: 0 -112px;
        }
        .bg-4{
            background-position: 0 -168px;
        }
        .bg-5{
            background-position: 0 -224px;
        }
        .bg-6{
            background-position: 0 -280px;
        }
        .bg-7{
            background-position: 0 -336px;
        }
        .bg-8{
            background-position: 0 -392px;
        }
        .bg-9{
            background-position: 0 -448px;
        }
        .bg-10{
            background-position: 0 -504px;
        }
    }
    .sales-box{
        padding: 0 15px;
        @include line;
        background-color: #fff;
        .sale-hd{
            position: relative;
            height: 88px;
            line-height: 88px;;
            font-size: 25px;
            &::before{
                content: '';
                display: inline-block;
                position: absolute;
                left: 40px;
                top: 50%;
                width: 79px;
                height: 15px;
                background: url(http://pic.c-ctrip.com/h5/home/un_home_text.png) no-repeat;
                background-size: 79px auto;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%) scale(2,2);

            }
            div{
                width: 100px;
                height: 40px;
                line-height: 40px;
                margin-top: 20px;
                border-radius: 20px;
                float: right;
                color: #fff;
                text-align: center;
                background: linear-gradient(to right,#ff4e63,#ff6cc9);
            }
        }
        section{
            display: flex;
            > div{
                height: 410px;
                flex:1;
                margin-right: 4px;
                margin-bottom: 8px;
                background-color: #f9f9f9;
            }
            .dec{
                height: 102px;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                padding: 16px;
                font-size: 30px;
                color: #222;
            }
            .p-dec{
                padding: 16px;
            }
            .unit{
                font: 24px/1.5 arial;
                vertical-align: baseline;
                color: #ff495e;
            }
            .price,.price-d{
                color: #ff495e;
                font-size: 35px;
                line-height: 1;
                font-weight: 400;
            }
            .price-d{
                font-size: 26px;
            }
            .right-sec{
                display: flex;
                flex-wrap: wrap;
                background-color: #fff;
            }
            .top-sec{
                display: flex;
                align-items: center;
                width: 100%;
                background-color: #f9f9f9;
                margin-bottom: 8px;
                ul{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    // align-items: center;
                    flex: 1;
                    li:first-child{
                        color: #fd3a51;
                        letter-spacing: 5px;
                        font-weight: 700;
                        font-size: 30px;
                    }
                    li:last-child{
                        color: #444;
                        font-size: 25px;
                    }
                }
                img{
                    width: 108px;
                    height: 108px;
                }
            }
            .bottom-sec{
                width: 100%;
                display: flex;
                justify-content: center;
                text-align: center;
                div{
                    flex: 1;
                    background-color: #f9f9f9;
                }
                div:first-child{
                    margin-right: 4px;
                }
                li{
                    color: #444;
                    font-size: 25px;
                }
                li:first-child{
                    color: red;
                    font-size: 30px;
                }
            }
        }
    }
    .tool-sec{
        display: flex;
        height: 116px;
        border-top: 1px solid #000;
        justify-content: space-around;
        align-items: center;
        @include line;
        li{
            display: flex;
            flex-direction: column;
            flex:1;
            text-align: center;
            span{
                font-size: 25px;
            }
        }
    }
    footer>p{
        font-size: 30px;
        padding: 20px;
        text-align: center;
    }
</style>
