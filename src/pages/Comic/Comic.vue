<template>
  <div class="commic-container">
    <img class="container-bg" src="../../assets/img/commic-detail-content.jpg">

    <div class="commic-content">
      <img class="fudi-logo" src="../../assets/img/logo.png">
      <h1 class="commic-title">动漫专区——带您走进梦幻的世界</h1>
      <div class="commic-desc-container">
        <p class="commic-desc">
          动漫专区内的所有品牌毛绒玩具产品均为正版授
          权，我们做这个专区的初衷：让您不再为正版产品与
          否困扰，放心选购。我们的动漫毛绒玩具系列产品，
          全部采用安全材料，面料柔软亲肤，造型饱满，不脱
          毛，易清洗，手工细致，不仅深受小朋友们的喜欢，
          也是众多年轻人的选择。
        </p>
        <img class="commic-desc-img" src="../../assets/img/commic-detail-custom.jpg">
      </div>
      <div class="commic-footer">
        <Row>
          <Col span="12">
            <img class="commic-img" src="../../assets/img/comic-logo1.png">
            <div class="commic-value">迪斯尼专场秀</div>
          </Col>
          <Col span="12">
            <img class="commic-img" src="../../assets/img/comic-logo2.png">
            <div class="commic-value">自主设计动漫秀</div>
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
.commic-container {
    width: 100%;
    height: 100%;
    position: relative;
    .container-bg {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      margin-top: 5rem;
      margin-bottom: 3rem;
    }
    .commic-content {
      position: absolute;
      width: 60%;
      left: 20%;
      top: 0;
      .fudi-logo {
        width: 1.875rem;
        height: 0.625rem;
        margin: 0.25rem 0rem;
      }
      .commic-title {
        color: rgb(208, 127, 0);
        font-size: 0.25rem;
      }
      .commic-desc-container {
        width: 100%;
        height: 100%;
        margin-top: 0.5rem;

        .commic-desc {
          width: 6rem;
          font-size: 0.2rem;
          text-indent: 2em;
          color: #000;
          line-height: 0.5rem;
        }
        .commic-desc-img {
          float: right;
          margin-top: -3rem;
          width: 1.925rem;
          height: 2.833rem;
        }
      }
      .commic-footer {
        text-align: center;
        margin-top: 15rem;
        .commic-img {
          width: 0.88rem;
          height: 0.88rem;
          border: 1px solid rgb(20, 112, 177);
          border-radius: 0.44rem;
        }
        .commic-value {
          font-size: 0.2rem;
          margin-top: 0.2rem;
        }
      }
    }
}
</style>