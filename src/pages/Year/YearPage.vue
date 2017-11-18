<template>
  <div class="year-container">
      <img class="carousel-img" src="../../assets/img/c-year.jpg">
        <div class="year-content">
            <div class="year-header">
                <Row>
                <Col span="8" class="head-info">
                    <img class="head-logo" src="../../assets/img/year-logo1.png">
                    <span class="head-value">个性理念</span>
                </Col>
                <Col span="8" class="head-info">
                    <img class="head-logo" src="../../assets/img/year-logo2.png">
                    <span class="head-value">创意新颖</span>
                </Col>
                <Col span="8" class="head-info">
                    <img class="head-logo" src="../../assets/img/year-logo3.png">
                    <span class="head-value">强大设计团队</span>
                </Col>
                </Row>
            </div>
            <h1 class="year-title">您的新年礼品定制专家</h1>
            <div class="year-logo-bg">
                <img class="year-logo" src="../../assets/img/year-logo.png">
            </div>  
            <p class="year-desc">新年吉祥物定制是富迪礼品的重头戏，多年设计产品均为爆款，众多企业新年吉祥物的年会礼品。</p> 
            <div class="year-bottom">
                <Button class="year-button" @click="toRouter(`/year`)">年会礼品</Button>
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
.year-container {
    width: 100%;
    height: 100%;
    position: relative;
    .carousel-img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
    }
    .year-content {
        position: absolute;
        position: absolute;
        width: 60%;
        left: 20%;
        top: 0;
        .head-info {
            padding: 0.5rem 0.25rem;
            float: left;
            .head-logo {
                width: 0.8rem;
                height: 0.8rem;
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
        .year-title {
            color: #fff;
            font-family: "STXingkai";
            font-size: 0.8rem;
            text-align: center;
        }
        .year-logo-bg {
            width: 1.8rem;
            height: 1.8rem;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 0.9rem;
            margin: 0 auto;
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
            .year-logo {
                width: 1.5rem;
                height: 1.5rem;
                margin: 0.15rem 0.15rem;
            }
        }
        .year-desc {
            width: 7.4rem;
            text-align: center;
            margin: 0 auto;
            color: #fff;
            font-family: "STKaiti";
            font-size: 0.3rem;
            font-weight: bold;
            padding: 0.25rem 0.25rem;
        }
        .year-bottom {
            width: 2.8rem;
            height: 1rem;
            margin: 0 auto;
            .year-button {
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

