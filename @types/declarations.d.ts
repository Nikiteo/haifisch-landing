declare module '*.png' {
	const path: string
	export default path
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.gif';

declare module '*.svg' {
	import type React from 'react'

	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
	const src: string
	export default src
}

declare module '*.json';

declare module '*.module.css' {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare module '*.module.scss' {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare module '*.module.sass' {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.eot';
