import { Button } from 'antd'
import { getAuthorButtons } from '@/api/modules/login'

const dataScreen: React.FC = () => {
	const requestMenuList = async () => {
		const res = await getAuthorButtons()
		console.log(res)
	}
	return (
		<Button type='primary' onClick={requestMenuList}>
			发起网络请求
		</Button>
	)
}

export default dataScreen
