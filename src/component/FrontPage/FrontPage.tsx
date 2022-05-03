import { FrontPageStyles } from './FrontPage.styles';
import Sentiment from 'component/Sentiment';
import UnityLayer from 'component/UnityLayer';

const Footer = () => {
  return (
    <FrontPageStyles.Root>
      <Sentiment />
      <UnityLayer />
    </FrontPageStyles.Root>
  );
};

export default Footer;
