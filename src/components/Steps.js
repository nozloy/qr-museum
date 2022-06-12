import React from 'react'
import { useBuildingStore } from '../data/stores/BuildingStore.tsx'
import { Link } from 'react-router-dom'

const Steps = () => {
	const buildings = useBuildingStore((state) => state.buildings)
	let completed = buildings.filter(
		(building) => building.isVisited === true && building.type === 'place'
	)
	let summary = buildings.filter((building) => building.type === 'place')
	return (
		<section className='text-gray-600 body-font'>
			<div className='text-2xl mb-5 font-bold neo mx-5 p-3 rounded-xl'>
				Ваш прогресс: {completed.length}/{summary.length}
			</div>
			<div className='container px-5 py-4 mx-auto flex flex-wrap'>
				<div className='flex flex-wrap w-full justify-center'>
					<div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6'>
						{buildings.map((building, i, arr) => {
							return (
								<div key={building.captionName}>
									<div className='flex relative pb-12'>
										<div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
											{arr.length - 1 === i ? (
												<div></div>
											) : (
												<div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
											)}
										</div>
										<div
											className={`flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative ${
												building.isVisited
													? building.type === 'place'
														? 'bg-green-300'
														: 'bg-yellow-300'
													: 'bg-slate-400'
											}`}
										>
											{' '}
											{(building.type === 'prize') & !building.isVisited ? (
												<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75 -z-10'></span>
											) : (
												''
											)}
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='1'
												className='w-5 h-5'
												viewBox='0 0 24 24'
											>
												{building.type === 'place' ? (
													building.isVisited ? (
														<path
															strokeWidth='2'
															d='M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'
														></path>
													) : (
														<path
															fill='currentColor'
															d='M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z'
														></path>
													)
												) : (
													<path
														fill='currentColor'
														d='M9 10A3.04 3.04 0 0 1 12 7A3.04 3.04 0 0 1 15 10A3.04 3.04 0 0 1 12 13A3.04 3.04 0 0 1 9 10M12 19L16 20V16.92A7.54 7.54 0 0 1 12 18A7.54 7.54 0 0 1 8 16.92V20M12 4A5.78 5.78 0 0 0 7.76 5.74A5.78 5.78 0 0 0 6 10A5.78 5.78 0 0 0 7.76 14.23A5.78 5.78 0 0 0 12 16A5.78 5.78 0 0 0 16.24 14.23A5.78 5.78 0 0 0 18 10A5.78 5.78 0 0 0 16.24 5.74A5.78 5.78 0 0 0 12 4M20 10A8.04 8.04 0 0 1 19.43 12.8A7.84 7.84 0 0 1 18 15.28V23L12 21L6 23V15.28A7.9 7.9 0 0 1 4 10A7.68 7.68 0 0 1 6.33 4.36A7.73 7.73 0 0 1 12 2A7.73 7.73 0 0 1 17.67 4.36A7.68 7.68 0 0 1 20 10Z'
													></path>
												)}
											</svg>
										</div>
										<div className=' pl-4'>
											<Link key={building.captionName} to={building.routerLink}>
												<button
													className='font-medium title-font text-xl text-slate-600 mb-1 mt-1 tracking-wider disabled:text-slate-500'
													disabled={!building.isVisited}
												>
													{building.captionName}
												</button>
											</Link>
											{/* <p className='leading-relaxed'>
                                            Additinal description
											</p> */}
										</div>
									</div>
								</div>
								/* <Link key={building.captionName} to={building.routerLink}>
									<button
										className='subpixel-antialiased text-xl font-medium text-slate-600 w-5/6 border-2 m-2 p-1 mx-auto rounded-xl neo disabled:bg-gray-200 disabled:text-slate-500'
										disabled={!building.isVisited}
									>
										{building.captionName}
									</button>
								</Link> */
							)
						})}
						{/* <div className='flex relative'>
							<div className='flex-shrink-0 w-10 h-10 rounded-full bg-red-400 inline-flex items-center justify-center text-white relative z-10'>
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-5 h-5'
									viewBox='0 0 24 24'
								>
									<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
								</svg>
							</div>
							<div className='flex-grow pl-4'>
								<h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
									FINISH
								</h2>
								<p className='leading-relaxed'>
									This is the end, you know Lady, the plans we had went all
									wrong We ain't nothing but fight and shout and tears.
								</p>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Steps
