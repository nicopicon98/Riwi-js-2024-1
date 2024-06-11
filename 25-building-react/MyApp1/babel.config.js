module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        esmodules: true,
      },
    }],
  ],
  plugins: [
    ['@babel/plugin-transform-react-jsx', {
      pragma: 'createElement', // Use createElement instead of React.createElement
    }],
  ],
};
