import { RouteObject } from '../interface'
import { LayoutIndex } from '../constant'
import Home from '@/views/home'

const homeRouter: RouteObject[] = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: '/home/index',
				element: <Home />
			}
		]
	}
]

export default homeRouter
