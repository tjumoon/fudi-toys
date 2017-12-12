<template>
  <div class="doll-container">
    <img class="container-bg" src="http://ozpiibtse.bkt.clouddn.com/doll-detail-bg.jpg">
    <div class="doll-content">
      <img class="fudi-logo" src="../../assets/img/logo.png">
      <h1 class="doll-title">公仔专区——让玩具公仔点亮生活</h1>
      <div class="doll-desc-container">
        <p class="doll-desc">
          富迪工艺为您精心打造的公仔专区，提供更加
          人性化的选择，我们用心设计每一款公仔，采用
          先进的工艺设备，做工精良，品质佳。精选环保
          超柔绒，优质PP填充棉，手感柔软，造型可爱饱
          满、时尚迷人，给您惊喜的体验。多年以来我们
          的公仔受到客户的一致好评，我们会一如既往遵
          循我们的宗旨，让公仔走进生活，见证您生活中
          的爱情、友情、亲情。
        </p>
        <img class="doll-desc-img" src="../../assets/img/doll-detail-custom.jpg">
      </div>
      <img class="doll-img-content" src="http://ozpiibtse.bkt.clouddn.com/doll-detail-content.png">
      <div class="doll-footer">
        <Row>
          <Col span="8">
            <img class="doll-img" src="../../assets/img/doll-logo1.png">
            <div class="doll-value">品种全</div>
          </Col>
          <Col span="8">
            <img class="doll-img" src="../../assets/img/doll-logo2.png">
            <div class="doll-value">品质高</div>
          </Col>
          <Col span="8">
            <img class="doll-img" src="../../assets/img/doll-logo3.png">
            <div class="doll-value">服务好</div>
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
.doll-container {
    width: 100%;
    height: 100%;
    position: relative;
    .container-bg {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
    }
    .doll-content {
      position: absolute;
      width: 60%;
      left: 20%;
      top: 0;
      .fudi-logo {
        width: 1.875rem;
        height: 0.625rem;
        margin: 0.25rem 0rem;
      }
      .doll-title {
        color: rgb(208, 127, 0);
        font-size: 0.25rem;
      }
      .doll-desc-container {
        width: 100%;
        height: 100%;
        margin-top: 0.5rem;

        .doll-desc {
          width: 6rem;
          font-size: 0.2rem;
          text-indent: 2em;
          color: #000;
          line-height: 0.5rem;
        }
        .doll-desc-img {
          float: right;
          margin-top: -3rem;
          width: 1.925rem;
          height: 2.833rem;
        }
      }
      .doll-img-content {
        width: 9.16rem;
        height: 13.56rem;
      }
      .doll-footer {
        text-align: center;
        margin-top: 2rem;
        .doll-img {
          width: 0.88rem;
          height: 0.88rem;
          border: 1px solid rgb(20, 112, 177);
          border-radius: 0.44rem;
        }
        .doll-value {
          font-size: 0.2rem;
          margin-top: 0.2rem;
        }
      }
    }
}
</style>