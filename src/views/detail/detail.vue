<template>
  <div>
    <el-card class="box-card" shadow="always" style="width:100%">
      <div class="clearfix" slot="header">
        <h2 style="float:left">{{this.name}}</h2>
      </div>
      <div class="row">
        <div class="col-6">
          <div
            v-for="(item, index) in mes_left"
            :key="index"
            class="text item"
            style="color:grey; font-size:90%"
          >
            {{item}}
            <span>：</span>
            <span style="color:black">{{allData[item]}}</span>
          </div>
        </div>
        <div class="col-6">
          <div
            v-for="(item, index) in mes_right"
            :key="index"
            class="text item"
            style="color:grey; font-size:90%"
          >
            {{item}}
            <span>：</span>
            <span style="color:black">{{allData[item]}}</span>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <h2>工商信息</h2>
        </div>
        <div>
          <span>123</span>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <h2>经济指数</h2>
        </div>
        <div>
          <span>123</span>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <h2>企业关系</h2>
        </div>
        <div>
          <span>123</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: localStorage.company_name,
      mes_left: [],
      mes_right: [],
      allData: Object
    };
  },
  mounted() {
    this.$axios
      .get(
        "/api/company/intro/detail",
        {
          params: {
            // name: this.$store.state.company_name["公司简称"]
            name: localStorage.company_name
          }
        }
      )
      .then(res => {
        console.log(res.data.res)
        this.allData = res.data.res
        this.mes_left = Object.keys(res.data.res).slice(0,13);
        this.mes_right = Object.keys(res.data.res).slice(13,26)
      });
    // console.log(this.$store.state.company_name["公司简称"])
  },
};
</script>


<style>
</style>
