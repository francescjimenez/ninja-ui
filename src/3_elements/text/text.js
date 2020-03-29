import styled from 'styled-components';
import {
  space,
  typography,
  color,
  shadow,
  fontSize,
  textAlign,
} from 'styled-system';

const Text = styled('p')(color, fontSize);

Text.propTypes = {
  ...fontSize.propTypes,
  ...space.propTypes,
  ...typography.propTypes,
  ...color.propTypes,
  ...shadow.propTypes,
  ...textAlign.propTypes,
};

Text.defaultProps = {
  color: 'dark.4',
};

export default Text;