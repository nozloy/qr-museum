import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Backdrop = ({ children, onClick }) => {
	return (
		<div>
			<motion.div
				initial={{ opacity: 0, zIndex: 10 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
				//exit={{ opacity: 0 }}
				className='absolute flex justify-center items-center h-screen w-screen top-0 left-0 bg-white'
				onClick={onClick}
			>
				{children}
			</motion.div>
		</div>
	)
}

export default Backdrop
