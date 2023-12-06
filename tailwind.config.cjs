/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontSize: {
				header: "320%",
			},

			colors: {
				primary: "#faaac7",
				primary_light: "#ffc8dd",
				highlight: "#a2d2ff",
				highlight_light: "#bee2ff",
				highlight_dark: "#405a73",

				bg: "#0d0414",

				dark: "#3a393a",
				lighter: "#969396", //* dark but lighter
				danger: "#fc6868",
				glint: "#f0d067",
				light: "#eef0f2",
				darker: "#d4d9d9", //* light but darker
			},
			keyframes: {
				"pulse-gentle": {
					"0%, 100%": { filter: "brightness(1)" },
					"50%": { filter: "brightness(1.2)" },
				},
			},
			animation: {
				pulseGentle: "pulse-gentle 2s linear infinite",
			},
		},

		fontFamily: {
			sans: ["Unbounded", "Roboto", "ui-sans-serif", "system-ui"],
			mono: ["Fira Code", "ui-monospace", "monospace", "SFMono-Regular"],
			display: ["Lobster", "Segoe Script"],
		},
	},
	plugins: [],
};
