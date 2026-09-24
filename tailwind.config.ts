import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { wine: '#581c22', gold: '#b39055', ivory: '#f8f5ef' } } }, plugins: [] };
export default config;
