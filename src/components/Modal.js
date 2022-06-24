import React from 'react'
import Backdrop from '../layouts/layout/Backdrop.jsx'
import { motion } from 'framer-motion'

const Modal = ({ handleClose }) => {
	return (
		<Backdrop
			// doubled this prop, cause there are some bug with backdrop-blur and bg-color
			className='backdrop-blur-sm bg-slate-900/25'
			onClick={handleClose}
		>
			<motion.dialog
				initial={{ y: -900, zIndex: 20 }}
				animate={{ y: 0 }}
				exit={{ y: -900, transition: { duration: 0.5 } }}
				transition={{
					delay: 0.8,
					type: 'spring',
					ease: 'easeOut',
				}}
				open
				id='first-visit-dialog'
				className='inset-x-5 my-auto mx-5 px-3 py-3 bg-yellow-100 rounded-lg text-base text-yellow-700 h-min w-auto'
			>
				<strong>Приветствуем Вас в музее Казанского Кремля!</strong>
				<p className='py-2'>
					Вы нашли один из множества QR-кодов, которые помогут Вам узнать больше
					о зданиях на территории Казанского Кремля.
				</p>
				<p className='p-3'>
					Посетив все объекты, Вы получите отличные скидки и бонусы.
				</p>
				<p>
					Свой прогресс и доступные призы можно посмотреть нажав на значок
					справа-вверху.
				</p>
				{/* <button className='mx-auto flex justify-center font-bold m-3 px-3 py-2 text-md text-yellow-900 border-2 rounded-xl border-yellow-800 opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline'>
					Принять
				</button> */}
			</motion.dialog>
		</Backdrop>
	)
}

export default Modal
