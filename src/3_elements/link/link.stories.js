import React from 'react';
import Link from './link';
import page from './link.readme.mdx';

export default {
  title: 'Elements|Link',
  parameters: {
    docs: {
      page,
    },
    component: Link,
  },
};

export const Default = () => (
  <Link to="http://ninja-ui.github.io" href="http://ninja-ui.github.io">
    Lorem ipsum...
  </Link>
);