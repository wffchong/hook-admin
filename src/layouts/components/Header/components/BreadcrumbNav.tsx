import { Breadcrumb } from 'antd'
import { HOME_URL } from '@/config/config'
import { useLocation } from 'react-router'
import { useSelector } from '@/store'

const BreadcrumbNav: React.FC = () => {
	const { pathname } = useLocation()
	const breadcrumbList = useSelector(state => state.breadcrumb.breadcrumbList[pathname]) || []

	return (
		<Breadcrumb>
			<Breadcrumb.Item href={`#${HOME_URL}`}>首页</Breadcrumb.Item>
			{breadcrumbList.map((item: string) => {
				return <Breadcrumb.Item key={item}>{item === '首页' ? null : item}</Breadcrumb.Item>
			})}
		</Breadcrumb>
	)
}

export default BreadcrumbNav
