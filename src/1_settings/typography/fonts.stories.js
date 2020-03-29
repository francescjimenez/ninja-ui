import React from 'react';
import { Box, Text } from '../..';

export default {
  title: 'Base Styles|Font settings',
};

export const fontSizes = () => (
  <Box>
    <Text fontSize={0}>FontSize=0</Text>
    <Text fontSize={1}>FontSize=1</Text>
    <Text fontSize={2}>FontSize=2</Text>
    <Text fontSize={3}>FontSize=3</Text>
    <Text fontSize={4}>FontSize=4</Text>
    <Text fontSize={5}>FontSize=5</Text>
    <Text fontSize={6}>FontSize=6</Text>
    <Text fontSize={7}>FontSize=7</Text>
    <Text fontSize={8}>FontSize=8</Text>
  </Box>
);

const TextDemo = props => <Text fontSize={4} {...props} />;

/*
export const fontWeights = () => (
  <Box>
    <TextDemo fontWeight="body">body</TextDemo>
    <TextDemo fontWeight="heading">heading</TextDemo>
    <TextDemo fontWeight="bold">bold</TextDemo>
  </Box>
);

export const lineHeights = () => (
  <Box>
    <TextDemo lineHeight="body">body (1.5)</TextDemo>
    <TextDemo lineHeight="heading">heading (1.25)</TextDemo>
  </Box>
);

const TextShadow = ({ children, ...rest }) => (
  <Text as="h2" {...rest}>
    {children}
  </Text>
);

export const textShadows = () => (
  <Box>
    <TextShadow textShadow="heading">
      heading (0 2px 4px hsla(0, 0%, 0%, 0.25))
    </TextShadow>
  </Box>
);
*/