
import React from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import stTheme from "./theme";
import ProviderTheme from "./providerTheme";

addDecorator(withA11y);
addDecorator(story => <ProviderTheme>{story()}</ProviderTheme>);

// Option defaults.
addParameters({
  options: {
    theme: stTheme
  }
});

// automatically import all files ending in *.stories.js
configure([require.context("../src", true, /\.stories\.(js|mdx)$/)], module);