import React from 'react'

type InputTextProps = {
	className?: string
	disabled?: boolean
	padding?: string
	children?: React.ReactNode
	onChange: (str: string) => void
	onKeyDown?: () => void
	value?: string
	placeholder?: string
	maxlength?: number
	width?: string
}

const InputText = ({
	className = '',
	disabled = false,
	padding = 'p-3',
	value = '',
	placeholder = 'Nhập URL',
	onChange,
	onKeyDown,
	children,
	maxlength = 256,
	width = 'w-96'
}: InputTextProps) => {
	const handleEnter = (e: { keyCode: number } | undefined) => {
		if (e?.keyCode === 13) {
			if (onKeyDown) onKeyDown()
		}
	}

	return (
		<div className='w-full flex flex-row justify-center'>
			<input
				autoComplete='off'
				onKeyDown={(e) => handleEnter(e)}
				onChange={(e) => onChange(e.target.value)}
				className={`
        transition duration-500 rounded-lg w-80 bg-gray-100 text-left focus:ring-0 focus:outline-none focus:bg-gray-100 
        ${className} ${padding} ${width}`}
				name='url'
				id='exampleInputURL'
				placeholder={placeholder}
				disabled={disabled}
				maxLength={maxlength}
			/>
			{children}
		</div>
	)
}

export default InputText
