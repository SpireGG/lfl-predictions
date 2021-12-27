module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
	],
	plugins: [
		'vue',
	],
	rules: {
		'class-methods-use-this': 0,
		'indent': [2, 'tab'],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-new': 0,
		'no-return-assign': 2,
		'object-curly-spacing': [2, 'always'],
		'semi': 2,
		'comma-dangle': [2, {
			'arrays': 'always-multiline',
			'objects': 'always-multiline',
			'imports': 'never',
			'exports': 'never',
			'functions': 'never',
		}],
		'no-tab': 0,
		'import/no-unresolved': 0,
		'import/prefer-default-export': 0,
		'vue/no-mutating-props': 0,
		'vue/multi-word-component-names': 0,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
