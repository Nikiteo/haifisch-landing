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
					manualChunks: (id: string) => {
						if (id.includes('node_modules/react') || id.includes('node_modules/react-dom'))
							return 'react'
						if (id.includes('node_modules/i18next') || id.includes('node_modules/react-i18next'))
							return 'i18n'
						if (id.includes('node_modules/framer-motion'))
							return 'animations'
					},
					entryFileNames: `[name].[hash].js`,
					chunkFileNames: `[name].[hash].js`,
					assetFileNames: `[name].[hash].[ext]`,
				},
			},
			minify: 'esbuild',
		},
		esbuild: {
			drop: mode === 'production' ? ['console', 'debugger'] : [],
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
