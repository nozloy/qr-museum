import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

const Maps = () => {
	return (
		<div className='w-screen h-screen max-h-96'>
			<YMaps>
				<Map
					defaultState={{
						center: [55.796129, 49.106408],
						zoom: 16,
					}}
					options={{
						suppressMapOpenBlock: true,

						yandexMapDisablePoiInteractivity: true,
						minZoom: 15,
						maxZoom: 18,
					}}
					className='flex justify-center px-1 mx-auto h-full rounded-xl'
				>
					<Placemark geometry={[55.796129, 49.106408]} />
				</Map>
			</YMaps>
		</div>
	)
}

export default Maps
