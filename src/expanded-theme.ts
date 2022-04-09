import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    lightGrey: Palette['primary'];
    darkGrey: Palette['primary'];
    white: Palette['primary'];
    blue: Palette['primary'];
    lightBlue: Palette['primary'];
    fontBlack: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    lightGrey: PaletteOptions['primary'];
    darkGrey: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    lightBlue: PaletteOptions['primary'];
    fontBlack: PaletteOptions['primary'];
  }
  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
  interface ButtonPropsVariantOverrides {
    subtle: true;
  }
}