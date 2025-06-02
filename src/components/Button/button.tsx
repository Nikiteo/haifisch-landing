import React from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'outline'
type ButtonSize = 'small' | 'medium' | 'large'

interface BaseButtonProps {
	children: React.ReactNode
	variant?: ButtonVariant
	size?: ButtonSize
	className?: string
	fullWidth?: boolean
	disabled?: boolean
	active?: boolean
}

interface ButtonAsButtonProps extends BaseButtonProps {
	as?: 'button'
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void
}

interface ButtonAsLinkProps extends BaseButtonProps {
	as: 'a'
	href: string
	target?: string
	rel?: string
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

export const Button: React.FC<ButtonProps> = (props) => {
	const {
		children,
		variant = 'primary',
		size = 'medium',
		className = '',
		fullWidth = false,
		disabled = false,
		active = false,
		...rest
	} = props

	const classNames = [
		styles.button,
		styles[variant],
		styles[size],
		fullWidth ? styles.fullWidth : '',
		disabled ? styles.disabled : '',
		active ? styles.active : '',
		className,
	].join(' ').trim()

	if ('as' in rest && rest.as === 'a') {
		const { href, target, rel } = rest
		return (
			<a
				className={classNames}
				href={disabled ? undefined : href}
				target={target}
				rel={rel}
				aria-disabled={disabled}
				tabIndex={disabled ? -1 : undefined}
			>
				{children}
			</a>
		)
	}

	const { type = 'button', onClick } = rest as ButtonAsButtonProps
	return (
		<button
			type={type}
			className={classNames}
			onClick={disabled ? undefined : onClick}
			tabIndex={disabled ? -1 : undefined}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
