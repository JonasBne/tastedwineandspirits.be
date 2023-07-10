import { m } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'vineyard-680w': "url('/assets/images/vineyard-680w.jpg')",
				'vineyard-768w': "url('/assets/images/vineyard-768w.jpg')",
			},
			colors: {
				rose: {
					primary: '#F08E80',
					secondary: '#FDF0E6'
				}
			}
		},
	},
	plugins: [],
}
