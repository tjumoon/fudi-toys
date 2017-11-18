<template>
    <div class="custom-container">
        <img class="carousel-img" src="../../assets/img/c-custom.jpg">
        <div class="custom-content">
            <Row class="custom-company">
                <Col span="12" class="company-info">
                    <img class="company-logo" src="../../assets/img/company-logo.png">
                    <span class="company-value">科技创新企业</span>
                </Col>
                <Col span="12" class="company-info">
                    <img class="company-logo" src="../../assets/img/company-logo1.png">
                    <span class="company-value">中国十大毛绒玩具礼品企业</span>
                </Col>
            </Row>
            <h1 class="custom-title">让定制温暖而可及</h1>
            <div class="custom-logo-bg">
                <img class="custom-logo" src="../../assets/img/custom-logo.png">
            </div>  
            <p class="custom-desc"> 富迪礼品是扬州富迪工艺家纺有限公司旗下子公司，成立于2002年，是国内十大礼品定制企业，与2000多家企业单位密切合作过，集创新、设计、生产、销售于一体的先进企业</p> 
            <div class="custom-bottom">
                <Button class="custom-button" @click="toRouter(`/custom`)">定制专区</Button>
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
.custom-container {
    width: 100%;
    height: 100%;
    position: relative;
    .carousel-img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
    }
    .custom-content {
        position: absolute;
        width: 60%;
        left: 20%;
        top: 0;
        .custom-company {
            width: 100%;
            height: 100%;
            .company-info {
                padding: 0.5rem 0.25rem;
                float: left;
                .company-logo {
                    width: 0.8rem;
                    height: 0.8rem;
                    vertical-align: middle;
                }
                .company-value {
                    vertical-align: middle;
                    margin-left: 0.125rem;
                    color: #fff;
                    font-family: "STKaiti";
                    font-size: 0.2rem;
                }
            }
        }
        .custom-title {
            color: #fff;
            font-family: "STXingkai";
            font-size: 1rem;
            text-align: center;
        }
        .custom-logo-bg {
            width: 1.8rem;
            height: 1.8rem;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 0.9rem;
            margin: 0 auto;
            .custom-logo {
                width: 1.5rem;
                height: 1.5rem;
                margin: 0.15rem 0.15rem;
            }
        }
        .custom-desc {
            color: #fff;
            font-family: "STKaiti";
            font-size: 0.3rem;
            font-weight: bold;
            padding: 0.25rem 0.25rem;
        }
        .custom-bottom {
            width: 2.8rem;
            height: 1rem;
            margin: 0 auto;
            .custom-button {
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


