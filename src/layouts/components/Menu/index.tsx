import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Spin, Menu } from 'antd'
import Logo from './components/Logo'
import type { MenuProps } from 'antd'
import * as Icons from '@ant-design/icons'
import { getMenuList } from '@/api/modules/login'
import { setBreadcrumbList } from '@/store/modules/breadcrumb'
import { useDispatch, useSelector } from '@/store'
import { findAllBreadcrumb, getOpenKeys } from '@/utils/util'
import './index.less'

// interface PropsType {}

const LayoutMenu: React.FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { isCollapse } = useSelector(state => state.menu)
	const { pathname } = useLocation()
	console.log(pathname)
	const [loading, setLoading] = useState<boolean>(false)
	const [openKeys, setOpenKeys] = useState<string[]>([])
	const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname])
	const [menuList, setMenuList] = useState<MenuItem[]>([])

	// 刷新页面菜单保持高亮
	useEffect(() => {
		setSelectedKeys([pathname])
		isCollapse ? null : setOpenKeys(getOpenKeys(pathname))
	}, [pathname, isCollapse])

	// 定义 menu 类型
	type MenuItem = Required<MenuProps>['items'][number]
	const getItem = (
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: MenuItem[],
		type?: 'group'
	): MenuItem => {
		return {
			key,
			icon,
			children,
			label,
			type
		} as MenuItem
	}

	// 动态渲染 Icon 图标
	const customIcons: { [key: string]: any } = Icons
	const addIcon = (name: string) => {
		return React.createElement(customIcons[name])
	}

	// 处理后台返回菜单 key 值为 antd 菜单需要的 key 值
	const deepLoopFloat = (menuList: Menu.MenuOptions[], newArr: MenuItem[] = []) => {
		menuList.forEach((item: Menu.MenuOptions) => {
			// 下面判断代码解释 *** !item?.children?.length   ==>   (!item.children || item.children.length === 0)
			if (!item?.children?.length) return newArr.push(getItem(item.title, item.path, addIcon(item.icon!)))
			newArr.push(getItem(item.title, item.path, addIcon(item.icon!), deepLoopFloat(item.children)))
		})
		return newArr
	}

	// 获取菜单列表并处理成 antd menu 需要的格式
	const getMenuData = async () => {
		setLoading(true)
		try {
			const { data } = await getMenuList()
			if (!data) return
			setMenuList(deepLoopFloat(data))
			// 存储处理过后的所有面包屑导航栏到 redux 中
			dispatch(setBreadcrumbList(findAllBreadcrumb(data)))
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getMenuData()
	}, [])

	// 设置当前展开的 subMenu
	const onOpenChange = (openKeys: string[]) => {
		if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys)
		const latestOpenKey = openKeys[openKeys.length - 1]
		if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys)
		setOpenKeys([latestOpenKey])
	}

	// 点击当前菜单跳转页面
	// const navigate = useNavigate()
	const clickMenu: MenuProps['onClick'] = ({ key }: { key: string }) => {
		navigate(key)
	}

	return (
		<div className='menu'>
			<Spin spinning={loading} tip='Loading...'>
				<Logo></Logo>
				<Menu
					theme='dark'
					mode='inline'
					triggerSubMenuAction='click'
					openKeys={openKeys}
					selectedKeys={selectedKeys}
					items={menuList}
					onClick={clickMenu}
					onOpenChange={onOpenChange}
				></Menu>
			</Spin>
		</div>
	)
}

export default LayoutMenu
