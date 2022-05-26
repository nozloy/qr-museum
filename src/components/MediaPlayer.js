import React from 'react'
import { motion } from 'framer-motion'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import audiofile from '../assets/audio/SoundHelix-Song-1.mp3'

function MediaPlayer() {
	return (
		<div>
			<motion.div
				className='w-auto mx-5 p-5 neo rounded-lg text-xl'
				initial={{ opacity: '0', x: 500 }}
				animate={{ opacity: '1', x: 0, transition: { delay: 0.1 } }}
				exit={{ opacity: '1', x: 500, transition: { duration: 0.5 } }}
			>
				Список
			</motion.div>
			<motion.div
				className='absolute inset-x-0 bottom-0'
				initial={{ opacity: '0', x: 500 }}
				animate={{ opacity: '1', x: 0, transition: { delay: 0.2 } }}
				exit={{ opacity: '1', x: 500, transition: { duration: '0.5' } }}
			>
				<AudioPlayer src={audiofile} onPlay={(e) => console.log('onPlay')} />
			</motion.div>
		</div>
	)
}

export default MediaPlayer
