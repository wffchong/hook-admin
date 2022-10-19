import React from 'react'
import { RouteObject } from '../interface'
import { LayoutIndex } from '../constant'
import lazyLoad from '../util/lazyLoad'

const homeRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: '/home/index',
				element: lazyLoad(React.lazy(() => import('@/views/home/index'))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: '首页',
					key: 'home'
				}
			}
		]
	}
]

export default homeRouter
