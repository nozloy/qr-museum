import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowLeft } from 'react-icons/bs'
import logo from '../assets/img/Logo.png'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = () => {
	const navigate = useNavigate()
	return (
		<div className='pt-5 pb-5'>
			<div className='flex justify-between '>
				<motion.div
					initial={{ x: -500, zIndex: -1 }}
					animate={{ x: 0, zIndex: 1 }}
					exit={{ x: window.innerWidth }}
					transition={{ delay: 0.8, type: 'spring', ease: 'easeOut' }}
				>
					<button
						onClick={() => navigate(-1)}
						className=' w-12 h-12 ml-4 rounded-xl p-3 text-2xl neo'
					>
						<BsArrowLeft className='text-slate-800' />
					</button>
				</motion.div>
				<motion.div
					initial={{ x: 500, zIndex: -1 }}
					animate={{ x: 0, zIndex: 1 }}
					exit={{ x: 500 }}
					transition={{ delay: 0.5, type: 'spring', ease: 'easeOut' }}
				>
					<Link to={{ pathname: '/buildings' }}>
						<button className=' w-12 h-12 mr-4 rounded-xl neo'>
							<img className='w-10 mx-auto' src={logo} alt='logo'></img>
						</button>
					</Link>
				</motion.div>
			</div>
		</div>
	)
}

export default Navbar
