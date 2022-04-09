import { Paper } from '@mui/material';
import styled from 'styled-components';

export const SentimentStyles = {
  Root: styled.div`
    position: absolute;
    margin: 16px;
    z-index: 9999;
  `,
  Paper: styled(Paper)`
    border-radius: 12px;
    width: 560px;
    padding: 20px 32px;
    text-align: center;
    &.MuiPaper-root {
      border-radius: 12px;
    }
  `,
  Section: styled.div`
    margin: 16px auto;
  `
};
