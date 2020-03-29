/* eslint-disable react/prop-types */
import React from 'react';

import { Box, Text } from '../..';
import Flex from '../../2_generic/flex/flex';
import colors from './colors';

export default {
  title: 'Base Styles | Colors | Selection',
};

const ColorGrid = ({ color, ...rest }) => (
  <Flex flexWrap="wrap" {...rest}>
    {colors[color].map((item, index) => (
      <ColorCard key={item} name={`colors.${color}.${index}`} value={item} />
    ))}
  </Flex>
);

const ColorCard = ({ name, value }) => (
  <Box p={3} width={150}>
    <Box
      width={100}
      height={100}
      borderRadius={2}
      style={{ backgroundColor: value }}
    />
    <Text fontFamily="body" pt={1} fontSize={2} fontWeight="heading">
      {name}
    </Text>
    <Text fontSize={0} color="dark">
      {value}
    </Text>
  </Box>
);
export const Details = () => (
  <Box>
    <ColorGrid color="light" />
    <ColorGrid color="red" />
    <ColorGrid color="orange" />
    <ColorGrid color="yellow" />
    <ColorGrid color="green" />
    <ColorGrid color="blue" />
    <ColorGrid color="purple" />
    <ColorGrid color="dark" />
  </Box>
);