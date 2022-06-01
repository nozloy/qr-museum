import React from 'react'
import { LocalStore } from '../data/stores/LocalStore.tsx'
import { Link } from 'react-router-dom'
import { useBuildingStore } from '../data/stores/BuildingStore.tsx'

const Home = () => {
	const [resetVisited] = useBuildingStore((state) => [state.resetVisited])
	const [setNotVisited] = LocalStore((state) => [state.setNotVisited])
	return (
		<div className='flex flex-col justify-center m-4 p-10 rounded-xl neo'>
			<h1 className='text-2xl font-bold'>Сервисное меню</h1>
			<button
				onClick={() => setNotVisited(true)}
				className='w-full rounded-xl neo border-2 mx-auto mt-10 p-2'
			>
				Сбросить посещение сайта
			</button>
			<button
				onClick={() => resetVisited()}
				className='w-full rounded-xl neo border-2 mx-auto mt-10 p-2'
			>
				Сбросить посещение зданий
			</button>
			<Link to={{ pathname: '/buildings' }}>
				<button className='w-full rounded-xl neo border-2 mx-auto mt-10 p-2'>
					Список зданий
				</button>
			</Link>
		</div>
	)
}

export default Home
