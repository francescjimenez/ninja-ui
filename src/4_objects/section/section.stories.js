import React from 'react';
import Section from './section';
import page from './section.readme.mdx';

export default {
  title: 'Objects|Section',
  parameters: {
    docs: {
      page,
    },
    component: Section,
  },
};

export const Default = () => <Section bg="light.3">Section tag</Section>;

export const BackgroundImage = () => (
  <Section bg="light.3">Section tag</Section>
);