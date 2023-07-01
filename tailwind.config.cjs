/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'vineyard-445w': "url('/assets/images/vineyard-445w.jpg')",
			}
		},
	},
	plugins: [],
}
