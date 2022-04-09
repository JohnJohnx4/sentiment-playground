import React from 'react';
import { FrontPageStyles } from './FrontPage.styles';
import Sentiment from 'component/Sentiment';
import ThreeCanvas from 'component/ThreeCanvas';

const Footer = () => {
  return (
    <FrontPageStyles.Root>
      <Sentiment />
      <ThreeCanvas />
    </FrontPageStyles.Root>
  );
};

export default Footer;
