import styled from 'styled-components';
import {
  width,
  space,
  layout,
  typography,
  fontFamily,
  fontSize,
  color,
} from 'styled-system';
import css from '@styled-system/css';
import PropTypes from 'prop-types';
import Text from '../text/text';

const A = styled(Text).attrs(() => ({
  as: 'a',
}))(
  css({
    textDecoration: 'none',
    color: 'blue.5',
    transition: '.3s ease all',
    ':hover': {
      color: 'blue.3',
      cursor: 'pointer',
    },
  }),
  typography,
  fontFamily,
  fontSize,
  color,
  layout,
  width,
  space,
);

A.propTypes = {
  /*
   * the destination of which this link will send the user to
   */
  to: PropTypes.string.isRequired,
};

export default A;