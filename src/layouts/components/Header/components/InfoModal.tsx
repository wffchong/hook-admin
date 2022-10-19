import { useState, useImperativeHandle, Ref } from 'react'
import { Modal, message } from 'antd'

interface PropsType {
	innerRef: Ref<{ showModal: (params: any) => void } | undefined>
}

const InfoModal: React.FC<PropsType> = ({ innerRef }) => {
	const [modalVisible, setModalVisible] = useState(false)

	// 暴露给父组件方法，第一个参数传绑定的ref值
	useImperativeHandle(innerRef, () => ({
		showModal
	}))

	const showModal = (params: { name: number }) => {
		console.log(params)
		setModalVisible(true)
	}

	const handleOk = () => {
		setModalVisible(false)
		message.success('修改用户信息成功 🎉🎉🎉')
	}

	const handleCancel = () => {
		setModalVisible(false)
	}
	return (
		<Modal title='个人信息' open={modalVisible} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
			<p>User Info...</p>
			<p>User Info...</p>
			<p>User Info...</p>
		</Modal>
	)
}
export default InfoModal
