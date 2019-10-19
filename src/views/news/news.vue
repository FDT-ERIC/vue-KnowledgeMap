<template>
  <div style="width:1300px; margin:0 auto">
    <!-- 第一个主卡片 -->
    <el-card class="box-card" shadow="always" style="width:100%">
      <div class="clearfix">
        <h4 style="float:left">{{this.allData["公司简称"]}}</h4>
      </div>
      <div style="color:grey; font-size:13px; margin-top:20px">
        <span>网站:&nbsp;&nbsp;&nbsp;{{this.allData["网站"]}}</span>
        <div style="margin-top:6px">
          <span style="margin-right:2%">机构：{{this.allData["机构"]}}</span>
          <span style="margin-right:2%">研究员：{{this.allData["研究员"]}}</span>
          <span style="margin-right:2%">研究类别：{{this.allData["类别"]}}</span>
          <span>日期：{{this.allData["日期"]}}</span>
        </div>
      </div>
    </el-card>

    <!-- 第二个主卡片 -->
    <el-card shadow="always" style="width:100%; font-size:14px; margin-top:10px">
      <span>{{this.allData["文章"]}}</span>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allData: Object
    };
  },
  mounted() {
    this.allData = this.$store.state.news;
  },
  methods: {}
};
</script>


<style>
</style>
