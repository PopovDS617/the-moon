import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Moon = () => {
  const { scene } = useThree();

  const EnvironmentTexture = useLoader(TextureLoader, 'public/space2.jpg');
  EnvironmentTexture.encoding = THREE.sRGBEncoding;
  scene.background = EnvironmentTexture;

  const moonRef = useRef(null);
  useFrame(({}) => {
    moonRef.current.rotation.y += 0.0007;
  });
  const moonTexture = useTexture('moon.jpg');

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[16, 0, -5]}
        rotation={[0, 5, 0]}
      />
      <OrbitControls enabled={false} />
      <mesh position={[0, 0, 9]} ref={moonRef} castShadow receiveShadow>
        <sphereGeometry args={[6, 100, 100]} />
        <meshStandardMaterial color="#ffffff" map={moonTexture} />
      </mesh>

      <pointLight
        castShadow
        args={['#ffffff', 6]}
        position={[5, -5, -77]}
        penumbra={1}
        distance={100}
        decay={0.6}
      />
    </>
  );
};

export default Moon;
