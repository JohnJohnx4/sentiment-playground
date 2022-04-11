import { Paper } from '@mui/material';
import styled from 'styled-components';

export const SentimentStyles = {
  Root: styled.div`
    position: absolute;
    margin: 16px;
    z-index: 9999;
    @media (max-width: 640px) {
      bottom: 0;
    }
  `,
  Paper: styled(Paper)`
    border-radius: 12px;
    width: 500px;
    padding: 12px 16px 8px;
    text-align: center;
    &.MuiPaper-root {
      border-radius: 12px;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  `,
  Section: styled.div`
    margin: 8px auto;
  `,
  FormSection: styled.div`
    margin: 16px auto;
    width: 70%;
    margin: auto;
    @media (max-width: 640px) {
      width: 100%;
    }
  `,
};
