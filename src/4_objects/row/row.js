  
import React from 'react';
import Box from '../box/box';

const Row = ({ children, ...props }) => (
  <Box display="flex" flexDirection="row" flexWrap="wrap" {...props}>
    {children}
  </Box>
);

export default Row;