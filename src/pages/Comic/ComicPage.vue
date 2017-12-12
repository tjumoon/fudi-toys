<template>
  <div class="comic-container">
      <img class="carousel-img" src="http://ozpiibtse.bkt.clouddn.com/c-comic.jpg">
        <div class="comic-content">
            <div class="comic-header">
                <Row>
                <Col span="12" class="head-info">
                    <img class="head-logo" src="../../assets/img/comic-logo1.png">
                    <span class="head-value">迪斯尼专场秀</span>
                </Col>
                <Col span="12" class="head-info">
                    <img class="head-logo" src="../../assets/img/comic-logo2.png">
                    <span class="head-value">自主设计动漫秀</span>
                </Col>
                </Row>
            </div>
            <h1 class="comic-title">带您走进梦幻的世界</h1>
            <div class="comic-logo-bg">
                <img class="comic-logo" src="../../assets/img/comic-logo.png">
            </div>  
            <p class="comic-desc"> 重视每一个市场，动漫是一个开放题，我们更倾向于开发新产品，引领一个潮流，而不是被潮流所淹没。</p> 
            <div class="comic-bottom">
                <Button class="comic-button" @click="toRouter(`/comic`)">动漫专区</Button>
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
.comic-container {
    width: 100%;
    height: 100%;
    position: relative;
    .carousel-img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
    }
    .comic-content {
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
        .comic-title {
            color: #fff;
            font-family: "STXingkai";
            font-size: 0.8rem;
            text-align: center;
        }
        .comic-logo-bg {
            width: 1.8rem;
            height: 1.8rem;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 0.9rem;
            margin: 0 auto;
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
            .comic-logo {
                width: 1.5rem;
                height: 1.5rem;
                margin: 0.15rem 0.15rem;
            }
        }
        .comic-desc {
            width: 7.8rem;
            text-align: center;
            margin: 0 auto;
            color: #fff;
            font-family: "STKaiti";
            font-size: 0.3rem;
            font-weight: bold;
            padding: 0.25rem 0.25rem;
        }
        .comic-bottom {
            width: 2.8rem;
            height: 1rem;
            margin: 0 auto;
            .comic-button {
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

