import logo from '@/assets/images/logo.png'
import { useSelector } from '@/store'

const Logo: React.FC = () => {
	const { isCollapse } = useSelector(state => state.menu)

	return (
		<div className='logo-box'>
			<img src={logo} alt='logo' className='logo-img' />
			{!isCollapse ? <h2 className='logo-text'>Hooks Admin</h2> : null}
		</div>
	)
}

export default Logo
