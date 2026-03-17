import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    rules: {
        // Vue rules
        'vue/first-attribute-linebreak': 'off',
        'vue/max-attributes-per-line': 'off',
        "vue/require-default-prop": "off",
        'vue/max-template-depth': ['error', { maxDepth: 8 }],
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/no-unused-properties': ['error', { groups: ['props', 'data', 'computed', 'methods'] }],
        "vue/component-api-style": ["error", ["script-setup"]],

        // Javascript rules
        'complexity': ['warn', { max: 10 }],
        'no-nested-ternary': 'error',
        'no-else-return': 'error',
        'no-lonely-if': 'error',
        'no-unused-expressions': 'error',
        'no-implicit-coercion': 'error',
        'eqeqeq': ['error', 'always'],
        'max-params': ['warn', 4],
        'no-return-assign': 'error'
    },
    languageOptions: {
        // Prevents no-undefined triggering in .js files
        globals: {
            defineEventHandler: 'readonly',
            createError: 'readonly',
            readBody: 'readonly'
        }
    }
})
