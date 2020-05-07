<template>
    <div class="wrapper">
        <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" :key="banner" v-for="banner in banners">
                    <img class="swiper-img" :src="banner">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                banners: [
                    'http://gw.alicdn.com/tfs/TB1qtyOgsKfxu4jSZPfXXb3dXXa-1125-352.jpg_790x10000Q75.jpg_.webp',
                    'http://gw.alicdn.com/imgextra/i3/116/O1CN01E2BizW1CjAXb6tRqY_!!116-0-luban.jpg_790x10000Q75.jpg_.webp',
                    'http://gw.alicdn.com/tfs/TB14AhxE4D1gK0jSZFyXXciOVXa-1125-352.jpg_790x10000Q75.jpg_.webp',
                ],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                }
            }
        },
        mounted() {
            this.mySwiper.slideTo(3, 1000, false)
        }
    }
</script>

<style lang="scss" scoped>
    .swiper-container{
        --swiper-theme-color: #ff6600;
        --swiper-pagination-color: #ccc;/* 两种都可以 */
    }

    .wrapper {
        overflow: hidden;
        width: 100%;
        height: 0;
        background-color: #ccc;
        padding-bottom: 31.25%;
    }

    .swiper-img {
        width: 100%;
        height: 100%;
    }
</style>