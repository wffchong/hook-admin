import { HashRouter } from 'react-router-dom'
import Router from '@/routes'

function App() {
	return (
		<div className='App'>
			<HashRouter>
				<Router></Router>
			</HashRouter>
		</div>
	)
}

export default App
