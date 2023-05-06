const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite/**/*.js',
    ],

    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'blue-zodiac': {
                    '50': '#eaf6ff',
                    '100': '#d8efff',
                    '200': '#b9dfff',
                    '300': '#8fc8ff',
                    '400': '#63a3ff',
                    '500': '#407eff',
                    '600': '#1e54ff',
                    '700': '#1446ee',
                    '800': '#133dc0',
                    '900': '#193a96',
                    '950': '#0d1c4b',
                },
                'cod-gray': { DEFAULT: '#0A0A0A', 50: '#151515', 100: '#141414', 200: '#121212', 300: '#0F0F0F', 400: '#0D0D0D', 500: '#0A0A0A', 600: '#070707', 700: '#050505', 800: '#020202', 900: '#000000', 950: '#000000' },
                'mirage': { DEFAULT: '#141923', 50: '#46587B', 100: '#415171', 200: '#35435D', 300: '#2A354A', 400: '#1F2736', 500: '#141923', 600: '#10141D', 700: '#0D1016', 800: '#090B10', 900: '#050609', 950: '#030406' },
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
})