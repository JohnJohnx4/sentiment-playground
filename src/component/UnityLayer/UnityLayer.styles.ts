import styled from 'styled-components';

export const UnityStyles = {
  Root: styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    .unity-canvas {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 640px) {
    }
  `
};
