import { Paper } from '@mui/material';
import styled from 'styled-components';

export const FrontPageStyles = {
  Root: styled.div`
    position: absolute;
  `,
  Paper: styled(Paper)`
    border-radius: 12px;
    width: 600px;
    padding: 20px 32px;
    text-align: center;
    &.MuiPaper-root {
      border-radius: 12px;
    }
  `,
  Section: styled.div`
    margin: 32px 0;
  `
};
