import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/images/Logo/logo.png'
import { DownloadIcon, SearchIcon } from '@heroicons/react/solid'
// import icondowload from '../../assets/images/iconheader/dowload.png'
import iconglobal from '../../assets/images/iconheader/global.png'
import icondark from '../../assets/images/iconheader/dark.svg'
import InputText from '../common/InputText'
import PostFiltes from './Home/PostFiltes'
import { getDapp } from '../api/suidapp'

const Header = () => {
	const [collapse, setCollapse] = useState('nav__menu')
	const [toggleIcon, setToggleIcon] = useState('toggler__icon')

	const onToggle = () => {
		collapse === 'nav__menu' ? setCollapse('nav__menu nav__collapse') : setCollapse('nav__menu')
		toggleIcon === 'toggler__icon'
			? setToggleIcon('toggler__icon toggle')
			: setToggleIcon('toggler__icon')
	}
	const [addressData, setAddressData] = useState<any>()
	useEffect(() => {
		const getData = async () => {
			const addressData = await getDapp()

			setAddressData(addressData.data)
		}
		getData()
	}, [])
	console.log(addressData)
	const headerEl = [
		{
			title: 'Wallet',
			link: '/x',
			element: []
		},
		{
			title: 'Swap',
			link: '/',
			element: []
		},
		{
			title: 'NFT',
			link: '/',
			element: []
		},

		{
			title: 'DApp',
			link: '/',
			element: []
		},

		{
			title: 'Business',
			link: '/',
			element: []
		},

		{
			title: 'More',
			link: '/',
			element: []
		}
	]
	function handleFiltersChange(getDapp: any) {
		console.log('New filters:', getDapp)
	}
	return (
		<header className=' bg-gray-200 '>
			<div className='flex justify-center w-full'>
				<div className='mt-48 my-5'>
					<div className=' flex justify-center items-center  my-5 '>
						{/* <Image src={logo} width={40} height={40} alt='logo' /> */}
						<span className='text-3xl sm:text-2xl md:text-8xl font-semibold ml-2 mr-4'>Glass</span>
					</div>
					{/* <PostFiltes onSubmit={handleFiltersChange} /> */}
					<div className='  bg-gray-100 rounded-3xl  flex items-center py-1 md:px-40'>
						<SearchIcon className='w-8 md:-ml-28 inline-block ' />
						<InputText
							value=''
							placeholder='Enter DApp Name'
							width='md:w-96 text-xl rounded-r-3xl md:mr-40'
							onChange={function (str: string): void {}}></InputText>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
