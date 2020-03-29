import styled from 'styled-components';
import {
  flexbox,
  flexDirection,
  flexWrap,
  flexGrow,
  flexBasis,
  flexShrink,
} from 'styled-system';
import Box from '../../4_objects/box/box';

const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flexbox,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  flexBasis,
);

Flex.propTypes = {
  ...Box.propTypes,
  ...flexbox.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...flexGrow.propTypes,
  ...flexShrink.propTypes,
  ...flexBasis.propTypes,
};

export default Flex;