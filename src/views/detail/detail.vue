<template>
  <div style="width:1300px; margin:0 auto">
    <el-card class="box-card" shadow="always" style="width:100%">
      <div class="clearfix">
        <h3 style="float:left">{{this.name}}</h3>
      </div>
      <div class="row" style="margin-top:20px">
        <div class="col-6">
          <div
            v-for="(item, index) in mes_left"
            :key="index"
            class="text item"
            style="color:grey; font-size:13px; margin-bottom:6px"
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
            style="color:grey; font-size:13px; margin-bottom:6px"
          >
            {{item}}
            <span>：</span>
            <span style="color:black">{{allData[item]}}</span>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="box-card" shadow="always" style="width:100%; margin-top:10px">
      <div>
        <h3>知识图谱</h3>
        <el-card id="orgManagement" class="box-card" shadow="always" style="width:100%; height:1100px; margin-top:20px">

        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>
// import { tree } from "vued3tree"; // 数据从后台获取时，由于异步性会出错
import echarts from "echarts"; // echarts 提供的树图
export default {
  data() {
    return {
      name: localStorage.company_name,
      mes_left: [],
      mes_right: [],
      allData: Object,
      allKmData: Object, // 存储知识图谱的数据，从后台获取
      allKmData_keys: [], // 存储知识图谱的数据的键值
      allKmData_big: {name: "", children: []}, // 大的关系节点
      allKmData_small: {name: ""}, // 关系节点后的数据
      finalKmData: {name: "", children: []} // 最后的结果
    };
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById("orgManagement"));
      this.chart.on("contextmenu", params => {
        console.log(params);
        if (params.componentType === "series") {
          this.selectedOrg = params.data;
          this.popoverPanelShow = true;
        } else {
          return;
        }
      });
      this.chart.setOption({
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
        },
        series: [
          {
            type: "tree",
            data: [this.finalKmData],
            top: "1%",
            left: "10%",
            bottom: "1%",
            right: "20%",
            symbolSize: 8,
            label: {
              normal: {
                position: "left",
                verticalAlign: "middle",
                align: "right",
                fontSize: 10
              }
            },
            leaves: {
              label: {
                normal: {
                  position: "right",
                  verticalAlign: "middle",
                  align: "left"
                }
              }
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      });
    },
    hidePopoverPanel() {
      this.popoverPanelShow = false;
    }
  },
  mounted() {
    // 获取基本数据
    this.$axios
      .get("/api/company/intro/detail", {
        params: {
          // name: this.$store.state.company_name["公司简称"]
          name: localStorage.company_name
        }
      })
      .then(res => {
        // console.log(res.data.res);
        this.allData = res.data.res;
        console.log(this.allData);
        this.mes_left = Object.keys(res.data.res).slice(0, 13);
        this.mes_right = Object.keys(res.data.res).slice(13, 26);
      });
    // 获取知识图谱数据
    this.$axios
      .get("/api/company/relations", {
        params: {
          name: localStorage.company_name
        }
      })
      .then(res => {
        this.allKmData = res.data.res;
        // console.log("res", this.allKmData)
        this.allKmData_keys = Object.keys(this.allKmData)
        this.allKmData_keys.forEach(key => {
          this.allKmData_big.name = key
          this.allKmData_big.children = this.allKmData[key]
          // console.log("big", this.allKmData_big)
          this.finalKmData.name = localStorage.company_name
          this.finalKmData.children.push(this.allKmData_big)
        });
        this.initChart();
      });
  }
};
</script>


<style>
</style>


