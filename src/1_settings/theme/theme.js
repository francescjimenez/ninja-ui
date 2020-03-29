import defaultColors from '../colors/colors';

const colors = {
  ...defaultColors,
  text: defaultColors.dark[4],
  heading: defaultColors.dark[6],
  background: '#fff',
  primary: defaultColors.blue[5],
  secondary: defaultColors.yellow[4],
  muted: defaultColors.light[4],
};

const spaces = [0, 4, 8, 16, 24, 32, 64, 128, 256];

const ThemeBase = {
  space: spaces,
  spaceTop: spaces,
  spaceBottom: spaces,
  spaceLeft: spaces,
  spaceRight: spaces,
  fonts: {
    body: "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif",
    heading: "Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif",
    monospace: "Menlo, 'Roboto Mono', Consolas, Monaco, monospace",
  },
  breakpoints: ['48em', '60em', '75em'],
  fontSizes: [
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '30px',
    '40px',
    '48px',
  ],
  lineHeights: [
    '12px',
    '20px',
    '24px',
    '26px',
    '28px',
    '32px',
    '40px',
    '52px',
    '60px',
  ],
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 600,
  },
  radii: [0, 2, 4],
  colors,
  shadows: {
    small: '0 2px 4px hsla(0, 0%, 0%, 0.25)',
  },
};

export default ThemeBase;