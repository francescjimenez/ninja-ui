import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box/box';

const BoxWithFullScreen = ({ children, ...rest }) => (
  <Box mx="auto" {...rest}>
    {children}
  </Box>
);
const BoxWithoutFullScreen = ({ children, ...rest }) => (
  <Box mx="auto" maxWidth={['48em', '60em', '75em']} {...rest}>
    {children}
  </Box>
);

const Container = ({ children, fullscreen, ...rest }) =>
  fullscreen ? (
    <BoxWithFullScreen {...rest}>{children}</BoxWithFullScreen>
  ) : (
    <BoxWithoutFullScreen {...rest}>{children}</BoxWithoutFullScreen>
  );

Container.defaultProps = {
  fullscreen: false,
};

Container.propTypes = {
  children: PropTypes.object,
  fullscreen: PropTypes.bool,
};

export default Container;