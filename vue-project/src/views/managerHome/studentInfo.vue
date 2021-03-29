<template>
  <div>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "studentInfo"
}
</script>

<style scoped>

</style>