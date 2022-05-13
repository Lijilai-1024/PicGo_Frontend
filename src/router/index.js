import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: function() {
            return import ('../views/ImageUpload.vue')
        },

    }, {
        path: '/image_show',
        name: 'show',
        component: function() {
            return import ('../views/ImageShow.vue')
        },
    },
    {
        path: '/image_upload',
        name: 'upload',
        component: function() {
            return import ('../views/ImageUpload.vue')
        },

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router