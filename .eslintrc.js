module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'functional', 'react'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:functional/all',
		'plugin:react/recommended',
	],
	parserOptions: {
		project: './tsconfig.json',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		// Unneeded w/ TypeScript
		'react/prop-types': 0,
		// Bad cost/value
		'react/no-unescaped-entities': 0,
		// Bad cost/value
		'react/display-name': 0,
		// Incompatible with React idioms
		'functional/functional-parameters': 0,
		// Incompatible with React idioms
		'functional/no-mixed-type': 0,
		// Needless if adhering to FP idioms
		'functional/prefer-readonly-type': 0,
	},
};

