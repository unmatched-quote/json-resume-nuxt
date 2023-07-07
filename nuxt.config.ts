// https://nuxt.com/docs/api/configuration/nuxt-config
import { viteSingleFile } from 'vite-plugin-singlefile';
import  vuetify  from 'vite-plugin-vuetify';
import vue from '@vitejs/plugin-vue';

export default defineNuxtConfig({
    //@ts-ignore
    app: {
        baseURL: '/json-resume-nuxt/', // baseURL: '/<repository>/'
        buildAssetsDir: '/assets/'
    },
    devtools: {enabled: true},
    modules: [
        '@invictus.codes/nuxt-vuetify'
    ],
    //@ts-ignore
    vuetify: {
        /* vuetify options */
        vuetifyOptions: {
            // @TODO: list all vuetify options
        },

        moduleOptions: {
            /* nuxt-vuetify module options */
            treeshaking: true,
            useIconCDN: true,

            /* vite-plugin-vuetify options */
            styles: true,
            autoImport: true,
        }
    },
    vite: {
        plugins: [viteSingleFile(), vuetify()],
    }
});
