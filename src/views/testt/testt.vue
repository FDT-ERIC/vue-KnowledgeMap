<template>
  <div>
    <el-card
      id="orgManagement"
      class="box-card"
      shadow="always"
      style="width:100%; height:1000px;margin-top:1%"
    >
      <div>
        <el-card class="box-card" shadow="always" style="width:100%; margin-top:1%">
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>
// import { tree } from "vued3tree";
import echarts from "echarts";
export default {
  data() {
    return {
      chartData: {
        // "name": "flare",
        // "children": [
        //   {
        //     "name": "111"
        //   }
        // ]
      }
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
            data: [this.chartData],
            top: "1%",
            left: "15%",
            bottom: "1%",
            right: "20%",
            symbolSize: 12,
            label: {
              normal: {
                position: "left",
                verticalAlign: "middle",
                align: "right",
                fontSize: 12
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
    this.$axios
      .get("/api/company/relations", {
        params: {
          name: localStorage.company_name
        }
      })
      .then(res => {
        console.log(res.data.res)
        this.chartData = {
          name: localStorage.company_name,
          children: [
            {
              name: "111"
            }
          ]
        };
        this.initChart();
      });
  }
};
</script>


<style>
canvas {
  width: 100%;
  height: 600px;
}
</style>


