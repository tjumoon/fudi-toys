<template>
  <div class="about-container">
    <div class="about-head">
      <img class="head-bg" src="../../assets/img/about-detail-head.jpg">
      <h1 class="head-title">富迪工艺礼品</h1>
      <h3 class="head-desc">让定制独特而唯一</h3>
    </div>
    <div class="about-desc">
      <h1 class="desc-title">关于富迪工艺</h1>
      <p class="desc-content">
        扬州富迪玩具礼品有限公司坐落于世界毛绒玩具之乡江苏扬州，中国十大礼品玩
        具定制公司，扬州富迪礼品玩具定制在业内有举足轻重的地位，是集设计、生产、服
        务于一体的实力生产企业，超前的设计理念，强大的创新能力，造就了一支25人的核
        心设计师团队。倾心打造企业形象玩具礼品，定制企业logo、吉祥物、商务礼品、
        促销礼品、婚庆礼品、情人节礼品、各类抱枕靠枕。支持来图/来样定制，给您的个
        性DIY一个放飞的舞台，我们愿意成为您坚强的技术后盾，为您保驾护航！我们坚持
        以设计求创新，以质量求生存，以服务赢客户。
      </p>
    </div>
    <div class="about-vision">
      <Row>
          <Col span="6">
            <img class="vision-img" src="../../assets/img/about-img1.jpg">
          </Col>
          <Col span="6">
            <img class="vision-img" src="../../assets/img/about-img2.jpg">
          </Col>
          <Col span="6">
            <img class="vision-img" src="../../assets/img/about-img3.jpg">
          </Col>
          <Col span="6">
            <img class="vision-img" src="../../assets/img/about-img4.jpg">
          </Col>
      </Row>
    </div>
    <div class="about-footer">
      <div class="footer-title">
        <img class="coperation-logo" src="../../assets/img/about-cooperation.png">
        <span class="coperation-value">合作单位</span>
      </div>
      <img class="cooperation-logos" src="../../assets/img/about-cooperation-logos.png">
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.about-container {
    width: 100%;
    height: 100%;
    .about-head {
      position: relative;
      .head-bg {
        width: 100%;
        height: 3rem;
      }
      .head-title {
        position: absolute;
        width: 100%;
        text-align: center;
        color: #fff;
        top: 0.5rem;
        font-size: 0.7rem;
      }
      .head-desc {
        position: absolute;
        width: 100%;
        text-align: center;
        color: #fff;
        top: 1.8rem;
        font-family: "STXingkai";
        font-size: 0.4rem;
      }
    }
    .about-desc {
      .desc-title {
        width: 100%;
        text-align: center;
        color: rgb(208, 127, 0);
        top: 0.5rem;
        font-size: 0.6rem;
        margin: 0.25rem 0;
      }
      .desc-content {
        text-indent: 2em;
        width: 100%;
        padding: 0 3rem;
        font-size: 0.25rem;
        font-family: "Microsoft Yahei"
      }
    }
    .about-vision {
      width: 80%;
      margin: 0 auto;
      margin-top: 0.6rem;
      margin-bottom: 0.6rem;
      text-align: center;
      .vision-img {
        width: 2.47rem;
        height: 2.47rem;
        margin: 0 auto;
      }
    }
    .about-footer {
      text-align: center;
      .footer-title {
        float: middle;
        text-align: center;
        .coperation-logo {
          width: 1.12rem;
          height: 0.81rem;
          vertical-align: middle;

        }
        .coperation-value {
          vertical-align: middle;
          font-size: 1rem;
          color: rgb(208, 127, 0);
          margin-left: 0.25rem;
        }
      }
      .cooperation-logos {
        width: 9.375rem;
        height: 5.625rem;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
      }
    }
}
</style>


