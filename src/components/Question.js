import React from 'react'
import { useQuestionStore } from '../data/stores/QuestionsStore.tsx'
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

const Question = ({ questionId }) => {
	const [isActive, setIsActive] = React.useState(false)
	const setAnswered = useQuestionStore((state) => state.setAnswered)
	const questions = useQuestionStore((state) => state.questions)
	const current = questions.find((cur) => cur.id === questionId)
	const answers = current.answers
	const rightanswer = current.rightanswer
	const checkAnswer = () => {
		setAnswered(questionId)
		setIsActive(true)
	}
	return (
		<div className='flex flex-col justify-center m-4 rounded-xl neo'>
			<h1 className='font-bold pt-5 px-3 text-2xl'>{current.qcaption}</h1>
			<div className='flex flex-col justify-center m-4 p-10 pt-0 mt-0'>
				{answers.map((answer, i) => {
					return (
						<button
							key={i}
							onClick={i + 1 === rightanswer ? () => checkAnswer() : null}
							className={`w-full rounded-xl neo border-2 mx-auto mt-10 p-2 font-bold ${
								i + 1 === rightanswer
									? current.isAnswered
										? 'bg-green-300 text-white'
										: 'text-slate-700'
									: 'text-slate-700'
							} `}
						>
							{answer}
							<Confetti
								className='flex justify-center'
								active={isActive}
								config={config}
							/>
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default Question
