const esbuild = require('esbuild')
const postCssPlugin = require("esbuild-plugin-postcss2")
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')

esbuild.build({
	entryPoints: ['src/myapp.ts', 'src/styles/main.css'],
	outdir: 'www',
	minify: true,
	bundle: true,
	plugins: [
		postCssPlugin.default({
			plugins: [
				tailwindcss,
				autoprefixer,
				postcssImport(true)
			]
		})
	]
}).catch(() => process.exit(1))