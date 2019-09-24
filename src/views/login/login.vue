<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <!-- 把整个container容器分成12列 -->
        <div class="clo-12 col-sm-8 col-md-6 col-lg-4 m-auto" style="height:auto">
          <div class="card mt-5">
            <div class="card-header bg-white">
              <h4 class="text-center mb-0 text-secondary">创新工场人工智能研究院</h4>
            </div>
            <div class="card-body">
              <el-form ref="ruleForm" :rules="rules" :model="form">
                <el-form-item prop="username">
                  <el-input v-model="form.username" size="medium" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input v-model="form.password" type="password" size="medium" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button class="w-100" type="primary" size="medium" @click="submit">立即登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EFAULT } from 'constants';
export default {
  name: "app",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: 'blur' }],
        password: [{ required: true, message: "请输入密码", trigger: 'blur' }]
      }
    };
  },
  methods: {
      submit() {
        //   console.log(123)
        this.$refs.ruleForm.validate((e) => {
            // 返回 false（没有输入用户名或密码） 或是 true（输入了用户名和密码）
            if(!e) return;
            this.$router.push({name:'layout'})
        }) 
      }
  }
};
</script>

<style>
</style>
