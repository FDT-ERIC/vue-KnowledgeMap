<template>
  <div style="width:1300px; margin:0 auto">
    <!-- 第一个主卡片 -->
    <el-card
      class="box-card"
      shadow="always"
      style="width:100%; padding-bottom:1%; margin-bottom:10px"
    >
      <h2 style="float:left">所有公司</h2>
      <el-input placeholder="请输入公司名" v-model="searchInput" style="float:right; width:22%">
        <el-button slot="append" icon="el-icon-search" @click="searchCompany(searchInput)"></el-button>
      </el-input>
    </el-card>

    <!-- 第二个主卡片 -->
    <el-card shadow="always" style="width:100%; margin-bottom:2%">
      <el-table
        :data="tableData.currentData"
        style="width: 100%"
        :default-sort="{prop: 'rank', order: 'descending'}"
        @row-click="selectCompany"
      >
        <!-- <el-table-column prop="rank" label="排名" sortable width="180"></el-table-column> -->
        <el-table-column type="index" width="100%" label="排名"></el-table-column>
        <el-table-column prop="公司简称" label="公司简称" sortable width="auto"></el-table-column>
        <el-table-column prop="公司全称" label="公司全称" sortable width="auto"></el-table-column>
        <!-- <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column> -->
      </el-table>
    </el-card>

    <!-- 分页 -->
    <div style="width:100%">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="this.tableData.currentPage"
          :page-sizes="[20, 30, 40, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.lenData"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      companyName: localStorage.company_name,
      searchInput: "",
      mes_left: [],
      mes_right: [],
      allData: [],
      tableData: {
        lenData: 0,
        currentPage: 1,
        pageSize: 0,
        currentData: []
      }
    };
  },
  mounted() {
    this.$axios.get("/api/companyAll").then(res => {
      console.log(res.data.res)
      this.allData = res.data.res;
      //  一共有多少条数据
      this.tableData.lenData = this.allData.length;
      //  设置初始的 20条/页
      this.tableData.pageSize = 20;
      //  设置初始界面
      this.tableData.currentData = this.allData.slice(
        (this.tableData.currentPage - 1) * this.tableData.pageSize,
        this.tableData.currentPage * this.tableData.pageSize
      );
    });
    // 用于导航搜索
    if (localStorage.company_search_from_navbar != " ") {
      this.searchCompany(localStorage.company_search_from_navbar)
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.tableData.pageSize = val;
      this.tableData.lenData = this.allData.length;
      console.log(this.allData.length)
      this.tableData.currentData = this.allData.slice(
        (this.tableData.currentPage - 1) * val,
        this.tableData.currentPage * val
      );
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.tableData.currentPage = val;
      this.tableData.currentData = this.allData.slice(
        (val - 1) * this.tableData.pageSize,
        val * this.tableData.pageSize
      );
    },
    selectCompany(item) {
      localStorage.company_name = item["公司简称"];
      this.$router.push("/detail");
    },
    searchCompany(text) {
      localStorage.company_search_from_navbar = text
      this.$axios
        .get("/api/companyAll/search", {
          params: {
            name: text
          }
        })
        .then(res => {
          // console.log(res.data)
          this.tableData.lenData = res.data.res.length;
          this.tableData.currentData = res.data.res;
        });
    }
  },
  computed: {}
};
</script>


<style>
</style>
