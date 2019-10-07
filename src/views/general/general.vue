<template>
  <div>
    <!-- 第一个主卡片 -->
    <el-card class="box-card" shadow="always" style="width:100%">
      <div class="clearfix">
        <h2 style="float:left">{{this.companyName}}</h2>
        <el-button
          style="float: right; padding: 3px 0; align:center; padding:center"
          type="text"
          @click="$router.push('/detail')"
        >查看详情</el-button>
      </div>
      <div class="row" style="margin-top:2%">
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
    </el-card>

    <!-- 第二个主卡片 -->
    <el-card shadow="always" style="width:100%">
      <div class="row">
        <div class="col-6">
          <h2 style="float:left">看好</h2>
          <el-card shadow="hover" style="width:100%">鼠标悬浮时显示</el-card>
        </div>
        <div class="col-6">
          <h2 style="float:left">看空</h2>
          <el-card shadow="hover" style="width:100%">鼠标悬浮时显示</el-card>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      companyName: localStorage.company_name,
      mes_left: [],
      mes_right: [],
      allData: Object
    };
  },
  mounted() {
    this.$axios
      .get("/api/company/intro", {
        params: {
          // name: this.$store.state.company_name["公司简称"]
          name: localStorage.company_name
        }
      })
      .then(res => {
        this.allData = res.data.res;
        this.mes_left = Object.keys(res.data.res).slice(0, 3);
        this.mes_right = Object.keys(res.data.res).slice(3, 6);
      });
    this.$axios.get("/api/company/news", {
      params: {
        name: localStorage.company_name
      }
    })
    .then(res => {
      console.log(res.data)
    });
  }
};
</script>


<style>
</style>
