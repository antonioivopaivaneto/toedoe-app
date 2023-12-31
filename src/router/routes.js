import TaskPage from '../pages/TasksPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import HomePage from '../pages/HomePage.vue';
import SummaryPage from '../pages/SummaryPage.vue';
import KanBanPage from '../pages/KanBanPage.vue';
import NotFoundErrorPage from '../pages/errors/NotFoundErrorPage.vue';


const routes = [

    {
        path:"/",
        component:HomePage,
        name:'home',
        
    },
    {
        path:"/tasks",
        component:TaskPage,
        name:'tasks',

        meta:{
            auth:true
        }
    },
    
    {
        path:"/login",
        component:LoginPage,
        name:'login',
        meta:{
            guest:true
        }
    },
    {
        path:"/register",
        component:RegisterPage,
        name:'register',
        meta:{
            guest:true
        }
    },
    {
        path:"/summary",
        component:SummaryPage,
        name:'summary',
        /*
        meta:{
            auth:true
        */
    },
    {
        path:"/kanban",
        component:KanBanPage,
        name:'kanban',
        /*
        meta:{
            auth:true
        */
    },
    {
        path:"/:notFound(.*)",
        component:NotFoundErrorPage,
        name:'error.404'
    },
];

export default routes;