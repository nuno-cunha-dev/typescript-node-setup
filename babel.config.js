module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './config',
        '@controllers': './src/controllers',
        '@services': './src/services',
      },
    }],
  ],
  ignore: [
    'tests/**/*',
  ],
};
