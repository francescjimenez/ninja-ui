import React from 'react';
import styled, { keyframes } from 'styled-components';
import css from '@styled-system/css';
import Box from '../../4_objects/box/box';
import Flex from '../../2_generic/flex/flex';

const loading = keyframes`
  to {
      transform: rotate(1turn)
    }
`;

const StyledSpinner = styled(Box)`
  ${css({
    height: 40,
    width: 40,
    bg: 'transparent',
    borderRadius: '50%',
    border: 'none',
    borderTop: '2px solid',
    borderTopColor: 'primary',
    borderRight: '2px solid',
    borderRightColor: 'transparent',
  })}
  animation: ${loading} .7s linear infinite;
`;

export default function Spinner() {
  return (
    <Flex alignItems="center" justifyContent="center" m={4}>
      <StyledSpinner />
    </Flex>
  );
}