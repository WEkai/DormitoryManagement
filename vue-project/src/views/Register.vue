<template>
  <div>
    <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm"  class="registerContainer">
      <h3 class="registerTitle">学生注册</h3>
      <el-form-item  prop="stduentID">
        <el-input v-model="registerForm.studentID" placeholder="请输入学号"></el-input>
      </el-form-item>
      <el-form-item prop="username">
        <el-input type="text" v-model="registerForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input type="password" v-model="registerForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item prop="rePassword">
        <el-input type="password" v-model="registerForm.rePassword" placeholder="请确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="signBtn"  type="success" @click="submitForm('registerForm')">注册</el-button>
        <el-button class="resetBtn" type="primary" @click="resetForm('registerForm')">重置</el-button>
        <p style="float: right">已有账号，去<span style="color: #6495ed" @click="login">登录</span></p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    let validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else callback();
    };
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.registerForm.rePassword !== '') {
          this.$refs.registerForm.validateField('rePassword');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    let validateStudentID = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入学号'));
      } else callback();
    };
    return {
      registerForm: {
        username:'',
        password: '',
        rePassword: '',
        studentID: ''
      },
      rules: {
        username: [
          {validator:validateName,trigger:'blur'}
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        rePassword: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        email: [
          {validator:validateStudentID,trigger:'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          this.postRequest('http://localhost:8088/register/signIn',this.registerForm).then(resp=>{
            if(resp){
              window.localStorage.setItem('studentID',this.loginForm.studentID);
              this.$router.push('/StudentHome');
            }
            else{
              this.$message.error('学号或密码错误！');
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.registerForm.resetFields();
    },
    login(){
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.registerContainer{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  height: 420px;
  padding: 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.registerTitle{
  margin: 0px auto 40px auto;
  text-align: center;
}
.signBtn{
  width: 170px;
}
.resetBtn{
  width: 170px;
}
</style>