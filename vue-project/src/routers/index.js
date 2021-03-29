import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login"
import Register from '../views/Register'
import ManagerLogin from "../views/ManagerLogin";
import studentHome from "../views/studentHome/studentHome";
import managerHome from "../views/managerHome/managerHome";
import userInfo from "../views/studentHome/userInfo";
import forum from "../views/studentHome/forum";
import dormitoryInfo from "../views/studentHome/dormitoryInfo"
import apply from "../views/studentHome/apply";
import applyList from "../views/managerHome/applyList";
import addStudent from "../views/managerHome/addStudent";
import studentInfo from "../views/managerHome/studentInfo";
Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        name:'Login',
        component:Login
    },
    {
        path:'/Register',
        name:'Register',
        component:Register
    },
    {
        path: '/ManagerLogin',
        name:'ManagerLogin',
        component: ManagerLogin
    },
    {
        path: '/StudentHome',
        name: 'StudentHome',
        component: studentHome,
        children:[
            {path:'/UserInfo',name:'UserInfo',component:userInfo},
            {path: '/Forum',name: 'Forum',component: forum},
            {path: '/DormitoryInfo',name:'DormitoryInfo',component:dormitoryInfo },
            {path: '/Apply',name:'Apply',component: apply},
        ]
    },
    {
        path: '/ManagerHome',
        name: 'ManagerHome',
        component: managerHome,
        children: [
            {path: '/StudentInfo',name: 'StudentInfo',component: studentInfo},
            {path: '/ApplyList',name:'ApplyList',component: applyList},
            {path: '/AddStudent',name:'AddStudent',component: addStudent}
        ]
    }
]
const router=new VueRouter({
    routes
})
export default router