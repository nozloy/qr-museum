import React from 'react'
import { BsBook } from 'react-icons/bs'
import { Link } from 'react-router-dom'
// import { useBuildingStore } from '../data/stores/BuildingStore.tsx'

const Buttons = ({ title, text, routerLink }) => {
	// const setVisited = useBuildingStore((state) => state.setVisited)
	return (
		<div className='flex justify-center'>
			<div className='bg-white rounded-lg border border-gray-200 text-gray-900 mx-5 mb-5 w-72'>
				<Link
					to='reader'
					state={{ title, text, routerLink }}
					// onClick={() => setVisited(routerlink)}
				>
					<button className='buttonB flex justify-center'>
						Почитать
						<BsBook className='ml-2 text-2xl' />
					</button>
				</Link>
			</div>
		</div>
	)
}

export default Buttons
