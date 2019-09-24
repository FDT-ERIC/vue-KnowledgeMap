<template>
  <div>
    <el-card class="box-card" shadow="always" style="width:100%">
      <div class="clearfix" slot="header">
        <h2 style="float:left">{{name}}</h2>
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
            <span style="color:black">123</span>
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
            <span style="color:black">123</span>
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
      name: "创新工场",
      mes_left: ["成立日期：", "机构类型：", "办公地址："],
      mes_right: ["注册资本：", "组织形式：", "上市日期："]
    };
  }
};
</script>


<style>
</style>
