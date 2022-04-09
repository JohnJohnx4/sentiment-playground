import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useVrm } from 'hooks';
import * as THREE from 'three';
import LocalGLTFModel from 'assets/models/three-vrm-girl.vrm';

const ThreeCanvas: React.FC = () => {
  // const { aspect } = useThree()
  const { current: camera } = useRef(
    new THREE.PerspectiveCamera(30, 1, 0.01, 20)
  );

  const { vrm, loadVrm } = useVrm();

  useEffect(() => {
    loadVrm(LocalGLTFModel);
  }, [loadVrm]);
  
  useEffect(() => {
    if (!vrm || !vrm.lookAt) return;
    camera.position.set(0, 1.2, 2)
    vrm.lookAt.target = camera;
  }, [camera, vrm]);

  return (
    <div id='canvas-container' style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={camera}>
        <ambientLight intensity={0.1} />
        <directionalLight  position={[0, 0, 5]} />
        {vrm && <primitive object={vrm.scene} />}
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
