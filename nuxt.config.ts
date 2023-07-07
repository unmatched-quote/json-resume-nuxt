// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    //@ts-ignore
    app: {
        baseURL: '/json-resume-nuxt/' // baseURL: '/<repository>/'
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
    }
});
