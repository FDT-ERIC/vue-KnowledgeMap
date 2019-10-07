<template>
  <div>
    <div class="clearfix" style="margin:1%">
      <h2 style="float:left">热门公司</h2>
      <el-button
        style="float: right; padding: 3px 0; align:center; padding:center"
        type="text"
        @click="$router.push('/search')"
      >查看更多</el-button>
    </div>
    <div v-for="(item, index) in arr_company" :key="index" style="display:blockl;">
      <el-card
        :body-style="{ padding: '0px'}"
        shadow="hover"
        style="float:left; margin:1%"
        @click.native="handleSelect(item)"
      >
        <div style="padding:5%">
          <img style="width:100%;" src="../../assets/chuangxin_logo.png" class="image" />
        </div>
        <div style="padding: 14px 14px 0 14px;">
          <h6 class="text-center">
            <strong>{{item["公司简称"]}}</strong>
          </h6>
          <div class="bottom clearfix" style=" text-align:center">
            <div style="display:inline-block;" class="mt-4">
              <span style="font-size:85%; float:left;" class="text-secondary">推荐指数：</span>
              <el-rate
                style="float:right; width:auto"
                v-model="card.rating_value"
                disabled
                text-color="#ff9900"
              ></el-rate>
            </div>
          </div>
          <hr />
          <div class="m-4" style="font-size:80%">
            <div style="width:50%; float:left; text-align:left;">
              <div>
                <span>看好评论</span>
              </div>
              <div style="margin:10%">
                <span>100条</span>
              </div>
            </div>
            <div style="width:50%; float:right; text-align:right;">
              <div>
                <span>看空评论</span>
              </div>
              <div style="margin:10%">
                <span>0条</span>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navBarIndex: "1", // 一进来默认是选中第 1 个
      arr_company: [],
      card: {
        // 推荐指数
        rating_value: 5
      }
    };
  },
  methods: {
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    handleSelect(company_name) {
      // 将公司名存储在全局的store中，方便跳转页面获取
      localStorage.setItem("company_name", company_name["公司简称"]);
      // this.$store.state.company_name = company_name;
      this.$router.push("/company");
    }
  },
  mounted() {
    this.$axios.get("/api/company/").then(res => {
      this.arr_company = res.data.res.company_top;
    });
  }
};
</script>

<style>
.con_big {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  height: 100%;
}

.con_small {
  height: 100%;
  padding-bottom: 60px;
}
.el-header {
  background-color: #545c64;
}

.el-card {
  width: 17%;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
}
</style>
