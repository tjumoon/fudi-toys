<template>
  <div class="wedding-container">
      <img class="carousel-img" src="../../assets/img/c-wedding.jpg">
        <div class="wedding-content">
            <div class="wedding-header">
                <Row>
                <Col span="12" class="head-info">
                    <img class="head-logo" src="../../assets/img/wedding-logo1.png">
                    <span class="head-value">每一次，都是用心之作</span>
                </Col>
                <Col span="12" class="head-info">
                    <img class="head-logo" src="../../assets/img/wedding-logo2.png">
                    <span class="head-value">定制属于自己的婚礼</span>
                </Col>
                </Row>
            </div>
            <h1 class="wedding-title">镌刻着我们的永恒</h1>
            <div class="wedding-logo-bg">
                <img class="wedding-logo" src="../../assets/img/wedding-logo.png">
            </div>  
            <p class="wedding-desc"> 这个非常甜蜜专区，我们的初衷是以创意的产品，优良的品质，见证您一生的幸福。</p> 
            <div class="wedding-bottom">
                <Button class="wedding-button" @click="toRouter(`/wedding`)">婚庆专区</Button>
            </div>
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
.wedding-container {
    width: 100%;
    height: 100%;
    position: relative;
    .carousel-img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
    }
    .wedding-content {
        position: absolute;
        position: absolute;
        width: 60%;
        left: 20%;
        top: 0;
        .head-info {
            padding: 0.5rem 0.25rem;
            float: left;
            .head-logo {
                width: 0.6rem;
                height: 0.6rem;
                vertical-align: middle;
            }
            .head-value {
                vertical-align: middle;
                margin-left: 0.125rem;
                color: #fff;
                font-family: "STKaiti";
                font-size: 0.2rem;
            }
        }
        .wedding-title {
            color: #fff;
            font-family: "STXingkai";
            font-size: 0.8rem;
            text-align: center;
        }
        .wedding-logo-bg {
            width: 1.8rem;
            height: 1.8rem;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 0.9rem;
            margin: 0 auto;
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
            .wedding-logo {
                width: 1.5rem;
                height: 1.5rem;
                margin: 0.15rem 0.15rem;
            }
        }
        .wedding-desc {
            width: 7.5rem;
            text-align: center;
            margin: 0 auto;
            color: #fff;
            font-family: "STKaiti";
            font-size: 0.3rem;
            font-weight: bold;
            padding: 0.25rem 0.25rem;
        }
        .wedding-bottom {
            width: 2.8rem;
            height: 1rem;
            margin: 0 auto;
            .wedding-button {
            width: 100%;
            height: 100%;
            font-family: "STKaiti";
            font-weight: bold;
            background: rgba(255, 255, 255, 0);
            border: 4px solid #fff;
            border-radius: 0.5rem;
            color: #fff;
            font-size: 0.45rem;
        }
        }
    }
}

</style>

