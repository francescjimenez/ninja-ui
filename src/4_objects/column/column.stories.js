import React from 'react';
import Column from './column';
import page from './column.readme.mdx';

export default {
  title: 'Objects|Column',
  parameters: {
    docs: {
      page,
    },
    component: Column,
  },
};

export const Default = () => <Column>Column</Column>;