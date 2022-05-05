import React, { useCallback, useState } from 'react';
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Typography,
  // Accordion,
  // AccordionDetails,
  // AccordionSummary,
} from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SentimentStyles } from './Sentiment.styles';
import Sentiment from 'sentiment';
import SendIcon from '@mui/icons-material/Send';

const Header = () => (
  <SentimentStyles.Section>
    <Typography variant='h3' sx={{ color: '#3a3b3e' }}>
      Sentiment Analysis
    </Typography>
    <Typography variant='subtitle1' sx={{ color: '#3a3b3e' }}>
      Type in a phrase to analyze the tone and sentiment
    </Typography>
  </SentimentStyles.Section>
);

// const ScoreItem: React.FC<{ text: string; score: number }> = ({
//   text,
//   score,
// }) => {
//   return (
//     <div>
//       <Typography variant='h5' textAlign={'left'}>
//         Score: {score} Text: {text}
//       </Typography>
//     </div>
//   );
// };

interface Props {
  sendPlayAnimation: (animation: string) => void;
  animations: { posAnims: string[]; negAnims: string[] };
}

const SentimentDialogue: React.FC<Props> = ({
  sendPlayAnimation,
  animations,
}) => {
  const defaultSentiment = {
    score: 0,
    comparative: 0,
    calculation: [],
    tokens: [],
    words: [],
    positive: [],
    negative: [],
  };

  const [userInput, setUserInput] = useState('');
  const [overallScore, setOverallScore] = useState(0);

  const [currentSentiment, setCurrentSentiment] =
    useState<Sentiment.AnalysisResult>(defaultSentiment);

  const [, setSentimentTracker] = useState<{ score: number; text: string }[]>(
    []
  );

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (5 - 1 + 1) + 1);
  };

  const triggerPositiveAnimation = useCallback(() => {
    const animIndex = generateRandomNumber();
    console.log('triggering ');
    sendPlayAnimation(animations.posAnims[animIndex]);
  }, [animations.posAnims, sendPlayAnimation]);

  const triggerNegativeAnimation = useCallback(() => {
    const animIndex = generateRandomNumber();
    sendPlayAnimation(animations.negAnims[animIndex]);
  }, [animations.negAnims, sendPlayAnimation]);

  const handleUserInput = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setUserInput(target.value);
    },
    []
  );

  const handleUserSentiment = useCallback(() => {
    const sentiment = new Sentiment();
    const sentimentObj = sentiment.analyze(userInput);

    setCurrentSentiment(() => {
      setOverallScore((prev) => prev + sentimentObj.score);
      setSentimentTracker((prev) => [
        ...prev,
        { score: sentimentObj.score, text: userInput },
      ]);

      if (sentimentObj.score > 0) {
        triggerPositiveAnimation();
      } else if (sentimentObj.score < 0) {
        triggerNegativeAnimation();
      }

      setUserInput('');
      return sentimentObj;
    });
  }, [userInput, triggerPositiveAnimation, triggerNegativeAnimation]);

  return (
    <SentimentStyles.Root id='sentiment-root'>
      <SentimentStyles.Paper elevation={3}>
        <Header />

        <SentimentStyles.FormSection>
          <FormControl sx={{ m: 1 }} fullWidth variant='standard'>
            <Input
              sx={{ m: 1, height: '52px' }}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleUserSentiment}
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              }
              value={userInput}
              onChange={handleUserInput}
            />
          </FormControl>
        </SentimentStyles.FormSection>

        <SentimentStyles.Section>
          {currentSentiment.tokens.length > 0 ? (
            <Typography variant='h5'>
              {'Analysis: '}
              {currentSentiment.score === 0
                ? 'You sound neutral'
                : currentSentiment.score > 0
                ? 'You sound pretty nice'
                : 'You sound kind of mean'}
            </Typography>
          ) : (
            <Typography variant='h5' sx={{ color: '#b1863e' }}>
              {userInput ? 'Press submit' : 'Type something'}
            </Typography>
          )}
          <Typography
            variant='h6'
            color={
              currentSentiment.score === 0
                ? '#b1863e'
                : currentSentiment.score > 0
                ? 'green'
                : 'red'
            }
          >
            Overall Score: {overallScore}
          </Typography>
        </SentimentStyles.Section>
        {/* <SentimentStyles.Section>
          {sentimentTracker.length > 0 && (
            <Accordion elevation={0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h4'>See History</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {sentimentTracker.map(
                  (sentimentData: { text: string; score: number }) => (
                    <ScoreItem {...sentimentData} />
                  )
                )}
              </AccordionDetails>
            </Accordion>
          )}
        </SentimentStyles.Section> */}
      </SentimentStyles.Paper>
    </SentimentStyles.Root>
  );
};

export default SentimentDialogue;
