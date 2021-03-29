<template>
    <div id="building">
      <div style="background:rgba(255,255,255,0.5);width: 100%;height: 100%">
          <el-col span="8">
            <div v-for="item in arr" :key="item" style="margin-top: 20px">
              <div style="display: inline-flex;width: auto;">
                <div style="position: relative">
                  <el-avatar :size="60" :src="item.photoUrl"/>
                  <p style="margin-top: 0">{{item.username}}</p>
                </div>
                <div style="margin-left: 40px;width: auto;height: auto;display: inline-block" >
                  <div style="position: relative">
                    <p style="margin-top:0px">{{item.date}}</p>
                  </div>
                  <div class="contentStyle">{{item.content}}</div>
                </div>
              </div>
            </div>
          </el-col>
      </div>
    </div>

</template>
<script>
export default {
  name: "forum",
  data(){
    return{
      url:'../../../public/images/background.jpg',
      arr:[
        {
          username:'123',
          photoUrl: '../../../images/OIP.png',
          date:'2021-02-21',
          content:'5565523232315655232323156552323231565523232315655232325523232315655232323156552323231565525523232315655232323156552323231565523156552323231'
        },
        {
          username:'123',
          photoUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          date:'2021-02-21',
          content:'556552323231'
        },
        {
          username:'123',
          photoUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          date:'2021-02-21',
          content:'556552323231'
        },
        {
          username:'123',
          photoUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          date:'2021-02-21',
          content:'556552323231'
        }
      ]
    }
  }
}
</script>

<style scoped>
#building{
  background:url("../../../public/images/background.jpg");
  width:100%;
  height:100%;
  background-size:100% 100%;
  z-index: -1;
}
.contentStyle{
  background:#0181cc;
  border-radius:10px;
  color:#fff;
  padding:10px 10px;
  position: relative;
  width: auto; height: auto;
  max-width: 400px;
  max-height: 100px;
  word-break: break-all;
}
</style>