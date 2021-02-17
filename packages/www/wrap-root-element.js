// basic usage
const React = require('react');
const { ThemeProvider } = require('theme-ui');
const { deep } = require("@theme-ui/presets");

const tokens = { // basically adds size param to tokens
    ...deep, // JS spread passes all elements of deep into tokens
    sizes: { container: 1024 }
};

module.exports = ({ element }) => (
  <ThemeProvider theme={tokens}>{element}</ThemeProvider>
);