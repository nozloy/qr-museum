import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import logo from '../assets/img/Logo.png'
import { motion } from 'framer-motion'
import suumbike from '../assets/img/suumbike.jpg'
import Achievment from './Achievment'
import Buttons from './Buttons'

const Building = () => {
	return (
		<div>
			<div className='flex justify-between '>
				<motion.div
					initial={{ x: -500 }}
					animate={{ x: 0 }}
					transition={{ delay: 0.4, type: 'spring', ease: 'easeOut' }}
				>
					<button className='w-12 h-12 ml-4 rounded-xl p-3 text-2xl neo'>
						<BsArrowLeft className='text-slate-800' />
					</button>
				</motion.div>
				<motion.div
					initial={{ x: 500 }}
					animate={{ x: 0 }}
					transition={{ delay: 0.5, type: 'spring', ease: 'easeOut' }}
				>
					<div className=' w-12 h-12 mr-4 rounded-xl pt-2 neo'>
						<img className='w-10 mx-auto' src={logo} alt='logo'></img>
					</div>
				</motion.div>
			</div>
			<motion.div
				initial={{ y: 1000 }}
				animate={{ y: 0 }}
				transition={{
					delay: 0.3,
					type: 'spring',
					ease: 'easeOut',
					damping: '12',
				}}
			>
				<div className='flex justify-center m-4 rounded-xl neo'>
					<div>
						<img
							className='mx-auto rounded-xl neo'
							src={suumbike}
							alt='tower'
						></img>
						<h1 className='m-5 text-2xl font-bold text-slate-800'>
							Башня Сююмбике
						</h1>

						<Buttons />
					</div>
				</div>
			</motion.div>
			<motion.div
				initial={{ y: 500 }}
				animate={{ y: 0 }}
				transition={{
					delay: 0.6,
					type: 'spring',
					ease: 'easeOut',
					damping: '18',
				}}
			>
				<Achievment />
			</motion.div>
		</div>
	)
}

export default Building
