import antfu from '@antfu/eslint-config'

export default antfu({
  overrides: {
    vue: {
      'vue/prop-name-casing': 'off',
    },
  },
  ignores: ['**/*.config.ts.timestamp**', 'public/mockServiceWorker.js'],
}, {
  rules: {
    'ts/prefer-ts-expect-error': 'off',
    'no-console': 'off',
    'ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
})
