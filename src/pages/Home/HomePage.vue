<template>
  <div class="home-container">
      <img class="carousel-img" src="http://ozpiibtse.bkt.clouddn.com/c-main.jpg">
        <div class="home-content">
            <p class="home-text">致力于打造高端的一站式毛绒玩具礼品定制服务企业</p>
            <Button class="home-button" @click="toRouter(`/custom`)">点击了解</Button>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    toRouter(route) {
      this.$router.push({
        path: route
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home-container {
  position: relative;
  width: 100%;
  height: 100%;
  .carousel-img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
  .home-content {
    width: 100%;
    height: 100%;
    .home-text {
      position: absolute;
      color: #fff;
      font-family: "STKaiti";
      text-align: center;
      top: 50%;
      width: 100%;
      font-size: 0.375rem;
    }
    .home-button {
      position: absolute;
      width: 2.8rem;
      height: 1rem;
      text-align: center;
      font-family: "STKaiti";
      font-weight: bold;
      background: rgba(255, 255, 255, 0);
      border: 4px solid #fff;
      border-radius: 0.5rem;
      color: #fff;
      font-size: 0.45rem;
      left: 50%;
      top: 50%;
      margin-left: -1.4rem;
      margin-top: 1.8rem;
    }
  }
}
</style>

