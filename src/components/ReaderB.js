import React from 'react'
import { motion } from 'framer-motion'
import AboutB from './AboutB'

const ReaderB = () => {
	return (
		<motion.div
			className=' h-screen overflow-y-scroll'
			initial={{ opacity: '0', x: 500 }}
			animate={{ opacity: '1', x: 0 }}
			exit={{ opacity: '1', x: 500, transition: { duration: '0.5' } }}
		>
			<div className='flex justify-center m-4 rounded-xl neo'>
				<AboutB />
			</div>
		</motion.div>
	)
}

export default ReaderB
