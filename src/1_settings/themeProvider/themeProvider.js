import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import defaultTheme from '../theme/theme';

const Style = createGlobalStyle`
  * { box-sizing: border-box; }
  html {
    font-size: 100%;
    font-family: 'Lato','Helvetica Neue',Arial,sans-serif;
    color: #FF6600
  }
  body{ margin:0; }
`;

const Root = styled.div`
  font-family: system-ui, sans-serif;
  line-height: 1.5;
`;

// eslint-disable-next-line react/prop-types
export default ({ theme = defaultTheme, children }) => (
  <ThemeProvider theme={theme}>
    <Style />
    <Root>{children}</Root>
  </ThemeProvider>
);