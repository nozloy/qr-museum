import React from 'react'
import Backdrop from '../layouts/layout/Backdrop.jsx'
import { motion } from 'framer-motion'

const Modal = ({ handleClose }) => {
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				initial={{ y: -900, zIndex: 20 }}
				animate={{ y: 0 }}
				exit={{ y: -900, transition: { duration: 0.5 } }}
				transition={{
					delay: 0.8,
					type: 'spring',
					ease: 'easeOut',
				}}
				className='inset-x-5 my-auto mx-5 px-3 py-3 bg-yellow-100 rounded-lg text-base text-yellow-700 h-min'
			>
				<strong>Святая корова, Вы тут в первый раз!</strong>
				<p className='py-2'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla
					enim, pharetra vitae arcu ac, semper sollicitudin tortor. Sed at
					venenatis elit. Sed vel diam vitae lectus suscipit iaculis. Duis a
					aliquam lorem. Quisque sit amet diam at libero finibus semper nec at
					urna. Aliquam in luctus lorem. Suspendisse potenti. Sed ac nibh id
					nulla porttitor blandit. Aenean mattis massa dui, a sollicitudin leo
					condimentum quis. Nam id faucibus orci. Phasellus ultricies dignissim
					accumsan. Mauris nisl orci, ornare vitae malesuada vel, porta sed
					nibh.
				</p>
				{/* <button className='mx-auto flex justify-center font-bold m-3 px-3 py-2 text-md text-yellow-900 border-2 rounded-xl border-yellow-800 opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline'>
					Принять
				</button> */}
			</motion.div>
		</Backdrop>
	)
}

export default Modal
