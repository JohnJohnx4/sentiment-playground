import { VRM } from '@pixiv/three-vrm';
import { useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const useVrm = () => {
  const { current: loader } = useRef(new GLTFLoader());
  const [vrm, setVrm] = useState<VRM | null>(null);

  const loadVrm = (url: string) => {
    loader.load(url, async (gltf: any) => {
      const vrm = await VRM.from(gltf);
      vrm.scene.rotation.y = Math.PI;
      setVrm(vrm);
    });
  };
  return { vrm, loadVrm };
};
