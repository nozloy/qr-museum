import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'

export default function Model({ modelPath, scale }) {
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
			scale={scale}
			position={[0, -10, 2]}
			rotation={[Math.PI / 0.1, 4, 0]}
			castShadow={true}
		>
			<primitive object={scene} />
			{/* <pointLight position={[0, 8, 0]} color='#FF5D55' /> */}
			<OrbitControls
				makeDefault
				minAzimuthAngle={Math.PI / 0.5}
				maxAzimuthAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 4}
				maxPolarAngle={Math.PI / 3}
				// minPolarAngle={Math.PI / 10}
				// maxPolarAngle={Math.PI}
				enableZoom={false}
				enablePan={false}
				zoomSpeed={1}
			/>
		</group>
	)
}

useGLTF.preload('/test.gltf')
