<template>
  <div>
    <el-container >
      <el-header>
        <el-image src="../images/OIP.png" class="logo"></el-image>
        <h4 style="margin-left: -1150px">同济大学宿舍管理系统</h4>
        <el-button @click="layOut" style="float: right">
          退出登录
        </el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac" style="display: flex">
            <el-col>
              <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose">
                <el-submenu index="1">
                  <template #title>
                    <i class="el-icon-menu"></i>
                    <span>学生信息</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item @click="studentInfo">学生信息</el-menu-item>
                    <el-menu-item @click="addStudent">添加学生</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template #title>
                    <i class="el-icon-menu"></i>
                    <span>待办事项</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item @click="applyList">学生申请</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "managerHome",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    addStudent(){
      this.$router.push('/addStudent');
    },
    applyList() {
      this.$router.push('/applyList');
    },
    studentInfo(){
      this.$router.push('/studentInfo');
    },
    layOut(){
      this.$router.replace('/Register');
    }
  }
}
</script>

<style scoped>
.el-header{
  background: #3e9ef5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-sizing: border-box;
}

.el-aside {
  background-color: white;
  color: #333;
  text-align: center;
  height: 675px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  height: 675px;
}
.logo{
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
</style>