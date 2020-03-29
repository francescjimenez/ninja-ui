import styled from 'styled-components';
import css from '@styled-system/css';
import Box from '../../4_objects/box/box';

const sizes = {
  small: 16,
  medium: 24,
  large: 40,
};

const BaseIcon = styled(Box)(({ size = 'medium', fill = 'dark' }) =>
  css({
    width: sizes[size],
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.25s ease transform',
    svg: {
      objectFit: 'contain',
      fill,
    },
  }),
);

export default BaseIcon;