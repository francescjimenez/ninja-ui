import React from 'react';
import page from './spinner.readme.mdx';
import Spinner from './spinner';

export default {
  title: 'Components|Spinner',
  parameters: {
    docs: {
      page,
    },
    component: Spinner,
  },
};

export const Default = () => <Spinner />;