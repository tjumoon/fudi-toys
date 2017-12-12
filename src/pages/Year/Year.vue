<template>
  <div class="year-container">
    <img class="container-bg" src="http://ozpiibtse.bkt.clouddn.com/year-detail-content.jpg">

    <div class="year-content">
      <img class="fudi-logo" src="../../assets/img/logo.png">
      <h1 class="year-title">新年吉祥物——您的新年礼品定制专家</h1>
      <div class="year-desc-container">
        <p class="year-desc">
            新年吉祥物寄寓着人们的生活理想与愿望，渲染了
            吉祥喜庆的节日氛围，富迪礼品设计团队愿为您送上精
            美的新年礼物，希望我们的每一份努力能给您的新年多
            增添一份欢乐。感受新年的喜庆与红火的同时，也能想
            到富迪礼品对您真诚的祝福。
        </p>
        <img class="year-desc-img" src="../../assets/img/year-detail-custom.png">
      </div>
      <div class="year-footer">
        <Row>
          <Col span="8">
            <img class="year-img" src="../../assets/img/year-logo1.png">
            <div class="year-value">个性理念</div>
          </Col>
          <Col span="8">
            <img class="year-img" src="../../assets/img/year-logo2.png">
            <div class="year-value">创意新颖</div>
          </Col>
          <Col span="8">
            <img class="year-img" src="../../assets/img/year-logo3.png">
            <div class="year-value">强大设计团队</div>
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
.year-container {
    width: 100%;
    height: 100%;
    position: relative;
    .container-bg {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
    }
    .year-content {
      position: absolute;
      width: 60%;
      left: 20%;
      top: 0.8rem;
      .fudi-logo {
        width: 1.875rem;
        height: 0.625rem;
        margin: 0.25rem 0rem;
      }
      .year-title {
        color: rgb(208, 127, 0);
        font-size: 0.25rem;
      }
      .year-desc-container {
        width: 100%;
        height: 100%;
        margin-top: 0.5rem;

        .year-desc {
          width: 6rem;
          font-size: 0.2rem;
          text-indent: 2em;
          color: #000;
          line-height: 0.5rem;
        }
        .year-desc-img {
          float: right;
          margin-top: -3rem;
          width: 1.925rem;
          height: 2.833rem;
        }
      }
      .year-footer {
        text-align: center;
        margin-top: 16rem;
        .year-img {
          width: 0.88rem;
          height: 0.88rem;
          border: 1px solid rgb(20, 112, 177);
          border-radius: 0.44rem;
        }
        .year-value {
          font-size: 0.2rem;
          margin-top: 0.2rem;
        }
      }
    }
}
</style>