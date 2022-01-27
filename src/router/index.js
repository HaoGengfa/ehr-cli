import {defineAsyncComponent} from 'vue'
import { createRouter,createWebHashHistory,createWebHistory} from "vue-router";
const Home = ()=>import('@/views/home')
const Detail = ()=>import ('@/views/detail')
const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/detail',
        component:Detail
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router