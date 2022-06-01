import React from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const ReaderB = () => {
	const location = useLocation()
	const title = location.state ? location.state.title : ''
	const description = location.state ? location.state.text : ''
	console.log(location)
	return (
		<motion.div
			initial={{ opacity: '0', x: 500 }}
			animate={{ opacity: '1', x: 0 }}
			exit={{ opacity: '1', x: 500, transition: { duration: '0.5' } }}
		>
			<div className='flex flex-col justify-center m-4 rounded-xl neo'>
				<h1 className='font-bold m-5 text-2xl'>{title}</h1>
				<div className='m-3 p-3'>{description}</div>
			</div>
		</motion.div>
	)
}

export default ReaderB
