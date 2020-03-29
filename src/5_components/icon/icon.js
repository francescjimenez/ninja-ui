import React from 'react';
import PropTypes from 'prop-types';

import BaseIcon from '../../2_generic/baseIcon/baseIcon';

import Arrow from './icons/arrow';

const names = {
  arrow: Arrow,
};

export default function Icon({ name, ...rest }) {
  const Comp = names[name];

  return (
    <BaseIcon {...rest}>
      <Comp {...rest} />
    </BaseIcon>
  );
}

Icon.propTypes = {
  name: PropTypes.oneOf(['arrow']).isRequired,
};