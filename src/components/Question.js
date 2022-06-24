import React from 'react'
import { useBuildingStore } from '../data/stores/BuildingStore.tsx'
import Confetti from 'react-dom-confetti'

const config = {
	angle: 90,
	spread: 360,
	startVelocity: 40,
	elementCount: 70,
	dragFriction: 0.12,
	duration: 3000,
	stagger: 3,
	width: '10px',
	height: '10px',
	perspective: '1000px',
	colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

const Question = ({ routerLink }) => {
	const [isActive, setIsActive] = React.useState(false)
	const setVisited = useBuildingStore((state) => state.setVisited)
	const buildings = useBuildingStore((state) => state.buildings)
	const current = buildings.find((cur) => cur.routerLink === routerLink)
	const checkAnswer = (routerLink) => {
		setVisited(routerLink)
	}

	const color = current.isVisited ? 'bg-green-300 text-white' : 'text-slate-700'
	return (
		<div className='flex flex-col justify-center m-4 rounded-xl neo'>
			<h1 className='font-bold pt-5 text-2xl'>Несложный вопрос</h1>
			<div className='flex flex-col justify-center m-4 p-10 pt-0 mt-0'>
				<button
					onClick={() => {
						checkAnswer(routerLink)
						setIsActive(true)
					}}
					className={`w-full rounded-xl neo border-2 mx-auto mt-10 p-2 font-bold ${color} `}
				>
					Ответ 1
					<Confetti
						className='flex justify-center'
						active={isActive}
						config={config}
					/>
				</button>

				<button
					onClick={() => null}
					className='w-full text-slate-700 rounded-xl neo border-2 mx-auto mt-10 p-2 font-bold'
				>
					Ответ 2
				</button>

				<button className='w-full text-slate-700 rounded-xl neo border-2 mx-auto mt-10 p-2 font-bold'>
					Ответ 3
				</button>
			</div>
		</div>
	)
}

export default Question
