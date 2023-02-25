import { NextPage } from 'next'
import Home from '.'
import LayoutPage from '../src/common/LayoutPage'
import HomeLayout from '../src/components/Home/HomeLayout'
import Menubar from '../src/components/Home/Menubar'
import New from '../src/components/Home/New'

const news: NextPage = () => (
	<LayoutPage>
		<HomeLayout />
	</LayoutPage>
)

export default news
