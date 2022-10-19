import { Layout } from 'antd'
import { CollapseIcon, BreadcrumbNav } from './components'
import './index.less'

const { Header } = Layout

const LayoutHeader: React.FC = () => {
	return (
		<Header>
			<div className='header-lf'>
				<CollapseIcon />
				<BreadcrumbNav />
			</div>
			<div className='header-ri'></div>
		</Header>
	)
}

export default LayoutHeader
