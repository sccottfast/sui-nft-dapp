import React from 'react'
import Menubar from './Menubar'
import New from './New'

function HomeLayout() {
	return (
		<div className='flex md:flex-row flex-cols  bg-white w-full'>
			{/* <Menubar data={undefined} /> */}
			<New data={undefined} />
		</div>
	)
}

export default HomeLayout
