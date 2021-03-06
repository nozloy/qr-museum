import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'

export default function Model({ modelPath }) {
	const group = useRef()
	const { scene, nodes } = useGLTF(modelPath)

	useLayoutEffect(() =>
		Object.values(nodes).forEach(
			(node) => (node.receiveShadow = node.castShadow = true)
		)
	)
	return (
		<group
			ref={group}
			dispose={null}
			scale={1}
			position={[0, -20, 0]}
			rotation={[Math.PI / -75, -0.5, 0]}
			castShadow={true}
		>
			<primitive object={scene} />
			<pointLight position={[0, 8, 0]} color='#FF5D55' />
			<OrbitControls
				makeDefault
				minAzimuthAngle={0}
				maxAzimuthAngle={Math.PI}
				minPolarAngle={Math.PI / 4}
				maxPolarAngle={Math.PI / 3}
				// minPolarAngle={Math.PI / 10}
				// maxPolarAngle={Math.PI}
				enableZoom={false}
				enablePan={false}
				zoomSpeed={0.3}
			/>
		</group>
	)
}

useGLTF.preload('/test.gltf')
