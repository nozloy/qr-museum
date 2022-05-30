import React from 'react'
import { LocalStore } from '../data/stores/LocalStore.tsx'

const Home = () => {
	const [setNotVisited] = LocalStore((state) => [state.setNotVisited])
	return (
		<div className='flex flex-col justify-center m-4 p-10 rounded-xl neo'>
			<button
				onClick={() => setNotVisited(true)}
				className=' rounded-xl neo border-2 mx-auto px-5 py-2'
			>
				Сбросить посещение сайта
			</button>
			<button className='rounded-xl neo border-2 mx-auto mt-10 p-2'>
				Сбросить посещение зданий
			</button>
		</div>
	)
}

export default Home
