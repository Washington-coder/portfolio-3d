import { defineConfig, globalIgnores } from 'eslint/config'
import pluginReact from 'eslint-plugin-react'

const eslintConfig = defineConfig([
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      "react/prop-types": "off",
      "react/no-unknown-property": ["error", { "ignore": ["options"] }],
      'react/react-in-jsx-scope': 'off', 
      'react/jsx-uses-react': 'off',     
      'indent': ['error', 2],    
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],        
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': 'error',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
    }
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig