import { Layout } from 'antd'
import CollapseIcon from './components/CollapseIcon'
import './index.less'

const { Header } = Layout

const LayoutHeader: React.FC = () => {
	return (
		<Header>
			<div className='lf'>
				<CollapseIcon />
			</div>
			<div className='ri'></div>
		</Header>
	)
}

export default LayoutHeader
