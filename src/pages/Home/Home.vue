<template>
    <div class="home-container">
        <img class="home-logo" src="../../assets/img/logo.png">
        <Carousel v-model="value"
            :autoplay="settings.autoplay"
            :autoplay-speed="settings.autoplaySpeed"
            :dots="settings.dots"
            :radius-dot="settings.radiusDot"
            :trigger="settings.trigger"
            :arrow="settings.arrow">
            <CarouselItem>
                <home-page></home-page>
            </CarouselItem>
            <CarouselItem>
                <custom-page></custom-page>
            </CarouselItem>
            <CarouselItem>
                <year-page></year-page>
            </CarouselItem>
            <CarouselItem>
                <house-page></house-page>
            </CarouselItem>
            <CarouselItem>
                <wedding-page></wedding-page>
            </CarouselItem>
            <CarouselItem>
            </CarouselItem>
            <CarouselItem>
            </CarouselItem>
            <CarouselItem>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
import HomePage from "./HomePage"
import CustomPage from '../Custom/CustomPage'
import YearPage from '../Year/YearPage'
import HousePage from '../House/HousePage'
import WeddingPage from '../Wedding/WeddingPage'
export default {
  data() {
    return {
      value: 0,
      settings: {
        autoplay: false,
        autoplaySpeed: 6000,
        dots: "inside",
        radiusDot: false,
        triger: "click",
        arrow: "hover"
      }
    };
  },
  components: {
    "home-page": HomePage,
    'custom-page': CustomPage,
    'year-page': YearPage,
    'house-page': HousePage,
    'wedding-page': WeddingPage
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  position: relative;
  .home-logo {
    position: absolute;
    z-index: 99;
    width: 1.875rem;
    height: 0.625rem;
    margin: 0.125rem 0.25rem;
  }
  .home-content {
    display: block;
  }
}
</style>


