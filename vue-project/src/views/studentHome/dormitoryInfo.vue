<template>
  <div>
    <h3>嘉定校区友园19号楼413</h3>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          prop="name"
          label="姓名"
          width="158">
      </el-table-column>
      <el-table-column
          prop="studentID"
          label="学号"
          width="160">
      </el-table-column>
      <el-table-column
          prop="major"
          label="专业"
          width="200">
      </el-table-column>
      <el-table-column
          prop="grade"
          label="年级"
          width="150">
      </el-table-column>
      <el-table-column
          prop="age"
          label="年龄"
          width="150">
      </el-table-column>
      <el-table-column
          prop="bedID"
          label="床号"
          width="130">
      </el-table-column>
      <el-table-column
          prop="phoneNumber"
          label="联系电话"
          width="170">
      </el-table-column>
      <el-table-column
          prop="date"
          label="入住时间"
          width="160">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "dormitoryInfo",
  data() {
    return {
      tableData: [{
        studentID:'1852040',
        name: '田文凯',
        major:'software Engineering',
        date: '2016-05-02',
        grade:'2018',
        age:'21',
        bedID: '1',
        phoneNumber:'18888888888'
      }, {
        studentID:'1852040',
        name: '田文凯',
        major:'software Engineering',
        date: '2016-05-02',
        grade:'2018',
        age:'21',
        bedID: '1',
        phoneNumber:'18888888888'
      }, {
        studentID:'1852040',
        name: '田文凯',
        major:'software Engineering',
        date: '2016-05-02',
        grade:'2018',
        age:'21',
        bedID: '1',
        phoneNumber:'18888888888'
      },{
        studentID:'1852040',
        name: '田文凯',
        major:'software Engineering',
        date: '2016-05-02',
        grade:'2018',
        age:'21',
        bedID: '1',
        phoneNumber:'18888888888'
      }]
    }
  }
}

</script>

<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>