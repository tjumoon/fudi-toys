<template>
    <div class="home-container">
        <img class="home-logo" src="../../assets/img/logo.png">
        <home-content class="home-content"></home-content>
    </div>
</template>
<script>
import HomeContent from '../../components/HomeContent'
export default {
    data() {
        return {
            value: 0
        }
    },
    components: {
        'home-content': HomeContent
    }
}
</script>

<style lang="scss" scoped>
    .home-container {
        position: relative;
        .home-logo {
            position: absolute;
            z-index: 99;
            width: 150px;
            height: 50px;
            margin: 10px 20px;
        }
        .home-content {
            display: block;
        }
    }
</style>


