<template>
  <div class="house-container">
      <img class="carousel-img" src="http://ozpiibtse.bkt.clouddn.com/c-house.jpg">
        <div class="house-content">
            <div class="house-header">
                <Row>
                <Col span="8" class="head-info">
                    <img class="head-logo" src="../../assets/img/house-logo1.png">
                    <span class="head-value">品类齐全</span>
                </Col>
                <Col span="8" class="head-info">
                    <img class="head-logo" src="../../assets/img/house-logo2.png">
                    <span class="head-value">质量保证</span>
                </Col>
                <Col span="8" class="head-info">
                    <img class="head-logo" src="../../assets/img/house-logo3.png">
                    <span class="head-value">售后无忧</span>
                </Col>
                </Row>
            </div>
            <h1 class="house-title">让家居改变您的生活</h1>
            <div class="house-logo-bg">
                <img class="house-logo" src="../../assets/img/house-logo.png">
            </div>  
            <p class="house-desc">我们的品牌梦想，也是我们的承诺：用品质改 变您的生活，每一个细节，都让您触手可及。</p> 
            <div class="house-bottom">
                <Button class="house-button" @click="toRouter(`/house`)">家居专区</Button>
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
.house-container {
    width: 100%;
    height: 100%;
    position: relative;
    .carousel-img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
    }
    .house-content {
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
        .house-title {
            color: #fff;
            font-family: "STXingkai";
            font-size: 0.8rem;
            text-align: center;
        }
        .house-logo-bg {
            width: 1.8rem;
            height: 1.8rem;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 0.9rem;
            margin: 0 auto;
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
            .house-logo {
                width: 1.5rem;
                height: 1.5rem;
                margin: 0.15rem 0.15rem;
            }
        }
        .house-desc {
            width: 6.8rem;
            text-align: center;
            margin: 0 auto;
            color: #fff;
            font-family: "STKaiti";
            font-size: 0.3rem;
            font-weight: bold;
            padding: 0.25rem 0.25rem;
        }
        .house-bottom {
            width: 2.8rem;
            height: 1rem;
            margin: 0 auto;
            .house-button {
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

