/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getDapp } from '../../api/suidapp'
import Menubar from './Menubar'
import MenubarMobile from './MenuBarMobile'
import icondowload from '../../../assets/images/Logo/download1.svg'
import icontwitter from '../../../assets/images/iconfooter/twitterr.svg'
import icontele from '../../../assets/images/iconfooter/tele.svg'
import icondis from '../../../assets/images/iconfooter/discord.svg'

type New = {
	data: any
}
function New({ data }: New) {
	const [addressData, setAddressData] = useState<any>()
	useEffect(() => {
		const getData = async () => {
			const addressData = await getDapp()

			setAddressData(addressData.data)
		}
		getData()
	}, [])
	console.log(addressData)

	return (
		<div className='w-full bg-gray-200 '>
			{/* <div className='  display'>
				<Menubar data={undefined} />
			</div> */}
			<div className=' '>
				<MenubarMobile data={undefined} />
			</div>
			<div className='m-3'>
				<div className='my- text-center'>
					<span className='font-bold  text-xl md:text-3xl'>Partner</span>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  pb-96'>
					{addressData
						? addressData.map((item: any, index: React.Key | null | undefined) => (
								// eslint-disable-next-line react/jsx-key
								<a
									target={'_blank'}
									href={item.Link as string}
									className='border border-gray-300  h-40 rounded-lg p-3 hover:bg-[#f6f4f4] cursor-pointer'
									rel='noreferrer'>
									<div className=''>
										<div className='flex flex-row  items-center w-full '>
											<div className='rounded-full  w-10 h-10 items-center justify-center bg-white border flex border-gray-200'>
												<img src={item.Logo} width={30} height={30} className='rounded-full' />
											</div>
											<div className='flex flex-row  items-center w-full justify-between'>
												<span className='font-bold md:text-xs mx-2'>{item.Name}</span>
												<Image src={icondowload} width={17} height={17} className='rounded-full ' />
											</div>
										</div>
										<span className='text_truncate break-normal	h-16'>{item.Description}</span>
									</div>
									<div className='flex justify-end  '>
										<a
											className=' flex justify-center bg-gray-200 border-4 rounded-full   mx-1'
											target={'_blank'}
											href={item.Twitter as string}
											rel='noreferrer'>
											<Image src={icontwitter} width={17} height={17} className='rounded-full ' />
										</a>
										<a
											className=' flex justify-center bg-gray-200 border-4 rounded-full  mx-1'
											target={'_blank'}
											href={item.Telegram as string}
											rel='noreferrer'>
											<Image src={icontele} width={17} height={17} className='rounded-full ' />
										</a>
										<a
											className=' flex justify-center bg-gray-200 border-4 rounded-full  mx-1'
											target={'_blank'}
											href={item.Discord as string}
											rel='noreferrer'>
											<Image src={icondis} width={17} height={17} className='rounded-full ' />
										</a>
									</div>
								</a>
						  ))
						: null}
				</div>
			</div>
		</div>
	)
}

export default New
