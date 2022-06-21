import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'

export default function Model(props) {
	const group = useRef()
	const { scene, nodes } = useGLTF('/syuyumbike.glb')
	useLayoutEffect(() =>
		Object.values(nodes).forEach(
			(node) => (node.receiveShadow = node.castShadow = true)
		)
	)
	return (
		<group
			ref={group}
			{...props}
			dispose={null}
			scale={1}
			position={[0, -20, 0]}
			rotation={[Math.PI / -75, -0.5, 0]}
			castShadow={true}
		>
			<primitive object={scene} {...props} />
			<OrbitControls
				makeDefault
				//minAzimuthAngle={0}
				//maxAzimuthAngle={Math.PI}
				minPolarAngle={Math.PI / 4}
				maxPolarAngle={Math.PI / 3}
				enableZoom={false}
				enablePan={false}
				zoomSpeed={0.3}
			/>
		</group>
	)
}

useGLTF.preload('/syuyumbike.glb')
