import { create } from "@storybook/theming";

const brandBlue = "#09afee";
const textColor = "#45423c";

export default create({
  base: "light",

  colorPrimary: "white",
  colorSecondary: brandBlue,

  // UI
  appBg: "#f7f7f7",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 0,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: textColor,
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: brandBlue,
  barBg: "white",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: textColor,
  inputBorderRadius: 4,

  brandTitle: "Ninja UI",
  brandUrl: "https://ninja-ui.github.io/",
  brandImage: "./logo.png"
});