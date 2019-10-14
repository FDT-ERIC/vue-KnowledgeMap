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
    </el-card>
    <el-card class="box-card" shadow="always" style="width:100%; margin-top:1%">
      <div>
        <h2>知识图谱</h2>
        <el-card class="box-card" shadow="always" style="width:100%; margin-top:1%">
        <div>
          <div id="mynetwork"></div>
        </div>
        </el-card>
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
      allData: Object,
      km: {
        nodeslist: [{ id: 1, label: "Node 1" }, { id: 3, label: "Node 3" },{ id: 2, label: "Node 2" },{ id: 4, label: "Node 4" }],
        edgeslist: [{ from: 1, to: 3, label: "关系" }, { from: 2, to: 4, label: "关系" }, { from: 1, to: 2, label: "关系" }]
      }
    };
  },
  methods: {
    drawKM() {
      var nodes = new vis.DataSet(this.km.nodeslist);
      var edges = new vis.DataSet(this.km.edgeslist);
      var container = document.getElementById("mynetwork");
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {};
      var network = new vis.Network(container, data, options);
    }
  },
  mounted() {
    this.$axios
      .get("/api/company/intro/detail", {
        params: {
          // name: this.$store.state.company_name["公司简称"]
          name: localStorage.company_name
        }
      })
      .then(res => {
        console.log(res.data.res);
        this.allData = res.data.res;
        this.mes_left = Object.keys(res.data.res).slice(0, 13);
        this.mes_right = Object.keys(res.data.res).slice(13, 26);
      });

    // 加载知识图谱
    this.drawKM();
  }
};
</script>


<style>
#mynetwork {
  width: 100%;
  height: 500px;
}
</style>
