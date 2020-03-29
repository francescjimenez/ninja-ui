import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';
import Button from './button';
import page from './button.readme.mdx';

export default {
  title: 'Elements|Button',
  componentSubtitle: 'hello world',
  parameters: {
    docs: {
      page,
    },
    component: Button,
  },
  decorators: [withKnobs],
};

const Wrapper = styled('div')(
  css({
    p: 3,
    button: {
      mx: 2,
    },
  }),
);

export const withNobs = () => (
  <Wrapper>
    <Button
      variant={radios(
        'Variant',
        { blue: 'blue', darkblue: 'darkblue', green: 'green' },
        'blue',
        'BUTTON_GROUP',
      )}
      size={radios(
        'Size',
        { small: 'small', medium: 'medium', large: 'large' },
        'medium',
        'BUTTON_GROUP',
      )}
      highlighted={boolean('Highlighted', false, 'BUTTON_GROUP')}
    >
      Button
    </Button>
  </Wrapper>
);

export const Variants = () => (
  <Wrapper>
    <Button variant="blue">Blue variant</Button>
    <Button variant="darkblue">Dark Blue variant</Button>
    <Button variant="green">Green variant</Button>
  </Wrapper>
);

export const Sizes = () => (
  <Wrapper>
    <Button size="small">small</Button>
    <Button size="medium">medium</Button>
    <Button size="large">large</Button>
  </Wrapper>
);

export const Highlighted = () => (
  <Wrapper>
    <Button highlighted variant="blue">
      Highlighted blue
    </Button>
    <Button highlighted variant="darkblue">
      Highlighted Dark Blue
    </Button>
    <Button highlighted variant="green">
      HighlightedGreen
    </Button>
  </Wrapper>
);

export const Rounded = () => (
  <Wrapper>
    <Button highlighted rounded variant="blue" size="small">
      Rounded blue
    </Button>
    <Button highlighted rounded variant="darkblue" size="medium">
      Rounded Dark Blue
    </Button>
    <Button highlighted rounded variant="green" size="large">
      Rounded Green
    </Button>
  </Wrapper>
);