import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Building from './Building'
import MediaPlayer from './MediaPlayer'
import ReaderB from './ReaderB'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
	const location = useLocation()

	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Building />} />
				<Route path='/mediaplayer' element={<MediaPlayer />} />
				<Route path='/reader' element={<ReaderB />} />
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
