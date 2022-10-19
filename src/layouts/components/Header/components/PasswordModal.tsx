import { useState, useImperativeHandle, Ref } from 'react'
import { Modal, message } from 'antd'

interface PropsType {
	innerRef: Ref<{ showModal: (params: any) => void }>
}

const PasswordModal: React.FC<PropsType> = ({ innerRef }) => {
	const [isModalVisible, setIsModalVisible] = useState(false)

	useImperativeHandle(innerRef, () => ({
		showModal
	}))

	const showModal = (params: { name: number }) => {
		console.log(params)
		setIsModalVisible(true)
	}

	const handleOk = () => {
		setIsModalVisible(false)
		message.success('修改密码成功 🎉🎉🎉')
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}
	return (
		<Modal title='修改密码' open={isModalVisible} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
			<p>Some Password...</p>
			<p>Some Password...</p>
			<p>Some Password...</p>
		</Modal>
	)
}
export default PasswordModal
