import { Button, Form, Input, message } from 'antd'
import { CloseCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Login } from '@/api/interface'
import { loginApi } from '@/api/modules/login'
import md5 from 'js-md5'
import { useDispatch } from '@/store'
import { setToken } from '@/store/modules/global'

const LoginForm: React.FC = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()

	// 获取form实例
	const [form] = Form.useForm()
	const [loading, setLoading] = useState<boolean>(false)

	const onFinish = async (loginForm: Login.ReqLoginForm) => {
		try {
			setLoading(true)
			loginForm.password = md5(loginForm.password)
			const { data } = await loginApi(loginForm)
			dispatch(setToken(data!.access_token))
			message.success('登录成功！')
			// navigate(HOME_URL)
		} finally {
			setLoading(false)
		}
	}

	const onFinishFailed = () => {}

	return (
		<Form
			form={form}
			name='basic'
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size='large'
			autoComplete='off'
		>
			<Form.Item name='username' rules={[{ required: true, message: '请输入用户名' }]}>
				<Input placeholder='用户名：admin / user' prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name='password' rules={[{ required: true, message: '请输入密码' }]}>
				<Input.Password autoComplete='new-password' placeholder='密码：123456' prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className='login-btn'>
				<Button
					onClick={() => {
						form.resetFields()
					}}
					icon={<CloseCircleOutlined />}
				>
					{t('login.reset')}
				</Button>
				<Button type='primary' htmlType='submit' loading={loading} icon={<UserOutlined />}>
					{t('login.confirm')}
				</Button>
			</Form.Item>
		</Form>
	)
}

export default LoginForm
