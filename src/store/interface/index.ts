import type { SizeType } from 'antd/lib/config-provider/SizeContext'

/* GlobalState */
export interface GlobalState {
	token: string
	assemblySize: SizeType
	language: string
}

/* MenuState */
export interface MenuState {
	isCollapse: boolean
	menuList: Menu.MenuOptions[]
}

/* BreadcrumbState */
export interface BreadcrumbState {
	breadcrumbList: {
		[propName: string]: any
	}
}

/* TabsState */
export interface TabsState {
	tabsActive: string
	tabsList: Menu.MenuOptions[]
}
