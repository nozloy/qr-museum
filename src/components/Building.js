import React from 'react'
import { motion } from 'framer-motion'
import imageplaceholder from '../assets/img/300x300.svg'
import Achievment from './Achievment'
import Buttons from './Buttons'
import { useParams } from 'react-router-dom'
import NotFound from '../components/NotFound'
import { useBuildingStore } from '../data/stores/BuildingStore.tsx'

const Building = () => {
	const { building } = useParams()
	const buildings = useBuildingStore((state) => state.buildings)
	const current = buildings.find((cur) => cur.routerLink === building)
	//console.log(buildings)
	console.log(current)
	return (
		<div>
			{current ? (
				<>
					<motion.div
						initial={{ opacity: 0, y: 1000, zIndex: -1 }}
						animate={{ opacity: 1, y: 0, zIndex: -1 }}
						exit={{ opacity: 0, x: -500, transition: { duration: '0.5' } }}
						transition={{
							delay: 0.2,
							type: 'spring',
							ease: 'easeOut',
							damping: '17',
							duration: '1',
						}}
					>
						<div className='flex justify-center m-4 rounded-xl neo'>
							<div>
								<img
									className='p-4 w-auto mx-auto rounded-3xl fill-slate-500'
									src={imageplaceholder}
									alt='image_placeholder'
								></img>
								<h1 className='m-5 text-2xl font-bold text-slate-800'>
									{current.captionName}
								</h1>

								<Buttons />
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 500, zIndex: -1 }}
						animate={{ opacity: 1, y: 0, zIndex: -1 }}
						exit={{ opacity: 0, x: -500, transition: { duration: '0.7' } }}
						transition={{
							zIndex: -1,
							delay: 0.4,
							type: 'spring',
							ease: 'easeOut',
							damping: '18',
							duration: '1',
						}}
					>
						<Achievment />
					</motion.div>
				</>
			) : (
				<NotFound />
			)}
		</div>
	)
}

export default Building
