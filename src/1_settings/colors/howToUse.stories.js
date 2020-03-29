  
import React from 'react';
import colors from './colors';

import { Box, Text } from '../..';

export default {
  title: 'Base Styles | Colors | How to use',
  parameters: {},
};

export const UseInBox = () => (
  <Box background={colors.blue[5]} width={100} height={100} borderRadius={2} />
);

export const UseInText = () => (
  <Text color={colors.yellow[2]}>Lorem ipsum...</Text>
);