<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont iconfanhui back-icon"></span>
        </div>
        <div class="header-input">
            <span class="iconfont iconsousuo"></span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            城市
            <span class="iconfont iconjiantouxia1 arrow-icon"></span>
        </div>
    </div>


</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    @import "~assets/style/varibles";

    .header {
        line-height: .86rem;
        display: flex;
        background: $bgcolor;
        color: #fff;

        .header-left {
            width: .64rem;
            float: left;
            text-align: center;
            .back-icon {
                font-size: .4rem;
            }
        }

        .header-input {
            flex: 1;
            height: .64rem;
            line-height: .64rem;
            background: #fff;
            border-radius: .1rem;
            margin: .12rem 0 0 .2rem;
            padding-left: .2rem;
            color: #ccc;
        }

        .header-right {
            width: 1.24rem;
            float: right;
            text-align: center;

            .arrow-icon {
                margin-left: -.04rem;
                font-size: .24rem;
            }
        }
    }

</style>