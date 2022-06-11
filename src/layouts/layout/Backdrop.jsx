import React from 'react'
import { motion } from 'framer-motion'

const Backdrop = ({ children, onClick }) => {
	return (
		<motion.div
			initial={{ opacity: 0, zIndex: 10 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
			//exit={{ opacity: 0 }}
			className='bg-slate-900/25 backdrop-blur-sm absolute flex justify-center items-center h-screen w-screen top-0 left-0'
			onClick={onClick}
		>
			{children}
		</motion.div>
	)
}

export default Backdrop
