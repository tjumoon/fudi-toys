<template>
  <div class="wedding-container">
    <img class="container-bg" src="http://ozpiibtse.bkt.clouddn.com/wedding-detail-content.jpg">

    <div class="wedding-content">
      <img class="fudi-logo" src="../../assets/img/logo.png">
      <h1 class="wedding-title">婚庆专区——镌刻着我们的永恒</h1>
      <div class="wedding-desc-container">
        <p class="wedding-desc">
            富迪工艺致力于毛绒玩具婚庆礼品定制多年，
            婚庆类产品品种齐全，支持来图定制，定制属于
            您婚礼的专属礼品。优良的品质，精美的做工，
            喜庆的礼品，是我们对您的承诺，希望您温暖而
            幸福的每一个瞬间，我们都陪您走过。
        </p>
        <img class="wedding-desc-img" src="../../assets/img/wedding-detail-custom.jpg">
      </div>
      <div class="wedding-footer">
        <Row>
          <Col span="12">
            <img class="wedding-img" src="../../assets/img/wedding-logo1.png">
            <div class="wedding-value">每一次，都是用心之作</div>
          </Col>
          <Col span="12">
            <img class="wedding-img" src="../../assets/img/wedding-logo2.png">
            <div class="wedding-value">定制属于自己的婚礼</div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.wedding-container {
    width: 100%;
    height: 100%;
    position: relative;
    .container-bg {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
    }
    .wedding-content {
      position: absolute;
      width: 60%;
      left: 20%;
      top: 0.2rem;
      .fudi-logo {
        width: 1.875rem;
        height: 0.625rem;
        margin: 0.25rem 0rem;
      }
      .wedding-title {
        color: rgb(208, 127, 0);
        font-size: 0.25rem;
      }
      .wedding-desc-container {
        width: 100%;
        height: 100%;
        margin-top: 0.5rem;

        .wedding-desc {
          width: 6rem;
          font-size: 0.2rem;
          text-indent: 2em;
          color: #000;
          line-height: 0.5rem;
        }
        .wedding-desc-img {
          float: right;
          margin-top: -3rem;
          width: 1.925rem;
          height: 2.833rem;
        }
      }
      .wedding-footer {
        text-align: center;
        margin-top: 17rem;
        .wedding-img {
          width: 0.88rem;
          height: 0.88rem;
          border: 1px solid rgb(20, 112, 177);
          border-radius: 0.44rem;
        }
        .wedding-value {
          font-size: 0.2rem;
          margin-top: 0.2rem;
        }
      }
    }
}
</style>