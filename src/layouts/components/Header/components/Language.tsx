import { Tooltip, Dropdown, Menu } from 'antd'

const menu = (
	<Menu
		items={[
			{
				key: '1',
				label: <span>简体中文</span>
			},
			{
				key: '2',
				label: <span>English</span>
			}
		]}
	/>
)

const Language: React.FC = () => {
	return (
		<Dropdown overlay={menu} placement='bottom' trigger={['click']} arrow={true}>
			<Tooltip placement='bottom' title={'语言'}>
				<i className='icon-style iconfont icon-zhongyingwen'></i>
			</Tooltip>
		</Dropdown>
	)
}

export default Language
