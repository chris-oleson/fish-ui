export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },

    app: {
        head: {
            link: [
                { rel: 'icon', href: '/favicon.svg' },
            ],
        }
    },

    css: [
        '/assets/variables.css',
        '/assets/global.css'
    ],

    modules: [
        '@nuxt/icon',
        '@nuxt/eslint',
        '@nuxtjs/color-mode',
        '@nuxt/fonts',
    ],

    fonts: {
        defaults: {
            weights: [300, 500, 900],
        }
    },
})
