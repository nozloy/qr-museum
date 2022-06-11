import React from 'react'
import { useBuildingStore } from '../data/stores/BuildingStore.tsx'

const Achievment = () => {
	const buildings = useBuildingStore((state) => state.buildings)
	let summary = 0
	summary = buildings.filter((building) => building.isVisited === true)
	const completed = Math.round((summary.length / buildings.length) * 100)
	return (
		<div>
			<div className='m-5 text-xl font-bold text-slate-400'>Ваш прогресс:</div>
			<div className='w-content bg-gray-200 rounded-full mx-5 mb-10 neo'>
				<div
					className='bg-green-500 font-medium text-xl text-white text-center p-1.5 leading-none rounded-full neo'
					style={{ width: completed + '%' }}
				>
					{completed}%
				</div>
			</div>
			{/* <button className='mx-auto p-2 rounded-xl bg-gradient-to-r from-red-400 to-red-700 text-white w-36 uppercase hover:neo transition-all focus:ring-0 focus:outline-none focus:shadow-md focus:from-red-500 focus:to-red-800 hover:focus:from-red-600 hover:to-red-900'>
				<div className='text-md font-semibold'>Мои награды</div>
			</button> */}
		</div>
	)
}

export default Achievment
