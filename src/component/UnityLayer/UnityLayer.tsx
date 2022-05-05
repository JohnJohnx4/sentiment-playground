import React, { useCallback, useEffect } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import { UnityStyles } from './UnityLayer.styles';

interface Props {
  unityContext: UnityContext;
  sendPlayAnimation: (animation: string) => void;
  isLoaded: boolean;
  handleOnUnityProgress: (progression: number) => void;
  progression: number;
  handleOnUnityLoaded: () => void;
}

const UnityLayer: React.FC<Props> = ({
  unityContext,
  sendPlayAnimation,
  isLoaded,
  handleOnUnityProgress,
  progression,
  handleOnUnityLoaded,
}) => {
  const handleOnUnityCanvas = useCallback((canvas: HTMLCanvasElement) => {
    canvas.setAttribute('role', 'unityCanvas');
  }, []);
  useEffect(() => {
    unityContext.on('canvas', handleOnUnityCanvas);
    unityContext.on('progress', handleOnUnityProgress);
    unityContext.on('loaded', handleOnUnityLoaded);
    // When the component is unmounted, we'll unregister the event listener.
    return function () {
      unityContext.removeAllEventListeners();
    };
  }, [
    unityContext,
    handleOnUnityLoaded,
    handleOnUnityCanvas,
    handleOnUnityProgress,
  ]);

  return (
    <UnityStyles.Root className='wrapper'>
      <Unity className='unity-canvas' unityContext={unityContext} />
    </UnityStyles.Root>
  );
};

export default UnityLayer;
