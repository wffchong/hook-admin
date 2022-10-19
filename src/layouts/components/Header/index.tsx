import { Layout } from 'antd'
import { CollapseIcon, BreadcrumbNav, AssemblySize, Language, Theme, Fullscreen, AvatarIcon } from './components'
import './index.less'

const { Header } = Layout

const LayoutHeader: React.FC = () => {
	return (
		<Header>
			<div className='header-lf'>
				<CollapseIcon />
				<BreadcrumbNav />
			</div>
			<div className='header-ri'>
				<AssemblySize />
				<Language />
				<Theme />
				<Fullscreen />
				<span className='username'>Username</span>
				<AvatarIcon />
			</div>
		</Header>
	)
}

export default LayoutHeader
