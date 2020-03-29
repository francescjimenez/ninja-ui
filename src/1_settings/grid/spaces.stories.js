import React from 'react';
import { Box, Text } from '../..';
import Flex from '../../2_generic/flex/flex';
import page from './spaces.readme.mdx';

// TODO https://bold.bridge.ufsc.br/en/design-guidelines/grid

export default {
  title: 'Base Styles|Space settings',
  parameters: {
    docs: {
      page,
    },
  },
};

const SpaceDemo = ({ children, ...rest }) => (
  <Box m={2} bg="light.3" {...rest}>
    <Text fontSize={1}>{children}</Text>
  </Box>
);

export const spaces = () => (
  <Box>
    <SpaceDemo p={0}>0 (0px)</SpaceDemo>
    <SpaceDemo p={1}>1 (4px)</SpaceDemo>
    <SpaceDemo p={2}>2 (8px)</SpaceDemo>
    <SpaceDemo p={3}>3 (16px)</SpaceDemo>
    <SpaceDemo p={4}>4 (32px)</SpaceDemo>
    <SpaceDemo p={5}>5 (64px)</SpaceDemo>
    <SpaceDemo p={6}>6 (128px)</SpaceDemo>
    <SpaceDemo p={7}>7 (256px)</SpaceDemo>
  </Box>
);

spaces.story = {
  parameters: { notes: 'margin and padding values' },
};

const BRDemo = props => (
  <Flex
    flex={1}
    alignItems="center"
    height={100}
    bg="dark.1"
    p={4}
    m={2}
    {...props}
  >
    <Text fontSize={1}>{props.children}</Text>
  </Flex>
);

export const borderRadius = () => (
  <Flex>
    <BRDemo borderRadius={0}>0 (0px)</BRDemo>
    <BRDemo borderRadius={1}>1 (2px)</BRDemo>
    <BRDemo borderRadius={2}>2 (4px)</BRDemo>
  </Flex>
);

const BoxShadow = ({ children, ...rest }) => (
  <Box bg="light.1" {...rest}>
    {children}
  </Box>
);

export const boxShadows = () => (
  <Box>
    <BoxShadow boxShadow="small" p={4}>
      small ()
    </BoxShadow>
  </Box>
);