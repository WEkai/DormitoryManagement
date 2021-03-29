import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {postRequest} from "./util/api";
import {putRequest} from "./util/api";
import {getRequest} from "./util/api";
import {deleteRequest} from "./util/api";
Vue.config.productionTip = false
Vue.prototype.postRequest = postRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.getRequest = getRequest
Vue.prototype.deleteRequest = deleteRequest
Vue.use(ElementUi)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
