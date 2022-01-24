import {defineNuxtPlugin, useNuxtApp, useRuntimeConfig} from '#app'
import {useRouter} from 'vue-router'
import {watchEffect} from "@vue/runtime-core";

export default defineNuxtPlugin((nuxtApp) => {
    const router = nuxtApp.$router

    router.beforeEach(async (to, from, next) => {
        console.log(to.name);
        if (to.meta && to.meta.auth) {
            console.log("#### 1");
            next('/login');
            return;
        }

        next()
    });
})
