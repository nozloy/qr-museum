import React from 'react'
import { motion } from 'framer-motion'
import Steps from './Steps'

const Buildings = () => {
	const defanimation = {
		initial: {
			opacity: 0,
			x: 500,
			zIndex: -1,
		},
		animate: (custom) => ({
			opacity: 1,
			x: 0,
			zIndex: -1,
			transition: {
				type: 'spring',
				ease: 'easeOut',
				damping: '17',
				duration: '1',
				delay: custom * 0.2,
			},
		}),
		exit: { opacity: 0, x: 500, transition: { duration: '0.5' } },
	}
	return (
		<div className='w-screen'>
			{/* <motion.div
				variants={defanimation}
				initial='initial'
				animate='animate'
				exit='exit'
				custom={1}
			>
				<Achievment />
			</motion.div> */}
			<motion.div
				variants={defanimation}
				initial='initial'
				animate='animate'
				exit='exit'
				className=' -z-10 flex flex-col justify-center'
				custom={2}
			>
				<Steps />
			</motion.div>
			{/* <motion.div
				variants={defanimation}
				initial='initial'
				animate='animate'
				exit='exit'
				custom={3}
				className='flex justify-center m-4 rounded-xl neo overflow-hidden'
			>
				<Maps />
			</motion.div> */}
		</div>
	)
}

export default Buildings
