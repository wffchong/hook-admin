import ReactDOM from 'react-dom/client'
import '@/styles/reset.less'
import '@/assets/iconfont/iconfont.less'
import 'antd/dist/antd.less'
import '@/styles/common.less'
import '@/language/index'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
)
