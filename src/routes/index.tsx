import { Navigate, useRoutes } from 'react-router-dom'
import type { RouteObject } from './interface'
import Login from '../views/login'

export const rootRouter: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to='/login' />
	},
	{
		path: '/login',
		element: <Login />
	},
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
