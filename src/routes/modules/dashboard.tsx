import React from 'react'
import lazyLoad from '@/routes/util/lazyLoad'
import { LayoutIndex } from '@/routes/constant'
import { RouteObject } from '@/routes/interface'

// dashboard 模块
const dashboardRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: 'Dashboard'
		},
		children: [
			{
				path: '/dashboard/dataVisualize',
				element: lazyLoad(React.lazy(() => import('@/views/dashboard/dataVisualize/index'))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: '数据可视化',
					key: 'dataVisualize'
				}
			},
			{
				path: '/dashboard/embedded',
				element: lazyLoad(React.lazy(() => import('@/views/dashboard/embedded/index'))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: '内嵌页面',
					key: 'embedded'
				}
			}
		]
	}
]

export default dashboardRouter
