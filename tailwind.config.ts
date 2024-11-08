import aspectRatio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, aspectRatio, daisyui],
	daisyui: {
		themes: ['light', 'dark', 'cupcake']
	}
} satisfies Config;
