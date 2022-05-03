import { useEffect } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import { UnityStyles } from './UnityLayer.styles';

// const unityContext = new UnityContext({
//   loaderUrl: process.env.PUBLIC_URL + '/unity/comp/Dreamscape.loader.js',
//   dataUrl: process.env.PUBLIC_URL + '/unity/comp/Dreamscape.data.gz',
//   frameworkUrl: process.env.PUBLIC_URL + '/unity/comp/Dreamscape.framework.js.gz',
//   codeUrl: process.env.PUBLIC_URL + '/unity/comp/Dreamscape.wasm.gz',
// });
const unityContext = new UnityContext({
  loaderUrl: process.env.PUBLIC_URL + '/unity/Dreamscape.loader.js',
  dataUrl: process.env.PUBLIC_URL + '/unity/Dreamscape.data',
  frameworkUrl: process.env.PUBLIC_URL + '/unity/Dreamscape.framework.js',
  codeUrl: process.env.PUBLIC_URL + '/unity/Dreamscape.wasm',
});

const UnityLayer = () => {
  // The app's state.
  // const [isLoaded, setIsLoaded] = useState<boolean>(false);
  // const [progression, setProgression] = useState<number>(0);

  // When the component is mounted, we'll register some event listener.
  useEffect(() => {
    unityContext.on('canvas', handleOnUnityCanvas);
    // unityContext.on('progress', handleOnUnityProgress);
    // unityContext.on('loaded', handleOnUnityLoaded);
    // When the component is unmounted, we'll unregister the event listener.
    return function () {
      unityContext.removeAllEventListeners();
    };
  }, []);

  // Built-in event invoked when the Unity canvas is ready to be interacted with.
  function handleOnUnityCanvas(canvas: HTMLCanvasElement) {
    console.log('Unity Loaded');
    canvas.setAttribute('role', 'unityCanvas');
  }

  // Built-in event invoked when the Unity app's progress has changed.
  // function handleOnUnityProgress(progression: number) {
  //   setProgression(progression);
  // }

  // Built-in event invoked when the Unity app is loaded.
  // function handleOnUnityLoaded() {
  //   setIsLoaded(true);
  // }

  // This is the React component that will be rendering the Unity app.
  return (
    <UnityStyles.Root className='wrapper'>
      <Unity className='unity-canvas' unityContext={unityContext} />
    </UnityStyles.Root>
  );
};

export default UnityLayer;
