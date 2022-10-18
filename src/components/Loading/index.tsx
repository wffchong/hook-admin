import { Spin } from 'antd'
import './index.less'

interface PropsType {
	tip: string
}

const Loading: React.FC<PropsType> = ({ tip }) => {
	return <Spin tip={tip} size='large' className='request-loading' />
}

export default Loading
