import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: to => {
                return 'characters'
            }
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
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: to => {
                return 'characters'
            }
        }
    ]
})

export default router