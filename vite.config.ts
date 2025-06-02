import process from 'node:process'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import cssnano from 'cssnano'
import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	return {
		base: '/',
		plugins: [
			react(),
			createHtmlPlugin({
				inject: {
					data: {
						yandexApiKey: env.VITE_YANDEX_MAPS_API_KEY || '',
						appVersion: env.npm_package_version,
					},
				},
				minify: true,
			}),
			ViteImageOptimizer({
				jpg: { quality: 80 },
				png: { quality: 80 },
				webp: { quality: 80 },
			}),
		],
		publicDir: 'public',
		build: {
			target: 'esnext',
			chunkSizeWarningLimit: 1500,
			rollupOptions: {
				output: {
					manualChunks: {
						react: ['react', 'react-dom'],
						i18n: ['i18next', 'react-i18next'],
						animations: ['framer-motion'],
					},
					entryFileNames: `[name].js`,
					chunkFileNames: `[name].js`,
					assetFileNames: `[name].[ext]`,
				},
			},
			minify: 'terser',
			terserOptions: {
				compress: {
					drop_console: mode === 'production',
				},
			},
		},
		optimizeDeps: {
			exclude: ['@yandex/ymaps3-default-ui-theme'],
			include: ['react', 'react-dom'],
		},
		resolve: {
			alias: {
				'@': `${__dirname}/src`,
			},
		},
		server: {
			port: 3000,
			open: true,
			strictPort: true,
			hmr: {
				overlay: false,
			},
		},
		css: {
			modules: {
				localsConvention: 'camelCaseOnly',
			},
			postcss: {
				plugins: [cssnano({ preset: 'default' })],
			},
		},
	}
})
