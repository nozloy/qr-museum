import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'
import Navbar from './components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from './components/Modal'
import { LocalStore } from './data/stores/LocalStore.tsx'

function App() {
	const [notVisited, setNotVisited] = LocalStore((state) => [
		state.notVisited,
		state.setNotVisited,
	])
	return (
		<div className='App'>
			<div className='w-screen h-screen'>
				<motion.div
					initial={{ opacity: 0, zIndex: 20 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<AnimatePresence onExitComplete>
						{notVisited && <Modal handleClose={() => setNotVisited(false)} />}
					</AnimatePresence>
				</motion.div>

				<Router>
					<Navbar />
					<AnimatedRoutes />
				</Router>
			</div>
		</div>
	)
}

export default App
