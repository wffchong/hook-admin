import React from 'react'
import lazyLoad from '@/routes/util/lazyLoad'
import { LayoutIndex } from '@/routes/constant'
import { RouteObject } from '@/routes/interface'

// 常用组件模块
const assemblyRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: '常用组件'
		},
		children: [
			{
				path: '/assembly/selectIcon',
				element: lazyLoad(React.lazy(() => import('@/views/assembly/selectIcon/index'))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: 'Icon 选择',
					key: 'selectIcon'
				}
			},
			{
				path: '/assembly/batchImport',
				element: lazyLoad(React.lazy(() => import('@/views/assembly/batchImport/index'))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: '批量导入数据',
					key: 'selectIcon'
				}
			}
		]
	}
]

export default assemblyRouter
