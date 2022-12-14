import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import LayoutMenu from './components/Menu'
import LayoutHeader from './components/Header'
import LayoutTabs from './components/Tabs'
import LayoutFooter from './components/Footer'
import { useDispatch, useSelector } from '@/store'
import { updateCollapse } from '@/store/modules/menu'

import './index.less'
import { getAuthorButtons } from '@/api/modules/login'
import { setAuthButtons } from '@/store/modules/auth'

const { Sider, Content } = Layout

const LayoutIndex: React.FC = () => {
	const dispatch = useDispatch()
	const { isCollapse } = useSelector(state => state.menu)

	// 监听窗口大小变化
	const listeningWindow = () => {
		window.onresize = () => {
			return (() => {
				let screenWidth = document.body.clientWidth
				if (isCollapse === false && screenWidth < 1200) dispatch(updateCollapse(true))
				if (isCollapse === false && screenWidth > 1200) dispatch(updateCollapse(false))
			})()
		}
	}

	// 获取按钮权限列表
	const getAuthButtonsList = async () => {
		const { data } = await getAuthorButtons()
		dispatch(setAuthButtons(data!))
	}

	useEffect(() => {
		getAuthButtonsList()
		listeningWindow()
	}, [])

	return (
		<section className='container'>
			<Sider trigger={null} collapsed={isCollapse} width={220} theme='dark'>
				<LayoutMenu></LayoutMenu>
			</Sider>
			<Layout>
				<LayoutHeader></LayoutHeader>
				<LayoutTabs></LayoutTabs>
				<Content>
					{/* TransitionGroup 会导致 useEffect 加载两次，后期在解决 */}
					{/* <TransitionGroup className='content'> */}
					{/* exit：表示退出当前页面的时候是否有动画 */}
					{/* <CSSTransition key={pathname} timeout={200} classNames='fade' exit={false}> */}
					<Outlet></Outlet>
					{/* </CSSTransition> */}
					{/* </TransitionGroup> */}
				</Content>
				<LayoutFooter></LayoutFooter>
			</Layout>
		</section>
	)
}

export default LayoutIndex
