import { useSelector } from '@/store'
import { searchRoute } from '@/utils/util'
import { useLocation } from 'react-router'
import { routerArray } from '@/routes'

/**
 * @description 页面按钮权限 hooks
 * */
const useAuthButtons = () => {
	const { authButtons } = useSelector(state => state.auth)
	const { pathname } = useLocation()
	const route = searchRoute(pathname, routerArray)

	return {
		BUTTONS: authButtons[route.meta!.key!] || {}
	}
}
export default useAuthButtons
