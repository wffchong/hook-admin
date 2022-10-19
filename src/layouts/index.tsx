import { Layout } from 'antd'
import LayoutMenu from './components/Menu'
import './index.less'

const { Sider } = Layout

const LayoutIndex: React.FC = () => {
	return (
		<section className='container'>
			<Sider>
				<LayoutMenu></LayoutMenu>
			</Sider>
		</section>
	)
}

export default LayoutIndex
