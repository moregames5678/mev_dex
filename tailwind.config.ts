import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				'main': 'var(--shadow-main)',
				'magenta-btn': 'var(--shadow-btn-magenta)',
			},
			backgroundImage: {
				'gd-main': 'var(--gradient-main)',
				'gd-secondary': 'var(--gradient-secondary)',
				'gd-sidebar-btn-off': 'var(--gradient-sidebar-btn-off)',
				'gd-divider': 'var(--gradient-divider)',
				'gd-magenta': 'var(--gradient-magenta)',
				'gd-magenta-2': 'var(--gradient-magenta-2)',
				'gd-red': 'var(--gradient-red)',
				'gd-inside-red': 'var(--gradient-inside-red)',
				'gd-purple': 'var(--gradient-purple)',
				'gd-text-sol': 'var(--gradient-text-sol)',
				'gd-border-main': 'var(--gradient-border-main)',
			},
			colors: {
				green: 'var(--green)',
				blue: 'var(--blue)',
				magenta: 'var(--magenta)',
				'pink-hot': 'var(--pink-hot)',
				'yellow-amber': 'var(--yellow-amber)',
				'yellow-chartreuse': 'var(--yellow-chartreuse)',
				dark: 'var(--dark)',

				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			lineHeight: {
				'extra-loose': '2.5',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
