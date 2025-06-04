import antfu from '@antfu/eslint-config'

export default antfu({
	type: 'src',
	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},
	react: true,
	typescript: { tsconfigPath: 'tsconfig.json' },
	formatters: {
		css: true,
		html: true,
		markdown: 'prettier',
	},
})
