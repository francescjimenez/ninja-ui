/* eslint-disable no-shadow */

import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { variant, shadow, fontSize, fontWeight, color } from 'styled-system';
import PropTypes from 'prop-types';
import A from '../a/a';

const BaseHeading = styled('div')(
  css({
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    m: 0,
    textAlign: 'inherit',
  }),
  variant({
    variants: {
      h1: {
        as: 'h1',
        fontSize: 7,
        fontWeight: 'bold',
        lineHeight: 7,
      },
      h2: {
        as: 'h2',
        fontWeight: 'regular',
        fontSize: 6,
        lineHeight: 6,
      },
      h3: {
        as: 'h3',
        fontWeight: 'regular',
        fontSize: 5,
        lineHeight: 5,
      },
      h4: {
        as: 'h4',
        fontWeight: 'bold',
        fontSize: 4,
        lineHeight: 4,
      },
      h5: {
        as: 'h5',
        fontWeight: 'bold',
        fontSize: 3,
        lineHeight: 3,
      },
      h6: {
        as: 'h6',
        fontWeight: 'bold',
        fontSize: 2,
        lineHeight: 2,
      },
    },
  }),
  variant({
    prop: 'color',
    // scale: "colors",
    variants: {
      primary: {
        color: 'primary',
      },
      secondary: {
        color: 'secondary',
      },
      white: {
        color: 'white',
      },
    },
  }),
  variant({
    prop: 'align',
    variants: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
  }),
  shadow,
  fontSize,
  fontWeight,
  color,
);

const Anchor = styled(A)({
  color: 'inherit',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

const heading = tag => {
  const Heading = ({
    color = 'heading',
    align = 'left',
    textShadow,
    fontWeight,
    style,
    ...rest
  }) => (
    <BaseHeading
      as={tag}
      variant={tag}
      color={color}
      align={align}
      textShadow={textShadow}
      fontWeight={fontWeight}
      style={style}
      {...rest}
    >
      {rest.id ? (
        <Anchor href={`#${rest.id}`}>{rest.children}</Anchor>
      ) : (
        rest.children
      )}
    </BaseHeading>
  );

  Heading.propTypes = {
    id: PropTypes.string,
    color: PropTypes.oneOf(['heading', 'white']),
    align: PropTypes.oneOf(['left', 'center', 'right']),
    textShadow: PropTypes.oneOf(['heading']),
    fontWeight: PropTypes.any,
    children: PropTypes.node.isRequired,
  };

  return Heading;
};

export const H1 = heading('h1');
export const H2 = heading('h2');
export const H3 = heading('h3');
export const H4 = heading('h4');
export const H5 = heading('h5');
export const H6 = heading('h6');