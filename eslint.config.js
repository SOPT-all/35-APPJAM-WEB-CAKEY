import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // JavaScript 규칙
      'comma-style': ['error', 'last'], // 쉼표 스타일을 마지막 요소 뒤로 설정
      'no-unused-vars': 'warn', // 사용되지 않는 변수 경고
      'no-trailing-spaces': 'warn', // 줄 끝에 공백 방지
      'no-multiple-empty-lines': 'warn', // 연속된 빈 줄 방지
      'arrow-spacing': 'warn', // 화살표 함수의 화살표 주변에 공백 강제
      'no-const-assign': 'error', // const 변수 재할당 방지
      'no-multi-spaces': 'error', // 연속된 공백 방지
      'no-else-return': 'warn', // else 블록에서 return 사용 방지
      'no-floating-decimal': 'error', // 소수점 앞에 있는 0 생략 방지
      'no-alert': 'warn', // alert() 함수 사용 방지
      'no-empty-pattern': 'warn', // 빈 객체나 배열 분해 사용 방지
      'no-implicit-globals': 'error', // 암묵적인 전역 변수 사용 방지
      'no-loop-func': 'error', // 루프 내에서 함수 선언 방지
      'no-new-wrappers': 'error', // 기본 객체 래퍼 클래스 사용 방지
      'no-restricted-globals': 'error', // 특정 전역 변수 사용 방지
      'no-return-assign': 'warn', // 할당문을 리턴문에서 사용 방지
      'no-new-object': 'error', // Object 생성자 사용 방지
      'no-useless-constructor': 'error', // 불필요한 생성자 방지

      // TypeScript 규칙
      '@typescript-eslint/no-unused-vars': 'warn', // 사용되지 않는 변수 경고
      '@typescript-eslint/no-explicit-any': 'warn', // any 타입 사용 경고

      // React 규칙
      'react/react-in-jsx-scope': 'off', // React 17 이상에서 필요 없음
      'react/jsx-boolean-value': ['error', 'never'], // boolean props의 true 생략

      // 추가 규칙
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto', // 줄 끝 형식 자동 설정
        },
      ],
    },
  },
);