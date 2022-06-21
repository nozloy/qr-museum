import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model'

export default function Scene3D() {
	return (
		<div className='mt-5 h-96 w-full'>
			<Canvas
				shadows
				dpr={[1, 2]}
				camera={{ position: [0, 0, 100], near: 0.1, far: 1000, fov: 35 }}
				gl={{ alpha: true }}
			>
				<Suspense fallback={null}>
					<ambientLight intensity={0.001} />

					<spotLight
						angle={0.34}
						color='#ffd0d0'
						penumbra={1}
						position={[-25, 50, 20]}
						shadow-mapSize={[2048, 2048]}
						shadow-bias={-0.0001}
						castShadow
					/>
					<hemisphereLight
						color={'#ffd0d0'}
						groundColor={(0.095, 1, 0.75)}
						position={(0, 50, 0)}
					/>

					<Model />

					{/* <Sky
						distance={3000}
						sunPosition={[1, 1, 0]}
						inclination={0.49}
						azimuth={1}
						turbidity={10}
						Rayleigh={10}
						mieCoefficient={0.05}
						mieDirectionalG={0.75}
					/> */}
				</Suspense>
			</Canvas>
		</div>
	)
}
