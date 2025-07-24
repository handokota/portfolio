const WindiCSS = require('windicss-webpack-plugin');
const { withAxiom } = require('next-axiom');

const ContentSecurityPolicy = `
  child-src *.google.com;
  connect-src *;
  default-src 'self';
  font-src 'self';
  img-src * blob: data:;
  media-src 'none';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' data:;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  worker-src 'self' 'unsafe-inline' blob:;
`;

/**
 * @type {import('next').NextConfig}
 */
const config = {
	images: {
		domains: [
			// Discord assets
			'cdn.discordapp.com',

			// GitHub assets
			'raw.githubusercontent.com',

			// Spotify Album Art
			'i.scdn.co',

			// Unsplash
			'source.unsplash.com',
			'images.unsplash.com',
		],
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: ContentSecurityPolicy.replace(/\n/g, ''),
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
    					key: 'X-Frame-Options',
    					value: 'SAMEORIGIN'
},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
					},
				],
			},
		];
	},
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config, { dev, isServer }) => {
		// TODO: Temp disabled as since upgrading `next` to v12.2.3 production builds fail & this seems to be the cause
		// Replace React with Preact only in client production build
		// if (!dev && !isServer) {
		// 	Object.assign(config.resolve.alias, {
		// 		react: 'preact/compat',
		// 		'react-dom/test-utils': 'preact/test-utils',
		// 		'react-dom': 'preact/compat',
		// 	});
		// }

		config.plugins.push(new WindiCSS());

		config.module.rules.push({
			test: /\.(glsl|vs|fs|frag|vert)$/,
			use: ['ts-shader-loader'],
		});

		return config;
	},
};

module.exports = withAxiom(config);
