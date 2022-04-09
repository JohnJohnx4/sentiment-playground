import React, { useCallback, useState } from 'react';
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from '@mui/material';
import { SentimentStyles } from './Sentiment.styles';
import Sentiment from 'sentiment';
import SendIcon from '@mui/icons-material/Send';

const Header = () => (
  <SentimentStyles.Section>
    <Typography variant='h2'>Basic Sentiment Analysis</Typography>
    <Typography variant='subtitle1'>
      Type in a phrase to analyze the tone and sentiment
    </Typography>
  </SentimentStyles.Section>
);

const Footer = () => {
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

  const [sentimentTracker, setSentimentTracker] = useState<
    { score: number; text: string }[]
  >([]);

  const handleUserInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(target.value);
  };

  const handleUserSentiment = useCallback(() => {
    const sentiment = new Sentiment();
    const sentimentObj = sentiment.analyze(userInput);

    setCurrentSentiment(() => {
      setOverallScore((prev) => prev + sentimentObj.score);
      setSentimentTracker((prev) => [
        ...prev,
        { score: sentimentObj.score, text: userInput },
      ]);
      setUserInput('');
      return sentimentObj;
    });
  }, [userInput]);

  return (
    <SentimentStyles.Root>
      <SentimentStyles.Paper elevation={3}>
        <Header />

        <SentimentStyles.Section style={{ width: '70%', margin: 'auto' }}>
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
              multiline
              value={userInput}
              onChange={handleUserInput}
            />
          </FormControl>
        </SentimentStyles.Section>

        <SentimentStyles.Section>
          {currentSentiment.tokens.length > 0 ? (
            <Typography variant='h4'>
              {'Analysis: '}
              {currentSentiment.score === 0
                ? 'You sound neutral'
                : currentSentiment.score > 0
                ? 'You sound pretty nice'
                : 'You sound kind of mean'}
            </Typography>
          ) : (
            <Typography variant='h4'>
              {userInput ? 'Press submit' : 'Type something'}
            </Typography>
          )}
          <Typography
            variant='h5'
            color={
              currentSentiment.score === 0
                ? '#959595'
                : currentSentiment.score > 0
                ? 'green'
                : 'red'
            }
          >
            Overall Score: {overallScore}
          </Typography>
        </SentimentStyles.Section>
      </SentimentStyles.Paper>
    </SentimentStyles.Root>
  );
};

export default Footer;
