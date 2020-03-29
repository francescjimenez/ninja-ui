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
} from 'styled-system';

const Section = styled('section')(
  {
    padding: '45px 0 45px 0',
  },
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
);

Section.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...layout.propTypes,
  ...background.propTypes,
  ...position.propTypes,
  ...borderRadius.propTypes,
  ...shadow.propTypes,
  ...display.propTypes,
};

export default Section;