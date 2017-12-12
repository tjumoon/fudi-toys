<template>
  <div class="doll-container">
      <img class="carousel-img" src="http://ozpiibtse.bkt.clouddn.com/c-doll.jpg">
        <div class="doll-content">
            <div class="doll-header">
                <Row>
                <Col span="8" class="head-info">
                    <img class="head-logo" src="../../assets/img/doll-logo1.png">
                    <span class="head-value">品种全</span>
                </Col>
                <Col span="8" class="head-info">
                    <img class="head-logo" src="../../assets/img/doll-logo2.png">
                    <span class="head-value">品质高</span>
                </Col>
                <Col span="8" class="head-info">
                    <img class="head-logo" src="../../assets/img/doll-logo3.png">
                    <span class="head-value">服务好</span>
                </Col>
                </Row>
            </div>
            <h1 class="doll-title">让玩具公仔点亮生活</h1>
            <div class="doll-logo-bg">
                <img class="doll-logo" src="../../assets/img/doll-logo.png">
            </div>  
            <p class="doll-desc">赋予公仔的定义，见证爱情、亲情、友情，让公仔走进生活，给您更加人性化的选择，携手并进。</p> 
            <div class="doll-bottom">
                <Button class="doll-button" @click="toRouter(`/doll`)">公仔专区</Button>
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
.doll-container {
    width: 100%;
    height: 100%;
    position: relative;
    .carousel-img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
    }
    .doll-content {
        position: absolute;
        position: absolute;
        width: 64%;
        left: 18%;
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
        .doll-title {
            color: #fff;
            font-family: "STXingkai";
            font-size: 0.8rem;
            text-align: center;
        }
        .doll-logo-bg {
            width: 1.8rem;
            height: 1.8rem;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 0.9rem;
            margin: 0 auto;
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
            .doll-logo {
                width: 1.5rem;
                height: 1.5rem;
                margin: 0.15rem 0.15rem;
            }
        }
        .doll-desc {
            width: 7.5rem;
            text-align: center;
            margin: 0 auto;
            color: #fff;
            font-family: "STKaiti";
            font-size: 0.3rem;
            font-weight: bold;
            padding: 0.25rem 0.25rem;
        }
        .doll-bottom {
            width: 2.8rem;
            height: 1rem;
            margin: 0 auto;
            .doll-button {
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

