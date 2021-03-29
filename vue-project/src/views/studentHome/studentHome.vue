<template>
  <div>
    <el-container >
      <el-header>
        <el-image src="../images/OIP.png" class="logo"></el-image>
        <h4 style="margin-left: -1150px">同济大学宿舍管理系统</h4>
        <el-badge :value="messageNum" @click.native="open1" style="margin-left: 2200px" type="warning">
          <el-button size="small">消息</el-button>
        </el-badge>
        <el-dropdown style="float: right">
          <el-button type="primary">
            用户设置<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click.native="userInfo">个人信息</el-dropdown-item>
              <el-dropdown-item @click.native="layOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
            <el-row  style="display: flex">
              <el-col>
                <el-menu
                    default-active="2"
                    @open="handleOpen"
                    @close="handleClose">
                  <el-submenu index="1">
                    <template #title>
                      <i class="el-icon-menu"></i>
                      <span>我的宿舍</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item  @click="dormitoryInfo">宿舍信息</el-menu-item>
                      <el-menu-item @click="apply">调换宿舍</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="2">
                    <template #title>
                      <i class="el-icon-menu"></i>
                      <span>解压园地</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item @click="forum">宿舍论坛</el-menu-item>
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
  name: "studentHome",
  data(){
    return{
      messageNum:1,
      messageContent:'申请失败！'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    dormitoryInfo(){
      this.$router.push('/DormitoryInfo');
    },
    apply(){
      this.$router.push('/apply');
    },
    forum(){
      this.$router.push('/forum');
    },
    layOut(){
      this.$router.replace('/');
    },
    userInfo(){
      this.$router.push('/userInfo');
    },
    open1() {
      if(this.messageNum>0){
        this.$notify({
          title: '提示',
          message: this.messageContent,
          duration: 0
        });
        this.messageNum='';
      }
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