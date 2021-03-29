<template>
  <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
    <h3 class="loginTitle">管理员登陆</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-button type="success" style="width:170px" @click="submitLogin">登录</el-button>
    <el-button type="primary" style="width:170px" @click="studentLogin">学生通道</el-button>
    <Vcode :show="isShow" @success="success" @close="close" />
  </el-form>
</template>

<script>
import Vcode from "vue-puzzle-vcode";

export default {
  name: "ManagerLogin",
  data(){
    let validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else callback();
    };
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return{
      loginForm:{
        username:"",
        password:""
      },
      rules:{
        username:[
          {validator:validateName,trigger:'blur'}
        ],
        password: [
          {validator:validatePass,trigger:'blur'}
        ]
      },
      isShow:false
    }
  },
  components:{
    Vcode
  },
  methods:{
    submitLogin(){
      this.isShow=true;
      this.$router.push('/managerHome')
    },
    // 用户通过了验证
    success() {
      this.isShow = false; // 通过验证后，需要手动隐藏模态框
    },
    // 用户点击遮罩层，应该关闭模态框
    close() {
      this.isShow = false;
    },
    studentLogin(){
      this.$router.push('/')
    }
  }
}

</script>

<style scoped>
.loginContainer{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  height: 280px;
  padding: 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginTitle{
  margin: 0px auto 40px auto;
  text-align: center;
}
</style>