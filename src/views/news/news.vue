<template>
  <div>
    <!-- 第一个主卡片 -->
    <el-card class="box-card" shadow="always" style="width:100%">
      <div class="clearfix">
        <h4 style="float:left">{{this.allData["公司简称"]}}</h4>
      </div>
      <div style="color:grey; font-size:90%; margin-top:2%">
        <span>网站:&nbsp;&nbsp;&nbsp;{{this.allData["网站"]}}</span>
        <div>
          <span style="margin-right:2%">机构：{{this.allData["机构"]}}</span>
          <span style="margin-right:2%">研究员：{{this.allData["研究员"]}}</span>
          <span style="margin-right:2%">研究类别：{{this.allData["类别"]}}</span>
          <span>日期：{{this.allData["日期"]}}</span>
        </div>
      </div>
    </el-card>

    <!-- 第二个主卡片 -->
    <el-card shadow="always" style="width:100%">
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
