import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { updateCollapse } from '@/store/modules/menu'
import { useDispatch, useSelector } from '@/store'

const CollapseIcon: React.FC = () => {
	const dispatch = useDispatch()
	const { isCollapse } = useSelector(state => state.menu)

	return (
		<div
			className='collapsed'
			onClick={() => {
				dispatch(updateCollapse(!isCollapse))
			}}
		>
			{isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
		</div>
	)
}
export default CollapseIcon
