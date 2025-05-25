import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'gradient-start': '#2D1B69',
				'gradient-mid': '#1E1B4B',
				'gradient-end': '#172554',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			backgroundImage: {
				'light-gradient': 'linear-gradient(135deg, var(--gradient-light-start), var(--gradient-light-mid), var(--gradient-light-end))',
				'dark-gradient': 'linear-gradient(135deg, var(--gradient-dark-start), var(--gradient-dark-mid), var(--gradient-dark-end))'
			},
			gradientColorStops: {
				'gradient-start': '#2D1B69',
				'gradient-mid': '#1E1B4B',
				'gradient-end': '#172554',
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
		plugin(({ addBase }) => {
			addBase({
				':root': {
					'--gradient-light-start': '#ff7e5f',
					'--gradient-light-mid': '#feb47b',
					'--gradient-light-end': '#ffb88c',
					'--gradient-dark-start': '#1A0B2E',
					'--gradient-dark-mid': '#2D1245',
					'--gradient-dark-end': '#3D1959'
				},
			})
		}),
] satisfies Config;
