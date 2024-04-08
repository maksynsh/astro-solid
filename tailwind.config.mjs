/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		colors: {
			transparent: 'transparent',
			white: '#fff',
			black: '#000',
			violet: {
        '50': '#f9f5ff',
        '100': '#f1e8ff',
        '200': '#e6d5ff',
        '300': '#d2b4fe',
        '400': '#b684fc',
        '500': '#9b56f6',
        '600': '#883aea',
        '700': '#7023cd',
        '800': '#6021a8',
        '900': '#4f1c87',
        '950': '#310a65',
			},
			slate: {
        '50': '#f6f7f9',
        '100': '#eceef2',
        '200': '#d5dae2',
        '300': '#b0b9c9',
        '400': '#8593ab',
        '500': '#667691',
        '600': '#515f78',
        '700': '#434d61',
        '800': '#3a4252',
        '900': '#23262d',
        '950': '#13151a',
			},
		},
		extend: {
			fontFamily: {
        sans: ['Montserrat', 'sans-serif']
			},
			backgroundSize: {
          'size-400': '400%',
      },
      backgroundPosition: {
          'pos-0': '0%',
          'pos-100': '100%',
      },
		},
	},
	plugins: [],
}
