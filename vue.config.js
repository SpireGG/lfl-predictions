const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
      	'/lec',
      	'/lfl',
      	'/lvp',
      	'/eslm',
      ],
    })
    ]
  },
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
