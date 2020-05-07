<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item" v-for="(item,index) in itemList" :key="index">
                <div class="item-img-wrapper">
                    <img class="item-img"
                         :src="item.img"
                         alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">
                        {{item.title}}
                    </p>
                    <p class="item-desc">
                        {{item.desc}}
                    </p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                itemList: [
                    {
                        img: '//img1.qunarzz.com/sight/p0/1704/71/71a3d23c24494bd2a3.water.jpg_256x160_d5bc3624.jpg',
                        title: ' 南浔古镇',
                        desc: '水乡古镇九十九，不如南浔走一走',
                    },
                    {
                        img: '//img1.qunarzz.com/sight/p0/1704/71/71a3d23c24494bd2a3.water.jpg_256x160_d5bc3624.jpg',
                        title: ' 南浔古镇',
                        desc: '水乡古镇九十九，不如南浔走一走',
                    },
                    {
                        img: '//img1.qunarzz.com/sight/p0/1704/71/71a3d23c24494bd2a3.water.jpg_256x160_d5bc3624.jpg',
                        title: ' 南浔古镇',
                        desc: '水乡古镇九十九，不如南浔走一走',
                    },
                    {
                        img: '//img1.qunarzz.com/sight/p0/1704/71/71a3d23c24494bd2a3.water.jpg_256x160_d5bc3624.jpg',
                        title: ' 南浔古镇',
                        desc: '水乡古镇九十九，不如南浔走一走',
                    },
                    {
                        img: '//img1.qunarzz.com/sight/p0/1704/71/71a3d23c24494bd2a3.water.jpg_256x160_d5bc3624.jpg',
                        title: ' 南浔古镇',
                        desc: '水乡古镇九十九，不如南浔走一走',
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "assets/style/varibles";

    .title {
        line-height: .8rem;
        background: #eee;
    }

    .item {
        overflow: hidden;
        display: flex;
        height: 1.9rem;
        border-bottom: .01rem solid #eee;

        .item-img {
            width: 1.7rem;
            height: 1.7rem;
            padding: .1rem;
        }

        .item-info {
            flex: 1;

            .item-title {
                line-height: .54rem;
                font-size: .32rem;
                @include fontOmit;
            }

            .item-desc {
                line-height: .4rem;
                color: #ccc;
                @include fontOmit;
            }

            .item-button {
                line-height: .44rem;
                margin-top: .16rem;
                background-color: #ff9300;
                padding: 0 .1rem;
                border-radius: .06rem;
                color: #fff;
            }
        }
    }
</style>