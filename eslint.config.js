import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist', 'custom.d.ts', 'vite.config.ts'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugin,
      import: eslintPluginImport,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-boolean-value': ['error', 'never'],

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'], // 한 그룹으로 보게끔
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react', // react 제일 위로
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react*', // react 관련 제일 위로
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@tanstack/*', // query 관련 그 다음으로
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@apis/**', // api 관련 내부모듈 위로
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@lotties',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@svgs',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '{@image/*, @styles/*}',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '{@pages/*, @components, @hooks, @routes, @constants}',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@types', // type 관련은 type 그룹 위로
              group: 'type',
              position: 'before',
            },
            {
              pattern: '{./pageRoutes, ./routePath}',
              group: 'sibling',
              position: 'after',
            },
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],
    },
    settings: {
      // typeScript 가 파일을 잘 읽지 못해서 생기는 문제를 해결해주는 부분
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.app.json',
        },
      },
    },
  }
);
