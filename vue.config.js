module.exports = {
	chainWebpack: config => {
		config.module
			.rule('yaml')
			.test(/\.ya?ml$/)
			.use('js-yaml-loader')
			.loader('js-yaml-loader')
			.end();
		config.module
			.rule('eslint')
			.use('eslint-loader')
			.loader('eslint-loader')
			.tap(options => {
				options.fix = true;
				return options;
			});
	},
};
