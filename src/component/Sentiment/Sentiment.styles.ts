import { Paper } from '@mui/material';
import styled from 'styled-components';

export const SentimentStyles = {
  Root: styled.div`
    position: absolute;
    margin: 16px;
    right: 0px;
    z-index: 9999;
    @media (max-width: 640px) {
      bottom: 64px;
    }
  `,
  Paper: styled(Paper)`
    border-radius: 12px;
    width: 500px;
    padding: 12px 16px 8px;
    text-align: center;
    &.MuiPaper-root {
      border-radius: 12px;
      background-color: #e0c79f;
      border: 4px solid #a6aa62;
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
