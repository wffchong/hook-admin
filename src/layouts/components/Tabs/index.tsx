import { HOME_URL } from '@/config/config'
import { useDispatch, useSelector } from '@/store'
import { setTabsList } from '@/store/modules/tabs'
import { searchRoute } from '@/utils/util'
import { HomeFilled } from '@ant-design/icons'
import { message, Tabs } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { routerArray } from '@/routes'
import './index.less'

const LayoutTabs: React.FC = () => {
	const { TabPane } = Tabs
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { tabsList } = useSelector(state => state.tabs)
	const [activeValue, setActiveValue] = useState<string>(pathname)

	useEffect(() => {
		addTabs()
	}, [pathname])

	// click tabs
	const clickTabs = (path: string) => {
		navigate(path)
	}

	// add tabs
	const addTabs = () => {
		const route = searchRoute(pathname, routerArray)
		let tabList = JSON.parse(JSON.stringify(tabsList))
		// 处理直接输入且导航栏没点过的
		if (tabsList.every((item: any) => item.path !== route.path)) {
			tabList.push({ title: route.meta!.title, path: route.path })
		}
		dispatch(setTabsList(tabList))
		setActiveValue(pathname)
	}

	// delete tabs
	const delTabs = (tabPath: string) => {
		// 删除当前项
		if (tabPath === pathname) {
			tabsList.forEach((item: Menu.MenuOptions, index: number) => {
				if (item.path !== tabPath) return
				const nextTab = tabsList[index + 1] || tabsList[index - 1]
				if (!nextTab) return
				navigate(nextTab.path)
			})
		}
		message.success('你删除了Tabs标签 😆😆😆')
		dispatch(setTabsList(tabsList.filter((item: Menu.MenuOptions) => item.path !== tabPath)))
	}

	return (
		<Tabs
			activeKey={activeValue}
			onChange={clickTabs}
			hideAdd
			type='editable-card'
			onEdit={path => {
				delTabs(path as string)
			}}
		>
			{tabsList.map((item: Menu.MenuOptions) => {
				return (
					<TabPane
						key={item.path}
						tab={
							<span>
								{item.path == HOME_URL ? <HomeFilled /> : ''}
								{item.title}
							</span>
						}
						closable={item.path !== HOME_URL}
					></TabPane>
				)
			})}
		</Tabs>
	)
}
export default LayoutTabs
