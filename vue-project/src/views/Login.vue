<template>
    <div>
        <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
          <h3 class="loginTitle">学生登陆</h3>
          <el-form-item prop="studentID">
            <el-input type="text" v-model="loginForm.studentID" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button type="success" style="width:170px" @click="submitLogin">登录</el-button>
          <el-button type="primary" style="width:170px" @click="manager">管理员通道</el-button>
          <p style="float: right">没有账号，去<span style="color: #6495ed" @click="register">注册</span></p>
          <Vcode :show="isShow" @success="success" @close="close" />
        </el-form>
    </div>
</template>

<script>
import Vcode from "vue-puzzle-vcode"
export default {
  name: "Login",
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
        studentID:"",
        password:""
      },
      rules:{
        studentID:[
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
      this.postRequest('http://localhost:8088/register/signIn',this.loginForm).then(resp=>{
        if(resp){
          window.localStorage.setItem('studentID',this.loginForm.studentID);
          this.$router.push('/StudentHome');
        }
        else{
          this.$message.error('学号或密码错误！');
        }
      })
    },
    // 用户通过了验证
    success() {
      this.isShow = false; // 通过验证后，需要手动隐藏模态框

    },
    // 用户点击遮罩层，应该关闭模态框
    close() {
      this.isShow = false;
    },
    register(){
      this.$router.push('/Register')
    },
    manager(){
      this.$router.push('/ManagerLogin')
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
    height: 300px;
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