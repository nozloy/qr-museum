import React from 'react'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import Building from './Building'
import ReaderB from './ReaderB'
import Home from '../pages/Home'
import Buildings from './Buildings'
import { AnimatePresence } from 'framer-motion'
import NotFound from './NotFound'

const AnimatedRoutes = () => {
	const location = useLocation()

	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Navigate to='/buildings' replace />} />
				<Route path='/home' element={<Home />} />
				<Route path='/buildings' element={<Buildings />} />
				<Route path='*' element={<NotFound />} />
				<Route path='/buildings/:building' element={<Building />} />
				<Route path='/buildings/:building/reader' element={<ReaderB />} />
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
