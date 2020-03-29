import React from 'react';
import ThemeProvider from '../src/1_settings/themeProvider/themeProvider';

export default function ProviderTheme({ theme, children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}