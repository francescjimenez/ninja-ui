import React from 'react';
import { text } from '@storybook/addon-knobs';
import { H1, H2, H3, H4 } from '../..';
import page from './headings.readme.mdx';

export default {
  title: 'Elements|Headings',
  parameters: {
    docs: {
      page,
    },
    component: H1,
  },
};

export const Base = () => <H1>{text('Label', 'Heading', 'HEADING_GROUP')}</H1>;

export const sizes = () => (
  <div>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
  </div>
);

export const withLink = () => (
  <div>
    <H1 id="heading-1">Heading with link</H1>
  </div>
);

export const colors = () => (
  <div>
    <H1>Default Heading</H1>
    <H1 color="white" textShadow="heading">
      Default Heading
    </H1>
  </div>
);

export const alignment = () => (
  <div>
    <H3 align="left">Heading Left Align</H3>
    <H3 align="center">Heading Center Align</H3>
    <H3 align="right">Heading Right Align</H3>
  </div>
);