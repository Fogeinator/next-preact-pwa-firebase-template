const withPrefresh = require('@prefresh/next');
const preact = require('preact');

const withPreact = require('next-plugin-preact');
const withPWA = require('next-pwa');

require('dotenv').config();

module.exports = withPreact(withPWA({
	pwa: {
		dest: 'public'
	},
	distDir: "nextjs",
	env: {
		FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
		FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
		FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
		FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
		FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
		FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER,
		FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
		FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
	},
	experimental: {
		modern: true,
		sprFlushToDisk: false,
	}
}))
