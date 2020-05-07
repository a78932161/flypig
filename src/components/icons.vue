<template>
    <div>
        <div class="icons">
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" :key="index" v-for="(page,index) in pages">

                        <div class="icon" v-for="(item,index1) in page">
                            <div class="icon-img">
                                <img class="icon-img-content" :src="item" :key="index1">
                            </div>
                            <p class="icon-desc">热门</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {},
                imgList1: [
                    'http://gw.alicdn.com/tfs/TB1Nq50tqL7gK0jSZFBXXXZZpXa-210-171.png_110x10000.jpg_.webp',
                    'http://gw.alicdn.com/tfs/TB1n256tAL0gK0jSZFxXXXWHVXa-210-171.png_110x10000.jpg_.webp',
                    'http://gw.alicdn.com/tfs/TB1_Ie3tEz1gK0jSZLeXXb9kVXa-210-171.png_110x10000.jpg_.webp',
                    'http://gw.alicdn.com/tfs/TB1v9m8tAT2gK0jSZFkXXcIQFXa-210-171.png_110x10000.jpg_.webp',
                    'http://gw.alicdn.com/tfs/TB1OIC3tvb2gK0jSZK9XXaEgFXa-210-171.png_110x10000.jpg_.webp',
                    'http://gw.alicdn.com/tfs/TB1Nq50tqL7gK0jSZFBXXXZZpXa-210-171.png_110x10000.jpg_.webp',
                    'http://gw.alicdn.com/tfs/TB1OIC3tvb2gK0jSZK9XXaEgFXa-210-171.png_110x10000.jpg_.webp',
                    'http://gw.alicdn.com/tfs/TB1Nq50tqL7gK0jSZFBXXXZZpXa-210-171.png_110x10000.jpg_.webp',
                    'http://gw.alicdn.com/tfs/TB1n256tAL0gK0jSZFxXXXWHVXa-210-171.png_110x10000.jpg_.webp',
                    'http://gw.alicdn.com/tfs/TB1_Ie3tEz1gK0jSZLeXXb9kVXa-210-171.png_110x10000.jpg_.webp',
                    'http://gw.alicdn.com/tfs/TB1v9m8tAT2gK0jSZFkXXcIQFXa-210-171.png_110x10000.jpg_.webp',
                    'http://gw.alicdn.com/tfs/TB1OIC3tvb2gK0jSZK9XXaEgFXa-210-171.png_110x10000.jpg_.webp',
                ],
            }
        },
        computed: {
            pages() {
                let pages = [];
                this.imgList1.forEach((item, index) => {
                    let page = Math.floor(index / 8);
                    if (!pages[page]) {
                        pages[page] = [];
                    }
                    pages[page].push(item);
                });
                return pages
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "assets/style/varibles";

    .icons > > > .swiper-wrapper {
        height: 0;
        padding-bottom: 50%;
    }

    .icons {
        height: 0;
        padding-bottom: 50%;
        overflow: hidden;
        margin-bottom: 0.4rem;
    }

    .icon {
        position: relative;
        overflow: hidden;
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 25%;

        .icon-img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: .44rem;
            box-sizing: border-box;
            padding: .1rem;

            .icon-img-content {
                display: block;
                margin: 0 auto;
                height: 100%;
            }
        }

        .icon-desc {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: .44rem;
            line-height: .44rem;
            text-align: center;
            color: $darkTextcolor;
            @include fontOmit;
        }
    }
</style>