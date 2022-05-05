import React, { useEffect } from 'react';
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
  // The app's state.

  function sendTriggerReaction() {
    unityContext.send('InteractionManager', 'TriggerReaction', 'test');
  }

  // When the component is mounted, we'll register some event listener.
  useEffect(() => {
    unityContext.on('canvas', handleOnUnityCanvas);
    unityContext.on('progress', handleOnUnityProgress);
    unityContext.on('loaded', handleOnUnityLoaded);
    // When the component is unmounted, we'll unregister the event listener.
    return function () {
      unityContext.removeAllEventListeners();
    };
  }, []);

  function handleOnUnityCanvas(canvas: HTMLCanvasElement) {
    console.log('Unity Loaded');
    canvas.setAttribute('role', 'unityCanvas');
  }

  return (
    <UnityStyles.Root className='wrapper'>
      <Unity className='unity-canvas' unityContext={unityContext} />
    </UnityStyles.Root>
  );
};

export default UnityLayer;
