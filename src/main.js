import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from "vue-router"
// createApp(App).mount('#app')
import Home from "../src/components/Home.vue"
import Admin from "../src/components/Admin.vue"
import BlogDetail from "../src/pages/Blog_details.vue"
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',name:"Home",component:Home},
        {path:'/admin',name:"Admin",component:Admin},
        {path:'/single',name:"single",component:BlogDetail}
    ]
})

createApp(App).use(router).mount("#app")