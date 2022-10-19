import { Layout } from 'antd'
import LayoutMenu from './components/Menu'
import LayoutHeader from './components/Header'
import './index.less'
import { useSelector } from '@/store'

const { Sider } = Layout

const LayoutIndex: React.FC = () => {
	const { isCollapse } = useSelector(state => state.menu)

	return (
		<section className='container'>
			<Sider trigger={null} collapsed={isCollapse} width={220} theme='dark'>
				<LayoutMenu></LayoutMenu>
			</Sider>
			<Layout>
				<LayoutHeader></LayoutHeader>
			</Layout>
		</section>
	)
}

export default LayoutIndex