import React from 'react'
import lazyLoad from '@/routes/util/lazyLoad'
import { LayoutIndex } from '@/routes/constant'
import { RouteObject } from '@/routes/interface'

// 数据大屏模块
const dataScreenRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: '/dataScreen/index',
				element: lazyLoad(React.lazy(() => import('@/views/dataScreen/index'))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: '数据大屏',
					key: 'dataScreen'
				}
			}
		]
	}
]

export default dataScreenRouter
