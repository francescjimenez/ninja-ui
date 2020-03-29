import React from 'react';
import Text from './text';
import page from './text.readme.mdx';

export default {
  title: 'Elements|Text',
  parameters: {
    docs: {
      page,
    },
    component: Text,
  },
};

export const Default = () => <Text>Type something here</Text>;