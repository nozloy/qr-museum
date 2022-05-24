import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowLeft } from 'react-icons/bs'
import logo from '../assets/img/Logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
	const navigate = useNavigate()
	return (
		<div className='pt-5'>
			<div className='flex justify-between '>
				<motion.div
					initial={{ x: -500 }}
					animate={{ x: 0 }}
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
					initial={{ x: 500 }}
					animate={{ x: 0 }}
					exit={{ x: 500 }}
					transition={{ delay: 0.5, type: 'spring', ease: 'easeOut' }}
				>
					<div className=' w-12 h-12 mr-4 rounded-xl pt-2 neo'>
						<img className='w-10 mx-auto' src={logo} alt='logo'></img>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default Navbar
