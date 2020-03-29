/* eslint-disable react/prop-types */
import React from 'react';
import page from './colors.readme.mdx';

import { Box, Text } from '../..';
import Flex from '../../2_generic/flex/flex';
import colors from './colors';

export default {
  title: 'Base Styles | Colors | All',
  parameters: {
    docs: {
      page,
    },
  },
};

const ColorGrid = ({ color, ...rest }) => (
  <Flex flexWrap="wrap" {...rest}>
    <Box width={100} p={2}>
      <Text p={0} fontSize={3} fontWeight="bold">
        {color}
      </Text>
    </Box>
    {colors[color].map((item, value) => (
      <ColorCard
        key={item}
        name={`${color}.${value}`}
        value={colors[color][value]}
      />
    ))}
  </Flex>
);

const NamesGrid = ({ color, ...rest }) => (
  <Flex flexWrap="wrap" {...rest}>
    <Box p={2} width={100}>
      <Text p={0} fontSize={3} fontWeight="bold">
        Color
      </Text>
    </Box>
    {colors[color].map((item, value) => (
      <Box p={2} width={100}>
        <Text width={100} fontWeight="bold">
          {value}
        </Text>
      </Box>
    ))}
  </Flex>
);

const copyToClipBoard = value => {
  alert(value);
};

const ColorCard = ({ name, value }) => (
  <Box p={0.5}>
    <Box
      title={name}
      background={value}
      width={100}
      height={100}
      borderRadius={2}
      onClick={() => copyToClipBoard(value)}
    />
  </Box>
);

export const All = () => (
  <Box>
    <NamesGrid color="light" />
    <ColorGrid color="light" />
    <ColorGrid color="dark" />
    <Box p={3} />
    <NamesGrid color="light" />
    <ColorGrid color="yellow" />
    <ColorGrid color="red" />
    <ColorGrid color="orange" />
    <ColorGrid color="green" />
    <ColorGrid color="blue" />
    <ColorGrid color="purple" />
  </Box>
);