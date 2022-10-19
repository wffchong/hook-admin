import React from 'react'
import lazyLoad from '@/routes/util/lazyLoad'
import { LayoutIndex } from '@/routes/constant'
import { RouteObject } from '@/routes/interface'

// 超级表格模块
const proTableRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: '超级表格'
		},
		children: [
			{
				path: '/proTable/useHooks',
				element: lazyLoad(React.lazy(() => import('@/views/proTable/useHooks/index'))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: '使用 Hooks',
					key: 'useHooks'
				}
			},
			{
				path: '/proTable/useComponent',
				element: lazyLoad(React.lazy(() => import('@/views/proTable/useComponent/index'))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: '使用 Component',
					key: 'useComponent'
				}
			}
		]
	}
]

export default proTableRouter
