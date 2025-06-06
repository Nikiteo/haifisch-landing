import path from 'node:path'
import { fileURLToPath } from 'node:url'
import svgr from '@svgr/rollup'
import react from '@vitejs/plugin-react'
import cssnano from 'cssnano'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig(({ mode }) => {
	return {
		base: '/',
		plugins: [
			react(),
			svgr(),
			ViteImageOptimizer({
				jpg: { quality: 80 },
				png: { quality: 80 },
				webp: { quality: 80 },
			}),
		],
		publicDir: 'public',
		build: {
			target: 'esnext',
			chunkSizeWarningLimit: 1000,
			rollupOptions: {
				output: {
					manualChunks: {
						react: ['react', 'react-dom'],
						i18n: ['i18next', 'react-i18next'],
						animations: ['framer-motion'],
					},
					entryFileNames: `[name].[hash].js`,
					chunkFileNames: `[name].[hash].js`,
					assetFileNames: `[name].[hash].[ext]`,
				},
			},
			minify: 'terser',
			terserOptions: {
				compress: {
					drop_console: mode === 'production',
					drop_debugger: true,
				},
			},
		},
		optimizeDeps: {
			exclude: ['@yandex/ymaps3-default-ui-theme'],
			include: ['react', 'react-dom'],
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
			extensions: ['.js', '.ts', '.jsx', '.tsx'],
		},
		server: {
			port: 3000,
			open: true,
			strictPort: true,
			hmr: {
				overlay: true,
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
