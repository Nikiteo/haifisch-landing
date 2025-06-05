/** @type {import('@lhci/cli').LHCIConfig} */
module.exports = {
	ci: {
		collect: {
			startServerCommand: 'vite preview',
			url: ['http://localhost:4173'],
			numberOfRuns: 3,
		},
		assert: {
			preset: 'lighthouse:recommended',
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
}
