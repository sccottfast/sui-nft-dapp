import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/images/Logo/logo.png'
import Facebook from '../../assets/images/iconfooter/Facebook.svg'
import Instgram from '../../assets/images/iconfooter/Instgram.svg'
import Twitter from '../../assets/images/iconfooter/Twitter.svg'
import Linkedin from '../../assets/images/iconfooter/Linkedin.svg'
import AccordionMenu from './AccordionMenu'
const Footer = () => {
	const footerEl = [
		{
			title: 'About Us',
			element: [
				{
					name: 'Company',
					link: '/'
				},
				{
					name: 'Authenticity verification',
					link: '/'
				},
				{
					name: 'Join Ushiring!',
					link: '/'
				},
				{
					name: 'Partnership',
					link: '/'
				}
			]
		},
		{
			title: 'User Support',
			element: [
				{
					name: 'Contact Us',
					link: '/'
				},
				{
					name: 'Business',
					link: '/'
				}
			]
		},
		{
			title: 'Wallet',
			element: [
				{
					name: 'IOS',
					link: '/'
				},
				{
					name: 'Android',
					link: '/'
				},
				{
					name: 'Chrome Extension',
					link: '/'
				}
			]
		},
		{
			title: 'Q&A',
			element: [
				{
					name: 'How to create a wallet',
					link: '/'
				},
				{
					name: 'How to make a transfer',
					link: '/'
				},
				{
					name: 'How to trade',
					link: '/'
				},
				{
					name: 'How to make a cross-chain swap',
					link: '/'
				},
				{
					name: 'How to trade NFTs',
					link: '/'
				}
			]
		},
		{
			title: 'Resource',
			element: [
				{
					name: 'Material',
					link: '/'
				},
				{
					name: 'Privacy Policy',
					link: '/'
				},
				{
					name: 'User Agreement',
					link: '/'
				}
			]
		}
	]
	return (
		<div className='bg-[#000000] w-auto h-auto py-5'>
			<div className=' '>
				<div className='grid grid-cols-1 md:grid-cols-6'>
					<div className='flex justify-center  py-5 md:py-1'>
						<div className=' '>
							<Image src={logo} width={35} height={35} alt='logo' />
						</div>
						<h1 className='ml-4 text-2xl md:text-xl font-semibold  text-white'>Glass DApp</h1>
					</div>
					{footerEl.map((item, index) => (
						<div key={index} className=' hidden md:block'>
							<div className='flex flex-col ml-4'>
								<h3 className='flex flex-row items-left text-white mb-8 '>
									<span className='lg:text-3xl text-left text-lg '>{item.title}</span>
								</h3>
								<ul>
									{item.element.map((element, index) => (
										<li
											key={index}
											className='flex flex-col py-3 font-normal lg:text-base text-sm text-white '>
											{element.link ? (
												<Link href={element.link}>
													{element.link.includes('http') ? (
														<a></a>
													) : (
														<a className='transition hover:translate-x-1 hover:text-[#e73759]'>
															{element.name}
														</a>
													)}
												</Link>
											) : (
												<a></a>
											)}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
					<div className={`pr-8 flex flex-col items-start justify-between md:hidden block`}>
						{footerEl.map((item: any, index) => (
							<div key={index} className='m-2 w-full'>
								<div className=''>
									<AccordionMenu
										title={item.title}
										items={item.element}
										isClose={
											index === 0 || index === 1 || index === 2 || index === 3 || index === 4
										}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='border-t-[0.2px] border-white opacity-2 grid md:grid-cols-2 justify-center md:justify-end py-3 ml-4'>
				<h1 className=' text-white font-extralight text-base flex items-center justify-start py-2'>
					Copyright © 2022 Glass.All Rights Reserved
				</h1>
				<div className='flex justify-center md:justify-end'>
					<Link href='https://' passHref>
						<a className='mr-4'>
							<Image src={Facebook} width={30} height={30} alt='Face' objectFit='cover' />
						</a>
					</Link>
					<Link href='https://' passHref>
						<a className='mr-4'>
							<Image src={Twitter} width={30} height={30} alt='Twitter' objectFit='cover' />
						</a>
					</Link>
					<Link href='https://discord.com/invite/88UC42UJ' passHref>
						<a className='mr-4'>
							<Image src={Instgram} width={30} height={30} alt='discord' objectFit='cover' />
						</a>
					</Link>
					<Link href='https://' passHref>
						<a className='mr-4'>
							<Image src={Linkedin} width={30} height={30} alt='Linkedin' objectFit='cover' />
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer
