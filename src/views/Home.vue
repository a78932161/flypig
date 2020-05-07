<template>
    <div>
        <homeHeader></homeHeader>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
    import homeHeader from "components/header";
    import homeSwiper from "components/swiper"
    import homeIcons from "components/icons"
    import homeRecommend from "components/recommend"
    import homeWeekend from "components/weekend"

    export default {
        data() {
            return {}
        },
        components: {
            homeHeader,
            homeSwiper,
            homeIcons,
            homeRecommend,
            homeWeekend
        }
    }
</script>
