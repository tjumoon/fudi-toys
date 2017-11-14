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
                <Button class="carousel-button" @click="toRouter(`/hello`)"></Button>
            </CarouselItem>
            <CarouselItem class="carousel-item">
                <img class="carousel-img" src="../assets/img/c-custom.jpg">
                <Button class="carousel-button" @click="toRouter(`/custom`)"></Button>
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
      value: 0,
      settings: {
        autoplay: true,
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
          })
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
    .carousel-button {
        position: absolute;
        width: 22%;
        height: 12%;
        background: rgba(255, 255, 255, 0.0);
        border: 0px solid;
        left: 50%;
        top: 50%;
        margin-left: -11%;
        margin-top: 12%;
    }
}
</style>


