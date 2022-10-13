import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: import('@/pages/LoginPage')
        }
    ]
});
