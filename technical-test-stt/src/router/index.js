import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/Home.vue')
        },
        {
            path: '/characters',
            name: 'characters',
            component: () => import('../pages/Characters.vue')
        },
        {
            path: '/characters/:id',
            name: 'character',
            component: () => import('../pages/CharacterDetail.vue')
        }
    ]
})

export default router