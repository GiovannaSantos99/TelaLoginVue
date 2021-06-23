import Vue from 'vue';
import Router from 'vue-router';
import login from './view/login.vue';
import cadastro from './view/cadastro.vue';


Vue.use(Router)


export default new Router({
    routes: [
        { path: '/', name: 'login', component: login  },
        { path: '/login', name: 'login', component: login  },
        { path: '/cadastro', name: 'cadastro', component: cadastro  }
    ]
})