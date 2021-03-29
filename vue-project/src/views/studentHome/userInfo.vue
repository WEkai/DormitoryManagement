<template>
  <div>
    <el-row class="demo-avatar demo-basic">
      <el-col :span="8">
        <div class="demo-basic--circle" style="display: inline-flex;margin-top: 40px">
          <label style="margin-right: 40px;font-size: 14px">头像</label>
          <div><el-avatar shape="square" :size="170" :src="formData.photoUrl"></el-avatar></div>
        </div>
        <div style="margin-top: 40px">
          <el-form>
            <el-form-item label="昵称" style="margin-left: 95px;width: 265px;">
              <el-input v-model="formData.username" style="width: 170px"></el-input>
            </el-form-item>
            <el-form-item label="密码" style="margin-left: 95px;width: 265px;">
              <el-input v-model="formData.password" style="width: 170px"></el-input>
            </el-form-item>
            <el-form-item label="电话" style="margin-left: 95px;width: 265px;">
              <el-input v-model="formData.phoneNumber" style="width: 170px"></el-input>
            </el-form-item>
          </el-form>
        </div>

      </el-col>
      <el-col :span="12">
        <div style="margin-top: 40px">
          <el-form>
            <el-form-item label="学号" style="margin-left: 200px;width: 300px;" >
              <el-input v-model="formData.studentID" style="width: 170px" disabled></el-input>
            </el-form-item>
            <el-form-item label="姓名" style="margin-left: 200px;width: 300px;">
              <el-input v-model="formData.name" style="width: 170px" disabled></el-input>
            </el-form-item>
            <el-form-item label="专业" style="margin-left: 200px;width: 300px;">
              <el-input v-model="formData.major" style="width: 170px" disabled></el-input>
            </el-form-item>
            <el-form-item label="年级" style="margin-left: 200px;width: 300px;">
              <el-input v-model="formData.grade" style="width: 170px" disabled></el-input>
            </el-form-item>
            <el-form-item label="年龄" style="margin-left: 200px;width: 300px;">
              <el-input v-model="formData.age" style="width: 170px" disabled></el-input>
            </el-form-item>
            <el-form-item label="床号" style="margin-left: 200px;width: 300px;">
              <el-input v-model="formData.bedID" style="width: 170px" disabled></el-input>
            </el-form-item>
            <el-form-item label="入住时间" style="margin-left: 200px;width: 275px;">
              <el-input v-model="formData.inDate" style="width: 170px" disabled></el-input>
            </el-form-item>
          </el-form>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  data () {
    return {
      formData:{
        studentID: '1852040',
        name:'',
        major:'',
        grade:'',
        age:'',
        bedID:'',
        inDate:'',
        username:'',
        password:'',
        photoUrl:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        phoneNumber:''
      }
    }
  }
}
</script>

<style scoped>

</style>