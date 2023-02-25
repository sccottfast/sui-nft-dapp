import Link from 'next/link'
import React from 'react'
import EmblaCarousel from './EmblaCarousel'
type Menubar = {
	data: any
}
function Menubar({ data }: Menubar) {
	const MenuBar = [
		{
			label: 'My Favorite',
			link: '/'
		},
		{
			label: 'Browsing history',
			link: '#'
		},
		{
			label: 'DApp ',
			link: '/news'
		},
		{
			label: 'Airdrop',
			link: '#'
		},
		{
			label: 'DApp ',
			link: '#'
		},
		{
			label: 'Airdrop',
			link: '#'
		},
		{
			label: 'NFT',
			link: '#'
		},
		{
			label: 'Exchange',
			link: '#'
		}
	]
	return (
		<div className='  '>
			<EmblaCarousel slides={MenuBar} className='' />
		</div>
	)
}

export default Menubar
