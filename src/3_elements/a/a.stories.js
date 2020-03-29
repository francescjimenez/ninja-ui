import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import A from './a';
import page from './a.readme.mdx';

export default {
  title: 'Elements|A',
  parameters: {
    docs: {
      page,
    },
    component: A,
  },
};

export const Default = () => (
  <div>
    <A onClick={action('click')} onHover={action('hover link')}>
      {text('text', 'sample link')}
    </A>
  </div>
);