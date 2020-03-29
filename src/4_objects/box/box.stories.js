import React from 'react';
import Box from './box';
import page from './box.readme.mdx';

export default {
  title: 'Objects|Box',
  parameters: {
    docs: {
      page,
    },
    component: Box,
  },
};

export const Default = () => <Box bg="light.3" width={100} height={100} />;