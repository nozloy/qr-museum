import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'
import Navbar from './components/Navbar'

function App() {
	return (
		<div className='App'>
			<div className='w-full h-full'>
				<Router>
					<Navbar />
					<AnimatedRoutes />
				</Router>
			</div>
		</div>
	)
}

export default App
