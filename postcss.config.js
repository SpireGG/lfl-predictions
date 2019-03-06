module.exports = {
	parser: require('postcss-comment'),
	plugins: {
		'postcss-import': {},
		'postcss-preset-env': {},
		'postcss-nested': {},
		'postcss-custom-media': {},
		'postcss-color-mod-function': {},
		'postcss-reporter': {},
	},
};