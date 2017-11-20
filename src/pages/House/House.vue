<template>
  <div class="house-container">
    <img class="container-bg" src="../../assets/img/house-detail-content.jpg">

    <div class="house-content">
      <img class="fudi-logo" src="../../assets/img/logo.png">
      <h1 class="house-title">家居专区——让家居改变您的生活</h1>
      <div class="house-desc-container">
        <p class="house-desc">
            家居专区是富迪工艺企业文化的全面体现，品质决定
            生活的高度，我们致力于为您提供简约、实用、健康的
            家居用品，通过不同的家居用品来传递简单、自然、快
            乐的生活方式。富迪家居定位是将崇尚 “简约﹑健康﹑
            品味”的生活时尚带入人群，让他们更热爱生活、注重
            生活品质。
        </p>
        <img class="house-desc-img" src="../../assets/img/doll-detail-custom.jpg">
      </div>
      <div class="house-footer">
        <Row>
          <Col span="8">
            <img class="house-img" src="../../assets/img/house-logo1.png">
            <div class="house-value">品种齐全</div>
          </Col>
          <Col span="8">
            <img class="house-img" src="../../assets/img/house-logo2.png">
            <div class="house-value">质量保障</div>
          </Col>
          <Col span="8">
            <img class="house-img" src="../../assets/img/house-logo3.png">
            <div class="house-value">售后无忧</div>
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
.house-container {
    width: 100%;
    height: 100%;
    position: relative;
    .container-bg {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      margin: 4.5rem 0;
    }
    .house-content {
      position: absolute;
      width: 60%;
      left: 20%;
      top: 0;
      .fudi-logo {
        width: 1.875rem;
        height: 0.625rem;
        margin: 0.25rem 0rem;
      }
      .house-title {
        color: rgb(208, 127, 0);
        font-size: 0.25rem;
      }
      .house-desc-container {
        width: 100%;
        height: 100%;
        margin-top: 0.5rem;

        .house-desc {
          width: 6rem;
          font-size: 0.2rem;
          text-indent: 2em;
          color: #000;
          line-height: 0.5rem;
        }
        .house-desc-img {
          float: right;
          margin-top: -3rem;
          width: 1.925rem;
          height: 2.833rem;
        }
      }
      .house-footer {
        text-align: center;
        margin-top: 20rem;
        .house-img {
          width: 0.88rem;
          height: 0.88rem;
          border: 1px solid rgb(20, 112, 177);
          border-radius: 0.44rem;
        }
        .house-value {
          font-size: 0.2rem;
          margin-top: 0.2rem;
        }
      }
    }
}
</style>