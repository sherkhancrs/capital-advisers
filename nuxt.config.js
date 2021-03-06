const pkg = require('./package')

module.exports = {
	mode: 'universal',

	/*
	 ** Headers of the page
	 */
	head: {
		title: pkg.name,
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: pkg.description
			}
		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.jpeg'
		}]
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: '#ef741c'
	},

	/*
	 ** Global CSS
	 */
	css: [
		"~assets/css/main.css",
		"~static/flexboxgrid.less"
	],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		"~/plugins/backend",
		{
			src: "~/plugins/pagination",
			ssr: false
		}
	],

	/*
	 ** Nuxt.js modules
	 */

	router: {
		scrollBehavior: function (to, from, savedPosition) {
			return {
				x: 0,
				y: 0
			};
		}
	},

	modules: [
		// Doc: https://github.com/nuxt-community/axios-module#usage
		'@nuxtjs/axios',
		'@nuxtjs/toast'
	],

	toast: {
    position: 'top-center',
    duration: 2000
	},

	/*
	 ** Axios module configuration
	 */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
