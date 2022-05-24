import React from 'react'
import { motion } from 'framer-motion'
import suumbike from '../assets/img/suumbike.jpg'
import Achievment from './Achievment'
import Buttons from './Buttons'

const Building = () => {
	return (
		<div>
			<motion.div
				initial={{ opacity: '0', y: 1000 }}
				animate={{ opacity: '1', y: 0 }}
				exit={{ opacity: '1', x: -500, transition: { duration: '0.5' } }}
				transition={{
					delay: 0.2,
					type: 'spring',
					ease: 'easeOut',
					damping: '17',
					duration: '1',
				}}
			>
				<div className='flex justify-center m-4 rounded-xl neo'>
					<div>
						<img
							className='p-4 w-auto rounded-3xl'
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
				exit={{ x: -500, transition: { duration: '0.7' } }}
				transition={{
					delay: 0.4,
					type: 'spring',
					ease: 'easeOut',
					damping: '18',
					duration: '1',
				}}
			>
				<Achievment />
			</motion.div>
		</div>
	)
}

export default Building
