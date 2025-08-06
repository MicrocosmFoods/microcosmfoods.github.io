/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				chivo: ['Chivo', 'sans-serif'],
			},
			colors: {
				'brand-green': '#3C4228',
			},
		},
	},
	plugins: [],
}
