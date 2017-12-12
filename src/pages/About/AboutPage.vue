<template>
  <div class="about-container">
      <img class="carousel-img" src="http://ozpiibtse.bkt.clouddn.com/c-about.jpg">
        <div class="about-content">
            <div class="about-header">
                <Row>
                <Col span="12" class="head-info">
                    <img class="head-logo" src="../../assets/img/about-logo1.png">
                    <span class="head-value">速度快捷</span>
                </Col>
                <Col span="12" class="head-info">
                    <img class="head-logo" src="../../assets/img/about-logo2.png">
                    <span class="head-value">流程简单</span>
                </Col>
                </Row>
            </div>
            <h1 class="about-title">您身边的定制专家</h1>
            <div class="about-logo-bg">
                <img class="about-logo" src="../../assets/img/about-logo.png">
            </div>  
            <p class="about-desc">定制企业LOGO，公司吉祥物，婚庆、情人节礼物。根据图片定做您想要的毛绒玩具，批量生产，合理的价格，质量有保障，是您信赖的毛绒玩具定制服务商。</p> 
            <div class="about-bottom">
                <Button class="about-button" @click="toRouter(`/about`)">联系我们</Button>
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
.about-container {
    width: 100%;
    height: 100%;
    position: relative;
    .carousel-img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
    }
    .about-content {
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
        .about-title {
            color: #fff;
            font-family: "STXingkai";
            font-size: 0.8rem;
            text-align: center;
        }
        .about-logo-bg {
            width: 1.8rem;
            height: 1.8rem;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 0.9rem;
            margin: 0 auto;
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
            .about-logo {
                width: 1.5rem;
                height: 1.5rem;
                margin: 0.15rem 0.15rem;
            }
        }
        .about-desc {
            width: 8rem;
            text-align: center;
            margin: 0 auto;
            color: #fff;
            font-family: "STKaiti";
            font-size: 0.3rem;
            font-weight: bold;
            padding: 0.25rem 0.25rem;
        }
        .about-bottom {
            width: 2.8rem;
            height: 1rem;
            margin: 0 auto;
            .about-button {
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

