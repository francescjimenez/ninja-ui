import styled from 'styled-components';
import {
  space,
  width,
  color,
  layout,
  background,
  position,
  borderRadius,
  shadow,
  border,
  display,
  flex,
  flexDirection,
  flexWrap,
  flexGrow,
  flexBasis,
} from 'styled-system';

const Box = styled('div')(
  space,
  width,
  color,
  layout,
  background,
  position,
  borderRadius,
  shadow,
  border,
  display,
  flex,
  flexDirection,
  flexWrap,
  flexGrow,
  flexBasis,
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
);

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...layout.propTypes,
  ...background.propTypes,
  ...position.propTypes,
  ...borderRadius.propTypes,
  ...shadow.propTypes,
  ...display.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...flexGrow.propTypes,
  ...flexBasis.propTypes,
};

export default Box;