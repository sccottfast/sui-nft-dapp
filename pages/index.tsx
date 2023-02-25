import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import LayoutPage from '../src/common/LayoutPage'

const Home: NextPage = () => {
	const router = useRouter()
	useEffect(() => {
		router.push('/home')
	})

	return (
		<div>
			<LayoutPage title='Glass DApp'></LayoutPage>
		</div>
	)
}

export default Home
