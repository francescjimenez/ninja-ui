import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box/box';

const Column = ({ children, ...props }) => (
  <Box
    display="flex"
    flexDirection="column"
    flexBasis="0"
    flexGrow="1"
    {...props}
  >
    {children}
  </Box>
);

Column.propTypes = {
  children: PropTypes.object,
};

export default Column;