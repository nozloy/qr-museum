import React from 'react'
import { BsFillPlayCircleFill, BsBook } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Buttons = () => {
	return (
		<div className='flex justify-center'>
			<div className='bg-white rounded-lg border border-gray-200 text-gray-900 mx-5 mb-5 w-72'>
				<Link to='/mediaplayer'>
					<button className='buttonA'>
						Послушать
						<BsFillPlayCircleFill className='ml-2 text-2xl' />
					</button>
				</Link>
				<Link to='/reader'>
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
