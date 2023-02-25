import { ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type AccordionMenuProps = {
	title: string
	items: {
		link: any
		name: string
		path: string
		query?: string
	}[]
	isClose?: boolean
}

const AccordionMenu = ({ title, items, isClose }: AccordionMenuProps) => {
	const [isOpen, setIsOpen] = useState(isClose ? false : true)
	const router = useRouter()

	return (
		<div className=''>
			<div
				className='flex flex-row items-center justify-between cursor-pointer text-sm font-semibold text-white rounded hover:bg-gray-200'
				onClick={() => setIsOpen(!isOpen)}>
				<span>{title}</span>
				<div className={`transition duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
					<ChevronRightIcon className='w-5 ml-1' />
				</div>
			</div>
			<ul
				className={`transition-all duration-1000 leading-7 text-xs font-normal overflow-hidden ${
					isOpen ? 'max-h-screen' : 'max-h-0'
				}`}>
				{items?.map((element, index) => (
					<li key={index} className='ml-4 my-3 rounded hover:bg-gray-200'>
						<div
							className={` ${
								element.query
									? router.query.id === element.query && 'text-white'
									: router.asPath == element.path && 'text-white'
							}`}>
							{element.link.includes('http') ? (
								<a
									href={element.path}
									className='flex flex-row items-center justify-between text-white'
									target='_blank'
									rel='noreferrer'>
									{element.name}
									<div>
										<ChevronRightIcon className='w-4 ml-1' />
									</div>
								</a>
							) : (
								<div
									className='flex flex-row items-center text-white justify-between cursor-pointer'
									onClick={() => {
										router.push(
											{
												pathname: element.path,
												query: { id: element.query }
											},
											element.path
										)
									}}>
									{element.name}
								</div>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default AccordionMenu
