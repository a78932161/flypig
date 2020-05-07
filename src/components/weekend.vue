<template>
    <div>
        <div class="title">周末推荐</div>
        <div class="item" v-for="(item,index) in itemList" :key="index">
            <img class="item-img" :src="item.img" alt="">
            <div class="item-info">
                <p class="item-title">
                    {{item.title}}
                </p>
                <p class="item-desc">
                    {{item.desc}}
                </p>
            </div>
        </div>
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
                    }
                ]
            }
        },

    }
</script>

<style lang="scss" scoped>
    .title {
        line-height: .8rem;
        background: #eee;
    }
    .item{
        .item-img{
            width: 100%;
            height: 3rem;
        }
        .item-info{
            padding: .2rem;
            .item-title{

            }
            .item-desc{

            }
        }
    }

</style>