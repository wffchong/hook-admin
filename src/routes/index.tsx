import { Navigate, useRoutes } from 'react-router-dom'
import type { RouteObject } from './interface'
import Login from '../views/login'

// 导入所有的路由
const metaRouters = import.meta.globEager('./modules/*.tsx')

// 处理路由
export const routerArray: RouteObject[] = []

// 添加路由信息
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach(key => {
		routerArray.push(...metaRouters[item][key])
	})
})

export const rootRouter: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to='/login' />
	},
	{
		path: '/login',
		element: <Login />
	},
	...routerArray,
	{
		path: '*',
		element: <Navigate to='/404' />
	}
]

const router = () => {
	const routes = useRoutes(rootRouter)
	return routes
}

export default router
