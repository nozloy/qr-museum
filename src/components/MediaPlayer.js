import React from 'react'
import { motion } from 'framer-motion'

function MediaPlayer() {
	return (
		<div>
			<motion.div
				initial={{ opacity: '0', x: 500 }}
				animate={{ opacity: '1', x: 0 }}
				exit={{ opacity: '1', x: 500, transition: { duration: '0.5' } }}
			>
				MediaPlayer
			</motion.div>
		</div>
	)
}

export default MediaPlayer
