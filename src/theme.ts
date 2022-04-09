import { createTheme } from '@mui/material/styles';

const SECONDARY_BLUE = '#94A6E8';
const GREY = '#777E91';
const FONT_BLACK = '#1F1F1F';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    h1: {
      color: FONT_BLACK,
      fontFamily: 'Poppins',
      fontSize: '26px',
      fontWeight: 600,
      letterSpacing: '0.07px',
      lineHeight: '39px'
    },
    h2: {
      color: FONT_BLACK,
      fontFamily: 'Poppins',
      fontSize: '22px',
      fontWeight: 600,
      letterSpacing: '0.07px',
      lineHeight: '39px'
    },
    h3: {
      color: FONT_BLACK,
      fontFamily: 'Poppins',
      fontSize: '18px',
      fontWeight: 500,
      letterSpacing: '0',
      lineHeight: '27px'
    },
    h4: {
      color: FONT_BLACK,
      fontFamily: 'Poppins',
      fontSize: '14px',
      fontWeight: 600,
      letterSpacing: '0.07px',
      lineHeight: '20px'
    },
    h5: {
      color: SECONDARY_BLUE,
      fontFamily: 'Poppins',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.07px',
      lineHeight: '18px'
    },
    h6: {
      color: FONT_BLACK,
      fontFamily: 'Poppins',
      fontSize: '10px',
      letterSpacing: '0.07px',
      lineHeight: '14px'
    },
    subtitle1: {
      color: GREY,
      fontFamily: 'Poppins',
      fontSize: '14px',
      fontWeight: 500,
      letterSpacing: '0.04px',
      lineHeight: '21px'
    }
  }
});

export default theme;
