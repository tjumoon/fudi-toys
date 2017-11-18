<template>
    <div>
        <Carousel v-model="value"
            :autoplay="settings.autoplay"
            :autoplay-speed="settings.autoplaySpeed"
            :dots="settings.dots"
            :radius-dot="settings.radiusDot"
            :trigger="settings.trigger"
            :arrow="settings.arrow">
            <CarouselItem class="carousel-item">
                <img class="carousel-img" src="../assets/img/c-main.jpg">
                <div class="home-content">
                    <p class="home-text">致力于打造高端的一站式毛绒玩具礼品定制服务企业</p>
                    <Button class="home-button" @click="toRouter(`/hello`)">点击了解</Button>
                </div>
                
            </CarouselItem>
            <CarouselItem class="carousel-item">
                <img class="carousel-img" src="../assets/img/c-custom.jpg">
                <div class="custom-content">
                    <div class="custom-company">
                        <div class="company-info">
                            <img class="company-logo" src="../assets/img/company-logo.png">
                            <span class="company-value">科技创新企业</span>
                        </div>
                        <div></div>
                    </div>
                    <div class="custom-logo-bg">
                        <img class="custom-logo" src="../assets/img/custom-logo.png">
                    </div>
                    <Button class="custom-button" @click="toRouter(`/custom`)">定制专区</Button>
                </div>
                
            </CarouselItem>
            <CarouselItem class="carousel-item">
                <img class="carousel-img" src="../assets/img/c-year.jpg">
                <Button class="carousel-button" @click="toRouter(`/year`)"></Button>
            </CarouselItem>
            <CarouselItem class="carousel-item">
                <img class="carousel-img" src="../assets/img/c-home.jpg">
                <Button class="carousel-button" @click="toRouter(`/house`)"></Button>
            </CarouselItem>
            <CarouselItem class="carousel-item">
                <img class="carousel-img" src="../assets/img/c-wedding.jpg">
                <Button class="carousel-button" @click="toRouter(`/wedding`)"></Button>
            </CarouselItem>
            <CarouselItem class="carousel-item">
                <img class="carousel-img" src="../assets/img/c-doll.jpg">
                <Button class="carousel-button" @click="toRouter(`/doll`)"></Button>
            </CarouselItem>
            <CarouselItem class="carousel-item">
                <img class="carousel-img" src="../assets/img/c-comic.jpg">
                <Button class="carousel-button" @click="toRouter(`/comic`)"></Button>
            </CarouselItem>
            <CarouselItem class="carousel-item">
                <img class="carousel-img" src="../assets/img/c-about.jpg">
                <Button class="carousel-button" @click="toRouter(`/about`)"></Button>
            </CarouselItem>
        </Carousel>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      value: 1,
      settings: {
        autoplay: false,
        autoplaySpeed: 5000,
        dots: "inside",
        radiusDot: false,
        triger: "click",
        arrow: "hover"
      }
    };
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
.carousel-item {
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
  .custom-content {
    position: absolute;
    left: 18%;
    top: 0;
    width: 64%;
    height: 100%;
    border: 1px solid red;
    .custom-company {
      .company-info {
        .company-logo {
          width: 0.8rem;
          height: 0.8rem;
        }
        .company-value {
          color: #fff;
          height: 0.8rem;
          font-family: "STKaiti";
          font-size: 0.2rem;
          line-height: 0.8rem;
          background: red;
        }
      }
    }
    .custom-logo-bg {
      position: absolute;
      width: 1.8rem;
      height: 1.8rem;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 0.9rem;
      left: 50%;
      top: 50%;
      margin-left: -0.9rem;
      margin-top: -0.9rem;
      .custom-logo {
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        left: 50%;
        top: 50%;
        margin-left: -0.75rem;
        margin-top: -0.75rem;
      }
      .custom-button {
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
        margin-left: -9%;
        margin-top: 10%;
      }
    }
  }
}
</style>


