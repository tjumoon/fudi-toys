<template>
  <div class="home-container">
    <img class="container-bg" src="http://ozpiibtse.bkt.clouddn.com/home-detail-content.jpg">

    <div class="home-content">
      <img class="fudi-logo" src="../../assets/img/logo.png">
      <h1 class="home-title">私人定制——让定制温暖而可及</h1>
      <div class="home-desc-container">
        <p class="home-desc">
            富迪礼品是扬州富迪工艺家纺有限公司旗下子公
            司，成立于2002年，是国内十大礼品定制企业，经过
            20年的发展与沉淀已成为集创新、设计、生产、销售
            于一体的专业型毛绒玩具礼品定制服务商，我们拥有
            强大的设计团队以及自主研发的创新能力，赢得了众
            多企业的青睐与我们达成了长期的战略合作伙伴关系。
            公司秉承"顾客至上，锐意进取"的经营理念，坚持
            "以质量求生存，以服务赢客户"的原则为广大客户提
            供优质的服务
        </p>
        <img class="home-desc-img" src="../../assets/img/home-detail.jpg">
      </div>
    

      <div class="home-footer">
        <Row>
          <Col span="12">
            <img class="home-img" src="../../assets/img/company-logo.png">
            <div class="home-value">科技创新企业</div>
          </Col>
          <Col span="12">
            <img class="home-img" src="../../assets/img/company-logo1.png">
            <div class="home-value">中国十大毛绒玩具礼品礼品企业</div>
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
.home-container {
    width: 100%;
    height: 100%;
    position: relative;
    .container-bg {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      margin-top: 6rem;
      margin-bottom: 3rem;
    }
    .home-content {
      position: absolute;
      top: 0;
      width: 60%;
      left: 20%;
      .fudi-logo {
        width: 1.875rem;
        height: 0.625rem;
        margin: 0.25rem 0rem;
      }
      .home-title {
        color: rgb(208, 127, 0);
        font-size: 0.25rem;
      }
      .home-desc-container {
        width: 100%;
        height: 100%;
        margin-top: 0.5rem;

        .home-desc {
          width: 6rem;
          font-size: 0.2rem;
          text-indent: 2em;
          color: #000;
          line-height: 0.5rem;
        }
        .home-desc-img {
          float: right;
          margin-top: -3rem;
          width: 1.925rem;
          height: 2.833rem;
        }
      }
      .home-img-content {
        width: 10.67rem;
        height: 12.5rem;
        max-width: 100%;
        max-height: 100%;
      }
      .home-footer {
        text-align: center;
        margin-top: 20rem;
        .home-img {
          width: 0.88rem;
          height: 0.88rem;
          border: 1px solid rgb(20, 112, 177);
          border-radius: 0.44rem;
        }
        .home-value {
          font-size: 0.2rem;
          margin-top: 0.2rem;
        }
      }
    }
}
</style>