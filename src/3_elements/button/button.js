/* eslint react/button-has-type: 0 */
// TODO: (horacio) refactor!
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from '@styled-system/css';
import { width, variant, fontSize, color, display } from 'styled-system';
import Flex from '../../2_generic/flex/flex';

const StyledButton = styled('Button')(
  props =>
    css({
      bg: 'blue.5',
      color: 'white',
      border: 'none',
      fontWeight: 'bold',
      transition: '.25s ease',
      transitionProperty: 'background, color, box-shadow',
      cursor: 'pointer',
      outlineOffset: -2,
      overflow: 'hidden',
      display: props.block ? 'block' : 'inline-block',
      width: props.block ? '100%' : 'auto',
      textDecoration: 'none',
      borderRadius: props.rounded ? 80 : props.theme.radii[2],
    }),
  variant({
    variants: {
      white: {
        bg: 'white',
        color: 'dark.4',
        boxShadow: theme => `0 3px 0 0 ${theme.colors.light[4]}`,
        '&:focus': {
          outline: 'none',
        },
      },
      link: {
        bg: 'white',
        color: 'dark.4',
        boxShadow: theme => `0 3px 0 0 ${theme.colors.light[4]}`,
        '&:hover, &:active': {
          color: 'blue.4',
        },
        '&:focus': {
          outline: 'none',
        },
      },
      green: {
        bg: 'green.4',
        boxShadow: theme => `0 3px 0 0 ${theme.colors.green[6]}`,
        '&:hover, &:active': {
          bg: 'green.5',
        },
        '&:focus': {
          outline: 'none',
        },
      },
      blue: {
        bg: 'blue.5',
        boxShadow: theme => `0 3px 0 0 ${theme.colors.blue[6]}`,
        '&:hover, &:active': {
          bg: 'blue.6',
        },
        '&:focus': {
          outline: 'none',
        },
      },
      darkblue: {
        bg: 'blue.7',
        boxShadow: theme => `0 3px 0 0 ${theme.colors.blue[8]}`,
        '&:hover, &:active': {
          bg: 'blue.8',
        },
        '&:focus': {
          outline: 'none',
        },
      },
      secondary: {
        bg: 'secondary',
        boxShadow: theme => `0 3px 0 0 ${theme.colors.orange[4]}`,
        color: 'dark.4',
        '&:hover, &:active': {
          bg: 'orange.4',
        },
        '&:focus': {
          outline: 'none',
        },
      },
    },
  }),
  variant({
    prop: 'size',
    variants: {
      small: {
        py: 2,
        px: 3,
        fontSize: 2,
      },
      medium: {
        py: 2,
        px: 3,
        fontSize: 3,
      },
      large: {
        py: 3,
        px: 4,
        fontSize: 5,
      },
    },
  }),
  props =>
    !props.highlighted && {
      boxShadow: 'none',
    },
  fontSize,
  color,
  display,
);

const ButtonContent = styled(Flex)(
  props =>
    css({
      alignItems: 'center',
      flexShrink: 'none',
      justifyContent: props.highlighted
        ? 'center'
        : props.justifyContent || 'inherit',
      '> *:not(:first-child)': {
        ml: 2,
      },
    }),
  width,
);

const Button = ({
  // eslint-disable-next-line no-shadow
  variant = 'blue',
  size = 'medium',
  as = 'button',
  highlighted = false,
  rounded = false,
  block = false,
  children,
  mx = 1,
  py,
  contentStyles,
  ...rest
}) => (
  <StyledButton
    as={as}
    mx={mx}
    variant={variant}
    size={size}
    highlighted={highlighted}
    rounded={rounded}
    py={py}
    block={block}
    {...rest}
  >
    <ButtonContent highlighted={highlighted} {...contentStyles}>
      {children}
    </ButtonContent>
  </StyledButton>
);

Button.propTypes = {
  // function which the button will execute on click
  onClick: PropTypes.func.isRequired,
  // function which the button will execute on hover
  onHover: PropTypes.func,
  // function which the button will execute on focus
  onFocus: PropTypes.func,
  // the background color of the button
  variant: PropTypes.oneOf(['blue', 'darkblue', 'green', 'white']),
  // the size (padding and fontsize) of the button
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  // if the button has a bottom border or not
  highlighted: PropTypes.bool,
  // if the button expands to the container's width (display block)
  block: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'blue',
  size: 'medium',
  highlighted: false,
};

export default Button;