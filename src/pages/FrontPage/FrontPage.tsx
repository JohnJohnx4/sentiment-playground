import { useState } from 'react';
import { UnityContext } from 'react-unity-webgl';
import { Button } from '@mui/material';
import { FrontPageStyles } from './FrontPage.styles';
import Sentiment from 'component/Sentiment';
import UnityLayer from 'component/UnityLayer';

const unityContext = new UnityContext({
  loaderUrl: process.env.PUBLIC_URL + '/unity/Dreamscape.loader.js',
  dataUrl: process.env.PUBLIC_URL + '/unity/Dreamscape.data',
  frameworkUrl: process.env.PUBLIC_URL + '/unity/Dreamscape.framework.js',
  codeUrl: process.env.PUBLIC_URL + '/unity/Dreamscape.wasm',
});

const posAnims = [
  'triggerWin',
  'triggerStretchSway',
  'triggerTwitchStretch',
  'triggerHop',
  'triggerBigJump',
];
const negAnims = [
  'triggerBigSigh',
  'triggerKnockDown',
  'triggerHeadShake',
  'triggerDamaged',
  'triggerSpinKick',
];

const sendPlayAnimation = (animation: string) => {
  /*
    Positive Animations
    Win - triggerWin
    StretchSway - triggerStretchSway
    TwitchStretch - triggerTwitchStretch
    Hop - triggerHop
    BigJump - triggerBigJump

    Negative Animations
    BigSigh - triggerBigSigh
    KnockDown - triggerKnockDown
    HeadShake - triggerHeadShake
    Damaged - triggerDamaged
    SpinKick - triggerSpinKick
  */

  unityContext.send('UnityChan', 'PlayAnimation', animation);
};

const DebugAnimationMenu = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        justifyContent: 'space-evenly',
        zIndex: 999999,
      }}
    >
      <Button
        variant='contained'
        onClick={() => sendPlayAnimation('triggerWin')}
      >
        Win
      </Button>
      <Button
        variant='contained'
        onClick={() => sendPlayAnimation('triggerStretchSway')}
      >
        StretchSway
      </Button>
      <Button
        variant='contained'
        onClick={() => sendPlayAnimation('triggerTwitchStretch')}
      >
        TwitchStretch
      </Button>
      <Button
        variant='contained'
        onClick={() => sendPlayAnimation('triggerHop')}
      >
        Hop
      </Button>
      <Button
        variant='contained'
        onClick={() => sendPlayAnimation('triggerBigJump')}
      >
        BigJump
      </Button>
      <Button
        variant='contained'
        onClick={() => sendPlayAnimation('triggerBigSigh')}
      >
        BigSigh
      </Button>
      <Button
        variant='contained'
        onClick={() => sendPlayAnimation('triggerKnockDown')}
      >
        KnockDown
      </Button>
      <Button
        variant='contained'
        onClick={() => sendPlayAnimation('triggerHeadShake')}
      >
        HeadShake
      </Button>
      <Button
        variant='contained'
        onClick={() => sendPlayAnimation('triggerDamaged')}
      >
        Damaged
      </Button>
      <Button
        variant='contained'
        onClick={() => sendPlayAnimation('triggerSpinKick')}
      >
        SpinKick
      </Button>
    </div>
  );
};

const ApplicationControl = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [progression, setProgression] = useState<number>(0);

  const handleOnUnityProgress = (progression: number) => {
    console.log('setting progress', progression);
    setProgression(progression);
  };

  const handleOnUnityLoaded = () => {
    console.log('unity is loaded');
    setIsLoaded(true);
  };

  return (
    <FrontPageStyles.Root>
      {/* <DebugAnimationMenu /> */}
      <Sentiment
        sendPlayAnimation={sendPlayAnimation}
        animations={{ posAnims, negAnims }}
      />
      <UnityLayer
        unityContext={unityContext}
        isLoaded={isLoaded}
        handleOnUnityProgress={handleOnUnityProgress}
        progression={progression}
        handleOnUnityLoaded={handleOnUnityLoaded}
        sendPlayAnimation={sendPlayAnimation}
      />
    </FrontPageStyles.Root>
  );
};

export default ApplicationControl;
