import { NextPage } from 'next'
import Home from '.'
import LayoutPage from '../src/common/LayoutPage'
import HomeLayout from '../src/components/Home/HomeLayout'
import Menubar from '../src/components/Home/Menubar'

const home: NextPage = () => {
	return (
		<LayoutPage>
			<HomeLayout />
		</LayoutPage>
	)
}

export default home
