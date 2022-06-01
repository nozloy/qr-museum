import React from 'react'
import { Link } from 'react-router-dom'
import { useBuildingStore } from '../data/stores/BuildingStore.tsx'

const Buildings = () => {
	const buildings = useBuildingStore((state) => state.buildings)
	return (
		<div className='flex flex-col justify-center m-4 rounded-xl neo p-5'>
			{buildings.map((building) => {
				return (
					<Link key={building.captionName} to={building.routerLink}>
						<button
							className='text-slate-700 w-5/6 border-2 m-2 p-2 mx-auto rounded-xl neo disabled:bg-slate-400 disabled:text-gray-200'
							disabled={!building.isVisited}
						>
							{building.captionName}
						</button>
					</Link>
				)
			})}
		</div>
	)
}

export default Buildings
