<template>
  <div>
    <el-row>
      <el-col span="8" style="margin-left: 200px">
        <el-form :rules="rules" ref="applyContent" :model="applyContent">
          <el-form-item label="申请宿舍" style="margin-left: 95px;width: 340px;" prop="target">
            <el-select v-model="applyContent.target" placeholder="请选择" style="width: 250px">
              <el-option
                  v-for="item in options"
                  :key="item"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="申请原因" style="margin-left: 95px;margin-top: 40px" prop="reason">
            <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 8}"
                placeholder="请输入申请原因"
                v-model="applyContent.reason">
            </el-input>
          </el-form-item>
          <el-form-item label="是否接受调剂" style="margin-left: 95px;width: 265px;margin-top: 40px">
            <el-switch
                v-model="applyContent.exchange"
                active-color="#13ce66"
                inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-button type="success" round style="width: 200px;margin-top: 40px;margin-left: 100px" @click="submit">提交</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "apply",
  data(){
    let validateTarget = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请选择申请的宿舍'));
      } else callback();
    };
    let validateReason= (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入申请原因'));
      } else {
        callback();
      }
    };
    return{
      applyContent:{
        target:'',
        reason:'',
        date:'',
        exchange:'false'
      },
      rules:{
        target:[
          {validator:validateTarget,required:true,trigger:['change','blur']}
        ],
        reason: [
          {validator:validateReason,trigger:'blur'}
        ]
      },
      options:["111","222","333"],
    }
  },
  methods:{
    submit(){
      this.$refs.applyContent.validate((valid) => {
        if (valid) {
          // this.postRequest('/login', this.loginForm).then(resp => {
          //   if (resp) {
          //
          //   }
          //
          // })
        } else {
          this.$message.error('请输入所有信息')
          return false;
        }
      })
    }
  }
}
</script>

<style scoped>

</style>