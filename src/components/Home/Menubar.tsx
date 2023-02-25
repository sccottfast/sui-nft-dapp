import Link from 'next/link'
import React from 'react'
type Menubar = {
	data: any
}
function Menubar({ data }: Menubar) {
	const MenuBar = [
		{
			label: 'DApp Recc',
			link: '/news'
		},
		{
			label: 'Airdrop',
			link: '#'
		},
		{
			label: 'DeFi',
			link: '#'
		},
		{
			label: 'NFT',
			link: '#'
		},
		{
			label: 'Bridge',
			link: '#'
		},
		{
			label: 'Exchange',
			link: '#'
		},
		{
			label: 'Tools',
			link: '#'
		},

		{
			label: 'GameFi',
			link: '#'
		},
		{
			label: 'Social',
			link: '#'
		},
		{
			label: 'Lending',
			link: '#'
		}
	]
	return (
		<div className='  border-r '>
			<div className='  border-b '>
				<h3 className='ml-2 flex items-center hover:text-[#e73759] w-44 h-14 hover:border hover:border-gray-200  hover:rounded-lg hover:bg-[#d2c0c3]  '>
					My Favorite
				</h3>
				<h3 className='ml-2 flex items-center hover:text-[#e73759] w-44 h-14 hover:border hover:border-gray-200  hover:rounded-lg hover:bg-[#d2c0c3] '>
					Browsing history
				</h3>
			</div>
			<div className=''>
				{MenuBar?.map((item: any, index: React.Key | null | undefined) => (
					// eslint-disable-next-line react/jsx-key
					<Link key={index} href={item.link}>
						<a
							className='cursor-pointer single-about-us  flex  w-44 h-14 text-center  hover:border  hover:rounded-lg hover:bg-[#d2c0c3] '
							// target='_blank'
							rel='noreferrer'>
							{/* <div className='icon'></div> */}
							<h3 className='ml-2  flex items-center hover:text-[#e73759] w-44 h-14  hover:border-gray-200  hover:rounded-lg '>
								{item.label}
							</h3>
							<p />
						</a>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Menubar
