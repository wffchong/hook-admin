import { useEffect } from 'react'
// import { useDispatch, useSelector } from '../../store'
import { useSelector, useAppDispatch } from '../../store/hooks'

import { setToken } from '../../store/modules/global'
import './index.less'

const Login: React.FC = () => {
	const dispatch = useAppDispatch()
	// const { token } = useSelector(state => state)

	useEffect(() => {
		console.log(dispatch(setToken))
		dispatch(setToken('456'))
	}, [dispatch])
	return <div className='login-container'>{123}</div>
}

export default Login
