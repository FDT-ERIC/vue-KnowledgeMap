<template>
  <div id="app">
    <el-container class="con_big">
      <el-container class="con_small">
        <!-- 顶部导航 -->
        <el-header class="d-flex align-items-center">
          <a class="h5 text-light mb-0 mr-auto">创新工场大湾区人工智能研究院</a>
          <el-menu
            :default-active="navBarIndex"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">研报</el-menu-item>
            <!-- 搜索框 -->
            <el-menu-item>
              <el-input placeholder="请输入内容" v-model="searchInput" style="margin-bottom:1%">
                <el-button slot="append" icon="el-icon-search" @click="searchCompany(searchInput)"></el-button>
              </el-input>
            </el-menu-item>
            <!-- 用户个人中心 -->
            <el-submenu index="5">
              <template slot="title">
                <el-avatar
                  style="margin: 0 5% 5% 0"
                  size="small"
                  src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                ></el-avatar>EricDa
              </template>
              <el-menu-item index="5-1">登录</el-menu-item>
              <el-menu-item index="5-2">注册</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-header>

        <!-- 主布局 -->
        <el-main>
          <router-view></router-view>
        </el-main>

        <!-- 底部 -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { createDecipher } from "crypto";
export default {
  data() {
    return {
      navBarIndex: "1", // 一进来默认是选中第 1 个
      searchInput: "", // 搜索
      card: {
        // 推荐指数
        rating_value: 5
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    searchCompany(text) {
      this.$router.push('/search')
      this.$axios
      .get(
        "/api/companyAll/search",
        {
          params: {
            // name: this.$store.state.company_name["公司简称"]
            name: text
          }
        }
      )
      .then(res => {
        console.log(res.data)
      });
    }
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

.el-main {
  background-color: rgb(245, 245, 245);
}

.el-card {
  width: 17%;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 50px;
}
</style>
